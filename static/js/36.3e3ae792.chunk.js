(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{1016:function(e,a,t){"use strict";var s=t(33),l=t(94),c=t(2),r=t.n(c),n=t(121),m=t.n(n),i=t(912),o=t.n(i),u=t(962),d=t.n(u),p=t(913),v={children:m.a.node,bar:m.a.bool,multi:m.a.bool,tag:p.l,value:m.a.oneOfType([m.a.string,m.a.number]),max:m.a.oneOfType([m.a.string,m.a.number]),animated:m.a.bool,striped:m.a.bool,color:m.a.string,className:m.a.string,barClassName:m.a.string,cssModule:m.a.object},g=function(e){var a=e.children,t=e.className,c=e.barClassName,n=e.cssModule,m=e.value,i=e.max,u=e.animated,v=e.striped,g=e.color,b=e.bar,E=e.multi,f=e.tag,N=Object(l.a)(e,["children","className","barClassName","cssModule","value","max","animated","striped","color","bar","multi","tag"]),h=d()(m)/d()(i)*100,y=Object(p.h)(o()(t,"progress"),n),x=Object(p.h)(o()("progress-bar",b&&t||c,u?"progress-bar-animated":null,g?"bg-"+g:null,v||u?"progress-bar-striped":null),n),j=E?a:r.a.createElement("div",{className:x,style:{width:h+"%"},role:"progressbar","aria-valuenow":m,"aria-valuemin":"0","aria-valuemax":i,children:a});return b?j:r.a.createElement(f,Object(s.a)({},N,{className:y,children:j}))};g.propTypes=v,g.defaultProps={tag:"div",value:0,max:100},a.a=g},1064:function(e,a,t){"use strict";var s=t(33),l=t(94),c=t(2),r=t.n(c),n=t(121),m=t.n(n),i=t(912),o=t.n(i),u=t(913),d={tabs:m.a.bool,pills:m.a.bool,vertical:m.a.oneOfType([m.a.bool,m.a.string]),horizontal:m.a.string,justified:m.a.bool,fill:m.a.bool,navbar:m.a.bool,card:m.a.bool,tag:u.l,className:m.a.string,cssModule:m.a.object},p=function(e){var a=e.className,t=e.cssModule,c=e.tabs,n=e.pills,m=e.vertical,i=e.horizontal,d=e.justified,p=e.fill,v=e.navbar,g=e.card,b=e.tag,E=Object(l.a)(e,["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"]),f=Object(u.h)(o()(a,v?"navbar-nav":"nav",!!i&&"justify-content-"+i,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(m),{"nav-tabs":c,"card-header-tabs":g&&c,"nav-pills":n,"card-header-pills":g&&n,"nav-justified":d,"nav-fill":p}),t);return r.a.createElement(b,Object(s.a)({},E,{className:f}))};p.propTypes=d,p.defaultProps={tag:"ul",vertical:!1},a.a=p},1065:function(e,a,t){"use strict";var s=t(33),l=t(94),c=t(2),r=t.n(c),n=t(121),m=t.n(n),i=t(912),o=t.n(i),u=t(913),d={tag:u.l,active:m.a.bool,className:m.a.string,cssModule:m.a.object},p=function(e){var a=e.className,t=e.cssModule,c=e.active,n=e.tag,m=Object(l.a)(e,["className","cssModule","active","tag"]),i=Object(u.h)(o()(a,"nav-item",!!c&&"active"),t);return r.a.createElement(n,Object(s.a)({},m,{className:i}))};p.propTypes=d,p.defaultProps={tag:"li"},a.a=p},1220:function(e,a,t){"use strict";t.r(a);var s=t(914),l=t(242),c=t(243),r=t(246),n=t(244),m=t(250),i=t(245),o=t(2),u=t.n(o),d=t(1064),p=t(1065),v=t(33),g=t(94),b=t(79),E=t(68),f=t(121),N=t.n(f),h=t(912),y=t.n(h),x=t(913),j={tag:x.l,innerRef:N.a.oneOfType([N.a.object,N.a.func,N.a.string]),disabled:N.a.bool,active:N.a.bool,className:N.a.string,cssModule:N.a.object,onClick:N.a.func,href:N.a.any},O=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(b.a)(t)),t}Object(E.a)(a,e);var t=a.prototype;return t.onClick=function(e){this.props.disabled?e.preventDefault():("#"===this.props.href&&e.preventDefault(),this.props.onClick&&this.props.onClick(e))},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,s=e.active,l=e.tag,c=e.innerRef,r=Object(g.a)(e,["className","cssModule","active","tag","innerRef"]),n=Object(x.h)(y()(a,"nav-link",{disabled:r.disabled,active:s}),t);return u.a.createElement(l,Object(v.a)({},r,{ref:c,onClick:this.onClick,className:n}))},a}(u.a.Component);O.propTypes=j,O.defaultProps={tag:"a"};var M=O,k=t(969),S=u.a.createContext({}),P={tag:x.l,activeTab:N.a.any,className:N.a.string,cssModule:N.a.object},T=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={activeTab:t.props.activeTab},t}return Object(E.a)(a,e),a.getDerivedStateFromProps=function(e,a){return a.activeTab!==e.activeTab?{activeTab:e.activeTab}:null},a.prototype.render=function(){var e=this.props,a=e.className,t=e.cssModule,s=e.tag,l=Object(x.i)(this.props,Object.keys(P)),c=Object(x.h)(y()("tab-content",a),t);return u.a.createElement(S.Provider,{value:{activeTabId:this.state.activeTab}},u.a.createElement(s,Object(v.a)({},l,{className:c})))},a}(o.Component);Object(k.polyfill)(T);var w=T;T.propTypes=P,T.defaultProps={tag:"div"};var C={tag:x.l,className:N.a.string,cssModule:N.a.object,tabId:N.a.any};function U(e){var a=e.className,t=e.cssModule,s=e.tabId,l=e.tag,c=Object(g.a)(e,["className","cssModule","tabId","tag"]),r=function(e){return Object(x.h)(y()("tab-pane",a,{active:s===e}),t)};return u.a.createElement(S.Consumer,null,function(e){var a=e.activeTabId;return u.a.createElement(l,Object(v.a)({},c,{className:r(a)}))})}U.propTypes=C,U.defaultProps={tag:"div"};var L={tag:x.l,flush:N.a.bool,className:N.a.string,cssModule:N.a.object},_=function(e){var a=e.className,t=e.cssModule,s=e.tag,l=e.flush,c=Object(g.a)(e,["className","cssModule","tag","flush"]),r=Object(x.h)(y()(a,"list-group",!!l&&"list-group-flush"),t);return u.a.createElement(s,Object(v.a)({},c,{className:r}))};_.propTypes=L,_.defaultProps={tag:"ul"};var D=_,z={tag:x.l,active:N.a.bool,disabled:N.a.bool,color:N.a.string,action:N.a.bool,className:N.a.any,cssModule:N.a.object},W=function(e){e.preventDefault()},F=function(e){var a=e.className,t=e.cssModule,s=e.tag,l=e.active,c=e.disabled,r=e.action,n=e.color,m=Object(g.a)(e,["className","cssModule","tag","active","disabled","action","color"]),i=Object(x.h)(y()(a,!!l&&"active",!!c&&"disabled",!!r&&"list-group-item-action",!!n&&"list-group-item-"+n,"list-group-item"),t);return c&&(m.onClick=W),u.a.createElement(s,Object(v.a)({},m,{className:i}))};F.propTypes=z,F.defaultProps={tag:"li"};var I=F,A=t(1016),B=t(999),R=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(r.a)(this,Object(n.a)(a).call(this,e))).toggle=t.toggle.bind(Object(m.a)(t)),t.state={activeTab:"1"},t}return Object(i.a)(a,e),Object(c.a)(a,[{key:"toggle",value:function(e){this.state.activeTab!==e&&this.setState({activeTab:e})}},{key:"render",value:function(){var e=this,a=this.props;a.children,Object(s.a)(a,["children"]);return u.a.createElement(u.a.Fragment,null,u.a.createElement(d.a,{tabs:!0},u.a.createElement(p.a,null,u.a.createElement(M,{className:y()({active:"1"===this.state.activeTab}),onClick:function(){e.toggle("1")}},u.a.createElement("i",{className:"icon-list"}))),u.a.createElement(p.a,null,u.a.createElement(M,{className:y()({active:"2"===this.state.activeTab}),onClick:function(){e.toggle("2")}},u.a.createElement("i",{className:"icon-speech"}))),u.a.createElement(p.a,null,u.a.createElement(M,{className:y()({active:"3"===this.state.activeTab}),onClick:function(){e.toggle("3")}},u.a.createElement("i",{className:"icon-settings"})))),u.a.createElement(w,{activeTab:this.state.activeTab},u.a.createElement(U,{tabId:"1"},u.a.createElement(D,{className:"list-group-accent",tag:"div"},u.a.createElement(I,{className:"list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small"},"Today"),u.a.createElement(I,{action:!0,tag:"a",href:"#",className:"list-group-item-accent-warning list-group-item-divider"},u.a.createElement("div",{className:"avatar float-right"},u.a.createElement("img",{className:"img-avatar",src:"assets/img/avatars/7.jpg",alt:"admin@bootstrapmaster.com"})),u.a.createElement("div",null,"Meeting with ",u.a.createElement("strong",null,"Lucas")," "),u.a.createElement("small",{className:"text-muted mr-3"},u.a.createElement("i",{className:"icon-calendar"}),"\xa0 1 - 3pm"),u.a.createElement("small",{className:"text-muted"},u.a.createElement("i",{className:"icon-location-pin"})," Palo Alto, CA")),u.a.createElement(I,{action:!0,tag:"a",href:"#",className:"list-group-item-accent-info list-group-item-divider"},u.a.createElement("div",{className:"avatar float-right"},u.a.createElement("img",{className:"img-avatar",src:"assets/img/avatars/4.jpg",alt:"admin@bootstrapmaster.com"})),u.a.createElement("div",null,"Skype with ",u.a.createElement("strong",null,"Megan")),u.a.createElement("small",{className:"text-muted mr-3"},u.a.createElement("i",{className:"icon-calendar"}),"\xa0 4 - 5pm"),u.a.createElement("small",{className:"text-muted"},u.a.createElement("i",{className:"icon-social-skype"})," On-line")),u.a.createElement(I,{className:"list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small"},"Tomorrow"),u.a.createElement(I,{action:!0,tag:"a",href:"#",className:"list-group-item-accent-danger list-group-item-divider"},u.a.createElement("div",null,"New UI Project - ",u.a.createElement("strong",null,"deadline")),u.a.createElement("small",{className:"text-muted mr-3"},u.a.createElement("i",{className:"icon-calendar"}),"\xa0 10 - 11pm"),u.a.createElement("small",{className:"text-muted"},u.a.createElement("i",{className:"icon-home"}),"\xa0 creativeLabs HQ"),u.a.createElement("div",{className:"avatars-stack mt-2"},u.a.createElement("div",{className:"avatar avatar-xs"},u.a.createElement("img",{src:"assets/img/avatars/2.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),u.a.createElement("div",{className:"avatar avatar-xs"},u.a.createElement("img",{src:"assets/img/avatars/3.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),u.a.createElement("div",{className:"avatar avatar-xs"},u.a.createElement("img",{src:"assets/img/avatars/4.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),u.a.createElement("div",{className:"avatar avatar-xs"},u.a.createElement("img",{src:"assets/img/avatars/5.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),u.a.createElement("div",{className:"avatar avatar-xs"},u.a.createElement("img",{src:"assets/img/avatars/6.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})))),u.a.createElement(I,{action:!0,tag:"a",href:"#",className:"list-group-item-accent-success list-group-item-divider"},u.a.createElement("div",null,u.a.createElement("strong",null,"#10 Startups.Garden")," Meetup"),u.a.createElement("small",{className:"text-muted mr-3"},u.a.createElement("i",{className:"icon-calendar"}),"\xa0 1 - 3pm"),u.a.createElement("small",{className:"text-muted"},u.a.createElement("i",{className:"icon-location-pin"}),"\xa0 Palo Alto, CA")),u.a.createElement(I,{action:!0,tag:"a",href:"#",className:"list-group-item-accent-primary list-group-item-divider"},u.a.createElement("div",null,u.a.createElement("strong",null,"Team meeting")),u.a.createElement("small",{className:"text-muted mr-3"},u.a.createElement("i",{className:"icon-calendar"}),"\xa0 4 - 6pm"),u.a.createElement("small",{className:"text-muted"},u.a.createElement("i",{className:"icon-home"}),"\xa0 creativeLabs HQ"),u.a.createElement("div",{className:"avatars-stack mt-2"},u.a.createElement("div",{className:"avatar avatar-xs"},u.a.createElement("img",{src:"assets/img/avatars/2.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),u.a.createElement("div",{className:"avatar avatar-xs"},u.a.createElement("img",{src:"assets/img/avatars/3.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),u.a.createElement("div",{className:"avatar avatar-xs"},u.a.createElement("img",{src:"assets/img/avatars/4.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),u.a.createElement("div",{className:"avatar avatar-xs"},u.a.createElement("img",{src:"assets/img/avatars/5.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),u.a.createElement("div",{className:"avatar avatar-xs"},u.a.createElement("img",{src:"assets/img/avatars/6.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),u.a.createElement("div",{className:"avatar avatar-xs"},u.a.createElement("img",{src:"assets/img/avatars/7.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),u.a.createElement("div",{className:"avatar avatar-xs"},u.a.createElement("img",{src:"assets/img/avatars/8.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})))))),u.a.createElement(U,{tabId:"2",className:"p-3"},u.a.createElement("div",{className:"message"},u.a.createElement("div",{className:"py-3 pb-5 mr-3 float-left"},u.a.createElement("div",{className:"avatar"},u.a.createElement("img",{src:"assets/img/avatars/7.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"}),u.a.createElement("span",{className:"avatar-status badge-success"}))),u.a.createElement("div",null,u.a.createElement("small",{className:"text-muted"},"Lukasz Holeczek"),u.a.createElement("small",{className:"text-muted float-right mt-1"},"1:52 PM")),u.a.createElement("div",{className:"text-truncate font-weight-bold"},"Lorem ipsum dolor sit amet"),u.a.createElement("small",{className:"text-muted"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...")),u.a.createElement("hr",null),u.a.createElement("div",{className:"message"},u.a.createElement("div",{className:"py-3 pb-5 mr-3 float-left"},u.a.createElement("div",{className:"avatar"},u.a.createElement("img",{src:"assets/img/avatars/7.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"}),u.a.createElement("span",{className:"avatar-status badge-success"}))),u.a.createElement("div",null,u.a.createElement("small",{className:"text-muted"},"Lukasz Holeczek"),u.a.createElement("small",{className:"text-muted float-right mt-1"},"1:52 PM")),u.a.createElement("div",{className:"text-truncate font-weight-bold"},"Lorem ipsum dolor sit amet"),u.a.createElement("small",{className:"text-muted"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...")),u.a.createElement("hr",null),u.a.createElement("div",{className:"message"},u.a.createElement("div",{className:"py-3 pb-5 mr-3 float-left"},u.a.createElement("div",{className:"avatar"},u.a.createElement("img",{src:"assets/img/avatars/7.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"}),u.a.createElement("span",{className:"avatar-status badge-success"}))),u.a.createElement("div",null,u.a.createElement("small",{className:"text-muted"},"Lukasz Holeczek"),u.a.createElement("small",{className:"text-muted float-right mt-1"},"1:52 PM")),u.a.createElement("div",{className:"text-truncate font-weight-bold"},"Lorem ipsum dolor sit amet"),u.a.createElement("small",{className:"text-muted"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...")),u.a.createElement("hr",null),u.a.createElement("div",{className:"message"},u.a.createElement("div",{className:"py-3 pb-5 mr-3 float-left"},u.a.createElement("div",{className:"avatar"},u.a.createElement("img",{src:"assets/img/avatars/7.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"}),u.a.createElement("span",{className:"avatar-status badge-success"}))),u.a.createElement("div",null,u.a.createElement("small",{className:"text-muted"},"Lukasz Holeczek"),u.a.createElement("small",{className:"text-muted float-right mt-1"},"1:52 PM")),u.a.createElement("div",{className:"text-truncate font-weight-bold"},"Lorem ipsum dolor sit amet"),u.a.createElement("small",{className:"text-muted"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...")),u.a.createElement("hr",null),u.a.createElement("div",{className:"message"},u.a.createElement("div",{className:"py-3 pb-5 mr-3 float-left"},u.a.createElement("div",{className:"avatar"},u.a.createElement("img",{src:"assets/img/avatars/7.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"}),u.a.createElement("span",{className:"avatar-status badge-success"}))),u.a.createElement("div",null,u.a.createElement("small",{className:"text-muted"},"Lukasz Holeczek"),u.a.createElement("small",{className:"text-muted float-right mt-1"},"1:52 PM")),u.a.createElement("div",{className:"text-truncate font-weight-bold"},"Lorem ipsum dolor sit amet"),u.a.createElement("small",{className:"text-muted"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."))),u.a.createElement(U,{tabId:"3",className:"p-3"},u.a.createElement("h6",null,"Settings"),u.a.createElement("div",{className:"aside-options"},u.a.createElement("div",{className:"clearfix mt-4"},u.a.createElement("small",null,u.a.createElement("b",null,"Option 1")),u.a.createElement(B.m,{className:"float-right",variant:"pill",label:!0,color:"success",defaultChecked:!0,size:"sm"})),u.a.createElement("div",null,u.a.createElement("small",{className:"text-muted"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))),u.a.createElement("div",{className:"aside-options"},u.a.createElement("div",{className:"clearfix mt-3"},u.a.createElement("small",null,u.a.createElement("b",null,"Option 2")),u.a.createElement(B.m,{className:"float-right",variant:"pill",label:!0,color:"success",size:"sm"})),u.a.createElement("div",null,u.a.createElement("small",{className:"text-muted"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))),u.a.createElement("div",{className:"aside-options"},u.a.createElement("div",{className:"clearfix mt-3"},u.a.createElement("small",null,u.a.createElement("b",null,"Option 3")),u.a.createElement(B.m,{className:"float-right",variant:"pill",label:!0,color:"success",defaultChecked:!0,size:"sm",disabled:!0}),u.a.createElement("div",null,u.a.createElement("small",{className:"text-muted"},"Option disabled.")))),u.a.createElement("div",{className:"aside-options"},u.a.createElement("div",{className:"clearfix mt-3"},u.a.createElement("small",null,u.a.createElement("b",null,"Option 4")),u.a.createElement(B.m,{className:"float-right",variant:"pill",label:!0,color:"success",defaultChecked:!0,size:"sm"}))),u.a.createElement("hr",null),u.a.createElement("h6",null,"System Utilization"),u.a.createElement("div",{className:"text-uppercase mb-1 mt-4"},u.a.createElement("small",null,u.a.createElement("b",null,"CPU Usage"))),u.a.createElement(A.a,{className:"progress-xs",color:"info",value:"25"}),u.a.createElement("small",{className:"text-muted"},"348 Processes. 1/4 Cores."),u.a.createElement("div",{className:"text-uppercase mb-1 mt-2"},u.a.createElement("small",null,u.a.createElement("b",null,"Memory Usage"))),u.a.createElement(A.a,{className:"progress-xs",color:"warning",value:"70"}),u.a.createElement("small",{className:"text-muted"},"11444GB/16384MB"),u.a.createElement("div",{className:"text-uppercase mb-1 mt-2"},u.a.createElement("small",null,u.a.createElement("b",null,"SSD 1 Usage"))),u.a.createElement(A.a,{className:"progress-xs",color:"danger",value:"95"}),u.a.createElement("small",{className:"text-muted"},"243GB/256GB"),u.a.createElement("div",{className:"text-uppercase mb-1 mt-2"},u.a.createElement("small",null,u.a.createElement("b",null,"SSD 2 Usage"))),u.a.createElement(A.a,{className:"progress-xs",color:"success",value:"10"}),u.a.createElement("small",{className:"text-muted"},"25GB/256GB"))))}}]),a}(o.Component);R.defaultProps={};a.default=R},914:function(e,a,t){"use strict";function s(e,a){if(null==e)return{};var t,s,l=function(e,a){if(null==e)return{};var t,s,l={},c=Object.keys(e);for(s=0;s<c.length;s++)t=c[s],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(s=0;s<c.length;s++)t=c[s],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}t.d(a,"a",function(){return s})},962:function(e,a){var t=NaN,s="[object Symbol]",l=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,n=/^0o[0-7]+$/i,m=parseInt,i=Object.prototype.toString;function o(e){var a=typeof e;return!!e&&("object"==a||"function"==a)}e.exports=function(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&i.call(e)==s}(e))return t;if(o(e)){var a="function"==typeof e.valueOf?e.valueOf():e;e=o(a)?a+"":a}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var u=r.test(e);return u||n.test(e)?m(e.slice(2),u?2:8):c.test(e)?t:+e}},969:function(e,a,t){"use strict";function s(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function l(e){this.setState(function(a){var t=this.constructor.getDerivedStateFromProps(e,a);return null!==t&&void 0!==t?t:null}.bind(this))}function c(e,a){try{var t=this.props,s=this.state;this.props=e,this.state=a,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(t,s)}finally{this.props=t,this.state=s}}function r(e){var a=e.prototype;if(!a||!a.isReactComponent)throw new Error("Can only polyfill class components");if("function"!==typeof e.getDerivedStateFromProps&&"function"!==typeof a.getSnapshotBeforeUpdate)return e;var t=null,r=null,n=null;if("function"===typeof a.componentWillMount?t="componentWillMount":"function"===typeof a.UNSAFE_componentWillMount&&(t="UNSAFE_componentWillMount"),"function"===typeof a.componentWillReceiveProps?r="componentWillReceiveProps":"function"===typeof a.UNSAFE_componentWillReceiveProps&&(r="UNSAFE_componentWillReceiveProps"),"function"===typeof a.componentWillUpdate?n="componentWillUpdate":"function"===typeof a.UNSAFE_componentWillUpdate&&(n="UNSAFE_componentWillUpdate"),null!==t||null!==r||null!==n){var m=e.displayName||e.name,i="function"===typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+m+" uses "+i+" but also contains the following legacy lifecycles:"+(null!==t?"\n  "+t:"")+(null!==r?"\n  "+r:"")+(null!==n?"\n  "+n:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"===typeof e.getDerivedStateFromProps&&(a.componentWillMount=s,a.componentWillReceiveProps=l),"function"===typeof a.getSnapshotBeforeUpdate){if("function"!==typeof a.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");a.componentWillUpdate=c;var o=a.componentDidUpdate;a.componentDidUpdate=function(e,a,t){var s=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:t;o.call(this,e,a,s)}}return e}t.r(a),t.d(a,"polyfill",function(){return r}),s.__suppressDeprecationWarning=!0,l.__suppressDeprecationWarning=!0,c.__suppressDeprecationWarning=!0}}]);
//# sourceMappingURL=36.3e3ae792.chunk.js.map