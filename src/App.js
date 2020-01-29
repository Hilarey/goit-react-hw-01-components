import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './components/Profile/Profile';
import user from './components/Profile/user.json';
import Statistics from './components/StatisticSection/Statistics';
import stats from './components/StatisticSection/statistical-data.json';
import FriendList from './components/FriendsList/FriendList'
import friends from './components/FriendsList/friends.json'
import TransactionHistory from './components/TransactionsHistory/TransactionHistory';
import transactions from './components/TransactionsHistory/transactions';

const App = (
  <>
    <Profile user={user} />
    <Statistics title="Upload stats" stats={stats} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </>
);

ReactDOM.render(App, document.getElementById('root'));
