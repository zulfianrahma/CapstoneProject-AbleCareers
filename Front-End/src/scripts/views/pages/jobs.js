import JobSource from '../../data/job-source';
import { createJobItemTemplate } from '../templates/template-creator';

const ListJob = {
  async render() {
    return `
        <div id="content" class="content">
            <h2 class="content__heading"><a id="content__heading__title" href="#/list">Daftar Pekerjaan</a></h2>
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

export default ListJob;
