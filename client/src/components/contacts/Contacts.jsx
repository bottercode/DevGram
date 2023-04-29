import React,{ useState, useEffect} from 'react'
import classes from  "./contacts.module.css"

const Contacts = ({ contacts, changeChat }) => {
  const [currentUserName, setCurrentUserName] = useState(undefined);
  const [currentSelected, setCurrentSelected] = useState(undefined);

  useEffect(() => {
    const func = async() => {
      const data = await JSON.parse(  
        localStorage.getItem("Pro-Gram")
      );
      setCurrentUserName(data.username);
    }
    func();
  }, []);

  const changeCurrentChat = (index, contact) => {
    setCurrentSelected(index);
    changeChat(contact);
  };

  return (
    <div className={classes.ContactsContainer}>
       <div className={classes.contacts}>
            {contacts.map((contact, index) => {
              return (
                <div
                  key={contact._id}
                  className={`contact ${
                    index === currentSelected ? "selected" : ""
                  }`}
                  onClick={() => changeCurrentChat(index, contact)}
                >
                <div className={classes.username}>
                    <h3>{contact.username}</h3>
                  </div>
                </div>
              );
            })}
        </div>
        <div className={classes.username}>
                  <h2>{currentUserName}</h2>
          </div>
      </div>
  )
}

export default Contacts