export const Button = ({ classBtn, title, handleButton, type, disabled }) => {

    return (
        <>
            <button className={classBtn} onClick={() => handleButton()} type={type} disabled={disabled}> {title} </button> 
            
        </>
    );
};