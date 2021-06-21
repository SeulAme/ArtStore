require("dotenv").config();
const express = require("express");
const productRoutes = require("./routes/productRoutes");
const connectDB = require("./config/db");

connectDB();

const app = express();//ускорение серверной разработки

app.use(express.json());//формат данных

// app.get("/", (req, res) => {
//   res.json({ message: "API running..." });//тестовый запрос
// });

app.use("/api/products", productRoutes);

//стартуем!
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
