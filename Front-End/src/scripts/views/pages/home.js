import JobSource from '../../data/job-source';
import {
  createJobPreviewTemplate,
  createArticleTemplate,
} from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <div id="content" class="content">
            <h2 class="content-heading"><a id="content-heading-title" href="#/list-jobs">Beranda</a></h2>
            <div id="article" class="article">
              <h3>Tentang Disabilitas</h3>
              <div id="article-container" class="article-container"></div>
            </div>
            <div id="jobs-preview" class="jobs-preview">
              <h3>Lowongan Pekerjaan</h3>
              <div id="jobs-preview-container" class="jobs-preview-container"></div>
            </div>
        </div>
        `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render
    const searchBar = document.querySelector('.search-box');
    searchBar.style.display = 'none';

    const articleContainer = document.querySelector('#article-container');
    articleContainer.innerHTML = createArticleTemplate();

    const jobs = await JobSource.listJob();
    const jobsContainer = document.querySelector('#jobs-preview-container');
    jobs.forEach((job) => {
      jobsContainer.innerHTML += createJobPreviewTemplate(job);
    });
  },
};

export default Home;
