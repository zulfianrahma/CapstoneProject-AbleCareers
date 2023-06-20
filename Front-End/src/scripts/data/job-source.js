import API_ENDPOINT from '../globals/api-endpoint';

class JobSource {
  static async listJob() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    console.log(responseJson);
    return responseJson.data.jobs;
  }

  static async detailJob(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    console.log(responseJson);
    return responseJson.data.job;
  }

  static async insertJob(job) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    };
    console.log('this is job from user ->', job);
    console.log('this is JSON.stringify job', JSON.stringify(job));

    const response = await fetch(API_ENDPOINT.POST, options);
    const responseJson = await response.json();
    console.log(responseJson);
    this.listJob();
  }

  static async updateJob({ edited, id }) {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(edited),
    };

    const response = await fetch(API_ENDPOINT.EDIT(id), options);
    const responseJson = await response.json();
    console.log(responseJson);
    this.listJob();
  }

  static async deleteJob(id) {
    const options = {
      method: 'DELETE',
    };

    const response = await fetch(API_ENDPOINT.DELETE(id), options);
    const responseJson = await response.json();
    console.log(responseJson);
    this.listJob();
  }

  static async searchJob(query) {
    return (await this.listJob()).filter((job) => {
      const loweredCaseJobTitle = (job.jobTitle || '-').toLowerCase();
      const jammedJobTitle = loweredCaseJobTitle.replace(/\s/g, '');

      const loweredCaseQuery = query.toLowerCase();
      const jammedQuery = loweredCaseQuery.replace(/\s/g, '');

      return jammedJobTitle.indexOf(jammedQuery) !== -1;
    });
  }
}

export default JobSource;
