(this.webpackJsonpreg2reg=this.webpackJsonpreg2reg||[]).push([[0],{174:function(e,t,n){var r=n(321),a=["transformRegister"];e.exports=function(){var e=new Worker(n.p+"b199b3db2ecec9d81f17.worker.js",{name:"[hash].worker.js"});return r(e,a),e}},322:function(e,t,n){"use strict";n.r(t);var r,a=n(0),s=n.n(a),c=n(49),i=n.n(c),o=n(391),l=n(392),j=n(333),u=n(1),d=function(){return Object(u.jsx)(o.a,{position:"static",children:Object(u.jsx)(l.a,{children:Object(u.jsx)(j.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:"Reg2Reg - \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0440\u0435\u0435\u0441\u0442\u0440\u043e\u0432"})})})},O=n(68),b=n.n(O),h=n(94),x=n(12),g=n(4),p=n(42),f=n(95),m=n(182),v=n(382),y=n(386),k=n(407),R=n(3),S=Object(R.a)(k.a)((function(e){return{padding:e.theme.spacing(2)}})),E=n(393),_=function(e){var t=e.children;return Object(u.jsx)(j.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0,children:t})},I=n(387),C=n(97),T=n.n(C),D=n(394),N=n(395),w=n(396),B=n(397),P=n(398),q=n(399),F=n(400),L=n(378),A=n(165),G=n.n(A),W=n(160),z=n.n(W),M=n(99),J=n.n(M),U=n(161),K=n.n(U),V=n(163),$=n.n(V),H=n(162),Q=n.n(H),X=n(164),Y=n.n(X);!function(e){e[e.IDLE=0]="IDLE",e[e.IN_PROGRESS=1]="IN_PROGRESS",e[e.ERROR=2]="ERROR",e[e.DONE=3]="DONE"}(r||(r={}));var Z=function(e){var t=e.onAddOrgPressed,n=e.orgs,a=e.selectedOrgId,s=e.onOrgSelected,c=e.onDeleteRequested,i=e.onUpdateRequested,o=e.onFullResetRequested,l=function(e){return function(t){t.stopPropagation(),c(e)}};return Object(u.jsxs)(S,{children:[Object(u.jsx)(_,{children:Object(u.jsxs)(E.a,{sx:{display:"flex",justifyContent:"space-between"},children:[Object(u.jsx)(E.a,{component:"span",sx:{mr:2},children:"\u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438"}),Object(u.jsx)(I.a,{variant:"outlined",startIcon:Object(u.jsx)(T.a,{}),color:"success",onClick:function(){return t()},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})}),Object(u.jsx)(D.a,{sx:{mb:2},children:Object(u.jsxs)(N.a,{children:[Object(u.jsx)(w.a,{children:Object(u.jsxs)(B.a,{children:[Object(u.jsx)(P.a,{}),Object(u.jsx)(P.a,{children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),Object(u.jsx)(P.a,{children:"\u0418\u041d\u041d"}),Object(u.jsx)(P.a,{align:"right",children:"\u041d\u043e\u043c\u0435\u0440 \u0440\u0435\u0435\u0441\u0442\u0440\u0430"}),Object(u.jsx)(P.a,{align:"center",children:"\u0421\u0442\u0430\u0442\u0443\u0441 \u0437\u0430\u0434\u0430\u0447\u0438"}),Object(u.jsx)(P.a,{align:"right",children:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044f"})]})}),Object(u.jsx)(q.a,{children:n.map((function(e){return Object(u.jsxs)(B.a,{hover:!0,onClick:function(){s(e.id)},selected:e.id===a,sx:{"&:hover":{cursor:"pointer"}},children:[Object(u.jsx)(P.a,{padding:"none",children:e.id===a&&Object(u.jsx)(E.a,{sx:{display:"inline-flex",alignItems:"center",justifyContent:"center",padding:"8px"},children:Object(u.jsx)(z.a,{color:"primary",fontSize:"large"})})}),Object(u.jsx)(P.a,{children:e.org.name}),Object(u.jsx)(P.a,{children:e.org.inn}),Object(u.jsx)(P.a,{align:"right",children:e.org.npp}),Object(u.jsxs)(P.a,{align:"center",children:[e.taskStatus===r.IDLE&&Object(u.jsx)(L.a,{title:"\u0417\u0430\u0434\u0430\u0447\u0430 \u043d\u0435 \u0437\u0430\u043f\u0443\u0449\u0435\u043d\u0430",children:Object(u.jsx)(K.a,{color:"disabled"})}),e.taskStatus===r.IN_PROGRESS&&Object(u.jsx)(L.a,{title:"\u0412 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0435",children:Object(u.jsx)(Q.a,{color:"primary"})}),e.taskStatus===r.DONE&&Object(u.jsx)(L.a,{title:"\u0417\u0430\u0434\u0430\u0447\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0430",children:Object(u.jsx)($.a,{color:"success"})}),e.taskStatus===r.ERROR&&Object(u.jsx)(L.a,{title:"\u041e\u0448\u0438\u0431\u043a\u0430",children:Object(u.jsx)(Y.a,{color:"error"})})]}),Object(u.jsxs)(P.a,{padding:"none",align:"right",children:[Object(u.jsx)(L.a,{title:'\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044e "'.concat(e.org.name,'"'),children:Object(u.jsx)(F.a,{onClick:(t=e.id,function(e){e.stopPropagation(),i(t)}),children:Object(u.jsx)(G.a,{})})}),Object(u.jsx)(L.a,{title:'\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044e "'.concat(e.org.name,'"'),children:Object(u.jsx)(F.a,{color:"error",onClick:l(e.id),children:Object(u.jsx)(J.a,{color:"error"})})})]})]},e.id);var t}))})]})}),Object(u.jsx)(E.a,{textAlign:"right",children:Object(u.jsx)(I.a,{variant:"outlined",color:"primary",onClick:function(){return o()},children:"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c \u0432\u0441\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b"})})]})},ee=n(58);ee.setLocale({mixed:{required:"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"}}),ee.addMethod(ee.string,"isDigits",(function(e){return this.matches(/^\d+$/,e)})),ee.addMethod(ee.string,"isINN",(function(){return this.isDigits("\u0418\u041d\u041d \u0434\u043e\u043b\u0436\u0435\u043d\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0446\u0438\u0444\u0440").test("innLength","\u0418\u041d\u041d \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 10-\u0442\u0438 \u0438\u043b\u0438 12-\u0442\u0438 \u0446\u0438\u0444\u0440",(function(e){return Boolean(e)&&(10===e.length||12===e.length)})).test("innCheckSum","\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u0418\u041d\u041d",(function(e){var t=function(t){return parseInt(e[t])};if(e&&12===e.length){var n=(7*t(0)+2*t(1)+4*t(2)+10*t(3)+3*t(4)+5*t(5)+9*t(6)+4*t(7)+6*t(8)+8*t(9))%11%10,r=(3*t(0)+7*t(1)+2*t(2)+4*t(3)+10*t(4)+3*t(5)+5*t(6)+9*t(7)+4*t(8)+6*t(9)+8*t(10))%11%10;return t(10)===n&&t(11)===r}if(e&&10===e.length){var a=(2*t(0)+4*t(1)+10*t(2)+3*t(3)+5*t(4)+9*t(5)+4*t(6)+6*t(7)+8*t(8))%11%10;return t(9)===a}return!0}))}));var te=ee,ne=n(180),re=n(374),ae=n(408),se=n(409),ce=n(410),ie=n(15),oe=n(16),le=function(){function e(t){Object(ie.a)(this,e),this._key=void 0,this._key=t}return Object(oe.a)(e,[{key:"retreiveData",value:function(){var e=localStorage.getItem(this._key);return null===e?{}:JSON.parse(e)}},{key:"storeData",value:function(e){var t=JSON.stringify(e);localStorage.setItem(this._key,t)}}]),e}(),je=function(){function e(){Object(ie.a)(this,e),this._orgsStorage=new le(e.storageKey)}return Object(oe.a)(e,[{key:"storeOrgs",value:function(e){this._orgsStorage.storeData(e)}},{key:"getOrgs",value:function(){return this._orgsStorage.retreiveData()}},{key:"getOrgById",value:function(e){return this._orgsStorage.retreiveData()[e]}},{key:"create",value:function(e){var t=this.getOrgs();t[Object(v.a)()]=e,this.storeOrgs(t)}},{key:"update",value:function(e,t){var n=this.getOrgs();n[e]=t,this.storeOrgs(n)}},{key:"remove",value:function(e){var t=this.getOrgs();delete t[e],this.storeOrgs(t)}}]),e}();je.storageKey="orgs";var ue,de=function(){function e(){Object(ie.a)(this,e),this._orgsRepository=new je}return Object(oe.a)(e,[{key:"getAll",value:function(){return this._orgsRepository.getOrgs()}},{key:"getById",value:function(e){return this._orgsRepository.getOrgById(e)}},{key:"create",value:function(e){this._orgsRepository.create(e)}},{key:"update",value:function(e,t){this._orgsRepository.update(e,t)}},{key:"remove",value:function(e){this._orgsRepository.remove(e)}}]),e}(),Oe=n(379),be=n(403),he=n(401),xe=n(388),ge=n(384),pe=n(402),fe=n(172),me=n.n(fe),ve=n(171),ye=n.n(ve),ke=n(173),Re=n.n(ke),Se=["open","onClose"],Ee=te.object().shape({name:te.string().required(),inn:te.string().required().isINN(),api_key:te.string().required(),npp:te.number().integer().required()}),_e=function(e){var t=e.orgId,n=e.onSaveOrAdd,r=e.onClose,a=void 0!==t,c=s.a.useMemo((function(){return new de}),[]),i=s.a.useState(),o=Object(x.a)(i,2),l=o[0],j=o[1],d=s.a.useState(!1),O=Object(x.a)(d,2),b=O[0],h=O[1],g=Object(ne.a)({initialValues:l||{name:"",inn:"",api_key:"",npp:1},validationSchema:Ee,onSubmit:function(e){a?c.update(t,e):c.create(e),n()},enableReinitialize:!0});s.a.useEffect((function(){if(t){var e=c.getById(t);j(e)}}),[t,c]);var p=a?'\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438 "'.concat(l&&l.name,'"'):"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438";return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(re.a,{children:p}),Object(u.jsxs)("form",{onSubmit:g.handleSubmit,children:[Object(u.jsx)(ae.a,{children:Object(u.jsxs)(y.a,{container:!0,spacing:1,children:[Object(u.jsx)(y.a,{item:!0,xs:12,children:Object(u.jsx)(Oe.a,{fullWidth:!0,variant:"outlined",id:"org.name",name:"name",label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",value:g.values.name,onChange:g.handleChange,onBlur:g.handleBlur,error:g.touched.name&&Boolean(g.errors.name),helperText:g.touched.name&&g.errors.name||" ",autoComplete:"off"})}),Object(u.jsx)(y.a,{item:!0,xs:12,children:Object(u.jsx)(Oe.a,{fullWidth:!0,variant:"outlined",id:"org.inn",name:"inn",label:"\u0418\u041d\u041d",value:g.values.inn,onChange:g.handleChange,onBlur:g.handleBlur,error:g.touched.inn&&Boolean(g.errors.inn),helperText:g.touched.inn&&g.errors.inn||" ",autoComplete:"off"})}),Object(u.jsx)(y.a,{item:!0,xs:12,children:Object(u.jsxs)(he.a,{variant:"outlined",fullWidth:!0,children:[Object(u.jsx)(ge.a,{htmlFor:"org.api_key",children:"\u041a\u043b\u044e\u0447 API"}),Object(u.jsx)(xe.a,{type:b?"text":"password",id:"org.api_keu",name:"api_key",label:"\u041a\u043b\u044e\u0447 API",value:g.values.api_key,onBlur:g.handleBlur,onChange:g.handleChange,error:g.touched.api_key&&Boolean(g.errors.api_key),autoComplete:"off",endAdornment:Object(u.jsx)(be.a,{position:"end",children:Object(u.jsx)(F.a,{onClick:function(){return h(!b)},edge:"end",children:b?Object(u.jsx)(ye.a,{}):Object(u.jsx)(me.a,{})})})}),Object(u.jsx)(pe.a,{error:g.touched.api_key&&Boolean(g.errors.api_key),children:g.touched.api_key&&g.errors.api_key||" "})]})}),Object(u.jsx)(y.a,{item:!0,xs:12,children:Object(u.jsx)(Oe.a,{type:"number",fullWidth:!0,variant:"outlined",name:"npp",label:"\u041f\u043e\u0440\u044f\u0434\u043a\u043e\u0432\u044b\u0439 \u043d\u043e\u043c\u0435\u0440 \u0440\u0435\u0435\u0441\u0442\u0440\u0430",value:g.values.npp,onBlur:g.handleBlur,onChange:g.handleChange,error:g.touched.npp&&Boolean(g.errors.npp),helperText:g.touched.npp&&g.errors.npp||"\u0411\u0443\u0434\u0435\u0442 \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u0432 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0438 \u0440\u0435\u0435\u0441\u0442\u0440\u0430",autoComplete:"off"})})]})}),Object(u.jsxs)(se.a,{children:[Object(u.jsx)(I.a,{onClick:r,children:"\u041e\u0442\u043c\u0435\u043d\u0430"}),Object(u.jsx)(I.a,{type:"submit",color:"success",startIcon:a?Object(u.jsx)(Re.a,{}):Object(u.jsx)(T.a,{}),children:a?"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})]})]})},Ie=function(e){var t=e.open,n=e.onClose,r=Object(f.a)(e,Se);return Object(u.jsx)(ce.a,{open:t,onClose:n,children:Object(u.jsx)(_e,Object(p.a)({onClose:n},r))})},Ce=function(e){var t=e.open,n=e.orgName,r=e.orgId,a=e.onClose,c=e.onDelete,i=s.a.useMemo((function(){return new de}),[]);return Object(u.jsxs)(ce.a,{open:t,onClose:a,children:[Object(u.jsxs)(re.a,{children:['\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044e "',n,'"?']}),Object(u.jsxs)(se.a,{children:[Object(u.jsx)(I.a,{onClick:a,children:"\u041e\u0442\u043c\u0435\u043d\u0430"}),Object(u.jsx)(I.a,{startIcon:Object(u.jsx)(J.a,{}),color:"error",onClick:function(){i.remove(r),c()},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})]})},Te=n(174),De=n.n(Te),Ne=function(){function e(){Object(ie.a)(this,e),this._tasks={}}return Object(oe.a)(e,[{key:"startTransformationTask",value:function(){var e=Object(h.a)(b.a.mark((function e(t,n,r){var a,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=De()(),this._tasks[t]=a,e.next=4,a.transformRegister(n,r);case 4:return s=e.sent,this.stopTransformationTask(t),e.abrupt("return",s);case 7:case"end":return e.stop()}}),e,this)})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"stopTransformationTask",value:function(e){void 0!==this._tasks[e]&&(this._tasks[e].terminate(),delete this._tasks[e])}}]),e}(),we=n(176),Be=n.n(we),Pe=n(175),qe=n.n(Pe),Fe=function(e){var t=e.onFileChange,n=e.disabled,r=s.a.useState(),a=Object(x.a)(r,2),c=a[0],i=a[1],o=s.a.useRef();return Object(u.jsxs)(E.a,{sx:{display:"flex",alignItems:"center"},children:[Object(u.jsx)(Oe.a,{disabled:!0,fullWidth:!0,variant:"outlined",value:c||"\u0424\u0430\u0439\u043b \u043d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d",label:"\u0424\u0430\u0439\u043b \u0438\u0441\u0445\u043e\u0434\u043d\u043e\u0433\u043e \u0440\u0435\u0435\u0441\u0442\u0440\u0430",size:"small",sx:function(e){return{flexGrow:1,marginRight:e.spacing(1)}}}),c?Object(u.jsx)(F.a,{size:"large",color:"error",onClick:function(){i(void 0),o.current.value="",t(null)},disabled:n,children:Object(u.jsx)(qe.a,{})}):Object(u.jsx)(F.a,{onClick:function(){o.current.click()},size:"large",disabled:n,children:Object(u.jsx)(Be.a,{})}),Object(u.jsx)("input",{type:"file",hidden:!0,ref:o,onChange:function(e){var n=e.target.files&&e.target.files[0];i(null===n||void 0===n?void 0:n.name),t(n)},accept:".xls,.xlsx"})]})},Le=n(177),Ae=n.n(Le),Ge=n(178),We=n.n(Ge),ze=n(406),Me=n(179),Je=n.n(Me),Ue=n(404),Ke=n(381),Ve=n(405),$e=function(e){var t=e.loading,n=e.resultFile,r=e.error,a=e.onTransformRequested,c=e.onResetRequested,i=e.onCancelTaskRequested,o=s.a.useState(),l=Object(x.a)(o,2),d=l[0],O=l[1];return Object(u.jsxs)(S,{children:[Object(u.jsx)(E.a,{sx:{mb:2},children:Object(u.jsx)(_,{children:Object(u.jsxs)(E.a,{sx:{display:"flex",alignItems:"center"},children:[Object(u.jsx)(Ae.a,{color:"primary",sx:{mr:2}}),"\u0424\u043e\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0440\u0435\u0435\u0441\u0442\u0440\u0430"]})})}),!t&&!n&&!r&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(E.a,{sx:{mb:2},children:Object(u.jsx)(Fe,{disabled:t,onFileChange:function(e){O(e)}})}),Object(u.jsx)(I.a,{variant:"contained",fullWidth:!0,startIcon:Object(u.jsx)(We.a,{}),size:"large",disabled:!Boolean(d),onClick:function(){return a(d)},children:"\u041d\u0430\u0447\u0430\u0442\u044c \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435"})]}),(n||r)&&Object(u.jsxs)(u.Fragment,{children:[n&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(E.a,{sx:{mb:2},children:Object(u.jsxs)(j.a,{variant:"subtitle1",children:["\u0424\u0430\u0439\u043b \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430: ",Object(u.jsx)("strong",{children:n.name})]})}),Object(u.jsx)(E.a,{sx:{mb:2},children:Object(u.jsx)(I.a,{variant:"contained",color:"success",fullWidth:!0,startIcon:Object(u.jsx)(Je.a,{}),size:"large",href:URL.createObjectURL(n),download:n.name,children:"\u0421\u043a\u0430\u0447\u0430\u0442\u044c"})}),Object(u.jsx)(E.a,{sx:{mb:2},children:Object(u.jsx)(Ue.a,{})})]}),r&&Object(u.jsx)(E.a,{sx:{mb:2},children:Object(u.jsxs)(Ke.a,{severity:"error",children:[Object(u.jsx)(Ve.a,{children:"\u041e\u0448\u0438\u0431\u043a\u0430!"}),r]})}),Object(u.jsx)(I.a,{variant:"outlined",color:"primary",fullWidth:!0,onClick:c,children:"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442"})]}),t&&Object(u.jsxs)(E.a,{sx:{display:"flex",alignItems:"center",flexDirection:"column"},children:[Object(u.jsx)(E.a,{sx:{pt:3,pb:4},children:Object(u.jsx)(ze.a,{size:60})}),Object(u.jsx)(I.a,{variant:"outlined",color:"error",onClick:i,children:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c"})]})]})};!function(e){e[e.SET_RESET=0]="SET_RESET",e[e.RESET_ALL=1]="RESET_ALL",e[e.SET_IN_PROGRESS=2]="SET_IN_PROGRESS",e[e.SET_DONE=3]="SET_DONE",e[e.SET_ERROR=4]="SET_ERROR"}(ue||(ue={}));var He=function(e,t){switch(t.type){case ue.RESET_ALL:return{};case ue.SET_RESET:var n=t.payload.orgId;e[n];return Object(f.a)(e,[n].map(m.a));case ue.SET_IN_PROGRESS:return Object(p.a)(Object(p.a)({},e),{},Object(g.a)({},t.payload.orgId,{inProgress:!0,taskId:t.payload.taskId}));case ue.SET_DONE:return Object(p.a)(Object(p.a)({},e),{},Object(g.a)({},t.payload.orgId,{inProgress:!1,resultFile:t.payload.resultFile,taskId:e[t.payload.orgId].taskId}));case ue.SET_ERROR:return Object(p.a)(Object(p.a)({},e),{},Object(g.a)({},t.payload.orgId,{inProgress:!1,error:t.payload.error,taskId:e[t.payload.orgId].taskId}));default:return e}},Qe=function(){var e,t,n=s.a.useMemo((function(){return new de}),[]),a=s.a.useMemo((function(){return new Ne}),[]),c=s.a.useReducer(He,{}),i=Object(x.a)(c,2),o=i[0],l=i[1],j=s.a.useState(n.getAll()),d=Object(x.a)(j,2),O=d[0],g=d[1],p=s.a.useState(Object.keys(O)[0]),f=Object(x.a)(p,2),m=f[0],k=f[1],R=s.a.useState(),S=Object(x.a)(R,2),E=S[0],_=S[1],I=s.a.useState(!1),C=Object(x.a)(I,2),T=C[0],D=C[1],N=s.a.useState(!1),w=Object(x.a)(N,2),B=w[0],P=w[1],q=s.a.useState(),F=Object(x.a)(q,2),L=F[0],A=F[1],G=s.a.useMemo((function(){return Object.keys(O).map((function(e){return{org:O[e],id:e,taskStatus:o[e]?o[e].inProgress?r.IN_PROGRESS:o[e].resultFile?r.DONE:r.ERROR:r.IDLE}}))}),[O,o]),W=function(){var e=Object(h.a)(b.a.mark((function e(t){var n,r,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=m,r=Object(v.a)(),l({type:ue.SET_IN_PROGRESS,payload:{taskId:r,orgId:n}}),e.prev=3,e.next=6,a.startTransformationTask(r,t,O[m]);case 6:s=e.sent,l({type:ue.SET_DONE,payload:{resultFile:s,orgId:n}}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),l({type:ue.SET_ERROR,payload:{error:e.t0.message,orgId:n}});case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=n.getAll();g(e)};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(y.a,{container:!0,spacing:2,children:[Object(u.jsx)(y.a,{item:!0,xs:8,children:Object(u.jsx)(Z,{onAddOrgPressed:function(){A(void 0),P(!0)},orgs:G,selectedOrgId:m,onOrgSelected:function(e){k(e)},onDeleteRequested:function(e){_(e),D(!0)},onUpdateRequested:function(e){A(e),P(!0)},onFullResetRequested:function(){l({type:ue.RESET_ALL})}})}),Object(u.jsx)(y.a,{item:!0,xs:4,children:Object(u.jsx)($e,{loading:!!o[m]&&o[m].inProgress,resultFile:null===(e=o[m])||void 0===e?void 0:e.resultFile,error:null===(t=o[m])||void 0===t?void 0:t.error,onTransformRequested:W,onResetRequested:function(){l({type:ue.SET_RESET,payload:{orgId:m}})},onCancelTaskRequested:function(){a.stopTransformationTask(o[m].taskId),l({type:ue.SET_RESET,payload:{orgId:m}})}},m)})]}),Object(u.jsx)(Ie,{orgId:L,open:B,onClose:function(){P(!1)},onSaveOrAdd:function(){P(!1),z()}}),Object(u.jsx)(Ce,{open:T,orgId:E,orgName:E&&O[E]&&O[E].name,onClose:function(){D(!1)},onDelete:function(){z(),D(!1)}})]})},Xe=n(385),Ye=n(181),Ze=Object(Ye.a)(),et=n(377),tt=n(390);var nt=function(){return Object(u.jsxs)(Xe.a,{theme:Ze,children:[Object(u.jsx)(et.a,{}),Object(u.jsx)(d,{}),Object(u.jsx)(tt.a,{sx:{mb:4,mt:4},children:Object(u.jsx)(Qe,{})})]})};i.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(nt,{})}),document.getElementById("root"))}},[[322,1,2]]]);
//# sourceMappingURL=main.64c96caf.chunk.js.map