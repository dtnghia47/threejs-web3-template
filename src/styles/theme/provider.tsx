import React from 'react';
import { ThemeProvider as OriginalThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';

import { selectBranding } from './selectors';

export const ThemeProvider = (props: { children: React.ReactChild }) => {
  const branding = useSelector(selectBranding);

  return (
    <OriginalThemeProvider
      theme={{
        ...branding.colors,
        brandingColors: {
          ...branding.brandingColors,
        },
        staticColors: {
          ...branding.staticColors,
        },
        variables: {
          ...branding.variables,
        },
      }}
    >
      {React.Children.only(props.children)}
    </OriginalThemeProvider>
  );
};
