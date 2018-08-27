exports.up = function(knex, Promise) {
  return knex.schema.createTable("clockon",(table)=>{
    table.increments();
    table.integer("employee_id")
    .references("id")
    .inTable("admin")
    .onDelete("CASCADE")
    .index();
    table.timestamps(true,true);
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("clockon");
};
