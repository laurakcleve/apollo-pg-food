const { DataSource } = require('apollo-datasource');
const db = require('../../db');

class inventoryItemsAPI extends DataSource {
  initialize(config) {
    this.context = config.context;
  }

  getInventoryItems() {
    return db('inventory_item').select();
  }

  getInventoryItem({ id }) {
    return db('inventory_item')
      .select()
      .where('id', parseInt(id, 10))
      .first();
  }

  getInventoryItemItem({ inventoryItemID }) {
    return db('item')
      .select('item.id', 'item.name')
      .innerJoin('inventory_item', 'inventory_item.item_id', 'item.id')
      .where('inventory_item.id', inventoryItemID)
      .first();
  }
}

module.exports = inventoryItemsAPI;
