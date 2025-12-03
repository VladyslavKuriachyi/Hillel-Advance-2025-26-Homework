import React from 'react';

function Winner({ winner }) {
    return (
        <div
            className="winner"
            style={{ marginTop: '20px', fontSize: '1.5rem', color: 'purple' }}
        >
            {winner.value > 0
                ? `Winner: ${winner.key} (${winner.value} голосів)`
                : 'No votes yet'}
        </div>
    );
}

export default Winner;
