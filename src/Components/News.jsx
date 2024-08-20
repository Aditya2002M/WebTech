import React, { useEffect } from 'react';
import HealthNews from './HealthNews';
import './News.css';

function News() {

    useEffect(() => {
        const handleScroll = () => {
            const cards = document.querySelectorAll('.news-card');
            cards.forEach(card => {
                const cardPosition = card.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (cardPosition < windowHeight - 50 && cardPosition > 0) {
                    card.classList.add('visible');
                } else {
                    card.classList.remove('visible');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="App mt-7">
            <h1 className='font-bold text-lg'>Trending Health News</h1>
            <HealthNews />
        </div>
    );
}

export default News;
