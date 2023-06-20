import JobSource from '../../data/job-source';
import {
  createJobPreviewTemplate,
  createHomeBlogTemplate,
} from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <div id="blog" class="blog">
            <h1 class="section-title">Strength in Diversity</h2>
            <p>Dedicated to understanding the intersection of disabilities and cultural diversity.</p>
            <div class="blog-wrapper"></div>
            <h1 class="setion-title">Lowongan Pekerjaan<h1>
            <div class="jobs-preview-container"></div>
        </div>
        `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render
    const searchBar = document.querySelector('.search-box');
    searchBar.style.display = 'none';

    const blogContainer = document.querySelector('.blog-wrapper');
    blogContainer.innerHTML = createHomeBlogTemplate();

    const jobs = await JobSource.listJob();
    const jobsContainer = document.querySelector('.jobs-preview-container');
    jobs.forEach((job) => {
      jobsContainer.innerHTML += createJobPreviewTemplate(job);
    });
  },
};

export default Home;
