import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';

export default function Popup(props){
    const classes = useStyles();

    return(
        <div style={{width: '100%', height: '100%'}}>
            <div className={classes.shadow}></div>
            <div className={classes.container}>
                <div className={classes.close}>X</div>
                <div className={classes.saleText}>FOR SALE</div>
                <div className={classes.topBox}>${`${140}`}</div>
                <div style={{display: 'flex', justifyContent: 'space-between', width: '482px', marginTop: '24px'}}>
                    <div className={classes.box}>
                        <div className={classes.colorBar}></div>
                        <p className={classes.leftText} style={{marginBottom: '160px', marginTop: '15px'}}>Schoenberg Music Hall</p>
                        <p className={classes.leftText}>Price: ${`${140}`}</p>
                    </div>
                    <div style={{padding: '13px'}} className={classes.box}>
                        <div className={classes.colorBox}>Schoenberg Music Hall</div>
                        <p className={classes.rent} style={{marginBottom: '8px', marginTop: '13px'}}>Rent: ${`${10}`}</p>
                        <div className={classes.detailBox}> 
                            <p className={classes.rent} style={{fontSize: '16px'}}>With 1 Dorm</p>
                            <p className={classes.rent} style={{fontSize: '16px'}}>${`${50}`}</p>
                        </div>
                        <div className={classes.detailBox}> 
                            <p className={classes.rent} style={{fontSize: '16px'}}>With 2 Dorms</p>
                            <p className={classes.rent} style={{fontSize: '16px'}}>${`${150}`}</p>
                        </div>
                        <div className={classes.detailBox}> 
                            <p className={classes.rent} style={{fontSize: '16px'}}>With 3 Dorms</p>
                            <p className={classes.rent} style={{fontSize: '16px'}}>${`${450}`}</p>
                        </div>
                        <div className={classes.detailBox} style={{marginBottom: '2px'}}> 
                            <p className={classes.rent} style={{fontSize: '16px'}}>With 4 Dorms</p>
                            <p className={classes.rent} style={{fontSize: '16px'}}>${`${650}`}</p>
                        </div>
                        <p className={classes.rent2}>WITH APT ${`${750}`}</p>
                        <p className={classes.rent2}>MORTGAGE VALUE ${`${70}`}</p>
                        <p className={classes.rent2}>DORMS COST ${`${100}`}</p>
                        <p className={classes.rent2}>APT, ${`${100}`} + 4 DORMS</p>
                    </div>
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
    close: {
        width: '28px',
        height: '28px',
        borderRadius: '50%',
        backgroundColor: '#7A6E5D',
        color: '#F8F4E9',
        fontSize: '20px',
        position: 'absolute',
        fontWeight: '800',
        fontFamily: 'ChelseaMarket',
        right: '15px',
        top: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer'
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
    saleText: {
        fontFamily: 'ChelseaMarket',
        color: '#A8DDD7',
        fontSize: '42px',
        textAlign: 'center',
        margin: 0,
        marginBottom: '10px',
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
        height: '337px',
        width: '227px',
        boxSizing: 'border-box'
    },
    colorBar: {
        height: '49px',
        backgroundColor: '#EAACA3',
        width: '100%',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px'
    },
    colorBox: {
        backgroundColor: '#EAACA3',
        width: '203px',
        height: '75px',
        color: '#433F36',
        fontSize: '25px',
        fontFamily: 'VCR',
        boxSizing: 'border-box',
        padding: '15px',
        textAlign: 'center'
    },
    leftText: {
        fontFamily: 'ChelseaMarket',
        fontSize: '26px',
        color: '#433F36',
        fontWeight: 400,
        textAlign: 'center'
    },
    rent: {
        fontFamily: 'VCR',
        fontSize: '22px',
        color: '#433F36',
        fontWeight: 400,
        textAlign: 'center',
    },
    rent2: {
        fontFamily: 'VCR',
        fontSize: '16px',
        color: '#7A6E5D',
        fontWeight: 400,
        textAlign: 'center',
        margin: 0,
        marginBottom: '6px'
    },
    detailBox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '202px',
        height: '28px',
    },
}))