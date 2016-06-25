import React, { PropTypes } from 'react';
import styles from './List.css';

const List = ({ items }) => {
  const ListItems = items.map((item) => {
    let title = item.url;
    if (item.info && item.info.title) {
      title = item.info.title;
    }
    return (
      <li className={styles.item} key={item.id}>
        <span className={styles.title}>{title}</span>
        <span className={styles.progress}>{item.percent}%</span>
        <span className={styles.progressBar} style={{width: `${item.percent}%`}}></span>
      </li>
    );
  });

  return (
    <ul className={styles.list}>
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
