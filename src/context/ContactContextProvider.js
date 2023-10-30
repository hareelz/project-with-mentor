import axios from "axios";
import React, { createContext, useState } from "react";

export const contactCotentext = createContext();

const API = "http://localhost:8000/contacts";

const ContactContextProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [oneContact, setOneContact] = useState(null);
  //! add(create)

  async function addContact(newContact) {
    await axios.post(API, newContact);
  }

  //!create  {
  async function getContacts() {
    const result = await axios(API);
    setContacts(result.data);
  }

  //!delete {
  async function deleteContact(id) {
    await axios.delete(`${API}/${id}`);
    getContacts();
  }

  //!  get one contact
  async function getOneContact(id) {
    const result = await axios(`${API}/${id}`);
    setOneContact(result.data);
  }
  //! save changes
  async function saveContact(id, editedContact) {
    await axios.patch(`${API}/${id}`, editedContact);
    getContacts();
  }
  return (
    <contactCotentext.Provider
      value={{
        addContact,
        getContacts,
        contacts,
        deleteContact,
        getOneContact,
        oneContact,
        saveContact,
      }}
    >
      {children}
    </contactCotentext.Provider>
  );
};

export default ContactContextProvider;
