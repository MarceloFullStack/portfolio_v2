import Layout from "../../components/Layout/Layout";
import styled from "styled-components";
import GraphicCodingActivity from "../../components/graphics/graphicCodingActivity";
import React, {useEffect, useState} from "react";
import {wakatimeService} from "../../../utility/axiosServices/wakatimeService";
import {Grid} from "@mui/material";
import Graphics from "../../components/graphics/graphics";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  min-width: 100vw;
`;
const Index = ({codingActivity}: any)=> {

    const createData = async (data: any) => {
        return data.map((item: { grand_total: { total_seconds: any; text: any; }; range: { date: string | number | Date; }; }) => {
            return {
                total_seconds: item.grand_total.total_seconds,
                textLabel: item.grand_total.text,
                day: new Date(item.range.date).toLocaleString('pt-br', {weekday: 'long'})
            }
        });
    }
    const [payloadGrpah, setPayloadGraph] = useState<any>(null);
    useEffect(() => {
        createData(codingActivity).then( data  => {
        setPayloadGraph(data);
        })
    }, [codingActivity]);
console.log('payloadGrpah', payloadGrpah);
  return (
    <div>
      <Layout>
            <Grid container style={{width: '90vw'}} justifyContent={'center'} justifyItems={'center'}
                  alignItems={'center'} alignContent={'center'}>
                <Grid item xs={12}>
                    {payloadGrpah ? (<GraphicCodingActivity codingActivity={payloadGrpah}/>) : (<div>Carregando...</div>)}
                </Grid>
            </Grid>
      </Layout>
    </div>
  );
}
export default Index;

export const getServerSideProps = async () => {
    const codingActivity =  await wakatimeService.getWakatimeCodingActivity();
    return {
        props: {
            codingActivity: codingActivity.data
        }
    }
};
// const getServerSideProps = async () => {
//     const codingActivity =  await wakatimeService.getWakatimeCodingActivity();
//     console.log('codingActivity >>>>>', codingActivity);
//     return {
//         props: {
//             codingActivity: codingActivity.data
//         }
//     };
// }