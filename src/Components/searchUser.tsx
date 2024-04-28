import { Box, Button, Paper, TextField } from "@material-ui/core";
import { responseUser } from "./responseUser";

export function searchUser(stateButton: boolean, func: React.Dispatch<React.SetStateAction<boolean>>) {
    return (
        <>
            <Box sx={{ 'textAlign': 'center' }}>
                <TextField
                    id="outlined-basic"
                    label="Введите почту пользователя"
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
            {stateButton && responseUser()}
        </>
    )
}