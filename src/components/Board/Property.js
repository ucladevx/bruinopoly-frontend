import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux'
import {PROPERTIES} from '../../config'

export default function Property(props){
    const players = useSelector(state => state.lobbyReducer.game.players)
    const properties = useSelector(state => state.lobbyReducer.game.properties)

    const [hasColor, setHasColor] = useState(props.color !== null);
    const [hasPrice, setHasPrice] = useState(props.price !== null);
    const [hasIcon, setHasIcon] = useState(props.icon !== null);
    const [icon, setIcon] = useState(props.icon);
    const cssProps = {color: props.color}

    const classes = useStyles(cssProps);

    //TODO: DIFFERENTIATE OWNERSHIP BANNERS BETWEEN PLAYERS
    return(
        <div className={classes.main}>
            {properties[props.id].ownerId !== null && <div className={classes.ownership}></div>}
            {hasColor && <div className={classes.colorBar}></div>}
            <div className={classes.name}>{props.name.toUpperCase()}</div>
            {hasIcon && <img src={icon} style={props.small ? {width: '35px'}:null} className={classes.icon}/>}
            {hasPrice && <div className={classes.price}>{props.price}</div>}
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
    token: {
        height: '15px',
        width: '15px',
        borderRadius: '50%',
        backgroundColor: 'purple',
        zIndex: 5,
        position: 'absolute',
        top: '50px',
        left: '22px',
    },
    ownership: {
        position: 'absolute',
        height: '25px',
        width: '60px',
        backgroundColor: 'purple',
        top: '100px',
        borderBottomLeftRadius: '50%',
        borderBottomRightRadius: '50%'
    },
    main: props => ({
        height: '100px',
        width: '60px',
        backgroundColor: '#F7F2E7',
        outline: '1.5px solid #C4B299',
        fontFamily: 'ChelseaMarket',
        color: '#433F36',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
    }),
    colorBar: props => ({
        height: '20%',
        backgroundColor: props.color,
        width: '100%',
    }),
    name: {
        //height: '20%',
        width: '100%',
        fontSize: '9px',
        marginTop: '5px',
        marginBottom: '8px',
        transform: 'translate(0.5px, 0)'
    },
    icon: {
        width: '90%',
        alignSelf: 'center',
        //marginTop: '5px'
    },
    price:{
        fontSize: '8px',
        position: 'absolute',
        width: '90%',
        bottom: '5px',
        left: '50%',
        transform: 'translate(-50%, 0)'
    }
}))