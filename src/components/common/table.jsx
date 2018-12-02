import React from 'react';
import TableHeader from './tableHeader';
import TableBody from './tableBody';
import PropTypes from 'prop-types';

const Table = ({ columns, sortColumn, onSort, data }) => (
  <table className="table">
    <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
    <TableBody columns={columns} data={data} />
  </table>
);

Table.propTypes = {
  columns: PropTypes.array.isRequired, // ciki da sa to aj inak?
  data: PropTypes.array.isRequired,
  onSort: PropTypes.func.isRequired,
  sortColumn: PropTypes.shape({
    path: PropTypes.string.isRequired,
    order: PropTypes.string.isRequired
  }).isRequired
};

export default Table;
