import { Grid } from "@mui/material";
import Header from "../Components/Header";
import UserCard from "../Components/ProfileComponents/UserCard";
import HistoryMeal from "../Components/ProfileComponents/HistoryMeal";
import { Footer } from "../Components/Footer";
import Statistic from "../Components/ProfileComponents/Statistic";
import Chart from "../Components/ProfileComponents/Chart";

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