import React from 'react';
import {Typography} from "@material-ui/core";


const Logo: React.FC<{ [index: string]: any }> = (props) => (
    <Typography
        noWrap={true}
        variant='h5'
        component='h1'
        {...props}
    >
        {'Portfolio'}
    </Typography>
);

export default React.memo(Logo);