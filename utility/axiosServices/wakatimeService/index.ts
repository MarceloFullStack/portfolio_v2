import axios, {AxiosResponse} from 'axios';
import {dateNow, dateNowMinusSeven} from "../../dates";

const httpClient = axios.create({
    baseURL: "https://wakatime.com/api/v1/", // baseURL: process.env.APP_API_BASE_URL,
    timeout: 100000,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Basic " + process.env.WAKATIME_API_KEY
    }
});

export const wakatimeService = {
    getWakatime: async (): Promise<AxiosResponse<any>> => {
        let filter: 'last_7_days' | 'last_30_days' = "last_7_days"
        try {
            const response = await httpClient.get(`users/current/languages`);
            // const response = await httpClient.get(`users/MarceloFullstack/stats/${filter}`);
            return Promise.resolve(response.data.data);
        } catch (error) {
            return Promise.reject(error);
        }
    },

    getWakatimeAlltimeLanguage: async (): Promise<AxiosResponse<any>> => {
        try {
            const response = await httpClient.get(`https://wakatime.com/share/@MarceloFullstack/870560ae-96d2-45c9-ad98-022526219f48.json`);
            return Promise.resolve(response.data);
        } catch (error) {
            return Promise.reject(error);
        }
    },
    getWakatimeLast7Days: async (): Promise<AxiosResponse<any>> => {
        try {
            const response = await httpClient.get(`https://wakatime.com/share/@MarceloFullstack/115f24dd-e486-4f7a-8de6-a20514d120bc.json`);
            return Promise.resolve(response.data);
        } catch (error) {
            return Promise.reject(error);
        }
    },
    getWakatimeCodingActivity: async (): Promise<AxiosResponse<any>> => {
        try {
            const response = await httpClient.get(`https://wakatime.com/share/@MarceloFullstack/db109429-ddb6-41d9-9dfa-f2cb7b05830e.json`);
            return Promise.resolve(response.data);
        } catch (error) {
            return Promise.reject(error);
        }
    },

}