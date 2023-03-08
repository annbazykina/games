import { useDoor } from "../../hooks/useDoor";
import { useUser } from "../../hooks/useUser";



export const ButtonDoor = ({num, el}) => {
    const { handleWinorLose } = useUser();
    const { handleChooseDoor } = useDoor();
    return (
            <button onClick={() => handleChooseDoor(num)} className={el}><span className="doornum">{num}</span></button>
    )
};