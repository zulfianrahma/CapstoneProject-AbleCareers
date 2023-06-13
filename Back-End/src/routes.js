const {
  addPostHandler,
  getAllPostsHandler,
  getPostByIdHandler,
  editPostByIdHandler,
  deletePostByIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/posts',
    handler: addPostHandler,
  },
  {
    method: 'GET',
    path: '/posts',
    handler: getAllPostsHandler,
  },
  {
    method: 'GET',
    path: '/posts/{postId}',
    handler: getPostByIdHandler,
  },
  {
    method: 'PUT',
    path: '/posts/{postId}',
    handler: editPostByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/posts/{postId}',
    handler: deletePostByIdHandler,
  },
];

module.exports = routes;
