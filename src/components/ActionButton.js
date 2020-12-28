import styled, { css } from 'styled-components'

const Button = styled.button`
  background: #D8D8D8;
  border: 2px solid #bfbfbf;
  border-radius: .125rem;
  font-family: inherit;
  color: inherit;
  ${props => props.hasBiggerSize && css`
    padding: .75rem 1.25rem;
  `}
`

const ActionButton = (props) => {
  const { hasBiggerSize, children, onClick } = props

  return (
    <Button onClick={onClick} hasBiggerSize={hasBiggerSize}>
      {children}
    </Button>
  )
}

export default ActionButton