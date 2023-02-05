import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Wrapper from "../Helpers/Wrapper";
//Style-Sheet
import classes from "./AddUsers.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [enteredUsername, setUsername] = useState("");
  // const [enteredAge, setAge] = useState("");
  const [error, setError] = useState("");

  //Handler
  // const usernameChangeHandler = (event) => {
  //   setUsername(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setAge(event.target.value);
  // };

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredUsername = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    // console.log(enteredUsername, enteredAge);

    //Validation
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Check the Name or Age Input Area",
        message: "Please fill the empty area in the form",
      });

      return;
    }
    if (+enteredAge < 1) {
      setError({ title: "Invalid Age Info", message: "Please enter the age properly ( > 0 )" });
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);
    // setAge("");
    // setUsername("");
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const removeModalHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onRemoveModal={removeModalHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">User Name</label>
          <input
            id="username"
            type="text"
            // onChange={usernameChangeHandler}
            // value={enteredUsername}
            ref={nameInputRef}
          ></input>
          <label htmlFor="age">Age (years)</label>
          <input
            id="age"
            type="number"
            // onChange={ageChangeHandler}
            // value={enteredAge}
            ref={ageInputRef}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
