import {Component} from 'react';
import {Link} from 'react-router';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

const loginLink = (
  <FlatButton
    label="Вход"
    containerElement={<Link to="/login"/>}
  />);

export default class Header extends Component {
  render() {
    const {onHamburgerClick} = this.props;

    return (
      <AppBar
        title="Кофе и книги"
        iconElementRight={loginLink}
        onLeftIconButtonTouchTap={onHamburgerClick}
      />
    );
  }
}
