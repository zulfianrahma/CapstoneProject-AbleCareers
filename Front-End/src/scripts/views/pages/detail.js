import UrlParser from '../../routes/url-parser';
import JobSource from '../../data/job-source';
import { createJobDetailTemplate } from '../templates/template-creator';
import SaveButtonInitiator from '../../utils/like-button-presenter';
import FavoriteJobIdb from '../../data/favorite-jobs-idb';
import EditJob from '../../utils/edit-job';

const Detail = {
  async render() {
    return `
              <div id="job" class=""job></div>
              <div id="saveButtonContainer"></div>
          `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render
    const searchBar = document.querySelector('.search-box');
    searchBar.style.display = 'none';

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const job = await JobSource.detailJob(url.id);

    const jobContainer = document.querySelector('#job');
    SaveButtonInitiator.init({
      saveButtonContainer: document.querySelector('#saveButtonContainer'),
      favoriteJobs: FavoriteJobIdb,
      job: {
        id: job.id,
        jobTitle: job.jobTitle,
        company: job.company,
        location: job.location,
        jobType: job.jobType, // full-time, part-time, contract, volunteer, internship
        workplaceType: job.workplaceType, // on-site, remote, hybrid
        tags: job.tags,
        description: job.description,
        jobStatus: job.jobStatus, // open/close
      },
    });

    jobContainer.innerHTML = createJobDetailTemplate(job);

    const buttonDelete = document.querySelector('.button-delete');
    const buttonEdit = document.querySelector('.button-edit');

    buttonDelete.addEventListener('click', (event) => {
      const jobId = event.target.id;
      JobSource.deleteJob(jobId);
      // eslint-disable-next-line
      alert('Pekerjaan berhasil dihapus');
      const container = document.querySelector('#job');
      container.innerHTML = `
        <h2>Lowongan pekerjaan sudah dihapus</h2>
      `;
    });

    buttonEdit.addEventListener('click', (event) => {
      const jobId = event.target.id;
      EditJob.init(jobId);
    });
  },
};

export default Detail;
