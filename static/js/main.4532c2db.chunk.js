(this.webpackJsonpreg2reg=this.webpackJsonpreg2reg||[]).push([[0],{223:function(e,t,n){var r=n(400),a=["transformRegister"];e.exports=function(){var e=new Worker(n.p+"deb31b2e4bd3697691af.worker.js",{name:"[hash].worker.js"});return r(e,a),e}},387:function(e,t){},389:function(e,t){},401:function(e,t,n){"use strict";n.r(t);var r,a=n(0),s=n.n(a),c=n(56),i=n.n(c),o=n(470),l=n(471),d=n(411),j=n(1),u=function(){return Object(j.jsx)(o.a,{position:"static",children:Object(j.jsx)(l.a,{children:Object(j.jsx)(d.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:"Reg2Reg - \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0440\u0435\u0435\u0441\u0442\u0440\u043e\u0432"})})})},O=n(32),h=n.n(O),b=n(53),x=n(12),g=n(4),f=n(48),m=n(110),p=n(232),v=n(460),y=n(465),S=n(485),R=n(3),E=Object(R.a)(S.a)((function(e){return{padding:e.theme.spacing(2)}})),k=n(472),I=function(e){var t=e.children;return Object(j.jsx)(d.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0,children:t})},_=n(466),C=n(112),T=n.n(C),N=n(473),D=n(474),w=n(475),A=n(476),B=n(477),P=n(478),q=n(479),F=n(456),L=n(212),M=n.n(L),G=n(207),U=n.n(G),W=n(114),z=n.n(W),J=n(208),V=n.n(J),K=n(210),$=n.n(K),H=n(209),Q=n.n(H),X=n(211),Y=n.n(X);!function(e){e[e.IDLE=0]="IDLE",e[e.IN_PROGRESS=1]="IN_PROGRESS",e[e.ERROR=2]="ERROR",e[e.DONE=3]="DONE"}(r||(r={}));var Z=function(e){var t=e.onAddOrgPressed,n=e.orgs,a=e.selectedOrgId,s=e.onOrgSelected,c=e.onDeleteRequested,i=e.onUpdateRequested,o=e.onFullResetRequested,l=function(e){return function(t){t.stopPropagation(),c(e)}};return Object(j.jsxs)(E,{children:[Object(j.jsx)(I,{children:Object(j.jsxs)(k.a,{sx:{display:"flex",justifyContent:"space-between"},children:[Object(j.jsx)(k.a,{component:"span",sx:{mr:2},children:"\u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438"}),Object(j.jsx)(_.a,{variant:"outlined",startIcon:Object(j.jsx)(T.a,{}),color:"success",onClick:function(){return t()},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})}),Object(j.jsx)(N.a,{sx:{mb:2},children:Object(j.jsxs)(D.a,{children:[Object(j.jsx)(w.a,{children:Object(j.jsxs)(A.a,{children:[Object(j.jsx)(B.a,{}),Object(j.jsx)(B.a,{children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),Object(j.jsx)(B.a,{children:"\u0418\u041d\u041d"}),Object(j.jsx)(B.a,{align:"center",children:"\u0421\u0442\u0430\u0442\u0443\u0441 \u0437\u0430\u0434\u0430\u0447\u0438"}),Object(j.jsx)(B.a,{align:"right",children:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044f"})]})}),Object(j.jsx)(P.a,{children:n.map((function(e){return Object(j.jsxs)(A.a,{hover:!0,onClick:function(){s(e.id)},selected:e.id===a,sx:{"&:hover":{cursor:"pointer"}},children:[Object(j.jsx)(B.a,{padding:"none",children:e.id===a&&Object(j.jsx)(k.a,{sx:{display:"inline-flex",alignItems:"center",justifyContent:"center",padding:"8px"},children:Object(j.jsx)(U.a,{color:"primary",fontSize:"large"})})}),Object(j.jsx)(B.a,{children:e.org.name}),Object(j.jsx)(B.a,{children:e.org.inn}),Object(j.jsxs)(B.a,{align:"center",children:[e.taskStatus===r.IDLE&&Object(j.jsx)(F.a,{title:"\u0417\u0430\u0434\u0430\u0447\u0430 \u043d\u0435 \u0437\u0430\u043f\u0443\u0449\u0435\u043d\u0430",children:Object(j.jsx)(V.a,{color:"disabled"})}),e.taskStatus===r.IN_PROGRESS&&Object(j.jsx)(F.a,{title:"\u0412 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0435",children:Object(j.jsx)(Q.a,{color:"primary"})}),e.taskStatus===r.DONE&&Object(j.jsx)(F.a,{title:"\u0417\u0430\u0434\u0430\u0447\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0430",children:Object(j.jsx)($.a,{color:"success"})}),e.taskStatus===r.ERROR&&Object(j.jsx)(F.a,{title:"\u041e\u0448\u0438\u0431\u043a\u0430",children:Object(j.jsx)(Y.a,{color:"error"})})]}),Object(j.jsxs)(B.a,{padding:"none",align:"right",children:[Object(j.jsx)(F.a,{title:'\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044e "'.concat(e.org.name,'"'),children:Object(j.jsx)(q.a,{onClick:(t=e.id,function(e){e.stopPropagation(),i(t)}),children:Object(j.jsx)(M.a,{})})}),Object(j.jsx)(F.a,{title:'\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044e "'.concat(e.org.name,'"'),children:Object(j.jsx)(q.a,{color:"error",onClick:l(e.id),children:Object(j.jsx)(z.a,{color:"error"})})})]})]},e.id);var t}))})]})}),Object(j.jsx)(k.a,{textAlign:"right",children:Object(j.jsx)(_.a,{variant:"outlined",color:"primary",onClick:function(){return o()},children:"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c \u0432\u0441\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b"})})]})},ee=n(66);ee.setLocale({mixed:{required:"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"},string:{email:"\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u0430\u0434\u0440\u0435\u0441 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u044b"}}),ee.addMethod(ee.string,"isDigits",(function(e){return this.matches(/^\d+$/,e)})),ee.addMethod(ee.string,"isINN",(function(){return this.isDigits("\u0418\u041d\u041d \u0434\u043e\u043b\u0436\u0435\u043d\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0446\u0438\u0444\u0440").test("innLength","\u0418\u041d\u041d \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 10-\u0442\u0438 \u0438\u043b\u0438 12-\u0442\u0438 \u0446\u0438\u0444\u0440",(function(e){return Boolean(e)&&(10===e.length||12===e.length)})).test("innCheckSum","\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u0418\u041d\u041d",(function(e){var t=function(t){return parseInt(e[t])};if(e&&12===e.length){var n=(7*t(0)+2*t(1)+4*t(2)+10*t(3)+3*t(4)+5*t(5)+9*t(6)+4*t(7)+6*t(8)+8*t(9))%11%10,r=(3*t(0)+7*t(1)+2*t(2)+4*t(3)+10*t(4)+3*t(5)+5*t(6)+9*t(7)+4*t(8)+6*t(9)+8*t(10))%11%10;return t(10)===n&&t(11)===r}if(e&&10===e.length){var a=(2*t(0)+4*t(1)+10*t(2)+3*t(3)+5*t(4)+9*t(5)+4*t(6)+6*t(7)+8*t(8))%11%10;return t(9)===a}return!0}))}));var te=ee,ne=n(230),re=n(451),ae=n(486),se=n(489),ce=n(490),ie=n(15),oe=n(16),le=function(){function e(t){Object(ie.a)(this,e),this._key=void 0,this._key=t}return Object(oe.a)(e,[{key:"retreiveData",value:function(){var e=localStorage.getItem(this._key);return null===e?{}:JSON.parse(e)}},{key:"storeData",value:function(e){var t=JSON.stringify(e);localStorage.setItem(this._key,t)}}]),e}(),de=function(){function e(){Object(ie.a)(this,e),this._orgsStorage=new le(e.storageKey)}return Object(oe.a)(e,[{key:"storeOrgs",value:function(e){this._orgsStorage.storeData(e)}},{key:"getOrgs",value:function(){return this._orgsStorage.retreiveData()}},{key:"getOrgById",value:function(e){return this._orgsStorage.retreiveData()[e]}},{key:"create",value:function(e){var t=this.getOrgs();t[Object(v.a)()]=e,this.storeOrgs(t)}},{key:"update",value:function(e,t){var n=this.getOrgs();n[e]=t,this.storeOrgs(n)}},{key:"remove",value:function(e){var t=this.getOrgs();delete t[e],this.storeOrgs(t)}}]),e}();de.storageKey="orgs";var je,ue=function(){function e(){Object(ie.a)(this,e),this._orgsRepository=new de}return Object(oe.a)(e,[{key:"getAll",value:function(){return this._orgsRepository.getOrgs()}},{key:"getById",value:function(e){return this._orgsRepository.getOrgById(e)}},{key:"create",value:function(e){this._orgsRepository.create(e)}},{key:"update",value:function(e,t){this._orgsRepository.update(e,t)}},{key:"remove",value:function(e){this._orgsRepository.remove(e)}}]),e}(),Oe=n(480),he=n(481),be=n(462),xe=n(222),ge=n.n(xe);n(14),n(46),n(218),n(219),n(220);!function(e){e.OSN="osn",e.USN_INCOME="usn_income",e.USN_INCOME_OUTCOME="usn_income_outcome",e.ENVD="envd",e.ESN="esn",e.PATENT="patent"}(je||(je={}));var fe,me=n(457),pe=n(463),ve=n(482),ye=["open","onClose"],Se=te.object().shape({name:te.string().required(),email:te.string().required().email(),inn:te.string().required().isINN(),sno:te.string().required(),paymentAddress:te.string().required()}),Re=function(e){var t=e.orgId,n=e.onSaveOrAdd,r=e.onClose,a=void 0!==t,c=s.a.useMemo((function(){return new ue}),[]),i=s.a.useState(),o=Object(x.a)(i,2),l=o[0],d=o[1],u=Object(ne.a)({initialValues:l||{name:"",email:"",inn:"",sno:je.OSN,paymentAddress:""},validationSchema:Se,onSubmit:function(e){a?c.update(t,e):c.create(e),n()},enableReinitialize:!0});s.a.useEffect((function(){if(t){var e=c.getById(t);d(e)}}),[t,c]);var O=a?'\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438 "'.concat(l&&l.name,'"'):"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438";return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(re.a,{children:O}),Object(j.jsxs)("form",{onSubmit:u.handleSubmit,children:[Object(j.jsx)(ae.a,{children:Object(j.jsxs)(y.a,{container:!0,spacing:1,children:[Object(j.jsx)(y.a,{item:!0,xs:12,children:Object(j.jsx)(Oe.a,{fullWidth:!0,variant:"outlined",id:"org.name",name:"name",label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",value:u.values.name,onChange:u.handleChange,onBlur:u.handleBlur,error:u.touched.name&&Boolean(u.errors.name),helperText:u.touched.name&&u.errors.name||" ",autoComplete:"off"})}),Object(j.jsx)(y.a,{item:!0,xs:12,children:Object(j.jsxs)(he.a,{fullWidth:!0,children:[Object(j.jsx)(be.a,{id:"sno_type",children:"\u0421\u0438\u0441\u0442\u0435\u043c\u0430 \u043d\u0430\u043b\u043e\u0433\u043e\u043e\u0431\u043b\u0430\u0436\u0435\u043d\u0438\u044f"}),Object(j.jsxs)(me.a,{labelId:"sno_type",name:"sno",onChange:u.handleChange,onBlur:u.handleBlur,value:u.values.sno,label:"\u0421\u0438\u0441\u0442\u0435\u043c\u0430 \u043d\u0430\u043b\u043e\u0433\u043e\u043e\u0431\u043b\u0430\u0436\u0435\u043d\u0438\u044f",children:[Object(j.jsx)(pe.a,{value:je.OSN,children:"\u041e\u0441\u043d\u043e\u0432\u043d\u0430\u044f"}),Object(j.jsx)(pe.a,{value:je.ENVD,children:"\u0415\u0434\u0438\u043d\u044b\u0439 \u043d\u0430\u043b\u043e\u0433 \u043d\u0430 \u0432\u043c\u0435\u043d\u0435\u043d\u043d\u044b\u0439 \u0434\u043e\u0445\u043e\u0434"}),Object(j.jsx)(pe.a,{value:je.ESN,children:"\u0415\u0434\u0438\u043d\u044b\u0439 \u0441\u0435\u043b\u044c\u0441\u043a\u043e\u0445\u043e\u0437\u044f\u0439\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u043d\u0430\u043b\u043e\u0433"}),Object(j.jsx)(pe.a,{value:je.USN_INCOME,children:"\u0423\u043f\u0440\u043e\u0449\u0435\u043d\u043d\u0430\u044f (\u0434\u043e\u0445\u043e\u0434\u044b)"}),Object(j.jsx)(pe.a,{value:je.USN_INCOME_OUTCOME,children:"\u0423\u043f\u0440\u043e\u0449\u0435\u043d\u043d\u0430\u044f (\u0434\u043e\u0445\u043e\u0434\u044b - \u0440\u0430\u0441\u0445\u043e\u0434\u044b)"}),Object(j.jsx)(pe.a,{value:je.PATENT,children:"\u041f\u0430\u0442\u0435\u043d\u0442"})]}),Object(j.jsx)(ve.a,{children:" "})]})}),Object(j.jsx)(y.a,{item:!0,xs:12,children:Object(j.jsx)(Oe.a,{fullWidth:!0,variant:"outlined",id:"org.inn",name:"inn",label:"\u0418\u041d\u041d",value:u.values.inn,onChange:u.handleChange,onBlur:u.handleBlur,error:u.touched.inn&&Boolean(u.errors.inn),helperText:u.touched.inn&&u.errors.inn||" ",autoComplete:"off"})}),Object(j.jsx)(y.a,{item:!0,xs:12,children:Object(j.jsx)(Oe.a,{type:"email",fullWidth:!0,variant:"outlined",name:"email",label:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430",value:u.values.email,onBlur:u.handleBlur,onChange:u.handleChange,error:u.touched.email&&Boolean(u.errors.email),helperText:u.touched.email&&u.errors.email||" ",autoComplete:"off"})}),Object(j.jsx)(y.a,{item:!0,xs:12,children:Object(j.jsx)(Oe.a,{fullWidth:!0,variant:"outlined",name:"paymentAddress",label:"\u041f\u043b\u0430\u0442\u0435\u0436\u043d\u044b\u0439 web-\u0430\u0434\u0440\u0435\u0441",value:u.values.paymentAddress,onBlur:u.handleBlur,onChange:u.handleChange,error:u.touched.paymentAddress&&Boolean(u.errors.paymentAddress),helperText:u.touched.paymentAddress&&u.errors.paymentAddress||" ",autoComplete:"off"})})]})}),Object(j.jsxs)(se.a,{children:[Object(j.jsx)(_.a,{onClick:r,children:"\u041e\u0442\u043c\u0435\u043d\u0430"}),Object(j.jsx)(_.a,{type:"submit",color:"success",startIcon:a?Object(j.jsx)(ge.a,{}):Object(j.jsx)(T.a,{}),children:a?"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})]})]})},Ee=function(e){var t=e.open,n=e.onClose,r=Object(m.a)(e,ye);return Object(j.jsx)(ce.a,{open:t,onClose:n,children:Object(j.jsx)(Re,Object(f.a)({onClose:n},r))})},ke=function(e){var t=e.open,n=e.orgName,r=e.orgId,a=e.onClose,c=e.onDelete,i=s.a.useMemo((function(){return new ue}),[]);return Object(j.jsxs)(ce.a,{open:t,onClose:a,children:[Object(j.jsxs)(re.a,{children:['\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044e "',n,'"?']}),Object(j.jsxs)(se.a,{children:[Object(j.jsx)(_.a,{onClick:a,children:"\u041e\u0442\u043c\u0435\u043d\u0430"}),Object(j.jsx)(_.a,{startIcon:Object(j.jsx)(z.a,{}),color:"error",onClick:function(){i.remove(r),c()},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})]})},Ie=n(223),_e=n.n(Ie),Ce=function(){function e(){Object(ie.a)(this,e),this._tasks={}}return Object(oe.a)(e,[{key:"startTransformationTask",value:function(){var e=Object(b.a)(h.a.mark((function e(t,n,r){var a,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=_e()(),this._tasks[t]=a,e.next=4,a.transformRegister(n,r);case 4:return s=e.sent,this.stopTransformationTask(t),e.abrupt("return",s);case 7:case"end":return e.stop()}}),e,this)})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"stopTransformationTask",value:function(e){void 0!==this._tasks[e]&&(this._tasks[e].terminate(),delete this._tasks[e])}}]),e}(),Te=n(225),Ne=n.n(Te),De=n(224),we=n.n(De),Ae=function(e){var t=e.onFileChange,n=e.disabled,r=s.a.useState(),a=Object(x.a)(r,2),c=a[0],i=a[1],o=s.a.useRef();return Object(j.jsxs)(k.a,{sx:{display:"flex",alignItems:"center"},children:[Object(j.jsx)(Oe.a,{disabled:!0,fullWidth:!0,variant:"outlined",value:c||"\u0424\u0430\u0439\u043b \u043d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d",label:"\u0424\u0430\u0439\u043b \u0438\u0441\u0445\u043e\u0434\u043d\u043e\u0433\u043e \u0440\u0435\u0435\u0441\u0442\u0440\u0430",size:"small",sx:function(e){return{flexGrow:1,marginRight:e.spacing(1)}}}),c?Object(j.jsx)(q.a,{size:"large",color:"error",onClick:function(){i(void 0),o.current.value="",t(null)},disabled:n,children:Object(j.jsx)(we.a,{})}):Object(j.jsx)(q.a,{onClick:function(){o.current.click()},size:"large",disabled:n,children:Object(j.jsx)(Ne.a,{})}),Object(j.jsx)("input",{type:"file",hidden:!0,ref:o,onChange:function(e){var n=e.target.files&&e.target.files[0];i(null===n||void 0===n?void 0:n.name),t(n)},accept:".xls,.xlsx"})]})},Be=n(226),Pe=n.n(Be),qe=n(228),Fe=n.n(qe),Le=n(484),Me=n(229),Ge=n.n(Me),Ue=n(454),We=n(459),ze=n(483),Je=n(227),Ve=n.n(Je),Ke=function(e){var t=e.loading,n=e.resultFile,r=e.error,a=e.onTransformRequested,c=e.onResetRequested,i=e.onCancelTaskRequested,o=e.selectedOrgExists,l=s.a.useState(),u=Object(x.a)(l,2),O=u[0],h=u[1];return Object(j.jsxs)(E,{children:[Object(j.jsx)(k.a,{sx:{mb:2},children:Object(j.jsx)(I,{children:Object(j.jsxs)(k.a,{sx:{display:"flex",alignItems:"center"},children:[Object(j.jsx)(Pe.a,{color:"primary",sx:{mr:2}}),"\u0424\u043e\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0440\u0435\u0435\u0441\u0442\u0440\u0430"]})})}),!o&&Object(j.jsx)(k.a,{sx:{display:"flex",height:"100px",alignItems:"center",justifyContent:"center"},children:Object(j.jsx)(Ve.a,{color:"disabled",sx:{height:"64px",width:"64px"}})}),o&&!t&&!n&&!r&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(k.a,{sx:{mb:2},children:Object(j.jsx)(Ae,{disabled:t,onFileChange:function(e){h(e)}})}),Object(j.jsx)(_.a,{variant:"contained",fullWidth:!0,startIcon:Object(j.jsx)(Fe.a,{}),size:"large",disabled:!Boolean(O),onClick:function(){return a(O)},children:"\u041d\u0430\u0447\u0430\u0442\u044c \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435"})]}),(n||r)&&Object(j.jsxs)(j.Fragment,{children:[n&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(k.a,{sx:{mb:2},children:Object(j.jsxs)(d.a,{variant:"subtitle1",children:["\u0424\u0430\u0439\u043b \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430: ",Object(j.jsx)("strong",{children:n.name})]})}),Object(j.jsx)(k.a,{sx:{mb:2},children:Object(j.jsx)(_.a,{variant:"contained",color:"success",fullWidth:!0,startIcon:Object(j.jsx)(Ge.a,{}),size:"large",href:URL.createObjectURL(n),download:n.name,children:"\u0421\u043a\u0430\u0447\u0430\u0442\u044c"})}),Object(j.jsx)(k.a,{sx:{mb:2},children:Object(j.jsx)(Ue.a,{})})]}),r&&Object(j.jsx)(k.a,{sx:{mb:2},children:Object(j.jsxs)(We.a,{severity:"error",children:[Object(j.jsx)(ze.a,{children:"\u041e\u0448\u0438\u0431\u043a\u0430!"}),r]})}),Object(j.jsx)(_.a,{variant:"outlined",color:"primary",fullWidth:!0,onClick:c,children:"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442"})]}),t&&Object(j.jsxs)(k.a,{sx:{display:"flex",alignItems:"center",flexDirection:"column"},children:[Object(j.jsx)(k.a,{sx:{pt:3,pb:4},children:Object(j.jsx)(Le.a,{size:60})}),Object(j.jsx)(_.a,{variant:"outlined",color:"error",onClick:i,children:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c"})]})]})};!function(e){e[e.SET_RESET=0]="SET_RESET",e[e.RESET_ALL=1]="RESET_ALL",e[e.SET_IN_PROGRESS=2]="SET_IN_PROGRESS",e[e.SET_DONE=3]="SET_DONE",e[e.SET_ERROR=4]="SET_ERROR"}(fe||(fe={}));var $e=function(e,t){switch(t.type){case fe.RESET_ALL:return{};case fe.SET_RESET:var n=t.payload.orgId;e[n];return Object(m.a)(e,[n].map(p.a));case fe.SET_IN_PROGRESS:return Object(f.a)(Object(f.a)({},e),{},Object(g.a)({},t.payload.orgId,{inProgress:!0,taskId:t.payload.taskId}));case fe.SET_DONE:return Object(f.a)(Object(f.a)({},e),{},Object(g.a)({},t.payload.orgId,{inProgress:!1,resultFile:t.payload.resultFile,taskId:e[t.payload.orgId].taskId}));case fe.SET_ERROR:return Object(f.a)(Object(f.a)({},e),{},Object(g.a)({},t.payload.orgId,{inProgress:!1,error:t.payload.error,taskId:e[t.payload.orgId].taskId}));default:return e}},He=function(){var e,t,n=s.a.useMemo((function(){return new ue}),[]),a=s.a.useMemo((function(){return new Ce}),[]),c=s.a.useReducer($e,{}),i=Object(x.a)(c,2),o=i[0],l=i[1],d=s.a.useState(n.getAll()),u=Object(x.a)(d,2),O=u[0],g=u[1],f=s.a.useState(Object.keys(O)[0]),m=Object(x.a)(f,2),p=m[0],S=m[1],R=s.a.useState(),E=Object(x.a)(R,2),k=E[0],I=E[1],_=s.a.useState(!1),C=Object(x.a)(_,2),T=C[0],N=C[1],D=s.a.useState(!1),w=Object(x.a)(D,2),A=w[0],B=w[1],P=s.a.useState(),q=Object(x.a)(P,2),F=q[0],L=q[1],M=s.a.useMemo((function(){return Object.keys(O).map((function(e){return{org:O[e],id:e,taskStatus:o[e]?o[e].inProgress?r.IN_PROGRESS:o[e].resultFile?r.DONE:r.ERROR:r.IDLE}}))}),[O,o]),G=function(){var e=Object(b.a)(h.a.mark((function e(t){var n,r,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=p,r=Object(v.a)(),l({type:fe.SET_IN_PROGRESS,payload:{taskId:r,orgId:n}}),e.prev=3,e.next=6,a.startTransformationTask(r,t,O[p]);case 6:s=e.sent,l({type:fe.SET_DONE,payload:{resultFile:s,orgId:n}}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),l({type:fe.SET_ERROR,payload:{error:e.t0.message,orgId:n}});case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=n.getAll();g(e)};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(y.a,{container:!0,spacing:2,children:[Object(j.jsx)(y.a,{item:!0,xs:8,children:Object(j.jsx)(Z,{onAddOrgPressed:function(){L(void 0),B(!0)},orgs:M,selectedOrgId:p,onOrgSelected:function(e){S(e)},onDeleteRequested:function(e){I(e),N(!0)},onUpdateRequested:function(e){L(e),B(!0)},onFullResetRequested:function(){l({type:fe.RESET_ALL})}})}),Object(j.jsx)(y.a,{item:!0,xs:4,children:Object(j.jsx)(Ke,{selectedOrgExists:void 0!==p,loading:!!o[p]&&o[p].inProgress,resultFile:null===(e=o[p])||void 0===e?void 0:e.resultFile,error:null===(t=o[p])||void 0===t?void 0:t.error,onTransformRequested:G,onResetRequested:function(){l({type:fe.SET_RESET,payload:{orgId:p}})},onCancelTaskRequested:function(){a.stopTransformationTask(o[p].taskId),l({type:fe.SET_RESET,payload:{orgId:p}})}},p)})]}),Object(j.jsx)(Ee,{orgId:F,open:A,onClose:function(){B(!1)},onSaveOrAdd:function(){B(!1),U()}}),Object(j.jsx)(ke,{open:T,orgId:k,orgName:k&&O[k]&&O[k].name,onClose:function(){N(!1)},onDelete:function(){U(),N(!1)}})]})},Qe=n(464),Xe=n(231),Ye=Object(Xe.a)(),Ze=n(455),et=n(469);var tt=function(){return Object(j.jsxs)(Qe.a,{theme:Ye,children:[Object(j.jsx)(Ze.a,{}),Object(j.jsx)(u,{}),Object(j.jsx)(et.a,{sx:{mb:4,mt:4},children:Object(j.jsx)(He,{})})]})};i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(tt,{})}),document.getElementById("root"))}},[[401,1,2]]]);
//# sourceMappingURL=main.4532c2db.chunk.js.map