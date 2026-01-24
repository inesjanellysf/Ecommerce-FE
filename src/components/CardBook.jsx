import PropTypes from "prop-types";
import "../../public/css/components/CardBook.css";

export function CardBook({
                             title,
                             imageUrl,
                             category = "General",
                             rating = 0,
                             reviews = 0,
                             currentPrice,
                             oldPrice,
                             badges = [],
                             onAdd = () => {},
                             onView = () => {},
                             onFavorite = () => {},
                             onCompare = () => {},
                         }) {
    return (
        <div className="card-product card">
            <div className="card-body">
                <div className="text-center position-relative">
                    {/* Badges */}
                    <div className="position-absolute top-0 start-0">
                        <div className="d-flex gap-1 flex-column">
                            {badges.map((badge, index) => (
                                <span
                                    key={index}
                                    className={`custom-badge badge bg-${badge.color}`}
                                >
                                    {badge.text}
                                </span>
                            ))}
                        </div>
                    </div>
                    {/* Product Image */}
                    <a href="#" onClick={onView}>
                        <img  src={imageUrl} alt={title} className="mb-3 img-fluid" />
                    </a>

                    {/* Actions */}
                    <div className="card-product-action d-flex gap-1 justify-content-center">
                        <button className="btn-action" onClick={onView}>
                            <img src="/img/icon/eye.svg" alt="View Product" />
                        </button>
                        <button className="btn-action" onClick={onFavorite}>
                            <img src="/img/icon/heart-2.svg" alt="Add to Favorites" />
                        </button>
                        <button className="btn-action" onClick={onCompare}>
                            <img src="/img/icon/compare.svg" alt="Compare" />
                        </button>
                    </div>
                </div>
                {/* Category */}
                <div className="text-small mb-1">
                    <a className="text-decoration-none text-muted" href="#">
                        <small>{category}</small>
                    </a>
                </div>
                {/* Title */}
                <h2 className="fs-6">
                    <a className="text-inherit text-decoration-none" href="#">
                        {title}
                    </a>
                </h2>
                {/* Rating */}
                <div className="d-inline-flex gap-1 align-items-center">
                    <small className="text-warning">
                        <div className="d-flex gap-1">
                            {[...Array(5)].map((_, index) => (
                                <img
                                    key={index}
                                    src={`/img/icon/${index < rating ? "start" : "start-1"}.svg`}
                                    alt="Star"
                                />
                            ))}
                        </div>
                    </small>
                    <span className="text-muted small">
            {rating} ({reviews})
          </span>
                </div>
                {/* Price and Add Button */}
                <div className="d-flex justify-content-between align-items-center mt-3">
                    <div>
                        <span className="text-dark">${currentPrice}</span>
                        {oldPrice && (
                            <span className="text-decoration-line-through text-muted">
                ${oldPrice}
              </span>
                        )}
                    </div>
                    <div>
                        <button
                            role="button"
                            tabIndex="0"
                            onClick={onAdd}
                            className="btn btn-primary btn-sm d-flex align-items-center justify-content-center"
                        >
                           
                            <img src="/img/icon/plus.svg" alt="Add" className="img-fluid" />{" "}
                            
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

// PropTypes para validar las propiedades del componente
CardBook.propTypes = {
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    category: PropTypes.string,
    rating: PropTypes.number,
    reviews: PropTypes.number,
    currentPrice: PropTypes.number.isRequired,
    oldPrice: PropTypes.number,
    badges: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired,
        })
    ),
    onAdd: PropTypes.func,
    onView: PropTypes.func,
    onFavorite: PropTypes.func,
    onCompare: PropTypes.func,
};
