import {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router';

export default class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({open: !this.state.open});
  }

  render() {
    return (
      <div>
        <Drawer open={this.state.open}>
          <MenuItem
            onTouchTap={this.toggle}
            containerElement={<Link to="/stores" />}
          >Склады</MenuItem>
        </Drawer>
      </div>
    );
  }
}
