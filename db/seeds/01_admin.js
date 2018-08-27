exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('admin').del()
    .then(function () {
      // Inserts seed entries
      return knex('admin').insert([
        {name: 'galvanize', email: 'lovelyg96@galvanize.com', password:'galvanize'},
      ]);
    });
};
