exports.up = function(knex, Promise) {
  return knex.schema.createTable("clock_on",(table)=>{
    table.increments();
    table.integer("employee_id")
    .references("id")
    .inTable("employee")
    .onDelete("CASCADE")
    .index();
    table.boolean("sick");
    table.boolean ("clock_in_out")
    table.date('clockin_date').defaultTo(knex.fn.now(1));
    table.time('clockin_time').defaultTo(knex.fn.now(1));
    table.timestamps(true,true);
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("clock_on");
};
