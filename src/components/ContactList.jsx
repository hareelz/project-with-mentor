import React, { useContext, useEffect } from 'react'
import { contactCotentext } from '../context/ContactContextProvider'
import ContactCard from './ContactCard'

const ContactList = () => {
    const {getContacts, contacts} = useContext(contactCotentext)
    useEffect(() => {
        getContacts()
    }, [])
    
  return (
    <div style={{display: 'flex', flexWrap: 'wrap'}}>{contacts.map((contact) => <ContactCard {...contact} key={contact.id}/>)}</div>
  )
}

export default ContactList