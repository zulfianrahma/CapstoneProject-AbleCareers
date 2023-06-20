class JobShowPresenter {
  constructor({ view, jobs }) {
    this._view = view;
    this._jobs = jobs;

    this._showJobs();
  }

  async _showJobs() {
    const Jobs = await this._jobs.listJob();
    this._displayJobs(Jobs);
  }

  _displayJobs(Jobs) {
    this._view.showJobs(Jobs);
  }
}

export default JobShowPresenter;
