goog.provide('athens.events');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.util');
goog.require('datascript.core');
goog.require('datascript.transit');
goog.require('day8.re_frame.async_flow_fx');
goog.require('day8.re_frame.tracing');
goog.require('re_frame.core');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"init-rfdb","init-rfdb",-460710127),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(new cljs.core.Symbol("db","rfdb","db/rfdb",-1730642210,null));

var opts__46798__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = athens.db.rfdb;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","rfdb","db/rfdb",-1730642210,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__46799__auto__;
}catch (e61885){var e = e61885;
throw e;
}}):(function (_,___$1){
return athens.db.rfdb;
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("athena","toggle","athena/toggle",2028366801),(function (db,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("athena","open","athena/open",1253777725),cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("athena","update-recent-items","athena/update-recent-items",-1049064820),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__61886){
var vec__61887 = p__61886;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61887,(0),null);
var selected_page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61887,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Keyword("athena","recent-items","athena/recent-items",-1145487227),new cljs.core.Symbol(null,"db","db",-1661185010,null))),new cljs.core.Symbol(null,"selected-page","selected-page",899689913,null))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("athena","recent-items","athena/recent-items",-1145487227),new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"selected-page","selected-page",899689913,null))));

var opts__46798__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = (((function (){var opts__46798__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = ((function (){var G__61892 = (function (){var opts__46798__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = selected_page;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"selected-page","selected-page",899689913,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__46799__auto__;
})();
var fexpr__61891 = (function (){var opts__46798__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = cljs.core.set((function (){var opts__46798__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = new cljs.core.Keyword("athena","recent-items","athena/recent-items",-1145487227).cljs$core$IFn$_invoke$arity$1((function (){var opts__46798__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__46799__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword("athena","recent-items","athena/recent-items",-1145487227),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__46799__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Keyword("athena","recent-items","athena/recent-items",-1145487227),new cljs.core.Symbol(null,"db","db",-1661185010,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__46799__auto__;
})();
return (fexpr__61891.cljs$core$IFn$_invoke$arity$1 ? fexpr__61891.cljs$core$IFn$_invoke$arity$1(G__61892) : fexpr__61891.call(null,G__61892));
})() == null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Keyword("athena","recent-items","athena/recent-items",-1145487227),new cljs.core.Symbol(null,"db","db",-1661185010,null))),new cljs.core.Symbol(null,"selected-page","selected-page",899689913,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46799__auto__;
})())?(function (){var opts__46798__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = cljs.core.update.cljs$core$IFn$_invoke$arity$4((function (){var opts__46798__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__46799__auto__;
})(),new cljs.core.Keyword("athena","recent-items","athena/recent-items",-1145487227),(function (){var opts__46798__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = cljs.core.conj;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__46799__auto__;
})(),(function (){var opts__46798__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = selected_page;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"selected-page","selected-page",899689913,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__46799__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("athena","recent-items","athena/recent-items",-1145487227),new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"selected-page","selected-page",899689913,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46799__auto__;
})():null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Keyword("athena","recent-items","athena/recent-items",-1145487227),new cljs.core.Symbol(null,"db","db",-1661185010,null))),new cljs.core.Symbol(null,"selected-page","selected-page",899689913,null))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("athena","recent-items","athena/recent-items",-1145487227),new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"selected-page","selected-page",899689913,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__46799__auto__;
}catch (e61890){var e = e61890;
throw e;
}}):(function (db,p__61893){
var vec__61894 = p__61893;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61894,(0),null);
var selected_page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61894,(1),null);
if(((function (){var fexpr__61897 = cljs.core.set(new cljs.core.Keyword("athena","recent-items","athena/recent-items",-1145487227).cljs$core$IFn$_invoke$arity$1(db));
return (fexpr__61897.cljs$core$IFn$_invoke$arity$1 ? fexpr__61897.cljs$core$IFn$_invoke$arity$1(selected_page) : fexpr__61897.call(null,selected_page));
})() == null)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword("athena","recent-items","athena/recent-items",-1145487227),cljs.core.conj,selected_page);
} else {
return null;
}
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("devtool","toggle","devtool/toggle",-1442703685),(function (db,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("devtool","open","devtool/open",-1176270029),cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("left-sidebar","toggle","left-sidebar/toggle",212949860),(function (db,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("left-sidebar","open","left-sidebar/open",-686633270),cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("right-sidebar","toggle","right-sidebar/toggle",-1089397191),(function (db,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("right-sidebar","open","right-sidebar/open",83006133),cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("right-sidebar","toggle-item","right-sidebar/toggle-item",-445072841),(function (db,p__61898){
var vec__61899 = p__61898;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61899,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61899,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("right-sidebar","items","right-sidebar/items",-881766733),item,new cljs.core.Keyword(null,"open","open",-1763596448)], null),cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("right-sidebar","close-item","right-sidebar/close-item",-2021662216),(function (db,p__61902){
var vec__61903 = p__61902;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61903,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61903,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword("right-sidebar","items","right-sidebar/items",-881766733),cljs.core.dissoc,uid);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("right-sidebar","open-item","right-sidebar/open-item",-1234515614),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__61906,p__61907){
var map__61908 = p__61906;
var map__61908__$1 = (((((!((map__61908 == null))))?(((((map__61908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61908.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61908):map__61908);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61908__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__61909 = p__61907;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61909,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61909,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"block","block",-1989749559,null),cljs.core.list(new cljs.core.Symbol("d","pull","d/pull",779986566,null),cljs.core.list(new cljs.core.Symbol(null,"deref","deref",1494944732,null),new cljs.core.Symbol("db","dsdb","db/dsdb",-512073290,null)),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Keyword("block","string","block/string",-2066596447)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"uid","uid",192762127,null)], null)),new cljs.core.Symbol(null,"new-item","new-item",151288566,null),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol(null,"block","block",-1989749559,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),true,new cljs.core.Keyword(null,"index","index",-1531685915),(-1)], null)),new cljs.core.Symbol(null,"new-items","new-items",-482179310,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),cljs.core.list(new cljs.core.Keyword("right-sidebar","items","right-sidebar/items",-881766733),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Symbol(null,"uid","uid",192762127,null),new cljs.core.Symbol(null,"new-item","new-item",151288566,null)),new cljs.core.Symbol(null,"inc-items","inc-items",415027690,null),cljs.core.list(new cljs.core.Symbol(null,"reduce-kv","reduce-kv",1856296400,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"k","k",-505765866,null),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Symbol(null,"inc","inc",324505433,null)))),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Symbol(null,"new-items","new-items",-482179310,null)),new cljs.core.Symbol(null,"sorted-items","sorted-items",-766570090,null),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),cljs.core.list(new cljs.core.Symbol(null,"sorted-map-by","sorted-map-by",218894812,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Symbol(null,"k2","k2",-1225133949,null)], null),cljs.core.list(new cljs.core.Symbol(null,"compare","compare",1109853757,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"new-items","new-items",-482179310,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Keyword(null,"index","index",-1531685915)], null)),new cljs.core.Symbol(null,"k2","k2",-1225133949,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"new-items","new-items",-482179310,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k2","k2",-1225133949,null),new cljs.core.Keyword(null,"index","index",-1531685915)], null)),new cljs.core.Symbol(null,"k1","k1",-1701777341,null)], null)))),new cljs.core.Symbol(null,"inc-items","inc-items",415027690,null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("right-sidebar","items","right-sidebar/items",-881766733),new cljs.core.Symbol(null,"sorted-items","sorted-items",-766570090,null)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Keyword("right-sidebar","open","right-sidebar/open",83006133),new cljs.core.Symbol(null,"db","db",-1661185010,null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("right-sidebar","toggle","right-sidebar/toggle",-1089397191)], null))], null)));

var opts__46798__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = (function (){var block = (function (){var opts__46798__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = (function (){var G__61914 = (function (){var opts__46798__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = cljs.core.deref((function (){var opts__46798__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = athens.db.dsdb;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","dsdb","db/dsdb",-512073290,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__46799__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol("db","dsdb","db/dsdb",-512073290,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__46799__auto__;
})();
var G__61915 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Keyword("block","string","block/string",-2066596447)], null);
var G__61916 = (function (){var opts__46798__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),(function (){var opts__46798__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = uid;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"uid","uid",192762127,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__46799__auto__;
})()], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"uid","uid",192762127,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__46799__auto__;
})();
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__61914,G__61915,G__61916) : datascript.core.pull.call(null,G__61914,G__61915,G__61916));
})();
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("d","pull","d/pull",779986566,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol("db","dsdb","db/dsdb",-512073290,null)),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Keyword("block","string","block/string",-2066596447)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"uid","uid",192762127,null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__46799__auto__;
})();
var new_item = (function (){var opts__46798__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var opts__46798__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = block;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"block","block",-1989749559,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__46799__auto__;
})(),(function (){var opts__46798__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),true,new cljs.core.Keyword(null,"index","index",-1531685915),(-1)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),true,new cljs.core.Keyword(null,"index","index",-1531685915),(-1)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__46799__auto__;
})()], 0));
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol(null,"block","block",-1989749559,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),true,new cljs.core.Keyword(null,"index","index",-1531685915),(-1)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__46799__auto__;
})();
var new_items = (function (){var opts__46798__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var opts__46798__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = new cljs.core.Keyword("right-sidebar","items","right-sidebar/items",-881766733).cljs$core$IFn$_invoke$arity$1((function (){var opts__46798__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__46799__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword("right-sidebar","items","right-sidebar/items",-881766733),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__46799__auto__;
})(),(function (){var opts__46798__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = uid;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"uid","uid",192762127,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__46799__auto__;
})(),(function (){var opts__46798__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = new_item;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-item","new-item",151288566,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__46799__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),cljs.core.list(new cljs.core.Keyword("right-sidebar","items","right-sidebar/items",-881766733),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Symbol(null,"uid","uid",192762127,null),new cljs.core.Symbol(null,"new-item","new-item",151288566,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__46799__auto__;
})();
var inc_items = (function (){var opts__46798__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = cljs.core.reduce_kv((function (){var opts__46798__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = (function (m,k,v){
var opts__46798__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var opts__46798__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = m;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__46799__auto__;
})(),(function (){var opts__46798__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = k;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__46799__auto__;
})(),(function (){var opts__46798__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = cljs.core.update.cljs$core$IFn$_invoke$arity$3((function (){var opts__46798__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = v;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__46799__auto__;
})(),new cljs.core.Keyword(null,"index","index",-1531685915),(function (){var opts__46798__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = cljs.core.inc;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__46799__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Symbol(null,"inc","inc",324505433,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__46799__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"k","k",-505765866,null),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Symbol(null,"inc","inc",324505433,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__46799__auto__;
});
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"k","k",-505765866,null),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Symbol(null,"inc","inc",324505433,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__46799__auto__;
})(),(function (){var opts__46798__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = cljs.core.PersistentArrayMap.EMPTY;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__46799__auto__;
})(),(function (){var opts__46798__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = new_items;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-items","new-items",-482179310,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__46799__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"reduce-kv","reduce-kv",1856296400,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"k","k",-505765866,null),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Symbol(null,"inc","inc",324505433,null)))),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Symbol(null,"new-items","new-items",-482179310,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__46799__auto__;
})();
var sorted_items = (function (){var opts__46798__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var opts__46798__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = cljs.core.sorted_map_by((function (){var opts__46798__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = (function (k1,k2){
var opts__46798__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = cljs.core.compare((function (){var opts__46798__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var opts__46798__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var opts__46798__auto____$7 = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = new_items;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-items","new-items",-482179310,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(8)], null));

return result__46799__auto__;
})(),(function (){var opts__46798__auto____$7 = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var opts__46798__auto____$8 = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = k1;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(9)], null));

return result__46799__auto__;
})(),new cljs.core.Keyword(null,"index","index",-1531685915)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Keyword(null,"index","index",-1531685915)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(8)], null));

return result__46799__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"new-items","new-items",-482179310,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Keyword(null,"index","index",-1531685915)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__46799__auto__;
})(),(function (){var opts__46798__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = k2;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"k2","k2",-1225133949,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__46799__auto__;
})()], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"new-items","new-items",-482179310,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Keyword(null,"index","index",-1531685915)], null)),new cljs.core.Symbol(null,"k2","k2",-1225133949,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__46799__auto__;
})(),(function (){var opts__46798__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var opts__46798__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var opts__46798__auto____$7 = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = new_items;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-items","new-items",-482179310,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(8)], null));

return result__46799__auto__;
})(),(function (){var opts__46798__auto____$7 = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var opts__46798__auto____$8 = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = k2;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"k2","k2",-1225133949,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(9)], null));

return result__46799__auto__;
})(),new cljs.core.Keyword(null,"index","index",-1531685915)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k2","k2",-1225133949,null),new cljs.core.Keyword(null,"index","index",-1531685915)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(8)], null));

return result__46799__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"new-items","new-items",-482179310,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k2","k2",-1225133949,null),new cljs.core.Keyword(null,"index","index",-1531685915)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__46799__auto__;
})(),(function (){var opts__46798__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = k1;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__46799__auto__;
})()], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"new-items","new-items",-482179310,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k2","k2",-1225133949,null),new cljs.core.Keyword(null,"index","index",-1531685915)], null)),new cljs.core.Symbol(null,"k1","k1",-1701777341,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__46799__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"compare","compare",1109853757,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"new-items","new-items",-482179310,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Keyword(null,"index","index",-1531685915)], null)),new cljs.core.Symbol(null,"k2","k2",-1225133949,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"new-items","new-items",-482179310,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k2","k2",-1225133949,null),new cljs.core.Keyword(null,"index","index",-1531685915)], null)),new cljs.core.Symbol(null,"k1","k1",-1701777341,null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__46799__auto__;
});
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Symbol(null,"k2","k2",-1225133949,null)], null),cljs.core.list(new cljs.core.Symbol(null,"compare","compare",1109853757,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"new-items","new-items",-482179310,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Keyword(null,"index","index",-1531685915)], null)),new cljs.core.Symbol(null,"k2","k2",-1225133949,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"new-items","new-items",-482179310,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k2","k2",-1225133949,null),new cljs.core.Keyword(null,"index","index",-1531685915)], null)),new cljs.core.Symbol(null,"k1","k1",-1701777341,null)], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__46799__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"sorted-map-by","sorted-map-by",218894812,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Symbol(null,"k2","k2",-1225133949,null)], null),cljs.core.list(new cljs.core.Symbol(null,"compare","compare",1109853757,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"new-items","new-items",-482179310,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Keyword(null,"index","index",-1531685915)], null)),new cljs.core.Symbol(null,"k2","k2",-1225133949,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"new-items","new-items",-482179310,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k2","k2",-1225133949,null),new cljs.core.Keyword(null,"index","index",-1531685915)], null)),new cljs.core.Symbol(null,"k1","k1",-1701777341,null)], null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__46799__auto__;
})(),(function (){var opts__46798__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = inc_items;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"inc-items","inc-items",415027690,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__46799__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),cljs.core.list(new cljs.core.Symbol(null,"sorted-map-by","sorted-map-by",218894812,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Symbol(null,"k2","k2",-1225133949,null)], null),cljs.core.list(new cljs.core.Symbol(null,"compare","compare",1109853757,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"new-items","new-items",-482179310,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Keyword(null,"index","index",-1531685915)], null)),new cljs.core.Symbol(null,"k2","k2",-1225133949,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"new-items","new-items",-482179310,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k2","k2",-1225133949,null),new cljs.core.Keyword(null,"index","index",-1531685915)], null)),new cljs.core.Symbol(null,"k1","k1",-1701777341,null)], null)))),new cljs.core.Symbol(null,"inc-items","inc-items",415027690,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__46799__auto__;
})();
var opts__46798__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("right-sidebar","items","right-sidebar/items",-881766733),sorted_items),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),((new cljs.core.Keyword("right-sidebar","open","right-sidebar/open",83006133).cljs$core$IFn$_invoke$arity$1(db) === false)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("right-sidebar","toggle","right-sidebar/toggle",-1089397191)], null):null)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("right-sidebar","items","right-sidebar/items",-881766733),new cljs.core.Symbol(null,"sorted-items","sorted-items",-766570090,null)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Keyword("right-sidebar","open","right-sidebar/open",83006133),new cljs.core.Symbol(null,"db","db",-1661185010,null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("right-sidebar","toggle","right-sidebar/toggle",-1089397191)], null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46799__auto__;
})();
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"block","block",-1989749559,null),cljs.core.list(new cljs.core.Symbol("d","pull","d/pull",779986566,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol("db","dsdb","db/dsdb",-512073290,null)),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Keyword("block","string","block/string",-2066596447)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"uid","uid",192762127,null)], null)),new cljs.core.Symbol(null,"new-item","new-item",151288566,null),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol(null,"block","block",-1989749559,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),true,new cljs.core.Keyword(null,"index","index",-1531685915),(-1)], null)),new cljs.core.Symbol(null,"new-items","new-items",-482179310,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),cljs.core.list(new cljs.core.Keyword("right-sidebar","items","right-sidebar/items",-881766733),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Symbol(null,"uid","uid",192762127,null),new cljs.core.Symbol(null,"new-item","new-item",151288566,null)),new cljs.core.Symbol(null,"inc-items","inc-items",415027690,null),cljs.core.list(new cljs.core.Symbol(null,"reduce-kv","reduce-kv",1856296400,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"k","k",-505765866,null),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Symbol(null,"inc","inc",324505433,null)))),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Symbol(null,"new-items","new-items",-482179310,null)),new cljs.core.Symbol(null,"sorted-items","sorted-items",-766570090,null),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),cljs.core.list(new cljs.core.Symbol(null,"sorted-map-by","sorted-map-by",218894812,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Symbol(null,"k2","k2",-1225133949,null)], null),cljs.core.list(new cljs.core.Symbol(null,"compare","compare",1109853757,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"new-items","new-items",-482179310,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Keyword(null,"index","index",-1531685915)], null)),new cljs.core.Symbol(null,"k2","k2",-1225133949,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"new-items","new-items",-482179310,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k2","k2",-1225133949,null),new cljs.core.Keyword(null,"index","index",-1531685915)], null)),new cljs.core.Symbol(null,"k1","k1",-1701777341,null)], null)))),new cljs.core.Symbol(null,"inc-items","inc-items",415027690,null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("right-sidebar","items","right-sidebar/items",-881766733),new cljs.core.Symbol(null,"sorted-items","sorted-items",-766570090,null)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Keyword("right-sidebar","open","right-sidebar/open",83006133),new cljs.core.Symbol(null,"db","db",-1661185010,null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("right-sidebar","toggle","right-sidebar/toggle",-1089397191)], null))], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__46799__auto__;
}catch (e61913){var e = e61913;
throw e;
}}):(function (p__61917,p__61918){
var map__61919 = p__61917;
var map__61919__$1 = (((((!((map__61919 == null))))?(((((map__61919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61919.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61919):map__61919);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61919__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__61920 = p__61918;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61920,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61920,(1),null);
var block = (function (){var G__61924 = cljs.core.deref(athens.db.dsdb);
var G__61925 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Keyword("block","string","block/string",-2066596447)], null);
var G__61926 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null);
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__61924,G__61925,G__61926) : datascript.core.pull.call(null,G__61924,G__61925,G__61926));
})();
var new_item = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),true,new cljs.core.Keyword(null,"index","index",-1531685915),(-1)], null)], 0));
var new_items = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("right-sidebar","items","right-sidebar/items",-881766733).cljs$core$IFn$_invoke$arity$1(db),uid,new_item);
var inc_items = cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.update.cljs$core$IFn$_invoke$arity$3(v,new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.inc));
}),cljs.core.PersistentArrayMap.EMPTY,new_items);
var sorted_items = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map_by((function (k1,k2){
return cljs.core.compare(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_items,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k1,new cljs.core.Keyword(null,"index","index",-1531685915)], null)),k2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_items,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k2,new cljs.core.Keyword(null,"index","index",-1531685915)], null)),k1], null));
})),inc_items);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("right-sidebar","items","right-sidebar/items",-881766733),sorted_items),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),((new cljs.core.Keyword("right-sidebar","open","right-sidebar/open",83006133).cljs$core$IFn$_invoke$arity$1(db) === false)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("right-sidebar","toggle","right-sidebar/toggle",-1089397191)], null):null)], null);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dragging-global","toggle","dragging-global/toggle",-1864225393),(function (db,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"dragging-global","dragging-global",1115396058),cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("selected","add-item","selected/add-item",-508591222),(function (db,p__61927){
var vec__61928 = p__61927;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61928,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61928,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword("selected","items","selected/items",1686402211),cljs.core.conj,uid);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("selected","clear-items","selected/clear-items",-700315697),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("selected","items","selected/items",1686402211),cljs.core.PersistentVector.EMPTY);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("selected","up","selected/up",921350754),(function (db,p__61931){
var vec__61932 = p__61931;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61932,(0),null);
var selected_items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61932,(1),null);
var first_item = cljs.core.first(selected_items);
var prev_block_uid_ = athens.db.prev_block_uid(first_item);
var prev_block = athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),prev_block_uid_], null));
var new_vec = (cljs.core.truth_(new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(prev_block))?null:cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [prev_block_uid_], null),selected_items)
);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("selected","items","selected/items",1686402211),new_vec);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("selected","down","selected/down",-1806586329),(function (db,p__61935){
var vec__61936 = p__61935;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61936,(0),null);
var selected_items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61936,(1),null);
var last_item = cljs.core.last(selected_items);
var next_block_uid_ = athens.db.next_block_uid(last_item);
var new_vec = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(selected_items,next_block_uid_);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("selected","items","selected/items",1686402211),new_vec);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("selected","delete","selected/delete",-812991161),(function (p__61939,p__61940){
var map__61941 = p__61939;
var map__61941__$1 = (((((!((map__61941 == null))))?(((((map__61941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61941.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61941):map__61941);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61941__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__61942 = p__61940;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61942,(0),null);
var selected_items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61942,(1),null);
var retract_vecs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (uid){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retractEntity","db/retractEntity",-1452737935),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null)], null);
}),selected_items);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),retract_vecs], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("selected","items","selected/items",1686402211),cljs.core.PersistentVector.EMPTY)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("alert","set","alert/set",396257190),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,alert){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"alert","alert",-571950580),new cljs.core.Symbol(null,"alert","alert",1068580947,null)));

var opts__46798__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var opts__46798__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46799__auto__;
})(),new cljs.core.Keyword(null,"alert","alert",-571950580),(function (){var opts__46798__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = alert;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"alert","alert",1068580947,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46799__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"alert","alert",-571950580),new cljs.core.Symbol(null,"alert","alert",1068580947,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__46799__auto__;
}catch (e61946){var e = e61946;
throw e;
}}):(function (db,alert){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"alert","alert",-571950580),alert);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("alert","unset","alert/unset",-421582694),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"alert","alert",-571950580),null));

var opts__46798__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var opts__46798__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46799__auto__;
})(),new cljs.core.Keyword(null,"alert","alert",-571950580),null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"alert","alert",-571950580),null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__46799__auto__;
}catch (e61947){var e = e61947;
throw e;
}}):(function (db){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"alert","alert",-571950580),null);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("loading","set","loading/set",102170502),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),true));

var opts__46798__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = cljs.core.assoc_in((function (){var opts__46798__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46799__auto__;
})(),(function (){var opts__46798__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46799__auto__;
})(),true);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),true),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__46799__auto__;
}catch (e61948){var e = e61948;
throw e;
}}):(function (db){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),true);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("loading","unset","loading/unset",-44658566),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),false));

var opts__46798__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = cljs.core.assoc_in((function (){var opts__46798__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46799__auto__;
})(),(function (){var opts__46798__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46799__auto__;
})(),false);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),false),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__46799__auto__;
}catch (e61949){var e = e61949;
throw e;
}}):(function (db){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),false);
})));
athens.events.focus_el = (function athens$events$focus_el(id){
return (function (){
var temp__5733__auto__ = document.getElementById(id);
if(cljs.core.truth_(temp__5733__auto__)){
var el = temp__5733__auto__;
return el.focus();
} else {
return null;
}
});
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("editing","uid","editing/uid",974963040),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__61950){
var vec__61951 = p__61950;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61951,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61951,(1),null);
var _PLUS_debux_dbg_opts_PLUS__62107 = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol("js","setTimeout","js/setTimeout",-574009236,null),cljs.core.list(new cljs.core.Symbol(null,"focus-el","focus-el",2093617709,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"editable-uid-",new cljs.core.Symbol(null,"uid","uid",192762127,null))),(300)));

var opts__46798__auto___62108 = _PLUS_debux_dbg_opts_PLUS__62107;
var result__46799__auto___62109 = setTimeout((function (){var opts__46798__auto____$1 = _PLUS_debux_dbg_opts_PLUS__62107;
var result__46799__auto___62109 = athens.events.focus_el((function (){var opts__46798__auto____$2 = _PLUS_debux_dbg_opts_PLUS__62107;
var result__46799__auto___62109 = ["editable-uid-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var opts__46798__auto____$3 = _PLUS_debux_dbg_opts_PLUS__62107;
var result__46799__auto___62109 = uid;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto___62109,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"uid","uid",192762127,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__46799__auto___62109;
})())].join('');
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto___62109,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"editable-uid-",new cljs.core.Symbol(null,"uid","uid",192762127,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__46799__auto___62109;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto___62109,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"focus-el","focus-el",2093617709,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"editable-uid-",new cljs.core.Symbol(null,"uid","uid",192762127,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46799__auto___62109;
})(),(300));
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto___62109,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("js","setTimeout","js/setTimeout",-574009236,null),cljs.core.list(new cljs.core.Symbol(null,"focus-el","focus-el",2093617709,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"editable-uid-",new cljs.core.Symbol(null,"uid","uid",192762127,null))),(300)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

}catch (e61954){var e_62110 = e61954;
throw e_62110;
}
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("editing","uid","editing/uid",974963040),new cljs.core.Symbol(null,"uid","uid",192762127,null)));

var opts__46798__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var opts__46798__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46799__auto__;
})(),new cljs.core.Keyword("editing","uid","editing/uid",974963040),(function (){var opts__46798__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = uid;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"uid","uid",192762127,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46799__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("editing","uid","editing/uid",974963040),new cljs.core.Symbol(null,"uid","uid",192762127,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__46799__auto__;
}catch (e61955){var e = e61955;
throw e;
}}):(function (db,p__61956){
var vec__61957 = p__61956;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61957,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61957,(1),null);
setTimeout(athens.events.focus_el(["editable-uid-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid)].join('')),(300));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("editing","uid","editing/uid",974963040),uid);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("tooltip","uid","tooltip/uid",1421925099),(function (db,p__61960){
var vec__61961 = p__61960;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61961,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61961,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("tooltip","uid","tooltip/uid",1421925099),uid);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("daily-notes","reset","daily-notes/reset",1615543639),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("daily-notes","items","daily-notes/items",227138573),cljs.core.PersistentVector.EMPTY);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("daily-note","next","daily-note/next",-792628811),(function (p__61964,p__61965){
var map__61966 = p__61964;
var map__61966__$1 = (((((!((map__61966 == null))))?(((((map__61966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61966.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61966):map__61966);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61966__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__61967 = p__61965;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61967,(0),null);
var map__61970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61967,(1),null);
var map__61970__$1 = (((((!((map__61970 == null))))?(((((map__61970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61970):map__61970);
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61970__$1,new cljs.core.Keyword(null,"uid","uid",-1447769400));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61970__$1,new cljs.core.Keyword(null,"title","title",636505583));
var new_db = cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword("daily-notes","items","daily-notes/items",227138573),cljs.core.conj,uid);
if(cljs.core.truth_(athens.db.e_by_av(new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new_db], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new_db,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","create","page/create",-1304816391),title,uid], null)], null);
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("get-db","init","get-db/init",-642889137),(function (p__61973,_){
var map__61974 = p__61973;
var map__61974__$1 = (((((!((map__61974 == null))))?(((((map__61974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61974):map__61974);
var rfdb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61974__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(athens.db.rfdb,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true),new cljs.core.Keyword(null,"async-flow","async-flow",1464712702),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-dispatch","first-dispatch",128561923),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("http","get-db","http/get-db",-618568620)], null)
,new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("loading","unset","loading/unset",-44658566)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-route","current-route",2067529448).cljs$core$IFn$_invoke$arity$1(rfdb)))], null)], null),new cljs.core.Keyword(null,"halt?","halt?",-1110658247),true], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("http","get-db","http/get-db",-618568620),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http","http",382524695),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),athens.db.athens_url,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),false], null),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("http-success","get-db","http-success/get-db",-721270786)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("alert","set","alert/set",396257190)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("http-success","get-db","http-success/get-db",-721270786),(function (_,p__61976){
var vec__61977 = p__61976;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61977,(0),null);
var json_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61977,(1),null);
var datoms = athens.db.str_to_db_tx(json_str);
var new_db = datascript.core.db_with((datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1 ? datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1(athens.db.schema) : datascript.core.empty_db.call(null,athens.db.schema)),datoms);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638),new_db], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("local-storage","set-db","local-storage/set-db",1822850040),new_db], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("local-storage","get-db","local-storage/get-db",1436156387),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__61980 = new cljs.core.Keyword(null,"local-storage","local-storage",-1301104068);
var G__61981 = "datascript/DB";
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$2(G__61980,G__61981) : re_frame.core.inject_cofx.call(null,G__61980,G__61981));
})()], null),(function (p__61982,_){
var map__61983 = p__61982;
var map__61983__$1 = (((((!((map__61983 == null))))?(((((map__61983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61983.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61983):map__61983);
var local_storage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61983__$1,new cljs.core.Keyword(null,"local-storage","local-storage",-1301104068));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638),datascript.transit.read_transit_str(local_storage)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("local-storage","set-db","local-storage/set-db",1822850040),(function (_,p__61985){
var vec__61986 = p__61985;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61986,(0),null);
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61986,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("local-storage","set-db!","local-storage/set-db!",581380949),db], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"transact","transact",-267998670),(function (_,p__61989){
var vec__61990 = p__61989;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61990,(0),null);
var datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61990,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact!","transact!",-822725810),datoms], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638),(function (_,p__61993){
var vec__61994 = p__61993;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61994,(0),null);
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61994,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reset-conn!","reset-conn!",-325354379),db], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("page","create","page/create",-1304816391),(function (_,p__61997){
var vec__61998 = p__61997;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61998,(0),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61998,(1),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61998,(2),null);
var now = athens.util.now_ts();
var child_uid = athens.util.gen_block_uid();
var child = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-2),new cljs.core.Keyword("create","time","create/time",-1563077754),now,new cljs.core.Keyword("edit","time","edit/time",1384867476),now,new cljs.core.Keyword("block","uid","block/uid",-1623585167),child_uid,new cljs.core.Keyword("block","order","block/order",-1429282437),(0),new cljs.core.Keyword("block","open","block/open",-1875254829),true,new cljs.core.Keyword("block","string","block/string",-2066596447),""], null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transact!","transact!",-822725810),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-1),new cljs.core.Keyword("node","title","node/title",628940777),title,new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid,new cljs.core.Keyword("create","time","create/time",-1563077754),now,new cljs.core.Keyword("edit","time","edit/time",1384867476),now,new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [child], null)], null)], null),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040),child_uid], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"undo","undo",-1818036302),(function (_,___$1){
var temp__5735__auto__ = athens.db.find_prev(cljs.core.deref(athens.db.history),(function (p1__62001_SHARP_){
return (cljs.core.deref(athens.db.dsdb) === p1__62001_SHARP_);
}));
if(cljs.core.truth_(temp__5735__auto__)){
var prev = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reset-conn!","reset-conn!",-325354379),prev], null);
} else {
return null;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"redo","redo",501190664),(function (_,___$1){
var temp__5735__auto__ = athens.db.find_next(cljs.core.deref(athens.db.history),(function (p1__62002_SHARP_){
return (cljs.core.deref(athens.db.dsdb) === p1__62002_SHARP_);
}));
if(cljs.core.truth_(temp__5735__auto__)){
var next = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reset-conn!","reset-conn!",-325354379),next], null);
} else {
return null;
}
}));
athens.events.inc_after = (function athens$events$inc_after(eid,order){
var G__62003 = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-o","?new-o",1710641600,null),new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.Symbol("db","id","db/id",252134429,null),new cljs.core.Symbol("block","order","block/order",211249090,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.list(new cljs.core.Symbol(null,"inc-after","inc-after",1008662500,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-o","?new-o",1710641600,null))], null);
var G__62004 = cljs.core.deref(athens.db.dsdb);
var G__62005 = athens.db.rules;
var G__62006 = eid;
var G__62007 = order;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$5 ? datascript.core.q.cljs$core$IFn$_invoke$arity$5(G__62003,G__62004,G__62005,G__62006,G__62007) : datascript.core.q.call(null,G__62003,G__62004,G__62005,G__62006,G__62007));
});
athens.events.dec_after = (function athens$events$dec_after(eid,order){
var G__62008 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-o","?new-o",1710641600,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.list(new cljs.core.Symbol(null,"dec-after","dec-after",-2019085122,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-o","?new-o",1710641600,null))], null);
var G__62009 = cljs.core.deref(athens.db.dsdb);
var G__62010 = athens.db.rules;
var G__62011 = eid;
var G__62012 = order;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$5 ? datascript.core.q.cljs$core$IFn$_invoke$arity$5(G__62008,G__62009,G__62010,G__62011,G__62012) : datascript.core.q.call(null,G__62008,G__62009,G__62010,G__62011,G__62012));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up","up",-269712113),(function (_,p__62013){
var vec__62014 = p__62013;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62014,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62014,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040),(function (){var or__4185__auto__ = athens.db.prev_block_uid(uid);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return uid;
}
})()], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"left","left",-399115937),(function (_,p__62017){
var vec__62018 = p__62017;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62018,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62018,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040),(function (){var or__4185__auto__ = athens.db.prev_block_uid(uid);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return uid;
}
})()], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"down","down",1565245570),(function (_,p__62021){
var vec__62022 = p__62021;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62022,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62022,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040),(function (){var or__4185__auto__ = athens.db.next_block_uid(uid);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return uid;
}
})()], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"right","right",-452581833),(function (_,p__62025){
var vec__62026 = p__62025;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62026,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62026,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040),(function (){var or__4185__auto__ = athens.db.next_block_uid(uid);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return uid;
}
})()], null)], null);
}));
athens.events.backspace = (function athens$events$backspace(uid,value){
var block = athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null));
var parent = athens.db.get_parent(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null));
var reindex = athens.events.dec_after(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(block));
var prev_block_uid_ = athens.db.prev_block_uid(uid);
var map__62029 = athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),prev_block_uid_], null));
var map__62029__$1 = (((((!((map__62029 == null))))?(((((map__62029.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62029.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62029):map__62029);
var prev_block_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62029__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
if(cljs.core.truth_((function (){var and__4174__auto__ = new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(parent);
if(cljs.core.truth_(and__4174__auto__)){
return (new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(block) === (0));
} else {
return and__4174__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_(new cljs.core.Keyword("block","children","block/children",-1040716209).cljs$core$IFn$_invoke$arity$1(block))){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(0),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retractEntity","db/retractEntity",-1452737935),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),prev_block_uid_], null),new cljs.core.Keyword("block","string","block/string",-2066596447),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prev_block_string),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join(''),new cljs.core.Keyword("edit","time","edit/time",1384867476),athens.util.now_ts()], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","children","block/children",-1040716209),reindex], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(10),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040),prev_block_uid_], null)], null)], null)], null);

}
}
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"backspace","backspace",-696007848),(function (_,p__62031){
var vec__62032 = p__62031;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62032,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62032,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62032,(2),null);
return athens.events.backspace(uid,value);
}));
athens.events.split_block = (function athens$events$split_block(uid,val,index){
var parent = athens.db.get_parent(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null));
var block = athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null));
var head = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(val,(0),index);
var tail = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(val,index);
var new_uid = athens.util.gen_block_uid();
var new_block = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-1),new cljs.core.Keyword("block","order","block/order",-1429282437),(new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(block) + (1)),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new_uid,new cljs.core.Keyword("block","open","block/open",-1875254829),true,new cljs.core.Keyword("block","string","block/string",-2066596447),tail], null);
var reindex = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_block], null),athens.events.inc_after(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(block)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transact!","transact!",-822725810),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","string","block/string",-2066596447),head,new cljs.core.Keyword("edit","time","edit/time",1384867476),athens.util.now_ts()], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","children","block/children",-1040716209),reindex], null)], null),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040),new_uid], null)], null);
});
/**
 * If user presses enter at the start of non-empty string, push that block down and
 *   and start editing a new block in the position of originating block - 'bump up' 
 */
athens.events.bump_up = (function athens$events$bump_up(uid){
var parent = athens.db.get_parent(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null));
var block = athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null));
var new_uid = athens.util.gen_block_uid();
var new_block = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-1),new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new_uid,new cljs.core.Keyword("block","open","block/open",-1875254829),true,new cljs.core.Keyword("block","string","block/string",-2066596447),""], null);
var reindex = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_block], null),athens.events.inc_after(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),(new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(block) - (1))));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transact!","transact!",-822725810),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","children","block/children",-1040716209),reindex,new cljs.core.Keyword("block","string","block/string",-2066596447),""], null)], null),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040),new_uid], null)], null);
});
/**
 * Add a new-block after block
 */
athens.events.new_block = (function athens$events$new_block(block,parent){
var new_uid = athens.util.gen_block_uid();
var new_block = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("block","order","block/order",-1429282437),(new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(block) + (1)),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new_uid,new cljs.core.Keyword("block","open","block/open",-1875254829),true,new cljs.core.Keyword("block","string","block/string",-2066596447),""], null);
var reindex = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_block], null),athens.events.inc_after(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(block)));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(parent)], null),new cljs.core.Keyword("block","children","block/children",-1040716209),reindex], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040),new_uid], null)], null)], null);
});
athens.events.enter = (function athens$events$enter(uid,val,index){
var block = athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null));
var parent = athens.db.get_parent(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null));
var root_block_QMARK_ = cljs.core.boolean$(new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(parent));
if((!((index === (0))))){
return athens.events.split_block(uid,val,index);
} else {
if(((cljs.core.empty_QMARK_(val)) && (root_block_QMARK_))){
return athens.events.new_block(block,parent);
} else {
if(cljs.core.empty_QMARK_(val)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unindent","unindent",-1291301718),uid], null)], null);
} else {
if(cljs.core.truth_((((index === (0)))?val:false))){
return athens.events.bump_up(uid);
} else {
return null;
}
}
}
}
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"enter","enter",1792452624),(function (_,p__62035){
var vec__62036 = p__62035;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62036,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62036,(1),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62036,(2),null);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62036,(3),null);
return athens.events.enter(uid,val,index);
}));
athens.events.indent = (function athens$events$indent(uid){
var block = athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null));
var parent = athens.db.get_parent(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null));
var older_sib = athens.db.get_block(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__62039_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(block) - (1)),new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(p1__62039_SHARP_));
}),new cljs.core.Keyword("block","children","block/children",-1040716209).cljs$core$IFn$_invoke$arity$1(parent)))));
var new_block = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","order","block/order",-1429282437),cljs.core.count(new cljs.core.Keyword("block","children","block/children",-1040716209).cljs$core$IFn$_invoke$arity$1(older_sib))], null);
var reindex_blocks = athens.events.dec_after(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(block));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact!","transact!",-822725810),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(older_sib),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_block], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","children","block/children",-1040716209),reindex_blocks], null)], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"indent","indent",-148200125),(function (_,p__62040){
var vec__62041 = p__62040;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62041,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62041,(1),null);
return athens.events.indent(uid);
}));
athens.events.unindent = (function athens$events$unindent(uid,context_root_uid){
var parent = athens.db.get_parent(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null));
var grandpa = athens.db.get_parent(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent));
var new_block = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid,new cljs.core.Keyword("block","order","block/order",-1429282437),(new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(parent) + (1))], null);
var reindex_grandpa = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_block], null),athens.events.inc_after(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(grandpa),new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(parent)));
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(parent);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(parent),context_root_uid);
}
})())){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact!","transact!",-822725810),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(grandpa),new cljs.core.Keyword("block","children","block/children",-1040716209),reindex_grandpa], null)], null)], null);
}
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unindent","unindent",-1291301718),(function (p__62044,p__62045){
var map__62046 = p__62044;
var map__62046__$1 = (((((!((map__62046 == null))))?(((((map__62046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62046.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62046):map__62046);
var rfdb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62046__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__62047 = p__62045;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62047,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62047,(1),null);
var context_root_uid = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(rfdb,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-route","current-route",2067529448),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
return athens.events.unindent(uid,context_root_uid);
}));
athens.events.target_child = (function athens$events$target_child(source,source_parent,target){
var new_source_block = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(source),new cljs.core.Keyword("block","order","block/order",-1429282437),(0)], null);
var new_parent_children = athens.events.dec_after(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(source_parent),new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(source));
var new_target_children = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_source_block], null),athens.events.inc_after(new cljs.core.Keyword(null,"dbid","dbid",-196647356).cljs$core$IFn$_invoke$arity$1(target),((0) - (1))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(source_parent),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(source)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(source_parent),new cljs.core.Keyword("block","children","block/children",-1040716209),new_parent_children], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target),new cljs.core.Keyword("block","children","block/children",-1040716209),new_target_children], null)], null);
});
/**
 * http://blog.jenkster.com/2013/11/clojure-less-than-greater-than-tip.html
 */
athens.events.between = (function athens$events$between(s,t,x){
if((s < t)){
return (((s < x)) && ((x < t)));
} else {
return (((t < x)) && ((x < s)));
}
});
/**
 * Give source block target block's order
 *  When source is below target, increment block orders between source and target-1
 *  When source is above target, decrement block order between...
 */
athens.events.target_sibling_same_parent = (function athens$events$target_sibling_same_parent(source,target,parent){
var s_order = new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(source);
var t_order = new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(target);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s_order,(t_order - (1)))){
return null;
} else {
var new_source_block = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(source),new cljs.core.Keyword("block","order","block/order",-1429282437),t_order], null);
var inc_or_dec = (((s_order > t_order))?cljs.core.inc:cljs.core.dec);
var reindex = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_source_block], null),(function (){var G__62051 = new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-order","?new-order",152538232,null),new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.Symbol("db","id","db/id",252134429,null),new cljs.core.Symbol("block","order","block/order",211249090,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Symbol(null,"?s-order","?s-order",-1665716070,null),new cljs.core.Symbol(null,"?t-order","?t-order",-1133173893,null),new cljs.core.Symbol(null,"?between","?between",-299074232,null),new cljs.core.Symbol(null,"?inc-or-dec","?inc-or-dec",515984879,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.Symbol(null,"?order","?order",2076500391,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"?between","?between",-299074232,null),new cljs.core.Symbol(null,"?s-order","?s-order",-1665716070,null),new cljs.core.Symbol(null,"?t-order","?t-order",-1133173893,null),new cljs.core.Symbol(null,"?order","?order",2076500391,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"?inc-or-dec","?inc-or-dec",515984879,null),new cljs.core.Symbol(null,"?order","?order",2076500391,null)),new cljs.core.Symbol(null,"?new-order","?new-order",152538232,null)], null)], null);
var G__62052 = cljs.core.deref(athens.db.dsdb);
var G__62053 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent);
var G__62054 = s_order;
var G__62055 = (t_order - (1));
var G__62056 = athens.events.between;
var G__62057 = inc_or_dec;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$7 ? datascript.core.q.cljs$core$IFn$_invoke$arity$7(G__62051,G__62052,G__62053,G__62054,G__62055,G__62056,G__62057) : datascript.core.q.call(null,G__62051,G__62052,G__62053,G__62054,G__62055,G__62056,G__62057));
})());
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","children","block/children",-1040716209),reindex], null)], null);
}
});
athens.events.diff_parent = (function athens$events$diff_parent(source,target,source_parent,target_parent){
var new_block = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(source),new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(target)], null);
var source_parent_children = (function (){var G__62058 = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-order","?new-order",152538232,null),new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.Symbol("db","id","db/id",252134429,null),new cljs.core.Symbol("block","order","block/order",211249090,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Symbol(null,"?source-order","?source-order",-2138536659,null),new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.list(new cljs.core.Symbol(null,"dec-after","dec-after",-2019085122,null),new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Symbol(null,"?source-order","?source-order",-2138536659,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-order","?new-order",152538232,null))], null);
var G__62059 = cljs.core.deref(athens.db.dsdb);
var G__62060 = athens.db.rules;
var G__62061 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(source_parent);
var G__62062 = new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(source);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$5 ? datascript.core.q.cljs$core$IFn$_invoke$arity$5(G__62058,G__62059,G__62060,G__62061,G__62062) : datascript.core.q.call(null,G__62058,G__62059,G__62060,G__62061,G__62062));
})();
var target_parent_children = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_block], null),athens.events.inc_after(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target_parent),(new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(target) - (1))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(source_parent),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(source)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(source_parent),new cljs.core.Keyword("block","children","block/children",-1040716209),source_parent_children], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target_parent),new cljs.core.Keyword("block","children","block/children",-1040716209),target_parent_children], null)], null);
});
athens.events.drop_bullet = (function athens$events$drop_bullet(source_uid,target_uid,kind){
var source = athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),source_uid], null));
var target = athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),target_uid], null));
var source_parent = athens.db.get_parent(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),source_uid], null));
var target_parent = athens.db.get_parent(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),target_uid], null));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact!","transact!",-822725810),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.Keyword(null,"child","child",623967545)))?athens.events.target_child(source,source_parent,target):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(source_parent,target_parent))?athens.events.target_sibling_same_parent(source,target,source_parent):((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(source_parent,target_parent))?athens.events.diff_parent(source,target,source_parent,target_parent):null)))], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"drop-bullet","drop-bullet",1177869489),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,p__62063){
var vec__62064 = p__62063;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62064,(0),null);
var source_uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62064,(1),null);
var target_uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62064,(2),null);
var kind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62064,(3),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"drop-bullet","drop-bullet",-1476566280,null),new cljs.core.Symbol(null,"source-uid","source-uid",-1936151351,null),new cljs.core.Symbol(null,"target-uid","target-uid",361434315,null),new cljs.core.Symbol(null,"kind","kind",923265724,null)));

var opts__46798__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = athens.events.drop_bullet((function (){var opts__46798__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = source_uid;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"source-uid","source-uid",-1936151351,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46799__auto__;
})(),(function (){var opts__46798__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = target_uid;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"target-uid","target-uid",361434315,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46799__auto__;
})(),(function (){var opts__46798__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = kind;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46799__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"drop-bullet","drop-bullet",-1476566280,null),new cljs.core.Symbol(null,"source-uid","source-uid",-1936151351,null),new cljs.core.Symbol(null,"target-uid","target-uid",361434315,null),new cljs.core.Symbol(null,"kind","kind",923265724,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__46799__auto__;
}catch (e62067){var e = e62067;
throw e;
}}):(function (_,p__62068){
var vec__62069 = p__62068;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62069,(0),null);
var source_uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62069,(1),null);
var target_uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62069,(2),null);
var kind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62069,(3),null);
return athens.events.drop_bullet(source_uid,target_uid,kind);
})));
athens.events.left_sidebar_drop_above = (function athens$events$left_sidebar_drop_above(s_order,t_order){
var source_eid = (function (){var G__62072 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?s-order","?s-order",-1665716070,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("page","sidebar","page/sidebar",32416927),new cljs.core.Symbol(null,"?s-order","?s-order",-1665716070,null)], null)], null);
var G__62073 = cljs.core.deref(athens.db.dsdb);
var G__62074 = s_order;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__62072,G__62073,G__62074) : datascript.core.q.call(null,G__62072,G__62073,G__62074));
})();
var new_source = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),source_eid,new cljs.core.Keyword("page","sidebar","page/sidebar",32416927),(((s_order < t_order))?(t_order - (1)):t_order)], null);
var inc_or_dec = (((s_order < t_order))?cljs.core.dec:cljs.core.inc);
var new_indices = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_source], null),(function (){var G__62075 = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?shortcut","?shortcut",243601730,null),new cljs.core.Symbol(null,"?new-order","?new-order",152538232,null),new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.Symbol("db","id","db/id",252134429,null),new cljs.core.Symbol("page","sidebar","page/sidebar",1672948454,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?s-order","?s-order",-1665716070,null),new cljs.core.Symbol(null,"?t-order","?t-order",-1133173893,null),new cljs.core.Symbol(null,"?between","?between",-299074232,null),new cljs.core.Symbol(null,"?inc-or-dec","?inc-or-dec",515984879,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?shortcut","?shortcut",243601730,null),new cljs.core.Keyword("page","sidebar","page/sidebar",32416927),new cljs.core.Symbol(null,"?order","?order",2076500391,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"?between","?between",-299074232,null),new cljs.core.Symbol(null,"?s-order","?s-order",-1665716070,null),new cljs.core.Symbol(null,"?t-order","?t-order",-1133173893,null),new cljs.core.Symbol(null,"?order","?order",2076500391,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"?inc-or-dec","?inc-or-dec",515984879,null),new cljs.core.Symbol(null,"?order","?order",2076500391,null)),new cljs.core.Symbol(null,"?new-order","?new-order",152538232,null)], null)], null);
var G__62076 = cljs.core.deref(athens.db.dsdb);
var G__62077 = s_order;
var G__62078 = (((s_order < t_order))?t_order:(t_order - (1)));
var G__62079 = athens.events.between;
var G__62080 = inc_or_dec;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$6 ? datascript.core.q.cljs$core$IFn$_invoke$arity$6(G__62075,G__62076,G__62077,G__62078,G__62079,G__62080) : datascript.core.q.call(null,G__62075,G__62076,G__62077,G__62078,G__62079,G__62080));
})());
return new_indices;
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("left-sidebar","drop-above","left-sidebar/drop-above",75584917),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,p__62081){
var vec__62082 = p__62081;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62082,(0),null);
var source_order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62082,(1),null);
var target_order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62082,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),cljs.core.list(new cljs.core.Symbol(null,"left-sidebar-drop-above","left-sidebar-drop-above",633543876,null),new cljs.core.Symbol(null,"source-order","source-order",-515065695,null),new cljs.core.Symbol(null,"target-order","target-order",1589056416,null))], null)], null));

var opts__46798__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),athens.events.left_sidebar_drop_above(source_order,target_order)], null)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),cljs.core.list(new cljs.core.Symbol(null,"left-sidebar-drop-above","left-sidebar-drop-above",633543876,null),new cljs.core.Symbol(null,"source-order","source-order",-515065695,null),new cljs.core.Symbol(null,"target-order","target-order",1589056416,null))], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__46799__auto__;
}catch (e62085){var e = e62085;
throw e;
}}):(function (_,p__62086){
var vec__62087 = p__62086;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62087,(0),null);
var source_order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62087,(1),null);
var target_order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62087,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),athens.events.left_sidebar_drop_above(source_order,target_order)], null)], null);
})));
athens.events.left_sidebar_drop_below = (function athens$events$left_sidebar_drop_below(s_order,t_order){
var source_eid = (function (){var G__62090 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?s-order","?s-order",-1665716070,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("page","sidebar","page/sidebar",32416927),new cljs.core.Symbol(null,"?s-order","?s-order",-1665716070,null)], null)], null);
var G__62091 = cljs.core.deref(athens.db.dsdb);
var G__62092 = s_order;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__62090,G__62091,G__62092) : datascript.core.q.call(null,G__62090,G__62091,G__62092));
})();
var new_source = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),source_eid,new cljs.core.Keyword("page","sidebar","page/sidebar",32416927),t_order], null);
var new_indices = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_source], null),(function (){var G__62093 = new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?shortcut","?shortcut",243601730,null),new cljs.core.Symbol(null,"?new-order","?new-order",152538232,null),new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.Symbol("db","id","db/id",252134429,null),new cljs.core.Symbol("page","sidebar","page/sidebar",1672948454,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?s-order","?s-order",-1665716070,null),new cljs.core.Symbol(null,"?t-order","?t-order",-1133173893,null),new cljs.core.Symbol(null,"?between","?between",-299074232,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?shortcut","?shortcut",243601730,null),new cljs.core.Keyword("page","sidebar","page/sidebar",32416927),new cljs.core.Symbol(null,"?order","?order",2076500391,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"?between","?between",-299074232,null),new cljs.core.Symbol(null,"?s-order","?s-order",-1665716070,null),new cljs.core.Symbol(null,"?t-order","?t-order",-1133173893,null),new cljs.core.Symbol(null,"?order","?order",2076500391,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"dec","dec",-766002333,null),new cljs.core.Symbol(null,"?order","?order",2076500391,null)),new cljs.core.Symbol(null,"?new-order","?new-order",152538232,null)], null)], null);
var G__62094 = cljs.core.deref(athens.db.dsdb);
var G__62095 = s_order;
var G__62096 = (t_order + (1));
var G__62097 = athens.events.between;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$5 ? datascript.core.q.cljs$core$IFn$_invoke$arity$5(G__62093,G__62094,G__62095,G__62096,G__62097) : datascript.core.q.call(null,G__62093,G__62094,G__62095,G__62096,G__62097));
})());
return new_indices;
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("left-sidebar","drop-below","left-sidebar/drop-below",1291292866),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,p__62098){
var vec__62099 = p__62098;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62099,(0),null);
var source_order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62099,(1),null);
var target_order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62099,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),cljs.core.list(new cljs.core.Symbol(null,"left-sidebar-drop-below","left-sidebar-drop-below",1703885544,null),new cljs.core.Symbol(null,"source-order","source-order",-515065695,null),new cljs.core.Symbol(null,"target-order","target-order",1589056416,null))], null)], null));

var opts__46798__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__46799__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),athens.events.left_sidebar_drop_below(source_order,target_order)], null)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46799__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),cljs.core.list(new cljs.core.Symbol(null,"left-sidebar-drop-below","left-sidebar-drop-below",1703885544,null),new cljs.core.Symbol(null,"source-order","source-order",-515065695,null),new cljs.core.Symbol(null,"target-order","target-order",1589056416,null))], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__46799__auto__;
}catch (e62102){var e = e62102;
throw e;
}}):(function (_,p__62103){
var vec__62104 = p__62103;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62104,(0),null);
var source_order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62104,(1),null);
var target_order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62104,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),athens.events.left_sidebar_drop_below(source_order,target_order)], null)], null);
})));

//# sourceMappingURL=athens.events.js.map