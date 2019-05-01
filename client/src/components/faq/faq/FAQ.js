import React, { Component } from 'react';
import FAQUs from './FAQUs';
import FAQs from './FAQs';
import AddFaq from './AddFaq';
import NavbarSignedIn from "../../layout/NavbarSignedIn";
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import Navbar from "../../layout/Navbar";

import axios from 'axios';
const mapStateToProps = state => {
  return { token: state.token, usertype: state.usertype, id: state.id };
};

class FAQ extends Component {
  state={
      FAQs:[]
  }
  
  handleClick = event => {
    let path = `/adminquestions`;
    this.props.history.push(path);
   
  };
  handleClick1 =() => {
    this.props.history.push("/signin");
 };
  componentDidMount()  {
    axios.get('/api/FAQs')
    .then(res => this.setState({ FAQs: res.data.data }))
  }
  delfaq = (id) => {
    axios.delete('/api/FAQs/'+id)
      .then(res => this.setState({ FAQs: [...this.state.FAQs.filter(faq => faq._id !== id)] }));
 
}
updatefaq = (id,question,answer) => {
   axios.put('/api/FAQs/edit/'+id,
  {
    "answer":answer,
    "question":question
  })
  .then(res => {
    axios.get('/api/FAQs')
    .then(res => this.setState({ FAQs: res.data.data }))
  
  });

}
  addFAQ = (question,answer) => {
    axios.post('/api/FAQs/add', {
      question,
      answer
    })
      .then(res => this.setState({ FAQs: [...this.state.FAQs, res.data.data] }));
  }
  render() {
    const { classes } = this.props;

    if (this.props.token == null) {
      return (
        <div>
        <Navbar/>
        <div className="FAQU">
        <div className="container">

                <h1 style={{paddingRight:'500px',boxAlign:"inline",color:"#3e3939bf",fontSize:"5000px"}} >FAQs </h1>
                <FAQUs  FAQs={this.state.FAQs}  />
                <br></br>
                <button
                  variant="contained"
                  onClick={this.handleClick1}
                  className="btn"
                  style={{backgroundColor:"#70c7be"}}
                >
                  Sign In
                </button>
                </div>
          </div>
        </div>
      );
    }
    else{
    return (
     
        <div className="FAQ">
        <NavbarSignedIn />

          <div className="container">
            <h1 style={{color:"#3e3939bf"}}>FAQs <Button variant="contained"  style={edit} onClick={this.handleClick}>
            Questions     
            </Button></h1>      
            <AddFaq addFAQ={this.addFAQ} />
            <br></br>
            <FAQs  FAQs={this.state.FAQs} delfaq={this.delfaq} updatefaq={this.updatefaq} />
             
          </div>  
        </div>
   
    );
    }
  }
}
const edit={
  backgroundColor:'#5ec0b6' ,
  paddingBottom:'5px',
  marginLeft:"1000px"
  
}
const Form = connect(
  mapStateToProps,
  null
)((FAQ));
export default Form;
