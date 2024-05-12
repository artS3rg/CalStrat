import { Grid } from "@mui/material";
import Header from "../Components/Header";
import UserCard from "../Components/ProfileComponents/UserCard";
import HistoryMeal from "../Components/ProfileComponents/HistoryMeal";
import { Footer } from "../Components/Footer";

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