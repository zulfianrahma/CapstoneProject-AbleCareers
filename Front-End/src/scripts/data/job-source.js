import API_ENDPOINT from '../globals/api-endpoint';

class JobSource {
  static async listJob() {
    console.log('Get list of jobs');
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    console.log(responseJson);
    return responseJson.data.jobs;
  }

  static async detailJob(id) {
    console.log('Get detail of a job');
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

    const response = await fetch(API_ENDPOINT.POST, options);
    const responseJson = await response.json();
    console.log(responseJson);
    this.listJob();
  }

  static async updateJob(job) {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    };

    const response = await fetch(API_ENDPOINT.EDIT, options);
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
}

export default JobSource;
