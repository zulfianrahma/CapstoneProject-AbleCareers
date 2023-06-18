const Profile = {
  async render() {
    return `
        <div class="profile-container">
    <div class="profile-top">
    <div class="profile-picture" id="profile-picture"></div>
    <div class="profile-button">
    <input type="file" id="picture-input" class="file-input" accept="image/*">
    <button id="upload-button" class="upload-button" style="display: none;">Upload Picture</button>
    </div>

    <p>USER PROFILE</p>
    </div>
    <div class="profile-info">
      <label>Name</label>
      <p class="profile-text" id="profile-name"></p>
      <input type="text" id="name-input" class="editable-field" style="display: none;">
      <hr>

      <label>Address</label>
      <p class="profile-text" id="profile-address"></p>
      <input type="text" id="address-input" class="editable-field" style="display: none;">
      <hr>
 
      <label id="bio-label">Biography</label>
      <p class="profile-text" id="profile-bio"></p>
      <textarea id="bio-input" class="editable-field" style="display: none;"></textarea>
      <hr>
 
    
 
      <button id="edit-button" class="edit-button">Edit Profile</button>
      <button id="save-button" class="save-button" style="display: none;">Save Changes</button>
    </div>
  </div>
  <script src="/templates/profilepage.js></script>
        `;
  },
};

export default Profile;
