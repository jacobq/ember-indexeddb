"use strict"
define("dummy/app",["exports","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,n,i){Object.defineProperty(e,"__esModule",{value:!0})
var r=Ember.Application.extend({modulePrefix:i.default.modulePrefix,podModulePrefix:i.default.podModulePrefix,Resolver:t.default});(0,n.default)(r,i.default.modulePrefix),e.default=r}),define("dummy/application/adapter",["exports","ember-indexeddb/adapters/indexed-db"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default.extend({})}),define("dummy/application/serializer",["exports","ember-indexeddb/serializers/indexed-db"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default.extend({})}),define("dummy/application/template",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"3MuJNsi/",block:'{"symbols":[],"statements":[[1,[20,"outlet"],false]],"hasEval":false}',meta:{moduleName:"dummy/application/template.hbs"}})}),define("dummy/example/route",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Route.extend({indexedDb:Ember.inject.service(),store:Ember.inject.service(),beforeModel:function(){return Ember.get(this,"indexedDb").setup()},model:function(){return Ember.get(this,"store").findAll("item")},actions:{fetchItems:function(){var e=this
return new Ember.RSVP.Promise(function(t,n){e._fetchFromAPI().then(function(){return e.refresh()}).then(t).catch(n)})},markAsRead:function(e){Ember.set(e,"isRead",!0),Ember.set(e,"isSynced",!1),e.save()},addItem:function(){var e=this
Ember.get(this,"store").createRecord("item",{title:"Item",date:(new Date).toISOString().split(".")[0],isSynced:!1,isRead:!1}).save().then(function(){return e.refresh()})},syncItems:function(){this._trySyncServer()},resetDb:function(){var e=this,t=Ember.get(this,"indexedDb"),n=Ember.get(this,"store")
return new Ember.RSVP.Promise(function(i,r){t.dropDatabase().then(function(){return n.unloadAll(),t.setup()}).then(function(){return e.refresh()}).then(function(){i()}).catch(r)})}},_trySyncServer:function(){Ember.get(this,"store").query("item",{isSynced:!1}).then(function(e){alert(Ember.get(e,"length")+" item(s) were synced to the API."),e.forEach(function(e){Ember.set(e,"isSynced",!0),e.save()})})},_fetchFromAPI:function(){return Ember.get(this,"indexedDb").add("item",[this._createItemPayload(),this._createItemPayload(),this._createItemPayload()])},_createItemPayload:function(){return{id:this._guid(),type:"item",attributes:{title:"Item ",date:(new Date).toISOString().split(".")[0],"is-read":!1}}},_guid:function(){return+new Date+"-"+Math.random()}})}),define("dummy/example/template",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"mmeNUABe",block:'{"symbols":["item"],"statements":[[6,"h1"],[8],[0,"\\n  Items\\n"],[9],[0,"\\n\\n"],[6,"table"],[10,"class","table"],[8],[0,"\\n  "],[6,"thead"],[8],[0,"\\n    "],[6,"tr"],[8],[0,"\\n      "],[6,"th"],[8],[0,"\\n        Created on\\n      "],[9],[0,"\\n      "],[6,"th"],[8],[0,"\\n        Is Read\\n      "],[9],[0,"\\n      "],[6,"th"],[8],[0,"\\n        Is Synced\\n      "],[9],[0,"\\n      "],[6,"th"],[8],[9],[0,"\\n    "],[9],[0,"\\n  "],[9],[0,"\\n  "],[6,"tbody"],[8],[0,"\\n"],[4,"each",[[22,["model"]]],null,{"statements":[[0,"      "],[6,"tr"],[10,"class","item"],[8],[0,"\\n        "],[6,"td"],[8],[0,"\\n          "],[1,[21,1,["date"]],false],[0,"\\n        "],[9],[0,"\\n        "],[6,"td"],[8],[0,"\\n          "],[1,[21,1,["isRead"]],false],[0,"\\n        "],[9],[0,"\\n        "],[6,"td"],[8],[0,"\\n          "],[1,[21,1,["isSynced"]],false],[0,"\\n        "],[9],[0,"\\n        "],[6,"td"],[8],[0,"\\n          "],[6,"button"],[3,"action",[[21,0,[]],"markAsRead",[21,1,[]]]],[8],[0,"\\n            Mark as read\\n          "],[9],[0,"\\n        "],[9],[0,"\\n      "],[9],[0,"\\n"]],"parameters":[1]},null],[0,"  "],[9],[0,"\\n"],[9],[0,"\\n\\n"],[6,"button"],[10,"id","add-items"],[3,"action",[[21,0,[]],"fetchItems"]],[8],[0,"\\n  Fetch items from API\\n"],[9],[0,"\\n\\n"],[6,"button"],[10,"id","add-items"],[3,"action",[[21,0,[]],"addItem"]],[8],[0,"\\n  Add item locally\\n"],[9],[0,"\\n\\n"],[6,"button"],[10,"id","add-items"],[3,"action",[[21,0,[]],"syncItems"]],[8],[0,"\\n  Sync to server\\n"],[9],[0,"\\n\\n"],[6,"button"],[10,"id","reset-db"],[3,"action",[[21,0,[]],"resetDb"]],[8],[0,"\\n  Reset DB\\n"],[9],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"dummy/example/template.hbs"}})}),define("dummy/helpers/app-version",["exports","dummy/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,n){function i(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.default.APP.version,d=i.versionOnly||i.hideSha,a=i.shaOnly||i.hideVersion,o=null
return d&&(i.showExtended&&(o=r.match(n.versionExtendedRegExp)),o||(o=r.match(n.versionRegExp))),a&&(o=r.match(n.shaRegExp)),o?o[0]:r}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=i,e.default=Ember.Helper.helper(i)}),define("dummy/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("dummy/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("dummy/index/route",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Route.extend({beforeModel:function(){window.location.href="docs"}})}),define("dummy/index/template",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"k5o8Lcu4",block:'{"symbols":[],"statements":[[1,[20,"outlet"],false],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"dummy/index/template.hbs"}})}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,n){Object.defineProperty(e,"__esModule",{value:!0})
var i=void 0,r=void 0
n.default.APP&&(i=n.default.APP.name,r=n.default.APP.version),e.default={name:"App Version",initialize:(0,t.default)(i,r)}}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/ember-data",["exports","ember-data/setup-container","ember-data"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ember-data",initialize:t.default}}),define("dummy/initializers/export-application-global",["exports","dummy/config/environment"],function(e,t){function n(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var n
if("undefined"!=typeof window)n=window
else if("undefined"!=typeof global)n=global
else{if("undefined"==typeof self)return
n=self}var i,r=t.default.exportApplicationGlobal
i="string"==typeof r?r:Ember.String.classify(t.default.modulePrefix),n[i]||(n[i]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete n[i]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=n,e.default={name:"export-application-global",initialize:n}}),define("dummy/instance-initializers/ember-data",["exports","ember-data/initialize-store-service"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ember-data",initialize:t.default}}),define("dummy/item/model",["exports","ember-data"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0})
var n=t.default.Model,i=t.default.attr
e.default=n.extend({title:i("string"),date:i("string"),isRead:i("boolean",{defaultValue:!1}),isSynced:i("boolean",{defaultValue:!0})})}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("dummy/router",["exports","dummy/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0})
var n=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
n.map(function(){this.route("example")}),e.default=n}),define("dummy/services/indexed-db-configuration",["exports","ember-indexeddb/services/indexed-db-configuration"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default.extend({currentVersion:1,version1:Ember.computed(function(){return{stores:{item:"&id,*isRead,*isSynced"}}}),mapTable:Ember.computed(function(){var e=this
return{item:function(t){return{id:e._toString(Ember.get(t,"id")),json:e._cleanObject(t),isRead:e._toZeroOne(Ember.get(t,"attributes.is-read")),isSynced:e._toZeroOne(Ember.get(t,"attributes.is-synced"),1)}}}})})}),define("dummy/services/indexed-db",["exports","ember-indexeddb/services/indexed-db"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/config/environment",[],function(){try{var e="dummy/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),n={default:JSON.parse(unescape(t))}
return Object.defineProperty(n,"__esModule",{value:!0}),n}catch(t){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("dummy/app").default.create({name:"ember-indexeddb",version:"1.0.1+e03681e5"})