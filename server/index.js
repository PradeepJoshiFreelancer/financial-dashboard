import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import helmet from "helmet";
import morgan from "morgan";
import mongoose from "mongoose";
import productRoutes from "./routes/product.js";
import Product from "./models/Product.js";
import kpiRoutes from "./routes/kpi.js";
import KPI from "./models/KPI.js";
import { kpis, products, transactions } from "./data/data.js";
import Transaction from "./models/Transaction.js";
import transactionRoutes from "./routes/transaction.js";

// Config
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Routes
app.use("/kpi", kpiRoutes);
app.use("/product", productRoutes);
app.use("/transaction", transactionRoutes);

app.get("*", function (req, res) {
  console.log("Inside default route");
  console.log(req.url);
});

// Mongoose setup
const PORT = process.env.PORT || 9000;

mongoose
  .connect(process.env.MONGO_URL)
  .then(async () => {
    app.listen(PORT, async () => {
      console.log(`Server started at Port ${PORT}`);
      // add data one time only
      // await mongoose.connection.db.dropDatabase();
      // console.log("database delete");
      // KPI.insertMany(kpis);
      // console.log("KPI added");
      // Product.insertMany(products);
      // console.log("Products added");
      // Transaction.insertMany(transactions);
      // console.log("Transaction added");
    });
  })
  .catch((err) => console.log(`${err}`));
