import axios from "axios";
import {BASE_URL} from './client'

const LISTINGS: string = "/listings";

export const getListings = () => {
    return axios.get(`${BASE_URL}${LISTINGS}`)
}