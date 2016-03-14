import {routerReducer as routing} from 'react-router-redux';
import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';

import table from './table';

export default combineReducers({table, form, routing});
