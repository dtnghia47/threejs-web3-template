## we can create theme with context

I will use styled-components's context

Struture:
redux-toolkit: support get theme from server
constrants: initial theme value

## How to use
- in styled element: get it as context value
```
color: ${props => props.theme.brandingColor.primary};
```

- in function componnet: use selector (redux toolkit)