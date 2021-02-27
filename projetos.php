<?php
/**
 * Template Name: projetos
 *
 * @package WordPress
 * @subpackage makaiba
 * @since makaiba
 */
get_header(); ?>

<section class="projeto-outside">
  <?php query_posts( array( 'post_type' => 'projeto', 'posts_per_page' => '6' ) );  ?>
  <?php if ( have_posts() ) : ?>
  <?php while ( have_posts() ) : the_post(); ?>

  <a href="<?=the_permalink()?>" class="projeto-card">
    <div class="projeto-card-dados">
      <div>
        <span class="line"></span>
        <?php 
        $categories = get_the_category(get_the_ID());
        foreach($categories as $category) { ?>
        <span class="category"><?=$category->name?></span>
        <?php } ?>

        <h3><?=the_title()?></h3>

        <span class="year"><?=the_field('ano')?></span>
      </div>
    </div>

    <img class="projeto-card-img" src="<?=catch_that_image(1)?>" alt="<?=the_title()?>" />
  </a>

  <?php endwhile; ?>
  <?php endif; ?>
</section>

<?php get_footer();