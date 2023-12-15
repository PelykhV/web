import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api";

export const getHotelList = (filterCondition) => {
    return axios.get(`${API_BASE_URL}/hotels`, { params: filterCondition });
};

export const getDefaultHotelList = () => {
    return axios.get(`${API_BASE_URL}/hotels`);
};

export const getDetailedHotelInfo = (hotelId) => {
    return axios.get(`${API_BASE_URL}/hotel/${hotelId}`);
};
