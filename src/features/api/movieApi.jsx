import axios from "axios";
import { BASE_URL } from "../../settings/settings";

const movieApi = axios.create({
    baseURL: `${BASE_URL}/movies`
});

export const getMovieSearchResult = async (searchTerm) => {
    const res = await movieApi.request({
        params: {
            Title: searchTerm
        }
    })

    return res.data;
}