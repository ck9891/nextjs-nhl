import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'

const Post = props => (
  <Layout>
    <h1>{props.nhlTeam[0].name}</h1>
    <ul>
      {props.teamRoster.map((player) => (
        <li key={player.person.id}>
          {/* <Link as={`/p/${player.id}`} href={`/post?id=${player.id}`}> */}
          <span>{player.person.fullName} <strong>{player.jerseyNumber}</strong></span>{console.log(player.position)}
          {/* </Link> */}
        </li>
      ))}
    </ul>
  </Layout>
)

Post.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch(`https://statsapi.web.nhl.com/api/v1/teams/${id}`)
  const team = await res.json()
  const resTeam = await fetch(`https://statsapi.web.nhl.com/api/v1/teams/${id}/roster`);
  const roster = await resTeam.json();
  // console.log(roster)
  const teamRoster = roster.roster;
  const nhlTeam = team.teams;
  return { nhlTeam, teamRoster }
}

export default Post
