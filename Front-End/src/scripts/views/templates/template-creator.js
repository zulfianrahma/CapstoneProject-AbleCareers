const createJobDetailTemplate = (job) => `
    <h2 class="job__name">${job.jobTitle}</h2>
    <div class="job__info">
        <h3>Informasi</h3>
        <h4>Perusahaan</h4>
        <p>${job.company}</p>
        <h4>Lokasi</h4>
        <p>${job.location}</p>
        <h4>Jenis Pekerjaan</h4>
        <p>${job.jobType}</p>
        <p>${job.workplaceType}</p>
        <h4>Tags</h4>
        <p>${job.tags}</p>
        <h4>Dibuat pada: </h4>
        <p>${job.createdAt}</p>
        <h4>Diperbaharui pada: </h4>
        <p>${job.updatedAt}</p>
        <h4>Status</h4>
        <p>${job.status}</p>
    </div>
    <div class="job-overview">
        <h3>Overview</h3>
        <p>${job.description}</p>
    </div>
`;

const createJobItemTemplate = (job) => `
  <div class="job-item">
    <div class="job-item__content">
      <h3 class="job__name">
      <a href="/#/jobs/${job.id}">${job.jobTitle || '-'}</a>
      </h3>
      <h4>${job.company || '-'}</h4>
      <h4>${job.location || '-'}</h4>
      <h4>${job.jobType || '-'}</h4>
      <h4>${job.workplaceType || '-'}</h4>
      <h4>${job.status || '-'}</h4>
      <h4>${job.tags || '-'}</h4>
      <h4>${job.createdAt || '-'}</h4>
      <h4>${job.updatedAt || '-'}</h4>
    </div>
  </div>
`;

// const createLikeJobButtonTemplate = () => `
//   <button aria-label="like this job" id="likeButton" class="like">
//     <i class="fa fa-heart-o" aria-hidden="true"></i>
//   </button>
// `;

// const createUnlikeJobButtonTemplate = () => `
//   <button aria-label="unlike this job" id="likeButton" class="like">
//     <i class="fa fa-heart" aria-hidden="true"></i>
//   </button>
// `;

// const createJobFoodTemplate = (food) => `
//   <div id="foods" class="foods">${food.name}</div>
// `;

// const createJobDrinkTemplate = (drink) => `
//   <div id="drinks" class="drinks">${drink.name}</div>
// `;

// const createCustomerReviews = (review) => `
//   <div id="review-item" class="review-item">
//     <h4> &#8226 ${review.name} </h4>
//     <h5>${review.date} </h5>
//     <p>${review.review}</p>
//   </div>
// `;

export {
  createJobDetailTemplate,
  createJobItemTemplate,
  //   createLikeJobButtonTemplate,
  //   createUnlikeJobButtonTemplate,
  //   createJobFoodTemplate,
  //   createJobDrinkTemplate,
  //   createCustomerReviews,
};
