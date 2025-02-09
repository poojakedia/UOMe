"use client"

import { useState } from "react"

// Initial mock data for contacts
const initialContacts = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Alice Johnson" },
  { id: 4, name: "Bob Williams" },
  { id: 5, name: "Emma Brown" },
]

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#f0f0f0",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    backgroundColor: "#c7e1ba",
    padding: "20px",
    color: "#333",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "15px",
    textAlign: "center",
  },
  button: {
    backgroundColor: "white",
    color: "#2c7a2c",
    border: "none",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  scrollArea: {
    flexGrow: 1,
    overflowY: "auto",
    padding: "20px",
  },
  contactItem: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "white",
    padding: "15px",
    borderRadius: "8px",
    marginBottom: "10px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
  },
  avatar: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    marginRight: "15px",
    backgroundColor: "#2c7a2c",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "16px",
    fontWeight: "bold",
  },
  contactName: {
    fontWeight: "bold",
  },
  modal: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    zIndex: 1000,
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 999,
  },
  input: {
    width: "90%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
}

function getInitials(name) {
  const names = name.split(" ")
  return names.length > 1 ? `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase() : name[0].toUpperCase()
}

function generateNameFromEmail(email) {
  return email
    .split("@")[0]
    .replace(/[._]/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase())
}

export default function MessagesList() {
  const [contacts, setContacts] = useState(initialContacts)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [newFriendEmail, setNewFriendEmail] = useState("")

  const handleAddFriend = (e) => {
    e.preventDefault()
    if (newFriendEmail) {
      const newContact = {
        id: contacts.length + 1,
        name: generateNameFromEmail(newFriendEmail),
      }
      setContacts([...contacts, newContact])
      setNewFriendEmail("")
      setIsDialogOpen(false)
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Activity</h1>
        <button style={styles.button} onClick={() => setIsDialogOpen(true)}>
          Add New Friends
        </button>
      </div>
      <div style={styles.scrollArea}>
        {contacts.map((contact) => (
          <div key={contact.id} style={styles.contactItem}>
            <div style={styles.avatar}>{getInitials(contact.name)}</div>
            <span style={styles.contactName}>{contact.name}</span>
          </div>
        ))}
      </div>
      {isDialogOpen && (
        <>
          <div style={styles.overlay} onClick={() => setIsDialogOpen(false)} />
          <div style={styles.modal}>
            <h2 style={{ marginBottom: "15px"}}>Add a New Friend</h2>
            <form onSubmit={handleAddFriend}>
              <input
                type="email"
                placeholder="Enter friend's email"
                value={newFriendEmail}
                onChange={(e) => setNewFriendEmail(e.target.value)}
                required
                style={styles.input}
              />
              <button type="submit" style={{ ...styles.button, backgroundColor: "#2c7a2c", color: "white" }}>
                Add Friend
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  )
}

