import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { store } from "./stateMgt/store.tsx";
import ScrollToTop from "./utils/ScrollToTop.tsx";



const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <ScrollToTop />
          <App />
        </Router>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
