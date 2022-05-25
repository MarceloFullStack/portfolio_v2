import Layout from "../components/Layout/Layout";
import Graphics from "../components/graphics/graphics";
import {Grid} from "@mui/material";
import {wakatimeService} from '../../utility/axiosServices/wakatimeService';


    export interface Category {
        decimal: string;
        digital: string;
        hours: number;
        minutes: number;
        name: string;
        percent: number;
        text: string;
        total_seconds: number;
    }

    export interface Editor {
        decimal: string;
        digital: string;
        hours: number;
        minutes: number;
        name: string;
        percent: number;
        text: string;
        total_seconds: number;
    }

    export interface Language {
        decimal: string;
        digital: string;
        hours: number;
        minutes: number;
        name: string;
        percent: number;
        text: string;
        total_seconds: number;
    }

    export interface OperatingSystem {
        decimal: string;
        digital: string;
        hours: number;
        minutes: number;
        name: string;
        percent: number;
        text: string;
        total_seconds: number;
    }

    export interface Data {
        categories: Category[];
        daily_average: number;
        daily_average_including_other_language: number;
        days_including_holidays: number;
        days_minus_holidays: number;
        editors: Editor[];
        holidays: number;
        human_readable_daily_average: string;
        human_readable_daily_average_including_other_language: string;
        human_readable_range: string;
        human_readable_total: string;
        human_readable_total_including_other_language: string;
        id: string;
        is_already_updating: boolean;
        is_coding_activity_visible: boolean;
        is_including_today: boolean;
        is_other_usage_visible: boolean;
        is_stuck: boolean;
        is_up_to_date: boolean;
        languages: Language[];
        operating_systems: OperatingSystem[];
        percent_calculated: number;
        range: string;
        status: string;
        timeout: number;
        total_seconds: number;
        total_seconds_including_other_language: number;
        user_id: string;
        username: string;
        writes_only: boolean;
    }

    export interface Statistics {
        data: Data;
        heavy_cached: boolean;
    }

    export interface RootObject {
        statistics: Statistics;
    }

export default function Index({statistics, detail} : {statistics: Statistics, detail: any}) {
        const {
            data: {human_readable_daily_average},
            data: {categories},
            data:  {languages},
            data: {operating_systems},
            data: {editors},

        } = statistics;
    return (
        <div>
            <Layout>
                <Grid container style={{width: '90vw'}} justifyContent={'center'} justifyItems={'center'}
                      alignItems={'center'} alignContent={'center'}>
                    <Grid item xs={12}>
                        <Graphics languages={languages} today={detail ?? []}/>
                    </Grid>
                </Grid>
            </Layout>
        </div>
    );
}
export const getServerSideProps = async () => {

    try {
        const statistcs = await wakatimeService.getFastData();
        const detail = await wakatimeService.getWakatimeDetalhamento();
        return {
            props: {
                statistics: statistcs.data,
                detail
            }
        }
    } catch (e) {
        console.log(e);
    }
};