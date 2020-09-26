import React from 'react';
import { useParams, Link } from 'react-router-dom';
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
            reccommends: true,
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
            reccommends: true,
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
            reccommends: false,
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

const Therapist = () => {
    const { therapistId } = useParams();
    const therapist = therapists[parseInt(therapistId) - 1];

    return (
        <>
            <Link className="text-dark" to="/therapists"><h5>◀ Back to all therapists</h5></Link>

            <div class="card shadow mb-3" style={{ overflow: 'hidden' }}>
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={therapist.picture} alt={'Picture of ' + therapist.name} width='100%' />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 className='mb-0'>{therapist.name}</h5>
                            <p className="text-secondary">{therapist.type}</p>
                            <p>{therapist.description}</p>
                            <Rating name='Effectiveness' value={therapist.ratings.effectiveness} />
                            <Rating name='Friendliness' value={therapist.ratings.friendliness} />
                            <Rating name='Affordability' value={therapist.ratings.affordability} />
                            <Link className='btn btn-outline-primary mt-4' to={'/therapists/' + therapist.id + '/review'}>Rate this Therapist</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card shadow mb-3">
                {therapist.reviews.map(r => (
                    <Review key={r.id} review={r} />
                ))}
            </div>
        </>
    )
}

const Review = ({ review }) => {
    return (
        <div class="row g-0 py-2" style={{ borderBottom: '1px solid #ddd' }}>
            <div class="col-md-2 mt-4 d-none d-md-block" style={{ textAlign: 'center' }}>
                {review.reccommends
                    ? <>
                        <img className="mb-2" width="60%" src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/thumbs-up-sign_1f44d.png' alt='Thumbs up' />
                        <p className="text-muted">Would reccommend</p>
                    </>
                    : <>
                        <img className="mb-2" width="60%" src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/thumbs-down-sign_1f44e.png' alt='Thumbs down' />
                        <p className="text-muted">Would not<br />reccommend</p>
                    </>
                }
            </div>
            <div class="col-md-10">
                <div class="card-body">
                    <h5>{review.title}</h5>
                    <p>{review.content}</p>
                    <Rating name='Effectiveness' value={review.ratings.effectiveness} />
                    <Rating name='Friendliness' value={review.ratings.friendliness} />
                    <Rating name='Affordability' value={review.ratings.affordability} />
                </div>
            </div>
        </div>
    );
}

export default Therapist;