import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
    return (
        <div>
            <Navbar />
            <main>
                <h1>Welcome to the UofA Campus Navigation App</h1>
                <p>Your guide to navigating the campus efficiently.</p>
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;