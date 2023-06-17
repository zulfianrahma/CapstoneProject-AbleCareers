import CONFIG from './config';

const API_ENDPOINT = {
  POST: `${CONFIG.BASE_URL}/post`,
  EDIT: (jobId) => `${CONFIG.BASE_URL}/editJobs/${jobId}`,
  DELETE: (jobId) => `${CONFIG.BASE_URL}/deleteJobs/${jobId}`,
  LIST: `${CONFIG.BASE_URL}/jobs`,
  DETAIL: (jobId) => `${CONFIG.BASE_URL}/jobs/${jobId}`,
};

export default API_ENDPOINT;
