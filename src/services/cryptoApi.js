import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '80350d9ff7msh7e2b55a3cb42541p134d7ejsn6c78976fef97'
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({
    url,
    headers: cryptoApiHeaders
})

export const cryptoApi = createApi({
    reducerPath: "cryptoApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coins/${coinId}`)
        })
    })
});

export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery
} = cryptoApi;