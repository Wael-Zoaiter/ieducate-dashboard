(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{1204:function(e,a,t){"use strict";t.r(a);var r=t(141),n=t(0),l=t.n(n),s=t(960),c=t(961),o=t(963),i=t(968),d=t(964),u=t(974),b=t(966),m=t(265);a.default=function(e){var a=Object(n.useState)([]),t=Object(r.a)(a,2),p=t[0],E=t[1],v=Object(n.useState)(null),f=Object(r.a)(v,2),g=f[0],j=f[1],O=Object(n.useState)(!0),N=Object(r.a)(O,2),h=N[0],k=N[1];Object(n.useEffect)(function(){Object(b.bb)(e.match.params.id,function(e,a,t){E(a),j(t),k(e)})},[e.match.params.id]);var T=p?Object.entries(p):[["id",l.a.createElement("span",null,l.a.createElement("i",{className:"text-muted icon-ban"})," Not found")]];return l.a.createElement("div",{className:"animated fadeIn"},g&&l.a.createElement(m.ErrorToast,{error:g}),l.a.createElement(s.a,null,l.a.createElement(c.a,{lg:"12"},l.a.createElement(o.a,null,l.a.createElement(i.a,null,l.a.createElement("strong",null,"Description")),l.a.createElement(d.a,null,p&&p.description?l.a.createElement("div",{className:"html-description",dangerouslySetInnerHTML:{__html:p.description}}):l.a.createElement("p",null,"No description available")))),l.a.createElement(c.a,{lg:6},l.a.createElement(o.a,null,l.a.createElement(i.a,null,l.a.createElement("strong",null,l.a.createElement("i",{className:"icon-info pr-1"}),"Scholarship details")),l.a.createElement(d.a,null,h?l.a.createElement(m.Loading,{color:"primary",type:"grow"}):l.a.createElement(u.a,{responsive:!0,striped:!0,hover:!0},l.a.createElement("tbody",null,T.map(function(e){var a=Object(r.a)(e,2),t=a[0],n=a[1];return"description"!==t?l.a.createElement("tr",{key:t},l.a.createElement("td",null,"".concat(t,":")),l.a.createElement("td",null,l.a.createElement("strong",null,n))):null}))))))))}},968:function(e,a,t){"use strict";var r=t(6),n=t(34),l=t(0),s=t.n(l),c=t(4),o=t.n(c),i=t(49),d=t.n(i),u=t(29),b={tag:u.o,className:o.a.string,cssModule:o.a.object},m=function(e){var a=e.className,t=e.cssModule,l=e.tag,c=Object(n.a)(e,["className","cssModule","tag"]),o=Object(u.k)(d()(a,"card-header"),t);return s.a.createElement(l,Object(r.a)({},c,{className:o}))};m.propTypes=b,m.defaultProps={tag:"div"},a.a=m},974:function(e,a,t){"use strict";var r=t(6),n=t(34),l=t(0),s=t.n(l),c=t(4),o=t.n(c),i=t(49),d=t.n(i),u=t(29),b={className:o.a.string,cssModule:o.a.object,size:o.a.string,bordered:o.a.bool,borderless:o.a.bool,striped:o.a.bool,dark:o.a.bool,hover:o.a.bool,responsive:o.a.oneOfType([o.a.bool,o.a.string]),tag:u.o,responsiveTag:u.o,innerRef:o.a.oneOfType([o.a.func,o.a.string,o.a.object])},m=function(e){var a=e.className,t=e.cssModule,l=e.size,c=e.bordered,o=e.borderless,i=e.striped,b=e.dark,m=e.hover,p=e.responsive,E=e.tag,v=e.responsiveTag,f=e.innerRef,g=Object(n.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),j=Object(u.k)(d()(a,"table",!!l&&"table-"+l,!!c&&"table-bordered",!!o&&"table-borderless",!!i&&"table-striped",!!b&&"table-dark",!!m&&"table-hover"),t),O=s.a.createElement(E,Object(r.a)({},g,{ref:f,className:j}));if(p){var N=Object(u.k)(!0===p?"table-responsive":"table-responsive-"+p,t);return s.a.createElement(v,{className:N},O)}return O};m.propTypes=b,m.defaultProps={tag:"table",responsiveTag:"div"},a.a=m}}]);