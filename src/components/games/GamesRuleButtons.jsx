import { useRef } from "react";
import { useCoin } from "../../hooks/useCoin";
import { useNumber } from "../../hooks/useNumber";
import { Button } from "../button/Button";
import { ButtonDoor } from "../button/ButtonDoor";

export const GamesRuleButtons = ({currentPage}) => {

    const { handleRandomNumber } = useNumber();
    const {tossCoin} = useCoin();
    const inputNumRef = useRef();
    
    return (
        <div>
            {
                currentPage.gameName === 'Вгадай двері' ?
        
                    <div className="gamesDoor">
                        <ButtonDoor num={1} el={"btn-open"}/>
                        <ButtonDoor num={2} el={"btn-open"}/>
                        <ButtonDoor num={3} el={"btn-open"}/>
                        
                    </div>

                : currentPage.gameName === 'Вгадай число' ?

                    <div className="gamesNumber">
                        <form >
                            <input 
                                min="1"
                                max="10"
                                className="inputGuessNumber"
                                type="number" 
                                ref={inputNumRef}
                            />
                        </form>
                        <Button 
                            title={"Спробувати"} 
                            classBtn={"btnRandomNum"} 
                            handleButton={() => { handleRandomNumber(inputNumRef.current.value)}} 
                            // disabled={ inputNumRef.current.value > 10 || inputNumRef.current.value <= 0 ? 'disabled' : null} 
                        />
                    </div>
                :   
            
                    <div className="gamesCoin">
                        <Button title={"Орел"} classBtn={"btnHeadTail"} handleButton={() => { tossCoin(1) }} />
                        <Button title={"Решка"} classBtn={"btnHeadTail"} handleButton={() => { tossCoin(0) }} />
                    </div>
            }
        </div>
    )

};