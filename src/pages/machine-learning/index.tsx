import React from 'react';
import Layout from "../../components/Layout/Layout";
import {Button, Divider, Grid, TextField} from "@mui/material";
import styled from "styled-components";

const Center = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    min-width: 100vw;
    min-height: 'max-content';
`;
const Ia = () => {
    const [result, setResult] = React.useState({})
    const [processado, setProcessado] = React.useState();
    function handleChange(evt: any) {
        const value = evt.target.value;
        setResult({
            ...result,
            [evt.target.id]: value
        });
    }
    const handleClick = (val: any)=>{
        let payload = val.entrada ?? ''
        payload = payload.trim().split('')
        return setProcessado(payload.filter((item: any) => item))
    }

    return (
        <Layout>
            <Grid container
                  justifyContent={'center'}
                  justifyItems={'center'}
                  alignItems={'center'}
                  alignContent={'center'}
            >
                <Center>
                    <Grid item xs={12}>
                        <h1>Predição soma simples com IA</h1>
                    </Grid>
                    <Divider style={{marginBottom: "2%"}}/>
                    <Grid item xs={12} style={{width: '50%', padding: 20}}>
                        <TextField multiline
                                   fullWidth
                                   label="Entrada"
                                   id="entrada"
                                   onChange={handleChange}
                                   variant="filled"
                                   style={{background: 'white', color: 'white'}}
                        />
                    </Grid>

                    <Grid item xs={12} style={{width: '50%', padding: 20}}>
                        <TextField multiline
                                   fullWidth
                                   label="Resultados"
                                   id="result"
                                   value={
                                       processado
                                   }
                                   onChange={handleChange}
                                   variant="filled"
                                   style={{background: 'white', color: 'white'}}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="success" onClick={()=>handleClick(result)}>
                            nome botao
                        </Button>
                    </Grid>
                </Center>
            </Grid>
        </Layout>
    )
}
export default Ia;

