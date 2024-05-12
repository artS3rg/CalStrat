import { Avatar, Button, Grid, IconButton, InputAdornment, MenuItem, Stack, TextField, ThemeProvider, Typography, createTheme, } from "@mui/material";
import { useEffect, useState } from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import '/src/Styles/Text.css';
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { UserState, login, logout } from "../Redux/user";
import { useNavigate } from 'react-router-dom';
import { RootState } from "../Redux/store";
import { KcalFormula } from "../../Scripts/KcalFormula";


const theme = createTheme({
    palette: {
        primary: { main: '#902B2B' }
    }
});

export const genders = ["Муж", "Жен"];
export const purposes = ["Похудеть", "Набрать вес", "Сохранить вес"];
export const activities = ["Очень низкая", "Низкая", "Средняя", "Высокая", "Очень высокая"];

export default function UserCard() {

    const dispatch = useAppDispatch()

    const selector: UserState = useAppSelector((state: RootState) => state.user)

    const navigate = useNavigate()

    const [loginState, setLogin] = useState(selector.Nickname);
    const [email, setEmail] = useState(selector.Email);
    const [gender, setGender] = useState(genders[selector.GenderId]);
    const [kkal, setKkal] = useState(2500);
    const [purpose, setPurpose] = useState(purposes[selector.IdAim]);
    const [startWeight, setStartWeight] = useState(selector.InitWeight);
    const [currentWeight, setCurrentWeight] = useState(selector.CurWeight);
    const [purposeWeight, setPurposeWeight] = useState(selector.AimWeight);
    const [age, setAge] = useState(selector.Age);
    const [height, setHeight] = useState(selector.Height);

    const [eye, setEye] = useState(false);
    const handleEye = () => {
        setEye(!eye);
    }

    useEffect(() => {

        if (sessionStorage.getItem("jwt") != null && sessionStorage.getItem("jwt") != undefined) {
            let data: string = sessionStorage.getItem("jwt")!
            dispatch(login(data))
        }
    }, [])

    const [editState, setEditState] = useState<{ state: boolean, value: string }>({ state: false, value: "Изменить" });

    useEffect(() => {
        let req: string = "https://localhost:7129/DB/ChangeUser?id=" + selector.Id + "&nick=" + loginState + "&email=" + email + "&idAim=" + purposes.indexOf(purpose) + "&initWeight=" + startWeight + "&curWeight=" + currentWeight + "&aimWeight=" + purposeWeight + "&genderId=" + genders.indexOf(gender) + "&height=" + height + "&age=" + age
        if (editState.state == false) {
            fetch(req)
                .then(
                    response => {
                        if (!response.ok) {
                            throw new Error('Неверные данные');
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
        }
    }, [editState])


    return (
        <Grid container sx={{
            border: 1,
            borderRadius: 5,
            width: 700,
            marginTop: 5,
            marginLeft: "auto",
            marginRight: "auto",
            backgroundColor: '#e3e3e3',
            padding: 3,

        }}>
            <Grid item xs={4} >
                <Stack>
                    <Avatar sx={{ height: 150, width: 150, ml: 'auto', mr: 'auto', marginTop: 3 }}>A</Avatar>
                    <Button variant="contained"
                        sx={{
                            width: 120,
                            ml: 'auto',
                            mr: 'auto',
                            marginTop: 3,
                            backgroundColor: '#902B2B',
                            fontFamily: 'Russo One',
                            textTransform: 'capitalize',
                            "&:hover": { backgroundColor: "#902B2B", }
                        }}
                        onClick={() => {
                            if (editState.state === false)
                                setEditState({ state: true, value: "Сохранить" })
                            else {
                                /* сделать проверку логина */
                                if (email.includes('@')) {
                                    setEditState({ state: false, value: "Изменить" })
                                }
                                else {
                                    alert("Email введён не корретно!")
                                }

                            }

                        }}
                    >{editState.value}</Button>

                    <Button variant="contained" onClick={() => { dispatch(logout()); navigate("/") }}
                        sx={{
                            width: 120,
                            ml: 'auto',
                            mr: 'auto',
                            marginTop: 2,
                            backgroundColor: '#999',
                            fontFamily: 'Russo One',
                            textTransform: 'capitalize',
                            "&:hover": { backgroundColor: "#999", }
                        }}>Выйти</Button>
                </Stack>
            </Grid>
            <ThemeProvider theme={theme}>
                <Grid item xs={4} >
                    <Typography marginLeft={2}>
                        <p className="item_info">Имя</p>
                        <p>{
                            editState.state === false ?
                                <p className="item_info_value">{selector.Nickname}</p> :
                                <TextField
                                    type="text"
                                    color="primary"
                                    size="small"
                                    defaultValue={selector.Nickname}
                                    onChange={(event) => setLogin(event.target.value)}
                                />
                        }</p>

                        <p className="item_info">Возраст</p>
                        <p>{
                            editState.state === false ?
                                <p className="item_info_value">{selector.Age}</p> :
                                <TextField
                                    type="number"
                                    size="small"
                                    defaultValue={selector.Age}
                                    onChange={(event) => setAge(Number(event.target.value))}
                                />
                        }</p>

                        <p className="item_info">Почта</p>
                        <p>{
                            editState.state === false ?
                                <p className="item_info_value">{selector.Email}</p> :
                                <TextField
                                    type="email"
                                    size="small"
                                    defaultValue={selector.Email}
                                    onChange={(event) => setEmail(event.target.value)}
                                />
                        }</p>

                        <p className="item_info">Пол</p>
                        <p>{
                            editState.state === false ?
                                <p className="item_info_value">{genders[selector.GenderId]}</p> :
                                <TextField
                                    select
                                    size="small"
                                    defaultValue={genders[selector.GenderId]}
                                    onChange={(event) => setGender(event.target.value)}>
                                    {genders.map((option) => (
                                        <MenuItem key={option} value={option}>{option}</MenuItem>
                                    ))}
                                </TextField>
                        }</p>

                        <p className="item_info">Энергетическая норма</p>
                        <p>{
                            <p className="item_info_value">{KcalFormula(selector.CurWeight, selector.Height, 19,
                                activities[selector.IdActivity], genders[selector.GenderId], purposes[selector.IdAim])}</p>
                        }</p>
                    </Typography>
                </Grid>

                <Grid item xs={4} >
                    <Typography marginLeft={2} >
                        <p className="item_info">Цель</p>
                        <p>{
                            editState.state === false ?
                                <p className="item_info_value">{purposes[selector.IdAim]}</p> :
                                <TextField
                                    select
                                    color="primary"
                                    size="small"
                                    defaultValue={purposes[selector.IdAim]}
                                    onChange={(event) => setPurpose(event.target.value)}
                                >
                                    {purposes.map((option) => (
                                        <MenuItem key={option} value={option}>{option}</MenuItem>
                                    ))}
                                </TextField>
                        }</p>

                        <p className="item_info">Начальный вес, кг</p>
                        <p>{
                            editState.state === false ?
                                <p className="item_info_value">{selector.InitWeight}</p> :
                                <TextField
                                    type="number"
                                    color="primary"
                                    size="small"
                                    defaultValue={selector.InitWeight}
                                    onChange={(event) => setStartWeight(Number(event.target.value))}
                                />
                        }</p>
                        <p className="item_info">Текущий вес, кг</p>
                        <p>{
                            editState.state === false ?
                                <p className="item_info_value">{selector.CurWeight}</p> :
                                <TextField
                                    type="number"
                                    color="primary"
                                    size="small"
                                    defaultValue={selector.CurWeight}
                                    onChange={(event) => setCurrentWeight(Number(event.target.value))}
                                />
                        }</p>

                        <p className="item_info">Целевой вес, кг</p>
                        <p>{
                            editState.state === false ?
                                <p className="item_info_value">{selector.AimWeight}</p> :
                                <TextField
                                    type="number"
                                    color="primary"
                                    size="small"
                                    defaultValue={selector.AimWeight}
                                    onChange={(event) => setPurposeWeight(Number(event.target.value))}
                                />
                        }</p>

                        <p className="item_info">Рост</p>
                        <p>{
                            editState.state === false ?
                                <p className="item_info_value">{selector.Height}</p> :
                                <TextField
                                    type="number"
                                    color="primary"
                                    size="small"
                                    defaultValue={selector.Height}
                                    onChange={(event) => setHeight(Number(event.target.value))}
                                />
                        }</p>
                    </Typography>
                </Grid>
            </ThemeProvider>
        </Grid>
    )
}