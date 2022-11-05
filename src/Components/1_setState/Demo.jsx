import React, { Component } from 'react'

export default class index extends Component {
    state = { count: 0 }

    f1 = () => {

        // this is object setState

        // GET value from state
        // Use setstate to increment
        // setState is async function, the update after setState
        //  it is not gonna reflect the latest change
        // const { count } = this.state


        // // this.setState({ count: count + 1 })
        // // console.log("output", this.state.count);

        // this.setState({ count: count + 1 }, () => {
        //     console.log("output", this.state.count);
        // })

        // this is function setState
        // this.setState(() => {
        //     const { count } = this.state
        //     if (count >= 5) {
        //         return { count: count - 5 }
        //     }
        //     else {
        //         return { count: count + 1 }
        //     }
        // }, () => {
        //     console.log(this.state.count);
        // })

        // this.setState((state, props) => {
        //     console.log(props);
        //     return { count: state.count + props.x }
        // })

        // this.setState(() => { return { count: this.state.count + this.props.x } })
        this.setState(() => ({ count: 99 }))
        // this.setState((state, props) => { return { count: state.count + props.x } })
    }


    render() {
        return (
            <div>
                <h1>Current sum :{this.state.count}</h1>
                <button onClick={this.f1}>Click +1</button>
            </div>
        )
    }
}
