import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';

export default function Property(props){

    const [hasColor, setHasColor] = useState(props.color != null);
    const [hasPrice, setHasPrice] = useState(props.price != null);
    const [hasIcon, setHasIcon] = useState(props.icon != null);
    const [icon, setIcon] = useState(props.icon);
    const cssProps = {color: props.color}

    const classes = useStyles(cssProps);

    return(
        <div className={classes.main}>
            {hasColor && <div className={classes.colorBar}></div>}
            <div className={classes.name}>{props.name.toUpperCase()}</div>
            {hasIcon && <img src={icon} className={classes.icon}/>}
            {hasPrice && <div className={classes.price}>{props.price}</div>}
        </div>
    )

}

const useStyles = makeStyles(() => ({
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
        bottom: '5px',
        left: '50%',
        transform: 'translate(-50%, 0)'
    }
}))