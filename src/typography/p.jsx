import React from 'react'
import styled from 'styled-components'

const StyledP = styled.p `
    margin: 0;
    margin-bottom: 5px;
`;

const P = ({children}) => {
  return (
    <StyledP>{children}</StyledP>
  )
}

export default P;