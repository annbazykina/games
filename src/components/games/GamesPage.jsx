import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { games } from "../../gamesData";
import { useUser } from "../../hooks/useUser";
import { Button } from "../button/Button";
import { GamesRuleButtons } from "./GamesRuleButtons";

export const GamePage = () => {
    const { handleBackToGames } = useUser();
    
    const { attempts } = useSelector(state => state.user);
    const {gamePage} = useParams();

    let currentPage = {};
    games.forEach((game) => {
        if(game.id === gamePage) currentPage = game;
    });

    return (
        <div className="gamesPage">
            <div className="gamesPageItem">
                <h3>{currentPage.gameName}</h3>
                <div>
                    <div className="gamesCoinDescription">{currentPage.description}</div>
                </div>
                    
                <GamesRuleButtons currentPage={currentPage}/>
                <Button title={"Вибрати гру"} classBtn={"btn btnChoose"} handleButton={() => handleBackToGames()} />
            </div>
            <div className="gamesPage">
                <div className="gamesPageResult">
                    <div className="gamesAttempt title">Минулі спроби</div>
                
                    <ul>
                        {attempts.map((result, index) => (<li key={index}>{result}</li>))}
                    </ul>
                </div>
                
            </div>
            
        </div>
    )
};