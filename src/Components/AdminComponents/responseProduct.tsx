import { Box, Button, Paper, TextField } from "@mui/material";

export function responseProduct() {
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
                    <TextField
                        id="outlined-read-only-input"
                        label="Id"
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField
                        id="outlined-read-only-input"
                        label="Name"
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </div>
                <div>
                    <TextField
                        id="outlined-required"
                        label="Kcal / 100g"
                    />
                    <TextField
                        id="outlined-required"
                        label="Proteins / 100g"
                    />
                    <TextField
                        id="outlined-required"
                        label="Fats / 100g"
                    />
                    <TextField
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