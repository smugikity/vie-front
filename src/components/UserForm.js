import React, { useState, useEffect } from "react";
import "./UserForm.css"; // Import CSS file for UserForm component

const UserForm = ({ addUser, editingUser, updateUser }) => {
  const [user, setUser] = useState({ name: "", email: "" });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (editingUser) {
      setUser(editingUser);
      setIsEditing(true);
    } else {
      setUser({ name: "", email: "" });
      setIsEditing(false);
    }
  }, [editingUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      updateUser(user);
    } else {
      addUser({ ...user, id: Date.now() });
      setUser({ name: "", email: "" });
    }
  };

  const handleCancel = () => {
    setUser({ name: "", email: "" });
    setIsEditing(false);
  };

  return (
    <div className="user-form-container">
      <h2>{isEditing ? "Edit User" : "Add User"}</h2>
      <form onSubmit={handleSubmit} className="user-form">
        <div className="form-group">
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            placeholder="Name"
            className="form-input"
            required
          />
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Email"
            className="form-input"
            required
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "Update" : "Add"}
          </button>
          {isEditing && (
            <button type="button" className="cancel-btn" onClick={handleCancel}>
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default UserForm;
