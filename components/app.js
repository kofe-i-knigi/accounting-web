import {Component} from 'react';
import AppBar from 'material-ui/lib/app-bar';
import FlatButton from 'material-ui/lib/flat-button';
import {Link} from 'react-router';

const loginLink = (
  <div>
    <FlatButton
      linkButton={true}
      label="Склады"
      containerElement={<Link to="/stores"/>}
    />
    <FlatButton
      linkButton={true}
      label="Вход"
      containerElement={<Link to="/login"/>}
    />
  </div>);

class App extends Component {
  render() {
    return <div className='app'>
      <AppBar
        title="Кофе и книги"
        iconElementRight={loginLink}
      />
    {this.props.children}
    </div>;
  }
}

export default App;
