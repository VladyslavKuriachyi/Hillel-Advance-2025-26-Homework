import React from 'react';
import SmileItem from './smileItem.jsx';

function SmileList({ smiles, count, onVote }) {
    return (
        <div
            className="card"
            style={{ display: 'flex', justifyContent: 'space-around', fontSize: '2rem' }}
        >
            {smiles.map(smile => (
                <SmileItem
                    key={smile.key}
                    label={smile.label}
                    color={smile.color}
                    count={count[smile.key]}
                    onClick={() => onVote(smile.key)}
                />
            ))}
        </div>
    );
}

export default SmileList;
