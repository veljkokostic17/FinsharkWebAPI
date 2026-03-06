import { CompanyProfile, CompanySearch } from "./company";
import axios, { isAxiosError } from 'axios';


interface SearchResponse {
    data: CompanySearch[];
}

export const searchCompanies = async (query: string) => {
    try{
        const data = await axios.get<SearchResponse>(
            `https://financialmodelingprep.com/stable/search-symbol?query=${query}&apikey=PvTxUxuQbVGCwm2n3kyT02S11Atc0IWq`
        );
        return data;
    } catch (error){
        if(axios.isAxiosError(error)) {
            console.log("error message: ", error.message);
            return error.message;
        } else {
            console.log("unexpected error: ", error);
            return "An unexpected error has occured."
        }
    }
};

export const getCompanyProfile = async (query: string) => {
    try {
        const data = await axios.get<CompanyProfile[]>(
            `https://financialmodelingprep.com/stable/profile?symbol=${query}&apikey=PvTxUxuQbVGCwm2n3kyT02S11Atc0IWq`
        )
        return data;
    }   catch (error: any){
        console.log("error message from API: ", error.message);
    }
}