import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


const crpytoNewsHeaders = {
        'x-bingapis-sdk': 'true',
        'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
        'x-rapidapi-key': '80350d9ff7msh7e2b55a3cb42541p134d7ejsn6c78976fef97'
};

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) => ({
    url,
    headers: crpytoNewsHeaders
});

export const cryptoNewsApi = createApi({
    reducerPath: "cryptoNewsApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;