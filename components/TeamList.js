import styled from 'styled-components'
import Link from 'next/link'
import { useSpring, animated } from 'react-spring'

import fetch from 'isomorphic-unfetch'


const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(300px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const StyledList = styled.ul`
width: 400px;
  li {
    list-style: none;
    margin: 25px;
    a {
      text-decoration: none;

      display:flex;
      align-items: center;

      span.team-name {
        font-size: 1.25rem;
        font-family: Roboto;
        padding: 7.5px 15px 7.5px 35px;
        box-shadow: 1px 1px 1px #ccc;
        background: #cccccc7a;
        color: #333;
        :after {
          content: ' ';
          height:100%;
          border-right: 1px solid #000;
        }
      }
        div {
          border-radius: 100%;
          border: 3px solid #333;
          background-color: #eee;
           height:50px;
            width:50px;
            position: relative;
            left:25px;
          img {
            max-width:50px;
            height: 50px;
            display:block;
          }
        }

    }
  }
`;
const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

const TeamList = props => (

<StyledList>
  {props.teams.map((team) => (

    <animated.li
      key={team.id}

      >
      <Link as={`/p/${team.id}`} href={`/post?id=${team.id}`}>
        <a>
          <div>
            <img src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${team.id}.svg`} ></img>
          </div>
          <span className="team-name">
          {team.name}
          </span>
        </a>
      </Link>
    </li>
  ))}
</StyledList>
)

export default TeamList;

