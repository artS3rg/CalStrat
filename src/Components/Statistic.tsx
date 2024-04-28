import { Avatar, Box, Button, Grid, Stack, Typography } from "@mui/material";

export default function Statistic(){
    return(
           <Stack textAlign={'center'} spacing={2} marginTop={3}>
            <Typography align="center" sx={{
                fontFamily: 'Russo One',
                fontWeight: 400,
                fontSize: 20,
            }}>Статистика</Typography>
            <p style={{fontFamily: 'Roboto', fontSize: 18}}>Среднесуточно вы потребляете</p>
            <Stack spacing={1}>
                <p style={{fontFamily: 'Roboto', fontSize: 18}}>Ккал: 0</p>
                <p style={{fontFamily: 'Roboto', fontSize: 18}}>Белки: 0</p>
                <p style={{fontFamily: 'Roboto', fontSize: 18}}>Жиры: 0</p>
                <p style={{fontFamily: 'Roboto', fontSize: 18}}>Углеводы: 0</p>
            </Stack>
           </Stack>

    )
}