import React from 'react';
import { Typography } from '@material-ui/core';


const Logo: React.FC<{ className: string, children: string }> = ({ className, children }) => (
  <Typography
    noWrap
    variant="h5"
    component="h1"
    className={className}
  >
    {children}
  </Typography>
);

export default React.memo(Logo);
