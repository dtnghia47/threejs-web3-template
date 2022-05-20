import React, { createContext } from 'react';

export const Context = createContext({
  props: {},
  data: {},
  handleComponent: () => {}
});

export const ComponentProvider = (props: any) => {
  return <Context.Provider
    value={{
      ...props,
      data: { check: true },
      handleComponent: () => {}
    }}
    >
    {props.children}
  </Context.Provider>
};

export const Consumer = Context.Consumer
