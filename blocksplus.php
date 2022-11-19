<?php
/**
* Plugin Name: BlocksPlus
* Plugin URI: https://github.com/marek-onPC/wp-blocks-jsx
* Description: A Gutenberg extension plugin, which provides often used blocks with clean and user-friendly design.
* Version: 1.2.4
* Author: marekonpc
* Author URI: https://marek-onpc.github.io/
* License: GPLv2
* License URI: https://www.gnu.org/licenses/gpl-2.0.html
* Text Domain: blocksplus
*/

define('BLOCKSPLUS_PATH', plugin_dir_path( __FILE__ ));
define('BLOCKSPLUS_URL', plugin_dir_url( __FILE__ ));
include(BLOCKSPLUS_PATH . 'inc/init.php');
include(BLOCKSPLUS_PATH . 'inc/styles.php');
include(BLOCKSPLUS_PATH . 'inc/blocksplus-theme-options.php');
include(BLOCKSPLUS_PATH . 'inc/save-plugin-options.php');
