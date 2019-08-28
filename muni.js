const http = require('http')

const getUrl = (route, stopId) => `http://webservices.nextbus.com/service/publicJSONFeed?command=predictions&a=sf-muni&r=${route}&s=${stopId}`

const getNextStopTimes = (route, stopId, done) => {
  const req = http.get(getUrl(route, stopId), (res) => {
    let body = ''
    res.on('data', chunk => body += chunk)
    res.on('end', () => done(null, JSON.parse(body)))
  })
  req.on('error', err => done(err))
}

const getSecondsUntilNextBus = (bus) => {
  getNextStopTimes(bus, 6604, (err, res) => {
    if (err) {
      return console.error('Failed to fetch times', err)
    }
    const { prediction } = res.predictions.direction
    const seconds = +(Array.isArray(prediction) ? prediction[0] : prediction).seconds
    console.log('Next %d is in %d min %d seconds', bus, ~~(seconds/60), seconds % 60)
  })
}

getSecondsUntilNextBus(2)
getSecondsUntilNextBus(3)

