type TShiftViaBy =
    DiagMargin
    | NonDiagMargin
    | DiagTransform
    | NonDiagTransform;

type jssAttributes = 'marginTop'
| 'marginBottom'
| 'marginRight'
| 'marginLeft'
| 'transform';
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
| 'diagonal';

export type TDirectionFullObjects = {
  [direction in TDirections]?: {
    [jssAttribute in jssAttributes]?: string;
  }
};


export interface DiagMargin {
  upLeft: {
    marginBottom: string;
    marginRight: string;
  };
  upRight: {
    marginBottom: string;
    marginLeft: string;
  };
  downLeft: {
    marginTop: string;
    marginRight: string;

  };
  downRight: {
    marginTop: string;
    marginLeft: string;
  };
}

export interface NonDiagMargin {
  upwards: {
    marginBottom: string;
  };
  downwards: {
    marginTop: string;
  };
  left: {
    marginRight: string;
  };
  right: {
    marginLeft: string;
  };
}

export interface NonDiagTransform {
  horizontal: {
    transform: string;
  };
  vertical: {
    transform: string;
  };
}

export interface DiagTransform {
  diagonal: {
    transform: string;
  };
}

export interface DiagShiftProps {
  x: string;
  y: string;
}

export interface NonDiagShiftProps {
  x: string;
}

export interface ShiftProps {
  x: string;
  y?: string;
}


function shiftViaMargin({ x }: NonDiagShiftProps): NonDiagMargin;
function shiftViaMargin({ x, y }: DiagShiftProps): DiagMargin;
function shiftViaMargin({ x, y }: ShiftProps): TShiftViaBy {
  if (y) {
    return {
      upLeft: {
        marginBottom: x,
        marginRight: y,
      },
      upRight: {
        marginBottom: x,
        marginLeft: y,

      },
      downLeft: {
        marginTop: x,
        marginRight: y,

      },
      downRight: {
        marginTop: x,
        marginLeft: y,
      },
    };
  }
  return {
    upwards: {
      marginBottom: x,
    },
    downwards: {
      marginTop: x,
    },
    left: {
      marginRight: x,
    },
    right: {
      marginLeft: x,
    },
  };
}

function shiftViaTransform({ x }: NonDiagShiftProps): NonDiagTransform;
function shiftViaTransform({ x, y }: DiagShiftProps): DiagTransform;
function shiftViaTransform({ x, y }: ShiftProps): TShiftViaBy {
  return {
    horizontal: {
      transform: `translateX(${x})`,
    },
    vertical: {
      transform: `translateY(${x})`,
    },
    diagonal: {
      transform: `translate(${x}, ${y})`,
    },
  };
}


export function shiftVia(via: 'margin' | 'transform'): { by: typeof shiftViaMargin | typeof shiftViaTransform } {
  if (via === 'margin') return { by: shiftViaMargin };
  if (via === 'transform') return { by: shiftViaTransform };
  throw new Error('Parameter Via: string value invalid.');
}
