import React from 'react';
import Layout from "../../components/Layout/Layout";
import {Grid} from "@mui/material";
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
                        <h1>IA</h1>
                    </Grid>
                </Center>
            </Grid>
        </Layout>
    )
}
export default Ia;

