<?php
$slides = $attributes['slides'] ?? [];
$autoplay = $attributes['autoplay'] ?? true;
$loop = $attributes['loop'] ?? true;
$showArrows = $attributes['showArrows'] ?? true;
$showPagination = $attributes['showPagination'] ?? true;
$effect = $attributes['effect'] ?? 'slide';
$speed = $attributes['speed'] ?? 500;
$delay = $attributes['delay'] ?? 3000;
$slideGap = $attributes['slideGap'] ?? 16;

$uid = 'njr-slider-' . uniqid();
?>

<div id="<?php echo esc_attr($uid); ?>" class="swiper njr-slider" data-settings='<?php echo esc_attr(json_encode([
  'autoplay' => $autoplay ? ['delay' => $delay] : false,
  'loop' => $loop,
  'effect' => $effect,
  'speed' => $speed,
  'spaceBetween' => $slideGap,
  'pagination' => $showPagination,
  'navigation' => $showArrows
])); ?>'>
    <div class="swiper-wrapper">
        <?php foreach ($slides as $slide): ?>
            <div class="swiper-slide">
                <img src="<?php echo esc_url($slide['url']); ?>" alt="<?php echo esc_attr($slide['alt']); ?>" />
                <?php if (!empty($slide['text'])): ?>
                    <div class="slide-caption"><?php echo esc_html($slide['text']); ?></div>
                <?php endif; ?>
            </div>
        <?php endforeach; ?>
    </div>
    <?php if ($showPagination): ?>
        <div class="swiper-pagination"></div>
    <?php endif; ?>
    <?php if ($showArrows): ?>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    <?php endif; ?>
</div>
