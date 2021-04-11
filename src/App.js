import './App.css';
import Leaderboard from './components/Leaderboard';
import Search from './components/Search';
import AddUser from './components/AddUser';
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios'
import { debounce } from 'lodash';

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
  }, []); // load user data on first load

  useEffect(() => {
    setFilteredArray(sortArray([...userDataArray]));
  }, [userDataArray]); // sort filtered array everytime userDataArray changes

  const addUserDetail = (userDetail) => {
    if (userDetail.name && userDetail.credits) {
      setShowValidation(false);
      userDetail.credits = parseInt(userDetail.credits, 10);
      axios.post('http://localhost:3001/players/add-player', userDetail).then(
        (res) => {
          setUserDataArray(sortArray([...userDataArray, res.data]));
        }
      )
    } else {
      setShowValidation(true); // show validation error if one of the form field is empty
    }
  }; // add user details 

  const sortArray = (arr) => {
    return arr.sort((a, b) => {
      return b.credits - a.credits;
    })
  }

  const debounceSearch = useCallback(
    debounce((searchValue) => {
      const filteredUser = userDataArray.filter((user) => {
        return user.name.toLowerCase().startsWith(searchValue.toLowerCase());
      });
      setFilteredArray(sortArray(filteredUser));
    }, 1000)
  )

  const searchHandler = (event) => {
    const searchValue = event.target.value;
    debounceSearch(searchValue); //adding debounce to ensure multiple request are not fired when user types fast
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