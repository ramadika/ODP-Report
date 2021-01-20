// Dependencies
import React,{Component} from 'react';
// import Axios from 'axios';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Redirect } from 'react-router-dom'
// import { NavLink } from 'react-router-dom'
import ImgBG from 'assets/thomas-jensen-h3vT1Kp0FxA-unsplash.jpg'
import { PostData } from 'components/Login-Page/Post-Data'
// Internals
import 'components/Login-Page/index.css'
// import {AppContext} from 'components/Context';

export default class Index extends Component{
    // static contextType = AppContext;   
    constructor(){
        super();
        this.state = {
            Username: '',
            Password: '',
            redirectToReferrer: false
        };
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    
    // insertUser = (event) => {
    //     event.preventDefault();
    //     event.persist();
    //     Axios.post('http://localhost/backend-app/login.php',{
    //         user_name:this.username.value,
    //         pass_word:this.password.value 
    //     })
    //     .then(function ({data}) {
    //         if(data.success === 1){
                
    //             this.context.addNewUser(data.id,this.username.value,this.useremail.value);
    //             event.target.reset();
    //             alert(data.msg);
    //         }
    //         else{
    //             alert(data.msg);
    //         }
    //     }.bind(this))
    //     .catch(function (error) {
    //     console.log(error);
    //     });

    // }
    login() {
        // fetch('http://localhost/backend-app/login.php', {
        //     method: 'POST',
        //     body: JSON.stringify(this.state)
        //     // Username: [this.state.Username],
        //     // Password: [this.state.Password] 
        // })
        // .then(response => {
        //     response.json().then(function(data) {
        //         // if(data.success === 1){
        //         //     this.setState({
        //         //         Allodp:data.odp.reverse(),
        //         //     });
        //         // } 
        //         // else{
        //         //     this.context.post_show(false);
        //         // }  
        //         if(this.state.Username && this.state.Password){
        //             let responseJson = data;
        //             // alert(responseJson);
        //             // console.log(this.state);
        //             if(responseJson.user){
        //                 sessionStorage.setItem('user',JSON.stringify(responseJson));
        //                 this.setState({redirectToReferrer: true});
        //             }
        //         }             
        //     }.bind(this));
        // })
        // .catch(error => {
        //     console.log(error);
        // });
        if(this.state.Username && this.state.Password){ 
            PostData(this.state).then((result) => {
                let responseJson = result;
                console.log(result);
                if(responseJson.user){
                    alert(responseJson.msg);  
                    sessionStorage.setItem('user',JSON.stringify(responseJson));
                    this.setState({
                        redirectToReferrer: true
                    });
                }else {
                    alert(responseJson.msg);
                }
            });
        }
    }

    onChange(e){
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    render(){

        if (this.state.redirectToReferrer || sessionStorage.getItem('user')){
            return (
                <Redirect to={'/HomePage'}/>
            )
        }
        
        if (this.state.redirectToReferrer || sessionStorage.getItem('user')){
            return (
                <Redirect to={'/HomePage'}/>
            )
        }
        
    //     if (this.state.redirectToReferrer) {
    //         return (<Redirect to={'/HomePage'}/>)
    //     }
      
    //    if(sessionStorage.getItem('user')){
    //      return (<Redirect to={'/HomePage'}/>)
    //    }

        return(
            // <form onSubmit={this.insertUser}>
                <div className="fullPage">
                    <img src={ImgBG} alt="BG" width="100" className="imgBG"></img>
                    <Container className="containLogin">
                        <Row className="Login-custom">
                            <Col className="wlcmCol">
                                <h2>Hey You!</h2>
                                <h6>Enter your account and Make changes for your company</h6>
                                <h4>YourThings</h4>
                            </Col>
                            <Col className="lgnCol text-left">
                                <h2 className="mb-3">Login</h2>
                                <div className="inputLogin-custom">
                                    <h6 className="usPsLog">Username</h6>
                                    <input type="text" name="Username" onChange={this.onChange} className="form-control" placeholder="Username"/>
                                    {/* <input type="text" name="username" ref={(val) => this.username = val} className="form-control" placeholder="Username"/> */}
                                    <h6 className="usPsLog">Password</h6>
                                    <input type="password" name="Password" onChange={this.onChange} className="form-control" placeholder="Password"/>
                                    {/* <input type="password" name="password" ref={(val) => this.password = val} className="form-control" placeholder="Password"/> */}
                                    <input className=" btnLogin-custom mb-5" type="submit" value="Sign in" onClick={this.login}></input>
                                    {/* <input className=" btnLogin-custom mb-5" type="button" value="Sign in" onClick={() => History.push('/overview')}></input> */}
                                </div>
                                {/* <NavLink to="/HomePage"><button className="btnLogin-custom mb-5">Sign in</button></NavLink> */}
                            </Col>
                        </Row>
                    </Container>
                </div>
            // </form>        
        );
    }
}