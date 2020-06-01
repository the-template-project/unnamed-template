import React, { useEffect, useRef, useState } from 'react';
import {
  Avatar, Container, Divider, Fade, Paper, Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import KeyValueList from './KeyValueList';

const useStyles = makeStyles({
  gridContainer: (screenSpaceIsEnough: boolean) => ({
    display: 'grid',
    gridTemplateRows: 'minmax(100px, auto)',
    gridGap: '10px',
    gridTemplateColumns: screenSpaceIsEnough ? 'repeat(5, 1fr)' : 'repeat(3, 1fr)',
    gridTemplateAreas: screenSpaceIsEnough ? `
        "avatar avatar greeting greeting greeting" 
        "avatar avatar title title title"    
        "avatar avatar description description description" 
        ` : `
            "avatar avatar avatar"
            "greeting greeting greeting"
            "title title title"
            "description description description"
        `,
    //         [theme.breakpoints.down(screenSpaceIsEnough ? 'md' : 'sm')]: {
    //             gridTemplateAreas: `
    //     "avatar avatar avatar"
    //     "greeting greeting greeting"
    //     "title title title"
    //     "description description description"
    // `,
    //             gridTemplateColumns: 'repeat(3, 1fr)',
    //         }

  }),
  paper: {
    marginTop: '5vh',
    padding: '55px',
  },
  greeting: {},
  titleContainer: {
    gridArea: 'title',

  },
  title: {
    fontWeight: 300,
  },
  titleSpan: {
    fontWeight: 600,
  },
  subTitle: {
    marginBottom: '20px',
  },
  avatar: {
    width: '100%',
    height: 'auto',
  },
  avatarContainer: {
    gridArea: 'avatar',
    padding: '20px',
    paddingRight: '30px',
    paddingTop: 0,

  },
  ulStyles: {
    gridArea: 'description',
    listStyle: 'none',
    padding: 0,
    paddingTop: '10px',
  },
  liStyles: {
    marginBottom: '15px',
    display: 'flex',

  },
  spanStyles: {
    width: '70%',
    display: 'block',
    textAlign: 'left',
  },
  bStyles: {
    width: '30%',
  },
});

const Home: React.FC = () => {
  /**
   * Creates a size checker of the paper component, so that it
   * properly resizes when it viewport width changes too
   */
  const [screenSpaceIsEnough, setScreenSpace] = useState<boolean>(true);
  const classes = useStyles(screenSpaceIsEnough);
  const divRef = useRef(null);
  useEffect(() => {
    const observer: ResizeObserver = new ResizeObserver(([div]) => {
      if (div.contentRect.width >= 868) setScreenSpace(true);
      else setScreenSpace(false);
    });
    observer.observe(divRef.current!);
  });

  return (
    <Fade in>
      <Container ref={divRef} fixed maxWidth="md">
        <Paper className={classes.paper}>
          <div className={classes.gridContainer}>
            <div className={classes.greeting}>
              <Typography variant="body2">
                Howdy!
              </Typography>
            </div>
            <div className={classes.avatarContainer}>
              <Avatar src="/Me.jpg" variant="square" className={classes.avatar} />
            </div>
            <div className={classes.titleContainer}>
              <Typography className={classes.title} component="h1" variant="h5">
                {'I\'m '}
                <span className={classes.titleSpan}>
                  Andrea Piacquadio
                </span>
              </Typography>
              <Typography className={classes.subTitle} component="h2" variant="h6">
                an aspiring photographer.
              </Typography>
              <Divider />
            </div>
            <KeyValueList
              keyValues={{
                AGE: '25',
                EMAIL: 'randomEmail@randomDomain.com',
                PHONE: '+4212312345',
                JOB: 'Looking',
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


export default Home;
