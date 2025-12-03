import { useState } from 'react';
import './App.css';

import SmileList from '../components/smileList.jsx';
import Winner from '../components/winner.jsx';

function App() {

    const smiles = [
        { key: 'smile1', label: '1', color: 'red' },
        { key: 'smile2', label: '2', color: 'green' },
        { key: 'smile3', label: '3', color: 'yellow' },
        { key: 'smile4', label: '4', color: 'darkgrey' },
        { key: 'smile5', label: '5', color: 'black' }
    ];

    const [count, setCount] = useState({
        smile1: 0,
        smile2: 0,
        smile3: 0,
        smile4: 0,
        smile5: 0
    });

    const [showWinner, setShowWinner] = useState(false);

    const handleVote = (smileKey) => {
        setCount(prev => ({
            ...prev,
            [smileKey]: prev[smileKey] + 1
        }));
    };

    const handleClear = () => {
        setCount({
            smile1: 0,
            smile2: 0,
            smile3: 0,
            smile4: 0,
            smile5: 0
        });
        setShowWinner(false);
    };

    const winner = Object.entries(count).reduce(
        (max, [key, value]) => (value > max.value ? { key, value } : max),
        { key: null, value: -1 }
    );

    return (
        <div className="container">
            <h1>Voting for the best emoji</h1>

            <SmileList smiles={smiles} count={count} onVote={handleVote} />

            <div style={{ marginTop:'20px' }}>
                <button
                    onClick={() => setShowWinner(true)}
                    style={{ border:'2px solid orange', width:'200px' }}
                >
                    Show winner
                </button>
            </div>

            {showWinner && <Winner winner={winner} />}

            <div style={{ marginTop:'20px' }}>
                <button
                    onClick={handleClear}
                    style={{ border:'2px solid orange', width:'70px' }}
                >
                    Clear All
                </button>
            </div>
        </div>
    );
}

export default App;
