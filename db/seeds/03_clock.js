
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('clock').del()
    .then(function () {
      // Inserts seed entries
      return knex('clock').insert([
        {employee_id: 1, clock_in: true,clock_out:false,sick:false},
        {employee_id: 2, clock_in: false,clock_out:true,sick:false},
        {employee_id: 3,clock_in: true,clock_out:false,sick:true}
      ]);
    });
};
