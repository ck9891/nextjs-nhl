import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import styled from 'styled-components'
import Layout from '../components/MyLayout.js'
import Player from '../components/Player.js'

const PostContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 15px;
`;

const SinglePlayer = props => (
  <Layout>
    <h1></h1>
    <PostContainer>

    </PostContainer>
  </Layout>
)

SinglePlayer.getInitialProps = async function (context) {
  const { id } = context.query
  console.log(context);
  const res = await fetch(`https://statsapi.web.nhl.com/api/v1/people/${id}`)
  const player = await res.json()

  console.log('test')
  return { player }
}

export default SinglePlayer
