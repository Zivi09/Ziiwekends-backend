import app from "./App.js";
import connectionToDb from "./config/connectiondb.js";

const PORT = 5500;

app.listen(PORT, async () => {
  // Connect to DB
  await connectionToDb();
  console.log(`App is running at http://localhost:${PORT}`);
});
