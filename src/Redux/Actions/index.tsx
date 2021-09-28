import { GET_DATA } from "./type";

export const getData = (data: any) => ({
  type: GET_DATA,
  payload: data,
});
