import React, {createContext} from 'react'

export default function (initData = {}) {
  const {Provider, Consumer} = createContext(initData)
  const context = Component => props => (
    <Consumer>
      {store => <Component {...props} store={store} />}
    </Consumer>
  )

  return {Provider, Consumer, context}
}
