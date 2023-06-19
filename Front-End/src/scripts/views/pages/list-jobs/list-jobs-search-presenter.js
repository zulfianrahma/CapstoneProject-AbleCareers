class JobSearchPresenter {
  constructor({ jobs, view }) {
    this._jobs = jobs;
    this._view = view;
    this._listenToSearchRequestByUser();
  }

  _listenToSearchRequestByUser() {
    this._view.runWhenUserIsSearching((latestQuery) => {
      this._searchJobs(latestQuery);
    });
  }

  async _searchJobs(latestQuery) {
    this._latestQuery = latestQuery.trim();

    let foundJobs;

    if (this.latestQuery.length > 0) {
      foundJobs = await this._jobs.searchJob(this.latestQuery);
    } else {
      foundJobs = await this._jobs.listJob();
    }

    this._showFoundJobs(foundJobs);
  }

  //   eslint-disable-next-line
  _showFoundJobs(restaurants) {
    this._view.showJobs(restaurants);
  }

  get latestQuery() {
    return this._latestQuery;
  }
}

export default JobSearchPresenter;
