import React from 'react';
import GlobalStyle from 'theme/global.style';
import {
  Layout,
  RouteSwitch,
} from 'components';

import {
  HOME_PAGE,
} from 'routes'

import HomePage from 'pages/HomePage/HomePage';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div className="app">
        <Layout>
          <RouteSwitch
            routes={{
              [HOME_PAGE]: HomePage,
            }}
          />
        </Layout>
      </div>
    </>
  );
}

export default App;
