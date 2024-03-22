export interface ExpensesByCategory {
  salaries: number;
  supplies: number;
  services: number;
}

export interface Month {
  month: string;
  revenue: number;
  expenses: number;
  operationalExpenses: number;
  _id: string;
  nonOperationalExpenses: number;
  id: string;
}

export interface Day {
  date: string;
  revenue: number;
  expenses: number;
  _id: string;
  id: string;
}

export interface GetKpiResponseData {
  _id: string;
  totalProfit: number;
  totalRevenue: number;
  totalExpenses: number;
  monthlyData: Array<Month>;
  dailyData: Array<Day>;
  expensesByCategory: ExpensesByCategory;
  __v: number;
  createdAt: string;
  updatedAt: string;
  id: string;
}

export interface GetKpiResponse {
  kpis: GetKpiResponseData[];
}

export interface GetProductsResponseData {
  _id: string;
  id: string;
  __v: number;
  price: number;
  expense: number;
  transactions: Array<string>;
  createdAt: string;
  updatedAt: string;
}
export interface GetProductsResponse {
  products: GetProductsResponseData[];
}

export interface GetTransactionsResponseData {
  _id: string;
  id: string;
  __v: number;
  buyer: number;
  amount: number;
  productIds: Array<string>;
  createdAt: string;
  updatedAt: string;
}
export interface GetTransactionsResponse {
  transactions: GetTransactionsResponseData[];
}
