//Update the name of the controller below and rename the file.
const employee = require("../controllers/employee.js");
const metro = require("../controllers/metro.js");
const admin = require("../controllers/admin.js")
module.exports = function(app) {

// FOR EVERYONE CAN SEE
  app.get('/', metro.index);
  app.get('/login', employee.loginPage);
  app.get('/about', metro.about);
  app.get('/projects', metro.projects);
  app.post('/contactus', metro.contactus);
  app.get('/leadership', metro.leadership);

  app.get('/test',metro.test);


//LOGIN AND LOGOUT
  app.post('/register', employee.register);
  app.post('/login', employee.login);
  app.post('/admin', admin.login);
  app.get('/logout', admin.logout);
  // app.get('/admin', admin.adminPage);
  app.get('/contact', metro.contact);
  // app.get('/project',metro.project);


  app.use(authenticateEmployee);

//EMPLOYEE AUTHORIZATION

  // CLOCK
  app.get('/clock', employee.clockPage);
  app.post('/clock/in', employee.clockIn);
  app.post('/clock/out/:final_id', employee.clockOut);
  // INBOX
  app.get('/inbox',employee.inbox);
  app.get('/inbox/read',employee.inboxread);
  app.get('/inbox/completed',employee.inboxcompleted);
  // INBOX ACTION
  app.post('/inbox/read/:message_id',employee.toread);
  app.post('/inbox/complete/:message_id',employee.tocomplete);
  app.get('/inbox/delete/:message_id',employee.todelete);
  app.get('/clock',employee.clockPage);

//BOSS AUTHORIZATION
  app.use(authenticateAdmin);

  app.get('/projects/add', admin.addProjectPG);
  app.post('/projects/add', admin.addProject);
  app.get('/projects/del/:id', admin.delProject);
  app.get('/control',admin.control);
  app.get('/control/clockin/:employee_id',admin.employeeInfo);
  app.get('/control/clock/search/:employee_id',admin.searchDate)
}



function authenticateEmployee(req, res, next) {
  if (!req.session.employee_id && !req.session.admin_id) {
    res.redirect('/login')
  } else {
    next();
  }
}

function authenticateAdmin(req, res, next) {
  if (!(req.session.admin_id)) {
    res.redirect('/login')
  } else {
    next();
  }
}
