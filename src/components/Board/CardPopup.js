import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';

//replace with enum in config file
const EXCUSE_ME_SIR = 0;
const FIN_AID = 1;

export default function CardPopup(props){
    const classes = useStyles();

    return(
        <div style={{width: '100%', height: '100%'}}>
            <div className={classes.shadow}></div>
            <div className={classes.container} style={{backgroundColor: props.info.type == EXCUSE_ME_SIR ? "#F5D34D" : "#A8DDD7"}}>
                <p className={classes.titleText}>{props.info.type == EXCUSE_ME_SIR ? "EXCUSE ME SIR" : "FINANCIAL AID OFFICE"}</p>
                <div className={classes.subBox}>
                    <p className={classes.innerText} style={{color: '#433F36'}}>PLAYER 1</p>
                    <p className={classes.innerText} style={{color: '#7A6E5D'}}>{props.info.text.toUpperCase()}</p>
                </div>
            </div>
        </div>
       
    )

}

//background color should depend on props
const useStyles = makeStyles(() => ({
    container: {
        width: '524px',
        height: '305px',
        borderRadius: '10px',
        boxShadow: '4px 4px 13px rgba(0, 0, 0, 0.15)',
        position: 'absolute',
        top: '220px',
        left: '108px',
        zIndex: 5,
        padding: '22px',
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
    titleText: {
        fontSize: '38px',
        fontFamily: 'ChelseaMarket',
        fontWeight: 400,
        color: 'white',
        textShadow: '2.3341px 2.3341px 0px rgba(0, 0, 0, 0.25)',
        margin: 0
    },
    subBox: {
        width: '478px',
        height: '203px',
        backgroundColor: '#F7F2E7',
        borderRadius: '10px',
        marginTop: '15px',
        paddingTop: '20px'
    },
    innerText: {
        fontFamily: 'VCR',
         fontSize: '25px',
         fontWeight: 400,
         margin: 0,
         textAlign: 'center',
         lineHeight: '45px'
    }
}))