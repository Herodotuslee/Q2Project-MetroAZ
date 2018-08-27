const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  index: function(req, res) {
    res.render("index")
  },
  about: function(req, res) {
    res.render("about")
  },
  experience: function(req, res) {
    res.render("experience")
  },
  equipment: function(req, res) {
    res.render("equipment")
  },
  contact: function(req, res) {
    res.render("contact")
  },
  contactus:(req,res)=>{
    knex('inbox').insert({
      name:req.body.name,
      email:req.body.email,
      content:req.body.content,
    }).then(()=>{
      res.redirect("/");
    })
  },

}
