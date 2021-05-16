import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux'
import {PROPERTIES, getColor} from '../../config';

export default function PropertyPopup(props){
    const player = useSelector(state => state.lobbyReducer.userInfo)
    const properties = useSelector(state => state.lobbyReducer.game.properties)
    const me = useSelector(state => state.lobbyReducer.players.filter((p)=> p._id === player.id))[0]
    const classes = useStyles();
    const dispatch = useDispatch()

    let handleClose = () => {
        dispatch({type: "CLOSE_DORM"})
    }

    let handleDormTransaction = () => {
        console.log("BUY/SELL BUTTON")
    }


    return(
        <div style={{width: '100%', height: '100%'}}>
            <div className={classes.shadow}></div>
            <div className={classes.container}>
                <div className={classes.propertyText}>BUY</div>
                <div className={classes.topBox}>BUY DORMS/APTS</div>

                <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                    <div className={classes.box}>
                        <div className={classes.colorBar}>{player.name}</div>
                    </div>
                    {me.propertiesOwned.map((p, i)=>{
                        if(ownAll(p, me.propertiesOwned)){
                            return <div className={classes.wholeBox}>
                                <div key={i} className={classes.propertyBox}>
                                    <div style={{backgroundColor: getColor(p)}} className={classes.typeBox}></div>
                                    <p className={classes.text}>{PROPERTIES[p].name}</p>
                                </div>
                                <div className={classes.boxOfBoxes}>
                                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}}>
                                        <div className={classes.fillInBox} style={{backgroundColor: p.dormCount >=1 ? "#72E7DA" : 'none'}}></div>
                                        <div className={classes.fillInBox} style={{backgroundColor: p.dormCount >=2 ? "#72E7DA" : 'none'}}></div>
                                        <div className={classes.fillInBox} style={{backgroundColor: p.dormCount >=3 ? "#72E7DA" : 'none'}}></div>
                                        <div className={classes.fillInBox} style={{backgroundColor: p.dormCount >=4 ? "#72E7DA" : 'none'}}></div>
                                    </div>
                                    <div className={classes.bigFillInBox} style={{backgroundColor: p.dormCount === 5 ? "#72E7DA" : 'none'}}></div>
                                </div>
                                <button onClick={handleDormTransaction} className={classes.transactionButton}
                                    style={player.money > PROPERTIES[p].dormCost ? {opacity: '0.4', cursor: 'default'} : null}>BUY</button>
                            </div>
                        } else {
                            return null
                        }
                    })}
                </div>
                <button onClick={handleClose} className={classes.button} style={{width: '143px'}}>CONFIRM</button>
            </div>
        </div>
    )

}

const useStyles = makeStyles(() => ({
    container: {
        width: '524px',
        
        backgroundColor: '#C4B299',
        borderRadius: '10px',
        boxShadow: '4px 4px 13px rgba(0, 0, 0, 0.15)',
        position: 'absolute',
        top: '70px',
        left: '108px',
        zIndex: 5,
        padding: '20px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    shadow: {
        width: '100%',
        height: '100%',
        zIndex: 2,
        backgroundColor: '#C4B299',
        opacity: 0.3,
        position: 'relative',
        borderRadius: '10px'
    },
    propertyText: {
        fontFamily: 'ChelseaMarket',
        color: '#A8DDD7',
        fontSize: '42px',
        textAlign: 'center',
        margin: 0,
        marginBottom: '-10px',
        textShadow: '2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff, 1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff'
    },
    topBox: {
        marginTop: '19px',
        height: '60px',
        width: '482px',
        borderRadius: '10px',
        backgroundColor: '#F7F2E7',
        fontSize: '25px',
        fontFamily: 'VCR',
        color: '#7A6E5D',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    box: {
        borderRadius: '10px',
        backgroundColor: '#F7F2E7',
        height: '370px',
        width: '482px',
        marginTop: '19px',
        marginBottom: '16px',
        boxSizing: 'border-box',
    },
    wholeBox: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    boxOfBoxes: {
        width: '115px',
        height: '47px',
        display: 'flex'
    },
    fillInBox: {
        height: '20px',
        width: '20px',
        border: '0.5px dashed #000000'
    },
    bigFillInBox: {
        border: '0.5px dashed #000000',
        height: '20px',
        width: '113px'
    },
    colorBar: {
        height: '49px',
        backgroundColor: '#B6DAD6',
        width: '100%',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
        fontFamily: 'VCR',
        fontSize: '25px',
        lineHeight: '49px',
        textAlign: 'center',
        fontWeight: '400',
        color: '#433F36'
    },
    button: {
        color: 'white',
        borderRadius: '9px',
        fontSize: '22px',
        height: '35px',
        textShadow: '2px 2px 0px rgba(0, 0, 0, 0.25)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'ChelseaMarket',
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        backgroundColor: '#7A6E5D'
    },
    transactionButton: {
        width: '111px',
        height: '42px',
        backgroundColor: '#DADADA',
        borderRadius: '5px',
        color: '#433F36',
        fontSize: '20px',
        fontFamily: 'VCR',
        cursor: 'pointer'
    },
    propertyBox: {
        cursor: 'pointer',
        height: '46px',
        width: '199px',
        margin: 'auto',
        backgroundColor: 'white',
        position: 'relative',
        paddingLeft: '30px',
        paddingTop: '7px',
        boxSizing: 'border-box',
        marginBottom: '10px'
    },
    typeBox: {
        height: '38px',
        width: '17px',
        backgroundColor: 'black',
        top: '4px',
        left: '5px',
        position: 'absolute',
    },
    text: {
        fontSize: '13px',
        fontWeight: 400,
        color: '#433F36',
        textAlign: 'center',
        fontFamily: 'VCR',
        margin: 0,
        marginBottom: '6px',
        maxWidth: '175px'
    }
}))

let ownAll = (propertyNum, ownedProperties) => {
    if(propertyNum == 1 && ownedProperties.includes(1) && ownedProperties.includes(3)){
        return true;
    } else if(propertyNum == 3 && ownedProperties.includes(1) && ownedProperties.includes(3)){
        return true;
    } else if(propertyNum == 6 && ownedProperties.includes(6) && ownedProperties.includes(8) && ownedProperties.includes(9)){
        return true;
    } else if(propertyNum == 8 && ownedProperties.includes(6) && ownedProperties.includes(8) && ownedProperties.includes(9)){
        return true;
    } else if(propertyNum == 9 && ownedProperties.includes(6) && ownedProperties.includes(8) && ownedProperties.includes(9)){
        return true;
    } else if(propertyNum == 11 && ownedProperties.includes(11) && ownedProperties.includes(13) && ownedProperties.includes(14)){
        return true;
    } else if(propertyNum == 13 && ownedProperties.includes(11) && ownedProperties.includes(13) && ownedProperties.includes(14)){
        return true;
    } else if(propertyNum == 14 && ownedProperties.includes(11) && ownedProperties.includes(13) && ownedProperties.includes(14)){
        return true;
    } else if(propertyNum == 16 && ownedProperties.includes(16) && ownedProperties.includes(18) && ownedProperties.includes(19)){
        return true;
    } else if(propertyNum == 18 && ownedProperties.includes(16) && ownedProperties.includes(18) && ownedProperties.includes(19)){
        return true;
    } else if(propertyNum == 19 && ownedProperties.includes(16) && ownedProperties.includes(18) && ownedProperties.includes(19)){
        return true;
    } else if(propertyNum == 21 && ownedProperties.includes(21) && ownedProperties.includes(23) && ownedProperties.includes(24)){
        return true;
    } else if(propertyNum == 23 && ownedProperties.includes(21) && ownedProperties.includes(23) && ownedProperties.includes(24)){
        return true;
    } else if(propertyNum == 24 && ownedProperties.includes(21) && ownedProperties.includes(23) && ownedProperties.includes(24)){
        return true;
    } else if(propertyNum == 26 && ownedProperties.includes(26) && ownedProperties.includes(27) && ownedProperties.includes(29)){
        return true;
    } else if(propertyNum == 27 && ownedProperties.includes(26) && ownedProperties.includes(27) && ownedProperties.includes(29)){
        return true;
    } else if(propertyNum == 29 && ownedProperties.includes(26) && ownedProperties.includes(27) && ownedProperties.includes(29)){
        return true;
    } else if(propertyNum == 31 && ownedProperties.includes(31) && ownedProperties.includes(32) && ownedProperties.includes(34)){
        return true;
    } else if(propertyNum == 32 && ownedProperties.includes(31) && ownedProperties.includes(32) && ownedProperties.includes(34)){
        return true;
    } else if(propertyNum == 34 && ownedProperties.includes(31) && ownedProperties.includes(32) && ownedProperties.includes(34)){
        return true;
    } else if(propertyNum == 37 && ownedProperties.includes(37) && ownedProperties.includes(39)){
        return true;
    } else if(propertyNum == 39 && ownedProperties.includes(37) && ownedProperties.includes(39)){
        return true;
    } else {
        return false
    }

}