import React from "react";
import {ClickAwayListener, Divider, Drawer, IconButton, Theme, useMediaQuery} from "@material-ui/core";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import {ChevronLeft, ChevronRight} from "@material-ui/icons";
import {drawerWidth} from "../Constants";

interface Props {
    children?: React.ReactNode;
    drawerOpen: boolean;
    handleDrawerClose: () => void;
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

const DrawerMenu: React.FC<Props> = ({children, handleDrawerClose, drawerOpen}) => {
    const theme: Theme = useTheme();
    const classes: Record<string, string> = useStyles();
    const drawerVariant: 'temporary' | 'persistent' = useMediaQuery(theme.breakpoints.down('xs')) ? 'temporary' : 'persistent';
    return (
        <ClickAwayListener onClickAway={handleDrawerClose}
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
                <DrawerHeader handleDrawerClose={handleDrawerClose}/>
                {children}
            </Drawer>
        </ClickAwayListener>
    )
};


const DrawerHeader: React.FC<{ handleDrawerClose: () => void }> = ({handleDrawerClose}) => {
    const theme = useTheme();
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className={classes.drawerHeader}>
                <IconButton
                    onClick={handleDrawerClose}
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