import axios from "axios";

// TODO
// add API_URL to Environment
// create common function handle request
const API_URL = "https://XXXXX60a37a487c6e8b0017e2708e.mockapi.io";

export const getData = (params: any) => axios.get(API_URL + '/api/v1/account', {
  params
});

// add type later
export const addNewData = (params: any) => axios.post(API_URL + '/api/v1/account', params);