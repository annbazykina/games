// import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addResult, deleteAttempts, setUserDeposit, setUserLogo, setUserName, tryAgainGame } from "../features/user/userSlice";
import { games } from "../gamesData";
import { useEffect } from "react";

export const useUser = () => {
    const { name, deposit, logo, balance, sum } = useSelector(state => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { gamePage } = useParams();

    const currentGame = games.filter(game => 
            game.id === gamePage).pop();


    const handleChange = (val) => {
        return (e) => {
            val === 'userName' ? 
            dispatch(setUserName(e.target.value)) 
            : 
            dispatch(setUserDeposit(e.target.value));
        }
    };

    const handleChangeLogo = () => {
        return (e) => {dispatch(setUserLogo(URL.createObjectURL(e.target.files[0])))};
    };

    const handleStartBtn = () => {
    
        navigate('/games');
    };


    const handleAgainBtn = () => {
        dispatch(tryAgainGame());
        navigate("/");
    };

    const handleBackToGames = () => {
        dispatch(addResult(`${currentGame.gameName}: ${sum}`))
        navigate('/games');
        dispatch(deleteAttempts());

    };


    return { 
        name, 
        deposit, 
        logo, 
        // error,
        handleChange, 
        handleChangeLogo, 
        handleStartBtn, 
        handleAgainBtn, 
        handleBackToGames, 
        // handleWinorLose,
        
    };
};