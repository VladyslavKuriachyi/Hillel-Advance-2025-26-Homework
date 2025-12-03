import React from 'react';

class Winner extends React.Component {
    render() {
        const { winner } = this.props;

        return (
            <div
                className="winner"
                style={{ marginTop:'20px', fontSize:'1.5rem', color:'purple' }}
            >
                {winner.value > 0
                    ? `Winner: ${winner.key} (${winner.value} голосів)`
                    : 'No votes yet'}
            </div>
        );
    }
}

export default Winner;
