import React from 'react';
import Board from '../board/Board';
import './style.css';

class Container extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            color: "#000000",
            size: "5",
            tool: "draw", 
        };
    }

    changeColor(params) {
        this.setState({
            color: params.target.value,
            tool: "draw", 
        });
    }

    changeSize(params) {
        this.setState({
            size: params.target.value
        });
    }

    changeToEraser = () => {
        this.setState({
            color: "#FFFFFF", 
            tool: "erase", 
        });
    }

    
    getCursorStyle = () => {
        switch (this.state.tool) {
            case "draw":
                return { cursor: `url('path/to/pencil.cur'), auto` }; // Update path accordingly
            case "erase":
                return { cursor: `url('path/to/eraser.cur'), auto` }; // Update path accordingly
            default:
                return {};
        }
    }
    
    render() {
        
        const boardStyle = this.getCursorStyle();

        return (
            <div className="container">
                <div className="tools-section">
                    <div className="color-picker-container">
                        Select Brush Color : &nbsp; 
                        <input type="color" value={this.state.color} onChange={this.changeColor.bind(this)}/>
                    </div>

                    <div className="brushsize-container">
                        Select Brush Size : &nbsp; 
                        <select value={this.state.size} onChange={this.changeSize.bind(this)}>
                            <option> 5 </option>
                            <option> 10 </option>
                            <option> 15 </option>
                            <option> 20 </option>
                            <option> 25 </option>
                            <option> 30 </option>
                        </select>

                        <button onClick={this.changeToEraser}>Eraser</button>
                    </div>
                </div>

                <div className="board-container" style={boardStyle}>
                    <Board color={this.state.color} size={this.state.size} />
                </div>
            </div>
        );
    }
}

export default Container;
