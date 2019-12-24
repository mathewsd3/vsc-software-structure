import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/*
var Users_Array = [
    {id:0,username:'kllk',password:'hkhkh'},
    {id:1,username:'lapointe',password:'etetetetw'},
    {id:2,username:'mklm',password:'gg66gg6'},
    {id:3,username:'sdsd',password:'j8j8j8j'},
    {id:4,username:'kiki',password:'u8u8u'}
]
*/

// using axios see https://github.com/axios/axios

const axios = require('axios');

var Users_Array=[]

// user weather api

// Make a request for a user with a given ID
axios.get('http://localhost:3001/users')
  .then(function (response) {
    // handle success
    console.log(response);
    Users_Array =response.data;
    console.log(Users_Array)
    ReactDOM.render(<Users />, document.getElementById('root'));

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
    console.log("Request was sent, some response received!")
  });


// Make a request for a user with a given ID
axios.get('http://localhost:3001/users')
  .then(function (response) {
    // handle success
    console.log(response);
    Users_Array =response.data;
    console.log(Users_Array)
    ReactDOM.render(<Users />, document.getElementById('root'));

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
    console.log("Request was sent, some response received!")
  });



class Users extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            index:0,
            user_count:Users_Array.length, // number of users in the array
            id: Users_Array[0].id,
            username: Users_Array[0].username,
            password: Users_Array[0].password,
          };
    }


    //prevUser
    prevUser = () => {
            console.log(this.state.user_count)
            console.log(this.state.index)
            if(this.state.index>1)
            {
                this.setState({index:this.state.index-1})
                this.setState({id:  Users_Array[this.state.index].id});
                this.setState({username: Users_Array[this.state.index].username});
                this.setState({password: Users_Array[this.state.index].password});
            }
      }
    //nextUser
    nextUser = () => {
            console.log(this.state.user_count)
            console.log(this.state.index)
            if(this.state.index < this.state.user_count-1)
            {
                this.setState({index:this.state.index+1})
                this.setState({id:  Users_Array[this.state.index].id});
                this.setState({username: Users_Array[this.state.index].username});
                this.setState({password: Users_Array[this.state.index].password});
            }
      }

    render(){
        return(
            <div>
                id {this.state.id}<br/>
                username {this.state.username}<br/>
                password {this.state.password}<br/>
                <button type="button" onClick={this.prevUser} >Previous User</button>
                <button type="button" onClick={this.nextUser} >Next User</button>
            </div>
        )
    }
}

//ReactDOM.render(<RadioList name="province_selected" text="Select a Province" id = "province_radio_list" options={PROVINCES1} />, document.getElementById('province_radio'));


//ReactDOM.render(<Users />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
