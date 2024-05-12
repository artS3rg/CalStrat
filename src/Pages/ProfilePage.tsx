import { Grid } from "@mui/material";
import Header from "../Components/Header";
import UserCard from "../Components/ProfileComponents/UserCard";
import HistoryMeal from "../Components/ProfileComponents/HistoryMeal";
import { Footer } from "../Components/Footer";
import { useEffect } from "react";
import { useAppDispatch } from "../Components/Redux/hooks";
import { login } from "../Components/Redux/user";

export function ProfilePage() {
    return (
        <>
            <Grid className="page_user">
                <Header></Header>
                <UserCard></UserCard>
                <HistoryMeal></HistoryMeal>
                <Footer></Footer>
            </Grid>
        </>
    )
}