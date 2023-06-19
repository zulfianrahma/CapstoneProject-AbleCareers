import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const FavoriteJobIdb = {
  async getJob(id) {
    if (!id) {
      return;
    }

    // eslint-disable-next-line consistent-return
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },

  async getAllJobs() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },

  async putJob(job) {
    // eslint-disable-next-line no-prototype-builtins
    if (!job.hasOwnProperty('id')) {
      return;
    }

    // eslint-disable-next-line consistent-return
    return (await dbPromise).put(OBJECT_STORE_NAME, job);
  },

  async deleteJob(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },

  // eslint-disable-next-line
  async searchJobs(query) {
    return (await this.getAllJobs()).filter((job) => {
      const loweredCaseJobName = (job.name || '-').toLowerCase();
      const jammedJobName = loweredCaseJobName.replace(/\s/g, '');

      const loweredCaseQuery = query.toLowerCase();
      const jammedQuery = loweredCaseQuery.replace(/\s/g, '');

      return jammedJobName.indexOf(jammedQuery) !== -1;
    });
  },
};

export default FavoriteJobIdb;
