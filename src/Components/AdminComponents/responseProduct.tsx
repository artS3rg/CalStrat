import { Box, Button, Paper, TextField } from "@mui/material";
import { ProductAdmin } from "../../Pages/AdminPanel";

export function responseProduct(data: ProductAdmin, state: boolean, func: React.Dispatch<React.SetStateAction<boolean>>) {
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
                    <TextField value={data?.Id}
                        id="outlined-read-only-input"
                        label="Id"
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField value={data?.Name}
                        id="outlined-read-only-input"
                        label="Name"
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </div>
                <div>
                    <TextField defaultValue={data?.Kcal} onChange={(e) => data.Kcal = e.target.value}
                        id="outlined-basic"
                        label="Kcal / 100g"
                    />
                    <TextField defaultValue={data?.Proteins} onChange={(e) => data.Proteins = e.target.value}
                        id="outlined-required"
                        label="Proteins / 100g"
                    />
                    <TextField defaultValue={data?.Fats} onChange={(e) => data.Fats = e.target.value}
                        id="outlined-required"
                        label="Fats / 100g"
                    />
                    <TextField defaultValue={data?.Carbohydrates} onChange={(e) => data.Carbohydrates = e.target.value}
                        id="outlined-required"
                        label="Carbohydrates / 100g"
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
                            width: 100,
                            backgroundColor: "#902B2B",
                            "&:hover": { backgroundColor: "#902B2B" }
                        }}
                    >
                        Сохранить
                    </Paper>
                </Button>
            </Box>
        </>
    )
}