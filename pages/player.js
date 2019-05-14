import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import styled from 'styled-components'
import Layout from '../components/MyLayout.js'

const PostContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 15px;
`;

const SinglePlayer = props => (
  <Layout>

    <h1>{props.player.people[0].fullName}</h1>
    <p>Current Team: {props.player.people[0].currentTeam.name}</p>
    <p>Nationality: {props.player.people[0].nationality}</p>
  </Layout>
)

SinglePlayer.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch(`https://statsapi.web.nhl.com/api/v1/people/${id}`)
  const player = await res.json()
  const resPlayerStats = await fetch(`https://statsapi.web.nhl.com/api/v1/people/${id}/stats?stats=statsSingleSeason`)
  const playerStats = await resPlayerStats.json();

  console.log(playerStats.stats[0].splits)
  return { player }
}

export default SinglePlayer
