import JobSource from '../../data/job-source';
import { createAddJobTemplate } from '../templates/template-creator';

const AddJob = {
  async render() {
    return `
        <div id="content" class="content">
            <h2 class="content-heading"><a id="content-heading-title" href="#/list-jobs">Tambahkan Pekerjaan</a></h2>
            <div id="add-job" class="add-job">
            </div>
        </div>
        `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render
    const addJobContainer = document.querySelector('#add-job');
    addJobContainer.innerHTML = createAddJobTemplate();

    const jobTitle = document.querySelector('#inputJobTitle');
    const company = document.querySelector('#inputCompany');
    const location = document.querySelector('#inputLocation');
    const jobType = document.querySelector('#inputJobType');
    const workplaceType = document.querySelector('#inputWorkplaceType');
    const tags = document.querySelector('#inputTags');
    const description = document.querySelector('#inputDescription');
    const jobStatus = document.querySelector('#inputStatus');
    const buttonSave = document.querySelector('#buttonSave');
    const buttonUpdate = document.querySelector('#buttonUpdate');

    buttonSave.addEventListener('click', () => {
      const job = {
        jobTitle: jobTitle.value,
        company: company.value,
        location: location.value,
        jobType: jobType.value, // full-time, part-time, contract, volunteer, internship
        workplaceType: workplaceType.value, // on-site, remote, hybrid
        tags: tags.value,
        description: description.value,
        jobStatus: jobStatus.value, // open/close
      };

      JobSource.insertJob(job);
    });

    buttonUpdate.addEventListener('click', () => {
      const job = {
        jobTitle: jobTitle.value,
        company: company.value,
        location: location.value,
        jobType: jobType.value, // full-time, part-time, contract, volunteer, internship
        workplaceType: workplaceType.value, // on-site, remote, hybrid
        tags: tags.value,
        description: description.value,
        jobStatus: jobStatus.value, // open/close
      };

      JobSource.updateJob(job);
    });
  },
};

export default AddJob;
