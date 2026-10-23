import { useGoogleLogin } from "@react-oauth/google";
import { FaGoogle } from "react-icons/fa";
import axios from "axios";
import styled from "@emotion/styled";
import { BaseButton } from "./BaseButton";

const StyledLoginButton = styled(BaseButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  gap: 10px;
  font-size: 14px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 300px;
`;

export const LoginButton = ({ onLogin = () => {} }) => {
  const handlerAuth = async (response) => {
    try {
      const res = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        { headers: { Authorization: `Bearer ${response.access_token}` } },
      );
      onLogin(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const login = useGoogleLogin({
    onSuccess: handlerAuth,
    onError: (err) => console.log(err),
  });

  return (
    <StyledLoginButton type="button" onClick={login}>
      <div>
        <FaGoogle color="white" size={30} />
      </div>
      Увійти за домогою Google
    </StyledLoginButton>
  );
};
