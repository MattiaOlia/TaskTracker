import React from 'react'
import Widget from './Widget'
import CssBaseline from '@mui/material/CssBaseline';

import Container from '@mui/material/Container';
import theme from '../theme';
import { ThemeProvider } from '@emotion/react';

import useMediaQuery from '@mui/material/useMediaQuery';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

function WidgetsComp() {
    return (
        <ThemeProvider theme={theme}>
        <React.Fragment>
            <CssBaseline />
                <Container>
                    <Box  p={3}>
                        <Typography variant={'h3'}>Task</Typography>
                    <Widget />
                    </Box>
             </Container>
       </React.Fragment>
       </ThemeProvider>
    )
}

export default WidgetsComp