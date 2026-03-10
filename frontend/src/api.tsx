import { CompanyBalanceSheet, CompanyCashFlow, CompanyIncomeStatement, CompanyKeyMetrics, CompanyProfile, CompanySearch, CompanyTenK } from "./company";
import axios, { isAxiosError } from 'axios';


interface SearchResponse {
    data: CompanySearch[];
}

export const searchCompanies = async (query: string) => {
    try{
        const data = await axios.get<SearchResponse>(
            `https://financialmodelingprep.com/stable/search-symbol?query=${query}&apikey=${process.env.REACT_APP_API_KEY}`
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
            `https://financialmodelingprep.com/stable/profile?symbol=${query}&apikey=${process.env.REACT_APP_API_KEY}`
        );
        return data;
    }   catch (error: any){
        console.log("error message from API: ", error.message);
    }
}

export const getKeyMetrics = async (query: string) => {
    try {
        const data = await axios.get<CompanyKeyMetrics[]>(
            `https://financialmodelingprep.com/stable/key-metrics-ttm?symbol=${query}&apikey=${process.env.REACT_APP_API_KEY}`
        );
        return data;
    }   catch (error: any){
        console.log("error message from API: ", error.message);
    }
}

export const getIncomeStatement = async (query: string) => {
    try {
        const data = await axios.get<CompanyIncomeStatement[]>(
            `https://financialmodelingprep.com/stable/income-statement?symbol=${query}&apikey=${process.env.REACT_APP_API_KEY}`
        );
        return data;
    }   catch (error: any){
        console.log("error message from API: ", error.message);
    }
}

export const getBalanceSheet = async (query: string) => {
    try {
        const data = await axios.get<CompanyBalanceSheet[]>(
            `https://financialmodelingprep.com/stable/balance-sheet-statement?symbol=${query}&apikey=${process.env.REACT_APP_API_KEY}`
        );
        return data;
    }   catch (error: any){
        console.log("error message from API: ", error.message);
    }
}

export const getCashFlowStatement = async (query: string) => {
    try {
        const data = await axios.get<CompanyCashFlow[]>(
            `https://financialmodelingprep.com/stable/cash-flow-statement?symbol=${query}&apikey=${process.env.REACT_APP_API_KEY}`
        );
        return data;
    }   catch (error: any){
        console.log("error message from API: ", error.message);
    }
}

export const getTenK = async (query: string) => {
    try {
        const data = await axios.get<CompanyTenK[]>(
            `https://financialmodelingprep.com/stable/sec-filings-search/symbol?symbol=${query}&from=2024-01-01&to=2024-03-01&page=0&limit=100&apikey=${process.env.REACT_APP_API_KEY}`
        );
        return data;
    }   catch (error: any){
        console.log("error message from API: ", error.message);
    }
}