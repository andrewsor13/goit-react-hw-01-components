import Profile from './Profile/Profile';
import Container from './Container/Container';
import user from '../data/user';

import Statistics from './Statistics/Statistics';

import FriendList from './FriendList/FriendsList';
import friends from '../data/friends';
import data from '../data/data';

import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../data/transactions';

export const App = () => {
  return (
    <div>
      <Container>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title="Upload Stats" stats={data} />
        <FriendList friends={friends} />;
        <TransactionHistory items={transactions} />;
      </Container>
    </div>
  );
};
