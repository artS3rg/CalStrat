import { Box, Button, Grid, Paper, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { responseRequest } from "../Components/AdminComponents/responseRequest";
import { searchUser } from "../Components/AdminComponents/searchUser";
import { searchProduct } from "../Components/AdminComponents/searchProduct";
import { responseUser } from "../Components/AdminComponents/responseUser";
import { responseProduct } from "../Components/AdminComponents/responseProduct";
import { jwtDecode } from "jwt-decode";

export interface UserAdmin {
    Id: string
    Email: string
    Nickname: string
    RoleID: string
}

export interface ProductAdmin {
    Id: string
    Name: string
    Kcal: string
    Proteins: string
    Fats: string
    Carbohydrates: string
}

export interface Req {
    Id: string
    Name: string
    Kcal: string
    Proteins: string
    Fats: string
    Carbohydrates: string
}

export function AdminPanel() {
    const [stateUserButton, setStateUserButton] = useState<boolean>(false);
    const [stateProductButton, setStateProductButton] = useState<boolean>(false);
    const [stateRequestButton, setStateRequestButton] = useState<boolean>(false);
    const [stateResponseUserButton, setStateResponseUserButton] = useState<boolean>(false);
    const [stateResponseProductButton, setStateResponseProductButton] = useState<boolean>(false);

    const [email, setEmail] = useState<string>("");
    const [userAdmin, setUserAdmin] = useState<UserAdmin>();

    const [product, setProduct] = useState<string>("")
    const [productAdmin, setProductAdmin] = useState<ProductAdmin>();

    const [req, setReq] = useState<Req>();

    const [confirmReq, setConfirmReq] = useState<boolean>(false)
    const [confirmProd, setConfirmProd] = useState<boolean>(false)
    const [confirmUser, setConfirmUser] = useState<boolean>(false)

    useEffect(() => {
        if (stateRequestButton == true) {
            setStateUserButton(false);
            setStateProductButton(false);
            setStateResponseUserButton(false);
            setStateResponseProductButton(false);

            setEmail("")
            setProduct("")

            setConfirmReq(false)
            setConfirmUser(false)
            setConfirmProd(false)

            setUserAdmin(undefined)
            setProductAdmin(undefined)
        }
    }, [stateRequestButton])

    useEffect(() => {
        if (stateUserButton == true) {
            setStateProductButton(false);
            setStateRequestButton(false);
            setStateResponseUserButton(false);
            setStateResponseProductButton(false);

            setEmail("")
            setProduct("")

            setConfirmReq(false)
            setConfirmUser(false)
            setConfirmProd(false)

            setReq(undefined)
            setProductAdmin(undefined)
        }
    }, [stateUserButton])

    useEffect(() => {
        if (stateProductButton == true) {
            setStateUserButton(false);
            setStateRequestButton(false);
            setStateResponseUserButton(false);
            setStateResponseProductButton(false);

            setEmail("")
            setProduct("")

            setConfirmReq(false)
            setConfirmUser(false)
            setConfirmProd(false)

            setUserAdmin(undefined)
            setReq(undefined)
        }
    }, [stateProductButton])

    useEffect(() => {
        let req: string = "https://localhost:7129/DB/SearchUserAdmin?email=" + email
        fetch(req)
            .then(
                response => {
                    if (!response.ok) {
                        throw new Error('Ошибка');
                    }
                    return response.json()
                }
            )
            .then(
                data => {
                    const jwt_data: UserAdmin = jwtDecode(data)
                    setUserAdmin(jwt_data)
                    console.log(jwt_data)
                }
            )
    }, [stateResponseUserButton])

    useEffect(() => {
        let req: string = "https://localhost:7129/DB/SearchProductAdmin?product=" + product
        fetch(req)
            .then(
                response => {
                    if (!response.ok) {
                        throw new Error('Ошибка');
                    }
                    return response.json()
                }
            )
            .then(
                data => {
                    const jwt_data: ProductAdmin = jwtDecode(data)
                    setProductAdmin(jwt_data)
                    console.log(jwt_data)
                }
            )
    }, [stateResponseProductButton])

    useEffect(() => {
        let req: string = "https://localhost:7129/DB/GetRequest"
        fetch(req)
            .then(
                response => {
                    if (!response.ok) {
                        throw new Error('Ошибка');
                    }
                    return response.json()
                }
            )
            .then(
                data => {
                    const jwt_data: Req = jwtDecode(data)
                    setReq(jwt_data)
                    console.log(jwt_data)
                }
            )
    }, [stateRequestButton])

    useEffect(() => {
        let request : string = "https://localhost:7129/DB/ChangeRequestStatus?id=" + req?.Id;
        fetch(request)
            .then(
                response => {
                    if (!response.ok) {
                        throw new Error('Ошибка');
                    }
                }
            )
        setStateRequestButton(false)
        setReq(undefined)
    }, [confirmReq])

    useEffect(() => {
        let request : string = "https://localhost:7129/DB/ChangeProduct?id=" + productAdmin?.Id + "&kcal=" + productAdmin?.Kcal +
        "&prot=" + productAdmin?.Proteins + "&fats=" + productAdmin?.Fats + "&carb=" + productAdmin?.Carbohydrates;
        fetch(request)
            .then(
                response => {
                    if (!response.ok) {
                        throw new Error('Ошибка');
                    }
                }
            )
        setStateProductButton(false)
        setStateResponseProductButton(false)
    }, [confirmProd])

    useEffect(() => {
        let request : string = "https://localhost:7129/DB/ChangeUser?id=" + userAdmin?.Id + "&nick=" + 
        userAdmin?.Nickname + "&email=" + userAdmin?.Email;
        fetch(request)
            .then(
                response => {
                    if (!response.ok) {
                        throw new Error('Ошибка');
                    }
                }
            )
        setStateUserButton(false)
        setStateResponseUserButton(false)
    }, [confirmUser])

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

                {stateUserButton && searchUser(stateResponseUserButton, setStateResponseUserButton, setEmail)}
                {stateProductButton && searchProduct(stateResponseProductButton, setStateResponseProductButton, setProduct)}
                {stateRequestButton && responseRequest(req!, confirmReq, setConfirmReq)}
                {stateResponseUserButton && responseUser(userAdmin!, confirmUser, setConfirmUser)}
                {stateResponseProductButton && responseProduct(productAdmin!, confirmProd, setConfirmProd)}
            </Stack>
        </div>
    )
}