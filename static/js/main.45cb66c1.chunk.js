(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[function(e,a,t){e.exports=t.p+"static/media/player.f29f6e97.svg"},,,,,,,,function(e,a,t){e.exports=t.p+"static/media/todd.401918f0.png"},,function(e,a,t){e.exports=t.p+"static/media/Chris.63618149.jpg"},,,function(e,a,t){e.exports=t.p+"static/media/loading.a21746f5.gif"},function(e,a,t){e.exports=t(29)},,,,,,function(e,a,t){},function(e,a,t){},,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),c=t(12),s=t.n(c),l=(t(20),t(2)),o=t(3),i=t(5),u=t(4),p=t(6),m=t(8),f=t.n(m),h=(t(21),function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Header"},r.a.createElement("h1",null,"LONG SH",r.a.createElement("img",{className:"todd-img",src:f.a}),"T LEAGUE"))}}]),a}(n.Component)),d=t(7),y=t.n(d),b=t(9),v=t(0),g=t.n(v),E=t(10),k=t.n(E),j=(t(24),function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props,a=e.selectedPlayerData,t=e.handleBackClick,n={Dan:g.a,Bmase:g.a,Scott:g.a,Kristin:g.a,Alex:g.a,Doherty:g.a,Kevin:g.a,Todd:f.a,Laura:g.a,Brent:g.a,Reed:g.a,Justin:g.a,Brewers:g.a,Matt:g.a,Fraske:g.a,Chris:k.a},c=a.bonusData.map(function(e){return r.a.createElement("h3",null,e.points," - ",e.description)});return c.length||(c="-none-"),r.a.createElement("div",{className:"PlayerInfo"},r.a.createElement("button",{className:"back-btn",onClick:t},"X"),r.a.createElement("h1",{className:"player-info-name"},a.name),r.a.createElement("img",{className:"player-info-pic",src:n[a.name]}),r.a.createElement("div",{className:"player-info-totals"},r.a.createElement("h5",null,"points",r.a.createElement("br",null)," ",r.a.createElement("span",{className:"player-info-num"},a.points)),r.a.createElement("h5",null,"bonus",r.a.createElement("br",null)," ",r.a.createElement("span",{className:"player-info-num"},a.bonusTotal)),r.a.createElement("h5",null,"total",r.a.createElement("br",null)," ",r.a.createElement("span",{className:"player-info-num"},a.pointTotal))),r.a.createElement("div",{className:"player-info-teams"},a.teams.map(function(e){return r.a.createElement("h5",{className:e.is_eliminated?"eliminated":"",key:e.name},"".concat(e.name," (").concat(e.points,")"))})),r.a.createElement("div",{className:"player-info-bonus"},r.a.createElement("h3",{className:"player-info-bonus-title"},"bonus"),c))}}]),a}(n.Component)),O=(t(25),function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){console.log(this.props);var e=this.props,a=e.name,t=e.pointTotal,n=e.rank,c=e.handlePlayerClick,s={Dan:g.a,Bmase:g.a,Scott:g.a,Kristin:g.a,Alex:g.a,Doherty:g.a,Kevin:g.a,Todd:f.a,Laura:g.a,Brent:g.a,Reed:g.a,Justin:g.a,Brewers:g.a,Matt:g.a,Fraske:g.a,Chris:k.a};return r.a.createElement("div",{className:"Player",onClick:function(){return c(a)}},r.a.createElement("h3",{className:"player-rank"},n),r.a.createElement("h3",{className:"player-name"},a),r.a.createElement("h3",{className:"player-points"},t),r.a.createElement("div",{className:"player-pic-wrapper"},r.a.createElement("img",{className:"player-pic",src:s[a]})))}}]),a}(n.Component)),N=t(13),w=t.n(N),x=(t(26),function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props,a=e.players,t=e.handlePlayerClick,n=a.sort(function(e,a){return e.pointTotal>a.pointTotal?-1:e.pointTotal<a.pointTotal?1:void 0}),c=r.a.createElement("img",{className:"loading-img",src:w.a}),s=1,l=n.map(function(e,a){return a>0&&e.pointTotal===n[a-1].pointTotal?s++:s=0,r.a.createElement(O,Object.assign({handlePlayerClick:t},e,{rank:a+1-s,key:e.name}))});return a.length?r.a.createElement("div",{className:"Standings"},r.a.createElement("div",{className:"current-standings-header"},r.a.createElement("h5",null,"rank"),r.a.createElement("h5",null,"name"),r.a.createElement("h5",{className:"current-standings-points"},"points")),l):c}}]),a}(n.Component)),C=function(){var e=Object(b.a)(y.a.mark(function e(){var a,t;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://long-shot-league-be.herokuapp.com/api/v1/longshotleague/players");case 2:return a=e.sent,e.next=5,a.json();case 5:return t=e.sent,e.abrupt("return",t);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(b.a)(y.a.mark(function e(){var a,t;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://long-shot-league-be.herokuapp.com/api/v1/longshotleague/teams");case 2:return a=e.sent,e.next=5,a.json();case 5:return t=e.sent,e.abrupt("return",t);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(b.a)(y.a.mark(function e(){var a,t;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://long-shot-league-be.herokuapp.com/api/v1/longshotleague/bonus");case 2:return a=e.sent,e.next=5,a.json();case 5:return t=e.sent,e.abrupt("return",t);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),B=(t(27),function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={selectedPlayer:"",display:"standings",players:[]},t.componentDidMount=Object(b.a)(y.a.mark(function e(){var a,n,r;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:return a=e.sent,e.next=5,P();case 5:return n=e.sent,e.next=8,T();case 8:return r=e.sent,e.next=11,t.loadPlayerData(a,n,r);case 11:case"end":return e.stop()}},e)})),t.loadPlayerData=function(e,a,n){var r=[];e.forEach(function(e){var c=a.filter(function(a){return a.drafted_by===e.name}),s=t.generatePointTotal(c),l=t.generateBonusData(e.name,n),o=t.generateBonusTotal(l),i=s+o;r.push({name:e.name,teams:c,points:s,bonusData:l,bonusTotal:o,pointTotal:i})}),t.setState({players:r})},t.generatePointTotal=function(e){return e.reduce(function(e,a){return e+a.points},0)},t.generateBonusData=function(e,a){return a.filter(function(a){return a.name===e})},t.generateBonusTotal=function(e){return t.generatePointTotal(e)},t.handlePlayerClick=function(e){t.setState({selectedPlayer:e,display:"player info"})},t.handleBackClick=function(){t.setState({selectedPlayer:"",display:"standings"})},t}return Object(p.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.state,a=e.display,t=e.selectedPlayer,n=e.players,c=n.find(function(e){return e.name===t});return r.a.createElement("div",{className:"MainPage"},"player info"===a&&r.a.createElement(j,{selectedPlayerData:c,handleBackClick:this.handleBackClick}),"standings"===a&&r.a.createElement(x,{players:n,handlePlayerClick:this.handlePlayerClick}))}}]),a}(n.Component)),D=(t(28),function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,null),r.a.createElement(B,null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[14,1,2]]]);
//# sourceMappingURL=main.45cb66c1.chunk.js.map