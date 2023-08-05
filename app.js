import express from "express"
import connectDB from "./db/connectdb.js"
import { join } from "path";
import web from "./routes/web.js"
const app = express()
const port = process.env.PORT || 3000
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/"

app.use(express.urlencoded({ extended: false }))

//Database Connection
connectDB(DATABASE_URL)

//Static Files
app.use('/', express.static(join(process.cwd(), "public")))
app.use('/edit', express.static(join(process.cwd(), "public")))

//Set Template Engine
app.set("view engine", "ejs")

//Load Routes
app.use('/', web)



app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})