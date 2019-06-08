const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');

const inventoryItemsAPI = require('./datasources/inventoryItems');
const itemsAPI = require('./datasources/items');
const resolvers = require('./resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    inventoryItemsAPI: new inventoryItemsAPI(),
    itemsAPI: new itemsAPI(),
  }),
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
