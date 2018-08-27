const knex = require("../db/knex.js");

module.exports = {
  loginPage:(req,res)=>{
    // res.send('ok')
    res.render("login")
  },
  register:(req, res)=>{
    knex('employee').insert({
      name:req.body.name,
      email:req.body.email,
      password:req.body.password,
    }).then(()=>{
      res.redirect("/");
    })
  },
  login:(req,res)=>{

    knex('employee').where("email",req.body.email)
    .then((result)=>{
      let employee = result[0];
      if(employee.password===req.body.password){
          // req.session.employee_id='1'
        req.session.employee_id=employee.id;
        // res.send('ok')
        res.redirect("/")
      }else{
        res.redirect("/");
        // ADD~SHOW WRONG PASSWORD
      }
    })
  },
  logout:(req,res)=>{
    req.session.employee_id=null;
    req.session.save(()=>{
      res.send('ok')
      // res.redirect("/login")
    })
  },
  clockPage:(req,res)=>{
    res.render("clockin")

  }
}
