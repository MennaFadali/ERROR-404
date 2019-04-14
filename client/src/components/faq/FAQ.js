import React, { Component } from "react";
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import FAQs from "./FAQs";
import AddFaq from "./AddFaq";

import axios from "axios";

class FAQ extends Component {
  state = {
    FAQs: []
  };
  componentDidMount() {
    axios
      .get("http://localhost:5000/api/FAQs")
      .then(res => this.setState({ FAQs: res.data.data }));
  }
  delfaq = id => {
    axios
      .delete("http://localhost:5000/api/FAQs/" + id)
      .then(res =>
        this.setState({
          FAQs: [...this.state.FAQs.filter(faq => faq._id !== id)]
        })
      );
  };
  updatefaq = (id, question, answer) => {
    console.log(id);
    console.log(question);
    console.log(answer);
    axios
      .put("http://localhost:5000/api/FAQs/edit/" + id, {
        answer: answer,
        question: question
      })
      .then(res => {
        axios
          .get("http://localhost:5000/api/FAQs")
          .then(res => this.setState({ FAQs: res.data.data }));
        // const temp={
        //   _id:id,
        //   question:question,
        //   answer:answer
        // }
        // this.setState({ FAQs: [...this.state.FAQs.filter(faq => faq._id !== id)] })
        // this.setState({ FAQs: [...this.state.FAQs,temp] })
      });
  };
  addFAQ = (question, answer) => {
    axios
      .post("http://localhost:5000/api/FAQs/add", {
        question,
        answer
      })
      .then(res =>
        this.setState({ FAQs: [...this.state.FAQs, res.data.data] })
      );
  };
  render() {
    return (
      <div className="FAQ">
        <div className="container">
          <h1>FAQs</h1>
          <AddFaq addFAQ={this.addFAQ} />
          <FAQs
            FAQs={this.state.FAQs}
            delfaq={this.delfaq}
            updatefaq={this.updatefaq}
          />
        </div>
      </div>
    );
  }
}

export default FAQ;
