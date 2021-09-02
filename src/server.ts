import express from 'express'
import routes from './routes'
import "reflect-metadata";



const app = express()

app.use(routes)
app.listen(3333)