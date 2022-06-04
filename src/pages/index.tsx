import Layout from "../components/Layout/Layout";
import Graphics from "../components/graphics/graphics";
import {Grid} from "@mui/material";
import {wakatimeService} from '../../utility/axiosServices/wakatimeService';

export default function Index({allTimeLanguage, last7DaysLanguage} : {allTimeLanguage: Array<any>, last7DaysLanguage: Array<any>}) {

    const filterPercent = (object: any[], filter: number = 1) => {
        return object.filter(item => item.percent > filter);
    }

    return (
        <div>
            <Layout>
                <Grid container style={{width: '90vw'}} justifyContent={'center'} justifyItems={'center'}
                      alignItems={'center'} alignContent={'center'}>
                    <Grid item xs={12}>
                        <Graphics allTimeLanguageShare={filterPercent(allTimeLanguage)} last7DaysShare={filterPercent(last7DaysLanguage)}/>
                    </Grid>
                </Grid>
            </Layout>
        </div>
    );
}
export const getServerSideProps = async () => {
        const allTime = await wakatimeService.getWakatimeAlltimeLanguage()
        const last7Days = await wakatimeService.getWakatimeLast7Days();
    return {
        props: {
            allTimeLanguage: allTime.data,
            last7DaysLanguage: last7Days.data
        }
    }
};