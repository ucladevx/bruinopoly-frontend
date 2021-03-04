import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux'
import {playerDetails} from '../../config'

export default function Property(props){
    const players = useSelector(state => state.lobbyReducer.game.players)
    const [icon, setIcon] = useState(props.icon);

    const classes = useStyles();

    return(
        <div className={classes.main}>
            <img src={icon} className={classes.icon}/>
            {players.map((player, i)=>{
                if(player.currentTile === props.id)
                    return <img key={i} className={classes.token} src={playerDetails[i].img} />
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
        height: '40px',
        zIndex: 5,
        position: 'absolute',
        left: '20px',
        top: '20px'
    },
}))