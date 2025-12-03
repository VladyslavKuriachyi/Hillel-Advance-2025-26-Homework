import React from 'react';
import EmojiButton from './emojiButton';

class EmojiList extends React.Component {
    render() {
        const { count, onVote } = this.props;

        const emojis = [
            { key: 'smile1', label: '1', color: 'red' },
            { key: 'smile2', label: '2', color: 'green' },
            { key: 'smile3', label: '3', color: 'yellow' },
            { key: 'smile4', label: '4', color: 'darkgrey' },
            { key: 'smile5', label: '5', color: 'black' }
        ];

        return (
            <div
                className="card"
                style={{ display:'flex', justifyContent:'space-around', fontSize:'2rem' }}
            >
                {emojis.map((e) => (
                    <EmojiButton
                        key={e.key}
                        label={e.label}
                        color={e.color}
                        count={count[e.key]}
                        onClick={() => onVote(e.key)}
                    />
                ))}
            </div>
        );
    }
}

export default EmojiList;
