// src/App.js
import React, { useState, useEffect } from "react";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}${process.env.REACT_APP_USERS_ENDPOINT}`
      );
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const addUser = async (newUser) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}${process.env.REACT_APP_USERS_ENDPOINT}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        }
      );
      const data = await response.json();
      setUsers([...users, data]);
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };

  const deleteUser = async (userId) => {
    try {
      await fetch(
        `${process.env.REACT_APP_API_BASE_URL}${process.env.REACT_APP_USERS_ENDPOINT}/${userId}`,
        {
          method: "DELETE",
        }
      );
      setUsers(users.filter((user) => user.id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const updateUser = async (updatedUser) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}${process.env.REACT_APP_USERS_ENDPOINT}/${updatedUser.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedUser),
        }
      );
      const data = await response.json();
      setUsers(users.map((user) => (user.id === updatedUser.id ? data : user)));
    } catch (error) {
      console.error("Error updating student:", error);
    }
  };

  const editUser = (user) => {
    setEditingUser(user);
  };

  return (
    <div className="App">
      <h1>Student Management</h1>
      <UserForm
        addUser={addUser}
        editingUser={editingUser}
        updateUser={updateUser}
      />
      <UserList users={users} editUser={editUser} deleteUser={deleteUser} />
    </div>
  );
};

export default App;
