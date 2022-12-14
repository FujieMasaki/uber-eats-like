import axios from "axios";
import { REQUEST_STATE } from "../constants";
import { lineFoods } from "../urls/index";

export const initialState = {
  fetchState: REQUEST_STATE.INITIAL, // 取得状況
  postState: REQUEST_STATE.INITIAL, // 登録状況
  lineFoodsSummary: null, // 仮注文データ
};

export const lineFoodsActionTypes = {
  FETCHING: "FETCHING",
  FETCH_SUCCESS: "FETCH_SUCCESS",
  POSTING: "POSTING",
  POST_SUCCESS: "POST_SUCCESS",
};
export const fetchLineFoods = () => {
  return axios
    .get(lineFoods)
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      throw e;
    });
};

export const lineFoodsReducer = (state, action) => {
  switch (action.type) {
    case lineFoodsActionTypes.FETCHING:
      return {
        ...state,
        fetchState: REQUEST_STATE.LOADING,
      };
    case lineFoodsActionTypes.FETCH_SUCCESS:
      return {
        fetchState: REQUEST_STATE.OK,
        lineFoodsSummary: action.payload.lineFoodsSummary,
      };
    case lineFoodsActionTypes.POSTING:
      return {
        ...state,
        postState: REQUEST_STATE.LOADING,
      };
    case lineFoodsActionTypes.POST_SUCCESS:
      return {
        ...state,
        postState: REQUEST_STATE.OK,
      };
    default:
      throw new Error();
  }
};
