import React, { useEffect } from 'react';
import './Therapists.css';
import { Route, Switch, Link, useParams } from 'react-router-dom';
import Therapist from './Therapist';
import TherapistReview from './TherapistReview';
import TherapistReviewThanks from './TherapistReviewThanks';
import Rating from './Rating';

const Therapists = () => {
    const [therapists, setTherapists] = React.useState([]);
    useEffect(() => {
        (async () => {
            const res = await fetch('/api/therapists');
            const json = await res.json();
            setTherapists(json);
        })();
    }, [setTherapists]);

    return (
        <Switch>
            <Route path='/therapists/:therapistId'>
                <TherapistSubRoute therapists={therapists} />
            </Route>
            <Route path='/therapists'>
                <TherapistList therapists={therapists} />
            </Route>
        </Switch>
    )
}

/**
 * @param {Object} props
 * @param {{ _id: string, name: string, type: string, description: string, picture: string, ratings: { effectiveness: number, friendliness: number, affordability: number }, reviews: { id: string, writtenAt: number, recommends: boolean, ratings: { effectiveness: number, friendliness: number, affordability: number }, title: string, content: string }[] }[]} props.therapists 
 */
const TherapistSubRoute = ({ therapists }) => {
    const { therapistId } = useParams();
    const therapist = therapists.find(therapist => therapist._id === therapistId);

    if (!therapist) return null;

    return (
        <Switch>
            <Route path='/therapists/:therapistId/review/thanks'>
                <TherapistReviewThanks therapist={therapist} />
            </Route>
            <Route path='/therapists/:therapistId/review'>
                <TherapistReview therapist={therapist} />
            </Route>
            <Route path='/therapists/:therapistId'>
                <Therapist therapist={therapist} />
            </Route>
        </Switch>
    )
}

/**
 * @param {Object} props
 * @param {{ _id: string, name: string, type: string, description: string, picture: string, ratings: { effectiveness: number, friendliness: number, affordability: number }, reviews: { id: string, writtenAt: number, recommends: boolean, ratings: { effectiveness: number, friendliness: number, affordability: number }, title: string, content: string }[] }[]} props.therapists 
 */
const TherapistList = ({ therapists }) => {
    return (
        <>
            <div className='px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center'>
                <h1 className='display-4'>Therapists</h1>
                <p className='lead'>These are the therapists in your local area.</p>
            </div>

            {(!therapists || !therapists.length) && <div className="d-flex justify-content-center"><div className="spinner-border" role="status"><span className="sr-only">Loading...</span></div></div>}
            
            <div className='card-deck' style={{ display: 'flex', flexWrap: 'wrap' }}>
                {therapists.map(t => (
                    <TherapistCard key={t._id} therapist={t} />
                ))}
            </div>
        </>
    )
}

/**
 * @param {Object} props
 * @param {{ _id: string, name: string, type: string, description: string, picture: string, ratings: { effectiveness: number, friendliness: number, affordability: number }, reviews: { id: string, writtenAt: number, recommends: boolean, ratings: { effectiveness: number, friendliness: number, affordability: number }, title: string, content: string }[] }} props.therapist 
 */
const TherapistCard = ({ therapist }) => {
    return (
        <Link className='card shadow flex-card' style={{ color: 'inherit', textDecoration: 'none' }} to={'/therapists/' + therapist._id}>
            <div>
                <img className='card-img-top' src={therapist.picture} alt={'Picture of ' + therapist.name} />
                <div className='card-body'>
                    <h5 className='mb-0'>{therapist.name}</h5>
                    <p className="text-secondary">{therapist.type}</p>
                    <p>{therapist.description}</p>
                    <Rating name='Effectiveness' value={therapist.ratings.effectiveness} />
                    <Rating name='Friendliness' value={therapist.ratings.friendliness} />
                    <Rating name='Affordability' value={therapist.ratings.affordability} />
                    <br />
                    {/* The whole card is a link already */}
                    <button className='btn btn-outline-primary btn-block'>More details</button>
                </div>
            </div>
        </Link>
    )
}

export default Therapists;