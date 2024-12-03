import { useState, useEffect } from "react";
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchusers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.log("error fecthing users");
        setLoading(false);
      }

    };
    fetchusers();
  }, []);

  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };
  const removeUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId))
  };

  return (
    <div className="app">

      <header>
        <h1>USER MANAGEMENT APPLICATION</h1>
      </header>

      <main>

        <UserForm addUser={addUser} />

        {loading ? (
          <p> Loading the data.........</p>
        ) : (
          <UserList users={users} removeUser={removeUser} />
        )}

      </main>

    </div>

  );
}

export default App;
