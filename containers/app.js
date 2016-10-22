import {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import * as actions from '../actions/layout';
import Header from '../components/layout/header';
import Menu from '../components/layout/menu';

class App extends Component {
  constructor() {
    super();

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }

  toggleMenu() {
    this.refs.menuBar.toggle();
  }

  render() {
    return (
      <div className='app'>
        <Header onHamburgerClick={this.toggleMenu} />
        <Menu ref="menuBar"/>
        {this.props.children}
      </div>
    );
  }
}

App.childContextTypes = {
  muiTheme: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
