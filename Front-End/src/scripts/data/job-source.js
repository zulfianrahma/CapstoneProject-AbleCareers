import API_ENDPOINT from '../globals/api-endpoint';

// async function GetData(){
//     const response = await fetch('http://localhost:8080/jobs');
//     const responseJson = await response.json();
//     const jobs = await responseJson.data.jobs;

//     console.log(jobs[0]);
//     const jobsContainer = document.querySelector('#main-content');
//     jobsContainer.innerHTML = jobs[0].id;
//     // jobs.forEach((job) => {
//     //   jobsContainer.innerHTML += createJobItemTemplate(job);
//     // });
//   }

class JobSource {
  static async listJob() {
    console.log('this is GET method');
    const response = await fetch('http://localhost:8080/jobs');
    const responseJson = await response.json();
    return responseJson.data.jobs;
  }

  static async detailJob(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.job;
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
    console.log(responseJson.message);
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
    console.log(responseJson.message);
    this.listJob();
  }

  static async deleteJob(id) {
    const options = {
      method: 'DELETE',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(job),
    };

    const response = await fetch(API_ENDPOINT.DELETE(id), options);
    const responseJson = await response.json();
    console.log(responseJson.message);
    this.listJob();
  }
}

export default JobSource;
