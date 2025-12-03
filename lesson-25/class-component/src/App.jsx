import React, { Component } from 'react';
import './App.css';


import Winner from "../components/winner.jsx";
import EmojiList from "../components/emojiList.jsx";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: {
                smile1: 0,
                smile2: 0,
                smile3: 0,
                smile4: 0,
                smile5: 0
            },
            showWinner: false
        };
    }

    handleVote = (smile) => {
        this.setState(prev => ({
            count: {
                ...prev.count,
                [smile]: prev.count[smile] + 1
            }
        }));
    };

    handleClear = () => {
        this.setState({
            count: { smile1:0, smile2:0, smile3:0, smile4:0, smile5:0 },
            showWinner: false
        });
    };

    getWinner = () => {
        const { count } = this.state;
        return Object.entries(count).reduce(
            (max, [key, value]) => (value > max.value ? { key, value } : max),
            { key: null, value: -1 }
        );
    };

    render() {
        const { count, showWinner } = this.state;
        const winner = this.getWinner();

        return (
            <div className="container">
                <h1>Voting for the best emoji</h1>

                <EmojiList count={count} onVote={this.handleVote} />

                <div style={{ marginTop:'20px' }}>
                    <button
                        onClick={() => this.setState({ showWinner: true })}
                        style={{ border:'2px solid orange', width:'200px' }}>
                        Show winner
                    </button>
                </div>

                {showWinner && <Winner winner={winner} />}

                <div className="clean" style={{ marginTop:'20px' }}>
                    <button
                        onClick={this.handleClear}
                        style={{ border:'2px solid orange', width:'70px' }}>
                        Clear All
                    </button>
                </div>
            </div>
        );
    }
}

export default App;


