import React, { cloneElement, Children } from 'react';
import { Consumer } from './context';

type props = {
  children: React.ReactNode
}

const ComponentConsumer = ({ children }: props) => (
  <Consumer>
    {(props) => {
      return (
        Children.map(children, (child: any) => (
          cloneElement(child, {
            props: props
          })
        ))
      )}
    }
  </Consumer>
)

export default ComponentConsumer
