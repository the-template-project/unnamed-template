import React from "react";
import {Typography} from "@material-ui/core";


const Logo = (props: Record<string, string>) => (
    <Typography
        noWrap={true}
        variant='h5'
        component='h1'
        {...props}
    >
        {'quillop'}
    </Typography>
);

export default Logo;