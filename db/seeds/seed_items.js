exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("items")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("items").insert([
        {
          id: 1,
          name: "laptop",
          description: "very good product",
          category_id: 1,
          item_picture: "null",
          user_id: 1,
        },
        {
          id: 2,
          name: "iphone",
          description: "very good product",
          category_id: 1,
          item_picture: "null",
          user_id: 1,
        },
        {
          id: 3,
          name: "tablet",
          description: "very good product",
          category_id: 1,
          item_picture: "null",
          user_id: 1,
        },
        {
          id: 4,
          name: "banana",
          description: "very good product",
          category_id: 4,
          item_picture: "null",
          user_id: 2,
        },
        {
          id: 5,
          name: "call of duty",
          description: "very good product",
          category_id: 2,
          item_picture: "null",
          user_id: 3,
        },
      ]);
    });
};
