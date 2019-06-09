module.exports = {
  Query: {
    inventoryItems: (_, __, { dataSources }) =>
      dataSources.inventoryItemsAPI.getInventoryItems(),
    inventoryItem: (_, { id }, { dataSources }) =>
      dataSources.inventoryItemsAPI.getInventoryItem({ id }),
    items: (_, __, { dataSources }) => dataSources.itemsAPI.getItems(),
    item: (_, { id }, { dataSources }) => dataSources.itemsAPI.getItem({ id }),
    dishes: (_, __, { dataSources }) => dataSources.dishesAPI.getDishes(),
    dish: (_, { id }, { dataSources }) => dataSources.dishesAPI.getDish({ id }),
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
    ingredientSets: (Item, __, { dataSources }) =>
      dataSources.itemsAPI.getItemIngredientSets({ itemID: Item.id }),
  },

  Dish: {
    ingredientSets: (Dish, __, { dataSources }) =>
      dataSources.dishesAPI.getDishIngredientSets({ dishID: Dish.id }),
  },

  IngredientSet: {
    ingredients: (IngredientSet, __, { dataSources }) =>
      dataSources.itemsAPI.getIngredients({ ingredientSetID: IngredientSet.id }),
  },
};
