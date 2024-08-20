import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsCard from './NewsCard';

const HealthNews = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get(
                    `https://newsapi.org/v2/top-headlines?category=health&country=us&apiKey=ac6929e08faf4898814e7610fdb0c80c`
                );
                setArticles(response.data.articles);
            } catch (error) {
                setError('Error fetching news');
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="health-news">
            {articles.map((article, index) => (
                <NewsCard key={index} article={article} />
            ))}
        </div>
    );
};

export default HealthNews;
