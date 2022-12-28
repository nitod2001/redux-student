import "../scss/globals.scss";
import type { AppProps } from "next/app";
import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducers from "../redux/reducers/index";

export default function App({ Component, pageProps }: AppProps) {
  const store = createStore(allReducers);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
