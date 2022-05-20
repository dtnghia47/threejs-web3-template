/**
 *
 * DemoBranding
 *
 */
 import React, { memo } from 'react';
 import styled from 'styled-components';
 import { selectBranding } from "./../../styles/theme/selectors";
 import { useSelector } from 'react-redux';
 interface Props {
   margin?: string;
 }
 
 // move color to common, or we can use context and setup theme
 const DemoStyled = styled.button<Props>`
   color: ${props => props.theme.brandingColors?.primary};
   ${props => props.margin && `
     margin: ${props.margin}
   `}
 `;
 
 const DemoBranding = memo((props: Props) => {
   const branding = useSelector(selectBranding);
   console.log(props, branding);
   return <DemoStyled {...props} />;
 });
 
 export default DemoBranding;
 