exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('project').del()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {name: 'Super Fake project', address: '1234 E Washington St. Phoenix, AZ', description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, mollitia similique dignissimos voluptate quaerat enim, vitae assumenda libero autem, magni nostrum dolore ut dolores est.', img_url: 'https://images.pexels.com/photos/162557/architecture-construction-build-building-162557.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
        {name: 'Super Fake project', address: '1234 E Washington St. Phoenix, AZ', description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, mollitia similique dignissimos voluptate quaerat enim, vitae assumenda libero autem, magni nostrum dolore ut dolores est.', img_url: 'https://images.pexels.com/photos/583393/pexels-photo-583393.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
        {name: 'Super Fake project', address: '1234 E Washington St. Phoenix, AZ', description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, mollitia similique dignissimos voluptate quaerat enim, vitae assumenda libero autem, magni nostrum dolore ut dolores est.', img_url: 'https://images.pexels.com/photos/162557/architecture-construction-build-building-162557.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
        {name: 'Super Fake project', address: '1234 E Washington St. Phoenix, AZ', description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, mollitia similique dignissimos voluptate quaerat enim, vitae assumenda libero autem, magni nostrum dolore ut dolores est.', img_url: 'https://images.pexels.com/photos/162557/architecture-construction-build-building-162557.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
      ]);
    });
};
