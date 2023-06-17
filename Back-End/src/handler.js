const { nanoid } = require('nanoid');
const jobs = require('./jobs');

const addJobHandler = (request, h) => {
  const {
    jobTitle,
    company,
    location,
    jobType, // full-time, part-time, contract, volunteer, internship
    workplaceType, // on-site, remote, hybrid
    tags,
    description,
    status, // open/close
  } = request.payload;

  const id = nanoid(16);
  const createdAt = new Date().toUTCString();
  const updatedAt = createdAt;

  const newJob = {
    id,
    jobTitle,
    company,
    location,
    jobType, // full-time, part-time, contract, volunteer, internship
    workplaceType, //on-site, remote, hybrid
    tags,
    createdAt,
    updatedAt,
    description,
    status, // open/close
  };

  jobs.push(newJob);

  if (
    jobTitle === undefined ||
    company === undefined ||
    location === undefined ||
    jobType === undefined ||
    workplaceType === undefined ||
    description === undefined
  ) {
    jobs.pop();
    const response = h.response({
      status: 'fail',
      message:
        'Gagal menambahkan lowongan. Mohon lengkapi data lowongan tersebut',
    });
    response.code(400);
    return response;
  } else {
    const response = h.response({
      status: 'success',
      message: 'Lowongan berhasil ditambahkan',
      data: {
        jobId: id,
      },
    });
    response.code(201);
    return response;
  }
};

const getAllJobsHandler = (request, h) => {
  const { jobTitle, company, location, jobType, workplaceType, tags, status } =
    request.query;

  let jobsRequest = jobs;

  if (jobTitle !== undefined) {
    jobsRequest = jobs.filter((job) =>
      job.jobTitle.toLowerCase().includes(jobTitle.toLowerCase())
    );
  }
  if (company !== undefined) {
    jobsRequest = jobs.filter((job) =>
      job.company.toLowerCase().includes(company.toLowerCase())
    );
  }
  if (location !== undefined) {
    jobsRequest = jobs.filter((job) =>
      job.location.toLowerCase().includes(location.toLowerCase())
    );
  }
  if (jobType !== undefined) {
    jobsRequest = jobs.filter((job) =>
      job.jobType.toLowerCase().includes(jobType.toLowerCase())
    );
  }
  if (workplaceType !== undefined) {
    jobsRequest = jobs.filter((job) =>
      job.workplaceType.toLowerCase().includes(workplaceType.toLowerCase())
    );
  }
  if (tags !== undefined) {
    jobsRequest = jobs.filter((job) =>
      job.tags.toLowerCase().includes(tags.toLowerCase())
    );
  }
  if (status !== undefined) {
    jobsRequest = jobs.filter((job) => job.status === (status === '1'));
  }

  const response = h.response({
    status: 'success',
    data: {
      jobs: jobsRequest.map((job) => ({
        id: job.id,
        jobTitle: job.jobTitle,
        company: job.company,
        location: job.location,
        jobType: job.jobType,
        workplaceType: job.workplaceType,
        tags: job.tags,
        createdAt: job.createdAt,
        updatedAt: job.updatedAt,
        status: job.status,
      })),
    },
  });
  response.code(200);
  return response;
};

const getJobByIdHandler = (request, h) => {
  const { jobId } = request.params;

  const job = jobs.filter((b) => b.id === jobId)[0];

  if (job !== undefined) {
    const response = h.response({
      status: 'success',
      data: {
        job,
      },
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Lowongan tidak ditemukan',
  });
  response.code(404);
  return response;
};

const editJobByIdHandler = (request, h) => {
  const { jobId } = request.params;
  const {
    jobTitle,
    company,
    location,
    jobType, // full-time, part-time, contract, volunteer, internship
    workplaceType, // on-site, remote, hybrid
    tags,
    description,
    status, // open/close
  } = request.payload;
  const updatedAt = new Date().toUTCString();
  const index = jobs.findIndex((job) => job.id === jobId);
  if (
    !jobTitle ||
    !company ||
    !location ||
    !jobType ||
    !workplaceType ||
    !tags ||
    !description ||
    !status
  ) {
    const response = h.response({
      status: 'fail',
      message:
        'Gagal memperbarui lowongan. Mohon lengkapi data lowongan tersebut',
    });
    response.code(400);
    return response;
  }

  if (index !== -1) {
    jobs[index] = {
      ...jobs[index],
      jobTitle,
      company,
      location,
      jobType, // full-time, part-time, contract, volunteer, internship
      workplaceType, // on-site, remote, hybrid
      tags,
      description,
      status, // open/close
      updatedAt,
    };
    const response = h.response({
      status: 'success',
      message: 'Lowongan berhasil diperbarui',
    });
    response.code(200);
    return response;
  }
  const response = h.response({
    status: 'fail',
    message: 'Gagal memperbarui lowongan. Id tidak ditemukan',
  });
  response.code(404);
  return response;
};

const deleteJobByIdHandler = (request, h) => {
  const { jobId } = request.params;

  const index = jobs.findIndex((job) => job.id === jobId);
  if (index !== -1) {
    jobs.splice(index, 1);
    const response = h.response({
      status: 'success',
      message: 'Lowongan berhasil dihapus',
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Lowongan gagal dihapus. Id tidak ditemukan',
  });
  response.code(404);
  return response;
};

module.exports = {
  addJobHandler,
  getAllJobsHandler,
  getJobByIdHandler,
  editJobByIdHandler,
  deleteJobByIdHandler,
};
