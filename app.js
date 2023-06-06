import dotenv from 'dotenv'
import express from 'express'
import { join } from 'path'
import webRoutes from './routes/web.js';
import bodyParser from 'body-parser';
import flash from 'express-flash';

dotenv.config()
const app = express();
const port = process.env.PORT

app.use(express.urlencoded({ extended: true }))
app.use('/', express.static(join(process.cwd(), "public")))
app.use("/", webRoutes)


app.set("view engine", "ejs")
app.listen(port, () => {
    console.log(`Server Listening at port  http://localhost:${port}`)
})