import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux'
import {playerDetails} from '../../config'

export default function Property(props){
    const players = useSelector(state => state.lobbyReducer.game.players)
    const properties = useSelector(state => state.lobbyReducer.game.properties)

    const [ownerIndex, setOwner] = useState(0)
    const cssProps = {color: props.color}
    const classes = useStyles(cssProps);

    useEffect(()=>{
        if(properties[props.id].ownerId === null) setOwner(null)
        
        players.forEach((p, i)=>{
            if(p._id === properties[props.id].ownerId)
                setOwner(i)
        })
    }, [properties[props.id].ownerId])

    return(
        <div className={classes.main}>
            {properties[props.id].ownerId !== null && <div className={classes.ownership} style={{backgroundColor: playerDetails[ownerIndex].color}}></div>}
            {props.color !== null && <div className={classes.colorBar}></div>}
            <div className={classes.name}>{props.name.toUpperCase()}</div>
            {props.icon !== null && <img src={props.icon} style={{width: props.small ? '35px' : '90%', marginBottom: props.padding ? '20px': null}} className={classes.icon}/>}
            {props.price !== null && <div className={classes.price}>{props.price}</div>}
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
    token: {
        height: '40px',
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
        fontSize: '9px',
        position: 'absolute',
        width: '90%',
        bottom: '5px',
        left: '50%',
        transform: 'translate(-50%, 0)'
    }
}))