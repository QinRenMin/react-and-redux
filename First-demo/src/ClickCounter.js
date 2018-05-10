import React,{Component } from 'react';

const style = {

    margin: '20px',
    color:'green'

};
class ClickCounter extends Component {

    constructor(props) {
        super(props);
        this.onClickButton1 = this.onClickButton1.bind(this);
        this.onClickButton2 = this.onClickButton2.bind(this);
        this.state = {count:props.value};
    }

    onClickButton1() {
        this.setState({count:this.state.count + 1});
    }
    onClickButton2() {
        this.setState({count:this.state.count-1});
    }

    render() {
        return(
            <div>
                <button onClick={this.onClickButton1} style={style}> Click Me Make It Increase</button>
                    <br/>
                <button onClick={this.onClickButton2} style={style}> Click Me Make It Decrease</button>
                 <div>
                     Click Count : {this.state.count}
                 </div>
            </div>

        );
    }
}
ClickCounter.defaultProps = {value:1};
export default ClickCounter;