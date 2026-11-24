import { IconFilter } from './Icons';

export default function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
  totalResults,
  sortBy,
  onSortChange
}) {
  return (
    <div className="category-filter-bar">
      <div className="category-tabs" role="tablist" aria-label="Filtrar por género o categoría de fragancia">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            role="tab"
            aria-selected={selectedCategory === cat}
            className={`tab-btn ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => onSelectCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="filter-controls-right">
        <div className="sort-select-wrapper">
          <IconFilter size={13} className="sort-icon" aria-hidden="true" />
          <select
            className="sort-dropdown"
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            aria-label="Ordenar fragancias"
          >
            <option value="featured">Destacados</option>
            <option value="price-asc">Precio: Menor a Mayor</option>
            <option value="price-desc">Precio: Mayor a Menor</option>
            <option value="rating">Mejor Calificados ★</option>
          </select>
        </div>

        <div className="category-count">
          <strong>{totalResults}</strong> creaciones
        </div>
      </div>
    </div>
  );
}
