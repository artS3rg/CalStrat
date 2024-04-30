import { Box, Button, Grid, TextField, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import HMTable from "./HMTable";
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import React from "react";

export default function HistoryMeal() {

    const [date, setDate] = React.useState<Dayjs | null>(dayjs)
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
                <Box sx={{
                    textAlign: "center"
                }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Дата"
                            value={date}
                            format="DD/MM/YYYY"
                            onChange={(newValue) => setDate(newValue)}
                            sx={{
                                marginTop: 1,
                                marginBottom: 2
                            }}
                        />
                    </LocalizationProvider>
                </Box>

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