import React from 'react';

const Jumbotron = () => {
    const backgroundImageUrl = 'https://images.unsplash.com/photo-1420161900862-9a86fa1f5c79?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

    return (
        <div className='container mt-5 mb-5'
            style={{
                backgroundImage: `url(${backgroundImageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '20px',
                borderRadius: '5px',
                color: 'white',
                minHeight: '500px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0 0 30px 15px rgba(0, 0, 0, 0.7), inset 0 0 70px 30px rgba(0, 0, 0, 0.9)',
                outline: '15px solid rgba(0, 0, 0, 0.9)'
            }}
        >
            <div className="jumbotron" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: '20px', borderRadius: '15px', textAlign: 'center' }}>
                <h1 className="display-4">Welcome to the World of Music</h1>
                <p className="lead">
                    Dive into the melodies that resonate through time and culture. Discover the rhythm of every beat, and explore the harmonies that touch the soul.
                </p>
                <hr className="my-4" style={{ borderColor: 'white' }} />
                <p>
                    Let music be your guide through emotions and experiences. Experience the power of lyrics and the symphony of sounds that define our lives.
                </p>
                <a className="btn btn-primary btn-lg" href="#" role="button">
                    Learn more
                </a>
            </div>
        </div>
    );
};

export default Jumbotron;

