import React from "react";
import { Suspense, useEffect, useState } from "react";
import {
  // BrowserRouter as Router,
  HashRouter,
  Route,
  Routes,
} from "react-router-dom";
import routes from "./routes";
// import { RecoilRoot } from "recoil";
import { ToastContainer } from "react-toastify";
import PageNotFound from "./components/page-not-found/PageNotFound";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/signup/SignUp";
import PrivateWrapper from "./routes/PrivateWrapper";
import Loader from "./components/ui-elements/Loader/Loader";
// import { ConfigProvider, ThemeConfig } from "antd";

import DefaultLayout from "./layout/DefaultLayout"
// const DefaultLayout import();

function App() { 
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  // const config: ThemeConfig = {
  //   token: {
  //     colorPrimary: "#FF5612",
  //   },
  // };
  
  return loading ? (
    <Loader />
  ) : (
    <>
      {/* <RecoilRoot> */}
        {/* <ConfigProvider theme={config}> */}
        <ToastContainer />
        <HashRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route element={<DefaultLayout />}>
              <Route path={"*"} element={<PageNotFound />} />

              {routes.map(({ path, component: Component }) => (
                <Route
                  key={path}
                  path={path}
                  element={
                    <PrivateWrapper>
                      <Suspense fallback={<Loader />}>
                        <Component />
                      </Suspense>
                    </PrivateWrapper>
                  }
                />
              ))}
            </Route>
          </Routes>
        </HashRouter>
        {/* </ConfigProvider> */}
      {/* </RecoilRoot> */}
    </>
  );
}

export default App;
