function cdmExpandArticle(id, noexpand) {
	try {
		console.log("cdmExpandArticle " + id);

		if (!$("RROW-" + id)) return false;

		var oldrow = $("RROW-" + getActiveArticleId());

		var elem = $("CICD-" + getActiveArticleId());

		if (id == getActiveArticleId() && Element.visible(elem))
			return true;

		selectArticles("none");

		var old_offset = $("RROW-" + id).offsetTop;

		if (getActiveArticleId() && elem && !getInitParam("cdm_expanded")) {
			var collapse = $$("div#RROW-" + getActiveArticleId() +
				" span[class='collapseBtn']")[0];

		  	Element.hide(elem);
			Element.show("CEXC-" + getActiveArticleId());
			Element.hide(collapse);
		}

		if (oldrow) oldrow.removeClassName("active");

		setActiveArticleId(id);

		elem = $("CICD-" + id);

		var collapse = $$("div#RROW-" + id +
				" span[class='collapseBtn']")[0];

		var cencw = $("CENCW-" + id);

		if (!Element.visible(elem) && !noexpand) {
			if (cencw) {
				cencw.innerHTML = htmlspecialchars_decode(cencw.innerHTML);
				cencw.setAttribute('id', '');
				Element.show(cencw);
			}

			Element.show(elem);
			Element.hide("CEXC-" + id);
			Element.show(collapse);
		}

		var new_offset = $("RROW-" + id).offsetTop;

		if (old_offset > new_offset)
			$("headlines-frame").scrollTop -= (old_offset-new_offset);

		toggleUnread(id, 0, true);
		toggleSelected(id);
		$("RROW-" + id).addClassName("active");

		PluginHost.run(PluginHost.HOOK_ARTICLE_EXPANDED, id);

	} catch (e) {
		exception_error("cdmExpandArticle", e);
	}

	return false;
}
