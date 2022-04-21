import { ActionType } from "./actions";

export const initialState = {
  isLoading: false,
  users: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ActionType.SET_ISLOADING:
      return { ...state, isLoading: action.payload };
    case ActionType.GET_USERS:
      return { ...state, users: action.payload };
    default:
      return state;
  }
};
