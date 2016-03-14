'use strict';

import {Component} from 'react';
import {reduxForm} from 'redux-form';

import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import Paper from 'material-ui/lib/paper';

const style = {
  margin: '20px auto',
  maxWidth: '320px'
};

const inputStyle = {
  width: '90%',
  margin: '0 5%',
  display: 'block'
};

const buttonStyle = {
  width: '90%',
  margin: '15px 5%'
};

class LoginForm extends Component {

  render() {
    const {fields: {login, password}, handleSubmit} = this.props;

    return <Paper zDepth={2} style={style}>
      <form onSubmit={handleSubmit}>
        <TextField
          style={inputStyle}
          floatingLabelText="Логин"
          type="text"
          {...login}
        />
        <TextField
          style={inputStyle}
          floatingLabelText="Пароль"
          type="password"
          {...password}
        />
        <RaisedButton
          type="submit"
          style={buttonStyle}
          label="Войти"
          primary={true}
        />
      </form>
    </Paper>;
  }
}

const $LoginForm = reduxForm({
  form: 'login',
  onSubmit() {},
  fields: ['login', 'password']
})(LoginForm);

export default $LoginForm;
