import React ,{Component} from 'react';
import Article from './Article' 

class AllArticles extends Component {
    render(){
        return this.props.allArticles.map((article) =>(
            <Article key = {article._id} article = {article}/>
        ));
    }
} 

export default AllArticles ;