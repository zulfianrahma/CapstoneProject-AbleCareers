const createJobPreviewTemplate = (job) => `
  <div class="job-preview">
    <div class="job-preview-content">
      <img src="https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg">
      <h3 class="job-name">
      <a href="/#/jobs/${job.id}">${job.jobTitle || '-'}</a>
      </h3>
      <h4 id="job-company">${job.company}</h4>
      <h4 id="job-location">${job.location}</h4>
      <h4 id="job-createdAt">${job.createdAt}</h4>
      <h4 id="job-updatedAt">${job.updatedAt}</h4>
      <h4 id="job-status">${job.jobStatus}</h4>
    </div>
  </div>
`;

const createArticleTemplate = () => `
  <div class="article-1">
    <div id="pengertian-disabilitas">
      <h3>Apa itu disabilitas?</h3>
      <p>Penyandang disabilitas adalah setiap orang yang mengalami keterbatasan fisik, intelektual, mental, dan atau sensorik 
      dalam jangka waktu lama yang dalam berinteraksi dengan lingkungan dapat mengalami hambatan dan kesulitan 
      untuk berpartisipasi secara penuh dan efektif dengan warga negara lainnya berdasarkan kesamaan hak.</p><br>
      <p> Info lebih lanjut klik
      <a target="_blank" href="https://dinkes.jogjaprov.go.id/berita/detail/disabilitas-ragam-jenis-yuk-mengenal-penyandang-disabilitas-lebih-dekat-bagian-1">
        disini
      </a>
      </p><br>
    </div>
  </div>
  <div class="article-2">
    <div id="jenis-disabilitas">
      <h3>Apa saja jenis disabilitas?</h3>
      <p>Individu dengan disabilitas dibagi menjadi empat: </p><br>
      <p>1.Penyandang Disabilitas Fisik</p><br>
      <p>2.Penyandang Disabilitas Intelektual</p><br>
      <p>3.Penyandang Disabilitas Mental</p><br>
      <p>4.Penyandang Disabilitas Sensory</p><br>
      <p> Info lebih lanjut klik
      <a target="_blank" href="https://www.usd.ac.id/pusat/psibk/2022/12/03/mengenal-empat-jenis-disabilitas-yuk/">
        disini
      </a>
      </p><br>
    </div>
  </div>
`;

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
      <h4>Jenis Disabilitas</h4>
      <p>${job.tags || 'tidak ada'}</p>
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
        <h4>Jenis Disabilitas</h4>
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
    <div class="form-group">
      <button id=${job.id} class="btn btn-primary button-edit">Edit</button>
      <button id=${job.id} class="btn btn-primary button-delete">Delete</button>
    </div>
`;

const createAddJobTemplate = () => `
  <div class="card-body">
    <div class="top-form">
      <div class="form-group">
        <label for="inputJobId">Id</label>
        <input id="inputJobId" type="text" class="editable-field" style="display: none;" placeholder="(terisi otomatis)">
      </div>
      <div class="form-group">
        <label for="inputJobTitle">Nama Pekerjaan</label>
        <input id="inputJobTitle" type="text" class="editable-field" placeholder="Nama Pekerjaan">
      </div>
      <div class="form-group">
        <label for="inputCompany">Nama Perusahaan</label>
        <input id="inputCompany" type="text" class="editable-field" placeholder="Nama Perusahaan">
      </div>
      <div class="form-group">
        <label for="inputLocation">Lokasi Pekerjaan</label>
        <input id="inputLocation" type="text" class="editable-field" placeholder="Lokasi Pekerjaan">
      </div>
    </div>
    <div class="mid-form">
      <div class="form-group">
        <label for="inputJobType">Jenis Pekerjaan</label><br>
        <input type="radio" id="full-time" name="job-type" value="Full-time">
        <label for="full-time">Full-time</label><br>
        <input type="radio" id="part-time" name="job-type" value="Part-time">
        <label for="part-time">Part-time</label><br>
        <input type="radio" id="internship" name="job-type" value="Internship">
        <label for="internship">Internship</label>
      </div>
      <div class="form-group">
        <label for="inputWorkplaceType">Model Pekerjaan</label><br>
        <input type="radio" id="on-site" name="workplace-type" value="On-site">
        <label for="on-site">On-site</label><br>
        <input type="radio" id="remote" name="workplace-type" value="Remote">
        <label for="remote">Remote</label><br>
        <input type="radio" id="hybrid" name="workplace-type" value="Hybrid">
        <label for="hybrid">Hybrid</label>
      </div>
    </div>
    <div class="mid-bot-form">
      <div class="form-group">
        <label for="inputTags">Jenis Disabilitas</label><br>
        <input type="checkbox" id="tuna-daksa" name="input-tags" value="Tuna daksa">
        <label for="tuna-daksa">Tuna daksa</label><br>
        <input type="checkbox" id="tuna-rungu" name="input-tags" value="Tuna rungu">
        <label for="tuna-rungu">Tuna rungu</label><br>
        <input type="checkbox" id="tuna-wicara" name="input-tags" value="Tuna wicara">
        <label for="tuna-wicara">Tuna wicara</label><br>
        <input type="checkbox" id="tuna-netra" name="input-tags" value="Tuna netra">
        <label for="tuna-netra">Tuna netra</label><br>
        <input type="checkbox" id="tuna-grahita" name="input-tags" value="Tuna grahita">
        <label for="tuna-grahita">Tuna grahita</label><br>
        <input type="checkbox" id="disabilitas-mental" name="input-tags" value="Disabilitas mental">
        <label for="disabilitas-mental">Disabilitas mental</label><br>
      </div>
    </div>
    <div class="bot-form">
      <div class="form-group">
        <label for="inputDescription">Detail Pekerjaan</label><br>
        <textarea class="editable-field" id="inputDescription" name="input-description" rows="10" cols="80" placeholder="tuliskan detail pekerjaan"></textarea> 
        <hr>
      </div>
    </div>
    <div class="last-form">
      <div class="form-group">
        <label for="inputStatus">Status Lowongan</label><br>
        <input type="radio" id="open" name="job-status" value="Open">
        <label for="open">Open</label><br>
        <input type="radio" id="close" name="job-status" value="Close">
        <label for="close">Close</label><br>
      </div>
    </div>
    <div class="profile-save">
      <div class="form-group">
        <button id="buttonAdd" class="btn btn-success" value="save">Tambahkan</button>
        <button id="buttonEdit" class="btn btn-success" value="edit" style="display: none;">Simpan perubahan</button>
      </div>
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

const createTeamIdentityTemplate = () => `
<h2><a href="https://github.com/ardiankholid/CapstoneProject-AbleCareers">Team</a></h2>
<div class="about-container">
  <div class="ardian">
    <img class="image" src="Assets/ardian.png">
    <h2><a href="https://github.com/ardiankholid">Ardian Kholid Ashidiq || F013XB387</a></h2>
  </div>
  <div class="aldyn">
    <img class="image" src="Assets/aldyn.png">
    <h2><a href="https://github.com/AldynG">Muhammad Aldyn Ghifari || F086XB185</a></h2>
  </div>
  <div class="safrin">
    <img class="image" src="Assets/apin.png">
    <h2><a href="https://github.com/aappiinn">Muhammad Safrin Utama || F013XB169</a></h2>
  </div>
  <div class="zulfian">
    <img class="image" src="Assets/zulfian.png">
    <h2><a href="https://github.com/zulfianrahma">Zulfian Rahmadiansyah || F133XB482</a></h2><br>
  </div>
</div>
`;

const createProfileTemplate = () => `
<div class="profile-top">
    <div class="profile-picture" id="profile-picture">
      <input type="file" id="picture-input" class="file-input" accept="image/*">
      <button id="upload-button" class="upload-button" style="display: none;">Upload Picture</button>
    <div>

    <p>USER PROFILE</p>
    
    <div class="profile-info">
      <label>Name</label>
      <p class="profile-text" id="profile-name"></p>
      <input type="text" id="name-input" class="editable-field" style="display: none;">
      <hr>

      <label>Address</label>
      <p class="profile-text" id="profile-address"></p>
      <input type="text" id="address-input" class="editable-field" style="display: none;">
      <hr>
 
      <label id="bio-label">Biography</label>
      <p class="profile-text" id="profile-bio"></p>
      <textarea id="bio-input" class="editable-field" style="display: none;"></textarea>
      <hr>
 
    
 
      <button id="edit-button" class="edit-button">Edit Profile</button>
      <button id="save-button" class="save-button" style="display: none;">Save Changes</button>
    </div>
`;

const createHomeBlogTemplate = () => `
  <div class="blog-card">
    <img class="blog-image" src="./blog-1.jpg">
    <div class="blog-detail">
      <span>20 May 2023</span>
      <h4>Inclusion and Accessibility</h4>
      <p>Discussing issues related to physical accessibility, access to education and employment opportunities, and promoting social inclusion and community involvement for individuals with disabilities.</p>
      <hr class="divinder">
      <a href="http://www.thearc.org/" target="_blank" class="blog-more">Read more</a>
    </div>
  </div>
  <div class="blog-card">
    <img class="blog-image" src="./blog-2.jpg">
    <div class="blog-detail">
      <span>5 June 2023</span>
      <h4>Inspiration and Success Stories</h4>
      <p>Sharing inspirational stories and achievements of individuals with disabilities that can inspire and motivate readers to overcome obstacles and reach their full potential.</p>
      <hr class="divinder">
      <a href="https://themighty.com/" target="_blank" class="blog-more">Read more</a>
    </div>
  </div>
  <div class="blog-card">
    <img class="blog-image" src="./blog-3.jpg">
    <div class="blog-detail">
      <span>12 May 2023</span>
      <h4>Social Aspects and Rights</h4>
      <p>Addressing issues of human rights, public policy, and advocacy for individuals with disabilities, including law enforcement, access to public services, and protection from discrimination.</p>
      <hr class="divinder">
      <a href="https://www.disabilityscoop.com/" target="_blank" class="blog-more">Read more</a>
    </div>
  </div>
`;

export {
  createJobPreviewTemplate,
  createArticleTemplate,
  createJobItemTemplate,
  createJobDetailTemplate,
  createAddJobTemplate,
  createSaveJobButtonTemplate,
  createUnsaveJobButtonTemplate,
  createTeamIdentityTemplate,
  createProfileTemplate,
  createHomeBlogTemplate,
};
