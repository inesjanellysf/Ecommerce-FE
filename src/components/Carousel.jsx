import PropTypes from 'prop-types';

export function Carousel({ images, intervals = [] }) {
    return (
        <div id="carouselExample" className="carousel slide mt-3 mb-3" data-bs-ride="carousel">
            <div className="carousel-inner">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`carousel-item ${index === 0 ? 'active' : ''}`}
                        data-bs-interval={intervals[index] || 5000} // Por defecto 5000 ms
                    >
                        <img src={image.src} className="d-block w-100" alt={image.alt || `Slide ${index + 1}`} />
                    </div>
                ))}
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

// PropTypes para validación
Carousel.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            alt: PropTypes.string
        })
    ).isRequired,
    intervals: PropTypes.arrayOf(PropTypes.number)
};
