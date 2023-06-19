import JobSource from '../data/job-source';

const EditJob = {
  async init(jobId) {
    this._jobId = jobId;

    await this.render();
  },

  async render() {
    window.location.href = '/#/add-job';
    const job = await JobSource.detailJob(this._jobId);
    const {
      id,
      jobTitle,
      company,
      location,
      jobType,
      workplaceType,
      tags,
      jobStatus,
    } = job;

    const jobTypeString = jobType[0];
    const workplaceTypeString = workplaceType[0];

    console.log(tags);
    const jobStatusString = jobStatus[0];

    const addJobTitle = document.querySelector('#inputJobTitle');
    addJobTitle.value = jobTitle;

    const addCompany = document.querySelector('#inputCompany');
    addCompany.value = company;

    const addLocation = document.querySelector('#inputLocation');
    addLocation.value = location;

    const addJobType = document.getElementById(jobTypeString.toLowerCase());
    addJobType.checked = true;

    const addWorkplaceType = document.getElementById(
      workplaceTypeString.toLowerCase()
    );
    addWorkplaceType.checked = true;

    tags.forEach((tag) => {
      const select = document.querySelectorAll('input[name=input-tags]');
      select.forEach((t) => {
        if (t.value === tag) {
          // eslint-disable-next-line
          t.checked = true;
        }
      });
    });

    const addDescription = document.querySelector('#inputDescription');
    addDescription.value = job.description;

    const addJobStatus = document.getElementById(jobStatusString.toLowerCase());
    addJobStatus.checked = true;

    JobSource.deleteJob(id);
  },
};

export default EditJob;
