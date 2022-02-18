import React, { useEffect, useState } from 'react';
import { Container, Image, Item, Button, Icon, Label, Header } from 'semantic-ui-react'

import Layout from '../components/Layout';
import getProjects from '../data/projects';

const Projects = () =>{
  
    const [projects , setProjects ] = useState(null);

    useEffect( () => {
       
        setProjects(getProjects());
    },[])

    const listProjects = 
        projects && projects.map((project)=> {
        return(      
              <Item key={project.toString()}>
                <Item.Image size='medium' centered circular src={project["url"] }/>
                <Item.Content>
                    <Item.Header as='a'> {project["title"]} </Item.Header>
                    <Item.Description>
                        {project["description"]}
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

    return (
        <Layout>
            <Container >
            <Header as='h1'>Feature Projects</Header>
            <Item.Group >
                { listProjects }
            </Item.Group>
            </Container>
        </Layout>
    )
}

export default Projects;