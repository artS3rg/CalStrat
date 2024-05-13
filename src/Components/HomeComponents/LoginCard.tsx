import { Grid, Paper, TextField, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import '/src/Styles/Text.css';
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../Redux/hooks";
import { login } from "../Redux/user";

export function LoginCard() {
    const paperLogStyle={padding :20,height:300,width:280, margin:"20px auto"}
    const paperRegStyle={padding :20,height:410,width:280, margin:"20px auto"}
    const btnstyle={margin:'8px 0'}
    const [stateForm, setStateForm] = useState<boolean>(true)

    const [stateLogin, setStateLogin] = useState<string>() //статус полей
    const [stateEmail, setStateEmail] = useState<string>()
    const [statePass, setStatePass] = useState<string>()
    const [stateConfPass, setStateConfPass] = useState<string>()

    const [stateAuth, setStateAuth] = useState<boolean>(false)

    const navigate = useNavigate();

    const dispatch = useAppDispatch()

    useEffect(() => {
        let reqLog : string = "https://localhost:7129/DB/CheckUser?login=" + stateEmail + "&pass=" + statePass;
        let reqReg : string = "https://localhost:7129/DB/Registration?email=" + stateEmail + "&pass=" + statePass + "&nick=" + stateLogin;
        let req : string = stateForm ? reqLog : reqReg;
        fetch(req, { method: stateForm ? "GET" : "POST" })
            .then(
                response => {
                    if (!response.ok) {
                        sessionStorage.clear();
                        throw new Error('Неверный логин или пароль');
                    }
                    return response.json()
                }
            )
            .then(
                data => {
                    console.log("Дошло")
                    sessionStorage.setItem("jwt", data)
                    dispatch(login(data))
                    navigate("/profile")
                }
            )
            .catch(error => {
                console.error('Произошла ошибка при выполнении запроса:', error);
            });
    }, [stateAuth])

    return (
        <Grid 
        container
        alignContent="end"
        direction="column"
        sx={{
            position: "absolute",
            minHeight: 540,
            minWidth: 960,
            maxHeight: 540,
            maxWidth: 960,
            mt: 18,
            ml: 20,
        }}>
            {stateForm ? 
            <Paper 
                sx={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                elevation={10} style={paperLogStyle}>
                <Grid
                    sx={{ color: "#FFFFFF"}} textAlign="center">
                    <Typography sx={{
                        fontFamily: "Russo One", 
                        fontSize: 25,
                        marginBottom: 2
                    }}>Авторизация</Typography>
                </Grid>
                <TextField onChange={(e) => setStateEmail(e.target.value)}
                sx={{
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    borderRadius: 2,
                    display: "flex",
                    height: 50,
                    justifyContent: "center",
                }}
                InputProps={{ 
                    disableUnderline: true,
                    style: {
                        color: "#FFFFFF",
                        padding: 5,
                        fontWeight: 300,
                    }
                }}
                variant="standard" placeholder='Почта' margin="dense" fullWidth required/>
                <TextField onChange={(e) => setStatePass(e.target.value)}
                sx={{
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    borderRadius: 2,
                    display: "flex",
                    height: 50,
                    justifyContent: "center",
                }}
                InputProps={{ 
                    disableUnderline: true,
                    style: {
                        color: "#FFFFFF",
                        padding: 5,
                        fontWeight: 300,
                    }
                }}
                className="roboto-medium"
                placeholder='Пароль' margin="dense" type='password' variant="standard" fullWidth required/>
                <Button onClick={() => setStateAuth(true)}
                sx={{
                    fontFamily: 'Russo One',
                    backgroundColor: "#902B2B",
                    "&:hover": { backgroundColor: "#902B2B" }
                }}
                type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Вход</Button>
                <Button sx={{ color: "#FFFFFF" , fontFamily: 'Russo One',}}
                type='submit' color='primary' variant="text" style={btnstyle} onClick={() => setStateForm(false)} fullWidth>Регистрация</Button>
            </Paper> :
            <Paper
            sx={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            elevation={10} style={paperRegStyle}>
                <Grid sx={{ color: "#FFFFFF" }} textAlign="center">
                <Typography sx={{
                        fontFamily: "Russo One", 
                        fontSize: 25,
                        marginBottom: 2
                    }}>Регистрация</Typography>
                </Grid>
                <TextField
                onChange={(e) => setStateLogin(e.target.value)}
                sx={{
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    borderRadius: 2,
                    display: "flex",
                    height: 50,
                    justifyContent: "center",
                }}
                InputProps={{ 
                    disableUnderline: true,
                    style: {
                        color: "#FFFFFF",
                        padding: 5,
                        fontWeight: 300,
                    }
                }}
                variant="standard" placeholder='Логин' margin="dense" fullWidth required/>
                <TextField
                onChange={(e) => setStateEmail(e.target.value)}
                sx={{
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    borderRadius: 2,
                    display: "flex",
                    height: 50,
                    justifyContent: "center",
                }}
                InputProps={{ 
                    disableUnderline: true,
                    style: {
                        color: "#FFFFFF",
                        padding: 5,
                        fontWeight: 300,
                    }
                }}
                className="roboto-medium"
                variant="standard" placeholder='Почта' margin="dense" fullWidth required/>
                <TextField
                onChange={(e) => setStatePass(e.target.value)}
                sx={{
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    borderRadius: 2,
                    display: "flex",
                    height: 50,
                    justifyContent: "center",
                }}
                InputProps={{ 
                    disableUnderline: true,
                    style: {
                        color: "#FFFFFF",
                        padding: 5,
                        fontWeight: 300,
                    }
                }}
                variant="standard" placeholder='Пароль' margin="dense" type='password' fullWidth required/>
                <TextField 
                onChange={(e) => setStateConfPass(e.target.value)}
                sx={{
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    borderRadius: 2,
                    display: "flex",
                    height: 50,
                    justifyContent: "center",
                }}
                InputProps={{ 
                    disableUnderline: true,
                    style: {
                        color: "#FFFFFF",
                        padding: 5,
                        fontWeight: 300,
                    }
                }}  
                variant="standard" placeholder='Подтверждение пароля' margin="dense" type='password' fullWidth required/>
                <Button onClick={() => {if (statePass == stateConfPass && statePass != null) setStateAuth(true)}}
                sx={{
                    fontFamily: 'Russo One',
                    backgroundColor: "#902B2B",
                    "&:hover": { backgroundColor: "#902B2B" }
                }}
                type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Регистрация</Button>
                <Button sx={{ fontFamily: 'Russo One', color: "#FFFFFF" }}
                type='submit' color='primary' variant="text" style={btnstyle} onClick={() => setStateForm(true)} fullWidth>Вход</Button>
            </Paper>
            }
        </Grid>
    )
}