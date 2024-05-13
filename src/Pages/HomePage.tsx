import { Box, Card, CardContent, CardMedia, Grid, Tab, Typography } from "@mui/material";
import { LoginCard } from "../Components/HomeComponents/LoginCard";
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
                justifyContent="center"
                >
                <img src='src/Assets/vector.png' height={70}/>
                <Typography
                    sx={{
                        marginLeft: 2,
                        fontFamily: 'Yuji Mai, serif',
                        fontWeight: 400,
                        letterSpacing: '.9rem',
                        color: 'black',
                        fontSize: 40,
                        height: 80,
                        verticalAlign: 'middle'
                    }}>
                Калорийный стратег
                </Typography>
            </Grid>

            <Grid
                sx={{ mb: 10, mt: 7 }}
                container
                gap={5}
                direction="column"
                alignItems="center"
                >
                <Typography sx={{
                    fontSize: 18,
                    
                }}>
                    Сервис, созданный помочь вам поддерживать питание на нужном уровне.
                </Typography>

                <Card 
                    sx={{ maxWidth: 800, maxHeight: 200, display: "flex", boxShadow: 0, backgroundColor: "#E2E2E2" }}>
                    <CardMedia
                        sx={{ height: 200, width: 200}}
                        component="img"
                        width="140"
                        image="src/Assets/f_icon.png"
                    />
                    <CardContent sx={{ backgroundColor: "#902B2B", width: 500, borderRadius: 5, padding: 3 }}>
                        <Typography sx={{color: "#FFFFFF", fontSize: 20, fontFamily: 'Russo One',}} gutterBottom variant="h5" component="div">
                            Личный кабинет
                        </Typography>
                        <Typography sx={{color: "#FFFFFF", fontSize: 16}} >
                            <ul>
                                <li>Информация по вашей диете</li>
                                <li>Статистика потребляемого КБЖУ</li>
                            </ul>
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ maxWidth: 800, maxHeight: 200, display: "flex", boxShadow: 0, backgroundColor: "#E2E2E2" }}>
                    <CardMedia
                    sx={{ height: 200, width: 200 }}
                        component="img"
                        width="140"
                        image="src/Assets/s_icon.png"
                    />
                    <CardContent sx={{ backgroundColor: "#902B2B", width: 500, borderRadius: 5, padding: 3 }}>
                        <Typography sx={{color: "#FFFFFF", fontSize: 20, fontFamily: 'Russo One',}} gutterBottom variant="h5" component="div">
                            Рассчет калорий
                        </Typography>
                        <Typography sx={{color: "#FFFFFF"}} color="text.secondary">
                            Определим дневную норму калорий для разных целей:
                                    <ul>
                                        <li>похудение</li>
                                        <li>поддержание</li>
                                        <li>набор веса</li>
                                    </ul>
                        </Typography>
                    </CardContent>
                </Card> 
                <Card sx={{ maxWidth: 800, maxHeight: 200, display: "flex", boxShadow: 0, backgroundColor: "#E2E2E2"    }}>
                    <CardMedia
                    sx={{ height: 200, width: 200 }}
                        component="img"
                        width="140"
                        image="src/Assets/t_icon.png"
                    />
                    <CardContent sx={{ backgroundColor: "#902B2B", width: 500, borderRadius: 5, padding: 3 }}>
                        <Typography sx={{color: "#FFFFFF", fontSize: 20, fontFamily: 'Russo One',}} gutterBottom variant="h5" component="div">
                            История приемов пищи
                        </Typography>
                        <Typography sx={{color: "#FFFFFF"}} color="text.secondary">
                            <ul>
                                <li>Возможность вести учет того, что вы употребляете в пищу</li>
                                <li>Автоматический подсчет КБЖУ</li>
                            </ul>
                            

                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Footer/>
        </Grid>
    )
}