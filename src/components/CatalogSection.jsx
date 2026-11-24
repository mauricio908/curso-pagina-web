import ProductCardEditorial from './ProductCardEditorial';
import { OLFACTORY_FAMILIES, CONCENTRATIONS } from '../data/perfumes';
import { IconFilter } from './Icons';

export default function CatalogSection({
  perfumes,
  selectedFamily,
  onSelectFamily,
  selectedConcentration,
  onSelectConcentration,
  sortBy,
  onSortChange,
  onSelectProduct,
  onAddToCart,
  wishlist,
  onToggleWishlist,
  onResetFilters
}) {
  return (
    <section id="catalogo" className="catalog-editorial-section" aria-labelledby="catalog-title">
      <div className="catalog-header-bar">
        <div>
          <span className="section-tag">COLECCIÓN DE AUTOR</span>
          <h2 id="catalog-title" className="catalog-editorial-title">
            Catálogo de <span>Fragancias de Nicho</span>
          </h2>
          <p className="catalog-editorial-subtitle">
            Curaduría de esencias importadas de alta concentración, elaboradas por maestros perfumistas.
          </p>
        </div>

        {/* Filtro Ordenamiento */}
        <div className="catalog-sort-box">
          <IconFilter size={14} className="sort-box-icon" aria-hidden="true" />
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="sort-native-select"
            aria-label="Ordenar fragancias"
          >
            <option value="featured">Destacados por la Maison</option>
            <option value="price-asc">Precio: Menor a Mayor</option>
            <option value="price-desc">Precio: Mayor a Menor</option>
            <option value="rating">Calificación de Connoisseurs ★</option>
          </select>
        </div>
      </div>

      {/* Barra de Filtros Doble: Familias Olfativas & Concentraciones */}
      <div className="filter-system-container">
        {/* Filtro por Familias */}
        <div className="filter-group-row">
          <span className="filter-group-label">Familia Olfativa:</span>
          <div className="filter-pill-scroll">
            {OLFACTORY_FAMILIES.map((fam) => (
              <button
                key={fam.id}
                type="button"
                className={`filter-pill-button ${selectedFamily === fam.id ? 'active' : ''}`}
                onClick={() => onSelectFamily(fam.id)}
              >
                {fam.name}
              </button>
            ))}
          </div>
        </div>

        {/* Filtro por Concentración */}
        <div className="filter-group-row">
          <span className="filter-group-label">Concentración:</span>
          <div className="filter-pill-scroll">
            {CONCENTRATIONS.map((conc) => (
              <button
                key={conc.id}
                type="button"
                className={`filter-pill-button ${selectedConcentration === conc.id ? 'active' : ''}`}
                onClick={() => onSelectConcentration(conc.id)}
              >
                {conc.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Contador de Resultados */}
      <div className="catalog-results-count">
        Mostrando <strong>{perfumes.length}</strong> creaciones disponibles
      </div>

      {/* Grid de Productos con Espacio Negativo */}
      {perfumes.length === 0 ? (
        <div className="catalog-empty-editorial">
          <h3>No se encontraron creaciones con los filtros actuales</h3>
          <p>Prueba seleccionando otra familia olfativa o restableciendo la concentración.</p>
          <button
            type="button"
            className="btn-charcoal"
            onClick={onResetFilters}
          >
            Restablecer Filtros
          </button>
        </div>
      ) : (
        <div className="catalog-editorial-grid">
          {perfumes.map((perfume) => (
            <ProductCardEditorial
              key={perfume.id}
              perfume={perfume}
              onSelectProduct={onSelectProduct}
              onAddToCart={onAddToCart}
              isWishlisted={wishlist.includes(perfume.id)}
              onToggleWishlist={onToggleWishlist}
            />
          ))}
        </div>
      )}
    </section>
  );
}
