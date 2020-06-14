import React, {
  useCallback,
  useRef, useState,
} from 'react';
import {
  Avatar, Fade, makeStyles, Typography,
} from '@material-ui/core';
import MeImage from '../images/MeAbout.jpg';
import useDimensions from '../useDimensions';

const useStyles = makeStyles({
  container: (spaceIsEnough) => ({
    height: '100%',
    display: 'grid',
    gridTemplateAreas: spaceIsEnough ? `
      "T A"
      "D A"
      "D A"
      ` : `
      "T"
      "D"
      "D"
      `,
    gridTemplateColumns: spaceIsEnough ? 'repeat(2, 1fr)' : '1fr',
    gridTemplateRows: 'minmax(100px, auto)',
    gridGap: '10px',
    justifyItems: 'center',
    alignItems: 'center',
  }),
  avatar: (spaceIsEnough) => ({
    display: spaceIsEnough ? 'initial' : 'none',
    gridArea: 'A',
    width: '60%',
    minWidth: '20rem',
    height: 'auto',
    objectFit: 'cover',
  }),
  title: {
    fontFamily: '\'Open Sans\', Roboto',
    fontWeight: 700,
    backgroundClip: 'text',
    '-webkit-background-clip': 'text',
    color: 'transparent',
    background: 'radial-gradient(circle, rgba(201,201,201,1) 0%, rgba(238,238,238,1) 50%, rgba(206,206,206,1) 100%)',
  },
  titleContainer: {
    gridArea: 'T',
  },
  description: {
    paddingLeft: '20px',
    gridArea: 'D',
    maxWidth: '33rem',
    fontWeight: 400,
    fontFamily: '\'Open Sans\', Roboto',
    backgroundClip: 'text',
    '-webkit-background-clip': 'text',
    color: 'transparent',
    background: 'radial-gradient(circle, rgba(201,201,201,1) 0%, rgba(238,238,238,1) 50%, rgba(206,206,206,1) 100%)',
  },
});

const About: React.FC = () => {
  // fade element in when image has loaded.
  const [isFadedIn, fadeIn] = useState(false);

  // figure out the size of the root div element
  // and use it as you would use a media query (..almost).
  const [sizeIsEnough, setSizeIsEnough] = useState(false);
  const containerRef = useRef(null);

  useDimensions(containerRef,
    useCallback(({ width }) => {
      setSizeIsEnough(width > 880);
    }, []));
  const classes = useStyles(sizeIsEnough);

  return (
    <Fade in={isFadedIn}>
      <div className={classes.container} ref={containerRef}>
        <Avatar onLoad={() => fadeIn(true)} variant="circle" src={MeImage} className={classes.avatar} />
        <div className={classes.titleContainer}>
          <Typography component="h1" className={classes.title} variant="h3">
            About me.
          </Typography>
          <hr />
        </div>
        <Typography className={classes.description} variant="h5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Etiam consectetur pharetra mauris, nec gravida massa
          volutpat lacinia. Curabitur quis libero erat.
          Integer metus metus, dapibus ut suscipit vitae, condimentum at
          neque. Nulla ornare id dolor vitae molestie.
          Praesent in tempus lectus, vel tempus lorem. Suspendisse non odio
          vel sem viverra dictum at nec nisl. Donec a quam arcu.
          Mauris enim nibh, ultrices sit amet nunc vel, tincidunt
          pretium quam. Suspendisse potenti. Fusce luctus metus non blandit euismod.
        </Typography>
      </div>
    </Fade>
  );
};

export default About;
