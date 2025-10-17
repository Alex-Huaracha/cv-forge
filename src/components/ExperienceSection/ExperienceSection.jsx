export function ExperienceSection({
  items,
  onUpdateItems,
  initialItemData,
  fields,
  sectionTitle,
}) {
  const handleAdd = () => {
    const newItem = { ...initialItemData, id: crypto.randomUUID() };
    onUpdateItems([...items, newItem]);
  };

  const handleChange = (id, fieldName, value) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, [fieldName]: value };
      }
      return item;
    });
    onUpdateItems(updatedItems);
  };

  const handleDelete = (id) => {
    const filteredItems = items.filter((item) => item.id !== id);
    onUpdateItems(filteredItems);
  };

  return (
    <div className="experience-section">
      <h3>{sectionTitle}</h3>

      {items.map((item) => (
        <div key={item.id} className="entry-form">
          {fields.map((field) => (
            <div key={field.name} className="form-group">
              <label htmlFor={`${item.id}-${field.name}`}>{field.label}</label>
              {field.type === 'textarea' ? (
                <textarea
                  id={`${item.id}-${field.name}`}
                  placeholder={field.label}
                  value={item[field.name]}
                  onChange={(e) =>
                    handleChange(item.id, field.name, e.target.value)
                  }
                  rows="4"
                />
              ) : (
                <input
                  type={field.type}
                  id={`${item.id}-${field.name}`}
                  placeholder={field.label}
                  value={item[field.name]}
                  onChange={(e) =>
                    handleChange(item.id, field.name, e.target.value)
                  }
                />
              )}
            </div>
          ))}

          <button
            onClick={() => handleDelete(item.id)}
            className="delete-button"
          >
            Delete
          </button>
        </div>
      ))}

      <button onClick={handleAdd} className="add-button">
        Add {sectionTitle}
      </button>
    </div>
  );
}
