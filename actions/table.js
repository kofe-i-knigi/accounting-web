export function addRow() {
  const fields = {
    name: 'Родник'
  };

  return {
    type: 'TABLE_ADD_ROW',
    fields: fields
  };
}
