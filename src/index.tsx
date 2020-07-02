import React from 'react';
import ReactDOM from 'react-dom';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import store from 'stores/rootStore';
import IStore from 'models/IStore';
import App from 'views/App';
import './index.css';
import * as serviceWorker from './serviceWorker';

type Props = {
  store: Store<IStore>;
};

const Root: React.SFC<Props> = ({ store }) => (
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

ReactDOM.render(<Root store={store} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
