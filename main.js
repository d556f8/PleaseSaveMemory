import express from 'express'
import { readFile } from 'fs'

const app = express()

app.use(express.static('public/css'))
app.use(express.static('public/img'))

app.get('/', (req, res) => {
    readFile('example.html', 'utf-8', (err, data) => {
        if (err) { res.send('No Such File of Directory')}
        res.send(data)
    })
})

app.listen(3000);