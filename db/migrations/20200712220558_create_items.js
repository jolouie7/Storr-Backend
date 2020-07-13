exports.up = (knex) => {
  return Promise.all([
    knex.schema
      // .withSchema("categories")
      .createTable("items", (table) => {
        table.increments();
        table.string("name").notNullable();
        table.string("description").notNullable();
        table.string("item_picture");
        table.integer("item_quantity").defaultTo(1);
        table.integer("category_id").references("id").inTable("categories");
        table.integer("user_id").references("id").inTable("users");
        // table.foreign("category_id").references("id").inTable("categories")
        // table.foreign("user_id").references("id").inTable("users")
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.fn.now());
      }),
  ]);
};

exports.down = (knex) => {
  return Promise.all([knex.schema.dropTableIfExists("items")]);
};
