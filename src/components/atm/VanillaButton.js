import React from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
`

const VanillaButton = ({ children }) => <ButtonStyled>{children}</ButtonStyled>

export default VanillaButton
