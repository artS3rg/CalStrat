import { Box, Button, Paper, TextField } from "@mui/material";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { UserAdmin } from "../../Pages/AdminPanel";

export function responseUser(data: UserAdmin) {
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
                        id="outlined-read-only-input"
                        label="Id"
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField value={data?.Email}
                        id="outlined-read-only-input"
                        label="Email"
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </div>
                <div>
                    <TextField value={data?.Nickname}
                        id="outlined-read-only-input"
                        label="Nickname"
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </div>
            </Box>
            <Box sx={{ 'textAlign': 'center' }}>
                <Button>
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