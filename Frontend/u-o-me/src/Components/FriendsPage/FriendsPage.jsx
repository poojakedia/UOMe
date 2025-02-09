"use client";

import React, { useState, useEffect } from "react";
import "./FriendsPage.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { lookUp, addFriend, getFriends } from "../../handlers/friendHandler";

import { useNavigate } from 'react-router-dom';

const initialContacts = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Alice Johnson" },
  { id: 4, name: "Bob Williams" },
  { id: 5, name: "Emma Brown" },
]

function getInitials(name) {
  const names = name.split(" ");
  return names.length > 1
    ? `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase()
    : name[0].toUpperCase();
}

function generateNameFromEmail(email) {
  return email
    .split("@")[0]
    .replace(/[._]/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());
}

export default function MessagesList() {
  const navigate = useNavigate();

  const [contacts, setContacts] = useState(initialContacts)
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newFriendEmail, setNewFriendEmail] = useState("");
  const [user, setUser] = useState(null);
  const auth = getAuth();

  const handleRedirect = async () => {
    navigate("/chat"); 
    
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        fetchFriends(currentUser.id);
      }
    });
    return () => unsubscribe();
  }, [auth]);

  const fetchFriends = async () => {
    try {
      const friends = await getFriends();
      setContacts(friends);
    } catch (error) {
      console.error("Fetching friends failed:", error.message);
    }
  };

  const handleAddFriend = async (e) => {
    e.preventDefault();
    if (!user || !newFriendEmail) return;
    try {
      const friendID = await lookUp(newFriendEmail);
      if (!friendID) {
        return;
      }
      await addFriend(user.id, friendID);
      setContacts((prevContacts) => [
        ...prevContacts,
        { id: friendID, name: generateNameFromEmail(newFriendEmail) },
      ]);
      setNewFriendEmail("");
      setIsDialogOpen(false);
    } catch (error) {
      console.error("Error adding friend:", error.message);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h1 className="title">Friends</h1>
        <button className="button" onClick={() => setIsDialogOpen(true)}>
          + Add Friend
        </button>
      </div>
      <div className="scrollArea">
        {contacts.length > 0 ? (
          contacts.map((contact) => (
            
            <div key={contact.id} className="contactItem">
              <button onClick={handleRedirect}>
              <div className="avatar">{getInitials(contact.name)}</div>
              <span className="contactName">{contact.name}</span>
              </button>
            </div>
            
          ))
        ) : (
          <p className="noFriendsMessage">No friends added yet.</p>
        )}
      </div>
      {isDialogOpen && (
        <>
          <div className="overlay" onClick={() => setIsDialogOpen(false)} />
          <div className="modal">
            <h2>Add a New Friend</h2>
            <form onSubmit={handleAddFriend}>
              <input
                type="email"
                placeholder="Enter friend's email"
                value={newFriendEmail}
                onChange={(e) => setNewFriendEmail(e.target.value)}
                required
                className="input"
              />
              <button type="submit" className="button addButton">
                Add Friend
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
}
