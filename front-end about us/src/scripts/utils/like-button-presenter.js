import {
  createSaveJobButtonTemplate,
  createUnsaveJobButtonTemplate,
} from '../views/templates/template-creator';

const SaveButtonInitiator = {
  async init({ saveButtonContainer, favoriteJobs, job }) {
    this._saveButtonContainer = saveButtonContainer;
    this._favoriteJobs = favoriteJobs;
    this._job = job;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._job;

    if (await this._isJobExist(id)) {
      this._renderSaved();
    } else {
      this._renderSave();
    }
  },

  async _isJobExist(id) {
    const job = await this._favoriteJobs.getJob(id);
    return !!job;
  },

  _renderSave() {
    this._saveButtonContainer.innerHTML = createSaveJobButtonTemplate();

    const saveButton = document.querySelector('#saveButton');
    saveButton.addEventListener('click', async () => {
      await this._favoriteJobs.putJob(this._job);
      this._renderButton();
    });
  },

  _renderSaved() {
    this._saveButtonContainer.innerHTML = createUnsaveJobButtonTemplate();

    const saveButton = document.querySelector('#saveButton');
    saveButton.addEventListener('click', async () => {
      await this._favoriteJobs.deleteJob(this._job.id);
      this._renderButton();
    });
  },
};

export default SaveButtonInitiator;
