import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';

export default function Property(props){

    const [icon, setIcon] = useState(props.icon);

    const classes = useStyles();

    return(
        <div className={classes.main}>
            <img src={icon} className={classes.icon}/>
        </div>
    )

}

const useStyles = makeStyles(() => ({
    main: {
        height: '100px',
        width: '100px',
    },
    icon: {
        height: '100%'
    }
}))