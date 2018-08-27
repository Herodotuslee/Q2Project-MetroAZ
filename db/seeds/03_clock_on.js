
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('clock_on').del()
    .then(function () {
      // Inserts seed entries
      return knex('clock_on').insert([
        {employee_id: 1, clock_in_out: '1'},
        {employee_id: 2, clock_in_out: '1'},
        {employee_id: 3,clock_in_out: '0'}
      ]);
    });
};
