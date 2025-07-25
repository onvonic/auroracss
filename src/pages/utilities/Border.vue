<template>
    <div>
        <div class="onv-breadcrumb">UI Utilities</div>
        <h1 class="onv-page-title">Border</h1>
        <p class="onv-page-subtitle">Utilitas border untuk mengontrol border radius, width, style, color, dan outline dengan berbagai pilihan yang lengkap dan fleksibel.</p>

        <!-- Border Width -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Border Width</h2>
            <p class="onv-section-description">Mengatur ketebalan border pada semua sisi atau sisi tertentu dengan berbagai ukuran.</p>

            <div class="onv-demo-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 16px;">
                <div style="padding: 20px; border-radius: 8px; border: 0px solid #007bff; background: #f8f9fa; text-align: center;">
                    <div style="width: 40px; height: 40px; border: 0px solid #007bff; background: white; margin: 0 auto 8px; border-radius: 4px;"></div>
                    <p style="font-weight: 600; margin-bottom: 4px; font-size: 12px;">0px</p>
                    <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px; font-size: 10px;">.onv-border-0</code>
                </div>
                <div style="padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb; background: #f8f9fa; text-align: center;">
                    <div style="width: 40px; height: 40px; border: 1px solid #007bff; background: white; margin: 0 auto 8px; border-radius: 4px;"></div>
                    <p style="font-weight: 600; margin-bottom: 4px; font-size: 12px;">1px</p>
                    <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px; font-size: 10px;">.onv-border</code>
                </div>
                <div style="padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb; background: #f8f9fa; text-align: center;">
                    <div style="width: 40px; height: 40px; border: 2px solid #007bff; background: white; margin: 0 auto 8px; border-radius: 4px;"></div>
                    <p style="font-weight: 600; margin-bottom: 4px; font-size: 12px;">2px</p>
                    <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px; font-size: 10px;">.onv-border-2</code>
                </div>
                <div style="padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb; background: #f8f9fa; text-align: center;">
                    <div style="width: 40px; height: 40px; border: 4px solid #007bff; background: white; margin: 0 auto 8px; border-radius: 4px;"></div>
                    <p style="font-weight: 600; margin-bottom: 4px; font-size: 12px;">4px</p>
                    <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px; font-size: 10px;">.onv-border-4</code>
                </div>
                <div style="padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb; background: #f8f9fa; text-align: center;">
                    <div style="width: 40px; height: 40px; border: 8px solid #007bff; background: white; margin: 0 auto 8px; border-radius: 4px;"></div>
                    <p style="font-weight: 600; margin-bottom: 4px; font-size: 12px;">8px</p>
                    <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px; font-size: 10px;">.onv-border-8</code>
                </div>
            </div>

            <div style="margin-top: 24px;">
                <h4 style="margin-bottom: 16px; color: #374151; font-weight: 600;">Individual Sides</h4>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 16px;">
                    <div style="padding: 16px; background: white; border-radius: 6px; border: 1px solid #e5e7eb;">
                        <div style="width: 50px; height: 50px; border-top: 3px solid #007bff; background: #f8f9fa; margin: 0 auto 12px; border-radius: 4px;"></div>
                        <p style="font-weight: 600; margin-bottom: 6px; font-size: 14px; text-align: center;">Top</p>
                        <code style="background: rgba(0,0,0,0.1); padding: 4px 8px; border-radius: 4px; font-size: 12px; display: block; text-align: center;">.onv-border-t-{size}</code>
                    </div>
                    <div style="padding: 16px; background: white; border-radius: 6px; border: 1px solid #e5e7eb;">
                        <div style="width: 50px; height: 50px; border-bottom: 3px solid #007bff; background: #f8f9fa; margin: 0 auto 12px; border-radius: 4px;"></div>
                        <p style="font-weight: 600; margin-bottom: 6px; font-size: 14px; text-align: center;">Bottom</p>
                        <code style="background: rgba(0,0,0,0.1); padding: 4px 8px; border-radius: 4px; font-size: 12px; display: block; text-align: center;">.onv-border-b-{size}</code>
                    </div>
                    <div style="padding: 16px; background: white; border-radius: 6px; border: 1px solid #e5e7eb;">
                        <div style="width: 50px; height: 50px; border-left: 3px solid #007bff; background: #f8f9fa; margin: 0 auto 12px; border-radius: 4px;"></div>
                        <p style="font-weight: 600; margin-bottom: 6px; font-size: 14px; text-align: center;">Left</p>
                        <code style="background: rgba(0,0,0,0.1); padding: 4px 8px; border-radius: 4px; font-size: 12px; display: block; text-align: center;">.onv-border-l-{size}</code>
                    </div>
                    <div style="padding: 16px; background: white; border-radius: 6px; border: 1px solid #e5e7eb;">
                        <div style="width: 50px; height: 50px; border-right: 3px solid #007bff; background: #f8f9fa; margin: 0 auto 12px; border-radius: 4px;"></div>
                        <p style="font-weight: 600; margin-bottom: 6px; font-size: 14px; text-align: center;">Right</p>
                        <code style="background: rgba(0,0,0,0.1); padding: 4px 8px; border-radius: 4px; font-size: 12px; display: block; text-align: center;">.onv-border-r-{size}</code>
                    </div>
                    <div style="padding: 16px; background: white; border-radius: 6px; border: 1px solid #e5e7eb;">
                        <div style="width: 50px; height: 50px; border-left: 3px solid #007bff; border-right: 3px solid #007bff; background: #f8f9fa; margin: 0 auto 12px; border-radius: 4px;"></div>
                        <p style="font-weight: 600; margin-bottom: 6px; font-size: 14px; text-align: center;">X Axis</p>
                        <code style="background: rgba(0,0,0,0.1); padding: 4px 8px; border-radius: 4px; font-size: 12px; display: block; text-align: center;">.onv-border-x-{size}</code>
                    </div>
                    <div style="padding: 16px; background: white; border-radius: 6px; border: 1px solid #e5e7eb;">
                        <div style="width: 50px; height: 50px; border-top: 3px solid #007bff; border-bottom: 3px solid #007bff; background: #f8f9fa; margin: 0 auto 12px; border-radius: 4px;"></div>
                        <p style="font-weight: 600; margin-bottom: 6px; font-size: 14px; text-align: center;">Y Axis</p>
                        <code style="background: rgba(0,0,0,0.1); padding: 4px 8px; border-radius: 4px; font-size: 12px; display: block; text-align: center;">.onv-border-y-{size}</code>
                    </div>
                </div>
            </div>
        </section>

        <!-- Border Radius -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Border Radius</h2>
            <p class="onv-section-description">Mengatur corner radius untuk membuat sudut melengkung dengan berbagai ukuran dari subtle hingga fully rounded.</p>
            <div class="onv-demo-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 16px;">
                <div style="padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb; background: #f8f9fa; text-align: center;">
                    <div style="width: 50px; height: 50px; border: 2px solid #007bff; background: #e7f3ff; margin: 0 auto 8px; border-radius: 0;"></div>
                    <p style="font-weight: 600; margin-bottom: 4px; font-size: 12px;">None</p>
                    <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px; font-size: 10px;">.onv-rounded-none</code>
                </div>
                <div style="padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb; background: #f8f9fa; text-align: center;">
                    <div style="width: 50px; height: 50px; border: 2px solid #007bff; background: #e7f3ff; margin: 0 auto 8px; border-radius: 2px;"></div>
                    <p style="font-weight: 600; margin-bottom: 4px; font-size: 12px;">Small</p>
                    <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px; font-size: 10px;">.onv-rounded-sm</code>
                </div>
                <div style="padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb; background: #f8f9fa; text-align: center;">
                    <div style="width: 50px; height: 50px; border: 2px solid #007bff; background: #e7f3ff; margin: 0 auto 8px; border-radius: 4px;"></div>
                    <p style="font-weight: 600; margin-bottom: 4px; font-size: 12px;">Default</p>
                    <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px; font-size: 10px;">.onv-rounded</code>
                </div>
                <div style="padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb; background: #f8f9fa; text-align: center;">
                    <div style="width: 50px; height: 50px; border: 2px solid #007bff; background: #e7f3ff; margin: 0 auto 8px; border-radius: 6px;"></div>
                    <p style="font-weight: 600; margin-bottom: 4px; font-size: 12px;">Medium</p>
                    <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px; font-size: 10px;">.onv-rounded-md</code>
                </div>
                <div style="padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb; background: #f8f9fa; text-align: center;">
                    <div style="width: 50px; height: 50px; border: 2px solid #007bff; background: #e7f3ff; margin: 0 auto 8px; border-radius: 8px;"></div>
                    <p style="font-weight: 600; margin-bottom: 4px; font-size: 12px;">Large</p>
                    <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px; font-size: 10px;">.onv-rounded-lg</code>
                </div>
                <div style="padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb; background: #f8f9fa; text-align: center;">
                    <div style="width: 50px; height: 50px; border: 2px solid #007bff; background: #e7f3ff; margin: 0 auto 8px; border-radius: 12px;"></div>
                    <p style="font-weight: 600; margin-bottom: 4px; font-size: 12px;">XL</p>
                    <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px; font-size: 10px;">.onv-rounded-xl</code>
                </div>
                <div style="padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb; background: #f8f9fa; text-align: center;">
                    <div style="width: 50px; height: 50px; border: 2px solid #007bff; background: #e7f3ff; margin: 0 auto 8px; border-radius: 16px;"></div>
                    <p style="font-weight: 600; margin-bottom: 4px; font-size: 12px;">2XL</p>
                    <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px; font-size: 10px;">.onv-rounded-2xl</code>
                </div>
                <div style="padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb; background: #f8f9fa; text-align: center;">
                    <div style="width: 50px; height: 50px; border: 2px solid #007bff; background: #e7f3ff; margin: 0 auto 8px; border-radius: 24px;"></div>
                    <p style="font-weight: 600; margin-bottom: 4px; font-size: 12px;">3XL</p>
                    <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px; font-size: 10px;">.onv-rounded-3xl</code>
                </div>
                <div style="padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb; background: #f8f9fa; text-align: center;">
                    <div style="width: 50px; height: 50px; border: 2px solid #007bff; background: #e7f3ff; margin: 0 auto 8px; border-radius: 50%;"></div>
                    <p style="font-weight: 600; margin-bottom: 4px; font-size: 12px;">Full</p>
                    <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px; font-size: 10px;">.onv-rounded-full</code>
                </div>
            </div>
        </section>

        <!-- Border Style -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Border Style</h2>
            <p class="onv-section-description">Mengatur gaya tampilan border dengan berbagai style yang tersedia untuk kebutuhan desain yang beragam.</p>

            <div class="onv-demo-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 16px;">
                <div style="padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb; background: #f8f9fa; text-align: center;">
                    <div style="width: 60px; height: 60px; border: 3px solid #007bff; background: white; margin: 0 auto 8px; border-radius: 4px;"></div>
                    <p style="font-weight: 600; margin-bottom: 4px; font-size: 12px;">Solid</p>
                    <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px; font-size: 10px;">.onv-border-solid</code>
                </div>
                <div style="padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb; background: #f8f9fa; text-align: center;">
                    <div style="width: 60px; height: 60px; border: 3px dashed #007bff; background: white; margin: 0 auto 8px; border-radius: 4px;"></div>
                    <p style="font-weight: 600; margin-bottom: 4px; font-size: 12px;">Dashed</p>
                    <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px; font-size: 10px;">.onv-border-dashed</code>
                </div>
                <div style="padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb; background: #f8f9fa; text-align: center;">
                    <div style="width: 60px; height: 60px; border: 3px dotted #007bff; background: white; margin: 0 auto 8px; border-radius: 4px;"></div>
                    <p style="font-weight: 600; margin-bottom: 4px; font-size: 12px;">Dotted</p>
                    <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px; font-size: 10px;">.onv-border-dotted</code>
                </div>
                <div style="padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb; background: #f8f9fa; text-align: center;">
                    <div style="width: 60px; height: 60px; border: 3px double #007bff; background: white; margin: 0 auto 8px; border-radius: 4px;"></div>
                    <p style="font-weight: 600; margin-bottom: 4px; font-size: 12px;">Double</p>
                    <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px; font-size: 10px;">.onv-border-double</code>
                </div>
            </div>
        </section>

        <!-- Border Color -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Border Color</h2>
            <p class="onv-section-description">Mengatur warna border menggunakan variabel CSS custom untuk konsistensi tema dan mendukung dark mode.</p>

            <div class="onv-demo-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 16px;">
                <div style="padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb; background: #f8f9fa; text-align: center;">
                    <div style="width: 50px; height: 50px; border: 3px solid #007bff; background: white; margin: 0 auto 8px; border-radius: 4px;"></div>
                    <p style="font-weight: 600; margin-bottom: 4px; font-size: 12px;">Primary</p>
                    <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px; font-size: 10px;">.onv-border-primary</code>
                </div>
                <div style="padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb; background: #f8f9fa; text-align: center;">
                    <div style="width: 50px; height: 50px; border: 3px solid #28a745; background: white; margin: 0 auto 8px; border-radius: 4px;"></div>
                    <p style="font-weight: 600; margin-bottom: 4px; font-size: 12px;">Success</p>
                    <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px; font-size: 10px;">.onv-border-success</code>
                </div>
                <div style="padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb; background: #f8f9fa; text-align: center;">
                    <div style="width: 50px; height: 50px; border: 3px solid #dc3545; background: white; margin: 0 auto 8px; border-radius: 4px;"></div>
                    <p style="font-weight: 600; margin-bottom: 4px; font-size: 12px;">Danger</p>
                    <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px; font-size: 10px;">.onv-border-danger</code>
                </div>
                <div style="padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb; background: #f8f9fa; text-align: center;">
                    <div style="width: 50px; height: 50px; border: 3px solid #ffc107; background: white; margin: 0 auto 8px; border-radius: 4px;"></div>
                    <p style="font-weight: 600; margin-bottom: 4px; font-size: 12px;">Warning</p>
                    <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px; font-size: 10px;">.onv-border-warning</code>
                </div>
            </div>
        </section>

        <!-- Usage Examples -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Usage Examples</h2>
            <p class="onv-section-description">Contoh penggunaan border dalam konteks aplikasi nyata dengan berbagai kombinasi properti.</p>

            <div style="display: grid; gap: 24px;">
                <!-- Example 1: Card with Border -->
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 16px;">
                    <div style="padding: 24px; border: 1px solid #e5e7eb; border-radius: 8px; background: white;">
                        <h4 style="font-weight: 600; margin-bottom: 12px; color: #374151;">Simple Card</h4>
                        <p style="line-height: 1.6; color: #6b7280; margin-bottom: 16px;">Card dengan border subtle dan corner radius untuk tampilan yang clean.</p>
                        <code style="background: #f3f4f6; padding: 4px 8px; border-radius: 4px; font-size: 12px;">.onv-border .onv-border-light .onv-rounded-lg</code>
                    </div>
                    <div style="padding: 24px; border: 2px solid #007bff; border-radius: 12px; background: white;">
                        <h4 style="font-weight: 600; margin-bottom: 12px; color: #374151;">Highlighted Card</h4>
                        <p style="line-height: 1.6; color: #6b7280; margin-bottom: 16px;">Card dengan border primary yang lebih tebal untuk emphasis.</p>
                        <code style="background: #f3f4f6; padding: 4px 8px; border-radius: 4px; font-size: 12px;">.onv-border-2 .onv-border-primary .onv-rounded-xl</code>
                    </div>
                    <div style="padding: 24px; border: 2px dashed #28a745; border-radius: 8px; background: rgba(40, 167, 69, 0.05);">
                        <h4 style="font-weight: 600; margin-bottom: 12px; color: #374151;">Success State</h4>
                        <p style="line-height: 1.6; color: #6b7280; margin-bottom: 16px;">Card dengan dashed border untuk menunjukkan status success.</p>
                        <code style="background: #f3f4f6; padding: 4px 8px; border-radius: 4px; font-size: 12px;">.onv-border-2 .onv-border-dashed .onv-border-success</code>
                    </div>
                </div>
            </div>
        </section>

        <!-- CSS Classes Reference -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">CSS Classes Reference</h2>
            <p class="onv-section-description">Daftar lengkap class CSS yang tersedia untuk utilitas border dengan sintaks yang konsisten.</p>

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
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6; font-weight: 600;">Border Width</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-border-{size}</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">0, (default), 2, 4, 8 untuk semua sisi</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6; font-weight: 600;">Border Radius</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-rounded-{size}</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">none, sm, (default), md, lg, xl, 2xl, 3xl, full</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6; font-weight: 600;">Border Style</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-border-{style}</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">solid, dashed, dotted, double, groove, ridge, inset, outset, none, hidden</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6; font-weight: 600;">Border Color</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-border-{color}</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">thema, primary, secondary, success, warning, info, danger, dark, light</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6; font-weight: 600;">Outline</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-outline-{size}</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">0, 1, 2, 4, 8 untuk width; style dan color sama dengan border</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <!-- Usage Guidelines -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Usage Guidelines</h2>
            <p class="onv-section-description">Panduan penggunaan utilitas border untuk hasil terbaik dalam design system.</p>

            <h3 style="margin: 24px 0 16px 0; color: #374151; font-weight: 600; font-size: 18px;">Best Practices</h3>
            <ul style="margin: 16px 0; padding-left: 24px; color: #4b5563; line-height: 1.6;">
                <li><strong>Border Width:</strong> Gunakan border tipis (1-2px) untuk pemisahan subtle, border tebal (4-8px) untuk emphasis</li>
                <li><strong>Border Radius:</strong> Pilih radius berdasarkan design language - subtle (2-4px) untuk formal, rounded (8-16px) untuk friendly</li>
                <li><strong>Border Style:</strong> Solid untuk standar, dashed untuk temporary/draft, dotted untuk decorative</li>
                <li><strong>Border Color:</strong> Gunakan theme colors untuk konsistensi, soft colors untuk subtle borders</li>
                <li><strong>Outline:</strong> Khusus untuk focus states dan accessibility, jangan gunakan untuk styling umum</li>
            </ul>

            <h3 style="margin: 24px 0 16px 0; color: #374151; font-weight: 600; font-size: 18px;">Accessibility</h3>
            <ul style="margin: 16px 0; padding-left: 24px; color: #4b5563; line-height: 1.6;">
                <li>Pastikan outline focus visible dengan kontras yang cukup (minimal 3:1)</li>
                <li>Jangan hanya mengandalkan border color untuk menyampaikan status</li>
                <li>Gunakan outline-offset untuk memisahkan focus outline dari elemen</li>
                <li>Test dengan screen reader untuk memastikan border tidak mengganggu navigation</li>
            </ul>
        </section>
    </div>
</template>