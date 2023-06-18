const createJobItemTemplate = (job) => `
  <div class="job-item">
    <div class="job-item__content">
      <h3 class="job__name">
      <a href="/#/jobs/${job.id}">${job.jobTitle || '-'}</a>
      </h3>
      <h4>Perusahaan</h4>
      <p>${job.company || '-'}</p>
      <h4>Lokasi Pekerjaan</h4>
      <p>${job.location || '-'}</p>
      <h4>Jenis Pekerjaan</h4>
      <p>${job.jobType || '-'}</p>
      <h4>Model Pekerjaan</h4>
      <p>${job.workplaceType || '-'}</p>
      <h4>Tags</h4>
      <p>${job.tags || '-'}</p>
      <h4>Dibuat pada: </h4>
      <p>${job.createdAt || '-'}</p>
      <h4>Diupdate pada: </h4>
      <p>${job.updatedAt || '-'}</p>
      <h4>Status</h4>
      <p>${job.jobStatus || '-'}</p>
    </div>
  </div>
`;

const createJobDetailTemplate = (job) => `
    <h2 class="job__name">${job.jobTitle}</h2>
    <div class="job__info">
        <h3>Informasi</h3>
        <h4>Perusahaan</h4>
        <p>${job.company}</p>
        <h4>Lokasi Pekerjaan</h4>
        <p>${job.location}</p>
        <h4>Jenis Pekerjaan</h4>
        <p>${job.jobType}</p>
        <h4>Model Pekerjaan</h4>
        <p>${job.workplaceType}</p>
        <h4>Tags</h4>
        <p>${job.tags}</p>
        <h4>Dibuat pada: </h4>
        <p>${job.createdAt}</p>
        <h4>Diperbaharui pada: </h4>
        <p>${job.updatedAt}</p>
        <h4>Status</h4>
        <p>${job.jobStatus}</p>
    </div>
    <div class="job-overview">
        <h3>Overview</h3>
        <p>${job.description}</p>
    </div>
`;

const createAddJobTemplate = () => `
  <div class="card-body">
    <div class="form-group">
      <label for="inputJobTitle">Nama Pekerjaan</label>
      <input id="inputJobTitle" type="text" class="form-control" placeholder="Nama Pekerjaan">
    </div>
    <div class="form-group">
      <label for="inputCompany">Nama Perusahaan</label>
      <input id="inputCompany" type="text" class="form-control" placeholder="Nama Perusahaan">
    </div>
    <div class="form-group">
      <label for="inputLocation">Lokasi Pekerjaan</label>
      <input id="inputLocation" type="text" class="form-control" placeholder="Lokasi Pekerjaan">
    </div>
    <div class="form-group">
      <label for="inputJobType">Jenis Pekerjaan</label>
      <input id="inputJobType" type="text" class="form-control" placeholder="Jenis Pekerjaan">
    </div>
    <div class="form-group">
      <label for="inputWorkplaceType">Model Pekerjaan</label>
      <input id="inputWorkplaceType" type="text" class="form-control" placeholder="Model Pekerjaan">
    </div>
    <div class="form-group">
      <label for="inputTags">Label</label>
      <input id="inputTags" type="text" class="form-control" placeholder="Label">
    </div>
    <div class="form-group">
      <label for="inputDescription">Detail Pekerjaan</label>
      <input id="inputDescription" type="text" class="form-control" placeholder="Detail Pekerjaan">
    </div>
    <div class="form-group">
      <label for="inputStatus">Status Lowongan</label>
      <input id="inputStatus" type="text" class="form-control" placeholder="Status Lowongan">
    </div>
    <div class="form-group">
      <button id="buttonSave" class="btn btn-success">Save</button>
      <button id="buttonUpdate" class="btn btn-primary">Update</button>
    </div>
  </div>
`;

const createSaveJobButtonTemplate = () => `
  <button aria-label="save this restaurant" id="saveButton" class="save">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnsaveJobButtonTemplate = () => `
  <button aria-label="unsave this restaurant" id="saveButton" class="save">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createJobItemTemplate,
  createJobDetailTemplate,
  createAddJobTemplate,
  createSaveJobButtonTemplate,
  createUnsaveJobButtonTemplate,
};
