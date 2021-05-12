import styled from 'styled-components'
// Code Along: Replace with styled components button
const SolidButton = styled.button`
  border-color: ${props => props.primaryColor};
  border-radius: 20px;
  border-width: 2px;
  background: ${props => props.primaryColor};
  color: White;
  font-size: 1.2rem;
  padding: 10px 40px;
  &:hover {
    background-color: white;
    color: ${props => props.primaryColor};
  }
`

export default SolidButton
