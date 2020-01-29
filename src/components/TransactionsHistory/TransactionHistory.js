import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionsHistory.module.css';

function TransactionHistory({ items }) {
  return (
    <table className={styles.transactionHistory}>
      <thead className={styles.firstRow}>
        <tr>
          <th className={styles.columnTitle}>Type</th>
          <th className={styles.columnTitle}>Amount</th>
          <th className={styles.columnTitle}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.id} className={styles.row}>
            <td className={styles.column}>{item.type}</td>
            <td className={styles.column}>{item.amount}</td>
            <td className={styles.column}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.proptype = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TransactionHistory;
