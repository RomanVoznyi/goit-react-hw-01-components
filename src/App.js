import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import user from './data-source/user.json';
import statistical from './data-source/statistical-data.json';
import friends from './data-source/friends.json';
import transactions from './data-source/transactions.json';
import './App.css';

function App() {
  return (
    <>
      <div className="task taskOne">
        <h2 className="title">Task 1</h2>
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
      <div className="task taskTwo">
        <h2 className="title">Task 2</h2>
        <Statistics title="Upload stats" stats={statistical} />
      </div>
      <div className="task taskThree">
        <h2 className="title">Task 3</h2>
        <FriendList friends={friends} />
      </div>
      <div className="task">
        <h2 className="title">Task 4</h2>
        <TransactionHistory items={transactions} />
      </div>
    </>
  );
}

export default App;
