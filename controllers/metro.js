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
  contactus:(req,res)=>{
    knex('inbox').insert({
      name: req.body.name,
      email: req.body.email,
      content: req.body.content,
    }).then(() => {
      res.redirect("/");
    })

  },
  toread:(req,res)=>{
    knex('inbox').where('id',req.params.message_id).update(
      {
        status:'read',
      }
    ).then(()=>{
      res.redirect('/inbox')
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
}
