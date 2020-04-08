type TShiftViaBy =
    IDiagMargin
    | INonDiagMargin
    | IDiagTransform
    | INonDiagTransform

type jssAttributes = 'marginTop'
    | 'marginBottom'
    | 'marginRight'
    | 'marginLeft'
    | 'transform'
export type TDirections = 'upLeft'
    | 'upRight'
    | 'downLeft'
    | 'downRight'
    | 'left'
    | 'right'
    | 'upwards'
    | 'downwards'
    | 'horizontal'
    | 'vertical'
    | 'diagonal'

export type TDirectionFullObjects = {
    [direction in TDirections]?: {
        [jssAttribute in jssAttributes]?: string;
    }
}


export interface IDiagMargin {
    upLeft: {
        marginBottom: string,
        marginRight: string
    },
    upRight: {
        marginBottom: string,
        marginLeft: string
    },
    downLeft: {
        marginTop: string,
        marginRight: string

    },
    downRight: {
        marginTop: string,
        marginLeft: string
    }
}

export interface INonDiagMargin {
    upwards: {
        marginBottom: string
    },
    downwards: {
        marginTop: string
    },
    left: {
        marginRight: string
    },
    right: {
        marginLeft: string
    }
}

export interface INonDiagTransform {
    horizontal: {
        transform: string
    },
    vertical: {
        transform: string
    }
}

export interface IDiagTransform {
    diagonal: {
        transform: string
    }
}

export interface IDiagShiftProps {
    x: string,
    y: string
}

export interface INonDiagShiftProps {
    x: string
}

export interface IShiftProps {
    x: string,
    y?: string
}


function shiftViaMargin({x}: INonDiagShiftProps): INonDiagMargin
function shiftViaMargin({x, y}: IDiagShiftProps): IDiagMargin
function shiftViaMargin({x, y}: IShiftProps): TShiftViaBy {
    if (y) {
        return {
            upLeft: {
                marginBottom: x,
                marginRight: y
            },
            upRight: {
                marginBottom: x,
                marginLeft: y

            },
            downLeft: {
                marginTop: x,
                marginRight: y

            },
            downRight: {
                marginTop: x,
                marginLeft: y
            }
        };
    } else {
        return {
            upwards: {
                marginBottom: x
            },
            downwards: {
                marginTop: x
            },
            left: {
                marginRight: x
            },
            right: {
                marginLeft: x
            }
        };
    }
}

function shiftViaTransform({x}: INonDiagShiftProps): INonDiagTransform;
function shiftViaTransform({x, y}: IDiagShiftProps): IDiagTransform;
function shiftViaTransform({x, y}: IShiftProps): TShiftViaBy {
    return {
        horizontal: {
            transform: `translateX(${x})`
        },
        vertical: {
            transform: `translateY(${x})`
        },
        diagonal: {
            transform: `translate(${x}, ${y})`
        }
    };

}


export function shiftVia(via: 'margin' | 'transform'): { by: typeof shiftViaMargin | typeof shiftViaTransform } {
    if (via === 'margin') return {by: shiftViaMargin};
    else if (via === 'transform') return {by: shiftViaTransform};
    else throw new Error('Parameter Via: string value invalid.')
}
