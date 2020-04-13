import React from 'react';
import clsx from 'clsx';
import {makeStyles, Theme} from '@material-ui/core';
import {
    IDiagMargin,
    IDiagShiftProps,
    IDiagTransform,
    INonDiagMargin,
    INonDiagShiftProps,
    INonDiagTransform,
    shiftVia,
    TDirectionFullObjects,
    TDirections
} from '../shiftVia';


/**
 * The purpose of this component is to move (shift) components in some direction with an animation when props.on == true.
 * it takes in props.on, props.amount, props.direction and props.method.
 * props.on is explained of the first line of this comment.
 * props.method can take the value of either 'margin' or 'transform'. It says whether the component should be moved
 * using margin or by using its transform.
 */

type StyleProps = {
    method: 'margin' | 'transform';
    amount: INonDiagShiftProps | IDiagShiftProps;
    direction: TDirections;
}

const useStyles = makeStyles<Theme, StyleProps>(theme => ({
    content: props => {
        const {method} = props;
        return ({
            transition: theme.transitions.create(method, {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen
            }),
        });
    },
    contentShift: props => {
        const {method, amount, direction} = props;


        const shift: TDirectionFullObjects = shiftVia(method).by(amount);

        return {

            transition: theme.transitions.create(method, {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen
            }),
            ...shift[direction], //this is a mixin implemented in theme.mixins
        };
    }
}));

type Props = {
        on: boolean;
        method: 'margin';
        amount: INonDiagShiftProps;
        direction: keyof INonDiagMargin;
    }
    | {
    on: boolean;
    method: 'transform';
    amount: INonDiagShiftProps;
    direction: keyof INonDiagTransform;
}
    | {
    on: boolean;
    method: 'transform';
    amount: IDiagShiftProps;
    direction: keyof IDiagTransform;

}
    | {
    on: boolean;
    method: 'margin';
    amount: IDiagShiftProps;
    direction: keyof IDiagMargin;
}

const Shift: React.FC<Props> = (props) => {
    const {amount, direction, on, method} = props;
    const classes = useStyles({amount, direction, method});
    return (
        <div
            className={
                clsx(classes.content, {
                    [classes.contentShift]: on
                })
            }>
            {props.children}
        </div>
    );
};

export default Shift;