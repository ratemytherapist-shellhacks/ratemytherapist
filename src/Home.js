import React from 'react';
import WhyTherapy from './WhyTherapy';

const Home = () => {
    return (
        <>
            <div className="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 className="display-4">Rate My Therapist</h1>
                <p className="lead">Find the right therapist for you based off real reviews you can trust.</p>
            </div>

                <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                    <div className="col">
                        <div className="card mb-4 shadow-sm">
                            <div className="card-header">
                                <h4 className="my-0 font-weight-normal">Therapy Types</h4>
                            </div>
                            <div className="card-body">
                                <p>There are many types of therapy, and different types work better for different people or problems. These include:</p>
                                <button type="button" className="btn btn-lg btn-block btn-outline-primary">Find Your Type</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-4 shadow-sm">
                            <div className="card-header">
                                <h4 className="my-0 font-weight-normal">Find a Therapist</h4>
                            </div>
                            <div className="card-body">
                                <p>Something something something</p>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                                <button type="button" className="btn btn-lg btn-block btn-outline-primary">Find a therapist</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-4 shadow-sm">
                            <div className="card-header">
                                <h4 className="my-0 font-weight-normal">Rate a Therapist</h4>
                            </div>
                            <div className="card-body">
                                <p>Write your therapist reviews</p>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                                <button type="button" className="btn btn-lg btn-block btn-outline-primary">Start rating</button>
                            </div>
                        </div>
                    </div>
                </div>
            <WhyTherapy />
        </>
    )
}

export default Home;