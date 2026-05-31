import app from "./src/app.js"
import ConnectDB from "./src/db/db.js";


ConnectDB()

app.use(cors({
  origin: "*"
}));

app.listen(3000, () => {
    console.log("App is Lisning");
})