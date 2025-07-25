<template>
    <div>
        <h1 class="onv-page-title">Button</h1>
        <p class="onv-page-subtitle">Komponen button untuk trigger aksi dan navigasi dengan berbagai varian, ukuran, dan gaya yang dapat disesuaikan.</p>
        <!-- Basic Buttons -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Basic Buttons</h2>
            <p class="onv-section-description">Button dasar dengan berbagai varian warna untuk berbagai konteks dan aksi.</p>

            <div class="onv-demo-grid" style="display: flex; flex-wrap: wrap; gap: 12px;">
                <button class="onv-btn onv-btn-primary">Primary</button>
                <button class="onv-btn onv-btn-secondary">Secondary</button>
                <button class="onv-btn onv-btn-success">Success</button>
                <button class="onv-btn onv-btn-warning">Warning</button>
                <button class="onv-btn onv-btn-info">Info</button>
                <button class="onv-btn onv-btn-danger">Danger</button>
                <button class="onv-btn onv-btn-dark">Dark</button>
                <button class="onv-btn onv-btn-default">Default</button>
            </div>
        </section>
        <!-- Outline Buttons -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Outline Buttons</h2>
            <p class="onv-section-description">Button dengan style outline untuk tampilan yang lebih subtle dan modern.</p>

            <div class="onv-demo-grid" style="display: flex; flex-wrap: wrap; gap: 12px;">
                <button class="onv-btn onv-btn-primary-outline">Primary</button>
                <button class="onv-btn onv-btn-secondary-outline">Secondary</button>
                <button class="onv-btn onv-btn-success-outline">Success</button>
                <button class="onv-btn onv-btn-warning-outline">Warning</button>
                <button class="onv-btn onv-btn-info-outline">Info</button>
                <button class="onv-btn onv-btn-danger-outline">Danger</button>
                <button class="onv-btn onv-btn-dark-outline">Dark</button>
                <button class="onv-btn onv-btn-default-outline">Default</button>
            </div>
        </section>

        <!-- Soft Buttons -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Soft Buttons</h2>
            <p class="onv-section-description">Button dengan background soft yang berubah menjadi solid saat hover untuk interaksi yang halus.</p>
            <div class="onv-demo-grid" style="display: flex; flex-wrap: wrap; gap: 12px;">
                <button class="onv-btn onv-btn-soft-primary">Primary</button>
                <button class="onv-btn onv-btn-soft-secondary">Secondary</button>
                <button class="onv-btn onv-btn-soft-success">Success</button>
                <button class="onv-btn onv-btn-soft-warning">Warning</button>
                <button class="onv-btn onv-btn-soft-info">Info</button>
                <button class="onv-btn onv-btn-soft-danger">Danger</button>
                <button class="onv-btn onv-btn-soft-dark">Dark</button>
                <button class="onv-btn onv-btn-soft-default">Default</button>
            </div>
        </section>

        <!-- Dashed Buttons -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Dashed Buttons</h2>
            <p class="onv-section-description">Button dengan border dashed untuk tampilan yang unik dan eye-catching.</p>
            <div class="onv-demo-grid" style="display: flex; flex-wrap: wrap; gap: 12px;">
                <button class="onv-btn onv-btn-primary-dashed">Primary</button>
                <button class="onv-btn onv-btn-secondary-dashed">Secondary</button>
                <button class="onv-btn onv-btn-success-dashed">Success</button>
                <button class="onv-btn onv-btn-warning-dashed">Warning</button>
                <button class="onv-btn onv-btn-info-dashed">Info</button>
                <button class="onv-btn onv-btn-danger-dashed">Danger</button>
                <button class="onv-btn onv-btn-dark-dashed">Dark</button>
                <button class="onv-btn onv-btn-default-dashed">Default</button>
            </div>
        </section>

        <!-- Button Sizes -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Button Sizes</h2>
            <p class="onv-section-description">Button dengan berbagai ukuran untuk keperluan yang berbeda-beda.</p>

            <div class="onv-demo-grid" style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
                <button class="onv-btn onv-btn-primary onv-btn-xm">Extra Small</button>
                <button class="onv-btn onv-btn-primary onv-btn-sm">Small</button>
                <button class="onv-btn onv-btn-primary onv-btn-md">Medium</button>
                <button class="onv-btn onv-btn-primary onv-btn-lg">Large</button>
            </div>
        </section>

        <!-- Rounded & Shadow Buttons -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Special Styles</h2>
            <p class="onv-section-description">Button dengan style khusus seperti rounded dan shadow untuk tampilan yang lebih menarik.</p>

            <div class="onv-demo-grid" style="display: flex; flex-wrap: wrap; gap: 12px;">
                <button class="onv-btn onv-btn-primary onv-btn-rounded">Rounded Button</button>
                <button class="onv-btn onv-btn-success onv-btn-shadow">Shadow Button</button>
                <button class="onv-btn onv-btn-info onv-btn-rounded onv-btn-shadow">Rounded + Shadow</button>
            </div>
        </section>

        <!-- Icon Buttons -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Icon Buttons</h2>
            <p class="onv-section-description">Button dengan icon untuk memberikan konteks visual yang lebih jelas.</p>

            <div class="onv-demo-grid" style="display: flex; flex-wrap: wrap; gap: 12px;">
                <button class="onv-btn onv-btn-primary btn-icon">
                    <i class="fas fa-download"></i>
                    Download
                </button>
                <button class="onv-btn onv-btn-success btn-icon">
                    <i class="fas fa-check"></i>
                    Save
                </button>
                <button class="onv-btn onv-btn-danger btn-icon">
                    <i class="fas fa-trash"></i>
                    Delete
                </button>
                <button class="onv-btn onv-btn-info btn-icon">
                    <i class="fas fa-edit"></i>
                    Edit
                </button>
            </div>
        </section>

        <!-- Button States -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Button States</h2>
            <p class="onv-section-description">Berbagai state button untuk interaksi yang berbeda.</p>

            <div class="onv-demo-grid" style="display: flex; flex-wrap: wrap; gap: 12px;">
                <button class="onv-btn onv-btn-primary">Normal</button>
                <button class="onv-btn onv-btn-primary" disabled>Disabled</button>
                <button class="onv-btn onv-btn-primary" style="opacity: 0.8;">Hover State</button>
            </div>
        </section>

        <!-- Usage Guidelines -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Usage Guidelines</h2>
            <p class="onv-section-description">Panduan penggunaan komponen button untuk hasil terbaik.</p>

            <h3 class="onv-subsection-title">Kapan Menggunakan Button</h3>
            <ul style="margin: 16px 0; padding-left: 24px; color: #4b5563; line-height: 1.6;">
                <li><strong>Primary:</strong> Aksi utama yang ingin ditekankan (Submit, Save, Continue)</li>
                <li><strong>Secondary:</strong> Aksi sekunder yang mendukung aksi utama</li>
                <li><strong>Success:</strong> Konfirmasi aksi positif (Approve, Accept, Complete)</li>
                <li><strong>Warning:</strong> Aksi yang perlu perhatian khusus (Reset, Clear)</li>
                <li><strong>Danger:</strong> Aksi destruktif (Delete, Remove, Cancel)</li>
                <li><strong>Info:</strong> Aksi informatif (View Details, Learn More)</li>
            </ul>

            <h3 class="onv-subsection-title">Best Practices</h3>
            <ul style="margin: 16px 0; padding-left: 24px; color: #4b5563; line-height: 1.6;">
                <li>Gunakan maksimal satu primary button per halaman atau section</li>
                <li>Buat label button yang jelas dan actionable</li>
                <li>Gunakan ukuran yang sesuai dengan konteks dan hierarki</li>
                <li>Pastikan button memiliki area klik yang cukup (minimum 44px)</li>
                <li>Berikan feedback visual saat button diklik atau di-hover</li>
            </ul>

            <h3 class="onv-subsection-title">Accessibility</h3>
            <ul style="margin: 16px 0; padding-left: 24px; color: #4b5563; line-height: 1.6;">
                <li>Gunakan semantic HTML <code>&lt;button&gt;</code> untuk button</li>
                <li>Pastikan kontras warna memenuhi standar WCAG</li>
                <li>Tambahkan <code>aria-label</code> untuk button dengan icon saja</li>
                <li>Gunakan <code>disabled</code> attribute untuk button yang tidak aktif</li>
            </ul>
        </section>

        <!-- CSS Classes Reference -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">CSS Classes Reference</h2>
            <p class="onv-section-description">Daftar lengkap class CSS yang tersedia untuk komponen button.</p>
            <div style="overflow-x: auto; margin: 24px 0;">
                <table style="width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);">
                    <thead>
                        <tr style="background: #f8fafc;">
                            <th style="padding: 12px 16px; text-align: left; font-weight: 600; color: #374151; border-bottom: 1px solid #e5e7eb;">Class</th>
                            <th style="padding: 12px 16px; text-align: left; font-weight: 600; color: #374151; border-bottom: 1px solid #e5e7eb;">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-btn</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Base button class</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-btn-primary</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Primary button variant</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-btn-secondary</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Secondary button variant</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-btn-success</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Success button variant</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-btn-warning</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Warning button variant</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-btn-info</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Info button variant</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-btn-danger</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Danger button variant</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-btn-dark</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Dark button variant</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-btn-default</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Default button variant</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-btn-*-outline</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Outline button variants</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-btn-soft-*</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Soft button variants</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-btn-*-dashed</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Dashed button variants</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-btn-xm</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Extra small size</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-btn-sm</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Small size</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-btn-md</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Medium size (default)</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-btn-lg</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Large size</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-btn-rounded</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Rounded corners</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-btn-shadow</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Drop shadow effect</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px;"><code>.btn-icon</code></td>
                            <td style="padding: 12px 16px;">Icon button layout</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </div>
</template>