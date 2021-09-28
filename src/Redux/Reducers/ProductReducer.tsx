import { GET_DATA } from "../Actions/type";
import products from "../../assets/fake-data/products";
interface InnitiaPropState {
  data?: any[];
  isLoading?: boolean;
  error?: any;
}
const initialState: InnitiaPropState = {
  data: [],
  isLoading: false,
  error: null,
};
export default function (state = initialState, action: any) {
  switch (action.type) {
    case GET_DATA:
      console.log(action.payload);

      return {
        ...state,
        data: products.getAllProducts(),
      };

    default:
      return state;
  }
}
