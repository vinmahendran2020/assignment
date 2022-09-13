import React, { createContext, useContext, useState } from "react";

export const PhoneBookContext = createContext({phoneBook: {}, setPhoneBook: ()=> {}, updatePhoneBook: () => {}, deletePhoneBook: () =>{}});

export const Provider = (props) => {
  const [ phoneBook, setPhoneBook ] = useState(new Map());
  const updatePhoneBook = (key, value) => {
    if (phoneBook.has(key)) {
      alert('Duplicate First & Last Name');
    } else {
      let newMap = new Map(phoneBook);
      newMap.set(key, value);
      setPhoneBook(newMap);
    }
  };
  const deletePhoneBook = (key) => {
    if (phoneBook.has(key)) {
      let newMap = new Map(phoneBook);
      newMap.delete(key);
      setPhoneBook(newMap);
    }
  };

  return <PhoneBookContext.Provider value={{
    phoneBook: phoneBook,
    setPhoneBook: setPhoneBook,
    updatePhoneBook: updatePhoneBook,
    deletePhoneBook: deletePhoneBook
  }}>{props.children}</PhoneBookContext.Provider>
}
