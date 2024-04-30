import { Box, Button, Paper, TextField } from "@mui/material";
import { responseProduct } from "./responseProduct";

export function searchProduct(stateButton: boolean, func: React.Dispatch<React.SetStateAction<boolean>>, funcProduct: React.Dispatch<React.SetStateAction<string>>) {
    return (
        <>
            <Box sx={{ 'textAlign': 'center' }}>
                <TextField onChange={(e) => funcProduct(e.target.value)}
                    id="outlined-basic"
                    label="Введите название продукта"
                    variant="outlined"
                    sx={{
                        width: 800
                    }}
                />
            </Box>
            <Box sx={{ 'textAlign': 'center' }}>
                <Button onClick={() => func(!stateButton)}>
                    <Paper
                        sx={{
                            color: "white",
                            textAlign: "center",
                            p: 2,
                            height: 20,
                            width: 50,
                            backgroundColor: "#902B2B",
                            "&:hover": { backgroundColor: "#902B2B" }
                        }}
                    >
                        Найти
                    </Paper>
                </Button>
            </Box>
        </>
    )
}