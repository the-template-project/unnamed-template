import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import InfoIcon from '@material-ui/icons/Info';
import BuildIcon from '@material-ui/icons/Build';
import AppsIcon from '@material-ui/icons/Apps';

type Icon = typeof InfoIcon
type component = typeof Home

interface Tab {
    component: component;
    label: string;
    path: string;
    icon: Icon;
}


export const drawerWidth = '15rem';
export const tabs: Tab[] = [
    {
        component: Home,
        label: 'Home',
        path: '/',
        icon: HomeRoundedIcon
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
    },
    {
        component: About,
        label: 'About',
        path: '/about',
        icon: InfoIcon
    }
];