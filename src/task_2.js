import React, { createContext, useContext, useState } from "react";
import { PhoneBookContext, Provider } from "./task_2_context";

const style = {
  table: {
    borderCollapse: "collapse",
  },
  tableCell: {
    border: "1px solid gray",
    margin: 0,
    padding: "5px 10px",
    width: "max-content",
    minWidth: "150px",
  },
  form: {
    container: {
      padding: "20px",
      border: "1px solid #F0F8FF",
      borderRadius: "15px",
      width: "max-content",
      marginBottom: "40px",
    },
    inputs: {
      marginBottom: "5px",
    },
    submitBtn: {
      marginTop: "10px",
      padding: "10px 15px",
      border: "none",
      backgroundColor: "lightseagreen",
      fontSize: "14px",
      borderRadius: "5px",
    },
  },
};

function PhoneBookForm() {
  const firstName = React.createRef();
  const lastName = React.createRef();
  const phone = React.createRef();
  const {updatePhoneBook} = useContext(PhoneBookContext);

  const handleClick = () => {
    if (firstName.current.value && lastName.current.value) {
      updatePhoneBook(`${firstName.current.value.toUpperCase()} ${lastName.current.value.toUpperCase()}`, phone.current.value);
    }    
  }

  return (
    <form style={style.form.container} action={`javascript:void(0)`}>
      <label>First name:</label>
      <br />
      <input style={style.form.inputs} className="userFirstname" name="userFirstname" type="text" ref={firstName}/>
      <br />
      <label>Last name:</label>
      <br />
      <input style={style.form.inputs} className="userLastname" name="userLastname" type="text" ref={lastName}/>
      <br />
      <label>Phone:</label>
      <br />
      <input style={style.form.inputs} className="userPhone" name="userPhone" type="text" ref={phone}/>
      <br />
      <input style={style.form.submitBtn} className="submitButton" type="submit" value="Add User" onClick={() => handleClick()}/>
    </form>
  );
}

function InformationTable() {

  const {phoneBook, deletePhoneBook} = useContext(PhoneBookContext);
  let keys = Array.from(phoneBook.keys());

  const handleClick = (event) => {
    let rowToBeDeleted = event.target.parentElement.parentElement.id;
    deletePhoneBook(keys[rowToBeDeleted]);
  }

  return (
    <table style={style.table} className="informationTable">
      <thead>
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
      </thead>
      <tbody>
        {keys.map((key, i) => 
          <tr id={i}>
            <td style={style.tableCell}>{key.split(" ")[0]}</td>
            <td style={style.tableCell}>{key.split(" ")[1]}</td>
            <td style={style.tableCell}>{phoneBook.get(key)}</td>
            <td style={style.tableCell}>
              <input style={style.form.submitBtn} type="submit" value="Delete" onClick={(e) => handleClick(e)}/>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default function Task_2() {  
  return (
    <section>
      <Provider>
        <PhoneBookForm/>
        <InformationTable/>
      </Provider>
    </section>
  );
}
