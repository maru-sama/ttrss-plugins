<?php
class MaruKeys extends Plugin {
	private $host;

	function about() {
		return array(1.0,
			"Keyboard hotkeys emulate Google Reader + local Additions",
			"michaelguntsche");
	}

	function init($host) {
		$this->host = $host;

		$host->add_hook($host::HOOK_HOTKEY_MAP, $this);
	}

	function hook_hotkey_map($hotkeys) {

		$hotkeys["j"]		= "next_article_noexpand";
		$hotkeys["k"]		= "prev_article_noexpand";
		$hotkeys["l"]		= "next_feed";
		$hotkeys["h"]		= "prev_feed";
		$hotkeys["v"]		= "open_in_new_window";
		$hotkeys["r"]		= "feed_refresh";
		$hotkeys["m"]		= "toggle_unread";
		$hotkeys["o"]		= "toggle_expand";
		$hotkeys["(13)|enter"]	= "toggle_expand";
		$hotkeys["*(191)|?"]    = "help_dialog";
		$hotkeys["(32)|space"]	= "next_article";
		$hotkeys["(38)|up"]	= "article_scroll_up";
		$hotkeys["(40)|down"]	= "article_scroll_down";

		return $hotkeys;
	}

	function get_js() {
		return file_get_contents(dirname(__FILE__) . "/maru.js");
	}

	function api_version() {
		return 2;
	}

}
?>
