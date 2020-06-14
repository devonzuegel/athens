goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__56897 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__56898 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__56898);

try{try{var seq__56899 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__56900 = null;
var count__56901 = (0);
var i__56902 = (0);
while(true){
if((i__56902 < count__56901)){
var vec__56909 = chunk__56900.cljs$core$IIndexed$_nth$arity$2(null,i__56902);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56909,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56909,(1),null);
var temp__5733__auto___56965 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___56965)){
var effect_fn_56966 = temp__5733__auto___56965;
(effect_fn_56966.cljs$core$IFn$_invoke$arity$1 ? effect_fn_56966.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_56966.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__56967 = seq__56899;
var G__56968 = chunk__56900;
var G__56969 = count__56901;
var G__56970 = (i__56902 + (1));
seq__56899 = G__56967;
chunk__56900 = G__56968;
count__56901 = G__56969;
i__56902 = G__56970;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56899);
if(temp__5735__auto__){
var seq__56899__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56899__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__56899__$1);
var G__56973 = cljs.core.chunk_rest(seq__56899__$1);
var G__56974 = c__4609__auto__;
var G__56975 = cljs.core.count(c__4609__auto__);
var G__56976 = (0);
seq__56899 = G__56973;
chunk__56900 = G__56974;
count__56901 = G__56975;
i__56902 = G__56976;
continue;
} else {
var vec__56913 = cljs.core.first(seq__56899__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56913,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56913,(1),null);
var temp__5733__auto___56977 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___56977)){
var effect_fn_56978 = temp__5733__auto___56977;
(effect_fn_56978.cljs$core$IFn$_invoke$arity$1 ? effect_fn_56978.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_56978.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__56979 = cljs.core.next(seq__56899__$1);
var G__56980 = null;
var G__56981 = (0);
var G__56982 = (0);
seq__56899 = G__56979;
chunk__56900 = G__56980;
count__56901 = G__56981;
i__56902 = G__56982;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__56613__auto___56983 = re_frame.interop.now();
var duration__56614__auto___56984 = (end__56613__auto___56983 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__56614__auto___56984,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__56613__auto___56983);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__56897);
}} else {
var seq__56916 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__56917 = null;
var count__56918 = (0);
var i__56919 = (0);
while(true){
if((i__56919 < count__56918)){
var vec__56926 = chunk__56917.cljs$core$IIndexed$_nth$arity$2(null,i__56919);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56926,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56926,(1),null);
var temp__5733__auto___56986 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___56986)){
var effect_fn_56987 = temp__5733__auto___56986;
(effect_fn_56987.cljs$core$IFn$_invoke$arity$1 ? effect_fn_56987.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_56987.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__56988 = seq__56916;
var G__56989 = chunk__56917;
var G__56990 = count__56918;
var G__56991 = (i__56919 + (1));
seq__56916 = G__56988;
chunk__56917 = G__56989;
count__56918 = G__56990;
i__56919 = G__56991;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56916);
if(temp__5735__auto__){
var seq__56916__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56916__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__56916__$1);
var G__56992 = cljs.core.chunk_rest(seq__56916__$1);
var G__56993 = c__4609__auto__;
var G__56994 = cljs.core.count(c__4609__auto__);
var G__56995 = (0);
seq__56916 = G__56992;
chunk__56917 = G__56993;
count__56918 = G__56994;
i__56919 = G__56995;
continue;
} else {
var vec__56929 = cljs.core.first(seq__56916__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56929,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56929,(1),null);
var temp__5733__auto___56996 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___56996)){
var effect_fn_56997 = temp__5733__auto___56996;
(effect_fn_56997.cljs$core$IFn$_invoke$arity$1 ? effect_fn_56997.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_56997.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__56998 = cljs.core.next(seq__56916__$1);
var G__56999 = null;
var G__57000 = (0);
var G__57001 = (0);
seq__56916 = G__56998;
chunk__56917 = G__56999;
count__56918 = G__57000;
i__56919 = G__57001;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__56932 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__56933 = null;
var count__56934 = (0);
var i__56935 = (0);
while(true){
if((i__56935 < count__56934)){
var map__56946 = chunk__56933.cljs$core$IIndexed$_nth$arity$2(null,i__56935);
var map__56946__$1 = (((((!((map__56946 == null))))?(((((map__56946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56946.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56946):map__56946);
var effect = map__56946__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56946__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56946__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__56932,chunk__56933,count__56934,i__56935,map__56946,map__56946__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__56932,chunk__56933,count__56934,i__56935,map__56946,map__56946__$1,effect,ms,dispatch))
,ms);
}


var G__57004 = seq__56932;
var G__57005 = chunk__56933;
var G__57006 = count__56934;
var G__57007 = (i__56935 + (1));
seq__56932 = G__57004;
chunk__56933 = G__57005;
count__56934 = G__57006;
i__56935 = G__57007;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56932);
if(temp__5735__auto__){
var seq__56932__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56932__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__56932__$1);
var G__57008 = cljs.core.chunk_rest(seq__56932__$1);
var G__57009 = c__4609__auto__;
var G__57010 = cljs.core.count(c__4609__auto__);
var G__57011 = (0);
seq__56932 = G__57008;
chunk__56933 = G__57009;
count__56934 = G__57010;
i__56935 = G__57011;
continue;
} else {
var map__56948 = cljs.core.first(seq__56932__$1);
var map__56948__$1 = (((((!((map__56948 == null))))?(((((map__56948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56948):map__56948);
var effect = map__56948__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56948__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56948__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__56932,chunk__56933,count__56934,i__56935,map__56948,map__56948__$1,effect,ms,dispatch,seq__56932__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__56932,chunk__56933,count__56934,i__56935,map__56948,map__56948__$1,effect,ms,dispatch,seq__56932__$1,temp__5735__auto__))
,ms);
}


var G__57012 = cljs.core.next(seq__56932__$1);
var G__57013 = null;
var G__57014 = (0);
var G__57015 = (0);
seq__56932 = G__57012;
chunk__56933 = G__57013;
count__56934 = G__57014;
i__56935 = G__57015;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__56951 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__56952 = null;
var count__56953 = (0);
var i__56954 = (0);
while(true){
if((i__56954 < count__56953)){
var event = chunk__56952.cljs$core$IIndexed$_nth$arity$2(null,i__56954);
re_frame.router.dispatch(event);


var G__57017 = seq__56951;
var G__57018 = chunk__56952;
var G__57019 = count__56953;
var G__57020 = (i__56954 + (1));
seq__56951 = G__57017;
chunk__56952 = G__57018;
count__56953 = G__57019;
i__56954 = G__57020;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56951);
if(temp__5735__auto__){
var seq__56951__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56951__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__56951__$1);
var G__57021 = cljs.core.chunk_rest(seq__56951__$1);
var G__57022 = c__4609__auto__;
var G__57023 = cljs.core.count(c__4609__auto__);
var G__57024 = (0);
seq__56951 = G__57021;
chunk__56952 = G__57022;
count__56953 = G__57023;
i__56954 = G__57024;
continue;
} else {
var event = cljs.core.first(seq__56951__$1);
re_frame.router.dispatch(event);


var G__57025 = cljs.core.next(seq__56951__$1);
var G__57026 = null;
var G__57027 = (0);
var G__57028 = (0);
seq__56951 = G__57025;
chunk__56952 = G__57026;
count__56953 = G__57027;
i__56954 = G__57028;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__56957 = cljs.core.seq(value);
var chunk__56958 = null;
var count__56959 = (0);
var i__56960 = (0);
while(true){
if((i__56960 < count__56959)){
var event = chunk__56958.cljs$core$IIndexed$_nth$arity$2(null,i__56960);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__57032 = seq__56957;
var G__57033 = chunk__56958;
var G__57034 = count__56959;
var G__57035 = (i__56960 + (1));
seq__56957 = G__57032;
chunk__56958 = G__57033;
count__56959 = G__57034;
i__56960 = G__57035;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56957);
if(temp__5735__auto__){
var seq__56957__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56957__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__56957__$1);
var G__57036 = cljs.core.chunk_rest(seq__56957__$1);
var G__57037 = c__4609__auto__;
var G__57038 = cljs.core.count(c__4609__auto__);
var G__57039 = (0);
seq__56957 = G__57036;
chunk__56958 = G__57037;
count__56959 = G__57038;
i__56960 = G__57039;
continue;
} else {
var event = cljs.core.first(seq__56957__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__57040 = cljs.core.next(seq__56957__$1);
var G__57041 = null;
var G__57042 = (0);
var G__57043 = (0);
seq__56957 = G__57040;
chunk__56958 = G__57041;
count__56959 = G__57042;
i__56960 = G__57043;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map