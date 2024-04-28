import { Grid } from "@mui/material";
import Header from "../Components/Header";
import UserCard from "../Components/UserCard";
import HistoryMeal from "../Components/HistoryMeal";
import { Footer } from "../Components/Footer";
import Statistic from "../Components/Statistic";
import Chart from "../Components/Chart";

export function ProfilePage() {
    return (
        <>
        <Grid className="page_user">
            <Header></Header>
            <UserCard></UserCard>
            <HistoryMeal></HistoryMeal>
            <Statistic></Statistic>
            <Chart></Chart>
            <Footer></Footer>
        </Grid>
        </>
    )
}