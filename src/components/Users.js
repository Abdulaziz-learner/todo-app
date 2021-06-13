import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    CardText,
    CardImg
} from 'reactstrap';
import Image from '../media/profile.png';

export default class Users extends Component {
    constructor(){
        super();
        this.state = {
            users: [
                {id: 1, name: 'Ali'},
                {id: 2, name: 'Abdurohman'},
                {id: 3, name: 'Sobit'},
                {id: 4, name: 'Huzayl'},
                {id: 5, name: 'Muhammad'},
                {id: 6, name: 'Umar'},
                {id: 7, name: 'Usmon'},
                {id: 8, name: 'Sa`ad'},
                {id: 9, name: 'Said'},
                {id: 10, name: 'Muoviya'},
                {id: 11, name: 'Salmon'},
                {id: 12, name: 'Abdulloh'},
                {id: 13, name: 'Abdulhodiy'},
                {id: 14, name: 'Abdulboriy'},
                {id: 15, name: 'Abdussamad'},
            ]
        }
    }


    Show = (index, user) => {
        alert("Ismi: " + user.name + ", Idsi: " + user.id);
    }

    render() {
        return (
            <>
                <Container>
                    <Row>
                        {
                            this.state.users.map((user, index)=>{
                                return (
                                    <Col md={{ size: 3 }} className='py-3'>
                                        <Card onClick={()=> this.Show(index, user)} className='px-3 my-3 h-100 py-5 text-center'>
                                            <CardImg className='w-25 m-auto' src={Image} alt='HUllas' />
                                            <CardBody>
                                                <CardTitle className='titlee'> {user.name}</CardTitle>
                                                <CardText className='titlee'> {user.id}</CardText>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Container>
            </>
        )
    }
}
