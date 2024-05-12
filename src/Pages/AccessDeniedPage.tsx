import { Box, Button, Grid } from "@mui/material";
import { Footer } from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../Components/Redux/hooks";
import { useEffect } from "react";
import { login } from "../Components/Redux/user";

export function AccessDeniedPage() {
    
    const dispatch = useAppDispatch()
    useEffect(() => {
        if (sessionStorage.getItem("jwt") != null && sessionStorage.getItem("jwt") != undefined) {
            let data: string = sessionStorage.getItem("jwt")!
            dispatch(login(data))
        }
    }, [])

    const navigate = useNavigate();
    return(
        <Grid sx={{ backgroundColor: "#E2E2E2" }}>
            <Grid
            sx={{ mb: 5, mt: 2 }}
            container
            position="absolute"
            justifyContent="center">
                <Box
                component="img"
                sx={{
                    maxHeight: 68,
                    maxWidth: 589,
                }}
                src="src/Assets/title2.png"/>
            </Grid>
            <Grid 
            container
            position="relative"
            alignContent="center"
            direction="column"
            justifyContent="center"
            alignItems="center"
            xl="auto"
            style={{
                height: 'calc(100vh - 80px)'
            }}>
                <h1 className="roboto-black" style={{margin:0}}>Ошибка прав доступа</h1>
                <h3 className="roboto-medium">Повторите попытку</h3>
                <Button
                sx={{
                    mt: 3,
                    backgroundColor: "#902B2B",
                    "&:hover": { backgroundColor: "#902B2B" }
                }}
                type='submit' color='primary' variant="contained"
                onClick={() => navigate("/")}>На главную</Button>
            </Grid>
            <Footer/>
        </Grid>
    )
}