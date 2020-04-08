import Home from './components/Home'
import About from './components/About'
import Projects from './components/Project'
import Skills from './components/Skills'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import InfoIcon from '@material-ui/icons/Info';
import BuildIcon from '@material-ui/icons/Build';
import AppsIcon from '@material-ui/icons/Apps';
import React from "react";

type Icon = typeof InfoIcon
type component = React.ReactNode

interface tab {
    component: component,
    label: string,
    path: string,
    icon: Icon
}


export const themeDark: boolean = true;
export const drawerWidth = '15rem';
export const tabs: tab[] = [
    {
        component: Home,
        label: 'Home',
        path: '/',
        icon: HomeRoundedIcon
    },
    {
        component: About,
        label: 'About',
        path: '/about',
        icon: InfoIcon
    },
    {
        component: Projects,
        label: 'Projects',
        path: '/projects',
        icon: AppsIcon
    },
    {
        component: Skills,
        label: 'Skills',
        path: '/skills',
        icon: BuildIcon
    }
];