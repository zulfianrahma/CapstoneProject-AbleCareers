import { createTeamIdentityTemplate } from '../templates/template-creator';

const AboutUs = {
  async render() {
    return `
    <div class="about-us" id="aboutUs">
      <div class="about-title">
        <h2>About Us :</h2><br>
        <p>AbleCareers adalah aplikasi inovatif yang dikembangkan oleh kelompok Capstone MSIB Cycle 4 dicoding untuk memberikan informasi lowongan pekerjaan kepada para penyandang disabilitas yang mengalami kesulitan dalam mencari pekerjaan.</p>
      </div>
      <div class="about-us-content"></div>
    </div>
              `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render
    const searchBar = document.querySelector('.search-box');
    searchBar.style.display = 'none';

    const jobsContainer = document.querySelector('.about-us-content');
    jobsContainer.innerHTML = createTeamIdentityTemplate();
  },
};

export default AboutUs;
