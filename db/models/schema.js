// can seprate into different files instead of keeping everything in 1 file
const Knex = require("knex")
const connection = requre("../../knexfile.js")
const {Model} = requre("objection")

// connect to our db using our knexfile
const knexConnection = Knex(connection)
Model.knex(knexConnection)

// 1 item belongs to a category
// 1 item belongs to a user
class Item extends Model {
  static get tableName() {
    return "items";
  }

  static get relationMappings() {
    return {
      category: {
        relation: Model.BelongsToOneRelation,
        modelClass: Category,
        join: {
          from: "items.category_id",
          to: "categories.id",
        },
      },
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "items.user_id",
          to: "users.id",
        },
      },
    };
  }
}

// 1 User has many items
class User extends Model {
  static get tableName() {
    return "users";
  }

  static get relationMappings() {
    return {
      items: {
        relation: Model.HasManyRelation,
        modelClass: Item,
        join: {
          from: "users.id",
          to: "items.user_id",
        },
      },
    };
  }
}

// 1 Category has many items
class Category extends Model {
  static get tableName() {
    return "categories";
  }

  static get relationMappings() {
    return {
      items: {
        relation: Model.HasManyRelation,
        modelClass: Item,
        join: {
          from: "categories.id",
          to: "items.category_id",
        },
      },
    };
  }
}

module.exports = { Item, User, Category };