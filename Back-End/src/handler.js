const { nanoid } = require('nanoid');
const posts = require('./posts');

const addPostHandler = (request, h) => {
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

  const newPost = {
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

  posts.push(newPost);

  if (
    jobTitle === undefined ||
    company === undefined ||
    location === undefined ||
    jobType === undefined ||
    workplaceType === undefined ||
    description === undefined
  ) {
    posts.pop();
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
        postId: id,
      },
    });
    response.code(201);
    return response;
  }
};

const getAllPostsHandler = (request, h) => {
  const { jobTitle, company, location, jobType, workplaceType, tags, status } =
    request.query;

  let postsRequest = posts;

  if (jobTitle !== undefined) {
    postsRequest = posts.filter((post) =>
      post.jobTitle.toLowerCase().includes(jobTitle.toLowerCase())
    );
  }
  if (company !== undefined) {
    postsRequest = posts.filter((post) =>
      post.company.toLowerCase().includes(company.toLowerCase())
    );
  }
  if (location !== undefined) {
    postsRequest = posts.filter((post) =>
      post.location.toLowerCase().includes(location.toLowerCase())
    );
  }
  if (jobType !== undefined) {
    postsRequest = posts.filter((post) =>
      post.jobType.toLowerCase().includes(jobType.toLowerCase())
    );
  }
  if (workplaceType !== undefined) {
    postsRequest = posts.filter((post) =>
      post.workplaceType.toLowerCase().includes(workplaceType.toLowerCase())
    );
  }
  if (tags !== undefined) {
    postsRequest = posts.filter((post) =>
      post.tags.toLowerCase().includes(tags.toLowerCase())
    );
  }
  if (status !== undefined) {
    postsRequest = posts.filter((post) => post.status === (status === '1'));
  }

  const response = h.response({
    status: 'success',
    data: {
      posts: postsRequest.map((post) => ({
        id: post.id,
        jobTitle: post.jobTitle,
        company: post.company,
        location: post.location,
        jobType: post.jobType,
        workplaceType: post.workplaceType,
        status: post.status,
      })),
    },
  });
  response.code(200);
  return response;
};

const getPostByIdHandler = (request, h) => {
  const { postId } = request.params;

  const post = posts.filter((b) => b.id === postId)[0];

  if (post !== undefined) {
    const response = h.response({
      status: 'success',
      data: {
        post,
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

const editPostByIdHandler = (request, h) => {
  const { postId } = request.params;
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
  const index = posts.findIndex((post) => post.id === postId);
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
    posts[index] = {
      ...posts[index],
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

const deletePostByIdHandler = (request, h) => {
  const { postId } = request.params;

  const index = posts.findIndex((post) => post.id === postId);
  if (index !== -1) {
    posts.splice(index, 1);
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
  addPostHandler,
  getAllPostsHandler,
  getPostByIdHandler,
  editPostByIdHandler,
  deletePostByIdHandler,
};
