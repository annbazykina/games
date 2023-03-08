import { useSelector } from "react-redux";
import { useUser } from "../../hooks/useUser";
import { Button } from "../button/Button";


export const UserStatus = () => {
    const { handleAgainBtn } = useUser();
    const {name, deposit, logo, balance} = useSelector(state => state.user);

    return (
        <div className="userInformation">
            <div className="logo">
                { logo ? <img src={ logo } alt='Logo' className="logoUser" /> : null}
            </div>
            <div>{name}</div>
            <div>{`Депозит ${deposit}$`}</div>
            <div>{`Баланс ${balance}$`}</div>
            <Button title={'Заново'} classBtn={'btn btnAgain'} handleButton={handleAgainBtn}/>
        </div>
    );
};