goog.provide('athens.devcards.spinner');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.views.spinner');
goog.require('devcards.core');
goog.require('stylefy.core');
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.spinner","athens.devcards.spinner",1269258109),new cljs.core.Keyword(null,"Default-Spinner","Default-Spinner",-290996500)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Default-Spinner",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.spinner !== 'undefined') && (typeof athens.devcards.spinner.t_athens$devcards$spinner61633 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.spinner.t_athens$devcards$spinner61633 = (function (meta61634){
this.meta61634 = meta61634;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.spinner.t_athens$devcards$spinner61633.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61635,meta61634__$1){
var self__ = this;
var _61635__$1 = this;
return (new athens.devcards.spinner.t_athens$devcards$spinner61633(meta61634__$1));
}));

(athens.devcards.spinner.t_athens$devcards$spinner61633.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61635){
var self__ = this;
var _61635__$1 = this;
return self__.meta61634;
}));

(athens.devcards.spinner.t_athens$devcards$spinner61633.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.spinner.t_athens$devcards$spinner61633.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__42491__auto__,devcard_opts__42492__auto__){
var self__ = this;
var this__42491__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42492__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42510__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.spinner.spinner_component,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.spinner.spinner_style)], null);
if(cljs.core.fn_QMARK_(v__42510__auto__)){
return (function (data_atom__42511__auto__,owner__42512__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__42510__auto__,data_atom__42511__auto__,owner__42512__auto__], null));
});
} else {
return reagent.core.as_element(v__42510__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__42492__auto__))], 0))], 0));
}));

(athens.devcards.spinner.t_athens$devcards$spinner61633.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta61634","meta61634",-330099527,null)], null);
}));

(athens.devcards.spinner.t_athens$devcards$spinner61633.cljs$lang$type = true);

(athens.devcards.spinner.t_athens$devcards$spinner61633.cljs$lang$ctorStr = "athens.devcards.spinner/t_athens$devcards$spinner61633");

(athens.devcards.spinner.t_athens$devcards$spinner61633.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.spinner/t_athens$devcards$spinner61633");
}));

/**
 * Positional factory function for athens.devcards.spinner/t_athens$devcards$spinner61633.
 */
athens.devcards.spinner.__GT_t_athens$devcards$spinner61633 = (function athens$devcards$spinner$__GT_t_athens$devcards$spinner61633(meta61634){
return (new athens.devcards.spinner.t_athens$devcards$spinner61633(meta61634));
});

}

return (new athens.devcards.spinner.t_athens$devcards$spinner61633(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.spinner","athens.devcards.spinner",1269258109),new cljs.core.Keyword(null,"Spinner-with-custom-message","Spinner-with-custom-message",-1987622770)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Spinner-with-custom-message",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.spinner !== 'undefined') && (typeof athens.devcards.spinner.t_athens$devcards$spinner61636 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.spinner.t_athens$devcards$spinner61636 = (function (meta61637){
this.meta61637 = meta61637;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.spinner.t_athens$devcards$spinner61636.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61638,meta61637__$1){
var self__ = this;
var _61638__$1 = this;
return (new athens.devcards.spinner.t_athens$devcards$spinner61636(meta61637__$1));
}));

(athens.devcards.spinner.t_athens$devcards$spinner61636.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61638){
var self__ = this;
var _61638__$1 = this;
return self__.meta61637;
}));

(athens.devcards.spinner.t_athens$devcards$spinner61636.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.spinner.t_athens$devcards$spinner61636.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__42491__auto__,devcard_opts__42492__auto__){
var self__ = this;
var this__42491__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42492__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42510__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.spinner.spinner_component,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.spinner.spinner_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),"Custom Loading Message"], null))], null);
if(cljs.core.fn_QMARK_(v__42510__auto__)){
return (function (data_atom__42511__auto__,owner__42512__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__42510__auto__,data_atom__42511__auto__,owner__42512__auto__], null));
});
} else {
return reagent.core.as_element(v__42510__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__42492__auto__))], 0))], 0));
}));

(athens.devcards.spinner.t_athens$devcards$spinner61636.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta61637","meta61637",-1292563518,null)], null);
}));

(athens.devcards.spinner.t_athens$devcards$spinner61636.cljs$lang$type = true);

(athens.devcards.spinner.t_athens$devcards$spinner61636.cljs$lang$ctorStr = "athens.devcards.spinner/t_athens$devcards$spinner61636");

(athens.devcards.spinner.t_athens$devcards$spinner61636.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.spinner/t_athens$devcards$spinner61636");
}));

/**
 * Positional factory function for athens.devcards.spinner/t_athens$devcards$spinner61636.
 */
athens.devcards.spinner.__GT_t_athens$devcards$spinner61636 = (function athens$devcards$spinner$__GT_t_athens$devcards$spinner61636(meta61637){
return (new athens.devcards.spinner.t_athens$devcards$spinner61636(meta61637));
});

}

return (new athens.devcards.spinner.t_athens$devcards$spinner61636(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.spinner.js.map