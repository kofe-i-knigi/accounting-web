import {render} from 'react-dom';
import {browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

import configureStore from './store/configure-store';
import Root from './containers/root';

const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

injectTapEventPlugin();

render(
  <Root store={store} history={history} />,
  document.querySelector('#app')
);
