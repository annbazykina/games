import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import  { addAttempts, startGame, winGame, addSumAttemts } from "../features/user/userSlice";

export const useCoin = () => {
    const { deposit } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const [side, setSide] = useState(1);

    const bet = (deposit * 5) / 100;
    const random = Math.round(Math.random());
    const winbet = +(bet * 2).toFixed(2);
    const result = +(winbet - bet).toFixed(2);

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