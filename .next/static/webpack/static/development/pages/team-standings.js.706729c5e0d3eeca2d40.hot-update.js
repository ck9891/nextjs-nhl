webpackHotUpdate("static/development/pages/team-standings.js",{

/***/ "./pages/team-standings.js":
/*!*********************************!*\
  !*** ./pages/team-standings.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_TeamList_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/TeamList.js */ "./components/TeamList.js");
/* harmony import */ var _components_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/hooks */ "./components/hooks.js");









 // const getStats = (id) => {
//   [teamData, isLoading] = useFetch(`https://statsapi.web.nhl.com/api/v1/teams/${id}`)
//   if (!isLoading) {
//     return teamData
//   } else {
//     return null
//   }
// }

var TeamStandings = function TeamStandings(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("https://statsapi.web.nhl.com/api/v1/teams/"),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1]; // if (setState) {
  // const [data, setTeam] = useFetch(state)


  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    function getData() {
      return _getData.apply(this, arguments);
    }

    function _getData() {
      _getData = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response, json, teams;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()(state);

              case 2:
                response = _context.sent;
                _context.next = 5;
                return response.json();

              case 5:
                json = _context.sent;
                teams = json.teams;
                console.log(json);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _getData.apply(this, arguments);
    }

    getData();
  }, [state]);
  console.log(state); // if (setTeam) {
  //     const allTeams = data.teams
  //   console.log(allTeams)
  //     if (!setState){
  //       allTeams.forEach(team => {
  //         let test = setTeam(`https://statsapi.web.nhl.com/api/v1/teams/${team.id}/stats`)
  //         console.log(team)
  //         console.log()
  //       })
  //     }
  //   }
  // }
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

  return (// <Layout>
    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", null, "NHL Team Standings")
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
//# sourceMappingURL=team-standings.js.706729c5e0d3eeca2d40.hot-update.js.map