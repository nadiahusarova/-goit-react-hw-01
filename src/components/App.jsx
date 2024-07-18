import Profile from "./Profile/Profile";
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import "../index.css";
import userData from "../assets/userData.json";
import friends from "../assets/friends.json";
import transactions from "../assets/transactions.json";

const App = () => {
  return (
<main>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </main>
  );
};
export default App;
