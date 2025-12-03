import React from 'react';

class EmojiButton extends React.Component {
    render() {
        const { label, color, count, onClick } = this.props;

        return (
            <span
                onClick={onClick}
                style={{ cursor: 'pointer', color, fontSize: '2rem' }}
            >
                {label} ({count})
            </span>
        );
    }
}

export default EmojiButton;
