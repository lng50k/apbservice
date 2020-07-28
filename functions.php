<?php

add_theme_support( 'post-thumbnails' );
function apbservice_theme_assets() {

}
add_action( 'wp_enqueue_scripts', 'apbservice_theme_assets' );

function apbservice_theme_setup() {
    register_nav_menus( array(
        'header-left' => 'Header menu 1',
        'header-right' => 'Header menu 2',
        'footer' => 'Footer menu'
    ) );
}
    
add_action( 'after_setup_theme', 'apbservice_theme_setup' );