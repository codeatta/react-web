import React from  'react';
import { Segment, Header, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

function Home(){
    return(
        <Segment color='green'>
            <Header as='h1' color='green' textAlign='center'>Home</Header>
            <Header as='h3' textAlign='center'>
                <Icon name='check circle' color='green'/>
                Selamat Datang
            </Header>
            <Button animated='fade' color='red' as={Link} to='/register' fluid>
                <Button.Content visible>Keluar</Button.Content>
                    <Button.Content hidden>
                        <Icon name='log out'/>
                    </Button.Content>
            </Button>
        </Segment>
    );
}

export default Home;