const knex = require("../db/knex.js");

module.exports = {


// LOGIN AND LOGOUT
  loginPage:(req,res)=>{
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
      // res.send('ok')
      res.redirect("/login")
    })
  },

// CLOCKIN
  clockPage:(req,res)=>{
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth()+1; //January is 0!
  let yyyy = today.getFullYear();
  if(dd<10) {
      dd = '0'+dd
  }
  if(mm<10) {
      mm = '0'+mm
  }
  today = yyyy + '-' + mm + '-' + dd;
    knex('clock').where('clockin_date',today)
    .then((result)=>{
      // res.send(result)
      res.render("clockin",{result})
    })
  },
  clockIn:(req, res)=>{
    knex('clock').insert({
      clock_in:true,
      clock_out:false,
      employee_id:req.session.employee_id,
    }).then(()=>{
      res.redirect("/clock");
    })
  },
  clockOut:(req, res)=>{
    knex('clock').insert({
      employee_id:req.session.employee_id,
      clock_in:false,
      clock_out:true,
    }).then(()=>{
      res.redirect("/clock");
    })
  },
//TODAY'S WORKING HOURS


// INBOX

//INBOX DEFAULT IS UNREAD
  inbox:(req,res)=>{
    knex('inbox').where('status','unread')
    .then((result)=>{
      res.render('inbox',{result})
    })
  },

//INBOX READ
  inboxread:(req,res)=>{
    knex('inbox').where('status','read')
    .then((result)=>{
      res.render('inboxread',{result})
    })
  },
// INBOX COMPLETED
  inboxcompleted:(req,res)=>{
    knex('inbox').where('status','completed')
    .then((result)=>{
      res.render('inboxcompleted',{result})
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
  tocomplete:(req,res)=>{
    knex('inbox').where('id',req.params.message_id).update(
  {
        status:'completed',
      }
    ).then(()=>{
      res.redirect('/inbox/read')
    })
  },
  todelete:(req,res)=>{
    knex('inbox').where('id',req.params.message_id).del()
    .then(()=>
    res.redirect('/inbox/completed'))
  },
}
