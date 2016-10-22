import uuid from 'node-uuid';

export function addRow() {
  const fields = {
    id: uuid(),
    name: 'Родник'
  };

  return {
    type: 'TABLE_ADD_ROW',
    fields: fields
  };
}
