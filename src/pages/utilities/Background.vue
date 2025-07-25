<template>
    <div>
        <h1 class="onv-page-title">Background</h1>
        <p class="onv-page-subtitle">Utilitas background untuk mengontrol warna latar belakang, gradient, dan properti background lainnya dengan berbagai pilihan yang lengkap dan fleksibel.</p>

        <!-- Basic Background Colors -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Basic Background Colors</h2>
            <p class="onv-section-description">Warna background dasar menggunakan tema warna utama untuk konsistensi desain.</p>

            <div class="onv-demo-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
                <div class="onv-bg-thema" style="padding: 24px; border-radius: 8px; border: 1px solid #e5e7eb; color: white; text-align: center;">
                    <p style="font-weight: 600; margin-bottom: 8px;">Thema Background</p>
                    <code style="background: rgba(255,255,255,0.2); padding: 4px 8px; border-radius: 4px; font-size: 12px;">.onv-bg-thema</code>
                </div>
                <div class="onv-bg-primary" style="padding: 24px; border-radius: 8px; border: 1px solid #e5e7eb; color: white; text-align: center;">
                    <p style="font-weight: 600; margin-bottom: 8px;">Primary Background</p>
                    <code style="background: rgba(255,255,255,0.2); padding: 4px 8px; border-radius: 4px; font-size: 12px;">.onv-bg-primary</code>
                </div>
                <div class="onv-bg-secondary" style="padding: 24px; border-radius: 8px; border: 1px solid #e5e7eb; color: white; text-align: center;">
                    <p style="font-weight: 600; margin-bottom: 8px;">Secondary Background</p>
                    <code style="background: rgba(255,255,255,0.2); padding: 4px 8px; border-radius: 4px; font-size: 12px;">.onv-bg-secondary</code>
                </div>
                <div class="onv-bg-success" style="padding: 24px; border-radius: 8px; border: 1px solid #e5e7eb; color: white; text-align: center;">
                    <p style="font-weight: 600; margin-bottom: 8px;">Success Background</p>
                    <code style="background: rgba(255,255,255,0.2); padding: 4px 8px; border-radius: 4px; font-size: 12px;">.onv-bg-success</code>
                </div>
                <div class="onv-bg-warning" style="padding: 24px; border-radius: 8px; border: 1px solid #e5e7eb; color: white; text-align: center;">
                    <p style="font-weight: 600; margin-bottom: 8px;">Warning Background</p>
                    <code style="background: rgba(255,255,255,0.2); padding: 4px 8px; border-radius: 4px; font-size: 12px;">.onv-bg-warning</code>
                </div>
                <div class="onv-bg-info" style="padding: 24px; border-radius: 8px; border: 1px solid #e5e7eb; color: white; text-align: center;">
                    <p style="font-weight: 600; margin-bottom: 8px;">Info Background</p>
                    <code style="background: rgba(255,255,255,0.2); padding: 4px 8px; border-radius: 4px; font-size: 12px;">.onv-bg-info</code>
                </div>
                <div class="onv-bg-danger" style="padding: 24px; border-radius: 8px; border: 1px solid #e5e7eb; color: white; text-align: center;">
                    <p style="font-weight: 600; margin-bottom: 8px;">Danger Background</p>
                    <code style="background: rgba(255,255,255,0.2); padding: 4px 8px; border-radius: 4px; font-size: 12px;">.onv-bg-danger</code>
                </div>
                <div class="onv-bg-dark" style="padding: 24px; border-radius: 8px; border: 1px solid #e5e7eb; color: white; text-align: center;">
                    <p style="font-weight: 600; margin-bottom: 8px;">Dark Background</p>
                    <code style="background: rgba(255,255,255,0.2); padding: 4px 8px; border-radius: 4px; font-size: 12px;">.onv-bg-dark</code>
                </div>
                <div class="onv-bg-light" style="padding: 24px; border-radius: 8px; border: 1px solid #e5e7eb; color: #374151; text-align: center;">
                    <p style="font-weight: 600; margin-bottom: 8px;">Light Background</p>
                    <code style="background: rgba(0,0,0,0.1); padding: 4px 8px; border-radius: 4px; font-size: 12px;">.onv-bg-light</code>
                </div>
            </div>
        </section>

        <!-- Soft Background Colors -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Soft Background Colors</h2>
            <p class="onv-section-description">Warna background yang lebih lembut dan subtle untuk elemen yang membutuhkan penekanan ringan.</p>

            <div class="onv-demo-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
                <div class="onv-bg-soft-primary" style="padding: 24px; border-radius: 8px; border: 1px solid #e5e7eb; color: #374151; text-align: center;">
                    <p style="font-weight: 600; margin-bottom: 8px;">Soft Primary</p>
                    <code style="background: rgba(0,0,0,0.1); padding: 4px 8px; border-radius: 4px; font-size: 12px;">.onv-bg-soft-primary</code>
                </div>
                <div class="onv-bg-soft-secondary" style="padding: 24px; border-radius: 8px; border: 1px solid #e5e7eb; color: #374151; text-align: center;">
                    <p style="font-weight: 600; margin-bottom: 8px;">Soft Secondary</p>
                    <code style="background: rgba(0,0,0,0.1); padding: 4px 8px; border-radius: 4px; font-size: 12px;">.onv-bg-soft-secondary</code>
                </div>
                <div class="onv-bg-soft-success" style="padding: 24px; border-radius: 8px; border: 1px solid #e5e7eb; color: #374151; text-align: center;">
                    <p style="font-weight: 600; margin-bottom: 8px;">Soft Success</p>
                    <code style="background: rgba(0,0,0,0.1); padding: 4px 8px; border-radius: 4px; font-size: 12px;">.onv-bg-soft-success</code>
                </div>
                <div class="onv-bg-soft-warning" style="padding: 24px; border-radius: 8px; border: 1px solid #e5e7eb; color: #374151; text-align: center;">
                    <p style="font-weight: 600; margin-bottom: 8px;">Soft Warning</p>
                    <code style="background: rgba(0,0,0,0.1); padding: 4px 8px; border-radius: 4px; font-size: 12px;">.onv-bg-soft-warning</code>
                </div>
                <div class="onv-bg-soft-info" style="padding: 24px; border-radius: 8px; border: 1px solid #e5e7eb; color: #374151; text-align: center;">
                    <p style="font-weight: 600; margin-bottom: 8px;">Soft Info</p>
                    <code style="background: rgba(0,0,0,0.1); padding: 4px 8px; border-radius: 4px; font-size: 12px;">.onv-bg-soft-info</code>
                </div>
                <div class="onv-bg-soft-danger" style="padding: 24px; border-radius: 8px; border: 1px solid #e5e7eb; color: #374151; text-align: center;">
                    <p style="font-weight: 600; margin-bottom: 8px;">Soft Danger</p>
                    <code style="background: rgba(0,0,0,0.1); padding: 4px 8px; border-radius: 4px; font-size: 12px;">.onv-bg-soft-danger</code>
                </div>
                <div class="onv-bg-soft-dark" style="padding: 24px; border-radius: 8px; border: 1px solid #e5e7eb; color: #374151; text-align: center;">
                    <p style="font-weight: 600; margin-bottom: 8px;">Soft Dark</p>
                    <code style="background: rgba(0,0,0,0.1); padding: 4px 8px; border-radius: 4px; font-size: 12px;">.onv-bg-soft-dark</code>
                </div>
            </div>
        </section>

        <!-- Gradient Backgrounds -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Gradient Backgrounds</h2>
            <p class="onv-section-description">Background gradient yang memberikan efek visual yang menarik dan modern.</p>

            <div class="onv-demo-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
                <div class="onv-bg-gradient-primary" style="padding: 24px; border-radius: 8px; border: 1px solid #e5e7eb; color: white; text-align: center;">
                    <p style="font-weight: 600; margin-bottom: 8px;">Gradient Primary</p>
                    <code style="background: rgba(255,255,255,0.2); padding: 4px 8px; border-radius: 4px; font-size: 12px;">.onv-bg-gradient-primary</code>
                </div>
                <div class="onv-bg-gradient-secondary" style="padding: 24px; border-radius: 8px; border: 1px solid #e5e7eb; color: white; text-align: center;">
                    <p style="font-weight: 600; margin-bottom: 8px;">Gradient Secondary</p>
                    <code style="background: rgba(255,255,255,0.2); padding: 4px 8px; border-radius: 4px; font-size: 12px;">.onv-bg-gradient-secondary</code>
                </div>
                <div class="onv-bg-gradient-success" style="padding: 24px; border-radius: 8px; border: 1px solid #e5e7eb; color: white; text-align: center;">
                    <p style="font-weight: 600; margin-bottom: 8px;">Gradient Success</p>
                    <code style="background: rgba(255,255,255,0.2); padding: 4px 8px; border-radius: 4px; font-size: 12px;">.onv-bg-gradient-success</code>
                </div>
                <div class="onv-bg-gradient-warning" style="padding: 24px; border-radius: 8px; border: 1px solid #e5e7eb; color: white; text-align: center;">
                    <p style="font-weight: 600; margin-bottom: 8px;">Gradient Warning</p>
                    <code style="background: rgba(255,255,255,0.2); padding: 4px 8px; border-radius: 4px; font-size: 12px;">.onv-bg-gradient-warning</code>
                </div>
                <div class="onv-bg-gradient-info" style="padding: 24px; border-radius: 8px; border: 1px solid #e5e7eb; color: white; text-align: center;">
                    <p style="font-weight: 600; margin-bottom: 8px;">Gradient Info</p>
                    <code style="background: rgba(255,255,255,0.2); padding: 4px 8px; border-radius: 4px; font-size: 12px;">.onv-bg-gradient-info</code>
                </div>
                <div class="onv-bg-gradient-danger" style="padding: 24px; border-radius: 8px; border: 1px solid #e5e7eb; color: white; text-align: center;">
                    <p style="font-weight: 600; margin-bottom: 8px;">Gradient Danger</p>
                    <code style="background: rgba(255,255,255,0.2); padding: 4px 8px; border-radius: 4px; font-size: 12px;">.onv-bg-gradient-danger</code>
                </div>
                <div class="onv-bg-gradient-dark" style="padding: 24px; border-radius: 8px; border: 1px solid #e5e7eb; color: white; text-align: center;">
                    <p style="font-weight: 600; margin-bottom: 8px;">Gradient Dark</p>
                    <code style="background: rgba(255,255,255,0.2); padding: 4px 8px; border-radius: 4px; font-size: 12px;">.onv-bg-gradient-dark</code>
                </div>
                <div class="onv-bg-gradient-thema" style="padding: 24px; border-radius: 8px; border: 1px solid #e5e7eb; color: white; text-align: center;">
                    <p style="font-weight: 600; margin-bottom: 8px;">Gradient Thema</p>
                    <code style="background: rgba(255,255,255,0.2); padding: 4px 8px; border-radius: 4px; font-size: 12px;">.onv-bg-gradient-thema</code>
                </div>
            </div>
        </section>

        <!-- Gradient Directions -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Gradient Directions</h2>
            <p class="onv-section-description">Kontrol arah gradient untuk menciptakan efek visual yang bervariasi dari warna soft ke pekat.</p>

            <div class="onv-demo-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 16px;">
                <div class="onv-bg-gradient-to-r" style="padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb; color: white; text-align: center;">
                    <p style="font-weight: 600; margin-bottom: 8px;">To Right</p>
                    <code style="background: rgba(255,255,255,0.2); padding: 4px 8px; border-radius: 4px; font-size: 11px;">.onv-bg-gradient-to-r</code>
                </div>
                <div class="onv-bg-gradient-to-l" style="padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb; color: white; text-align: center;">
                    <p style="font-weight: 600; margin-bottom: 8px;">To Left</p>
                    <code style="background: rgba(255,255,255,0.2); padding: 4px 8px; border-radius: 4px; font-size: 11px;">.onv-bg-gradient-to-l</code>
                </div>
                <div class="onv-bg-gradient-to-t" style="padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb; color: white; text-align: center;">
                    <p style="font-weight: 600; margin-bottom: 8px;">To Top</p>
                    <code style="background: rgba(255,255,255,0.2); padding: 4px 8px; border-radius: 4px; font-size: 11px;">.onv-bg-gradient-to-t</code>
                </div>
                <div class="onv-bg-gradient-to-b" style="padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb; color: white; text-align: center;">
                    <p style="font-weight: 600; margin-bottom: 8px;">To Bottom</p>
                    <code style="background: rgba(255,255,255,0.2); padding: 4px 8px; border-radius: 4px; font-size: 11px;">.onv-bg-gradient-to-b</code>
                </div>
                <div class="onv-bg-gradient-to-tr" style="padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb; color: white; text-align: center;">
                    <p style="font-weight: 600; margin-bottom: 8px;">To Top Right</p>
                    <code style="background: rgba(255,255,255,0.2); padding: 4px 8px; border-radius: 4px; font-size: 11px;">.onv-bg-gradient-to-tr</code>
                </div>
                <div class="onv-bg-gradient-to-tl" style="padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb; color: white; text-align: center;">
                    <p style="font-weight: 600; margin-bottom: 8px;">To Top Left</p>
                    <code style="background: rgba(255,255,255,0.2); padding: 4px 8px; border-radius: 4px; font-size: 11px;">.onv-bg-gradient-to-tl</code>
                </div>
                <div class="onv-bg-gradient-to-br" style="padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb; color: white; text-align: center;">
                    <p style="font-weight: 600; margin-bottom: 8px;">To Bottom Right</p>
                    <code style="background: rgba(255,255,255,0.2); padding: 4px 8px; border-radius: 4px; font-size: 11px;">.onv-bg-gradient-to-br</code>
                </div>
                <div class="onv-bg-gradient-to-bl" style="padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb; color: white; text-align: center;">
                    <p style="font-weight: 600; margin-bottom: 8px;">To Bottom Left</p>
                    <code style="background: rgba(255,255,255,0.2); padding: 4px 8px; border-radius: 4px; font-size: 11px;">.onv-bg-gradient-to-bl</code>
                </div>
            </div>
        </section>

        <!-- Radial Gradients -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Radial Gradients</h2>
            <p class="onv-section-description">Gradient radial yang memberikan efek melingkar untuk kebutuhan desain khusus.</p>

            <div class="onv-demo-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
                <div class="onv-bg-radial-primary" style="padding: 24px; border-radius: 8px; border: 1px solid #e5e7eb; color: white; text-align: center;">
                    <p style="font-weight: 600; margin-bottom: 8px;">Radial Primary</p>
                    <code style="background: rgba(255,255,255,0.2); padding: 4px 8px; border-radius: 4px; font-size: 12px;">.onv-bg-radial-primary</code>
                </div>
                <div class="onv-bg-radial-secondary" style="padding: 24px; border-radius: 8px; border: 1px solid #e5e7eb; color: white; text-align: center;">
                    <p style="font-weight: 600; margin-bottom: 8px;">Radial Secondary</p>
                    <code style="background: rgba(255,255,255,0.2); padding: 4px 8px; border-radius: 4px; font-size: 12px;">.onv-bg-radial-secondary</code>
                </div>
                <div class="onv-bg-radial-success" style="padding: 24px; border-radius: 8px; border: 1px solid #e5e7eb; color: white; text-align: center;">
                    <p style="font-weight: 600; margin-bottom: 8px;">Radial Success</p>
                    <code style="background: rgba(255,255,255,0.2); padding: 4px 8px; border-radius: 4px; font-size: 12px;">.onv-bg-radial-success</code>
                </div>
                <div class="onv-bg-radial-warning" style="padding: 24px; border-radius: 8px; border: 1px solid #e5e7eb; color: white; text-align: center;">
                    <p style="font-weight: 600; margin-bottom: 8px;">Radial Warning</p>
                    <code style="background: rgba(255,255,255,0.2); padding: 4px 8px; border-radius: 4px; font-size: 12px;">.onv-bg-radial-warning</code>
                </div>
                <div class="onv-bg-radial-info" style="padding: 24px; border-radius: 8px; border: 1px solid #e5e7eb; color: white; text-align: center;">
                    <p style="font-weight: 600; margin-bottom: 8px;">Radial Info</p>
                    <code style="background: rgba(255,255,255,0.2); padding: 4px 8px; border-radius: 4px; font-size: 12px;">.onv-bg-radial-info</code>
                </div>
                <div class="onv-bg-radial-danger" style="padding: 24px; border-radius: 8px; border: 1px solid #e5e7eb; color: white; text-align: center;">
                    <p style="font-weight: 600; margin-bottom: 8px;">Radial Danger</p>
                    <code style="background: rgba(255,255,255,0.2); padding: 4px 8px; border-radius: 4px; font-size: 12px;">.onv-bg-radial-danger</code>
                </div>
            </div>
        </section>

        <!-- Background Opacity -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Background Opacity</h2>
            <p class="onv-section-description">Kontrol transparansi background untuk efek overlay yang subtle.</p>

            <div class="onv-demo-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 12px;">
                <div class="onv-bg-opacity-0" style="padding: 16px; border-radius: 6px; border: 2px dashed #e5e7eb; color: #374151; text-align: center;">
                    <p style="font-weight: 600; margin-bottom: 6px; font-size: 14px;">0%</p>
                    <code style="font-size: 10px;">.onv-bg-opacity-0</code>
                </div>
                <div class="onv-bg-opacity-10" style="padding: 16px; border-radius: 6px; border: 1px solid #e5e7eb; color: #374151; text-align: center;">
                    <p style="font-weight: 600; margin-bottom: 6px; font-size: 14px;">10%</p>
                    <code style="font-size: 10px;">.onv-bg-opacity-10</code>
                </div>
                <div class="onv-bg-opacity-20" style="padding: 16px; border-radius: 6px; border: 1px solid #e5e7eb; color: #374151; text-align: center;">
                    <p style="font-weight: 600; margin-bottom: 6px; font-size: 14px;">20%</p>
                    <code style="font-size: 10px;">.onv-bg-opacity-20</code>
                </div>
                <div class="onv-bg-opacity-30" style="padding: 16px; border-radius: 6px; border: 1px solid #e5e7eb; color: #374151; text-align: center;">
                    <p style="font-weight: 600; margin-bottom: 6px; font-size: 14px;">30%</p>
                    <code style="font-size: 10px;">.onv-bg-opacity-30</code>
                </div>
                <div class="onv-bg-opacity-40" style="padding: 16px; border-radius: 6px; border: 1px solid #e5e7eb; color: #374151; text-align: center;">
                    <p style="font-weight: 600; margin-bottom: 6px; font-size: 14px;">40%</p>
                    <code style="font-size: 10px;">.onv-bg-opacity-40</code>
                </div>
                <div class="onv-bg-opacity-50" style="padding: 16px; border-radius: 6px; border: 1px solid #e5e7eb; color: #374151; text-align: center;">
                    <p style="font-weight: 600; margin-bottom: 6px; font-size: 14px;">50%</p>
                    <code style="font-size: 10px;">.onv-bg-opacity-50</code>
                </div>
                <div class="onv-bg-opacity-60" style="padding: 16px; border-radius: 6px; border: 1px solid #e5e7eb; color: white; text-align: center;">
                    <p style="font-weight: 600; margin-bottom: 6px; font-size: 14px;">60%</p>
                    <code style="background: rgba(255,255,255,0.2); padding: 2px 4px; border-radius: 2px; font-size: 10px;">.onv-bg-opacity-60</code>
                </div>
                <div class="onv-bg-opacity-70" style="padding: 16px; border-radius: 6px; border: 1px solid #e5e7eb; color: white; text-align: center;">
                    <p style="font-weight: 600; margin-bottom: 6px; font-size: 14px;">70%</p>
                    <code style="background: rgba(255,255,255,0.2); padding: 2px 4px; border-radius: 2px; font-size: 10px;">.onv-bg-opacity-70</code>
                </div>
                <div class="onv-bg-opacity-80" style="padding: 16px; border-radius: 6px; border: 1px solid #e5e7eb; color: white; text-align: center;">
                    <p style="font-weight: 600; margin-bottom: 6px; font-size: 14px;">80%</p>
                    <code style="background: rgba(255,255,255,0.2); padding: 2px 4px; border-radius: 2px; font-size: 10px;">.onv-bg-opacity-80</code>
                </div>
                <div class="onv-bg-opacity-90" style="padding: 16px; border-radius: 6px; border: 1px solid #e5e7eb; color: white; text-align: center;">
                    <p style="font-weight: 600; margin-bottom: 6px; font-size: 14px;">90%</p>
                    <code style="background: rgba(255,255,255,0.2); padding: 2px 4px; border-radius: 2px; font-size: 10px;">.onv-bg-opacity-90</code>
                </div>
                <div class="onv-bg-opacity-100" style="padding: 16px; border-radius: 6px; border: 1px solid #e5e7eb; color: white; text-align: center;">
                    <p style="font-weight: 600; margin-bottom: 6px; font-size: 14px;">100%</p>
                    <code style="background: rgba(255,255,255,0.2); padding: 2px 4px; border-radius: 2px; font-size: 10px;">.onv-bg-opacity-100</code>
                </div>
            </div>
        </section>

        <!-- Background Properties -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Background Properties</h2>
            <p class="onv-section-description">Utilitas untuk mengontrol properti background image seperti size, position, dan repeat.</p>

            <div style="display: grid; gap: 24px;">
                <!-- Background Size -->
                <div>
                    <h4 style="margin-bottom: 12px; color: #374151; font-weight: 600;">Background Size</h4>
                    <div style="display: flex; gap: 12px; flex-wrap: wrap;">
                        <div style="padding: 12px 16px; background: white; border-radius: 6px; border: 1px solid #e5e7eb; text-align: center;">
                            <p style="font-weight: 600; margin-bottom: 6px; font-size: 14px;">Auto</p>
                            <code style="font-size: 12px;">.onv-bg-auto</code>
                        </div>
                        <div style="padding: 12px 16px; background: white; border-radius: 6px; border: 1px solid #e5e7eb; text-align: center;">
                            <p style="font-weight: 600; margin-bottom: 6px; font-size: 14px;">Cover</p>
                            <code style="font-size: 12px;">.onv-bg-cover</code>
                        </div>
                        <div style="padding: 12px 16px; background: white; border-radius: 6px; border: 1px solid #e5e7eb; text-align: center;">
                            <p style="font-weight: 600; margin-bottom: 6px; font-size: 14px;">Contain</p>
                            <code style="font-size: 12px;">.onv-bg-contain</code>
                        </div>
                        <div style="padding: 12px 16px; background: white; border-radius: 6px; border: 1px solid #e5e7eb; text-align: center;">
                            <p style="font-weight: 600; margin-bottom: 6px; font-size: 14px;">Full</p>
                            <code style="font-size: 12px;">.onv-bg-full</code>
                        </div>
                    </div>
                </div>

                <!-- Background Position -->
                <div>
                    <h4 style="margin-bottom: 12px; color: #374151; font-weight: 600;">Background Position</h4>
                    <div style="display: flex; gap: 12px; flex-wrap: wrap;">
                        <div style="padding: 12px 16px; background: white; border-radius: 6px; border: 1px solid #e5e7eb; text-align: center;">
                            <p style="font-weight: 600; margin-bottom: 6px; font-size: 14px;">Center</p>
                            <code style="font-size: 12px;">.onv-bg-center</code>
                        </div>
                        <div style="padding: 12px 16px; background: white; border-radius: 6px; border: 1px solid #e5e7eb; text-align: center;">
                            <p style="font-weight: 600; margin-bottom: 6px; font-size: 14px;">Top</p>
                            <code style="font-size: 12px;">.onv-bg-top</code>
                        </div>
                        <div style="padding: 12px 16px; background: white; border-radius: 6px; border: 1px solid #e5e7eb; text-align: center;">
                            <p style="font-weight: 600; margin-bottom: 6px; font-size: 14px;">Bottom</p>
                            <code style="font-size: 12px;">.onv-bg-bottom</code>
                        </div>
                        <div style="padding: 12px 16px; background: white; border-radius: 6px; border: 1px solid #e5e7eb; text-align: center;">
                            <p style="font-weight: 600; margin-bottom: 6px; font-size: 14px;">Left</p>
                            <code style="font-size: 12px;">.onv-bg-left</code>
                        </div>
                        <div style="padding: 12px 16px; background: white; border-radius: 6px; border: 1px solid #e5e7eb; text-align: center;">
                            <p style="font-weight: 600; margin-bottom: 6px; font-size: 14px;">Right</p>
                            <code style="font-size: 12px;">.onv-bg-right</code>
                        </div>
                    </div>
                </div>

                <!-- Background Repeat -->
                <div>
                    <h4 style="margin-bottom: 12px; color: #374151; font-weight: 600;">Background Repeat</h4>
                    <div style="display: flex; gap: 12px; flex-wrap: wrap;">
                        <div style="padding: 12px 16px; background: white; border-radius: 6px; border: 1px solid #e5e7eb; text-align: center;">
                            <p style="font-weight: 600; margin-bottom: 6px; font-size: 14px;">Repeat</p>
                            <code style="font-size: 12px;">.onv-bg-repeat</code>
                        </div>
                        <div style="padding: 12px 16px; background: white; border-radius: 6px; border: 1px solid #e5e7eb; text-align: center;">
                            <p style="font-weight: 600; margin-bottom: 6px; font-size: 14px;">No Repeat</p>
                            <code style="font-size: 12px;">.onv-bg-no-repeat</code>
                        </div>
                        <div style="padding: 12px 16px; background: white; border-radius: 6px; border: 1px solid #e5e7eb; text-align: center;">
                            <p style="font-weight: 600; margin-bottom: 6px; font-size: 14px;">Repeat X</p>
                            <code style="font-size: 12px;">.onv-bg-repeat-x</code>
                        </div>
                        <div style="padding: 12px 16px; background: white; border-radius: 6px; border: 1px solid #e5e7eb; text-align: center;">
                            <p style="font-weight: 600; margin-bottom: 6px; font-size: 14px;">Repeat Y</p>
                            <code style="font-size: 12px;">.onv-bg-repeat-y</code>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Hover Effects -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Hover Effects</h2>
            <p class="onv-section-description">Background yang berubah saat hover untuk interaksi yang lebih menarik.</p>

            <div class="onv-demo-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
                <div class="onv-bg-primary-hover" style="padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb; color: #374151; text-align: center; transition: all 0.3s ease; cursor: pointer;">
                    <p style="font-weight: 600; margin-bottom: 8px;">Hover Primary</p>
                    <code style="background: rgba(0,0,0,0.1); padding: 4px 8px; border-radius: 4px; font-size: 12px;">.onv-bg-primary-hover</code>
                    <p style="font-size: 12px; color: #6b7280; margin-top: 8px;">Hover me!</p>
                </div>
                <div class="onv-bg-success-hover" style="padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb; color: #374151; text-align: center; transition: all 0.3s ease; cursor: pointer;">
                    <p style="font-weight: 600; margin-bottom: 8px;">Hover Success</p>
                    <code style="background: rgba(0,0,0,0.1); padding: 4px 8px; border-radius: 4px; font-size: 12px;">.onv-bg-success-hover</code>
                    <p style="font-size: 12px; color: #6b7280; margin-top: 8px;">Hover me!</p>
                </div>
                <div class="onv-bg-danger-hover" style="padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb; color: #374151; text-align: center; transition: all 0.3s ease; cursor: pointer;">
                    <p style="font-weight: 600; margin-bottom: 8px;">Hover Danger</p>
                    <code style="background: rgba(0,0,0,0.1); padding: 4px 8px; border-radius: 4px; font-size: 12px;">.onv-bg-danger-hover</code>
                    <p style="font-size: 12px; color: #6b7280; margin-top: 8px;">Hover me!</p>
                </div>
                <div class="onv-bg-soft-primary-hover" style="padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb; color: #374151; text-align: center; transition: all 0.3s ease; cursor: pointer;">
                    <p style="font-weight: 600; margin-bottom: 8px;">Hover Soft Primary</p>
                    <code style="background: rgba(0,0,0,0.1); padding: 4px 8px; border-radius: 4px; font-size: 12px;">.onv-bg-soft-primary-hover</code>
                    <p style="font-size: 12px; color: #6b7280; margin-top: 8px;">Hover me!</p>
                </div>
            </div>
        </section>

        <!-- Usage Examples -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Usage Examples</h2>
            <p class="onv-section-description">Contoh penggunaan background dalam konteks aplikasi nyata.</p>

            <div class="onv-demo-grid" style="display: grid; gap: 24px;">
                <!-- Example 1: Hero Section -->
                <div class="onv-bg-gradient-primary" style="padding: 40px; border-radius: 12px; color: white; text-align: center;">
                    <h3 style="font-size: 24px; font-weight: 700; margin-bottom: 16px;">Hero Section</h3>
                    <p style="font-size: 16px; opacity: 0.9; margin-bottom: 24px;">Background gradient untuk hero section yang menarik perhatian</p>
                    <button class="onv-bg-light" style="padding: 12px 24px; border-radius: 6px; border: none; color: #374151; font-weight: 600; cursor: pointer;">Get Started</button>
                </div>

                <!-- Example 2: Card with Soft Background -->
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 16px;">
                    <div class="onv-bg-soft-primary" style="padding: 24px; border-radius: 8px; color: #374151;">
                        <h4 style="font-weight: 600; margin-bottom: 12px;">Feature Card</h4>
                        <p style="line-height: 1.6; color: #6b7280;">Menggunakan soft background untuk highlight card tanpa terlalu mencolok.</p>
                    </div>
                    <div class="onv-bg-soft-success" style="padding: 24px; border-radius: 8px; color: #374151;">
                        <h4 style="font-weight: 600; margin-bottom: 12px;">Success Card</h4>
                        <p style="line-height: 1.6; color: #6b7280;">Background soft success untuk menunjukkan status positif.</p>
                    </div>
                    <div class="onv-bg-soft-warning" style="padding: 24px; border-radius: 8px; color: #374151;">
                        <h4 style="font-weight: 600; margin-bottom: 12px;">Warning Card</h4>
                        <p style="line-height: 1.6; color: #6b7280;">Background soft warning untuk peringatan yang tidak terlalu mengganggu.</p>
                    </div>
                </div>

                <!-- Example 3: Opacity Overlay -->
                <div style="position: relative; background: url('https://images.unsplash.com/photo-1742853288141-b95880a1c5ea?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') repeat; padding: 40px; border-radius: 12px;">
                    <div class="onv-bg-opacity-80" style="padding: 32px; border-radius: 8px; color: white; text-align: center;">
                        <h3 style="font-size: 20px; font-weight: 600; margin-bottom: 12px;">Overlay with Opacity</h3>
                        <p style="opacity: 0.9;">Background dengan opacity untuk overlay yang tidak menutupi sepenuhnya konten di belakangnya.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Usage Guidelines -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Usage Guidelines</h2>
            <p class="onv-section-description">Panduan penggunaan utilitas background untuk hasil terbaik.</p>

            <h3 class="onv-subsection-title">Kapan Menggunakan Background Tertentu</h3>
            <ul style="margin: 16px 0; padding-left: 24px; color: #4b5563; line-height: 1.6;">
                <li><strong>Basic Colors:</strong> Untuk elemen yang membutuhkan penekanan kuat</li>
                <li><strong>Soft Colors:</strong> Untuk highlight yang subtle dan tidak mengganggu</li>
                <li><strong>Gradients:</strong> Untuk hero section, header, atau elemen dekoratif</li>
                <li><strong>Radial Gradients:</strong> Untuk efek spotlight atau elemen circular</li>
                <li><strong>Opacity:</strong> Untuk overlay atau elemen yang semi-transparan</li>
                <li><strong>Hover Effects:</strong> Untuk interaksi yang memberikan feedback visual</li>
            </ul>

            <h3 class="onv-subsection-title">Best Practices</h3>
            <ul style="margin: 16px 0; padding-left: 24px; color: #4b5563; line-height: 1.6;">
                <li>Pastikan kontras yang cukup antara background dan text</li>
                <li>Gunakan gradient dengan hati-hati agar tidak mengganggu readability</li>
                <li>Pertimbangkan performance saat menggunakan background image</li>
                <li>Gunakan hover effects untuk meningkatkan user experience</li>
                <li>Kombinasikan dengan shadow untuk depth yang lebih baik</li>
            </ul>

            <h3 class="onv-subsection-title">Accessibility</h3>
            <ul style="margin: 16px 0; padding-left: 24px; color: #4b5563; line-height: 1.6;">
                <li>Pastikan rasio kontras minimal 4.5:1 untuk teks normal</li>
                <li>Jangan hanya mengandalkan warna untuk menyampaikan informasi</li>
                <li>Test dengan berbagai kondisi pencahayaan</li>
                <li>Gunakan fallback color untuk browser yang tidak mendukung gradient</li>
            </ul>
        </section>

        <!-- CSS Classes Reference -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">CSS Classes Reference</h2>
            <p class="onv-section-description">Daftar lengkap class CSS yang tersedia untuk utilitas background.</p>

            <div style="overflow-x: auto; margin: 24px 0;">
                <table style="width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);">
                    <thead>
                        <tr style="background: #f8fafc;">
                            <th style="padding: 12px 16px; text-align: left; font-weight: 600; color: #374151; border-bottom: 1px solid #e5e7eb;">Category</th>
                            <th style="padding: 12px 16px; text-align: left; font-weight: 600; color: #374151; border-bottom: 1px solid #e5e7eb;">Class Pattern</th>
                            <th style="padding: 12px 16px; text-align: left; font-weight: 600; color: #374151; border-bottom: 1px solid #e5e7eb;">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Basic Colors</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-bg-{color}</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">thema, primary, secondary, success, warning, info, danger, dark, light</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Soft Colors</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-bg-soft-{color}</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">primary, secondary, success, warning, info, danger, dark</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Gradients</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-bg-gradient-{color}</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">primary, secondary, success, warning, info, danger, dark, thema</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Gradient Directions</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-bg-gradient-to-{direction}</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">r, l, t, b, tr, tl, br, bl</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Radial Gradients</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-bg-radial-{color}</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">primary, secondary, success, warning, info, danger</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Hover Effects</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-bg-{color}-hover</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">All basic and soft colors with -hover suffix</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Opacity</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-bg-opacity-{number}</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Background Size</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-bg-{size}</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">auto, cover, contain, full</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Background Position</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-bg-{position}</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">center, top, bottom, left, right, top-left, top-right, bottom-left, bottom-right</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px;">Background Repeat</td>
                            <td style="padding: 12px 16px;"><code>.onv-bg-{repeat}</code></td>
                            <td style="padding: 12px 16px;">repeat, no-repeat, repeat-x, repeat-y, repeat-round, repeat-space</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </div>
</template>