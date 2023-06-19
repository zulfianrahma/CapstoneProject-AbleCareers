import JobSource from '../../data/job-source';
import { createAddJobTemplate } from '../templates/template-creator';
import DisplayRadioValue from '../../utils/display-radio-value';
import DisplayCheckboxValue from '../../utils/display-checkbox-value';

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
    const searchBar = document.querySelector('.search-box');
    searchBar.style.display = 'none';

    const addJobContainer = document.querySelector('#add-job');
    addJobContainer.innerHTML = createAddJobTemplate();

    const addJobTitle = document.querySelector('#inputJobTitle');
    const addCompany = document.querySelector('#inputCompany');
    const addLocation = document.querySelector('#inputLocation');
    const addJobType = DisplayRadioValue('job-type');
    const addWorkplaceType = DisplayRadioValue('workplace-type');
    const addTags = DisplayCheckboxValue('input-tags');
    const addDescription = document.querySelector('#inputDescription');
    const addJobStatus = DisplayRadioValue('job-status');
    const buttonSave = document.querySelector('#buttonSave');

    buttonSave.addEventListener('click', () => {
      const job = {
        jobTitle: addJobTitle.value,
        company: addCompany.value,
        location: addLocation.value,
        jobType: addJobType, // full-time, part-time, internship
        workplaceType: addWorkplaceType, // on-site, remote, hybrid
        tags: addTags,
        description: addDescription.value,
        jobStatus: addJobStatus, // open/close
      };

      JobSource.insertJob(job);
      // eslint-disable-next-line
      alert('Pekerjaan berhasil ditambahkan');
    });
  },
};

export default AddJob;
