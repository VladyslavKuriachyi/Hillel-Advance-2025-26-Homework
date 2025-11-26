import { useState } from 'react';
import './App.css';

function App() {
    const [count, setCount] = useState({
        smile1: 0,
        smile2: 0,
        smile3: 0,
        smile4: 0,
        smile5: 0
    });

    const [showWinner, setShowWinner] = useState(false); // стан для показу переможця

    const handleClick = (smile) => {
        setCount(prev => ({
            ...prev,
            [smile]: prev[smile] + 1
        }));
    };

    const handleClear = () => {
        setCount({ smile1:0, smile2:0, smile3:0, smile4:0, smile5:0 });
        setShowWinner(false);
    };

    const winner = Object.entries(count).reduce(
        (max, [key, value]) => (value > max.value ? { key, value } : max),
        { key: null, value: -1 }
    );

    return (
        <div className="container">
            <h1>Voting for the best emoji</h1>
            <div className="card" style={{display:'flex', justifyContent:'space-around', fontSize:'2rem'}}>
        <span className="smile-1" onClick={() => handleClick('smile1')} style={{cursor:'pointer', color:'red'}}>
          1 ({count.smile1})
        </span>
                <span className="smile-2" onClick={() => handleClick('smile2')} style={{cursor:'pointer', color:'green'}}>
          2 ({count.smile2})
        </span>
                <span className="smile-3" onClick={() => handleClick('smile3')} style={{cursor:'pointer', color:'yellow'}}>
          3 ({count.smile3})
        </span>
                <span className="smile-4" onClick={() => handleClick('smile4')} style={{cursor:'pointer', color:'darkgrey'}}>
          4 ({count.smile4})
        </span>
                <span className="smile-5" onClick={() => handleClick('smile5')} style={{cursor:'pointer'}}>
          5 ({count.smile5})
        </span>
            </div>

            <div style={{marginTop:'20px'}}>
                <button onClick={() => setShowWinner(true)} style={{border:'2px solid orange', width: '200px'}}>
                    Show winner</button>
            </div>

            {showWinner && (
                <div className="winner" style={{marginTop:'20px', fontSize:'1.5rem', color:'purple'}}>
                    {winner.value > 0
                        ? `Winner: ${winner.key} (${winner.value} голосів)`
                        : 'No votes yet'}
                </div>
            )}

            <div className="clean" style={{marginTop:'20px', }}>
                <button onClick={handleClear} style={{border:'2px solid orange',width: '70px'}}>Clear All</button>
            </div>
        </div>
    );
}

export default App;

