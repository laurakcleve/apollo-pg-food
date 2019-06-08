const { DataSource } = require('apollo-datasource');
const db = require('../../db');

class itemsAPI extends DataSource {
  initialize(config) {
    this.context = config.context;
  }

  getItems() {
    return db('item').select();
  }

  getItem({ id }) {
    return db('item')
      .select()
      .where('id', parseInt(id, 10))
      .first();
  }

  getItemCategory({ itemID }) {
    return db('item_category')
      .select('item_category.id', 'item_category.name')
      .innerJoin('item', 'item.category_id', 'item_category.id')
      .where('item.id', itemID)
      .first();
  }

  getItemDishTags({ itemID }) {
    return db('dish_tag')
      .select('dish_tag.id', 'dish_tag.name')
      .innerJoin('item_has_dish_tag', 'item_has_dish_tag.dish_tag_id', 'dish_tag.id')
      .innerJoin('item', 'item.id', 'item_has_dish_tag.item_id')
      .where('item.id', itemID);
  }

  getItemCountsAs({ itemID }) {
    return db({ generic: 'item' })
      .select('generic.id', 'generic.name')
      .innerJoin('item_counts_as', 'item_counts_as.generic_item_id', 'generic.id')
      .innerJoin(
        { specific: 'item' },
        'specific.id',
        'item_counts_as.specific_item_id'
      )
      .where('specific.id', itemID);
  }

  getItemDishes({ itemID }) {
    return db({ dish: 'item' })
      .select('dish.id', 'dish.name')
      .innerJoin('item_set', 'item_set.parent_item_id', 'dish.id')
      .innerJoin('item_set_item', 'item_set_item.item_set_id', 'item_set.id')
      .innerJoin({ ingredient: 'item' }, 'ingredient.id', 'item_set_item.item_id')
      .where('ingredient.id', itemID);
  }

  getItemIngredients({ itemID }) {
    return db({ ingredient: 'item' })
      .select('ingredient.id', 'ingredient.name')
      .innerJoin('item_set_item', 'item_set_item.item_id', 'ingredient.id')
      .innerJoin('item_set', 'item_set.id', 'item_set_item.item_set_id')
      .innerJoin({ dish: 'item' }, 'dish.id', 'item_set.parent_item_id')
      .where('dish.id', itemID);
  }
}

module.exports = itemsAPI;
