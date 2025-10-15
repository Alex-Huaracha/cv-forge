import './ProfileSummary.css';

export function ProfileSummary({ data, onChange }) {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="profile-summary">
      <label htmlFor="summary">
        Highlight your professional experience, skills, and accomplishments in a
        brief, impactful statement.
      </label>
      <textarea
        id="summary"
        value={data}
        onChange={handleChange}
        placeholder="Write a brief summary about yourself..."
        rows={4}
      />
    </div>
  );
}
