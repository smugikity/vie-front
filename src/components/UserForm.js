import React, { useState, useEffect } from "react";
import "./UserForm.css"; // Import CSS file for UserForm component

const UserForm = ({ addUser, editingUser, updateUser }) => {
  const [user, setUser] = useState({
    name: "test",
    university: "test",
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (editingUser) {
      setUser(editingUser);
      setIsEditing(true);
    } else {
      setUser({ name: "", gender: "", university: "" });
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
      addUser(user);
      setUser({
        name: "",
        gender: "",
        university: "",
      });
    }
  };

  const handleCancel = () => {
    setUser({ name: "", gender: "", university: "" });
    setIsEditing(false);
  };

  return (
    <div className="user-form-container">
      <h2>{isEditing ? "Edit Student" : "Add Student"}</h2>
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
            type="text"
            name="gender"
            value={user.gender}
            onChange={handleChange}
            placeholder="Gender"
            className="form-input"
            required
          />
          <input
            type="text"
            name="university"
            value={user.university}
            onChange={handleChange}
            placeholder="University"
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
