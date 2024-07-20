const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const navbarRoutes = require("./src/routes/navbarRoutes");
const berandaRoutes = require("./src/routes/berandaRoutes");
const kontenSatuRoutes = require("./src/routes/kontenSatuRoutes");
const kontenDuaRoutes = require("./src/routes/kontenDuaRoutes");
const kontenTigaRoutes = require("./src/routes/kontenTigaRoutes");
const kontenEmpatRoutes = require("./src/routes/kontenEmpatRoutes");
const beritaRoutes = require("./src/routes/beritaRoutes");
const userRoutes = require("./src/routes/userRoutes");

const app = express();

const corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use("/api", navbarRoutes);
app.use("/api", berandaRoutes);
app.use("/api", kontenSatuRoutes);
app.use("/api", kontenDuaRoutes);
app.use("/api", kontenTigaRoutes);
app.use("/api", kontenEmpatRoutes);
app.use("/api", beritaRoutes);
app.use("/api", userRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
