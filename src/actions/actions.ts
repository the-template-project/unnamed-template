import {TOGGLE_DRAWER, ToggleDrawerAction} from "./types";

export function toggleDrawer(): ToggleDrawerAction {
    return {
        type: TOGGLE_DRAWER
    }
}
