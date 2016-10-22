import {Component} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

function dataRow(fields) {
  return (data) => {
    return (
      <TableRow key={data.id}>
        {Object.keys(fields).map(fieldName => {
          return <TableRowColumn key={fieldName}>{data[fieldName]}</TableRowColumn>;
        })}
      </TableRow>
    );
  };
}

export default class DataTable extends Component {
  render() {
    const {fields, rows} = this.props;
    const rowTemplate = dataRow(fields);

    return (
      <Table>
        <TableHeader>
          <TableRow>
            {Object.keys(fields).map(fieldName =>
              <TableHeaderColumn key="fieldName">
                {fields[fieldName]}
              </TableHeaderColumn>
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map(row => rowTemplate(row))}
        </TableBody>
      </Table>
    );
  }
}
