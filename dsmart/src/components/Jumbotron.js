import React from 'react';


export default function Jumbotron() {
    return (
        <div>
            <div id='jumbotron' className="container my-5 shadow p-3 mb-5 bg-body rounded">
                <div   className="p-5 text-center  rounded-5">
                    <svg className="bi mt-4 mb-3" style={{ color: 'var(--bs-indigo)' }} width="100" height="100">
                        <use xlinkHref="#bootstrap"></use>
                    </svg>
                    <h1 className="text-body-emphasis">Jumbotron with Offer</h1>
                    <p className="col-lg-8 mx-auto fs-5 text-muted">
                        
                    </p>
                    <div className="d-inline-flex gap-2 mb-5">
                        <button className="d-inline-flex align-items-center btn btn-outline-secondary btn-lg px-2 rounded-pill" type="button">
                            Offers
                            <svg className="bi ms-2" width="24" height="24">
                                <use xlinkHref="/arrow-right-short"></use>
                            </svg>
                        </button>
                        <button className="btn btn-outline-secondary btn-lg px-2 rounded-pill" type="button">
                            Secondary link
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
