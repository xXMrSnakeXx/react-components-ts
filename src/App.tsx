import user from "./data/user.json";
import stats from "./data/statistics.json";
import friends from "./data/friends.json";
import items from "./data/transactions.json";

import { Wrapper } from "./App.styled";
import Profile from "./components/Profile";
import FriendList from "./components/FriendList";
import Statistics from "./components/Statistics";
import TransactionHistory from "./components/TransactionHistory";

function App() {
  return (
    <Wrapper>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <FriendList friends={friends} />
      <Statistics title="Upload stats" stats={stats} />
      <TransactionHistory items={items} />
    </Wrapper>
  );
}

export default App;
