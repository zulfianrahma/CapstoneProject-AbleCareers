import CONFIG from './config';

const API_ENDPOINT = {
  POST: `${CONFIG.BASE_URL}/post`,
  LIST: `${CONFIG.BASE_URL}/jobs`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/jobs/${id}`,
  EDIT: (jobId) => `${CONFIG.BASE_URL}/editJobs/${jobId}`,
  DELETE: (jobId) => `${CONFIG.BASE_URL}/deleteJobs/${jobId}`,
};

export default API_ENDPOINT;
