exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("categories")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("categories").insert([
        { id: 1, name: "electronics", category_quantity: "3" },
        { id: 2, name: "video games", category_quantity: "1" },
        { id: 3, name: "computer parts", category_quantity: "0" },
        { id: 4, name: "fruits", category_quantity: "1" },
      ]);
    });
};
