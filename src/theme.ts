import { createMuiTheme } from '@material-ui/core';
import background from './images/backgroundDark-min.jpg';


const theme = createMuiTheme(
  {
    overrides: {
      MuiCssBaseline: {
        '@global': {
          html: {
            fontSize: 'calc(0.6em + 1vmin)',
          },
          body: {
            backgroundImage: `url(${background})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
          },
        },
      },
    },
    spacing: (factor) => `${0.25 * factor}rem`,
    palette: {
      background: {
        paper: '#303030d6',
      },
      type: 'dark',
    },
  },
);

export default theme;
