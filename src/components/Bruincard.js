import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import roycehall from '../assets/Royce.png';
import bruin from '../assets/bruinman.png'
import blob1 from '../assets/blob2.png'

export default function Bruincard(props){
    const classes = useStyles();

    return (
        <div className={classes.container}>
           <img alt="royce hall" className={classes.royce} src={roycehall} />
           <img alt="bruin man" className={classes.bman} src={bruin} />
           <img alt="colored blob" className={classes.blob} src={blob1} />
           <div className={classes.box}>
                <p style={{marginTop: '10px', marginBottom: '5px'}} className={classes.text}>{props.user.name.toUpperCase()}</p>
                <p className={classes.text}>{`$${props.user.money}`}</p>
           </div>
           <div className={classes.bluebox}>
                <p className={classes.b1}>BRUINOPOLY</p>
                <p className={classes.b2}>BRUINCARD</p>
           </div>
        </div>
    )
}

const useStyles = makeStyles(() => ({
    container: {
        width: '416px',
        height: '227px',
        backgroundColor: 'white',
        borderRadius: '15px',
        boxShadow: '-5px 4px 31px rgba(0, 0, 0, 0.1)',
        position: 'relative'
    },
    royce: {
        position: 'absolute',
        bottom: '83px',
        left: '25px',
        height: '120px',
        width: 'auto',
        zIndex: '2'
    },
    bman: {
        position: 'absolute',
        height: '105px',
        width: 'auto',
        right: '28px',
        bottom: '68px'
    },
    blob: {
        position: 'absolute',
        width: '180px',
        height: '229px',
        left: '40px',
        bottom: '0px',
        transform: 'rotate(90deg)'
    },
    bluebox: {
        position: 'absolute',
        bottom: '11px',
        right: '12px',
        height: '75px',
        width: '155px',
        backgroundColor: '#B6DAD6',
        borderRadius: '10px',
        zIndex: '4',
        paddingLeft: '6px'
    },
    box: {
        position: 'absolute',
        bottom: '11px',
        left: '12px',
        width: '392px',
        height: '75px',
        backgroundColor: '#EFE9DB',
        borderRadius: '10px',
        zIndex: '3',
        paddingLeft: '12px',
        boxSizing: 'border-box'
    },
    b1: {
        fontSize: '22px',
        color: 'white',
        fontFamily: 'ChelseaMarket',
        letterSpacing: '0.05em',
        margin: 0,
        marginTop: '9px',
        marginBottom: '7px'
    },
    b2: {
        fontSize: '21px',
        fontFamily: 'VCR',
        color: '#FBF072',
        margin: 0,
        letterSpacing: '0.2em'
    },
    text: {
        fontSize: '25px',
        fontFamily: 'VCR',
        color: '#7A6E5D',
        margin: 0
    }
}))
