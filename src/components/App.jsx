import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendsList } from './FriendsList/FriendsList';
import { Transaction } from './Transaction/Transaction';
import user from '../Json/user.json';
import data from '../Json/data.json';
import friends from '../Json/friends.json';
import transaction from '../Json/transactions.json';
import { Container } from './App.styled';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  return (
    <Container>
      <Profile user={user} />
      <Statistics title="Upload stats" data={data} />
      <FriendsList friends={friends} />
      <Transaction items={transaction} />
      <GlobalStyle />
    </Container>
  );
};
