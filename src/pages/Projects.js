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
                <Item.Image size='medium' centered src={project["url"] }/>
                <Item.Content>
                    <Item.Header as='a'> {project["title"]} </Item.Header>
                    <Item.Description>
                        {project["description"]}
                    </Item.Description>
                    <Item.Extra>
                        <Button primary floated='right' as='a' target="_blank" href={project.source}>
                            <Icon size='large'  name='github' />
                        </Button>
                         <Label> React </Label>
                    </Item.Extra>
                </Item.Content>
              </Item>
            ) 
        })

    return (
        <Layout>
            <Container  >
            <Header as='h1' style={{ margin: '100px 100px'}} className="bg-gold">
                Feature Projects
            </Header>
            <Item.Group  divided style={{ margin: '3em 3em'}}>
                { listProjects }
            </Item.Group>
            </Container>
        </Layout>
    )
}

export default Projects;