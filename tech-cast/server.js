require('dotenv/config')
const express = require('express')
const fetch = require('node-fetch')

const app = express()

app.get('/', (req, res) => {
  fetch(
    'https://listennotes.p.mashape.com/api/v1/search?genre_ids=131&len_max=10&len_min=2&offset=0&published_after=1390190241000&published_before=1490190241000&q=Tech&sort_by_date=0&type=podcast',
    {
      headers: {
        'X-Mashape-Key': process.env.API_Key
      }
    }
  )
    .then(podcasts => podcasts.json())
    .then(podcasts => res.send(podcasts))
    .catch(() => res.sendStatus(500))
})

app.get('/id/:id', (req, res) => {
  const url =
    'https://listennotes.p.mashape.com/api/v1/podcasts/' + req.params.id
  fetch(url, {
    headers: {
      'X-Mashape-Key': process.env.API_Key
    }
  })
    .then(details => details.json())
    .then(details => res.send(details))
    .catch(error => {
      res.sendStatus(500)
      console.error(error)
    })
})

app.listen(process.env.PORT, () => {
  console.log('Listening on 3000')
})
