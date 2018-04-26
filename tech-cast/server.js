/* eslint-disable no-unused-vars */
const express = require('express')
const { MongoClient } = require('mongodb')

const app = express()

MongoClient.connect('mongodb://localhost/tech-cast', (err, client) => {
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

  app.listen(3000, () => {
    console.log('Listening on 3000')
  })
})
