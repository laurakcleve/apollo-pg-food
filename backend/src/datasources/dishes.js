const { DataSource } = require('apollo-datasource');
const db = require('../../db');

class dishesAPI extends DataSource {
  initialize(config) {
    this.context = config.context;
  }

  getDishIDs() {
    return db('ingredient_set').select('parent_item_id');
  }

  getDishes() {
    return db('item')
      .select()
      .whereIn('id', this.getDishIDs());
  }

  getDish({ id }) {
    return db('item')
      .select()
      .where('id', parseInt(id, 10))
      .first();
  }

  getDishIngredientSets({ dishID }) {
    return db('ingredient_set')
      .select('ingredient_set.id')
      .innerJoin('item', 'item.id', 'ingredient_set.parent_item_id')
      .where('item.id', dishID);
  }

  getIngredients({ ingredientSetID }) {
    return db('item')
      .select('item.id', 'item.name')
      .innerJoin('ingredient', 'ingredient.item_id', 'item.id')
      .where('ingredient_set_id', ingredientSetID);
  }
}

module.exports = dishesAPI;
