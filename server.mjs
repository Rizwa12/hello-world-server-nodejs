import express from 'express'
import cors from 'cors';
const app = express()
//const port = 3000
const port = 4000
app.use(cors());
app.get('/home', (req, res) => {
  res.send('I am home page!')
})
app.get('/profile', (req, res) => {
  res.send('I am profile page!')
})
app.get('/weather', (req, res) => {
  res.send({
    weather: 'sunny',
    temperature: '20',
    city : 'london'
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})