const express = require("express");
const expressGraphQL = require("express-graphql").graphqlHTTP;
const schema = require("./schema/schema");

const app = express();
// Point to graphql
app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true,
  })
);
// listen in port
app.listen(4000, () => {
  console.log("listening");
});
