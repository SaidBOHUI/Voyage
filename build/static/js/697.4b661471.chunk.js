"use strict";(self.webpackChunkprojetvoyage=self.webpackChunkprojetvoyage||[]).push([[697],{697:function(e,r,n){n.r(r),n.d(r,{default:function(){return c}});var i=n(152),a=n(791),t=n(184),s=function(e){var r=(0,a.useState)(e.information),n=(0,i.Z)(r,2),s=n[0];n[1];return console.log(s,"single"),(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"cardVoyage",children:[(0,t.jsx)("h3",{children:s.lieu}),(0,t.jsx)("p",{children:s.type}),(0,t.jsxs)("p",{children:["Prix : ",s.tarif]}),(0,t.jsxs)("p",{children:["Note : ",s.rating]})]})})},o=[{lieu:"Paris, France",type:"Professionel",tarif:20,rating:3.6},{lieu:"Paris, France",type:"Professionel",tarif:254,rating:4.2},{lieu:"Paris, France",type:"Professionel",tarif:354,rating:4.6},{lieu:"Paris, France",type:"Professionel",tarif:204,rating:3.6},{lieu:"Paris, France",type:"Professionel",tarif:20,rating:3.6},{lieu:"Reims, France",type:"Professionel",tarif:254,rating:4.2},{lieu:"Paris, France",type:"Professionel",tarif:354,rating:4.6},{lieu:"Paris, France",type:"Professionel",tarif:204,rating:3.6}],l=function(){var e=(0,a.useState)(o),r=(0,i.Z)(e,2),n=r[0],l=r[1];return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("input",{type:"text",onChange:function(e){var r=e.target.value,n=o.filter((function(e){return e.lieu.includes(r)}));console.log(n,"list change handle"),l(n)}}),(0,t.jsxs)("div",{className:"dashboardVoyage",children:[console.log(n),n.map((function(e,r){return(0,t.jsx)(s,{information:e},r)}))]})]})},c=function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h1",{children:"PAGE HOME"}),(0,t.jsx)(l,{})]})}}}]);
//# sourceMappingURL=697.4b661471.chunk.js.map