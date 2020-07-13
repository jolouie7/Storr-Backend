exports.up = (knex) => {
  return Promise.all([
    knex.schema.createTable("users", (table) => {
      table.increments();
      table.string("name"); //this can be notNullable()
      table.string("email").notNullable().unique();
      table.string("profile_picture");
      table.datetime("last_login");
      table.string("password"); //this can be notNullable()
      table.string("job_title"); //this can be notNullable()
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    })
  ]);
};
//when do we use await?

exports.down = (knex) => {
  return Promise.all([knex.schema.dropTableIfExists("users")]);
};
