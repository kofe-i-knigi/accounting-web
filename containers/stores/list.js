import {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/table';

import Table from '../../components/table';

class StoreList extends Component {
  render() {
    const {rows, addRow} = this.props;

    return (
      <div>
        <Table rows={rows} />
        <button onClick={addRow}>Добавить</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {table: {rows}} = state;

  return {rows};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(StoreList);
