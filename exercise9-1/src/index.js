//all of this is in client side
//universe select list
import React from 'react';
import ReactDOM from 'react-dom';

const PROVINCES1 = [{
    label: "Quebec",
    value: "1"
    }, {
    label: "Ontario",
    value: "2"
    }, {
    label: "New Brunswick",
    value: "3"
    }, {
    label: "Nova Scotia",
    value: "4"
    }]

//Universal Radio List
class RadioList extends React.Component{
    constructor(props){
        super(props)
    }

    render(){

        const option_list=[]
        for(const [index, one_item] of this.props.options.entries()){
        option_list.push(<span><input name = {this.props.name} type="radio" value={one_item.value}/> {one_item.label}<br/></span>)
        }


        return(
        <fieldset>
            <legend>{this.props.text}</legend>
            {option_list}
        </fieldset>
        )
    }
}

//parameters to send
ReactDOM.render(<RadioList name="province_selected" text="Select a Province" id = "province_radio_list" options={PROVINCES1} />, document.getElementById('province_radio'));



const OPTIONS = [{
    label: "Afghanistan",
    value: "1"
    }, {
    label: "South Africa",
    value: "2"
    }, {
    label: "Albania",
    value: "3"
    }, {
    label: "Algeria",
    value: "4"
    }]



class SelectList extends React.Component {
    constructor(props){
        super(props)
    }

    // build the list of options
    render(){

        console.log(this.props)
        console.log(this.props.options)

        //build option list

        const option_list=[]

        for(const [index, one_item] of this.props.options.entries()){
            option_list.push(<option value={one_item.value}>{one_item.label}</option>)
        }

        return(
            <div>
                <label>{this.props.text}</label>
                <select name={this.props.name} id={this.props.id}>
                    {option_list}
                </select>
            </div>
        )
    }
}


ReactDOM.render(<SelectList name="country" text="Select a country" id = "country_div" options={OPTIONS} />, document.getElementById('root'));

//list of provinces

const PROVINCES = [{
    label: "Quebec",
    value: "1"
    }, {
    label: "Ontario",
    value: "2"
    }, {
    label: "New Brunswick",
    value: "3"
    }, {
    label: "Nova Scotia",
    value: "4"
    }]

ReactDOM.render(<SelectList name="province" text="Select a province" id = "province_div" options={PROVINCES}/>, document.getElementById('province'))

console.log("*******************************************")

/*
//list of titles

const TITLES = [{
    label: 'Duke',
    number: 0
    }, {
    label: 'Duchess',
    number: 1
    }, {
    label: 'Marquis',
    number: 2
    }, {
    label: 'Marquise',
    number: 3
    }, {
    label: 'Count',
    number: 4
    }, {
    label: 'Countess',
    number: 5
    }]


class RadioButton extends React.Component {
    constructor(props){
        super(props)
    }

    // build the list of options
    render(){

        console.log(this.props)
        console.log(this.props.options)

        //build option list

        const option_list=[]

        for(const [index, one_item] of this.props.options.entries()){
        option_list.push(<div><input type="radio" id={one_item.name} value={one_item.value}/>{one_item.label}</div>)
        }

        return(
            <div>
                <label>{this.props.text}</label>
                <fieldset>
                    <legend>{this.props.title}</legend>
                    {option_list}
                </fieldset>
            </div>
        )
    }
}

ReactDOM.render(<RadioButton name="country" title="Title" id = "country_div" options={TITLES} />, document.getElementById('title'));

*/
