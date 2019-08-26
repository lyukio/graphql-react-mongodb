const express = require('express')
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express()

mongoose.connect('mongodb://lyukio:lyukio123@ds351987.mlab.com:51987/graphql-ninja', { useNewUrlParser: true })
mongoose.connection.once('open', () => {
    console.log('connected to database');
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
})