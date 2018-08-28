//Update the name of the controller below and rename the file.
const employee = require("../controllers/employee.js");
const metro = require("../controllers/metro.js");
const admin = require("../controllers/admin.js")
module.exports = function(app) {

  // BASIC
  app.get('/', metro.index);
  app.get('/login', employee.loginPage);
  app.get('/about', metro.about);
  app.get('/experience', metro.experience);
  app.get('/equipment', metro.equipment);
  app.get('/projects', metro.projects);
  app.post('/contactus', metro.contactus);


  //EMPLOYEE AUTHORIZATION
  app.post('/register', employee.register);
  app.post('/login', employee.login);
  app.get('/logout', admin.logout);
  app.get('/admin', admin.adminPage);
  app.get('/contact', metro.contact);


  app.get('/clock', employee.clockPage);

  //ADMIN AUTHORIZATION


<<<<<<< HEAD
    app.post('/admin',admin.login);
    app.get('/inbox',employee.inbox);
    app.post('/inbox/:message_id',employee.toread);


    // app.use(authenticateAdmin);
=======
  app.post('/admin', admin.login);
  app.get('/projects/add', admin.addProjectPG);
  app.post('projects/add', admin.addProject);



<<<<<<< HEAD
=======
  app.use(authenticateAdmin);
>>>>>>> 1fb1934598832d6f277ce29aa2ecde66dee4e60f
>>>>>>> 0e5dbaced336b3a5ececca16784772f60c695096

}



// function authenticateEmployee(req, res, next) {
//   if (!req.session.employee_id && !req.session.admin_id) {
//     // res.send('not ok')
//     res.redirect('/login')
//   } else {
//     // res.send('ok')
//     next();
//   }
// }
//
// function authenticateAdmin(req, res, next) {
//   if (!(req.session.admin_id)) {
//     res.redirect('/login')
//   } else {
//     next();
//   }
// }
