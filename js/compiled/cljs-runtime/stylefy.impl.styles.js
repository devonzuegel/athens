goog.provide('stylefy.impl.styles');
goog.require('cljs.core');
goog.require('garden.core');
goog.require('clojure.string');
goog.require('stylefy.impl.dom');
goog.require('stylefy.impl.hashing');
goog.require('stylefy.impl.utils');
goog.require('stylefy.impl.state');
goog.require('stylefy.impl.conversion');
goog.require('stylefy.impl.log');
goog.require('clojure.set');
stylefy.impl.styles.global_vendor_prefixes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883),cljs.core.PersistentHashSet.EMPTY], null));
stylefy.impl.styles.add_global_vendors = (function stylefy$impl$styles$add_global_vendors(style){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809),clojure.set.union.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(stylefy.impl.styles.global_vendor_prefixes)),new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809).cljs$core$IFn$_invoke$arity$1(style)),new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883),clojure.set.union.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(stylefy.impl.styles.global_vendor_prefixes)),new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883).cljs$core$IFn$_invoke$arity$1(style))], null)], 0));
});
stylefy.impl.styles.create_style_BANG_ = (function stylefy$impl$styles$create_style_BANG_(p__40589,style_created_handler){
var map__40591 = p__40589;
var map__40591__$1 = (((((!((map__40591 == null))))?(((((map__40591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40591.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40591):map__40591);
var style = map__40591__$1;
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40591__$1,new cljs.core.Keyword(null,"props","props",453281727));
var hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40591__$1,new cljs.core.Keyword(null,"hash","hash",-13781596));
var style_css = stylefy.impl.conversion.style__GT_css.cljs$core$IFn$_invoke$arity$1(style);
var G__40594_40672 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"css","css",1135045163),style_css,new cljs.core.Keyword(null,"hash","hash",-13781596),hash], null);
(style_created_handler.cljs$core$IFn$_invoke$arity$1 ? style_created_handler.cljs$core$IFn$_invoke$arity$1(G__40594_40672) : style_created_handler.call(null,G__40594_40672));

var seq__40596 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432).cljs$core$IFn$_invoke$arity$1(props)));
var chunk__40597 = null;
var count__40598 = (0);
var i__40599 = (0);
while(true){
if((i__40599 < count__40598)){
var sub_style = chunk__40597.cljs$core$IIndexed$_nth$arity$2(null,i__40599);
var G__40607_40674 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),sub_style,new cljs.core.Keyword(null,"hash","hash",-13781596),stylefy.impl.hashing.hash_style(sub_style)], null);
var G__40608_40675 = style_created_handler;
(stylefy.impl.styles.create_style_BANG_.cljs$core$IFn$_invoke$arity$2 ? stylefy.impl.styles.create_style_BANG_.cljs$core$IFn$_invoke$arity$2(G__40607_40674,G__40608_40675) : stylefy.impl.styles.create_style_BANG_.call(null,G__40607_40674,G__40608_40675));


var G__40678 = seq__40596;
var G__40679 = chunk__40597;
var G__40680 = count__40598;
var G__40681 = (i__40599 + (1));
seq__40596 = G__40678;
chunk__40597 = G__40679;
count__40598 = G__40680;
i__40599 = G__40681;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40596);
if(temp__5735__auto__){
var seq__40596__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40596__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__40596__$1);
var G__40682 = cljs.core.chunk_rest(seq__40596__$1);
var G__40683 = c__4609__auto__;
var G__40684 = cljs.core.count(c__4609__auto__);
var G__40685 = (0);
seq__40596 = G__40682;
chunk__40597 = G__40683;
count__40598 = G__40684;
i__40599 = G__40685;
continue;
} else {
var sub_style = cljs.core.first(seq__40596__$1);
var G__40611_40687 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),sub_style,new cljs.core.Keyword(null,"hash","hash",-13781596),stylefy.impl.hashing.hash_style(sub_style)], null);
var G__40613_40688 = style_created_handler;
(stylefy.impl.styles.create_style_BANG_.cljs$core$IFn$_invoke$arity$2 ? stylefy.impl.styles.create_style_BANG_.cljs$core$IFn$_invoke$arity$2(G__40611_40687,G__40613_40688) : stylefy.impl.styles.create_style_BANG_.call(null,G__40611_40687,G__40613_40688));


var G__40690 = cljs.core.next(seq__40596__$1);
var G__40691 = null;
var G__40692 = (0);
var G__40693 = (0);
seq__40596 = G__40690;
chunk__40597 = G__40691;
count__40598 = G__40692;
i__40599 = G__40693;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Return class definition as string, or nil if the argument is nil.
 */
stylefy.impl.styles.class_into_string = (function stylefy$impl$styles$class_into_string(class$){
if(cljs.core.truth_(class$)){
if(typeof class$ === 'string'){
return class$;
} else {
if((class$ instanceof cljs.core.Keyword)){
return cljs.core.name(class$);
} else {
if(cljs.core.vector_QMARK_(class$)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(stylefy.impl.styles.class_into_string,class$)));
} else {
return null;
}
}
}
} else {
return null;
}
});
stylefy.impl.styles.validate_class_definition = (function stylefy$impl$styles$validate_class_definition(class$,origin){
if((((class$ == null)) || (typeof class$ === 'string') || ((class$ instanceof cljs.core.Keyword)) || (((cljs.core.vector_QMARK_(class$)) && (cljs.core.every_QMARK_((function (p1__40617_SHARP_){
return ((typeof p1__40617_SHARP_ === 'string') || ((p1__40617_SHARP_ instanceof cljs.core.Keyword)) || ((p1__40617_SHARP_ == null)));
}),class$)))))){
return null;
} else {
throw (new Error(["Assert failed: ",["Unsupported ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(origin)," type. It should be nil, keyword, string or vector of strings/keywords). Got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([class$], 0))].join(''),"\n","(or (nil? class) (string? class) (keyword? class) (and (vector? class) (every? (fn* [p1__40617#] (or (string? p1__40617#) (keyword? p1__40617#) (nil? p1__40617#))) class)))"].join('')));
}
});
/**
 * Given a style, hash and options, returns HTML attributes for a Hiccup component,
 * or nil if there are not any attributes.
 */
stylefy.impl.styles.prepare_style_return_value = (function stylefy$impl$styles$prepare_style_return_value(style,style_hash,options){
if(cljs.core.truth_(new cljs.core.Keyword("stylefy.core","with-classes","stylefy.core/with-classes",1994369003).cljs$core$IFn$_invoke$arity$1(options))){
stylefy.impl.log.warn(":stylefy.core/with-classes is deprecated in options map (since 1.3.0, removed in 2.0.0), use :class instead.");
} else {
}

var style_with_classes = new cljs.core.Keyword("stylefy.core","with-classes","stylefy.core/with-classes",1994369003).cljs$core$IFn$_invoke$arity$1(style);
var html_attributes = stylefy.impl.utils.remove_special_keywords(options);
var html_attributes_class = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(html_attributes);
var html_attributes_inline_style = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(html_attributes);
stylefy.impl.styles.validate_class_definition(html_attributes_class,":class");

stylefy.impl.styles.validate_class_definition(style_with_classes,":stylefy.core/with-classes");

if((html_attributes_inline_style == null)){
} else {
throw (new Error(["Assert failed: ","HTML attribute :style is not supported in options map. Instead, you should provide your style definitions as the first argument when calling use-style.","\n","(nil? html-attributes-inline-style)"].join('')));
}

var class_as_string = stylefy.impl.styles.class_into_string(html_attributes_class);
var style_with_classes_as_string = stylefy.impl.styles.class_into_string(style_with_classes);
var final_class = clojure.string.trim([cljs.core.str.cljs$core$IFn$_invoke$arity$1(style_hash)," ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [class_as_string,style_with_classes_as_string], null)))].join(''));
var final_html_attributes = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([html_attributes,(((!(cljs.core.empty_QMARK_(final_class))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),final_class], null):null)], 0));
if((!(cljs.core.empty_QMARK_(final_html_attributes)))){
return final_html_attributes;
} else {
return null;
}
});
stylefy.impl.styles.style_return_value = (function stylefy$impl$styles$style_return_value(style,style_hash,options){
var return_map = stylefy.impl.styles.prepare_style_return_value(style,style_hash,options);
if(((cljs.core.empty_QMARK_(style)) || (stylefy.impl.dom.style_in_dom_QMARK_(style_hash)))){
return return_map;
} else {
var contains_media_queries_QMARK_ = (!((new cljs.core.Keyword("stylefy.core","media","stylefy.core/media",-1323617834).cljs$core$IFn$_invoke$arity$1(style) == null)));
var contains_feature_queries_QMARK_ = (!((new cljs.core.Keyword("stylefy.core","supports","stylefy.core/supports",105019324).cljs$core$IFn$_invoke$arity$1(style) == null)));
var contains_manual_mode_QMARK_ = (!((new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369).cljs$core$IFn$_invoke$arity$1(style) == null)));
var excluded_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hover","hover",-341141711),null], null), null);
var modes = new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234).cljs$core$IFn$_invoke$arity$1(style);
var mode_names = ((cljs.core.map_QMARK_(modes))?cljs.core.set(cljs.core.keys(modes)):((cljs.core.vector_QMARK_(modes))?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,modes)):cljs.core.PersistentHashSet.EMPTY
));
var contains_modes_not_excluded_QMARK_ = (!(cljs.core.empty_QMARK_(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,excluded_modes),mode_names))));
var inline_style = stylefy.impl.conversion.garden_units__GT_css(stylefy.impl.utils.remove_special_keywords(style));
if(((contains_media_queries_QMARK_) || (contains_feature_queries_QMARK_) || (contains_manual_mode_QMARK_) || (contains_modes_not_excluded_QMARK_))){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([return_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inline_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),"hidden"], null)], 0))], null)], 0));
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([return_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),inline_style], null)], 0));
}
}
});
stylefy.impl.styles.use_style_BANG_ = (function stylefy$impl$styles$use_style_BANG_(style,options,style_created_handler){
stylefy.impl.state.check_stylefy_initialisation();

var style_with_global_vendors = ((cljs.core.empty_QMARK_(style))?null:stylefy.impl.styles.add_global_vendors(style));
var style_hash = stylefy.impl.hashing.hash_style(style_with_global_vendors);
var already_created = stylefy.impl.dom.style_by_hash(style_hash);
if((((!(cljs.core.empty_QMARK_(style_with_global_vendors)))) && ((!((style_hash == null)))) && (cljs.core.not(already_created)))){
stylefy.impl.styles.create_style_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),style_with_global_vendors,new cljs.core.Keyword(null,"hash","hash",-13781596),style_hash], null),style_created_handler);
} else {
}

return stylefy.impl.styles.style_return_value(style_with_global_vendors,style_hash,options);
});
stylefy.impl.styles.use_sub_style_BANG_ = (function stylefy$impl$styles$use_sub_style_BANG_(style,sub_style,options,style_created_handler){
var resolved_sub_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432).cljs$core$IFn$_invoke$arity$1(style),sub_style);
if(cljs.core.truth_(resolved_sub_style)){
return stylefy.impl.styles.use_style_BANG_(resolved_sub_style,options,style_created_handler);
} else {
return stylefy.impl.log.warn(["Sub-style ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sub_style], 0))," not found in style: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0))].join(''));
}
});
stylefy.impl.styles.sub_style = (function stylefy$impl$styles$sub_style(var_args){
var args__4795__auto__ = [];
var len__4789__auto___40715 = arguments.length;
var i__4790__auto___40716 = (0);
while(true){
if((i__4790__auto___40716 < len__4789__auto___40715)){
args__4795__auto__.push((arguments[i__4790__auto___40716]));

var G__40717 = (i__4790__auto___40716 + (1));
i__4790__auto___40716 = G__40717;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return stylefy.impl.styles.sub_style.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(stylefy.impl.styles.sub_style.cljs$core$IFn$_invoke$arity$variadic = (function (style,sub_styles){
var resolved_sub_style = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__40637_SHARP_,p2__40638_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__40637_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432),p2__40638_SHARP_], null));
}),style,sub_styles);
if(cljs.core.truth_(resolved_sub_style)){
return resolved_sub_style;
} else {
return stylefy.impl.log.warn(["Sub-style ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sub_styles], 0))," not found in style: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0))].join(''));
}
}));

(stylefy.impl.styles.sub_style.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(stylefy.impl.styles.sub_style.cljs$lang$applyTo = (function (seq40639){
var G__40640 = cljs.core.first(seq40639);
var seq40639__$1 = cljs.core.next(seq40639);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40640,seq40639__$1);
}));

stylefy.impl.styles.prepare_styles = (function stylefy$impl$styles$prepare_styles(var_args){
var G__40645 = arguments.length;
switch (G__40645) {
case 1:
return stylefy.impl.styles.prepare_styles.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return stylefy.impl.styles.prepare_styles.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(stylefy.impl.styles.prepare_styles.cljs$core$IFn$_invoke$arity$1 = (function (styles){
return stylefy.impl.styles.prepare_styles.cljs$core$IFn$_invoke$arity$2(styles,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-dom-update-after-done?","request-dom-update-after-done?",199142510),true], null));
}));

(stylefy.impl.styles.prepare_styles.cljs$core$IFn$_invoke$arity$2 = (function (styles,p__40646){
var map__40647 = p__40646;
var map__40647__$1 = (((((!((map__40647 == null))))?(((((map__40647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40647):map__40647);
var options = map__40647__$1;
var request_dom_update_after_done_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40647__$1,new cljs.core.Keyword(null,"request-dom-update-after-done?","request-dom-update-after-done?",199142510));
var styles_40723__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,styles);
var seq__40649_40724 = cljs.core.seq(styles_40723__$1);
var chunk__40650_40725 = null;
var count__40651_40726 = (0);
var i__40652_40727 = (0);
while(true){
if((i__40652_40727 < count__40651_40726)){
var style_40728 = chunk__40650_40725.cljs$core$IIndexed$_nth$arity$2(null,i__40652_40727);
stylefy.impl.styles.use_style_BANG_(style_40728,cljs.core.PersistentArrayMap.EMPTY,stylefy.impl.dom.save_style_BANG_);

var temp__5735__auto___40729 = cljs.core.vals(new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432).cljs$core$IFn$_invoke$arity$1(style_40728));
if(cljs.core.truth_(temp__5735__auto___40729)){
var sub_styles_40730 = temp__5735__auto___40729;
stylefy.impl.styles.prepare_styles.cljs$core$IFn$_invoke$arity$2(sub_styles_40730,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-dom-update-after-done?","request-dom-update-after-done?",199142510),false], null));
} else {
}


var G__40731 = seq__40649_40724;
var G__40732 = chunk__40650_40725;
var G__40733 = count__40651_40726;
var G__40734 = (i__40652_40727 + (1));
seq__40649_40724 = G__40731;
chunk__40650_40725 = G__40732;
count__40651_40726 = G__40733;
i__40652_40727 = G__40734;
continue;
} else {
var temp__5735__auto___40735 = cljs.core.seq(seq__40649_40724);
if(temp__5735__auto___40735){
var seq__40649_40736__$1 = temp__5735__auto___40735;
if(cljs.core.chunked_seq_QMARK_(seq__40649_40736__$1)){
var c__4609__auto___40737 = cljs.core.chunk_first(seq__40649_40736__$1);
var G__40738 = cljs.core.chunk_rest(seq__40649_40736__$1);
var G__40739 = c__4609__auto___40737;
var G__40740 = cljs.core.count(c__4609__auto___40737);
var G__40741 = (0);
seq__40649_40724 = G__40738;
chunk__40650_40725 = G__40739;
count__40651_40726 = G__40740;
i__40652_40727 = G__40741;
continue;
} else {
var style_40742 = cljs.core.first(seq__40649_40736__$1);
stylefy.impl.styles.use_style_BANG_(style_40742,cljs.core.PersistentArrayMap.EMPTY,stylefy.impl.dom.save_style_BANG_);

var temp__5735__auto___40743__$1 = cljs.core.vals(new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432).cljs$core$IFn$_invoke$arity$1(style_40742));
if(cljs.core.truth_(temp__5735__auto___40743__$1)){
var sub_styles_40744 = temp__5735__auto___40743__$1;
stylefy.impl.styles.prepare_styles.cljs$core$IFn$_invoke$arity$2(sub_styles_40744,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-dom-update-after-done?","request-dom-update-after-done?",199142510),false], null));
} else {
}


var G__40745 = cljs.core.next(seq__40649_40736__$1);
var G__40746 = null;
var G__40747 = (0);
var G__40748 = (0);
seq__40649_40724 = G__40745;
chunk__40650_40725 = G__40746;
count__40651_40726 = G__40747;
i__40652_40727 = G__40748;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(request_dom_update_after_done_QMARK_)){
return stylefy.impl.dom.update_dom_if_requested();
} else {
return null;
}
}));

(stylefy.impl.styles.prepare_styles.cljs$lang$maxFixedArity = 2);

stylefy.impl.styles.init_global_vendor_prefixes = (function stylefy$impl$styles$init_global_vendor_prefixes(options){
var global_vendor_prefixes_options = new cljs.core.Keyword(null,"global-vendor-prefixes","global-vendor-prefixes",882986417).cljs$core$IFn$_invoke$arity$1(options);
return cljs.core.reset_BANG_(stylefy.impl.styles.global_vendor_prefixes,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809),new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809).cljs$core$IFn$_invoke$arity$1(global_vendor_prefixes_options),new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883),new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883).cljs$core$IFn$_invoke$arity$1(global_vendor_prefixes_options)], null));
});

//# sourceMappingURL=stylefy.impl.styles.js.map