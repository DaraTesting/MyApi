module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/provinces-report',
     handler: 'provinces-report.findAll',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
