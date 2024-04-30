import { Box, Button, Paper, TextField } from "@mui/material";
import { ProductAdmin } from "../../Pages/AdminPanel";

export function responseProduct(data: ProductAdmin) {
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
                    <TextField value={data?.Kcal}
                        id="outlined-required"
                        label="Kcal / 100g"
                    />
                    <TextField value={data?.Proteins}
                        id="outlined-required"
                        label="Proteins / 100g"
                    />
                    <TextField value={data?.Fats}
                        id="outlined-required"
                        label="Fats / 100g"
                    />
                    <TextField value={data?.Carbohydrates}
                        id="outlined-required"
                        label="Carbohydrates / 100g"
                    />
                </div>
            </Box>
            <Box sx={{ 'textAlign': 'center' }}>
                <Button>
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