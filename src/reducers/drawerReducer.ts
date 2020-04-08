import {TOGGLE_DRAWER, ToggleDrawerAction} from '../actions/types';

const initialState: boolean = false;


export default function (state: boolean = initialState, action: ToggleDrawerAction): boolean {
    switch (action.type) {
        case TOGGLE_DRAWER:
            return !state;
        default:
            return state;
    }
}