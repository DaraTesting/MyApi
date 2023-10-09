module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/pros-report',
     handler: 'pros-report.findAll',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
