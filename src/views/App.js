import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import { history } from 'stores/rootStore';

const Home = React.lazy(() => import('./pages/Home'));

const App = () => (
  <ConnectedRouter history={history}>
    <React.Suspense fallback="loading..." isActive={true}>
      <Switch>
        <Route exact={true} path="/" component={Home} />
      </Switch>
    </React.Suspense>
  </ConnectedRouter>
);

export default App;
