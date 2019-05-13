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

const Post = props => (
  <Layout>
    <h1>{props.nhlTeam[0].name}</h1>
    <PostContainer>
        {props.teamRoster.map((player, k) => (
          <Player playerId={player.id} playerName={player.person.fullName} playerNumber={player.jerseyNumber} playerPosition={player.position.code} />
        ))}
    </PostContainer>
  </Layout>
)

Post.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch(`https://statsapi.web.nhl.com/api/v1/teams/${id}`)
  const team = await res.json()
  const resTeam = await fetch(`https://statsapi.web.nhl.com/api/v1/teams/${id}/roster`);
  const roster = await resTeam.json();
  const teamRoster = roster.roster;
  const nhlTeam = team.teams;
  return { nhlTeam, teamRoster }
}

export default Post
