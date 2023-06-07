
const ButtonSumar = ({handleClick, text, buttonState}) => {

	
	return (
	<>
	{buttonState ? (
        <button onClick={handleClick} disabled>{text}</button>
      ) : (
        <button onClick={handleClick} >{text}</button>
      )} 
	</>
	);
	
};

export default ButtonSumar;