import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux'

export default function Property(props){
    const players = useSelector(state => state.lobbyReducer.game.players)
    const [icon, setIcon] = useState(props.icon);

    const classes = useStyles();

    return(
        <div className={classes.main}>
            <img src={icon} className={classes.icon}/>
            {players.map((player, i)=>{
                if(player.currentTile === props.id)
                    return <div key={i} className={classes.token}></div>
                else
                    return null
            })}
        </div>
    )

}

const useStyles = makeStyles(() => ({
    main: {
        height: '100px',
        width: '100px',
        position: 'relative'
    },
    icon: {
        height: '100%',
    },
    token: {
        height: '15px',
        width: '15px',
        borderRadius: '50%',
        backgroundColor: 'purple',
        zIndex: 5,
        position: 'absolute',
        left: '10px',
        top: '10px'
    },
}))