import {Route} from 'react-router';
import {default as LoginForm} from './components/login-form';
import App from './components/app';
import StoresList from './containers/stores/list';

export default (
  <Route path="/" component={App}>
    <Route path="/stores" component={StoresList}/>
    <Route path="/login" component={LoginForm}/>
  </Route>
);
