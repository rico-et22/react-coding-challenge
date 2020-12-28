import styled from 'styled-components'
import ActionButton from './ActionButton'

const WidthWrapper = styled.div`
  width: 25rem;
`

const WrapBox = styled.div`
  height: 17rem;
  border: 2px solid #bfbfbf;
  border-radius: .5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`

const Icon = styled.span`
  font-size: 3.5rem;
`

const InfoText = styled.p`
  margin-top: 0
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0 -1rem;

  * {
    margin: 0 1rem;
  }
`

const DropZone = (props) => {
  return (
    <WidthWrapper>
      <WrapBox>
        <Icon>+</Icon>
        <InfoText>Drop file here</InfoText>
      </WrapBox>
      <ButtonWrapper>
        <ActionButton onClick={() => console.log('test click')} hasBiggerSize>
          Reset File
        </ActionButton>
        <ActionButton onClick={() => console.log('test click')} hasBiggerSize>
          Save File
        </ActionButton>
      </ButtonWrapper>
    </WidthWrapper>
  )
}

export default DropZone