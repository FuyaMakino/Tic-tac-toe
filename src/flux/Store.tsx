import type { GlobalState } from "./state";
import type { Action } from "./actions";

import React from "react";

export type StoreContext = {
  state: GlobalState;
  dispatch: (action: Action) => void;
};

const Store = React.createContext({} as StoreContext);

export default Store;
