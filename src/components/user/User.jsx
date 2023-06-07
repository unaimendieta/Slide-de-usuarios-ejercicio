import { useState } from "react";
import Button from "../user/button/Button";


import { USERS } from "../../constants/users";



const User = () => {
	const [userCont, setUserCont] = useState(0);
    let buttonPrev = false; 
    let buttonNext = false; 
	
	console.log(userCont);
	return (
	<>
    <img src={USERS[userCont].profileImage} alt="" />
	<h1>Name: {USERS[userCont].name}</h1>
    <p>Username: {USERS[userCont].username}</p>
    <p>Email: {USERS[userCont].email}</p>
    {userCont===0 ? (
        buttonPrev=true
      ) : (
        buttonPrev=false
      )}
    {userCont===(USERS.length-1) ? (
        buttonNext=true
      ) : (
        buttonNext=false
      )}
    <Button buttonState={buttonPrev}  text="Previous" handleClick={()=>previous(userCont, setUserCont)} />
    <Button buttonState={buttonNext} text="Next" handleClick={()=>next(userCont, setUserCont)}/>
	</>
	);
};
const previous = (userCont, setUserCont) => {
    setUserCont(userCont-1);
};
const next = (userCont, setUserCont) => {
    setUserCont(userCont+1);
};
export default User;