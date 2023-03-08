import { useDispatch, useSelector } from "react-redux";
import { addAttempts, addSumAttemts, startGame, winGame } from "../features/user/userSlice";

export const useNumber = () => {
    const dispatch = useDispatch();
    const { deposit } = useSelector(state => state.user);
    const bet = (deposit * 5) / 100;
    const winbet = +(bet * 10).toFixed(2);
    let random = Math.floor(Math.random() * 10) + 1;
    const result = +(winbet - bet).toFixed(2); 

    const handleRandomNumber = (num) => {
        
        dispatch(startGame(bet));
        
        if(Number(num) === random) {
            dispatch(winGame(winbet));
            dispatch(addAttempts([`${ num }: + ${ result }`]));
            dispatch(addSumAttemts(result));
        } else {
            dispatch(addAttempts([`${ num }: - ${bet}`]));
            dispatch(addSumAttemts(-bet));
        };
    };
    return { handleRandomNumber };
};