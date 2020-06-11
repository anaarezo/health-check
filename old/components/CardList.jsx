import React, { Component } from 'react'
import { Card, CardColumns } from './style';

// import Card from 'react-bootstrap/Card'

// import CardColumns from 'react-bootstrap/CardColumns'

import './ownStyle.css'


import data from  '../data/data.json'



              const  newdata= data.map( ( data) =>{
                  return  (
                    
                    <Card key= {data.id}>
                      <Card.Body>
                        <Card.Title>{ data.name}</Card.Title>
                        <Card.Text>
                              {data.desc}
                        </Card.Text>

                        <a className="btn-primary"
                          href={data.url} 
                          target="_blank"
                          rel=" noopener noreferrer"
                           >
                          Download
                        </a>

                      </Card.Body>
                    </Card> 
                  
                  )
                }
              )




export default class CardList extends Component {
    render() {
        return (
            <CardColumns className=" m-3 p-3 owncard ">  {newdata}  </CardColumns>
           
        )
    }
}