import JobSource from '../data/job-source';
import DisplayCheckboxValue from './display-checkbox-value';
import DisplayRadioValue from './display-radio-value';

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
      // jobType,
      // workplaceType,
      tags,
      // jobStatus,
    } = job;

    const jobId = await document.querySelector('#inputJobId');
    jobId.style.display = 'block';
    jobId.value = id;
    jobId.setAttribute('readonly', true);

    // const jobTypeLowerCase = (element) => {
    //   const result = [];
    //   if (Array.isArray(element)) {
    //     const string = element[0].toLowerCase();
    //     result.push(string);
    //     return result;
    //   }
    //   const string = element.toLowerCase();
    //   result.push(string);
    //   return result;
    // };

    // const workplaceTypeLowerCase = (element) => {
    //   const result = [];
    //   if (Array.isArray(element)) {
    //     const string = element[0].toLowerCase();
    //     result.push(string);
    //     return result;
    //   }
    //   const string = element.toLowerCase();
    //   result.push(string);
    //   return result;
    // };
    // const jobStatusLowerCase = (element) => {
    //   const result = [];
    //   if (Array.isArray(element)) {
    //     const string = element[0].toLowerCase();
    //     result.push(string);
    //     return result;
    //   }
    //   const string = element.toLowerCase();
    //   result.push(string);
    //   return result;
    // };

    const addJobTitle = await document.querySelector('#inputJobTitle');
    addJobTitle.value = jobTitle;

    const addCompany = await document.querySelector('#inputCompany');
    addCompany.value = company;

    const addLocation = await document.querySelector('#inputLocation');
    addLocation.value = location;

    // const addJobType = await document.getElementById(
    //   jobTypeLowerCase(jobType)[0]
    // );
    // addJobType.checked = true;

    // const addWorkplaceType = await document.getElementById(
    //   workplaceTypeLowerCase(workplaceType)[0]
    // );
    // addWorkplaceType.checked = true;

    const addJobType = DisplayRadioValue('job-type');
    const addWorkplaceType = DisplayRadioValue('workplace-type');
    const addJobStatus = DisplayRadioValue('job-status');
    tags.forEach((tag) => {
      const select = document.querySelectorAll('input[name=input-tags]');
      select.forEach((t) => {
        if (t.value === tag) {
          // eslint-disable-next-line
          t.checked = true;
        }
      });
    });

    const addTags = await DisplayCheckboxValue('input-tags');

    const addDescription = await document.querySelector('#inputDescription');
    addDescription.value = job.description;

    // const addJobStatus = await document.getElementById(
    //   jobStatusLowerCase(jobStatus)[0]
    // );
    // addJobStatus.checked = true;

    const buttonAdd = await document.querySelector('#buttonAdd');
    const buttonEdit = await document.querySelector('#buttonEdit');

    buttonAdd.style.display = 'none';
    buttonEdit.style.display = 'block';

    buttonEdit.addEventListener('click', () => {
      const edited = {
        jobTitle: addJobTitle.value,
        company: addCompany.value,
        location: addLocation.value,
        jobType: addJobType, // full-time, part-time, contract, volunteer, internship
        workplaceType: addWorkplaceType, // on-site, remote, hybrid
        tags: addTags,
        description: addDescription.value,
        jobStatus: addJobStatus, // open/close
      };

      console.log(typeof edited);
      console.log(id);
      JobSource.updateJob({ edited, id });
      // eslint-disable-next-line
      alert('Pekerjaan berhasil diperbarui');
    });
  },
};

export default EditJob;
