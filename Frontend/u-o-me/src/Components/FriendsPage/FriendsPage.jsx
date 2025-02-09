"use client";

import React, { useState, useEffect } from "react";
import "./FriendsPage.css";
import { getAuth } from "firebase/auth";
import { addFriend, getFriends } from "../handlers/friendHandlers";

function getInitials(name) {
  const names = name.split(" ");
  return names.length > 1 ? `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase() : name[0].toUpperCase();
}

function generateNameFromEmail(email) {
  return email
    .split("@")[0]
    .replace(/[._]/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());
}

export default function MessagesList() {
  const [contacts, setContacts] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newFriendEmail, setNewFriendEmail] = useState("");
  const auth = getAuth();

  useEffect(() => {
    const fetchFriends = async () => {
      if (!auth.currentUser) return;
      try {
        const friends = await getFriends(auth.currentUser.uid);
        setContacts(friends);
      } catch (error) {
        console.error("Fetching friends failed:", error.message);
        alert("Fetching friends failed: " + error.message);
      }
    };
    fetchFriends();
  }, [auth.currentUser]);

  const handleAddFriend = async (e) => {
    e.preventDefault();
    if (!auth.currentUser || !newFriendEmail) return;
    const userID = auth.currentUser.uid;
    const friendID = generateNameFromEmail(newFriendEmail);
    try {
      await addFriend(userID, friendID);
      setContacts([...contacts, { id: friendID, name: friendID }]);
      setNewFriendEmail("");
      setIsDialogOpen(false);
    } catch (error) {
      console.error("Error adding friend:", error.message);
    }
  };

  return (
    <div className='container'>
      <div className='header'>
        <h1 className='title'>Activity</h1>
        <button className='button' onClick={() => setIsDialogOpen(true)}>
          Add New Friends
        </button>
      </div>
      <div className='scrollArea'>
        {contacts.map((contact) => (
          <div key={contact.id} className='contactItem'>
            <div className='avatar'>{getInitials(contact.name)}</div>
            <span className='contactName'>{contact.name}</span>
          </div>
        ))}
      </div>
      {isDialogOpen && (
        <>
          <div className='overlay' onClick={() => setIsDialogOpen(false)} />
          <div className='modal'>
            <h2 className='modalTitle'>Add a New Friend</h2>
            <form onSubmit={handleAddFriend}>
              <input
                type='email'
                placeholder="Enter friend's email"
                value={newFriendEmail}
                onChange={(e) => setNewFriendEmail(e.target.value)}
                required
                className='input'
              />
              <button type='submit' className='button addFriendButton'>
                Add Friend
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
}
