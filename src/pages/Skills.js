import React, { Component } from 'react';
import Layout from '../components/Layout';

class Skills extends Component {

    constructor(){
        super();
        this.state = {
            sum: 0
        }

        this.add = this.add.bind(this);
    }

    componentDidMount(){
        
    }

    add(sum){
        this.setState(
            state => ({
                sum: this.state.sum + sum
            })
        )
    }

    render(){
        return(
            <Layout>
                Skills
            </Layout>
        )
    }

} 

export default Skills;