const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    inventoryItems: [InventoryItem]!
    inventoryItem(id: ID!): InventoryItem
    items: [Item]!
    item(id: ID!): Item
  }

  type InventoryItem {
    id: ID!
    item: Item!
    amount: String
    add_date: String
    expiration: String
  }

  type Item {
    id: ID!
    name: String!
    category: ItemCategory
    dishTags: [DishTag]
    countsAs: [Item]
    dishes: [Item]
    ingredients: [Item]
  }

  type ItemCategory {
    id: ID!
    name: String!
  }

  type DishTag {
    id: ID!
    name: String!
  }
`;

module.exports = typeDefs;
