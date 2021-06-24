type CounterActionTypes = "INCREMENT" | "RESET";
type HogeActionTypes = "HOGE";
type ActionTypes = CounterActionTypes | HogeActionTypes;

export type Action = {
  type: ActionTypes;
  payload?: Record<string, any>;
};
