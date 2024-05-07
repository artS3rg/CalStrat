import { Box, Button, ClickAwayListener, Grid, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
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

    const [stateProductChange, setStateProductChange] = React.useState<{id: string, state: boolean, value: string}>({id: "0", state: false, value: "Изменить"});

    const [stateButtonAdd, setStateButtonAdd] = React.useState<boolean>(false)

    const handleTextFieldChange = (rowInd: number, colName: "productId" | "sum" | "kcal" | "proteins" | "fats" | "carbohydrates", value: string) => {
        products[rowInd][colName] = value;
    };

    const handleChangeProduct = (Id: string, ) => {
        if (stateProductChange.state == false) {
            setStateProductChange({id: Id, state: true, value: "Сохранить"})
        }
        else{
            setStateProductChange({id: "0", state: false, value: "Изменить"})
        }

        setUpdate(!update)
        
    }

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

    const addProduct = (product : Food) => {
        
    }

    useEffect (() => {
        let d = date?.format('YYYY-MM-DD')
        console.log(d)
        fetch('https://localhost:7129/DB/GetProduct?userID=' + selector.Id + '&date=' + d )
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
                setProducts(json)
                console.log(products)
            }
        )
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
                        <p>0</p>
                    </Grid>
                    <Grid item xs={3} textAlign={'center'}>
                        <p className="HMName">Белки</p>
                        <p>0</p>
                    </Grid>
                    <Grid item xs={3} textAlign={'center'}>
                        <p className="HMName">Жиры</p>
                        <p>0</p>
                    </Grid>
                    <Grid item xs={3} textAlign={'center'}>
                        <p className="HMName">Углеводы</p>
                        <p>0</p>
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
                                <TableCell sx={{fontFamily: 'Russo One', fontSize: 16, backgroundColor: '#e8e8e8'}}>Изменить</TableCell>
                                <TableCell sx={{fontFamily: 'Russo One', fontSize: 16, backgroundColor: '#e8e8e8'}}>Удалить</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {products.map((row, index) => (
                                <TableRow hover role="checkbox">
                                    <TableCell>
                                    {
                                        stateProductChange?.state == true && stateProductChange?.id == row.id ?
                                        <TextField
                                            placeholder={row.productId}
                                            defaultValue={products[index]["productId"]}
                                            onChange={(event) => handleTextFieldChange(index, "productId", event.target.value)}
                                        /> : row.productId
                                    }
                                    </TableCell>
                                    <TableCell>
                                    {
                                        stateProductChange?.state == true && stateProductChange?.id == row.id ?
                                        <TextField
                                            placeholder={row.sum}
                                            defaultValue={products[index]["sum"]}
                                            onChange={(event) => handleTextFieldChange(index, "sum", event.target.value)}
                                        /> : row.sum
                                    }
                                    </TableCell>
                                    <TableCell>
                                    {
                                        stateProductChange?.state == true && stateProductChange?.id == row.id ?
                                        <TextField
                                            placeholder={row.kcal}
                                            defaultValue={products[index]["kcal"]}
                                            onChange={(event) => handleTextFieldChange(index, "kcal", event.target.value)}
                                        /> : row.kcal
                                    }
                                    </TableCell>
                                    <TableCell>
                                    {
                                        stateProductChange?.state == true && stateProductChange?.id == row.id ?
                                        <TextField
                                            placeholder={row.proteins}
                                            defaultValue={products[index]["proteins"]}
                                            onChange={(event) => handleTextFieldChange(index, "proteins", event.target.value)}
                                        /> : row.proteins
                                    }
                                    </TableCell>
                                    <TableCell>
                                    {
                                        stateProductChange?.state == true && stateProductChange?.id == row.id ?
                                        <TextField
                                            placeholder={row.fats}
                                            defaultValue={products[index]["fats"]}
                                            onChange={(event) => handleTextFieldChange(index, "fats", event.target.value)}
                                        /> : row.fats
                                    }
                                    </TableCell>
                                    <TableCell>
                                    {
                                        stateProductChange?.state == true && stateProductChange?.id == row.id ?
                                        <TextField
                                            placeholder={row.carbohydrates}
                                            defaultValue={products[index]["carbohydrates"]}
                                            onChange={(event) => handleTextFieldChange(index, "carbohydrates", event.target.value)}
                                        /> : row.carbohydrates
                                    }
                                    </TableCell>

                                    <TableCell>
                                    <Button variant="contained" sx = {{
                                        backgroundColor: '#A9A9A9', 
                                        fontFamily: 'Russo One',
                                        fontSize: 10,
                                        "&:hover": { backgroundColor: "#902B2B", },
                                    }} 
                                        onClick={() => {handleChangeProduct(row.id)}}>{stateProductChange.id == row.id ? stateProductChange?.value : "Изменить" }</Button>
                                    </TableCell>
                                    
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
                        onClick={() => setStateButtonAdd(true)}
                        >
                        Добавить прием пищи
                    </Button>

                    <Button variant="contained" sx={{
                        backgroundColor: '#902B2B', 
                        fontFamily: 'Russo One',
                        fontSize: 16,
                        "&:hover": { backgroundColor: "#902B2B", },
                        marginTop: 1,
                        borderRadius: 2,
                        float: "right"
                        }}
                        >
                        Сохранить
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
                                                        onClick={() => addProduct(product)}
                                                        >
                                                        Добавить
                                                    </Button>
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


