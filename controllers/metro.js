const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  index: function(req, res) {
    res.render("index")
  },
  about: function(req, res) {
    res.render("about")
  },
  contact: function(req, res) {
    res.render("contact")
  },
  projects: function(req, res) {
    res.render("projects")
  },
  education: function(req, res) {
    res.render("education")
  },
  contactus:(req,res)=>{
    knex('inbox').insert({
      name: req.body.name,
      email: req.body.email,
      content: req.body.content,
    }).then(() => {
      res.redirect("/");
    })
  },
  // Projects
  projects: (req, res) => {
    knex('project')
      .then((results) => {
        res.render('projects', {
          project: results
        })
      })
  },
  test:(req,res)=>{
    res.render("test")
  }
}
