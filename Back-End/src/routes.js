const {
  addJobHandler,
  getAllJobsHandler,
  getJobByIdHandler,
  editJobByIdHandler,
  deleteJobByIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/post',
    handler: addJobHandler,
  },
  {
    method: 'GET',
    path: '/jobs',
    handler: getAllJobsHandler,
  },
  {
    method: 'GET',
    path: '/jobs/{jobId}',
    handler: getJobByIdHandler,
  },
  {
    method: 'PUT',
    path: '/editJobs/{jobId}',
    handler: editJobByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/deleteJobs/{jobId}',
    handler: deleteJobByIdHandler,
  },
];

module.exports = routes;
