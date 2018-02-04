const express = require('express')
const app = express()
const generateGif = require('./js/generateGif')
const tweetGif = require('./js/tweetGif')

app.use(express.static('public'))

app.get('/'  + process.env.BOT_ENDPOINT, (req, res) => {
  res.status(200).send('hamilton path generating')
  
  console.info('generating gif', new Date().toGMTString())
  generateGif(() => {
    console.info('gif generated', new Date().toGMTString())
    tweetGif()
  })
})

app.get('/', (req, res) => {
  res.status(200).send('<img src="myanimated.gif" />')
})

app.listen(3000, () => {
  console.log('hamiltonian app listening on port 3000')
})