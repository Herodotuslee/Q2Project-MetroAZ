//Update the name of the controller below and rename the file.
const template = require("../controllers/template.js")
const employee = require("../controllers/employee.js");
const admin = require("../controllers/admin.js")
module.exports = function(app){

  app.get('/', template.index);
  // AUTHORIZATION
    app.get('/login',employee.loginPage);
    app.post('/register',employee.register);
    app.post('/login',employee.login);

    app.use(authenticateEmployee);
    app.use(authenticateAdmin);
    app.get('/admin',admin.adminPage);
    app.post('/admin',admin.login);
    app.get('/logout',admin.logout);



}


function authenticateEmployee(req,res,next){
  if(!req.session.user_id&&!req.session.admin_id){
    // req.session.flash=null;
    req.flash("error","Please Login First!");
    res.redirect('/login')
  } else {
    // req.session.flash=null;
    req.flash("success","Success to login!");
    next();
  }
}

function authenticateAdmin(req,res,next){
  if(!(req.session.admin_id)){

    res.redirect('/login')
  } else {
    next();
  }
}
