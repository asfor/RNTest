import createContext from '../../utils/createContext'

export const initData = {
  recommendLoading: false,
  recommendData: []
}

export const {Provider, Consumer, context} = createContext(initData)