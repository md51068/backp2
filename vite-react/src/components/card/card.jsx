import Icon from "../icon/icon";
import "./card.css";
function Card({player,GameEnd,onPlay,index}){
    let icon = <Icon />
    if(player=="x"){
        icon=<Icon name="cross"/>
    }else if(player=="o"){
        icon=<Icon name="circle"/>
    }
    return(
        // player === "": Ensures the card is currently unoccupied by any player.
        <div className="card" onClick={()=>!GameEnd &&player===""&& onPlay(index)}>
            {icon}
        </div>
    )
}

export default Card; 

