import { Grid, Link, Typography } from "@mui/material";

export function Footer() {
    return (
        <Grid
        container
        direction="column"
        alignItems="end"
        justifyContent="center"
        sx={{
            backgroundColor: "#777777",
            color: "#FFFFFF",
            height: 80,
            pr: 3
        }}
        >
            <Typography>
                Project{' '}
                <Link href="https://github.com/MaksimovYuriy/API_DB" underline="none">Git</Link>
            </Typography>
            <Typography>
                Калорийный стратег 2024 - Built with MUI
            </Typography>
        </Grid>
    )
}