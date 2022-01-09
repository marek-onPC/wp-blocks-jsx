<?php
/**
* Plugin Name: GutenPlus
* Plugin URI: https://marek-onpc.com/plugin
* Description: A Gutenberg extension plugin, which provides often used blocks with clean and user-friendly design.
* Version: 1.0.0
* Author: marekonpc
* Author URI: https://marek-onPC.com
* License: GPLv2
* License URI: https://www.gnu.org/licenses/gpl-2.0.html
* Text Domain: gutenplus
*/

define('GUTENPLUS_PATH', plugin_dir_path( __FILE__ ));
define('GUTENPLUS_URL', plugin_dir_url( __FILE__ ));
include(GUTENPLUS_PATH . 'inc/init.php');
include(GUTENPLUS_PATH . 'inc/styles.php');
include(GUTENPLUS_PATH . 'inc/gutenplus-theme-options.php');
include(GUTENPLUS_PATH . 'inc/save-plugin-options.php');
