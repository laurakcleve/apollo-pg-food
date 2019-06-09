const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');

const inventoryItemsAPI = require('./datasources/inventoryItems');
const itemsAPI = require('./datasources/items');
const dishesAPI = require('./datasources/dishes');
const resolvers = require('./resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    inventoryItemsAPI: new inventoryItemsAPI(),
    itemsAPI: new itemsAPI(),
    dishesAPI: new dishesAPI(),
  }),
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
