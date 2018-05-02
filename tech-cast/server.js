require('dotenv/config')
const express = require('express')
const { MongoClient } = require('mongodb')
const fetch = require('node-fetch')

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

fetch(
  'https://listennotes.p.mashape.com/api/v1/search?genre_ids=131&len_max=10&len_min=2&offset=0&published_after=1390190241000&published_before=1490190241000&q=Tech&sort_by_date=0&type=episode',
  {
    headers: {
      'X-Mashape-Key': 'mngC4WsvycmshhTdeKW6AgMvKTMCp1rk63IjsnLBrOvDfMMWF4'
    }
  }
)
  .then(res => res.json())
  .then(json => console.log(json))
