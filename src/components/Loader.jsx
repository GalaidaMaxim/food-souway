import { Grid } from "react-loader-spinner";
import styled from "@emotion/styled";

const Cover = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 1000;
  background-color: #00000075;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loader = () => {
  return <Cover>123</Cover>;
};
