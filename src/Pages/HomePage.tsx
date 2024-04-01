import { Box, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { LoginCard } from "../Components/LoginCard";
import { Footer } from "../Components/Footer";

export function HomePage() {
    return (
        <Grid sx={{ backgroundColor: "#E2E2E2" }}>
            <Grid
            container
            justifyContent="center">
                <Box
                component="img"
                sx={{
                    minHeight: 540,
                    minWidth: 960,
                    maxHeight: 1,
                    maxWidth: 1,
                    position: "relative"
                }}
                src="src/Assets/home_image.png"/>
                <LoginCard/>
            </Grid>
            <Grid
            sx={{ mb: 5, mt: 10 }}
            container
            justifyContent="center">
                <Box
                component="img"
                sx={{
                    maxHeight: 102,
                    maxWidth: 884,
                }}
                src="src/Assets/title2.png"/>
            </Grid>
            <Grid
            sx={{ fontFamily: "Roboto" }} textAlign="center">
                <h3>Сервис, созданный помочь вам   поддерживать питание на нужном уровне.</h3>
            </Grid>
            <Grid
            sx={{ mb: 10, mt: 10 }}
            container
            gap={5}
            direction="column"
            alignItems="center">
                <Card 
                sx={{ maxWidth: 1000, maxHeight: 200, display: "flex", boxShadow: 0, backgroundColor: "#E2E2E2" }}>
                    <CardMedia
                    sx={{ height: 200, width: 200 }}
                        component="img"
                        width="140"
                        image="src/Assets/f_icon.png"
                    />
                    <CardContent sx={{ backgroundColor: "#902B2B", width: 800, borderRadius: 5, padding: 3 }}>
                    <Typography sx={{color: "#FFFFFF"}} gutterBottom variant="h5" component="div">
                        Личный кабинет
                    </Typography>
                    <Typography sx={{color: "#FFFFFF"}} variant="body2" color="text.secondary">
                        • Информация по вашей диете
                    </Typography>
                    <Typography sx={{color: "#FFFFFF"}} variant="body2" color="text.secondary">
                        • История приемов пищи
                    </Typography>
                    <Typography sx={{color: "#FFFFFF"}} variant="body2" color="text.secondary">
                        • Статистика потребляемого КБЖУ
                    </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ maxWidth: 1000, maxHeight: 200, display: "flex", boxShadow: 0, backgroundColor: "#E2E2E2" }}>
                    <CardMedia
                    sx={{ height: 200, width: 200 }}
                        component="img"
                        width="140"
                        image="src/Assets/s_icon.png"
                    />
                    <CardContent sx={{ backgroundColor: "#902B2B", width: 800, borderRadius: 5, padding: 3 }}>
                    <Typography sx={{color: "#FFFFFF"}} gutterBottom variant="h5" component="div">
                        Рассчет калорий
                    </Typography>
                    <Typography sx={{color: "#FFFFFF"}} variant="body2" color="text.secondary">
                        • Поможем определить дневную норму калорий для разных целей: похудение, поддержание, набор веса
                    </Typography>
                    </CardContent>
                </Card> 
                <Card sx={{ maxWidth: 1000, maxHeight: 200, display: "flex", boxShadow: 0, backgroundColor: "#E2E2E2"    }}>
                    <CardMedia
                    sx={{ height: 200, width: 200 }}
                        component="img"
                        width="140"
                        image="src/Assets/t_icon.png"
                    />
                    <CardContent sx={{ backgroundColor: "#902B2B", width: 800, borderRadius: 5, padding: 3 }}>
                    <Typography sx={{color: "#FFFFFF"}} gutterBottom variant="h5" component="div">
                        Личный кабинет
                    </Typography>
                    <Typography sx={{color: "#FFFFFF"}} variant="body2" color="text.secondary">
                        • Позволяет увидеть прогресс за определенный период
                    </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Footer/>
        </Grid>
    )
}