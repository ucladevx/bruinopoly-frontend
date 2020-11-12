import React, {useState} from 'react'
import {Redirect} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';

import bruin from '../assets/bruinman.png'
import paw from '../assets/paw.png'
import bruinopoly from '../assets/bruinopoly.png'


export default function Signup(props){
    const classes = useStyles();
    const [major, setMajor] = useState("")
    const [year, setYear] = useState("")
    const [name, setName] = useState("")

    //redirect to lobby page if info is already stored in cookies
    // if(props.redirect && props.redirect !== "null"){
    //     return <Redirect to={{ pathname: '/' }} />
    // }

    let handleSubmit = () => {
        console.log("submit")
    }

    return (
        <div>
            <div className={classes.container}>
                <div className={classes.contentBox}>
                    <img src={bruinopoly} className={classes.titleImage}/>
                    <img src={bruin} className={classes.bruin} />
                    <img src={paw} className={classes.paw} />
                    <h2 className={classes.subtitle}>SIGN UP</h2>
                    <div style={{background: ''}}>
                        <div className={classes.subBox}>
                            <span className={classes.text}>Name</span>
                            <input className={classes.input} type="text" style={{width: '350px'}} />
                        </div>
                        <div  className={classes.subBox}>
                            <span className={classes.text}>Major</span>
                            <select className={classes.input} style={{width: '350px'}}>
                                <option>Default</option>
                            </select>
                        </div>
                        <div  className={classes.subBox}>
                            <span className={classes.text}>Year</span>
                            <select className={classes.input} style={{width: '260px'}}>
                                <option>Default</option>
                            </select>
                        </div>
                    </div>
                    <button className={classes.button} onClick={handleSubmit}>ENTER</button>
                </div>
            </div>
        </div>
    )
}

const useStyles = makeStyles(() => ({
    container : {
        
    },
    titleImage: {
        height: 'auto',
        width: 'auto',
        maxWidth: '500px',
        maxHeight: '200px',
        position: 'absolute',
        top: '-110px',
        left: '20px'
    },
    bruin: {
        height: '200px',
        width: 'auto',
        position: 'absolute',
        top: '-194px',
        right: '0px'
    },
    paw: {
        height: '86px',
        width: '86px',
        position: 'absolute',
        left: '15px',
        top: '30px'
    },
    contentBox: {
        margin: '200px auto 0px auto',
        backgroundColor: '#F1EEDE',
        width: '675px',
        height: '450px',
        boxSizing: 'border-box',
        boxShadow: '7px 7px 0px #32312D',
        position: 'relative',
        borderRadius: '30px',
        border: '3px solid #32312D'
    },
    subtitle: {
        fontFamily: 'Chelsea Market',
        textAlign: 'center',
        fontSize: '46px',
        fontWeight: '400',
        marginTop: '15px',
        paddingBottom: '15px',
        borderBottom: '2px solid #32312D'
    },
    button: {
        fontFamily: 'Chelsea Market',
        fontSize: '35px',
        boxSizing: 'border-box',
        height: '75px',
        width:' 330px',
        borderRadius: '17px',
        border: '3px solid #32312D',
        boxShadow: '3.5px 6px 1.2px #32312D',
        backgroundColor: '#F1EEDE',
        position: 'absolute',
        bottom: '-122px',
        left: '160px',
        cursor: 'pointer'
    },
    subBox: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: '57px'
    },
    text: {
        fontFamily: 'Chelsea Market',
        fontWeight: '400',
        width: '140px',
        fontSize: '36px',
        marginLeft: '60px',
        marginRight: '40px'
    },
    input: {
        fontFamily: 'Chelsea Market',
        fontSize: '20px',
        paddingLeft: '13px',
        boxSizing: 'border-box',
        fontWeight: '400',
        backgroundColor: '#F1EEDE',
        height: '35px',
        border: '1.5px solid #32312D',
        outline: 'none',
        borderRadius: '10px'
    }
}))