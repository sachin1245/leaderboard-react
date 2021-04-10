import './App.css';
import Leaderboard from './components/Leaderboard';
import Search from './components/Search';
import AddUser from './components/AddUser';
import { useState, useEffect } from 'react';
import axios from 'axios'

function App() {

  const [userDataArray, setUserDataArray] = useState([]);
  const [filteredArray, setFilteredArray] = useState([]);
  const [showAddUser, setShowAddUser] = useState(false);
  const [showValidation, setShowValidation] = useState(false);


  useEffect(() => {
    axios.get('http://localhost:3001/leaderboard').then((res) => {
      setUserDataArray([...res.data]);
      setFilteredArray(sortArray([...res.data]));
    })
  }, []);

  useEffect(() => {
    setFilteredArray(sortArray([...userDataArray]));
  }, [userDataArray]);

  const addUserDetail = (userDetail) => {
    if (userDetail.name && userDetail.credits) {
      setShowValidation(false);
      axios.post('http://localhost:3001/players/add-player', userDetail).then(
        (res) => {
          setUserDataArray(sortArray([...userDataArray, res.data]));
        }
      )
    } else {
      setShowValidation(true);
    }
  };

  const sortArray = (arr) => {
    return arr.sort((a, b) => {
      return b.credits - a.credits;
    })
  }

  const searchHandler = (event) => {
    const searchValue = event.target.value;
    const filteredUser = userDataArray.filter((user) => {
      return user.name.toLowerCase().startsWith(searchValue.toLowerCase());
    });
    setFilteredArray(sortArray(filteredUser));
  }

  return (
    <div className="App">
      <Search searchHandler={searchHandler} />
      <Leaderboard userData={filteredArray} />
      <div className="add-user-button-container">
        <button className="add-user-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => { setShowAddUser(!showAddUser); setShowValidation(false) }}>
          {showAddUser ? 'Close Form' : 'Add User'}
        </button>
      </div>
      {
        showAddUser && (
          <AddUser addUserDetail={addUserDetail} showValidation={showValidation} />
        )
      }
    </div>
  );
}

export default App;
