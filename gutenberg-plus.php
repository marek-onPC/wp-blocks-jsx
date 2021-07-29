<?php
/**
* Plugin Name: Gutenberg Plus
* Plugin URI: https://marek-onPC.com/gutenbergplus
* Description: WordPress Gutenberg extension plugin
* Version: 1.0.0
* Author: marek-onPC
* Author URI: https://marek-onPC.com
* License: GPL2
*/

define('GUTENBERG_PLUS_PATH', plugin_dir_path( __FILE__ ));
define('GUTENBERG_PLUS_URL', plugin_dir_url( __FILE__ ));
include(GUTENBERG_PLUS_PATH . 'inc/init.php');
include(GUTENBERG_PLUS_PATH . 'inc/styles.php');
include(GUTENBERG_PLUS_PATH . 'inc/gutenberg-theme-options.php');
include(GUTENBERG_PLUS_PATH . 'inc/save-plugin-options.php');
