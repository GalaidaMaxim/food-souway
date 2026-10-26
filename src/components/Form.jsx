import { BaseButton } from "./BaseButton";
import { StyledForm } from "./StyledForm";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setInfo } from "@/redux/slices";

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
`;

const ControlButton = styled(BaseButton)`
  width: 200px;
`;
const PrevButton = styled(ControlButton)`
  background-color: #ffa600;
`;
const NextButton = styled(ControlButton)`
  background-color: #9e4511;
`;

export const Form = ({ prevParam, children, onSubmit }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const onBack = () => {
    if (!prevParam) {
      return;
    }
    dispatch(setInfo({ [prevParam]: undefined }));
    router.replace(`/${prevParam}`);
  };
  const submit = (event) => {
    event.preventDefault();
    onSubmit(event);
  };
  return (
    <StyledForm onSubmit={submit}>
      {children}
      <ButtonContainer>
        {prevParam && (
          <PrevButton type="button" onClick={onBack}>
            Назад
          </PrevButton>
        )}
        <NextButton type="submit">Далі</NextButton>
      </ButtonContainer>
    </StyledForm>
  );
};
