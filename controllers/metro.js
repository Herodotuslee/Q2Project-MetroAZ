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
<<<<<<< HEAD
  projects: function(req, res) {
    res.render("projects")
=======
  contactus:(req,res)=>{
    knex('inbox').insert({
      name:req.body.name,
      email:req.body.email,
      content:req.body.content,
    }).then(()=>{
      res.redirect("/");
    })
>>>>>>> 6552667ebe4fb3f5392edac71e420e33febe35e9
  },

}
