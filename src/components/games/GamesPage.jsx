import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { games } from "../../gamesData";
import { useUser } from "../../hooks/useUser";
import { Button } from "../button/Button";
import { GamesRuleButtons } from "./GamesRuleButtons";
import { useEffect } from "react";

export const GamePage = () => {
    const { handleBackToGames } = useUser();
    
    const { attempts } = useSelector(state => state.user);
    const {gamePage} = useParams();
    const navigate= useNavigate();
    const { deposit, balance } = useSelector(state => state.user);
    

    let currentPage = {};
    games.forEach((game) => {
        if(game.id === gamePage) currentPage = game;
    });

    useEffect(() => {
        if(balance >= deposit * 2 || balance < 0) {
            navigate("/winlose");
        };
    }, [balance]);

    return (
        <div className="gamesPage">
            <div className="gamesPageItem">
                <h2>{currentPage.gameName}</h2>
                <div>
                    <div className="gamesCoinDescription">{currentPage.description}</div>
                </div>
                    
                <GamesRuleButtons currentPage={currentPage}/>
                <Button title={"Вибрати гру"} classBtn={"btn btnChoose"} handleButton={handleBackToGames} />
            </div>
            <div className="gamesPage">
                <div className="gamesAttempt title">Минулі спроби</div>
                <div className="gamesPageResult">
                    
                
                    <ul>
                        {attempts.map((result, index) => (<li key={index}>{result}</li>))}
                    </ul>
                </div>
                
            </div>
            
        </div>
    );
};