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
  contactus: (req, res) => {
=======

  projects: function(req, res) {
    res.render("projects")
  },

  contactus:(req,res)=>{
>>>>>>> 0e5dbaced336b3a5ececca16784772f60c695096
    knex('inbox').insert({
      name: req.body.name,
      email: req.body.email,
      content: req.body.content,
    }).then(() => {
      res.redirect("/");
    })
<<<<<<< HEAD
  },

  // Projects
  projects: (req, res) => {
    knex('project')
      .then((results) => {
        res.render('projects', {
          project: results
        })
      })
=======
>>>>>>> 0e5dbaced336b3a5ececca16784772f60c695096
  },
}
