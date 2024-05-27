import React from "react";
import "./UserList.css";

const UserList = ({ users, editUser, deleteUser }) => {
  return (
    <div>
      <h2>Student List</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Birth year</th>
            <th>Gender</th>
            <th>University</th>
            <th>Major</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.birth_year}</td>
              <td>{user.gender}</td>
              <td>{user.university}</td>
              <td>{user.major}</td>
              <td>
                <button className="edit-btn" onClick={() => editUser(user)}>
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
