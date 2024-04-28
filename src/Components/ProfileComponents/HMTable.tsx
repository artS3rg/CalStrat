import { Box, Button, ClickAwayListener, Grid, TextField } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React from 'react';

interface Food {
  name: string,
  gramm: number,
  kkal: number,
  proteins: number,
  fat: number,
  carbs: number,
}

export default function HMTable() {
  
  const [rowIndex, setRowIndex] = React.useState(-1);
  const [columnIndex, setColumnIndex] = React.useState(-1);
  const [rows, setRows] = React.useState<any[]>([
    { id: 1, name: "something", gramm: 0, kkal: 0, proteins: 0, fat: 0, carbs: 0},
    { id: 2, name: "something", gramm: 0, kkal: 0, proteins: 0, fat: 0, carbs: 0},
    { id: 3, name: "something", gramm: 0, kkal: 0, proteins: 0, fat: 0, carbs: 0},
    { id: 4, name: "something", gramm: 0, kkal: 0, proteins: 0, fat: 0, carbs: 0},
    { id: 5, name: "something", gramm: 0, kkal: 0, proteins: 0, fat: 0, carbs: 0},
    { id: 6, name: "something", gramm: 0, kkal: 0, proteins: 0, fat: 0, carbs: 0},
    { id: 7, name: "something", gramm: 0, kkal: 0, proteins: 0, fat: 0, carbs: 0},
  ]);

  const handleTextFieldChange = (rowInd: number, colName: "name" | "gramm" | "kkal" | "proteins" | "fat" | "carbs", value: string) => {
    rows[rowInd][colName] = value;
  };

  const handleExit = () => {
    setRowIndex(-1);
    setColumnIndex(-1);
  }

  const handlecreateNewRow = () => {
    if (rows.length != 0){
      let lastId = rows[rows.length-1].id;
      let Id = lastId+1;
      rows.push({id: Id, name: "продукт", gramm: 0, kkal: 0, proteins: 0, fat: 0, carbs: 0});
    }
    else{
      rows.push({id: 1, name: "продукт", gramm: 0, kkal: 0, proteins: 0, fat: 0, carbs: 0});
    }
    
    setRows([...rows]);
  }

  return (
    <Box>
      <ClickAwayListener onClickAway={() => handleExit()}>
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
                {rows.map((row, index) => (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    <TableCell
                      onClick={() => { setRowIndex(index); setColumnIndex(0); }}
                    >
                      {
                        rowIndex === index && columnIndex === 0 ?
                          <TextField
                            placeholder={row.name}
                            defaultValue={rows[index]["name"]}
                            onChange={(event) => handleTextFieldChange(index, "name", event.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                handleExit();
                              }
                            }}
                          /> : row.name
                      }
                    </TableCell>
                    <TableCell
                      onClick={() => { setRowIndex(index); setColumnIndex(1); }}
                    >
                      {
                        rowIndex === index && columnIndex === 1 ?
                          <TextField
                            placeholder={"gramm"}
                            defaultValue={rows[index]["gramm"]}
                            onChange={(event) => handleTextFieldChange(index, "gramm", event.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                handleExit();
                              }
                            }}
                          /> : row.gramm
                      }
                    </TableCell>
                    <TableCell
                      onClick={() => { setRowIndex(index); setColumnIndex(2); }}
                    >
                      {
                        rowIndex === index && columnIndex === 2 ?
                          <TextField
                            placeholder={row.kkal}
                            defaultValue={rows[index]["kkal"]}
                            onChange={(event) => handleTextFieldChange(index, "kkal", event.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                handleExit();
                              }
                            }}
                          /> : row.kkal
                      }
                    </TableCell>
                    <TableCell
                      onClick={() => { setRowIndex(index); setColumnIndex(3); }}
                    >
                      {
                        rowIndex === index && columnIndex === 3 ?
                          <TextField
                            placeholder={row.proteins}
                            defaultValue={rows[index]["proteins"]}
                            onChange={(event) => handleTextFieldChange(index, "proteins", event.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                handleExit();
                              }
                            }}
                          /> : row.proteins
                      }
                    </TableCell>
                    <TableCell
                      onClick={() => { setRowIndex(index); setColumnIndex(4); }}
                    >
                      {
                        rowIndex === index && columnIndex === 4 ?
                          <TextField
                            placeholder={row.fat}
                            defaultValue={rows[index]["fat"]}
                            onChange={(event) => handleTextFieldChange(index, "fat", event.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                handleExit();
                              }
                            }}
                          /> : row.fat
                      }
                    </TableCell>
                    <TableCell
                      onClick={() => { setRowIndex(index); setColumnIndex(5); }}
                    >
                      {
                        rowIndex === index && columnIndex === 5 ?
                          <TextField
                            placeholder={row.carbs}
                            defaultValue={rows[index]["carbs"]}
                            onChange={(event) => handleTextFieldChange(index, "carbs", event.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                handleExit();
                              }
                            }}
                          /> : row.carbs
                      }
                    </TableCell>
                    
                    <TableCell>
                      <Button variant="contained" sx = {{
                        backgroundColor: '#A9A9A9', 
                        fontFamily: 'Russo One',
                        fontSize: 12,
                        "&:hover": { backgroundColor: "#902B2B", },
                      }} 
                        onClick={() => { rows.splice(index, 1); setRows([...rows]); }}>Delete</Button>
                      </TableCell>

                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </ClickAwayListener>
      <Grid container>
        <Grid item xs={8}>
            <p style={{ fontFamily: 'Russo One', color: '#8F2323', fontSize: 20, marginLeft: 5}}>Сегодня вы выполнили норму!</p>
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" sx={{
            width: 250,
            backgroundColor: '#902B2B', 
            fontFamily: 'Russo One',
            fontSize: 20,
            textTransform: 'capitalize',
            "&:hover": { backgroundColor: "#902B2B", },
            marginTop: 1,
            borderRadius: 2,
            }}
            onClick={() => {handlecreateNewRow()}}>
            Добавить
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}