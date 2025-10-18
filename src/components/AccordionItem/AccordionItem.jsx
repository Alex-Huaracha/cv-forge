import { useState } from 'react';
import './AccordionItem.css';

export function ExperienceItem({ item, fields, onDelete, onUpdate }) {
  const [isOpen, setIsOpen] = useState(true);

  const handleChange = (fieldName, value) => {
    onUpdate(item.id, fieldName, value);
  };

  const getItemTitle = () => {
    const firstField = fields[0].name;
    const secondField = fields[1].name;
    return item[firstField] || item[secondField] || 'New Entry';
  };

  return (
    <div className="experience-item">
      <div className="experience-item-header">
        <button
          className="accordion-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          <span className="item-title">{getItemTitle()}</span>
          <svg className="accordion-icon">
            <use href={`#icon-chevron-${isOpen ? 'up' : 'down'}`}></use>
          </svg>
        </button>

        <button
          onClick={() => onDelete(item.id)}
          className="delete-icon-button"
          aria-label="Delete entry"
        >
          <svg className="icon">
            <use href="#icon-delete"></use>
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="experience-item-content">
          {fields.map((field) => (
            <div key={field.name} className="form-group">
              <label htmlFor={`${item.id}-${field.name}`}>{field.label}</label>
              {field.type === 'textarea' ? (
                <textarea
                  id={`${item.id}-${field.name}`}
                  placeholder={field.label}
                  value={item[field.name]}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  rows="4"
                />
              ) : (
                <input
                  type={field.type}
                  id={`${item.id}-${field.name}`}
                  placeholder={field.label}
                  value={item[field.name]}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
