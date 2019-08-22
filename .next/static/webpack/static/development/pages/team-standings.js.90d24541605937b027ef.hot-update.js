webpackHotUpdate("static/development/pages/team-standings.js",{

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/readOnlyError.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/readOnlyError.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _readOnlyError; });
function _readOnlyError(name) {
  throw new Error("\"" + name + "\" is read-only");
}

/***/ }),

/***/ "./pages/team-standings.js":
/*!*********************************!*\
  !*** ./pages/team-standings.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime-corejs2/helpers/esm/readOnlyError.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_TeamList_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/TeamList.js */ "./components/TeamList.js");
/* harmony import */ var _components_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/hooks */ "./components/hooks.js");










var TeamStandings = function TeamStandings(props) {
  var _useFetch = Object(_components_hooks__WEBPACK_IMPORTED_MODULE_7__["useFetch"])("https://statsapi.web.nhl.com/api/v1/teams/"),
      _useFetch2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useFetch, 2),
      data = _useFetch2[0],
      loading = _useFetch2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      state = _useState2[0],
      setstate = _useState2[1];

  var teams = data.teams;
  var standings = [];

  if (!loading) {
    teams.forEach(function (team) {
      // const [currentTeam, nextTeam] = useFetch(`https://statsapi.web.nhl.com/api/v1/teams/${team.id}`)
      // if (!nextTeam) {
      //   console.log(currentTeam)
      // }
      console.log(team);
      teams = (Object(_babel_runtime_corejs2_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__["default"])("teams"), {
        stats: team.id
      });
    });
  }

  console.log(standings);
  return (// <Layout>
    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", null, "NHL Team Standings")
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
//# sourceMappingURL=team-standings.js.90d24541605937b027ef.hot-update.js.map