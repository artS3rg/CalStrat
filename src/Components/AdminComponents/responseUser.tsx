import { Box, Button, Paper, TextField } from "@mui/material";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { UserAdmin } from "../../Pages/AdminPanel";

export function responseUser(data: UserAdmin, state: boolean, func: React.Dispatch<React.SetStateAction<boolean>>) {
    return (
        <>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                    'textAlign': 'center',
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField value={data?.Id}
                        id="outlined-required"
                        label="Id"
                    />
                    <TextField defaultValue={data?.Email} onChange={(e) => data.Email = e.target.value}
                        id="outlined-required"
                        label="Email"
                    />
                </div>
                <div>
                    <TextField defaultValue={data?.Nickname} onChange={(e) => data.Nickname = e.target.value}
                        id="outlined-required"
                        label="Nickname"
                    />
                </div>
            </Box>
            <Box sx={{ 'textAlign': 'center' }}>
                <Button onClick={() => func(!state)}>
                    <Paper
                        sx={{
                            color: "white",
                            textAlign: "center",
                            p: 2,
                            height: 20,
                            width: 100,
                            backgroundColor: "#902B2B",
                            "&:hover": { backgroundColor: "#902B2B" }
                        }}
                    >
                        Сохранить
                    </Paper>
                </Button>
            </Box>
        </>
    )
}