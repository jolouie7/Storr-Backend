exports.up = (knex) => {
  return Promise.all([
    knex.schema.createTable("categories", (table) => {
      table.increments();
      table.string("name").notNullable();
      table.integer("category_quantity");
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    }),
  ]);
};

exports.down = (knex) => {
  return Promise.all([knex.schema.dropTableIfExists("categories")]);
};
