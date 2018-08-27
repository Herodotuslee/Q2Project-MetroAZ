
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('inbox').del()
    .then(function () {
      // Inserts seed entries
      return knex('inbox').insert([
        {name:'Trump', content: 'make America great again',email:'Trump@test.com'},
        {name:'God', content: 'God bless you',email:'god@test.com'},
        {name: '笨蛋', content: '我是笨蛋',email:'d@gmail.com'},
        {name:'A', content: 'make America great again',email:'Trump@test.com'},
        {name:'B', content: 'God bless you',email:'god@test.com'},
        {name: 'C', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',email:'d@gmail.com'},
        {name:'A', content: 'make America great again',email:'Trump@test.com'},
        {name:'B', content: 'God bless you',email:'god@test.com'},
        {name: 'C', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',email:'d@gmail.com'},
        {name:'A', content: 'make America great again',email:'Trump@test.com'},
        {name:'B', content: 'God bless you',email:'god@test.com'},
        {name: 'C', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',email:'d@gmail.com'},
        {name:'A', content: 'make America great again',email:'Trump@test.com'},
        {name:'B', content: 'God bless you',email:'god@test.com'},
        {name: 'C', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',email:'d@gmail.com'},
        {name:'A', content: 'make America great again',email:'Trump@test.com'},
        {name:'B', content: 'God bless you',email:'god@test.com'},
        {name: 'C', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',email:'d@gmail.com'}
      ]);
    });
};
