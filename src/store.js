import { createStore, combineReducers } from "redux";
import fileUploadReducer from "./reducers/fileUploadReducer";
import fileHistoryReducer from "./reducers/fileHistoryReducer";

const loadLocalState = () => {
  try {
    const serializedState = localStorage.getItem("fileHistory");
    if (!serializedState) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};
const saveLocalState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("fileHistory", serializedState);
  } catch {
    // ignore write errors
  }
};
const persistedState = loadLocalState();

const rootReducer = combineReducers({
  fileUpload: fileUploadReducer,
  fileHistory: fileHistoryReducer,
});
const store = createStore(
  rootReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
store.subscribe(() => {
  saveLocalState({
    fileHistory: store.getState().fileHistory
  });
});

export default store;
