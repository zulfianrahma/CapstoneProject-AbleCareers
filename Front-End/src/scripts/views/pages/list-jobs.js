import JobSource from '../../data/job-source';
import { createJobItemTemplate } from '../templates/template-creator';

const ListJobs = {
  async render() {
    return `
        <div id="content" class="content">
            <h2 class="content-heading"><a id="content-heading-title" href="#/list-jobs">Daftar Pekerjaan</a></h2>
            <div id="jobs" class="jobs">
            </div>
        </div>
        `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render
    const jobs = await JobSource.listJob();
    const jobsContainer = document.querySelector('#jobs');
    jobs.forEach((job) => {
      jobsContainer.innerHTML += createJobItemTemplate(job);
    });
  },
};

export default ListJobs;
