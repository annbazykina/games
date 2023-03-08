import { useUser } from "../../hooks/useUser";

export const Button = ({ classBtn, title, handleButton, type, disabled }) => {
    const {handleWinorLose} = useUser();

    return (
        <>
            <button className={classBtn} onClick={() => handleButton()} type={type} disabled={disabled}> {title} </button> 
            
        </>
    )
};