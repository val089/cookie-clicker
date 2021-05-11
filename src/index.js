import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.scss";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { createStore, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./redux/rootReducer";

const persistConfig = {
  key: "data",
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers();
const store = createStore(persistedReducer, enhancer);
const persistor = persistStore(store);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>,
  rootElement
);
