import React from 'react';

function SmileItem({ label, color, count, onClick }) {
    return (
        <span
            onClick={onClick}
            style={{ cursor: 'pointer', color, fontSize: '2rem' }}
        >
            {label} ({count})
        </span>
    );
}

export default SmileItem;
