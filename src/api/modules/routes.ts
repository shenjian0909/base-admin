// import { http } from "@/utils/http";
import authMenuList from "@/assets/json/authMenu.json";

type Result = {
  success: boolean;
  data: Array<any>;
};

export const getAsyncRoutes = () => {
  // return http.request<Result>("get", "/getAsyncRoutes");
  return new Promise<Result>(resolve => {
    resolve({
      success: true,
      data: authMenuList
    });
  });
};
