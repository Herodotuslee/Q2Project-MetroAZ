
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('inbox').del()
    .then(function () {
      // Inserts seed entries
      return knex('inbox').insert([
        {name:'Trump', content: 'make America great again',email:'Trump@test.com'},
        {name:'God', content: 'God bless you',email:'god@test.com'},
        {name: '笨蛋', content: '我是笨蛋',email:'d@gmail.com'}
      ]);
    });
};
