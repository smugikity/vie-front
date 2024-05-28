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
            <th>Gender</th>
            <th>University</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.stt}>
              <td>{user.stt}</td>
              <td>{user.name}</td>
              <td>{user.gender}</td>
              <td>{user.university}</td>
              <td>
                <button className="edit-btn" onClick={() => editUser(user)}>
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => deleteUser(user.stt)}
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
