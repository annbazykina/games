import { useDispatch, useSelector } from "react-redux";
import { addAttempts, addSumAttemts, startGame, winGame } from "../features/user/userSlice";

export const useDoor = () => {
    const dispatch = useDispatch();
    const { deposit } = useSelector(state => state.user);
    let random = Math.floor(Math.random() * 3) + 1;
    const bet = (deposit * 5) / 100 ;
    const winbet = +(bet * 3).toFixed(2);
    const result = +(winbet - bet).toFixed(2);

    const handleChooseDoor = (choice) => {
        dispatch(startGame(bet));
    
        if(choice === random) {
            dispatch(winGame(winbet));
            dispatch(addAttempts([`${choice}: + ${ result }`]));
            dispatch(addSumAttemts(result));
            
        } else {
            dispatch(addAttempts([`${choice}: - ${ bet }`]));
            dispatch(addSumAttemts(-bet));
            
        };
    };
    
    return { handleChooseDoor };
};