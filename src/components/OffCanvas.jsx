import React from 'react';

const OffCanvas = ({ offcanvasTitle, offcanvasDescription, isOpen = false, setIsOpen, children }) => {

    const handleClose = () => setIsOpen(false);

    return (
        <div>
            {/* Offcanvas */}
            <div style={{ width: '35%' }}  className={`offcanvas offcanvas-end ${isOpen ? 'show' : ''}`} tabIndex="-1" data-bs-backdrop="static" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="border-bottom offcanvas-header">
                    <div className="text-start">
                        <h5 id="offcanvasRightLabel" className="mb-0 fs-4">
                            {offcanvasTitle}
                        </h5>
                        <small>{offcanvasDescription}</small>
                    </div>
                    <button
                        type="button"
                        className="btn-close text-reset"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                        onClick={handleClose}
                    ></button>
                </div>
                <div className="offcanvas-body">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default OffCanvas;
