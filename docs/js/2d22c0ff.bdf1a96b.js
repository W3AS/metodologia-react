(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d22c0ff"],{f241:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-header",{attrs:{elevated:""}},[a("q-toolbar",{staticClass:"bg-amber-9"},[a("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Menu"},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}},[a("q-icon",{attrs:{name:"menu"}})],1),a("q-toolbar-title",[e._v("\n        Quasar App\n      ")]),a("div",[e._v("Quasar v"+e._s(e.$q.version))])],1)],1),a("q-drawer",{attrs:{"show-if-above":"",bordered:"","content-class":"bg-grey-2"},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[a("q-list",[a("q-item-label",{attrs:{header:""}},[e._v("Menu")]),a("q-item",{attrs:{clickable:"",to:"/",exact:"","active-class":"text-amber-10"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"home"}})],1),a("q-item-section",[a("q-item-label",[e._v("HOME")]),a("q-item-label",{attrs:{caption:""}})],1)],1),a("q-item",{attrs:{clickable:"",to:"/introducao",exact:"","active-class":"text-amber-10"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"assignment"}})],1),a("q-item-section",[a("q-item-label",[e._v("INTRODUÇÃO")]),a("q-item-label",{attrs:{caption:""}},[e._v("Introdução a metodologia REACT")])],1)],1)],1)],1),a("q-page-container",[a("router-view")],1)],1)},o=[],n=a("0967"),i=a("2b0e"),l=function(e,t){var a=window.open;if(!0===n["a"].is.cordova){if(void 0!==cordova&&void 0!==cordova.InAppBrowser&&void 0!==cordova.InAppBrowser.open)a=cordova.InAppBrowser.open;else if(void 0!==navigator&&void 0!==navigator.app)return navigator.app.loadUrl(e,{openExternal:!0})}else if(void 0!==i["a"].prototype.$q.electron)return i["a"].prototype.$q.electron.shell.openExternal(e);var r=a(e,"_blank");if(r)return r.focus(),r;t&&t()},s={name:"MyLayout",data:function(){return{leftDrawerOpen:!1}},methods:{openURL:l}},c=s,p=a("2877"),v=Object(p["a"])(c,r,o,!1,null,null,null);t["default"]=v.exports}}]);