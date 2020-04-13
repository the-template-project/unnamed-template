import {createMuiTheme} from '@material-ui/core';
import {themeDark} from './Constants';


/**
 * This function acts as a mixin (it returns jss). It return the css to
 * shift an element using either its margin or its transform. ShiftVia('margin'|'transform)->
 * it returns by(amount: string) this function tells by what amount to move the element->
 * it returns {direction} this object returns the jss. Inspect the function below to see possible values.
 * Notice it is different depending on whether shiftVia(method) method is margin or transform.
 *
 */


const theme = createMuiTheme(
    {
        overrides: {
            MuiCssBaseline: {
                '@global': {
                    html: {
                        fontSize: 'calc(0.6em + 1vmin)'
                    },
                    body: {
                        backgroundImage: `url(${themeDark ? '/backgroundDark-min.jpg' : '/backgroundLight.jpg'})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundAttachment: 'fixed'
                    },
                }
            }
        },
        spacing: factor => `${0.25 * factor}rem`,
        palette: {
            background: {
                paper: '#303030d6'
            },
            type: (themeDark ? 'dark' : 'light'),
        }
    }
);

export default theme;











