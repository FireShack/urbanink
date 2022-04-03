import { types } from "../types/types";

export const showElement = () => ({
  type: types.showElement,
});
export const closeElement = () => ({
  type: types.closeElement,
});

export const AddMsg = (msg) => ({
  type: types.AddMsg,
  payload: msg,
});

export const removeMsg = () => ({
  type: types.RemoveMsg,
});
