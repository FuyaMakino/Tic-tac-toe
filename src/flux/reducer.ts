import type { Reducer } from "react";
import type { Action } from "./actions";
import type { GlobalState } from "./state";

import { counterReducer } from "./counterReducer";

export const reducer: Reducer<GlobalState, Action> = (state, action) => {
  return {
    action,
    user: state.user,
    locale: state.locale,
    theme: state.theme,
    counter: counterReducer(state.counter, action),
  };
};
