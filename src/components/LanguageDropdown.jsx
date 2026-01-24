import PropTypes from "prop-types";

export function LanguageDropdown({languages = []}) {
    return (
        <div className="selectBox dropdown fontMenu">
            <a aria-expanded="false" role="button" className="dropdown-toggle nav-link" data-bs-toggle="dropdown" tabIndex="0" href="#">
                <img src="/img/traslate/spanish.svg" alt="Spanish" className="me-2" />
                Español
            </a>
            <div className="dropdown-menu dropdown-menu-language fontMenu">
                {languages.map((lang, index) => (
                    <a key={index} className="w-100 w-lg-auto dropdown-item" href="#">
                        <span className="d-flex align-items-center gap-2 span-language">
                            <img src={`/img/traslate/${lang.icon}.svg`} alt={lang} />
                            {lang.language.charAt(0).toUpperCase() + lang.language.slice(1)}
                        </span>
                    </a>
                ))}
            </div>
        </div>
    );
}

LanguageDropdown.propTypes = {
    languages: PropTypes.array
};