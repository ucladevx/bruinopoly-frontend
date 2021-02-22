import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import arrow from '../../assets/price_change.png'

export default function SalePopup(props){
    const [pay, changePay] = useState(0)
    const [receive, changeReceive] = useState(0)
    const classes = useStyles();

    const handleIncrease = (bool) => {
        if(bool===true){
            changePay(pay + 10)
        } else {
            changeReceive(receive + 10)
        }
    }

    const handleDecrease = (bool) => {
        if(bool===true){
            if(pay - 10 >= 0)
                changePay(pay - 10)
        } else {
            if(receive - 10 >= 0)
            changeReceive(receive - 10)
        }
    }

    return(
        <div style={{width: '100%', height: '100%'}}>
            <div className={classes.shadow}></div>
            <div className={classes.container}>
                <div className={classes.tradeText}>TRADE</div>
                <div style={{display: 'flex', justifyContent: 'space-between', width: '482px', marginTop: '24px', marginBottom: '20px'}}>
                    <div className={classes.box}>
                        <div className={classes.colorBar}>PLAYER 1</div>
                        <div className={classes.money}>$ {pay}
                            <img src={arrow} className={classes.arrow} style={{transform: 'rotate(180deg)',bottom: '5px', right: '15px'}} alt="lower price"
                                onClick={()=>{handleDecrease(true)}}/>
                            <img src={arrow} className={classes.arrow} style={{top: '5px', right: '15px'}} alt="raise price"
                                onClick={()=>{handleIncrease(true)}}/>
                        </div>
                        <div className={classes.propertyBox}>
                            <div className={classes.typeBox}></div>
                            <p className={classes.text}>SCHOENBERG MUSIC HALL</p>
                            <p className={classes.text}>$140</p>
                        </div>
                    </div>
                    <div className={classes.box}>
                        <div className={classes.colorBar}>PLAYER 2</div>
                        <div className={classes.money}>$ {receive}
                            <img src={arrow} className={classes.arrow} style={{transform: 'rotate(180deg)',bottom: '5px', right: '15px'}} alt="lower price"
                                onClick={()=>{handleDecrease(false)}}/>
                            <img src={arrow} className={classes.arrow} style={{top: '5px', right: '15px'}} alt="raise price"
                                onClick={()=>{handleIncrease(false)}}/>
                        </div>
                        <div className={classes.propertyBox}>
                            <div className={classes.typeBox}></div>
                            <p className={classes.text}>SCHOENBERG MUSIC HALL</p>
                            <p className={classes.text}>$140</p>
                        </div>
                    </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-around', width: '78%'}}>
                    <button className={classes.button} style={{width: '158px'}}>OFFER</button>
                    <button className={classes.button} style={{width: '158px'}}>CANCEL</button>
                </div>
            </div>
        </div>
       
    )

}

const useStyles = makeStyles(() => ({
    container: {
        width: '524px',
        height: '526px',
        backgroundColor: '#C4B299',
        borderRadius: '10px',
        boxShadow: '4px 4px 13px rgba(0, 0, 0, 0.15)',
        position: 'absolute',
        top: '108px',
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
    tradeText: {
        fontFamily: 'ChelseaMarket',
        color: '#A8DDD7',
        fontSize: '42px',
        textAlign: 'center',
        margin: 0,
        marginBottom: '-10px',
        textShadow: '2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff, 1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff'
    },
    topBox: {
        height: '38px',
        width: '482px',
        borderRadius: '10px',
        backgroundColor: '#EFE9DB',
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
        width: '227px',
        boxSizing: 'border-box',
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
    arrow: {
        height: '14px',
        position: 'absolute',
        highlight: 'none',
        userDrag: 'none',
        cursor: 'pointer'
    },
    money: {
        height: '42px',
        width: '110px',
        borderRadius: '50px',
        backgroundColor: '#DADADA',
        display: 'flex',
        boxSizing: 'border-box',
        paddingLeft: '30px',
        alignItems: 'center',
        position: 'relative',
        margin: 'auto',
        marginTop: '8px',
        marginBottom: '15px'
    },
    propertyBox: {
        height: '46px',
        width: '199px',
        margin: 'auto',
        backgroundColor: 'white',
        position: 'relative',
        paddingLeft: '30px',
        paddingTop: '7px',
        boxSizing: 'border-box',

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