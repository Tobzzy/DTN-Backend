const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const typeDefs = require("./graphql/schema/index");
const resolvers = require("./graphql/resolvers");
const { GraphQLServer } = require("graphql-yoga");
const app = express();
require("dotenv").config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var database = process.env.MONGO_URI;

mongoose
  .connect(database, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connection to DB successful");
  })
  .catch((err) => {
    console.log("Db connection error====", err);
  });

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start(() => {
  console.log("GraphQL Listening on port 4000");
});
