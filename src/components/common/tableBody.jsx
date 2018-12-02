import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) {
      return column.content(item); // retun only content <i /> button like and delete <button />
    }
    return _.get(item, column.path); // retun every title, genre, stock, rate cell from movies array
  };
  createKey = (item, column) => {
    return item._id + (column.path || column.key);
  };
  render() {
    const { data, columns } = this.props;
    return (
      <tbody>
        {data.map(item => (
          <tr key={item._id}>
            {columns.map(column => (
              <td key={this.createKey(item, column)}>
                {this.renderCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

TableBody.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired
};

export default TableBody;
