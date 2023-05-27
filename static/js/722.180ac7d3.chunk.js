"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[722],{722:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var r,o,i,a,s,p,c=t(439),d=t(87),l=t(689),u=t(791),h=t(910),x=t(168),g=t(686),f=g.Z.form(r||(r=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 40px;\n  margin-top: 20px;\n"]))),m=g.Z.input(o||(o=(0,x.Z)(["\n  width: 355px;\n  height: 30px;\n  border-radius: 5px;\n  border: none;\n  padding: 5px 15px;\n  margin-right: 10px;\n  font-size: 16px;\n  line-height: 1.5;\n  color: #e0e1dd;\n  background-color: #09131d;\n  outline: none;\n  &:focus {\n    box-shadow: 0 0 4px 0px #415a77;\n  }\n"]))),b=g.Z.button(i||(i=(0,x.Z)(["\n  width: 100px;\n  height: 40px;\n  border-radius: 5px;\n  border: none;\n  padding: 0;\n  font-size: 16px;\n  line-height: 1.5;\n  color: #e0e1dd;\n  background-color: #09131d;\n  outline: none;\n  &:focus,\n  &:hover {\n    box-shadow: 0 0 4px 0px #415a77;\n  }\n"]))),v=g.Z.ul(a||(a=(0,x.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding: 0;\n  margin: 0;\n  gap: 40px;\n"]))),Z=g.Z.li(s||(s=(0,x.Z)(["\n  background-color: #09131d;\n  border-radius: 5px;\n\n  &:hover,\n  &:focus {\n    transform: scale(1.05);\n    box-shadow: 0 0 4px 0px #415a77;\n  }\n"]))),w=g.Z.p(p||(p=(0,x.Z)(["\n  color: #ffffff;\n  font-size: 16px;\n  line-height: 1.5;\n  margin: 0;\n  padding: 10px;\n"]))),j=t(596),_=t(710),k=t(184),y=function(){var n=(0,u.useState)([]),e=(0,c.Z)(n,2),t=e[0],r=e[1],o=(0,d.lr)(),i=(0,c.Z)(o,2),a=i[0],s=i[1],p=(0,u.useState)(""),x=(0,c.Z)(p,2),g=x[0],y=x[1],C=(0,l.TH)();(0,u.useEffect)((function(){var n,e=null!==(n=a.get("query"))&&void 0!==n?n:"";""!==e&&(y(e),(0,h.on)(e).then(r))}),[a]);return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(f,{onSubmit:function(n){n.preventDefault();var e=g.trim();""!==e?s({query:e}):j.Am.error("Please enter your movie!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"})},children:[(0,k.jsx)(m,{type:"text",value:g,onChange:function(n){y(n.target.value)},placeholder:"Search movies"}),(0,k.jsx)(b,{type:"submit",children:"Search"})]}),(0,k.jsx)(j.Ix,{autoClose:3e3}),(0,k.jsx)(v,{children:t.map((function(n){var e=n.title||n.name;return e=e.length>20?e.slice(0,20)+"...":e,(0,k.jsx)(d.rU,{to:"".concat(n.id),state:{from:C},children:(0,k.jsxs)(Z,{children:[(0,k.jsx)("img",{src:n.poster_path?"https://image.tmdb.org/t/p/w500".concat(n.poster_path):_,alt:n.title,width:"200",height:300}),(n.title,(0,k.jsx)(w,{children:e}))]})},n.id)}))})]})}},710:function(n,e,t){n.exports=t.p+"static/media/sample_placeholder.933e85983336e5c4c901.jpg"}}]);
//# sourceMappingURL=722.180ac7d3.chunk.js.map