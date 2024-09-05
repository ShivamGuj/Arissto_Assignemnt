const express = require("express");
const savedController = require("./controllers/savedController");
const cors = require("cors");

const app = express();
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.get("/saved-papers", savedController.getSavedPapers);
app.post("/save-paper", savedController.savePaper);
app.delete("/remove-paper/:id", savedController.removePaper);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
