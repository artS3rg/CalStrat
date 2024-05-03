import { Box, Button, Grid, TextField, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import HMTable from "./HMTable";

export default function HistoryMeal() {

    return (
        <Box sx={{
            width: 800,
            marginTop: 5,
            marginLeft: "auto",
            marginRight: "auto",
            mb: 10
        }}>
            <Typography align="center" sx={{
                fontFamily: 'Russo One',
                fontWeight: 400,
                fontSize: 20,
                margin: 2,
            }}>Иcтория приемов пищи</Typography>

            <Box sx={{
                borderRadius: 5,
                backgroundColor: "white",
                padding: 2,

            }}>

                <div>
                </div>

                <Grid container sx={{
                    backgroundColor: '#e8e8e8',
                    borderRadius: 5,
                    paddingX: 3,
                    marginBottom: 2,
                }}>
                    <Grid item xs={3} textAlign={'center'}>
                        <p className="HMName">Ккал</p>
                        <p>0</p>
                    </Grid>
                    <Grid item xs={3} textAlign={'center'}>
                        <p className="HMName">Белки</p>
                        <p>0</p>
                    </Grid>
                    <Grid item xs={3} textAlign={'center'}>
                        <p className="HMName">Жиры</p>
                        <p>0</p>
                    </Grid>
                    <Grid item xs={3} textAlign={'center'}>
                        <p className="HMName">Углеводы</p>
                        <p>0</p>
                    </Grid>
                </Grid>

                <HMTable></HMTable>
            </Box>


        </Box>
    )
}