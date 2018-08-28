
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('clock').del()
    .then(function () {
      // Inserts seed entries
      return knex('clock').insert([
        {employee_id: 1,clockout_time:null,workingtime:10,nowtime:Date.now()},
        {employee_id: 2,clockout_time:null,workingtime:10,nowtime:Date.now()},
        {employee_id: 3,clockout_time:null,nowtime:Date.now()}
      ]);
    });
};
