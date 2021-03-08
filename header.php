<?php
/**
 * The Header template for our theme
 *
 * Displays all of the <head> section and everything up till <div id="main">
 *
 * @package WordPress
 * @subpackage Twenty_Thirteen
 * @since Twenty Thirteen 1.0
 */
?>
<!DOCTYPE html>
<!--[if IE 7]>
<html class="ie ie7" <?php language_attributes(); ?>>
<![endif]-->
<!--[if IE 8]>
<html class="ie ie8" <?php language_attributes(); ?>>
<![endif]-->
<!--[if !(IE 7) & !(IE 8)]><!-->
<html <?php language_attributes(); ?>>
<!--<![endif]-->

<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />

  <title><?php wp_title( '|', true, 'right' ); ?></title>

  <link rel="icon" type="image/png" href="<?=get_template_directory_URI()?>/img/favicon.png" />
  <link rel="profile" href="http://gmpg.org/xfn/11" />
  <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />

  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link href="https://fonts.googleapis.com/css2?family=Dosis:wght@400;500;700&display=swap" rel="stylesheet" />

  <link rel="stylesheet" href="<?=get_template_directory_URI()?>/style.css" />

  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

  <?php if (is_front_page()) { ?>
  <style>
  .header {
    position: absolute;
    top: 0;
    left: 0;
    background-color: transparent;
  }

  .header-menu .nav-menu li a {
    color: #fff;
  }
  </style>
  <? } else { ?>
  <style>
  .header {
    position: relative;
    background-color: #fff;
  }

  .header-menu {
    background-color: #fff;
  }

  .menu-hamb::before,
  .menu-hamb::after,
  .menu-hamb span {
    background-color: #2d2a26;
  }
  </style>
  <? } ?>

  <header class="header">
    <div class="header-wrapper">
      <div class="logo">
        <a href="<?=site_url()?>">
          <img
            src="<?=get_template_directory_URI()?>/img/src/<?php if (is_front_page()) { echo "logo_white"; } else { echo "logo"; } ?>.svg"
            alt="Logotipo Makaíba" />
        </a>
      </div>

      <nav class="header-menu" data-menu="menu">
        <?php wp_nav_menu( array( 'theme_location' => 'primary', 'menu' => 'MenuTopo', 'menu_class' => 'nav-menu', 'menu_id' => 'primary-menu' ) ); ?>
      </nav>

      <button class="menu-hamb" data-menu="button">
        <span></span>
      </button>
    </div>
  </header>