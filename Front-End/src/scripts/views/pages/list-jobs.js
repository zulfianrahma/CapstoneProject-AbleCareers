import JobSource from '../../data/job-source';
// import { createJobItemTemplate } from '../templates/template-creator';
import JobSearchPresenter from './list-jobs/list-jobs-search-presenter';
import JobSearchView from './list-jobs/list-jobs-search-view';
import JobShowPresenter from './list-jobs/list-jobs-show-presenter';

const view = new JobSearchView();

const ListJobs = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    const searchBar = document.querySelector('.search-box');
    searchBar.style.display = 'block';

    // eslint-disable-next-line
    new JobSearchPresenter({ view, jobs: JobSource });

    // eslint-disable-next-line
    new JobShowPresenter({ view, jobs: JobSource });
  },
};

export default ListJobs;
