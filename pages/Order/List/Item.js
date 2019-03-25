import React from 'react'
import {View, Text, Image, TouchableWithoutFeedback, Animated, StyleSheet, PanResponder, Dimensions, Vibration} from 'react-native'
import {number, string, arrayOf, func} from 'prop-types'
import Icon from 'react-native-vector-icons/Feather'

import emitter from '../emitter'
import {types, status} from '../dict'

const WIN_WIDTH = Dimensions.get('window').width // 窗口宽度
const DEL_WIDTH = 70  // 删除按钮宽度
const CONFIRM_ANIMATION_TIME = 300  // 确认删除动画过渡时间
const DEL_STATUS = {  // enum{'close', 'open', 'confirm'}，对应三个状态：未展开，按钮展开，确认删除
  CLOSE: 'close',
  OPEN: 'open',
  CONFIRM: 'confirm'
}

export default class Item extends React.PureComponent {
  static propTypes = {
    type: number,
    title: string,
    status: number,
    img: number,
    index: number,
    info: arrayOf(string),
    onDel: func
  }

  state = {
    slide: new Animated.Value(0),
    delSlide: new Animated.Value(WIN_WIDTH),
    delRight: new Animated.Value(0),
    delStatus: DEL_STATUS.CLOSE,
    delStaticStatus: DEL_STATUS.CLOSE
  }

  animationTime = 0

  _panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (e, gestureState) => {
      if (this.state.delStatus === DEL_STATUS.CLOSE)
        return gestureState.dy < 10 && gestureState.dx < -10

      if (this.state.delStatus === DEL_STATUS.OPEN)
        return gestureState.dy < 10 && Math.abs(gestureState.dx) > 10

      return false
    },

    onPanResponderGrant: (e, gestureState) => emitter.emit('hasActive', this),
    onPanResponderMove: (e, gestureState) => this.onMove(e, gestureState),
    onPanResponderRelease: (e, gestureState) => {
      const {delStatus} = this.state

      if (delStatus === DEL_STATUS.CONFIRM)
        return this.onDelConfirm()

      delStatus === DEL_STATUS.OPEN
        ? this.onDelOpen()
        : this.onDelClose()
    }
  })

  render() {
    const {type, title, status: _status, img, info} = this.props
    const {slide, delSlide, delRight} = this.state

    return (
      <View {...this._panResponder.panHandlers}>
        <Animated.View style={[style.delWarp, {left: delSlide}]}>
          <TouchableWithoutFeedback onPress={this.onDel}>
            <Animated.View style={[style.delBtn, {marginRight: delRight}]}>
              <Text style={{color: '#fff'}}>删除</Text>
            </Animated.View>
          </TouchableWithoutFeedback>
        </Animated.View>

        <Animated.View style={[style.card, {transform: [{translateX: slide}]}]}>
          <View style={style.head}>
            <View style={[style.icon, {backgroundColor: types[type].color}]}>
              <Icon style={{fontSize: 10, color: '#fff'}} name={types[type].icon} />
            </View>

            <Text numberOfLines={1} style={style.title}>{title}</Text>
            <Text style={style.status}>{status[_status]}</Text>
          </View>

          <View style={{flexDirection: 'row', paddingTop: 10}}>
            <Image source={img} style={style.img} />

            <View>
              {info.map((text, i) => <Text key={i} style={style.info}>{text}</Text>)}
            </View>
          </View>
        </Animated.View>
      </View>
    )
  }

  getDelStatus = (e, gestureState) => {
    const {pageX} = e.nativeEvent
    const {dx, vx, x0} = gestureState
    const hadOpen = this.state.delStaticStatus === DEL_STATUS.OPEN

    if (pageX < 70 && (DEL_WIDTH - x0 < 100))
      return DEL_STATUS.CONFIRM

    if (dx < (hadOpen ? 0 : -DEL_WIDTH) || vx < -0.1)
      return DEL_STATUS.OPEN

    return DEL_STATUS.CLOSE
  }

  onDel = () => {
    const {onDel, index} = this.props

    console.log(this.props)
    onDel(index)
  }

  onMove = (e, gestureState) => {
    const {pageX, timestamp} = e.nativeEvent
    const delStatus = this.getDelStatus(e, gestureState)
    const hasChange = this.state.delStatus !== delStatus && (delStatus === DEL_STATUS.CONFIRM || this.state.delStatus === DEL_STATUS.CONFIRM) // confirm 状态切换
    const hasConfirm = delStatus === DEL_STATUS.CONFIRM
    const slide = hasConfirm ? pageX - WIN_WIDTH - 10 : gestureState.dx - (this.state.delStaticStatus === DEL_STATUS.OPEN ? DEL_WIDTH : 0)
    const delSlide = WIN_WIDTH + slide
    const delRight = delStatus === DEL_STATUS.CONFIRM ? (-slide) - DEL_WIDTH : 0

    let duration = hasChange ? CONFIRM_ANIMATION_TIME : 0

    if (this.animationTime) {
      const remaining = this.animationTime - timestamp

      if (remaining > 0)
        duration = remaining

      else
        this.animationTime = 0
    }

    if (hasChange)
      this.animationTime = timestamp + CONFIRM_ANIMATION_TIME

    hasChange && Vibration.vibrate()
    this.setState({delStatus})
    Animated.parallel([
      Animated.timing(this.state.slide, {toValue: slide, duration}),
      Animated.timing(this.state.delSlide, {toValue: delSlide, duration}),
      Animated.timing(this.state.delRight, {toValue: delRight, duration})
    ]).start()
  }

  onDelClose = () => {
    this.setState({delStaticStatus: DEL_STATUS.CLOSE})
    Animated.parallel([
      Animated.timing(this.state.slide, {toValue: 0, duration: 450}),
      Animated.timing(this.state.delSlide, {toValue: WIN_WIDTH, duration: 450})
    ]).start()
  }

  onDelOpen = () => {
    emitter.once('hasActive', activeObj => {
      if (activeObj !== this)
        this.onDelClose()
    })

    this.setState({delStaticStatus: DEL_STATUS.OPEN})
    Animated.parallel([
      Animated.timing(this.state.slide, {toValue: -DEL_WIDTH, duration: 450}),
      Animated.timing(this.state.delSlide, {toValue: WIN_WIDTH - DEL_WIDTH, duration: 450})
    ]).start()
  }

  onDelConfirm = () => {
    Animated.parallel([
      Animated.timing(this.state.slide, {toValue: -WIN_WIDTH, duration: 450}),
      Animated.timing(this.state.delSlide, {toValue: 0, duration: 450}),
      Animated.timing(this.state.delRight, {toValue: WIN_WIDTH - DEL_WIDTH, duration: 450})
    ]).start()

    this.onDel()
  }

  onToggleDelConfirm = () => {

  }
}

const style = StyleSheet.create({
  card: {
    flex: 1,
    marginTop: 2,
    marginBottom: 2,
    marginLeft: 13,
    marginRight: 13,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff'
  },

  head: {
    borderColor: '#eee',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10
  },

  icon: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },

  title: {
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
    fontSize: 15,
    color: '#222',
    fontWeight: 'bold'
  },

  status: {
    color: '#666',
    fontSize: 13,
    fontWeight: 'bold'
  },

  img: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 4
  },

  info: {
    fontSize: 13,
    lineHeight: 20,
    color: '#666',
  },

  delWarp: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'flex-end',
    paddingTop: 1,
    backgroundColor: 'red',
    overflow: 'hidden'
  },

  delBtn: {
    flex: 1,
    width: DEL_WIDTH,
    justifyContent: 'center',
    alignItems: 'center'
  }
})