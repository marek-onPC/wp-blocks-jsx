<?php
/**
* Plugin Name: Gutenberg Plus
* Plugin URI: https://marek-onpc.com/plugin
* Description: A Gutenberg extension plugin, which provides often used blocks with clean and user-friendly design.
* Version: 1.0.0
* Author: marek-onpc
* Author URI: https://marek-onPC.com
* License: GPLv2
* License URI: https://www.gnu.org/licenses/gpl-2.0.html
* Text Domain: gutenberg-plus
*/

define('GUTENBERG_PLUS_PATH', plugin_dir_path( __FILE__ ));
define('GUTENBERG_PLUS_URL', plugin_dir_url( __FILE__ ));
include(GUTENBERG_PLUS_PATH . 'inc/init.php');
include(GUTENBERG_PLUS_PATH . 'inc/styles.php');
include(GUTENBERG_PLUS_PATH . 'inc/gutenberg-theme-options.php');
include(GUTENBERG_PLUS_PATH . 'inc/save-plugin-options.php');
