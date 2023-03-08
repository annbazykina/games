import './games.css';
import { Link } from 'react-router-dom';
import { games } from '../../gamesData';
import { useSelector } from 'react-redux';

export const HomeGames = () => {
    const { result } = useSelector(state => state.user);

    return (
        <div className="homeGames">
            <div className="homeGamesItem">
            
                <div className="title">Доступні ігри</div>
                <div className="homeGamesItemChooseGame">
                    
                    {games.map((game) => 
                        (
                            <div key={game.id} className="homeGamesItemChooseGameLink">
                                <Link to={`/games/${game.id}`} style={{textDecoration: 'none'}}>
                                    <h3>{ game.gameName }</h3>
                                    <img src={ game.img } alt={ game.gameName } />
                                </Link>
                            </div>
                        )
                    )}

                </div>
                <div className='homeGamesGoal'>Мета гри подвоїти початковий депозит, граючи в ігри</div>
            </div>
            <div className="gamesPage">
                <div className="gamesPageResult">
                    <div className="gamesAttempt title">Результати</div>
                    <ul>
                        {result.map((gameResult, index) => (<li key={index}>{gameResult}</li>))}
                    </ul>
                </div>
            </div>
                
                
        </div>
        
    );
};