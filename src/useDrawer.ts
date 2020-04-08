import {useDispatch, useSelector} from "react-redux";
import {toggleDrawer} from "./actions/actions";
import {ToggleDrawerAction} from "./actions/types";
import {Dispatch} from "redux";


export default function useDrawer(): [boolean, () => void] {
    const dispatch: Dispatch<ToggleDrawerAction> = useDispatch();
    const drawerOpen: boolean = useSelector((state: { drawerOpen: boolean }) => state.drawerOpen);
    return [drawerOpen, () => dispatch(toggleDrawer())]
}
