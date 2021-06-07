
import React from 'react'

const Contacts = ({contacts}) => {
  console.log(contacts[0])
    return (
        <div>
            <center><h1>Contact List</h1></center>
            {contacts.map((contact) => (
                        <img style={{margin: "20px"}} width="160" src={contact.Bild}/>
            ))}
        </div>
    )
};

export default Contacts