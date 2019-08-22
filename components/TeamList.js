import styled from 'styled-components'
import Link from 'next/link'
import { useSpring, animated } from 'react-spring'
import ListItem from "../components/ListItem"
import fetch from 'isomorphic-unfetch'


const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(300px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const StyledList = styled.ul`
width: 400px;
  `;

const TeamList = props => {
  console.log(props);
  // const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
  // https://www.sitepoint.com/sort-an-array-of-objects-in-javascript/
return (
<StyledList>
  {props.teams.map((team) => (
    <ListItem key={team.id} id={team.id} teamName={team.name}/>
  ))}
</StyledList>
)}

export default TeamList;

