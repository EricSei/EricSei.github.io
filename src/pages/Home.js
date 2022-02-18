import React from 'react'
import Layout from '../components/Layout';
import '../index.css'
import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import resume from '../assets/AHHPUSEI_RESUME_SWE.pdf'
import {
   
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Segment,
    Sidebar,
    Visibility,
    Button
  } from 'semantic-ui-react'

const Home = ({mobile}) =>{
    return(
        <Layout>
            <Container text  className='bg-gold'>
            <Header
            as='h2'
            content='Eric Sei'
            
            style={{
                fontSize: mobile ? '2em' : '4em',
                fontWeight: 'normal',
                marginBottom: 0,
                marginTop: mobile ? '1.5em' : '3em',
            }}
            />

            <Header
            as='h2'
            content= "Software engineer"
            
            style={{
                fontSize: mobile ? '1.5em' : '1.7em',
                fontWeight: 'normal',
                marginTop: mobile ? '0.5em' : '1.5em',
            }}
            />
            <Button primary floated='right' as='a' target="_blank" href={resume}>
                            <Icon size='large'  name='download' />
                            RESUME
            </Button>
        </Container>
    </Layout>
      
    )
}

const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
      mobile: 0,
      tablet: 768,
      computer: 1024,
    },
  })

Home.propTypes = {
    mobile: PropTypes.bool,
  }


export default Home;