import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import  { addAttempts, startGame, winGame, addResult, addSumAttemts } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

export const useCoin = () => {
    const { deposit, balance } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    console.log('coin');

    const [side, setSide] = useState(1);
    const bet = (deposit * 5) / 100;
    const random = Math.round(Math.random());
    const winbet = +(bet * 2).toFixed(2);
    const result = +(winbet - bet).toFixed(2);

    useEffect(() => {
        if(balance >= deposit * 1.5 || balance < 0) {
            console.log('Hello from useCoin');
            navigate("/winlose");
        };
    }, [balance]);

    const tossCoin = (val) => {
        
        dispatch(startGame(bet));

        setSide(random);
        if(val === side) {
            dispatch(winGame(winbet));
            dispatch(addAttempts([`${val ? 'Орел' : 'Решка'} : + ${ result }`]));
            dispatch(addSumAttemts(result));
        } else {
            dispatch(addAttempts([`${val ? 'Орел' : 'Решка'} : - ${bet}`]));
            dispatch(addSumAttemts(-bet));
        }
    };

    return { side, tossCoin };
}; 