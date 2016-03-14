import {Component} from 'react';
import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';

export default class StoreList extends Component {

  render() {
    const {rows} = this.props;

    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Status</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row, i) => {
            return <TableRow key={i}>
              <TableRowColumn>{i}</TableRowColumn>
              <TableRowColumn>{row.name}</TableRowColumn>
            </TableRow>;
          })}
        </TableBody>
      </Table>
    );
  }
}
