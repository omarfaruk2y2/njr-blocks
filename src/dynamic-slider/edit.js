import './editor.scss';
import { __ } from '@wordpress/i18n';
import {
    InspectorControls,
    MediaUpload,
    MediaUploadCheck
} from '@wordpress/block-editor';
import {
    PanelBody,
    ToggleControl,
    SelectControl,
    RangeControl,
    Button
} from '@wordpress/components';
import { useEffect, useRef } from '@wordpress/element';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const EFFECT_OPTIONS = [
    { label: 'Slide', value: 'slide' },
    { label: 'Fade', value: 'fade' },
    { label: 'Cube', value: 'cube' },
    { label: 'Coverflow', value: 'coverflow' },
    { label: 'Flip', value: 'flip' },
];

export default function Edit({ attributes, setAttributes }) {
    const {
        slides,
        autoplay,
        loop,
        showArrows,
        showPagination,
        effect,
        speed,
        delay,
    } = attributes;

    const sliderRef = useRef(null);

    // Add new slide
    const addSlide = (media) => {
        const newSlides = [...slides, { url: media.url, alt: media.alt, text: '' }];
        setAttributes({ slides: newSlides });
    };

    // Edit slide caption
    const updateSlideText = (index, text) => {
        const updatedSlides = slides.map((slide, i) =>
            i === index ? { ...slide, text } : slide
        );
        setAttributes({ slides: updatedSlides });
    };

    // Replace slide image
    const replaceSlideImage = (index, media) => {
        const updatedSlides = slides.map((slide, i) =>
            i === index ? { ...slide, url: media.url, alt: media.alt } : slide
        );
        setAttributes({ slides: updatedSlides });
    };

    // Remove slide
    const removeSlide = (index) => {
        const updatedSlides = slides.filter((_, i) => i !== index);
        setAttributes({ slides: updatedSlides });
    };

    // Initialize Swiper in editor
    useEffect(() => {
        if (!sliderRef.current || slides.length === 0) return;
    
        const timeout = setTimeout(() => {
            new Swiper(sliderRef.current, {
                loop,
                effect,
                speed,
                autoplay: autoplay ? { delay } : false,
                pagination: showPagination ? {
                    el: sliderRef.current.querySelector('.swiper-pagination'),
                    clickable: true,
                } : undefined,
                navigation: showArrows ? {
                    nextEl: sliderRef.current.querySelector('.swiper-button-next'),
                    prevEl: sliderRef.current.querySelector('.swiper-button-prev'),
                } : undefined,
            });
        }, 100); // Delay 100ms to allow DOM to mount
    
        return () => clearTimeout(timeout);
    }, [slides, autoplay, loop, showArrows, showPagination, effect, speed, delay]);
    

    return (
        <>
            {/* Settings Panel */}
            <InspectorControls>
                <PanelBody title={__('Slider Settings')}>
                    <ToggleControl label="Autoplay" checked={autoplay} onChange={(val) => setAttributes({ autoplay: val })} />
                    <ToggleControl label="Loop" checked={loop} onChange={(val) => setAttributes({ loop: val })} />
                    <ToggleControl label="Show Arrows" checked={showArrows} onChange={(val) => setAttributes({ showArrows: val })} />
                    <ToggleControl label="Show Pagination" checked={showPagination} onChange={(val) => setAttributes({ showPagination: val })} />
                    <SelectControl label="Effect" value={effect} options={EFFECT_OPTIONS} onChange={(val) => setAttributes({ effect: val })} />
                    <RangeControl label="Speed" value={speed} min={100} max={5000} onChange={(val) => setAttributes({ speed: val })} />
                    <RangeControl label="Delay" value={delay} min={500} max={10000} onChange={(val) => setAttributes({ delay: val })} />
                </PanelBody>
            </InspectorControls>

            {/* Editor UI */}
            <div className="njr-slider-editor">
                <MediaUploadCheck>
                    <MediaUpload
                        onSelect={addSlide}
                        allowedTypes={['image']}
                        render={({ open }) => (
                            <Button onClick={open} variant="primary" style={{ marginBottom: '10px' }}>
                                Add Slide
                            </Button>
                        )}
                    />
                </MediaUploadCheck>

                {slides.length > 0 ? (
                    <div className="swiper njr-slider-preview" ref={sliderRef}>
                        <div className="swiper-wrapper">
                            {slides.map((slide, index) => (
                                <div className="swiper-slide" key={index} style={{ textAlign: 'center', padding: '10px' }}>
                                    <img src={slide.url} alt={slide.alt} style={{ maxWidth: '100%', height: 'auto' }} />
                                    <input
                                        type="text"
                                        value={slide.text}
                                        onChange={(e) => updateSlideText(index, e.target.value)}
                                        placeholder="Slide caption"
                                        style={{ width: '100%', marginTop: '0.5rem', padding: '4px' }}
                                    />
                                    <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '6px' }}>
                                        <MediaUploadCheck>
                                            <MediaUpload
                                                allowedTypes={['image']}
                                                onSelect={(media) => replaceSlideImage(index, media)}
                                                render={({ open }) => (
                                                    <Button variant="secondary" onClick={open} size="small">
                                                        Replace Image
                                                    </Button>
                                                )}
                                            />
                                        </MediaUploadCheck>

                                        <Button
                                            variant="destructive"
                                            onClick={() => removeSlide(index)}
                                            size="small"
                                        >
                                            Remove
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {showPagination && <div className="swiper-pagination"></div>}
                        {showArrows && (
                            <>
                                <div className="swiper-button-prev"></div>
                                <div className="swiper-button-next"></div>
                            </>
                        )}
                    </div>
                ) : (
                    <p>No slides added yet.</p>
                )}
            </div>
        </>
    );
}
