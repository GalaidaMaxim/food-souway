import { useSelector } from "react-redux";
export const useInfo = () => useSelector((state) => state.info.value);
export const useLoader = () => useSelector((state) => state.loading.value);
