import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Box } from '@mui/system';
import { CssBaseline } from '@mui/material';
import Container from '@mui/material/Container';
import theme from '../theme';
import { ThemeProvider } from '@emotion/react';
import useMediaQuery from '@mui/material/useMediaQuery';

const data = [
  { day: '', value: 0 },
  { day: 'Mon', value: 10 },
  { day: 'Tue', value: 20 },
  { day: 'Wed', value: 30 },
  { day: 'Thu', value: 40 },
  { day: 'Fri', value: 20 },
  { day: 'Sat', value: 60 },
  { day: 'Sun', value: 70 }
];

const CustomizedAxisTick = ({ x, y ,payload }) => (
  <text x={x} y={y} dy={16} textAnchor="middle" fill="#666">{payload.value}</text>
);

function Chart() {
  return (
    <ThemeProvider theme={theme}>
    <React.Fragment>
        <CssBaseline />
            <Container>
                <Box sx={{ padding:"1.5em",borderRadius:"20px", bgcolor: `${theme.palette.secondary.main}`}}>
                  <ResponsiveContainer width="100%" height={130}>
                    <LineChart data={data}>
                    <XAxis dataKey="day" tick={<CustomizedAxisTick />} />
                     <Tooltip />
                    <Line type="monotone" dataKey="value" stroke="#8884d8" />
                    </LineChart>
                   </ResponsiveContainer>
                </Box>
                </Container>
                </React.Fragment>
                </ThemeProvider>

  );
};

export default Chart;
