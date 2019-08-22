import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import TeamList from '../components/TeamList.js';
import {useFetch} from '../components/hooks'
import {useState, useEffect} from 'react'

// const getStats = (id) => {
//   [teamData, isLoading] = useFetch(`https://statsapi.web.nhl.com/api/v1/teams/${id}`)
//   if (!isLoading) {
//     return teamData
//   } else {
//     return null
//   }
// }

const TeamStandings = (props) => {
  const [state, setState] = useState(`https://statsapi.web.nhl.com/api/v1/teams/`)

  // if (setState) {
  // const [data, setTeam] = useFetch(state)

  useEffect(() => {
    async function getData() {
    const response = await fetch(state);
    const json = await response.json();
    const teams = json.teams
    let teamStats = []
      console.log(teams)
      teams.forEach(async element => {
        let res = await fetch(`https://statsapi.web.nhl.com/api/v1/teams/${element.id}/stats`)
        let j = await res.json()
        let stats = j.stats[0].splits[0]
        teamStats.push({
          stats: stats.stat,
          team: stats.team
        })
      });
    setState(teamStats)
    // console.log(json)
    } getData()

  }, [])
  console.log(state)
//  console.log(teams)
  // const teams = json.teams
  // let standings = [];
  // if (!setTeam) {
  //   console.log(json)
  //   teams.forEach(team => {
  //     // const [currentTeam, nextTeam] = useFetch(`https://statsapi.web.nhl.com/api/v1/teams/${team.id}`)
  //     // if (!nextTeam) {
  //     //   console.log(currentTeam)
  //     // }
  //     // let standingsData = getStats(team.id)
  //     // console.log(standingsData)
  //     // console.log(team)
  //     setTeam(`https://statsapi.web.nhl.com/api/v1/teams/${team.id}/stats`)
  //      standings.push( {
  //       id: team.id,
  //       name: team.name,
  //     })
  //   });
  // }
  // console.log(standings)
  return (
  // <Layout>
      <h1>NHL Team Standings</h1>
      /* <TeamList teams={props.teams} />
      if (!loading) {
      <ul>
        {data.map((team) => (
          <li key={team.id}>
            <Link as={`/p/${team.id}`} href={`/post?id=${team.id}`}>
              <a>{team.name}</a>
            </Link>
          </li>
        ))}
      </ul>
      }
    </Layout> */
    )
  }

export default TeamStandings
