import { useState } from 'react';
import './PersonalInfo.css';

export function PersonalInfo() {
  const [formData, setFormData] = useState({
    firstName: 'Alex',
    lastName: 'Huaracha',
    email: 'alex@example.com',
    phone: '+51 999 999 999',
    linkedin: 'linkedin.com/in/alex-huaracha/',
    github: 'github.com/Alex-Huaracha',
    portfolio: 'yourwebsite.dev',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="personal-info">
      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="firstName">First Name *</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name *</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="linkedin">LinkedIn</label>
          <input
            type="url"
            id="linkedin"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleInputChange}
            placeholder="https://linkedin.com/in/username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="github">GitHub</label>
          <input
            type="url"
            id="github"
            name="github"
            value={formData.github}
            onChange={handleInputChange}
            placeholder="https://github.com/username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="portfolio">Personal Website</label>
          <input
            type="url"
            id="portfolio"
            name="portfolio"
            value={formData.portfolio}
            onChange={handleInputChange}
            placeholder="https://yourwebsite.com"
          />
        </div>
      </div>
    </div>
  );
}
