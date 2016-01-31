import React, { PropTypes } from 'react';

const List = ({items}) => {
  const ListItems = items.map((item) => {
    return <li key={item.id}>{item.url}</li>
  })

  return (
    <ul>
      {ListItems}
    </ul>
  );
};

List.defaultProps = {
};

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default List;
