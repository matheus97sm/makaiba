<?php
/**
 * Template Name: estudio
 *
 * @package WordPress
 * @subpackage makaiba
 * @since makaiba
 */
get_header(); ?>

<section class="estudio-banner">
  <div class="container">
    <img src="<?=get_template_directory_URI()?>/img/src/fruta.png" alt="Makaíba" class="fruta" />
    <img src="<?=get_template_directory_URI()?>/img/src/logo.svg" alt="Makaíba" class="logo" />
  </div>
</section>

<section class="estudio-sobre">
  <div class="container">
    <div class="estudio-sobre-title">
      <span class="line"></span>
      <h1>estúdio</h1>
      <strong>arquitetura e urbanismo</strong>
    </div>

    <div class="estudio-sobre-content">
      <?=the_content()?>
    </div>
  </div>
</section>

<section class="estudio-equipe">
  <div class="container">
    <?php query_posts( array( 'post_type' => 'equipe', 'posts_per_page' => '3', 'orderby' => 'title', 'order' => 'ASC' ) );  ?>
    <?php if ( have_posts() ) : ?>
    <?php while ( have_posts() ) : the_post(); ?>
    <div class="estudio-equipe-item">
      <div class="estudio-equipe-item-img">
        <img src="<?=catch_that_image(1)?>" alt="<?=the_title()?>" />
      </div>
      <h3><?=the_title()?></h3>
      <strong><?=the_field('cargo')?></strong>
      <div class="estudio-equipe-item-txt">
        <?=the_content()?>
      </div>
    </div>
    <?php endwhile; ?>
    <?php endif; ?>
  </div>
</section>

<section class="estudio-clientes">
  <div class="container">
    <div class="estudio-clientes-title">
      <span class="line"></span>
      <strong>nossos</strong>
      <h2>clientes</h2>
    </div>

    <div class="estudio-clientes-wrapper">
      <?php query_posts( array( 'post_type' => 'clientes', 'posts_per_page' => '-1' ) );  ?>
      <?php if ( have_posts() ) : ?>
      <?php while ( have_posts() ) : the_post(); ?>
      <div class="estudio-clientes-item">
        <img src="<?=catch_that_image(1)?>" alt="<?=the_title()?>" />
      </div>
      <?php endwhile; ?>
      <?php endif; ?>
    </div>
  </div>
</section>

<section class="maps">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.0894605087697!2d-43.93950615439712!3d-19.920634616120484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699e4cc7e7d4f%3A0xdf7f496965d9f68f!2sAv.%20Afonso%20Pena%2C%20867%20-%202215%20-%20Centro%2C%20Belo%20Horizonte%20-%20MG%2C%2030130-002!5e0!3m2!1spt-BR!2sbr!4v1614206241704!5m2!1spt-BR!2sbr"
    loading="lazy"></iframe>
</section>

<?php get_footer();