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

    <?php query_posts( array( 
      'post_type' => 'projeto', 
      'posts_per_page' => '5',
      'meta_key' => 'destaque',
      'meta_value' => true
    ) );  ?>
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

    </div>
  </div>
</section>

<?php get_footer();
