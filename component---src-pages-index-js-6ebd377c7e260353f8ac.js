webpackJsonp([35783957827783],{506:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+NC1BcnJvdyBSaWdodDwvdGl0bGU+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iYXJyb3dSaWdodEZpbGwiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMzU1LjAwMDAwMCwgLTk5OC4wMDAwMDApIiBmaWxsPSIjMDAwMDAwIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMzU1LjAwMDAwMCwgOTk4LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTE2LDMyIEM3LjE2MzQ0NCwzMiAxLjA4MjE2NmUtMTUsMjQuODM2NTU2IDAsMTYgQy0xLjA4MjE2NmUtMTUsNy4xNjM0NDQgNy4xNjM0NDQsMS42MjMyNDllLTE1IDE2LDAgQzI0LjgzNjU1NiwtMS42MjMyNDllLTE1IDMyLDcuMTYzNDQ0IDMyLDE2IEMzMiwyMC4yNDM0NjM4IDMwLjMxNDI5MDYsMjQuMzEzMTI2NCAyNy4zMTM3MDg1LDI3LjMxMzcwODUgQzI0LjMxMzEyNjQsMzAuMzE0MjkwNiAyMC4yNDM0NjM4LDMyIDE2LDMyIFogTTE2LDIgQzguMjY4MDEzNSwyIDIsOC4yNjgwMTM1IDIsMTYgQzIsMjMuNzMxOTg2NSA4LjI2ODAxMzUsMzAgMTYsMzAgQzIzLjczMTk4NjUsMzAgMzAsMjMuNzMxOTg2NSAzMCwxNiBDMzAsMTIuMjg2OTY5MSAyOC41MjUwMDQyLDguNzI2MDE0MzYgMjUuODk5NDk0OSw2LjEwMDUwNTA2IEMyMy4yNzM5ODU2LDMuNDc0OTk1NzcgMTkuNzEzMDMwOSwyIDE2LDIgWiIgaWQ9ImFycm93UmlnaHRTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTEzLjcxLDIzLjcxIEwxMi4zLDIyLjMgTDE4LjU5LDE2IEwxMi4yOSw5LjcxIEwxMy43LDguMyBMMjAuNywxNS4zIEMyMS4wODc3MjM2LDE1LjY5MDAzNzUgMjEuMDg3NzIzNiwxNi4zMTk5NjI1IDIwLjcsMTYuNzEgTDEzLjcxLDIzLjcxIFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="},236:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=a(1),M=n(o),i=a(22),r=n(i),s=a(39),l=n(s),c=a(506),u=n(c);t.default=function(e){var t={blog:"Read post",portfolio:"View project"},a=e.post;return M.default.createElement("figure",{className:"Featured container"},M.default.createElement("div",{className:"image"},M.default.createElement(l.default,{sizes:a.frontmatter.cover_image.childImageSharp.sizes})),M.default.createElement("figcaption",null,M.default.createElement(r.default,{to:a.fields.slug,css:{textDecoration:"none",color:"inherit"}},M.default.createElement("h2",{className:"Title"},a.frontmatter.title)),M.default.createElement(r.default,{to:a.fields.slug,className:"Link"},a.frontmatter.section?t[a.frontmatter.section]:"See post",M.default.createElement("img",{src:u.default,className:"icon arrow right"}))))},e.exports=t.default},47:function(e,t){"use strict";e.exports={title:"Kushy Blog",description:"The official blog for Kushy.net",keywords:"kushy, kushy cannabis, kushy 420, dispensary finder, where to find cannabis, where to find weed",url:"http://kushy.net/",image:"http://blog.kushy.net/assets/favicon/android-chrome-512x512.png",logo:"http://blog.kushy.net/assets/favicon/android-chrome-512x512.png",twitter:"@kushyapp",fbAppID:"",postsPerPage:10}},245:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function M(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.query=void 0;var r=a(1),s=n(r),l=a(22),c=n(l),u=a(39),g=(n(u),a(47)),I=(n(g),a(236)),d=(n(I),a(72)),D=n(d),f=function(e){function t(a){o(this,t);var n=M(this,e.call(this,a));return n.state={data:n.props.data},n}return i(t,e),t.prototype.render=function(){var e=this.state.data,t=e.blog;return s.default.createElement("div",{className:"ui container ContentArea"},s.default.createElement("div",{className:"row"},s.default.createElement(D.default,{loop:t.edges}),s.default.createElement("div",{className:"container centered"},s.default.createElement(c.default,{to:"blog",className:"ui button centered inverted red"},"Browse our blog archive"))))},t}(r.Component);t.default=f;t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-index-js-6ebd377c7e260353f8ac.js.map