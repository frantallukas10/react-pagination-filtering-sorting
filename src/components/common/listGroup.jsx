import React from 'react';
import PropTypes from 'prop-types';

const ListGroup = ({
  items,
  textProperty,
  valueProperty,
  onItemSelect,
  selectedItem
}) => (
  <ul className="list-group">
    {items.map(item => (
      <li
        key={item[valueProperty]}
        onClick={() => {
          onItemSelect(item);
        }}
        className={
          item === selectedItem ? 'list-group-item active' : 'list-group-item'
        }
      >
        {item[textProperty]}
      </li>
    ))}
  </ul>
);

ListGroup.propTypes = {
  items: PropTypes.array.isRequired,
  textProperty: PropTypes.string.isRequired,
  valueProperty: PropTypes.string.isRequired,
  onItemSelect: PropTypes.func.isRequired,
  selectedItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired
  })
};

ListGroup.defaultProps = {
  textProperty: 'name',
  valueProperty: '_id'
};

export default ListGroup;
