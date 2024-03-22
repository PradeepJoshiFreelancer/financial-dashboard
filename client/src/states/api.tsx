import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  GetKpiResponse,
  GetProductsResponse,
  GetTransactionsResponse,
} from "./types";

console.log(
  "🚀 ~ import.meta.env.VITE_BASE_URL:",
  import.meta.env.VITE_BASE_URL
);
export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: "main",
  tagTypes: ["Kpis", "Products", "Transaction"],
  endpoints: (build) => ({
    getKpis: build.query<GetKpiResponse, void>({
      query: () => "/kpi/kpis",
      providesTags: ["Kpis"],
    }),
    getProducts: build.query<GetProductsResponse, void>({
      query: () => "/product/products",
      providesTags: ["Products"],
    }),
    getTransactions: build.query<GetTransactionsResponse, void>({
      query: () => "/transaction/transactions",
      providesTags: ["Transaction"],
    }),
  }),
});

export const { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } =
  api;
