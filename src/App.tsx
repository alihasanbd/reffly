import React, { FC, Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from "react-redux";

import store from "./redux/store";
import Layout from './comps/Layout';
import Homepage from './home/Homepage'

const Dashboard = lazy(() => import('./dash/Dashboard'));
const Error404 = lazy(() => import('./Error404'));
const TempPage = lazy(() => import('./temp/TempPage'));
const TcsofService = lazy(() => import('./legal/TcsofService'));
const PrivacyPolicy = lazy(() => import('./legal/PrivacyPolicy'));

import config from './configs'

const App: FC = () => {

  console.log('config.overwrite: ', config)

  return (
    <Provider store={store}>
      <Layout>
        <Suspense fallback={<h1>Loading…</h1>}>
          <BrowserRouter>
            <Switch>

              <Route exact path="/" component={Homepage} />
              <Route exact path="/terms-and-conditions" component={TcsofService} />
              <Route exact path="/privacy-policy" component={PrivacyPolicy} />
              <Route exact path="/404" component={Error404} />
              <Route exact path="/temp" component={TempPage} />
              <Route path="/app" component={Dashboard} />
              <Redirect to="/404" />

            </Switch>
          </BrowserRouter>
        </Suspense>
      </Layout>
    </Provider>
  );
};

export default App;
