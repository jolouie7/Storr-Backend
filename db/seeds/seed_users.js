exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          name: "Joe Mo",
          email: "joseph1@gmail.com",
          profile_picture: "null",
          password: "password1",
          job_title: "manager",
        },
        {
          id: 2,
          name: "Joseph L",
          email: "joseph2@gmail.com",
          profile_picture: "null",
          password: "password2",
          job_title: "manager",
        },
        {
          id: 3,
          name: "Joe Moo",
          email: "joseph3@gmail.com",
          profile_picture: "null",
          password: "password3",
          job_title: "employee",
        },
      ]);
    });
};
