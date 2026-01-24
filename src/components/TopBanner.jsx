import { LanguageDropdown } from "./LanguageDropdown";
import PropTypes from "prop-types";

export function TopBanner({languages=[]}) {
    return (
        <div className="bg-light py-1">
            <div className="container">
                <div className="row">
                    <div className="text-center text-md-start col-md-6 col-12">
                        <span className="fontMenu"> Ofertas de gran valor: ahorre más con cupones</span>
                    </div>
                    <div className="text-end d-none d-md-block col">
                        <LanguageDropdown languages={languages}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

TopBanner.propTypes = {
    languages: PropTypes.array
};