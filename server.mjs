import express from 'express'
const app = express()
const port = process.evn.PORT || 3000

app.get('/', (req, res) => {
  console.log('Request received from another Computer'+ req.ip) // Prints the client's IP address
  res.send('Hello World! Response from Muzamil Shah server'+req.ip)
})

// My iP is http://192.168.180.251:3000/

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})