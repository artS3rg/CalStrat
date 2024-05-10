import { Box, Button, Grid, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React, { useEffect } from "react";
import { RootState } from "../Redux/store";
import { UserState } from "../Redux/user";
import { useAppSelector } from "../Redux/hooks";
import Card from '@mui/material/Card';

interface Food{
    id: string
    name: string
    productId: string
    sum: string
    kcal: string
    proteins: string
    fats: string
    carbohydrates: string
    date: string
    userId: string
}

export default function HistoryMeal() {

    const [date, setDate] = React.useState<Dayjs | null>()
    const selector: UserState = useAppSelector((state: RootState) => state.user)
    const [products, setProducts] = React.useState<Food[]>([])

    const [update, setUpdate] = React.useState<boolean>(false)

    const [searchProductValue, setSearchProductValue] = React.useState<string>()
    const [searchProductsList, setSearchProductsList] = React.useState<any[]>([])

    const [stateButtonAdd, setStateButtonAdd] = React.useState<boolean>(false)
    const [stateSum, setStateSum] = React.useState<number>(0)
    const [stateButtonSum, setStateButtonSum] = React.useState<{state: boolean, idProduct: string}>()

    const [KPFC, setKPFC] = React.useState<{kcal: number, proteins: number, fats: number, cars: number}>()


    useEffect (() => {{
        let kc = 0
        let pr = 0
        let fat = 0
        let carb = 0

        for(let p of products)
        {
            kc = kc + Number(p.kcal)
            pr = pr + Number(p.proteins)
            fat = fat + Number(p.fats)
            carb = carb + Number(p.carbohydrates)
        }

        setKPFC({kcal: kc, proteins: pr, fats: fat, cars: carb})
    }}, [products])

    const handleDeleteProduct = async (Id: string) => {
        const response = await fetch('https://localhost:7129/DB/DelUserProduct?ProductId=' + Id, {
            method: 'DELETE'
        })
        if (!response.ok) {
            console.log("Ошибка запроса удаления продукта")
        }
        else {
            console.log(response)
        }
        setUpdate(!update)
    }

    const handleAddProduct = async (userId: number, productId: string, sum: number) => {
        const response = fetch('https://localhost:7129/DB/AddUserProduct?userID=' + userId +'&productId=' + productId + '&sum=' + sum, {
            method: 'POST'
        })
        if (!(await response).ok) {
            console.log("Ошибка запроса добавления продукта")   
        }
        else {
            console.log(response)
        }
        setUpdate(!update)
        setStateButtonSum({state: false, idProduct: "0"})
        setStateSum(0)
    }

    const getNames = async (prs: Food[]) => {
        {for(let p of prs){
            const response = await fetch('https://localhost:7129/DB/GetNameProduct?id=' + p.productId)
            const data = await response.json()
            p.name = data;
            console.log(p.name)
        }}
    } 

    const getData = async () => {
        let d = date?.format('YYYY-MM-DD')
        console.log(d)

        const response = await fetch('https://localhost:7129/DB/GetProduct?userID=' + selector.Id + '&date=' + d )
        const json = await response.json()
        console.log('json', json)

        let prs : Food[] = json
        await getNames(prs)
        console.log('prsAfter: ', prs)

        setProducts(prs)
        console.log('products', products)
    }

    useEffect (() => {
        getData()
      }, [update])

    const searchProduct = () => {
        console.log(searchProductValue)
        fetch('https://localhost:7129/DB/SearchProduct?product=' + searchProductValue)
        .then(
            response => {
                if (!response.ok) {
                    throw new Error('Ошибка');
                }
                let res = response.json()
                console.log(res)
                return res
            }
        )
        .then(
            json => {
                setSearchProductsList(json)
                console.log(searchProductsList)
            }
        )}


    return (
        <Box sx={{
            width: 850,
            marginTop: 5,
            marginLeft: "auto",
            marginRight: "auto",
            mb: 10
        }}>
            <Typography align="center" sx={{
                fontFamily: 'Russo One',
                fontWeight: 400,
                fontSize: 20,
                margin: 2,
            }}>Иcтория приемов пищи</Typography>

            <Box sx={{
                borderRadius: 5,
                backgroundColor: "white",
                padding: 2,

                }}>

                <Box sx={{
                    textAlign: "center"
                    }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Дата"
                            value={date}
                            format="DD/MM/YYYY"
                            onChange={(newValue) => {setDate(newValue), setUpdate(!update)}}
                            sx={{
                                marginTop: 1,
                                marginBottom: 2
                            }} />
                    </LocalizationProvider>

                </Box>

                <Grid container sx={{
                    backgroundColor: '#e8e8e8',
                    borderRadius: 5,
                    paddingX: 3,
                    marginBottom: 2,
                }}>
                    <Grid item xs={3} textAlign={'center'}>
                        <p className="HMName">Ккал</p>
                        <p>{KPFC?.kcal}</p>
                    </Grid>
                    <Grid item xs={3} textAlign={'center'}>
                        <p className="HMName">Белки</p>
                        <p>{KPFC?.proteins}</p>
                    </Grid>
                    <Grid item xs={3} textAlign={'center'}>
                        <p className="HMName">Жиры</p>
                        <p>{KPFC?.fats}</p>
                    </Grid>
                    <Grid item xs={3} textAlign={'center'}>
                        <p className="HMName">Углеводы</p>
                        <p>{KPFC?.cars}</p>
                    </Grid>
                </Grid>

                <Box>
                    <Paper sx={{ width: '100%', overflow: 'hidden', borderRadius: 5, marginBottom: 2}}>
                    <TableContainer
                        component={Paper}
                        sx={{
                        maxHeight: 300, 
                        borderRadius: 5,
                        backgroundColor: '#e8e8e8'
                        }}
                        >
                        <Table stickyHeader aria-label="sticky table" >
                        <TableHead>
                            <TableRow>
                            <TableCell sx={{fontFamily: 'Russo One', fontSize: 16, backgroundColor: '#e8e8e8'}}>Продукт</TableCell>
                            <TableCell sx={{fontFamily: 'Russo One', fontSize: 16, backgroundColor: '#e8e8e8'}}>Грамм</TableCell>
                            <TableCell sx={{fontFamily: 'Russo One', fontSize: 16, backgroundColor: '#e8e8e8'}}>Ккал</TableCell>
                            <TableCell sx={{fontFamily: 'Russo One', fontSize: 16, backgroundColor: '#e8e8e8'}}>Белки</TableCell>
                            <TableCell sx={{fontFamily: 'Russo One', fontSize: 16, backgroundColor: '#e8e8e8'}}>Жиры</TableCell>
                            <TableCell sx={{fontFamily: 'Russo One', fontSize: 16, backgroundColor: '#e8e8e8'}}>Углеводы</TableCell>
                            <TableCell sx={{fontFamily: 'Russo One', fontSize: 16, backgroundColor: '#e8e8e8'}}>Удалить</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {products.map((row) => (
                            <TableRow hover role="checkbox">
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.sum}</TableCell>
                                <TableCell>{row.kcal}</TableCell>
                                <TableCell>{row.proteins}</TableCell>
                                <TableCell>{row.fats}</TableCell>
                                <TableCell>{row.carbohydrates}</TableCell>
                                <TableCell>
                                    <Button variant="contained" sx = {{
                                        backgroundColor: '#A9A9A9', 
                                        fontFamily: 'Russo One',
                                        fontSize: 10,
                                        "&:hover": { backgroundColor: "#902B2B", },
                                    }} 
                                        onClick={() => { handleDeleteProduct(row.id)}}>Удалить</Button>
                                </TableCell>
                            </TableRow>
                            ))}
                        </TableBody>
                        </Table>
                    </TableContainer>
                    </Paper>
                   
                </Box>

                <Box>
                    <Button variant="contained" 
                        sx={{
                        backgroundColor: '#902B2B', 
                        fontFamily: 'Russo One',
                        fontSize: 16,
                        "&:hover": { backgroundColor: "#902B2B", },
                        marginTop: 1,
                        borderRadius: 2,
                        }}
                        onClick={() => {setStateButtonAdd(!stateButtonAdd), setSearchProductsList([])}}
                        >
                        Добавить прием пищи
                    </Button>

                    <Grid>
                        {
                        stateButtonAdd === true ?
                        <Grid>
                            <Grid sx={{
                                marginTop: 2
                                }}>
                                <TextField
                                    label="Название продукта"
                                    size="small"
                                    sx={{ marginRight: 2 , width: 300}}
                                    onChange={(e) => {setSearchProductValue(e.target.value)}} />
                                <Button variant="contained" sx={{
                                    backgroundColor: '#A9A9A9', 
                                    fontFamily: 'Russo One',
                                    fontSize: 14,
                                    "&:hover": { backgroundColor: "#902B2B", },
                                    borderRadius: 2,
                                    }}
                                    onClick={searchProduct}
                                    >
                                    Поиск
                                </Button>
                                <Box sx={{

                                }}>
                                {
                                    searchProductsList.map((product) => {
                                        return (
                                            <Card variant="outlined" sx={{
                                                marginY: 2,
                                                padding: 2
                                            }}>
                                                <Stack direction="row" justifyContent="space-between">
                                                    <Typography >{product.name}</Typography>
                                                    <Button variant="contained" sx={{
                                                        backgroundColor: '#A9A9A9', 
                                                        fontFamily: 'Russo One',
                                                        fontSize: 12,
                                                        "&:hover": { backgroundColor: "#902B2B", },
                                                        borderRadius: 2,
                                                        float: "right"
                                                        }}
                                                        onClick={() => handleAddProduct(selector.Id, product.id, stateSum)}
                                                        >
                                                        Добавить
                                                    </Button>
                                                </Stack>
                                                <Typography>На 100 г продукта:</Typography>
                                                <Stack direction="row">
                                                    <Typography sx={{ marginRight: 1}}>Ккал:</Typography>
                                                    <Typography sx={{ marginRight: 2}}>{product.kcal}</Typography>
                                                    <Typography sx={{ marginRight: 1}}>Белки:</Typography>
                                                    <Typography sx={{ marginRight: 2}}>{product.proteins}</Typography>
                                                    <Typography sx={{ marginRight: 1}}>Жиры:</Typography>
                                                    <Typography sx={{ marginRight: 2}}>{product.fats}</Typography>
                                                    <Typography sx={{ marginRight: 1}}>Углеводы:</Typography>
                                                    <Typography sx={{ marginRight: 2}}>{product.carbohydrates}</Typography>
                                                </Stack>
                                                <Stack direction="row">
                                                    <Typography sx={{marginRight: 2}}>Укажите количество грамм:</Typography>
                                                    {
                                                        stateButtonSum?.state == true && stateButtonSum.idProduct == product.id ? 
                                                        <TextField 
                                                        variant="standard" 
                                                        type="number" 
                                                        size="small" 
                                                        onChange={(e) => setStateSum(Number(e.target.value))}></TextField>
                                                        : <Button variant="contained" sx = {{
                                                            backgroundColor: '#A9A9A9', 
                                                            fontFamily: 'Russo One',
                                                            fontSize: 10,
                                                            "&:hover": { backgroundColor: "#902B2B", },
                                                            }} 
                                                            onClick={() => {setStateButtonSum({state: true, idProduct: product.id})}}>Указать</Button>
                                                    }
                                                    
                                                </Stack>
                                                
                                            </Card>
                                        )
                                    })
                                }
                                </Box>
                            </Grid>
                            
                            
                        </Grid>
                        : <p></p>
                        }
                    </Grid>
                </Box>
            </Box>


        </Box>
    )
}


