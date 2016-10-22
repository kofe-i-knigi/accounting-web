import extend from 'lodash/extend';

export default function tableReducer(state={rows: []}, action) {
  switch (action.type) {
  case 'TABLE_ADD_ROW':
    return extend({}, state, {rows: state.rows.concat([action.fields])});
  default:
    return state;
  }
}
