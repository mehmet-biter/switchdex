(this.webpackJsonpswitchdex=this.webpackJsonpswitchdex||[]).push([[8],{801:function(e,t,n){"use strict";n.r(t),n.d(t,"TokenizedRegistryEvents",(function(){return a})),n.d(t,"TokenizedRegistryContract",(function(){return v}));var a,s=n(462),r=n(0),c=n.n(r),o=n(5),i=n(29),u=n(73),d=n(61),l=n(141),p=n(60),y=n(72),m=n(41),h=n(25),g=n(9),A=n(24),f=n(22),b=n(23);!function(e){e.OwnershipTransferred="OwnershipTransferred"}(a||(a={}));var v=function(e){function t(e,n,a,s){var r,c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:t.deployedBytecode;return Object(i.a)(this,t),(r=Object(u.a)(this,Object(d.a)(t).call(this,"TokenizedRegistry",t.ABI(),e,n,a,s,c)))._methodABIIndex={},r._subscriptionManager=void 0,g.classUtils.bindAll(Object(l.a)(r),["_abiEncoderByFunctionSignature","address","_web3Wrapper"]),r._subscriptionManager=new m.SubscriptionManager(t.ABI(),r._web3Wrapper),t.ABI().forEach((function(e,t){if("function"===e.type){var n=e;r._methodABIIndex[n.name]=t}})),r}return Object(y.a)(t,e),Object(p.a)(t,[{key:"getFunctionSignature",value:function(e){var n=this._methodABIIndex[e],a=t.ABI()[n];return Object(m.methodAbiToFunctionSignature)(a)}},{key:"getABIDecodedTransactionData",value:function(e,t){var n=this.getFunctionSignature(e);return this._lookupAbiEncoder(n).strictDecode(t)}},{key:"getABIDecodedReturnData",value:function(e,t){var n=this.getFunctionSignature(e);return this._lookupAbiEncoder(n).strictDecodeReturnValue(t)}},{key:"getSelector",value:function(e){var t=this.getFunctionSignature(e);return this._lookupAbiEncoder(t).getSelector()}},{key:"owner",value:function(){var e=this;return{callAsync:function(){var t,n,a,s,r=arguments;return c.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:{},n=r.length>1?r[1]:void 0,m.BaseContract._assertCallParams(t,n),i.next=5,c.a.awrap(e._performCallAsync(Object(o.a)({},t,{data:this.getABIEncodedTransactionData()}),n));case 5:return a=i.sent,s=e._lookupAbiEncoder("owner()"),i.abrupt("return",s.strictDecodeReturnValue(a));case 8:case"end":return i.stop()}}),null,this)},getABIEncodedTransactionData:function(){return e._strictEncodeArguments("owner()",[])}}}},{key:"tokens",value:function(e){var t=this;f.assert.isString("index_0",e);return{callAsync:function(){var e,n,a,s,r=arguments;return c.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:{},n=r.length>1?r[1]:void 0,m.BaseContract._assertCallParams(e,n),i.next=5,c.a.awrap(t._performCallAsync(Object(o.a)({},e,{data:this.getABIEncodedTransactionData()}),n));case 5:return a=i.sent,s=t._lookupAbiEncoder("tokens(address)"),i.abrupt("return",s.strictDecodeReturnValue(a));case 8:case"end":return i.stop()}}),null,this)},getABIEncodedTransactionData:function(){return t._strictEncodeArguments("tokens(address)",[e.toLowerCase()])}}}},{key:"tokenAddresses",value:function(e){var t=this;f.assert.isBigNumber("index_0",e);return{callAsync:function(){var e,n,a,s,r=arguments;return c.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:{},n=r.length>1?r[1]:void 0,m.BaseContract._assertCallParams(e,n),i.next=5,c.a.awrap(t._performCallAsync(Object(o.a)({},e,{data:this.getABIEncodedTransactionData()}),n));case 5:return a=i.sent,s=t._lookupAbiEncoder("tokenAddresses(uint256)"),i.abrupt("return",s.strictDecodeReturnValue(a));case 8:case"end":return i.stop()}}),null,this)},getABIEncodedTransactionData:function(){return t._strictEncodeArguments("tokenAddresses(uint256)",[e])}}}},{key:"transferOwnership",value:function(e){var t=this;f.assert.isString("_newOwner",e);return{sendTransactionAsync:function(e){var n,a,s=arguments;return c.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:{shouldValidate:!0},r.next=3,c.a.awrap(t._applyDefaultsToTxDataAsync(Object(o.a)({},e,{data:this.getABIEncodedTransactionData()}),this.estimateGasAsync.bind(this)));case 3:if(a=r.sent,!1===n.shouldValidate){r.next=7;break}return r.next=7,c.a.awrap(this.callAsync(a));case 7:return r.abrupt("return",t._web3Wrapper.sendTransactionAsync(a));case 8:case"end":return r.stop()}}),null,this)},awaitTransactionSuccessAsync:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{shouldValidate:!0};return t._promiseWithTransactionHash(this.sendTransactionAsync(e,n),n)},estimateGasAsync:function(e){var n;return c.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,c.a.awrap(t._applyDefaultsToTxDataAsync(Object(o.a)({},e,{data:this.getABIEncodedTransactionData()})));case 2:return n=a.sent,a.abrupt("return",t._web3Wrapper.estimateGasAsync(n));case 4:case"end":return a.stop()}}),null,this)},callAsync:function(){var e,n,a,s,r=arguments;return c.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:{},n=r.length>1?r[1]:void 0,m.BaseContract._assertCallParams(e,n),i.next=5,c.a.awrap(t._performCallAsync(Object(o.a)({},e,{data:this.getABIEncodedTransactionData()}),n));case 5:return a=i.sent,s=t._lookupAbiEncoder("transferOwnership(address)"),i.abrupt("return",s.strictDecodeReturnValue(a));case 8:case"end":return i.stop()}}),null,this)},getABIEncodedTransactionData:function(){return t._strictEncodeArguments("transferOwnership(address)",[e.toLowerCase()])}}}},{key:"addTokens",value:function(e,t,n,a,s){var r=this;f.assert.isArray("_tokens",e),f.assert.isArray("_assets",t),f.assert.isArray("_names",n),f.assert.isArray("_symbols",a),f.assert.isArray("_types",s);var i="addTokens(address[],address[],string[],string[],uint256[])";return{sendTransactionAsync:function(e){var t,n,a=arguments;return c.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return t=a.length>1&&void 0!==a[1]?a[1]:{shouldValidate:!0},s.next=3,c.a.awrap(r._applyDefaultsToTxDataAsync(Object(o.a)({},e,{data:this.getABIEncodedTransactionData()}),this.estimateGasAsync.bind(this)));case 3:if(n=s.sent,!1===t.shouldValidate){s.next=7;break}return s.next=7,c.a.awrap(this.callAsync(n));case 7:return s.abrupt("return",r._web3Wrapper.sendTransactionAsync(n));case 8:case"end":return s.stop()}}),null,this)},awaitTransactionSuccessAsync:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{shouldValidate:!0};return r._promiseWithTransactionHash(this.sendTransactionAsync(e,t),t)},estimateGasAsync:function(e){var t;return c.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.a.awrap(r._applyDefaultsToTxDataAsync(Object(o.a)({},e,{data:this.getABIEncodedTransactionData()})));case 2:return t=n.sent,n.abrupt("return",r._web3Wrapper.estimateGasAsync(t));case 4:case"end":return n.stop()}}),null,this)},callAsync:function(){var e,t,n,a,s=arguments;return c.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:return e=s.length>0&&void 0!==s[0]?s[0]:{},t=s.length>1?s[1]:void 0,m.BaseContract._assertCallParams(e,t),u.next=5,c.a.awrap(r._performCallAsync(Object(o.a)({},e,{data:this.getABIEncodedTransactionData()}),t));case 5:return n=u.sent,a=r._lookupAbiEncoder(i),u.abrupt("return",a.strictDecodeReturnValue(n));case 8:case"end":return u.stop()}}),null,this)},getABIEncodedTransactionData:function(){return r._strictEncodeArguments(i,[e,t,n,a,s])}}}},{key:"removeTokens",value:function(e){var t=this;f.assert.isArray("_tokens",e);return{sendTransactionAsync:function(e){var n,a,s=arguments;return c.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:{shouldValidate:!0},r.next=3,c.a.awrap(t._applyDefaultsToTxDataAsync(Object(o.a)({},e,{data:this.getABIEncodedTransactionData()}),this.estimateGasAsync.bind(this)));case 3:if(a=r.sent,!1===n.shouldValidate){r.next=7;break}return r.next=7,c.a.awrap(this.callAsync(a));case 7:return r.abrupt("return",t._web3Wrapper.sendTransactionAsync(a));case 8:case"end":return r.stop()}}),null,this)},awaitTransactionSuccessAsync:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{shouldValidate:!0};return t._promiseWithTransactionHash(this.sendTransactionAsync(e,n),n)},estimateGasAsync:function(e){var n;return c.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,c.a.awrap(t._applyDefaultsToTxDataAsync(Object(o.a)({},e,{data:this.getABIEncodedTransactionData()})));case 2:return n=a.sent,a.abrupt("return",t._web3Wrapper.estimateGasAsync(n));case 4:case"end":return a.stop()}}),null,this)},callAsync:function(){var e,n,a,s,r=arguments;return c.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:{},n=r.length>1?r[1]:void 0,m.BaseContract._assertCallParams(e,n),i.next=5,c.a.awrap(t._performCallAsync(Object(o.a)({},e,{data:this.getABIEncodedTransactionData()}),n));case 5:return a=i.sent,s=t._lookupAbiEncoder("removeTokens(address[])"),i.abrupt("return",s.strictDecodeReturnValue(a));case 8:case"end":return i.stop()}}),null,this)},getABIEncodedTransactionData:function(){return t._strictEncodeArguments("removeTokens(address[])",[e])}}}},{key:"addToken",value:function(e,t,n,a,s){var r=this;f.assert.isString("_token",e),f.assert.isString("_asset",t),f.assert.isString("_name",n),f.assert.isString("_symbol",a),f.assert.isBigNumber("_type",s);var i="addToken(address,address,string,string,uint256)";return{sendTransactionAsync:function(e){var t,n,a=arguments;return c.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return t=a.length>1&&void 0!==a[1]?a[1]:{shouldValidate:!0},s.next=3,c.a.awrap(r._applyDefaultsToTxDataAsync(Object(o.a)({},e,{data:this.getABIEncodedTransactionData()}),this.estimateGasAsync.bind(this)));case 3:if(n=s.sent,!1===t.shouldValidate){s.next=7;break}return s.next=7,c.a.awrap(this.callAsync(n));case 7:return s.abrupt("return",r._web3Wrapper.sendTransactionAsync(n));case 8:case"end":return s.stop()}}),null,this)},awaitTransactionSuccessAsync:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{shouldValidate:!0};return r._promiseWithTransactionHash(this.sendTransactionAsync(e,t),t)},estimateGasAsync:function(e){var t;return c.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.a.awrap(r._applyDefaultsToTxDataAsync(Object(o.a)({},e,{data:this.getABIEncodedTransactionData()})));case 2:return t=n.sent,n.abrupt("return",r._web3Wrapper.estimateGasAsync(t));case 4:case"end":return n.stop()}}),null,this)},callAsync:function(){var e,t,n,a,s=arguments;return c.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:return e=s.length>0&&void 0!==s[0]?s[0]:{},t=s.length>1?s[1]:void 0,m.BaseContract._assertCallParams(e,t),u.next=5,c.a.awrap(r._performCallAsync(Object(o.a)({},e,{data:this.getABIEncodedTransactionData()}),t));case 5:return n=u.sent,a=r._lookupAbiEncoder(i),u.abrupt("return",a.strictDecodeReturnValue(n));case 8:case"end":return u.stop()}}),null,this)},getABIEncodedTransactionData:function(){return r._strictEncodeArguments(i,[e.toLowerCase(),t.toLowerCase(),n,a,s])}}}},{key:"removeToken",value:function(e){var t=this;f.assert.isString("_token",e);return{sendTransactionAsync:function(e){var n,a,s=arguments;return c.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:{shouldValidate:!0},r.next=3,c.a.awrap(t._applyDefaultsToTxDataAsync(Object(o.a)({},e,{data:this.getABIEncodedTransactionData()}),this.estimateGasAsync.bind(this)));case 3:if(a=r.sent,!1===n.shouldValidate){r.next=7;break}return r.next=7,c.a.awrap(this.callAsync(a));case 7:return r.abrupt("return",t._web3Wrapper.sendTransactionAsync(a));case 8:case"end":return r.stop()}}),null,this)},awaitTransactionSuccessAsync:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{shouldValidate:!0};return t._promiseWithTransactionHash(this.sendTransactionAsync(e,n),n)},estimateGasAsync:function(e){var n;return c.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,c.a.awrap(t._applyDefaultsToTxDataAsync(Object(o.a)({},e,{data:this.getABIEncodedTransactionData()})));case 2:return n=a.sent,a.abrupt("return",t._web3Wrapper.estimateGasAsync(n));case 4:case"end":return a.stop()}}),null,this)},callAsync:function(){var e,n,a,s,r=arguments;return c.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:{},n=r.length>1?r[1]:void 0,m.BaseContract._assertCallParams(e,n),i.next=5,c.a.awrap(t._performCallAsync(Object(o.a)({},e,{data:this.getABIEncodedTransactionData()}),n));case 5:return a=i.sent,s=t._lookupAbiEncoder("removeToken(address)"),i.abrupt("return",s.strictDecodeReturnValue(a));case 8:case"end":return i.stop()}}),null,this)},getABIEncodedTransactionData:function(){return t._strictEncodeArguments("removeToken(address)",[e.toLowerCase()])}}}},{key:"setTokenName",value:function(e,t){var n=this;f.assert.isString("_token",e),f.assert.isString("_name",t);return{sendTransactionAsync:function(e){var t,a,s=arguments;return c.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t=s.length>1&&void 0!==s[1]?s[1]:{shouldValidate:!0},r.next=3,c.a.awrap(n._applyDefaultsToTxDataAsync(Object(o.a)({},e,{data:this.getABIEncodedTransactionData()}),this.estimateGasAsync.bind(this)));case 3:if(a=r.sent,!1===t.shouldValidate){r.next=7;break}return r.next=7,c.a.awrap(this.callAsync(a));case 7:return r.abrupt("return",n._web3Wrapper.sendTransactionAsync(a));case 8:case"end":return r.stop()}}),null,this)},awaitTransactionSuccessAsync:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{shouldValidate:!0};return n._promiseWithTransactionHash(this.sendTransactionAsync(e,t),t)},estimateGasAsync:function(e){var t;return c.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,c.a.awrap(n._applyDefaultsToTxDataAsync(Object(o.a)({},e,{data:this.getABIEncodedTransactionData()})));case 2:return t=a.sent,a.abrupt("return",n._web3Wrapper.estimateGasAsync(t));case 4:case"end":return a.stop()}}),null,this)},callAsync:function(){var e,t,a,s,r=arguments;return c.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:{},t=r.length>1?r[1]:void 0,m.BaseContract._assertCallParams(e,t),i.next=5,c.a.awrap(n._performCallAsync(Object(o.a)({},e,{data:this.getABIEncodedTransactionData()}),t));case 5:return a=i.sent,s=n._lookupAbiEncoder("setTokenName(address,string)"),i.abrupt("return",s.strictDecodeReturnValue(a));case 8:case"end":return i.stop()}}),null,this)},getABIEncodedTransactionData:function(){return n._strictEncodeArguments("setTokenName(address,string)",[e.toLowerCase(),t])}}}},{key:"setTokenSymbol",value:function(e,t){var n=this;f.assert.isString("_token",e),f.assert.isString("_symbol",t);return{sendTransactionAsync:function(e){var t,a,s=arguments;return c.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t=s.length>1&&void 0!==s[1]?s[1]:{shouldValidate:!0},r.next=3,c.a.awrap(n._applyDefaultsToTxDataAsync(Object(o.a)({},e,{data:this.getABIEncodedTransactionData()}),this.estimateGasAsync.bind(this)));case 3:if(a=r.sent,!1===t.shouldValidate){r.next=7;break}return r.next=7,c.a.awrap(this.callAsync(a));case 7:return r.abrupt("return",n._web3Wrapper.sendTransactionAsync(a));case 8:case"end":return r.stop()}}),null,this)},awaitTransactionSuccessAsync:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{shouldValidate:!0};return n._promiseWithTransactionHash(this.sendTransactionAsync(e,t),t)},estimateGasAsync:function(e){var t;return c.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,c.a.awrap(n._applyDefaultsToTxDataAsync(Object(o.a)({},e,{data:this.getABIEncodedTransactionData()})));case 2:return t=a.sent,a.abrupt("return",n._web3Wrapper.estimateGasAsync(t));case 4:case"end":return a.stop()}}),null,this)},callAsync:function(){var e,t,a,s,r=arguments;return c.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:{},t=r.length>1?r[1]:void 0,m.BaseContract._assertCallParams(e,t),i.next=5,c.a.awrap(n._performCallAsync(Object(o.a)({},e,{data:this.getABIEncodedTransactionData()}),t));case 5:return a=i.sent,s=n._lookupAbiEncoder("setTokenSymbol(address,string)"),i.abrupt("return",s.strictDecodeReturnValue(a));case 8:case"end":return i.stop()}}),null,this)},getABIEncodedTransactionData:function(){return n._strictEncodeArguments("setTokenSymbol(address,string)",[e.toLowerCase(),t])}}}},{key:"getTokenAddressBySymbol",value:function(e){var t=this;f.assert.isString("_symbol",e);return{callAsync:function(){var e,n,a,s,r=arguments;return c.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:{},n=r.length>1?r[1]:void 0,m.BaseContract._assertCallParams(e,n),i.next=5,c.a.awrap(t._performCallAsync(Object(o.a)({},e,{data:this.getABIEncodedTransactionData()}),n));case 5:return a=i.sent,s=t._lookupAbiEncoder("getTokenAddressBySymbol(string)"),i.abrupt("return",s.strictDecodeReturnValue(a));case 8:case"end":return i.stop()}}),null,this)},getABIEncodedTransactionData:function(){return t._strictEncodeArguments("getTokenAddressBySymbol(string)",[e])}}}},{key:"getTokenAddressByName",value:function(e){var t=this;f.assert.isString("_name",e);return{callAsync:function(){var e,n,a,s,r=arguments;return c.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:{},n=r.length>1?r[1]:void 0,m.BaseContract._assertCallParams(e,n),i.next=5,c.a.awrap(t._performCallAsync(Object(o.a)({},e,{data:this.getABIEncodedTransactionData()}),n));case 5:return a=i.sent,s=t._lookupAbiEncoder("getTokenAddressByName(string)"),i.abrupt("return",s.strictDecodeReturnValue(a));case 8:case"end":return i.stop()}}),null,this)},getABIEncodedTransactionData:function(){return t._strictEncodeArguments("getTokenAddressByName(string)",[e])}}}},{key:"getTokenByAddress",value:function(e){var t=this;f.assert.isString("_token",e);return{callAsync:function(){var e,n,a,s,r=arguments;return c.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:{},n=r.length>1?r[1]:void 0,m.BaseContract._assertCallParams(e,n),i.next=5,c.a.awrap(t._performCallAsync(Object(o.a)({},e,{data:this.getABIEncodedTransactionData()}),n));case 5:return a=i.sent,s=t._lookupAbiEncoder("getTokenByAddress(address)"),i.abrupt("return",s.strictDecodeReturnValue(a));case 8:case"end":return i.stop()}}),null,this)},getABIEncodedTransactionData:function(){return t._strictEncodeArguments("getTokenByAddress(address)",[e.toLowerCase()])}}}},{key:"getTokenByName",value:function(e){var t=this;f.assert.isString("_name",e);return{callAsync:function(){var e,n,a,s,r=arguments;return c.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:{},n=r.length>1?r[1]:void 0,m.BaseContract._assertCallParams(e,n),i.next=5,c.a.awrap(t._performCallAsync(Object(o.a)({},e,{data:this.getABIEncodedTransactionData()}),n));case 5:return a=i.sent,s=t._lookupAbiEncoder("getTokenByName(string)"),i.abrupt("return",s.strictDecodeReturnValue(a));case 8:case"end":return i.stop()}}),null,this)},getABIEncodedTransactionData:function(){return t._strictEncodeArguments("getTokenByName(string)",[e])}}}},{key:"getTokenBySymbol",value:function(e){var t=this;f.assert.isString("_symbol",e);return{callAsync:function(){var e,n,a,s,r=arguments;return c.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:{},n=r.length>1?r[1]:void 0,m.BaseContract._assertCallParams(e,n),i.next=5,c.a.awrap(t._performCallAsync(Object(o.a)({},e,{data:this.getABIEncodedTransactionData()}),n));case 5:return a=i.sent,s=t._lookupAbiEncoder("getTokenBySymbol(string)"),i.abrupt("return",s.strictDecodeReturnValue(a));case 8:case"end":return i.stop()}}),null,this)},getABIEncodedTransactionData:function(){return t._strictEncodeArguments("getTokenBySymbol(string)",[e])}}}},{key:"getTokenAddresses",value:function(){var e=this;return{callAsync:function(){var t,n,a,s,r=arguments;return c.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:{},n=r.length>1?r[1]:void 0,m.BaseContract._assertCallParams(t,n),i.next=5,c.a.awrap(e._performCallAsync(Object(o.a)({},t,{data:this.getABIEncodedTransactionData()}),n));case 5:return a=i.sent,s=e._lookupAbiEncoder("getTokenAddresses()"),i.abrupt("return",s.strictDecodeReturnValue(a));case 8:case"end":return i.stop()}}),null,this)},getABIEncodedTransactionData:function(){return e._strictEncodeArguments("getTokenAddresses()",[])}}}},{key:"getTokens",value:function(e,t,n){var a=this;f.assert.isBigNumber("_start",e),f.assert.isBigNumber("_count",t),f.assert.isBigNumber("_tokenType",n);var s="getTokens(uint256,uint256,uint256)";return{callAsync:function(){var e,t,n,r,i=arguments;return c.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:return e=i.length>0&&void 0!==i[0]?i[0]:{},t=i.length>1?i[1]:void 0,m.BaseContract._assertCallParams(e,t),u.next=5,c.a.awrap(a._performCallAsync(Object(o.a)({},e,{data:this.getABIEncodedTransactionData()}),t));case 5:return n=u.sent,r=a._lookupAbiEncoder(s),u.abrupt("return",r.strictDecodeReturnValue(n));case 8:case"end":return u.stop()}}),null,this)},getABIEncodedTransactionData:function(){return a._strictEncodeArguments(s,[e,t,n])}}}},{key:"isTokenType",value:function(e,t){var n=this;f.assert.isString("_token",e),f.assert.isBigNumber("_tokenType",t);return{callAsync:function(){var e,t,a,s,r=arguments;return c.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:{},t=r.length>1?r[1]:void 0,m.BaseContract._assertCallParams(e,t),i.next=5,c.a.awrap(n._performCallAsync(Object(o.a)({},e,{data:this.getABIEncodedTransactionData()}),t));case 5:return a=i.sent,s=n._lookupAbiEncoder("isTokenType(address,uint256)"),i.abrupt("return",s.strictDecodeReturnValue(a));case 8:case"end":return i.stop()}}),null,this)},getABIEncodedTransactionData:function(){return n._strictEncodeArguments("isTokenType(address,uint256)",[e.toLowerCase(),t])}}}},{key:"getTokenAsset",value:function(e,t){var n=this;f.assert.isString("_token",e),f.assert.isBigNumber("_tokenType",t);return{callAsync:function(){var e,t,a,s,r=arguments;return c.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:{},t=r.length>1?r[1]:void 0,m.BaseContract._assertCallParams(e,t),i.next=5,c.a.awrap(n._performCallAsync(Object(o.a)({},e,{data:this.getABIEncodedTransactionData()}),t));case 5:return a=i.sent,s=n._lookupAbiEncoder("getTokenAsset(address,uint256)"),i.abrupt("return",s.strictDecodeReturnValue(a));case 8:case"end":return i.stop()}}),null,this)},getABIEncodedTransactionData:function(){return n._strictEncodeArguments("getTokenAsset(address,uint256)",[e.toLowerCase(),t])}}}},{key:"subscribe",value:function(e,n,s){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],c=arguments.length>4?arguments[4]:void 0;f.assert.doesBelongToStringEnum("eventName",e,a),f.assert.doesConformToSchema("indexFilterValues",n,h.schemas.indexFilterValuesSchema),f.assert.isFunction("callback",s);var o=this._subscriptionManager.subscribe(this.address,e,n,t.ABI(),s,r,c);return o}},{key:"unsubscribe",value:function(e){this._subscriptionManager.unsubscribe(e)}},{key:"unsubscribeAll",value:function(){this._subscriptionManager.unsubscribeAll()}},{key:"getLogsAsync",value:function(e,n,s){var r;return c.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return f.assert.doesBelongToStringEnum("eventName",e,a),f.assert.doesConformToSchema("blockRange",n,h.schemas.blockRangeSchema),f.assert.doesConformToSchema("indexFilterValues",s,h.schemas.indexFilterValuesSchema),o.next=5,c.a.awrap(this._subscriptionManager.getLogsAsync(this.address,e,n,s,t.ABI()));case 5:return r=o.sent,o.abrupt("return",r);case 7:case"end":return o.stop()}}),null,this)}}],[{key:"deployFrom0xArtifactAsync",value:function(e,n,a,s){var r,o,i,u,d,l,p;return c.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:if(f.assert.doesConformToSchema("txDefaults",a,h.schemas.txDataSchema,[h.schemas.addressSchema,h.schemas.numberSchema,h.schemas.jsNumber]),void 0!==e.compilerOutput){c.next=3;break}throw new Error("Compiler output not found in the artifact file");case 3:if(r=g.providerUtils.standardizeOrThrow(n),o=e.compilerOutput.evm.bytecode.object,i=e.compilerOutput.abi,u={},void 0!==Object.keys(s))for(d=0,l=Object.keys(s);d<l.length;d++)p=l[d],u[p]=s[p].compilerOutput.abi;return c.abrupt("return",t.deployAsync(o,i,r,a,u));case 9:case"end":return c.stop()}}))}},{key:"deployAsync",value:function(e,n,a,r,i){var u,d,l,p,y,v,T,_,k,w,x;return c.a.async((function(B){for(;;)switch(B.prev=B.next){case 0:return f.assert.isHexString("bytecode",e),f.assert.doesConformToSchema("txDefaults",r,h.schemas.txDataSchema,[h.schemas.addressSchema,h.schemas.numberSchema,h.schemas.jsNumber]),u=g.providerUtils.standardizeOrThrow(a),d=m.BaseContract._lookupConstructorAbi(n),l=m.BaseContract._formatABIDataItemList(d.inputs,[],m.BaseContract._bigNumberToString),Object(s.a)(l),p=new b.utils.Interface(n),y=p.deployFunction,v=y.encode(e,[]),T=new A.Web3Wrapper(u),B.next=12,c.a.awrap(m.BaseContract._applyDefaultsToContractTxDataAsync(Object(o.a)({data:v},r),T.estimateGasAsync.bind(T)));case 12:return _=B.sent,B.next=15,c.a.awrap(T.sendTransactionAsync(_));case 15:return k=B.sent,g.logUtils.log("transactionHash: ".concat(k)),B.next=19,c.a.awrap(T.awaitTransactionSuccessAsync(k));case 19:return w=B.sent,g.logUtils.log("TokenizedRegistry successfully deployed at ".concat(w.contractAddress)),(x=new t(w.contractAddress,u,r,i)).constructorArgs=[],B.abrupt("return",x);case 24:case"end":return B.stop()}}))}},{key:"ABI",value:function(){return[{constant:!0,inputs:[],name:"owner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"index_0",type:"address"}],name:"tokens",outputs:[{name:"token",type:"address"},{name:"asset",type:"address"},{name:"name",type:"string"},{name:"symbol",type:"string"},{name:"tokenType",type:"uint256"},{name:"index",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"index_0",type:"uint256"}],name:"tokenAddresses",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{anonymous:!1,inputs:[{name:"previousOwner",type:"address",indexed:!0},{name:"newOwner",type:"address",indexed:!0}],name:"OwnershipTransferred",outputs:[],type:"event"},{constant:!1,inputs:[{name:"_tokens",type:"address[]"},{name:"_assets",type:"address[]"},{name:"_names",type:"string[]"},{name:"_symbols",type:"string[]"},{name:"_types",type:"uint256[]"}],name:"addTokens",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_tokens",type:"address[]"}],name:"removeTokens",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_token",type:"address"},{name:"_asset",type:"address"},{name:"_name",type:"string"},{name:"_symbol",type:"string"},{name:"_type",type:"uint256"}],name:"addToken",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_token",type:"address"}],name:"removeToken",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_token",type:"address"},{name:"_name",type:"string"}],name:"setTokenName",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_token",type:"address"},{name:"_symbol",type:"string"}],name:"setTokenSymbol",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"_symbol",type:"string"}],name:"getTokenAddressBySymbol",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_name",type:"string"}],name:"getTokenAddressByName",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_token",type:"address"}],name:"getTokenByAddress",outputs:[{name:"",type:"tuple",components:[{name:"token",type:"address"},{name:"asset",type:"address"},{name:"name",type:"string"},{name:"symbol",type:"string"},{name:"tokenType",type:"uint256"},{name:"index",type:"uint256"}]}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_name",type:"string"}],name:"getTokenByName",outputs:[{name:"",type:"tuple",components:[{name:"token",type:"address"},{name:"asset",type:"address"},{name:"name",type:"string"},{name:"symbol",type:"string"},{name:"tokenType",type:"uint256"},{name:"index",type:"uint256"}]}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_symbol",type:"string"}],name:"getTokenBySymbol",outputs:[{name:"",type:"tuple",components:[{name:"token",type:"address"},{name:"asset",type:"address"},{name:"name",type:"string"},{name:"symbol",type:"string"},{name:"tokenType",type:"uint256"},{name:"index",type:"uint256"}]}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"getTokenAddresses",outputs:[{name:"",type:"address[]"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_start",type:"uint256"},{name:"_count",type:"uint256"},{name:"_tokenType",type:"uint256"}],name:"getTokens",outputs:[{name:"tokenData",type:"tuple[]",components:[{name:"token",type:"address"},{name:"asset",type:"address"},{name:"name",type:"string"},{name:"symbol",type:"string"},{name:"tokenType",type:"uint256"},{name:"index",type:"uint256"}]}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_token",type:"address"},{name:"_tokenType",type:"uint256"}],name:"isTokenType",outputs:[{name:"valid",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_token",type:"address"},{name:"_tokenType",type:"uint256"}],name:"getTokenAsset",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"}]}}]),t}(m.BaseContract);v.deployedBytecode=void 0,v.contractName="TokenizedRegistry"}}]);