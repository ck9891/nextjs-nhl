webpackHotUpdate("static/development/pages/team-standings.js",{

/***/ "./pages/team-standings.js":
/*!*********************************!*\
  !*** ./pages/team-standings.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_TeamList_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/TeamList.js */ "./components/TeamList.js");
/* harmony import */ var _components_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/hooks */ "./components/hooks.js");







 // const getStats = (id) => {
//   [teamData, isLoading] = useFetch(`https://statsapi.web.nhl.com/api/v1/teams/${id}`)
//   if (!isLoading) {
//     return teamData
//   } else {
//     return null
//   }
// }

var TeamStandings = function TeamStandings(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("https://statsapi.web.nhl.com/api/v1/teams/"),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  if (setState) {
    var _useFetch = Object(_components_hooks__WEBPACK_IMPORTED_MODULE_6__["useFetch"])(state),
        _useFetch2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useFetch, 2),
        data = _useFetch2[0],
        setTeam = _useFetch2[1];

    if (setTeam) {
      console.log(data.teams);
      var allTeams = data.teams;

      if (!setTeam) {
        allTeams.forEach(function (team) {
          var test = setTeam("https://statsapi.web.nhl.com/api/v1/teams/".concat(team.id, "/stats"));
          console.log(team);
          console.log();
        });
      }
    }
  } // const teams = data.teams
  // let standings = [];
  // if (!setState) {
  //   console.log(data)
  //   teams.forEach(team => {
  //     // const [currentTeam, nextTeam] = useFetch(`https://statsapi.web.nhl.com/api/v1/teams/${team.id}`)
  //     // if (!nextTeam) {
  //     //   console.log(currentTeam)
  //     // }
  //     // let standingsData = getStats(team.id)
  //     // console.log(standingsData)
  //     // console.log(team)
  //      standings.push( {
  //       id: team.id,
  //       name: team.name,
  //     })
  //   });
  // }
  // console.log(standings)


  return (// <Layout>
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "NHL Team Standings")
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

  );
};

/* harmony default export */ __webpack_exports__["default"] = (TeamStandings);

/***/ })

})
//# sourceMappingURL=team-standings.js.b83aeea1da13d8e85d7c.hot-update.js.map