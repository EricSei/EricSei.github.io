import React, { Component } from 'react';
import Layout from '../components/Layout';
import { Container, Image, Item, Button, Icon, Label, Header } from 'semantic-ui-react'

import getSkills from '../data/skills';

class Skills extends Component {
    
    constructor(props){
        super();
        this.state = {
            skills: `${getSkills()}`
        }
    }
    
    componentDidMount(){
        // console.log(getSkills())
        this.getData();
    }

    getData(){
        this.setState({
            skills:  `${getSkills()}`
        })
      }

    skillList =  getSkills().map((skill) =>{
        return(      
            <Item key={skill["id"]}>
              <Item.Image size='medium' centered circular src={skill["url"] }/>
              <Item.Content>
                  <Item.Header as='a'> {skill["title"]} </Item.Header>
                  <Item.Description>
                      {skill["description"]}
                  </Item.Description>
                  <Item.Extra>
                      <Button primary floated='right'>
                          Learn More <Icon big  name='github' />
                      </Button>
                       <Label>Limited</Label>
                  </Item.Extra>
              </Item.Content>
            </Item>
          ) 
    })

    render(){
        return(
           
            <Layout>
                {
                <Container >
                    <Header as='h1' style={{ margin: '100px 100px'}} className="bg-gold">
                         Skills
                    </Header>
                    <Item.Group >
                        { this.skillList  }
                    </Item.Group>
                </Container> 
                }
                
            </Layout>
        )
    }

} 

export default Skills;