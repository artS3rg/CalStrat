import { Box, Button, Grid, Paper, Stack } from "@material-ui/core";
import { useEffect, useState } from "react";
import { responseRequest } from "../Components/responseRequest";
import { searchUser } from "../Components/searchUser";
import { searchProduct } from "../Components/searchProduct";

export function AdminPanel() {
    const [stateUserButton, setStateUserButton] = useState<boolean>(false);
    const [stateProductButton, setStateProductButton] = useState<boolean>(false);

    const [stateRequestButton, setStateRequestButton] = useState<boolean>(false);

    const [stateResponseUserButton, setStateResponseUserButton] = useState<boolean>(false);
    const [stateResponseProductButton, setStateResponseProductButton] = useState<boolean>(false);

    useEffect(() => {
        if (stateRequestButton == true) {
            setStateUserButton(false);
            setStateProductButton(false);
            setStateResponseUserButton(false);
            setStateResponseProductButton(false);
        }
    }, [stateRequestButton])

    useEffect(() => {
        if (stateUserButton == true) {
            setStateProductButton(false);
            setStateRequestButton(false);
            setStateResponseUserButton(false);
            setStateResponseProductButton(false);
        }
    }, [stateUserButton])

    useEffect(() => {
        if (stateProductButton == true) {
            setStateUserButton(false);
            setStateRequestButton(false);
            setStateResponseUserButton(false);
            setStateResponseProductButton(false);
        }
    }, [stateProductButton])

    return (
        <div style={{
            backgroundImage: 'url("src/Assets/Background.png")',
            backgroundSize: 'cover',
            width: '100vw',
            height: '100vh',
            overflowX: 'hidden'
        }}>
            <Stack spacing={1}>
                <Grid container justifyContent="center">
                    <Box src="src/Assets/title2.png"
                        component="img"
                        sx={{
                            maxHeight: 68,
                            maxWidth: 589,
                        }}>
                    </Box>
                </Grid>
                <Grid sx={{ flexGrow: 1 }} container spacing={4}>
                    <Grid item xs={12}>
                        <Grid container justifyContent="center" spacing={4} textAlign={"center"}>
                            <Button onClick={() => setStateUserButton(!stateUserButton)} >
                                <Paper
                                    sx={{
                                        color: "white",
                                        textAlign: "center",
                                        p: 2,
                                        height: 50,
                                        width: 200,
                                        backgroundColor: "#902B2B",
                                        "&:hover": { backgroundColor: "#902B2B" }
                                    }}
                                >
                                    Получить информацию о пользователе
                                </Paper>
                            </Button>
                            <Button onClick={() => setStateProductButton(!stateProductButton)}>
                                <Paper
                                    sx={{
                                        color: "white",
                                        textAlign: "center",
                                        p: 2,
                                        height: 50,
                                        width: 200,
                                        backgroundColor: "#902B2B",
                                        "&:hover": { backgroundColor: "#902B2B" }
                                    }}
                                >
                                    Получить информацию о продукте
                                </Paper>
                            </Button>
                            <Button onClick={() => setStateRequestButton(!stateRequestButton)}>
                                <Paper
                                    sx={{
                                        color: "white",
                                        textAlign: "center",
                                        p: 2,
                                        height: 50,
                                        width: 200,
                                        backgroundColor: "#902B2B",
                                        "&:hover": { backgroundColor: "#902B2B" }
                                    }}
                                >
                                    Последняя заявка на продукт
                                </Paper>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>

                {stateUserButton && searchUser(stateResponseUserButton, setStateResponseUserButton)}
                {stateProductButton && searchProduct(stateResponseProductButton, setStateResponseProductButton)}
                {stateRequestButton && responseRequest()}
            </Stack>
        </div>
    )
}