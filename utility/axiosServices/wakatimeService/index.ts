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
    getFastData: async (): Promise<AxiosResponse<any>> => {
        try {
            return await httpClient.get(`https://wakatime.com/api/v1/users/5ba4f38e-d1c5-4872-9196-3b7a657a801a/stats/last_7_days?timeout=15&heavy_cached=true`);
        } catch (error) {
            return Promise.reject(error);
        }
    },
    getWakatimeDetalhamento: async (): Promise<AxiosResponse<any>> => {
        let now = dateNow();
        let lastWeek = dateNowMinusSeven()
        try {
            return await httpClient.get(`https://wakatime.com/share/@MarceloFullstack/e50ca45b-6ced-4c9c-8eb1-91d2632d2312.json`);
        } catch (error) {
            return Promise.reject(error);

        }
    },
    getWakatimeStats: async (): Promise<AxiosResponse<any>> => {
        try {
            const response = await httpClient.get('users/current/stats');
            return response;
        } catch (error) {
            return Promise.reject(error);
        }
    },
    getWakatimeHeartbeats: async (): Promise<AxiosResponse<any>> => {
        try {
            const response = await httpClient.get('users/current/heartbeats');
            return response;
        } catch (error) {
            return Promise.reject(error);
        }
    },
    getWakatimeHeartbeatsByProject: async (): Promise<AxiosResponse<any>> => {
        try {
            const response = await httpClient.get('users/current/heartbeats/by_project');
            return response;
        } catch (error) {
            return Promise.reject(error);
        }
    },
    getWakatimeHeartbeatsByLanguage: async (): Promise<AxiosResponse<any>> => {
        try {
            const response = await httpClient.get('users/current/heartbeats/by_language');
            return response;
        } catch (error) {
            return Promise.reject(error);

        }
    },
    getWakatimeHeartbeatsByTag: async (): Promise<AxiosResponse<any>> => {
        try {
            const response = await httpClient.get('users/current/heartbeats/by_tag');
            return response;
        } catch (error) {
            return Promise.reject(error);
        }
    },
    getWakatimeHeartbeatsByUser: async (): Promise<AxiosResponse<any>> => {
        try {
            const response = await httpClient.get('users/current/heartbeats/by_user');
            return response;
        } catch (error) {
            return Promise.reject(error);

        }
    },
    getWakatimeHeartbeatsByUserByProject: async (): Promise<AxiosResponse<any>> => {
        try {
            return await httpClient.get('users/current/heartbeats/by_user_by_project');
        } catch (error) {
            return Promise.reject(error);
        }
    },
    getWakatimeHeartbeatsByUserByLanguage: async (): Promise<AxiosResponse<any>> => {
        try {
            const response = await httpClient.get('users/current/heartbeats/by_user_by_language');
            return response;
        } catch (error) {
            return Promise.reject(error);

        }
    },

}