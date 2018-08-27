//Update the name of the controller below and rename the file.
const employee = require("../controllers/employee.js");
const metro = require("../controllers/metro.js");
const admin = require("../controllers/admin.js")
module.exports = function(app){

// BASIC
    app.get('/',metro.index);
    app.get('/login',employee.loginPage);
    app.get('/about',metro.about);
    app.get('/experience',metro.experience);
    app.get('/equipment',metro.equipment);


//EMPLOYEE AUTHORIZATION
    app.post('/register',employee.register);
    app.post('/login',employee.login);

    app.use(authenticateEmployee);

//ADMIN AUTHORIZATION
    app.get('/contact',metro.contact);

    app.get('/admin',admin.adminPage);
    app.post('/admin',admin.login);
    app.get('/logout',admin.logout);

    app.use(authenticateAdmin);



}


function authenticateEmployee(req,res,next){
  if(!req.session.employee_id&&!req.session.admin_id){
    res.redirect('/login')
  } else {
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
