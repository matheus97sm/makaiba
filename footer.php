<?php
/**
 * The template for displaying the footer
 *
 * Contains footer content and the closing of the #main and #page div elements.
 *
 * @package WordPress
 * @subpackage Twenty_Thirteen
 * @since Twenty Thirteen 1.0
 */
?>

<?php 
wp_reset_query();
if (!is_front_page()) { ?>
<footer class="footer">
  <div class="footer-container">
    <div class="footer-left">
      <a href="<?=site_url()?>">
        <img src="<?=get_template_directory_URI()?>/img/src/logo_redonda.svg" alt="Logotípo Makaíba" />
      </a>

      <div>
        <span>arquitetura e urbanismo</span>
        <span>Copyright © 2020 | All rights reserved</span>
      </div>
    </div>

    <div class="footer-right">
      <a href="https://goo.gl/maps/FxTDcetzvNuyyb7T9" target="_blank" class="endereco">
        Av. Afonso Pena, 867 . Sala 2215</br>
        Centro . Belo Horizonte / MG . 30130-002
      </a>

      <div class="contato">
        <a href="tel:3132345724" target="_blank">31 3234-5724</a>
        <a href="mailto:contato@makaiba.com.br">contato@makaiba.com.br</a>
      </div>

      <div class="midias">
        <a href="https://instagram.com" target="_blank">
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
  </div>
</footer>
<?php } ?>

<div style="display: none;">
  <?php include 'svg.php'; ?>
</div>

<script src="<?=get_template_directory_URI()?>/app/app.js"></script>

<?php wp_footer(); ?>

</body>

</html>