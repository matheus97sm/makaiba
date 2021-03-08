<?php
/**
 * Template Name: home
 *
 * @package WordPress
 * @subpackage makaiba
 * @since makaiba
 */
get_header(); ?>

<section class="banner">
  <div class="banner-wrapper">
    <div class="banner-filter"></div>

    <?php query_posts( array( 'post_type' => 'projeto', 'posts_per_page' => '5' ) );  ?>
    <?php if ( have_posts() ) : ?>
    <?php while ( have_posts() ) : the_post(); ?>

    <div class="banner-item">
      <?php 
      $categories = get_the_category(get_the_ID());
      foreach($categories as $category) { ?>
      <span class="line"></span>
      <span class="category"><?=$category->name?></span>
      <?php } ?>

      <h3><?=the_title()?></h3>
      <a href="<?=the_permalink()?>">ver projeto ></a>

    </div>

    <img class="banner-item-img" src="<?=catch_that_image(1)?>" alt="<?=the_title()?>" />

    <?php endwhile; ?>
    <?php endif; ?>
  </div>

  <div class="banner-footer">
    <div class="banner-buttons"></div>

    <div class="banner-midias">
      <a href="https://instagram.com/makaiba.estudio" target="_blank">
        <svg width="32" height="32" viewBox="0 0 32 32">
          <use xlink:href="#instagram"></use>
        </svg>
      </a>

      <a href="https://linkedin.com" target="_blank">
        <svg width="32" height="32" viewBox="0 0 32 32">
          <use xlink:href="#linkedin"></use>
        </svg>
      </a>
    </div>
  </div>
</section>

<?php get_footer();