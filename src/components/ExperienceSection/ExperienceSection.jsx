import { ExperienceItem } from './../../components';
import './ExperienceSection.css';

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
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, [fieldName]: value } : item
    );
    onUpdateItems(updatedItems);
  };

  const handleDelete = (id) => {
    const filteredItems = items.filter((item) => item.id !== id);
    onUpdateItems(filteredItems);
  };

  return (
    <div className="experience-section">
      {items.map((item) => (
        <ExperienceItem
          key={item.id}
          item={item}
          fields={fields}
          onDelete={handleDelete}
          onUpdate={handleChange}
        />
      ))}

      <button onClick={handleAdd} className="add-button">
        + Add {sectionTitle}
      </button>
    </div>
  );
}
