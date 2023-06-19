import { createJobItemTemplate } from '../../templates/template-creator';

class JobSearchView {
  //   eslint-disable-next-line
  getTemplate() {
    return `
    <div id="content" class="content">
        <h2 class="content-heading"><a id="content-heading-title" href="#/list-jobs">Daftar Pekerjaan</a></h2>
        <div id="jobs" class="jobs">
        </div>
    </div>
    `;
  }

  //   eslint-disable-next-line
  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  // eslint-disable-next-line
  showJobs(jobs) {
    if (!jobs) {
      return;
    }

    let html;

    if (jobs.length) {
      html = jobs.reduce(
        (carry, job) => carry.concat(createJobItemTemplate(job)),
        ''
      );
    } else {
      html = this._getEmptyJobTemplate();
    }
    document.getElementById('jobs').innerHTML = html;

    document.getElementById('jobs').dispatchEvent(new Event('jobs:updated'));
  }

  // eslint-disable-next-line
  _getEmptyJobTemplate() {
    return `
      <div class="job-item__not__found">
      Lowongan pekerjaan tidak ditemukan
      </div>
    `;
  }
}

export default JobSearchView;
