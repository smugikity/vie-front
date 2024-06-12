// src/App.js
import React, { useState, useEffect } from "react";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  // const url = `${process.env.REACT_APP_API_BASE_URL}${process.env.REACT_APP_USERS_ENDPOINT}`;
  const url = "http://192.168.49.2:30501/students";
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const addUser = async (newUser) => {
    try {
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
      fetchUsers();
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };

  const deleteUser = async (userId) => {
    try {
      await fetch(`${url}/${userId}`, {
        method: "DELETE",
      });
      setUsers(users.filter((user) => user.stt !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const updateUser = async (updatedUser) => {
    try {
      await fetch(`${url}/${editingUser.stt}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUser),
      });
      // const data = await response.json();
      setUsers(
        users.map((user) => (user.stt === updatedUser.stt ? updatedUser : user))
      );
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
