/* eslint-disable no-plusplus */
import { profileTemplate } from '../templates/templatesCreator';

const Profile = {
  async render() {
    return `
  <div id="profile-container" class="profile-container">
  </div>
        `;
  },
  async afterRender() {
    const profileContainer = document.querySelector('#profile-container');

    profileContainer.innerHTML = profileTemplate;
    const user = {
      name: '',
      address: '',
      bio: '',
    };

    // Function to update the profile information
    const updateProfile = () => {
      document.getElementById('profile-name').innerText = user.name;
      document.getElementById('name-input').value = user.name;
      document.getElementById('profile-address').innerText = user.address;
      document.getElementById('address-input').value = user.address;
      document.getElementById('profile-bio').innerText = user.bio;
      document.getElementById('bio-input').value = user.bio;
    };

    // Function to toggle between read-only and editable fields
    const editableFields = (editable) => {
      // eslint-disable-next-line no-shadow
      const editableFields = document.getElementsByClassName('editable-field');
      for (let i = 0; i < editableFields.length; i++) {
        if (editable) {
          editableFields[i].style.display = 'block';
          editableFields[i].removeAttribute('readonly');
        } else {
          editableFields[i].style.display = 'none';
          editableFields[i].setAttribute('readonly', true);
        }
      }

      if (editable) {
        document.getElementById('save-button').style.display = 'block';
        document.getElementById('edit-button').style.display = 'none';
        document.getElementById('upload-button').style.display = 'block';
      } else {
        document.getElementById('save-button').style.display = 'none';
        document.getElementById('edit-button').style.display = 'block';
        document.getElementById('upload-button').style.display = 'none';
      }
    };

    // Function to handle the picture upload
    const handlePictureUpload = (pict) => {
      const file = pict.target.files[0];
      if (file) {
        const reader = new FileReader();
        // eslint-disable-next-line func-names
        reader.onload = function (e) {
          const profilePicture = document.getElementById('profile-picture');
          profilePicture.style.backgroundImage = `url(${e.target.result})`;
        };
        reader.readAsDataURL(file);
      }
    };

    // Function to save the changes made to the profile
    function saveChanges() {
      user.name = document.getElementById('name-input').value;
      user.address = document.getElementById('address-input').value;
      user.bio = document.getElementById('bio-input').value;
      updateProfile();
      editableFields(false);
    }

    // Event listener for the edit button
    document.getElementById('edit-button').addEventListener('click', () => {
      editableFields(true);
    });

    // Event listener for the save button
    document.getElementById('save-button').addEventListener('click', () => {
      saveChanges();
    });

    // Event listener for the upload button
    document.getElementById('upload-button').addEventListener('click', () => {
      document.getElementById('picture-input').click();
    });

    // Event listener for the picture input change
    document.getElementById('picture-input').addEventListener('change', (event) => {
      handlePictureUpload(event);
    });

    // Call the function to populate the profile
    updateProfile();
  },
};

export default Profile;
