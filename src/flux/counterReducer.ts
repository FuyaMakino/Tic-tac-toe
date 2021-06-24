import type { Reducer } from "react";
import type { Action } from "./actions";
import type { GlobalState } from "./state";

import { initialState } from "./state";

export const counterReducer: Reducer<GlobalState["counter"], Action> = (state, action) => {
  switch (action.type) {
    case "INCREMENT": {
      const count = state.count + 1;
      return {
        ...state,
        count,
      };
    }

    case "RESET": {
      return { ...initialState.counter };
    }

    default:
      return state;
  }
};
