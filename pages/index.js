import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import TeamList from '../components/TeamList.js';

const Index = (props) => (
  <Layout>
    <h1>NHL Teams</h1>
    {}
    <TeamList teams={props.teams} />
    {/* <ul>
      {props.teams.map((team) => (
        <li key={team.id}>
          <Link as={`/p/${team.id}`} href={`/post?id=${team.id}`}>
            <a>{team.name}</a>
          </Link>
        </li>
      ))}
    </ul> */}
  </Layout>
)

Index.getInitialProps = async function () {
  const resNHL = await fetch('https://statsapi.web.nhl.com/api/v1/teams/')
  const nhlData = await resNHL.json();

  const nhlTeams = nhlData.teams;
  console.log(nhlTeams);
  return {
    teams: nhlTeams
  }
}

export default Index
