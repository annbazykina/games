import { useDoor } from "../../hooks/useDoor";



export const ButtonDoor = ({num, el}) => {
    const { handleChooseDoor } = useDoor();
    return (
            <button onClick={() => handleChooseDoor(num)} className={el}><span className="doornum">{num}</span></button>
    );
};