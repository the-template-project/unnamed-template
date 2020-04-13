import React from 'react';
import {Avatar, Container, Divider, Fade, Paper, Typography, useMediaQuery, useTheme} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import useDrawer from '../useDrawer';


const Home: React.FC = () => {
    const useStyles = makeStyles(theme => ({
        gridContainer: drawerOpen => {
            return {
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                gridTemplateRows: 'minmax(100px, auto)',
                gridTemplateAreas: `
        "avatar avatar greeting greeting greeting" 
        "avatar avatar title title title"    
        "avatar avatar description description description" 
        `,
                gridGap: '10px',
                [theme.breakpoints.down(drawerOpen ? 'md' : 'sm')]: {
                    gridTemplateAreas: `
            "avatar avatar avatar"
            "greeting greeting greeting"
            "title title title"
            "description description description"
        `,
                    gridTemplateColumns: 'repeat(3, 1fr)',
                }

            };
        },
        paper: {
            marginTop: '5vh',
            padding: '55px',
        },
        greeting: {},
        titleContainer: {
            gridArea: 'title'

        },
        title: {
            fontWeight: 300
        },
        titleSpan: {
            fontWeight: 600
        },
        subTitle: {
            marginBottom: '20px',
        },
        avatar: {
            width: '100%',
            height: 'auto'
        },
        avatarContainer: {
            gridArea: 'avatar',
            padding: '20px',
            paddingRight: '30px',
            paddingTop: 0

        },
        ulStyles: {
            gridArea: 'description',
            listStyle: 'none',
            padding: 0,
            paddingTop: '10px'
        },
        liStyles: {
            marginBottom: '15px',
            display: 'flex',

        },
        spanStyles: {
            width: '70%',
            display: 'block',
            textAlign: 'left'
        },
        bStyles: {
            width: '30%',
        }
    }));


    const [drawerOpen] = useDrawer();
    const classes = useStyles(drawerOpen);
    const theme = useTheme();
    const screenSpaceIsEnough = useMediaQuery(theme.breakpoints.up(drawerOpen ? 'sm' : 'md'));
    return (
        <Fade in={true}>
            <Container fixed={true} maxWidth={screenSpaceIsEnough ? 'md' : 'sm'}>
                <Paper className={classes.paper}>
                    <div className={classes.gridContainer}>
                        <div className={classes.greeting}>
                            <Typography variant={'body2'}>
                                Howdy!
                            </Typography>
                        </div>
                        <div className={classes.avatarContainer}>
                            <Avatar src={'/Me.jpg'} variant={'square'} className={classes.avatar}/>
                        </div>
                        <div className={classes.titleContainer}>
                            <Typography className={classes.title} component={'h1'} variant={'h5'}>
                                {'I\'m '}<span className={classes.titleSpan}>{'Alexander Hristov'} </span>
                            </Typography>
                            <Typography className={classes.subTitle} component={'h2'} variant={'h6'}>
                                an aspiring developer.
                            </Typography>
                            <Divider/>
                        </div>
                        <KeyValueList
                            keyValues={{
                                'AGE': '20',
                                'EMAIL': 'xerauquill@gmail.com',
                                'PHONE': '+359876685819',
                                'JOB': 'Looking'
                            }}
                            ulClassName={classes.ulStyles}
                            liClassName={classes.liStyles}
                            spanClassName={classes.spanStyles}
                            bClassName={classes.bStyles}
                        />
                    </div>
                </Paper>
            </Container>
        </Fade>

    );
};

interface KeyValueProps {
    keyValues: {
        [key: string]: string;
    };
    ulClassName?: string;
    liClassName?: string;
    bClassName?: string;
    spanClassName?: string;
}

const KeyValueList: React.FC<KeyValueProps> = (props) => {
    return (
        <ul className={props.ulClassName}>
            {
                Object.entries(props.keyValues).map(([key, value]) => (
                    <li className={props.liClassName} key={key}>
                        <b className={props.bClassName}>{key}</b>
                        <span className={props.spanClassName}>{value}</span>
                    </li>
                ))
            }
        </ul>
    );
};


export default Home;