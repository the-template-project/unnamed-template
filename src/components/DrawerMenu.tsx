import React from "react";
import {ClickAwayListener, Divider, Drawer, IconButton, Theme, useMediaQuery} from "@material-ui/core";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import {ChevronLeft, ChevronRight} from "@material-ui/icons";
import useDrawer from "../useDrawer";
import {drawerWidth} from "../Constants";

interface Props {
    children?: React.ReactNode
}

const useStyles = makeStyles(theme => ({
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: '#303030bf'
    }
}));

const DrawerMenu: React.FC<Props> = ({children}) => {
    const theme: Theme = useTheme();
    const classes: Record<string, string> = useStyles();
    const [drawerOpen, toggleDrawer] = useDrawer();
    const drawerVariant: 'temporary' | 'persistent' = useMediaQuery(theme.breakpoints.down('xs')) ? 'temporary' : 'persistent';
    return (
        <ClickAwayListener onClickAway={toggleDrawer}
                           mouseEvent={drawerOpen ? 'onClick' : false}
                           touchEvent={drawerOpen ? 'onTouchEnd' : false}>
            <Drawer
                variant={drawerVariant}
                anchor='left'
                open={drawerOpen}
                className={classes.drawer}
                classes={{
                    paper: classes.drawerPaper
                }}>
                <DrawerHeader/>
                {children}
            </Drawer>
        </ClickAwayListener>
    )
};


const DrawerHeader = () => {
    const theme = useTheme();
    const classes = useStyles();
    const [, toggleDrawer] = useDrawer();
    return (
        <React.Fragment>
            <div className={classes.drawerHeader}>
                <IconButton
                    onClick={toggleDrawer}
                    color={'inherit'}
                    aria-label={'close drawer'}
                >
                    {theme.direction === 'ltr' ? <ChevronLeft/> : <ChevronRight/>}
                </IconButton>
            </div>
            <Divider/>
        </React.Fragment>
    )
};

export default DrawerMenu;