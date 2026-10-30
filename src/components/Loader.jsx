import dynamic from "next/dynamic";

// Імпортуємо компонент динамічно ТІЛЬКИ для клієнта
const Blocks = dynamic(
  () => import("react-loader-spinner").then((mod) => mod.Blocks),
  { ssr: false }, // Це повністю вирішує проблему із сервером
);
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
  return (
    <Cover>
      <Blocks />
    </Cover>
  );
};
