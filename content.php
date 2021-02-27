<?php
/**
 * The default template for displaying content
 *
 * Used for both single and index/archive/search.
 *
 * @package WordPress
 * @subpackage Twenty_Thirteen
 * @since Twenty Thirteen 1.0
 */
?>

<? if (is_single()) { ?>

<section class="projeto">
  <div class="projeto-img">
    <img src="<?=catch_that_image(1)?>" alt="<?=the_title()?>" />
  </div>

  <div class="container">
    <div class="projeto-content">
      <div class="projeto-dados">
        <span class="line"></span>
        <?php 
        $categories = get_the_category(get_the_ID());
        foreach($categories as $category) { ?>
        <span class="category"><?=$category->name?></span>
        <?php } ?>

        <h1><?=the_title()?></h1>

        <div>
          <?=the_field('dados')?>
        </div>
      </div>

      <div class="projeto-descricao">
        <?=the_content()?>
      </div>
    </div>
  </div>

  <div class="projeto-gallery">
    <div class="projeto-gallery-wrapper">
      <div class="projeto-gallery-img">
        <?php 
        $fields = CFS()->get( 'projetos' );
        foreach ( $fields as $field ) { ?>

        <div class="projeto-gallery-img-item">
          <img src="<?=$field['imagem'];?>" alt="Makaíba" />
        </div>

        <?php } ?>
      </div>

      <div class="projeto-gallery-buttons">
        <div class="projeto-gallery-controls">
          <button class="projeto-gallery-left">
            <img src="<?=get_template_directory_URI()?>/img/src/left.svg" />
          </button>

          <button class="projeto-gallery-right">
            <img src="<?=get_template_directory_URI()?>/img/src/right.svg" />
          </button>
        </div>

        <div class="projeto-gallery-page">

        </div>

        <div class="projeto-gallery-screen">
          <button class="projeto-gallery-button-full">
            <img src="<?=get_template_directory_URI()?>/img/src/expand.svg" />
          </button>

          <button class="projeto-gallery-button-grid">
            <img src="<?=get_template_directory_URI()?>/img/src/grid.svg" />
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="projeto-gallery-grid">
    <button class="projeto-gallery-grid-close">
      <span></span>
    </button>

    <div class="projeto-gallery-grid-wrapper">
      <?php 
      $fields = CFS()->get( 'projetos' );
      foreach ( $fields as $field ) { ?>

      <div class="projeto-gallery-grid-item">
        <img src="<?=$field['imagem'];?>" alt="Makaíba" />
      </div>

      <?php } ?>
    </div>
  </div>

  <div class="container">
    <div class="projeto-gallery-txt">
      <?php 
      $fields = CFS()->get( 'projetos' );
      foreach ( $fields as $field ) { ?>

      <div class="projeto-gallery-txt-item">
        <?=$field['descricao'];?>
      </div>

      <?php } ?>
    </div>
  </div>
</section>



<? } ?>