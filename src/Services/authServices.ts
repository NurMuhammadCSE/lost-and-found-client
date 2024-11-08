import { authKey } from "@/constants/authKey";
import { setToLocalStorage } from "@/utils/local-storage";

export const StoreUserInfo = ({ accessToken }: { accessToken: string }) => {
  return setToLocalStorage(authKey, accessToken);
};
