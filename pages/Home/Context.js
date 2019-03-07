import React, {createContext} from 'react'

export const initData = {
  recommendLoading: false,
  recommendData: []
}

export const {Provider, Consumer} = createContext(initData)
export const context = Component => props => (
  <Consumer>
    {dataSource => <Component {...props} dataSource={dataSource} />}
  </Consumer>
)