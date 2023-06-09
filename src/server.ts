import express, { json } from "express";
import { userRoutes } from "./Routes/userRoutes";

const app = express();
app.use(json());

app.use("/users", userRoutes);

app.listen(5000, () => {
  console.log("Server Running...");
});
