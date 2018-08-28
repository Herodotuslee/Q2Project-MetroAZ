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
<<<<<<< HEAD
=======

>>>>>>> 9c2a2bc17ce6ba761da86af5c13f0d8787fc96fe
  projects: function(req, res) {
    res.render("projects")
  },
  contactus:(req,res)=>{
<<<<<<< HEAD
=======

>>>>>>> 9c2a2bc17ce6ba761da86af5c13f0d8787fc96fe
    knex('inbox').insert({
      name: req.body.name,
      email: req.body.email,
      content: req.body.content,
    }).then(() => {
      res.redirect("/");
    })
<<<<<<< HEAD
=======

  },
>>>>>>> 9c2a2bc17ce6ba761da86af5c13f0d8787fc96fe

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
<<<<<<< HEAD
=======

>>>>>>> 9c2a2bc17ce6ba761da86af5c13f0d8787fc96fe
  },
}
