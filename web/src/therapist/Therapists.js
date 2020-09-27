import React from 'react';
import './Therapists.css';
import { Route, Switch, Link, useParams } from 'react-router-dom';
import Therapist from './Therapist';
import TherapistReview from './TherapistReview';
import TherapistReviewThanks from './TherapistReviewThanks';
import Rating from './Rating';

// TODO: get from back-end
const therapists = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((v) => ({
    id: v.toString(),
    name: 'Therapist #' + v,
    type: 'Cat Therapist',
    description: 'Specialises in cuddles',
    picture: 'https://placekitten.com/500/500?image=' + v,
    ratings: {
        effectiveness: (72 + (9 * v) ** 2) % 60 + 40,
        friendliness: (93 + (8 * v) ** 2) % 60 + 40,
        affordability: (57 + (7 * v) ** 2) % 60 + 40,
    },
    reviews: [
        {
            id: v.toString() + '_1',
            writtenAt: 1601143260,
            recommends: true,
            ratings: {
                effectiveness: Math.min((72 + (9 * v) ** 2) % 60 + 40 + 12, 100),
                friendliness: Math.min((72 + (9 * v) ** 2) % 60 + 40 + 10, 100),
                affordability: Math.min((72 + (9 * v) ** 2) % 60 + 40 - 15, 100),
            },
            title: 'Useful for helping me',
            content: 'Blah' + ' blah'.repeat(40) + '.',
        },
        {
            id: v.toString() + '_2',
            writtenAt: 1601133260,
            recommends: true,
            ratings: {
                effectiveness: Math.min((72 + (9 * v) ** 2) % 60 + 40 + 18, 100),
                friendliness: Math.min((72 + (9 * v) ** 2) % 60 + 40 - 10, 100),
                affordability: Math.min((72 + (9 * v) ** 2) % 60 + 40 + 10, 100),
            },
            title: 'Good therapist',
            content: 'Blah' + ' blah'.repeat(25) + '.',
        },
        {
            id: v.toString() + '_3',
            writtenAt: 1601128260,
            recommends: false,
            ratings: {
                effectiveness: Math.min((72 + (9 * v) ** 2) % 60 + 40 - 30, 100),
                friendliness: Math.min((72 + (9 * v) ** 2) % 60 + 40, 100),
                affordability: Math.min((72 + (9 * v) ** 2) % 60 + 40 + 5, 100),
            },
            title: 'Not that effective',
            content: 'Blah' + ' blah'.repeat(100) + '.',
        }
    ]
}));

const Therapists = () => {
    return (
        <Switch>
            <Route path='/therapists/:therapistId'>
                <TherapistSubRoute />
            </Route>
            <Route path='/therapists'>
                <TherapistList />
            </Route>
        </Switch>
    )
}

const TherapistSubRoute = () => {
    const { therapistId } = useParams();
    const therapist = therapists[parseInt(therapistId) - 1];

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

const TherapistList = () => {
    return (
        <>
            <div className='px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center'>
                <h1 className='display-4'>Therapists</h1>
                <p className='lead'>These are the therapists in your local area.</p>
            </div>

            <div className='card-deck' style={{ display: 'flex', flexWrap: 'wrap' }}>
                {therapists.map(t => (
                    <TherapistCard key={t.id} therapist={t} />
                ))}
            </div>
        </>
    )
}

/**
 * @param {Object} props
 * @param {{ id: string, name: string, type: string, description: string, picture: string, ratings: { effectiveness: number, friendliness: number, affordability: number } }} props.therapist 
 */
const TherapistCard = ({ therapist }) => {
    return (
        <Link className='card shadow flex-card' style={{ color: 'inherit', textDecoration: 'none' }} to={'/therapists/' + therapist.id}>
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
                    <Link className='btn btn-outline-primary btn-block' to={'/therapists/' + therapist.id}>More details</Link>
                </div>
            </div>
        </Link>
    )
}

export default Therapists;