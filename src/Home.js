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
                <Card title={'Therapy Types'} button={{ text: 'Find your type', destination: '/types' }}>
                    <p>There are many types of therapy, and different types work better for different people or problems.</p>
                </Card>
                <Card title={'Find a Therapist'} button={{ text: 'Find a therapist', destination: '/therapist' }}>
                    <p>Something something something</p>
                </Card>
                <Card title={'Rate a Therapist'} button={{ text: 'Start rating', destination: '/therapist' }}>
                    <p>Write your therapist reviews</p>
                </Card>
            </div>

            <WhyTherapy />
        </>
    )
}

const Card = ({ title, children: body, button: { text, destination } }) => {
    return (
        <div className="col">
            <div className="card mb-4 shadow-sm">
                <div className="card-header">
                    <h4 className="my-0 font-weight-normal">{title}</h4>
                </div>
                <div className="card-body">
                    {body}
                    <a href={destination} role="button" className="btn btn-lg btn-block btn-outline-primary">{text}</a>
                </div>
            </div>
        </div>
    )
}

export default Home;