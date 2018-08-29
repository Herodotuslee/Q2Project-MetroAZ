const knex = require("../db/knex.js");

module.exports = {

  adminPage: (req, res) => {
    res.render('admin')
  },
  login: (req, res) => {
    knex('admin').where("email", req.body.email)
      .then((result) => {
        let admin = result[0];
        if (admin.password === req.body.password) {
          req.session.admin_id = admin.id;
          // res.send('ok')
          res.redirect("/timelog")
        } else {
          res.redirect("/");
          // ADD~SHOW WRONG PASSWORD
        }
      })
  },
  logout: (req, res) => {
    // res.send('ok')
    req.session.admin_id = null;
    req.session.employee_id = null;
    req.session.save(() => {
      res.redirect("/")
    })
  },

  addProjectPG: (req, res) => {
    res.render('addProject')
  },

  addProject: (req, res) => {
    knex('project').insert({
        name: req.body.name,
        address: req.body.address,
        description: req.body.description,
        img_url: req.body.img_url,
      })
      .then(() => {
        res.redirect('/projects')
      })
  },
  timelog:(req,res)=>{
    knex('employee')
    .leftJoin('clock','employee.id','employee_id')
    .then((result)=>{
      // res.send(result)
      res.render('timelog',{result})
    })
  },
  // showTimeLog:(req,res)=>{
  //   knex('employee').where('name','Albert')
  //   .join('clock','employee_id',1)
  //   .then((result)=>{
  //     res.render('timelog',{result})
  //   })
  //
  // }
}
