import express from 'express'
import { recordRoutes } from './src/routes/record.routes.js'

const app = express()

app.use(express.json())



app.use('/api/records', recordRoutes)

app.listen(4000, () => {
    console.log("server on port 4000")
})