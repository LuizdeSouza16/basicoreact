import React , { Component } from "react"


export default class Greetings extends Component {

    state = {
        type: this.props.type,
        name: this.props.name
    }

    setType (e) {
        this.setState({type: e.target.value})
    }

    setName (e) {
        this.setState({name: e.target.value})
    }

    constructor(props) {
        super(props)

        this.setType = this.setType.bind(this)
        this.setName = this.setName.bind(this)
    }


    render() {
        const {type, name} = this.state

        return(
            <div>
                <h1>{type} {name}!</h1>
                <hr />

                <input type='text' placeholder="Tipo..."  value={type}
                    onChange={this.setType}
                />
                <input type='text' placeholder="Nome..."  value={name}
                     onChange={this.setName}
                />
            </div>
        )
    }
}