import { useSelector } from "react-redux";
import { useUser } from "../../hooks/useUser";
import { Button } from "../button/Button";
import './win.css';

export const WinOrLose  = () => {
    const { deposit, balance } = useSelector(state => state.user);
    const { name, handleAgainBtn } = useUser();

    return (
        <div className="app">
            <div className="win">
            
                <div className="winLosePage">

                    { balance >= deposit * 2 ? 
                        `Вітаємо ${name}, ви змогли подвоїти ваш депозит з ${deposit}$ до ${balance}$!`
                    :   
                        `${name}, ви не змогли подвоїти ваш депозит з ${deposit}$, можливо наступного разу пощастить.`
                    } 

                </div>
                <Button title={'Заново'} classBtn={'btn'} handleButton={handleAgainBtn}/>
            </div>

        </div>
    );
};