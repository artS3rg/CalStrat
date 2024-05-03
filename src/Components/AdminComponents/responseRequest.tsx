import { Box, Button, Paper, TextField } from "@mui/material";
import { Req } from "../../Pages/AdminPanel";
import { useEffect, useState } from "react";

export function responseRequest(req: Req, state: boolean, func: React.Dispatch<React.SetStateAction<boolean>>) {

    /*
    const [confirmState, setConfirmState] = useState<boolean>(false)

    useEffect(() => {
        let request : string = "https://localhost:7129/DB/ChangeRequestStatus?id=" + req.Id;
        fetch(request)
            .then(
                response => {
                    if (!response.ok) {
                        throw new Error('Ошибка');
                    }
                }
            )
    }, [confirmState])
    */

    return (
        <>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                    'textAlign': 'center',
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField value={req?.Id}
                        id="outlined-read-only-input"
                        label="Id"
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField value={req?.Name}
                        id="outlined-read-only-input"
                        label="Name"
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </div>
                <div>
                    <TextField value={req?.Kcal}
                        id="outlined-read-only-input"
                        label="Kcal / 100g"
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField value={req?.Proteins}
                        id="outlined-read-only-input"
                        label="Proteins / 100g"
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </div>
                <div>
                    <TextField value={req?.Fats}
                        id="outlined-read-only-input"
                        label="Fats / 100g"
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField value={req?.Carbohydrates}
                        id="outlined-read-only-input"
                        label="Carbohydrates / 100g"
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </div>
            </Box>
            <Box sx={{ 'textAlign': 'center' }}>
                <Button onClick={() => func(!state)}>
                    <Paper
                        sx={{
                            color: "white",
                            textAlign: "center",
                            p: 2,
                            height: 20,
                            width: 120,
                            backgroundColor: "#902B2B",
                            "&:hover": { backgroundColor: "#902B2B" }
                        }}
                    >
                        Подтвердить
                    </Paper>
                </Button>
            </Box>
        </>
    )
}