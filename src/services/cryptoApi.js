// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/coins',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       timePeriod: '24h',
//       'tiers[0]': '1',
//       orderBy: 'marketCap',
//       orderDirection: 'desc',
//       limit: '50',
//       offset: '0'
//     },
//     headers: {
//       'X-RapidAPI-Key': '449a37ab45mshede0d005421abc6p1e48b6jsn402d5bfab3f8',
//       'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//     }
//   };

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const cryptoApiHeaders = {
  "X-RapidAPI-Key": "449a37ab45mshede0d005421abc6p1e48b6jsn402d5bfab3f8",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({
    url,
    headers:cryptoApiHeaders
})

export const cryptoApi = createApi({
    reducerPath:'cryptoApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints: (builder) =>({
        getCryptos:builder.query({
            query:()=>createRequest('/exchanges')
        })
    })
    

})