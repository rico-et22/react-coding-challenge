import styled, { css } from "styled-components";
import ActionButton from "./ActionButton";
import { useDispatch, useSelector } from "react-redux";

const WidthWrapper = styled.div`
  width: 25rem;
`;

const WrapBox = styled.div`
  height: 17rem;
  border: 2px solid #bfbfbf;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  padding: 1rem;
`;

const Icon = styled.span`
  font-size: 3.5rem;
  ${(props) =>
    props.redColor &&
    css`
      color: red;
    `}
`;

const InfoText = styled.p`
  margin-top: 0;
  word-break: break-all;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0 -1rem;

  * {
    margin: 0 1rem;
  }
`;

const DropZone = (props) => {
  const dispatch = useDispatch();
  const fileState = useSelector((state) => state.fileUpload);
  const fileName = fileState.fileName;
  const validFormat = fileState.validFormat;
  const onDrop = (e) => {
    e.preventDefault();
    const payload = e.dataTransfer.files[0];
    if (payload) dispatch({ type: "fileUpload/dropped", payload });
  };
  let infoTextContent;
  let iconContent;
  if (fileName) {
    if (validFormat) {
      infoTextContent = fileName;
      iconContent = "📄";
    } else {
      infoTextContent = "Invalid File";
      iconContent = "X";
    }
  } else {
    infoTextContent = "Drop file here";
    iconContent = "+";
  }
  const saveFile = () => {
    dispatch({ type: "fileHistory/added", payload: fileState });
    dispatch({ type: "fileUpload/reset" });
  };
  return (
    <WidthWrapper>
      <WrapBox onDrop={onDrop} onDragOver={(e) => e.preventDefault()}>
        <Icon redColor={iconContent === "X"}>{iconContent}</Icon>
        <InfoText>{infoTextContent}</InfoText>
      </WrapBox>
      {fileName && (
        <ButtonWrapper>
          <ActionButton
            onClick={() => dispatch({ type: "fileUpload/reset" })}
            hasBiggerSize
          >
            Reset File
          </ActionButton>
          {validFormat && (
            <ActionButton hasBiggerSize onClick={saveFile}>
              Save File
            </ActionButton>
          )}
        </ButtonWrapper>
      )}
    </WidthWrapper>
  );
};

export default DropZone;
