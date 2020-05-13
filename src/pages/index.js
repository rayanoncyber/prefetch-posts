import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import styled from 'styled-components';

export const query = graphql`
{
    allPost {
      edges {
        node {
          title
          text
          id
        }
      }
    }
  }
`

const IndexPage = ({data}) => {
  console.log(data)
  
  return <Layout>
    {
      data.allPost.edges.map(({node}) => (
        <Card> 
          <Content>
            <Title> {node.title}</Title>
            <Text> {node.text}</Text>
          </Content>
        </Card>
      ))
    }
  </Layout>
}

const Card = styled.div`
    width:100%;
    min-height:100px;
    padding: 30px 20px 10px 20px;
    box-shadow: 0px 1px 1px rgba(10,10,10,0.1), 0px 1px 2px rgba(10,10,10,0.1), 0px 0px 1px rgba(10,10,10,0.8);
    border-radius: 3px;
    margin-bottom: 12px;
    background: white;
    cursor: pointer;
    font-family: Roboto;
    flex:1;
    display: flex;
`

const Content = styled.div`
  flex: 20;
  padding: 0 20px;
`

const Title = styled.h1`
    font-size: 32px;
    margin: 0 0 14px 0;
    color: black;
`

const Text = styled.p`
    font-size: 18px;
    color: black;
`

export default IndexPage
