require('dotenv/config')
const express = require('express')
const { MongoClient } = require('mongodb')

const app = express()

MongoClient.connect(process.env.MONGODB_URI, (err, client) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }

  const db = client.db('tech-cast')
  const podcasts = db.collection('podcasts')

  app.get('/', (req, res) => {
    podcasts
      .find()
      .toArray()
      .then(podcasts => res.send(podcasts))
      .catch(() => res.sendStatus(500))
  })

  app.use(express.static('images'))
  app.listen(process.env.PORT, () => {
    console.log('Listening on 3000')
  })
})
