module.exports = {
  Query: {
    inventoryItems: (_, __, { dataSources }) =>
      dataSources.inventoryItemsAPI.getInventoryItems(),
    inventoryItem: (_, { id }, { dataSources }) =>
      dataSources.inventoryItemsAPI.getInventoryItem({ id }),
    items: (_, __, { dataSources }) => dataSources.itemsAPI.getItems(),
    item: (_, { id }, { dataSources }) => dataSources.itemsAPI.getItem({ id }),
  },

  InventoryItem: {
    item: (InventoryItem, __, { dataSources }) =>
      dataSources.inventoryItemsAPI.getInventoryItemItem({
        inventoryItemID: InventoryItem.id,
      }),
  },

  Item: {
    category: (Item, __, { dataSources }) =>
      dataSources.itemsAPI.getItemCategory({ itemID: Item.id }),
    dishTags: (Item, __, { dataSources }) =>
      dataSources.itemsAPI.getItemDishTags({ itemID: Item.id }),
    countsAs: (Item, __, { dataSources }) =>
      dataSources.itemsAPI.getItemCountsAs({ itemID: Item.id }),
    dishes: (Item, __, { dataSources }) =>
      dataSources.itemsAPI.getItemDishes({ itemID: Item.id }),
    ingredients: (Item, __, { dataSources }) =>
      dataSources.itemsAPI.getItemIngredients({ itemID: Item.id }),
  },
};
