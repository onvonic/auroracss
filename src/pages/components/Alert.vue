<template>
    <div>
        <h1 class="onv-page-title">Alert</h1>
        <p class="onv-page-subtitle">Komponen alert untuk menampilkan pesan penting kepada pengguna dengan berbagai varian dan gaya.</p>
        <!-- Basic Alerts -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Basic Alerts</h2>
            <p class="onv-section-description">Alert dasar dengan berbagai varian warna untuk menyampaikan pesan dengan konteks yang berbeda.</p>
            <div class="onv-demo-grid">
                <!-- Alert Thema -->
                <div class="onv-alert onv-alert-thema" role="alert">
                    <svg class="onv-alert-icon" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    <div class="onv-alert-content">
                        <span class="onv-alert-title">Thema alert!</span> Change a few things up and try submitting
                        again.
                    </div>
                </div>
                <!-- Alert Primary -->
                <div class="onv-alert onv-alert-primary" role="alert">
                    <svg class="onv-alert-icon" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    <div class="onv-alert-content">
                        <span class="onv-alert-title">Primary alert!</span> Change a few things up and try
                        submitting again.
                    </div>
                </div>
                <!-- Alert Secondary -->
                <div class="onv-alert onv-alert-secondary" role="alert">
                    <svg class="onv-alert-icon" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    <div class="onv-alert-content">
                        <span class="onv-alert-title">Secondary alert!</span> Change a few things up and try
                        submitting again.
                    </div>
                </div>
                <!-- Alert Success -->
                <div class="onv-alert onv-alert-success" role="alert">
                    <svg class="onv-alert-icon" fill="currentColor" viewBox="0 0 20 20">
                        <path d="m7.171 12.906-2.153-2.036a.808.808 0 1 1 1.114-1.17l1.46 1.381L12.595 6.3a.808.808 0 0 1 1.155 1.132l-6.579 5.474Z" />
                    </svg>
                    <div class="onv-alert-content">
                        <span class="onv-alert-title">Success alert!</span> Change a few things up and try
                        submitting again.
                    </div>
                </div>
                <!-- Alert Warning -->
                <div class="onv-alert onv-alert-warning" role="alert">
                    <svg class="onv-alert-icon" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0-8a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1Z" />
                    </svg>
                    <div class="onv-alert-content">
                        <span class="onv-alert-title">Warning alert!</span> Change a few things up and try
                        submitting again.
                    </div>
                </div>
                <!-- Alert Info -->
                <div class="onv-alert onv-alert-info" role="alert">
                    <svg class="onv-alert-icon" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    <div class="onv-alert-content">
                        <span class="onv-alert-title">Info alert!</span> Change a few things up and try submitting
                        again.
                    </div>
                </div>
                <!-- Alert Danger -->
                <div class="onv-alert onv-alert-danger" role="alert">
                    <svg class="onv-alert-icon" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
                    </svg>
                    <div class="onv-alert-content">
                        <span class="onv-alert-title">Danger alert!</span> Change a few things up and try submitting
                        again.
                    </div>
                </div>
                <!-- Alert Dark -->
                <div class="onv-alert onv-alert-dark" role="alert">
                    <svg class="onv-alert-icon" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    <div class="onv-alert-content">
                        <span class="onv-alert-title">Dark alert!</span> Change a few things up and try submitting
                        again.
                    </div>
                </div>

                <!-- Alert Default -->
                <div class="onv-alert onv-alert-default" role="alert">
                    <svg class="onv-alert-icon" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    <div class="onv-alert-content">
                        <span class="onv-alert-title">Default alert!</span> Change a few things up and try
                        submitting again.
                    </div>
                </div>
            </div>
        </section>
        <!-- Dismissible Alerts -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Dismissible Alerts</h2>
            <p class="onv-section-description">Alert dengan tombol close yang dapat ditutup oleh pengguna.</p>
            <div class="onv-demo-grid">
                <div class="onv-alert onv-alert-success onv-alert-dismissible" role="alert">
                    <svg class="onv-alert-icon" fill="currentColor" viewBox="0 0 20 20">
                        <path d="m7.171 12.906-2.153-2.036a.808.808 0 1 1 1.114-1.17l1.46 1.381L12.595 6.3a.808.808 0 0 1 1.155 1.132l-6.579 5.474Z" />
                    </svg>
                    <div class="onv-alert-content">
                        <span class="onv-alert-title">Dismissible alert!</span> This alert can be closed.
                    </div>
                    <button class="onv-alert-close" onclick="dismissAlert(this)">
                        <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
        <!-- Alert Sizes -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Alert Sizes</h2>
            <p class="onv-section-description">Alert dengan ukuran berbeda untuk kebutuhan yang beragam.</p>

            <div class="onv-demo-grid">
                <div class="onv-alert onv-alert-info onv-alert-sm" role="alert">
                    <svg class="onv-alert-icon" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    <div class="onv-alert-content">
                        <span class="onv-alert-title">Small alert!</span> This is a small sized alert.
                    </div>
                </div>

                <div class="onv-alert onv-alert-info" role="alert">
                    <svg class="onv-alert-icon" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    <div class="onv-alert-content">
                        <span class="onv-alert-title">Default size alert!</span> This is the default sized alert.
                    </div>
                </div>

                <div class="onv-alert onv-alert-info onv-alert-lg" role="alert">
                    <svg class="onv-alert-icon" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    <div class="onv-alert-content">
                        <span class="onv-alert-title">Large alert!</span> This is a large sized alert.
                    </div>
                </div>
            </div>
        </section>

        <!-- Border Left Alerts -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Border Left Alerts</h2>
            <p class="onv-section-description">Alert dengan garis batas kiri yang memberikan penekanan visual lebih.
            </p>

            <div class="onv-demo-grid">
                <!-- Thema -->
                <div class="onv-alert onv-alert-thema onv-alert-border-left" role="alert">
                    <div class="onv-alert-content">
                        <span class="onv-alert-title">Thema Alert</span><br>
                        This is using the thema color variant.
                    </div>
                </div>

                <!-- Primary -->
                <div class="onv-alert onv-alert-primary onv-alert-border-left" role="alert">
                    <div class="onv-alert-content">
                        <span class="onv-alert-title">Primary Notice</span><br>
                        This is an important primary notification.
                    </div>
                </div>

                <!-- Secondary -->
                <div class="onv-alert onv-alert-secondary onv-alert-border-left" role="alert">
                    <div class="onv-alert-content">
                        <span class="onv-alert-title">Secondary Info</span><br>
                        This is a secondary level information.
                    </div>
                </div>

                <!-- Success -->
                <div class="onv-alert onv-alert-success onv-alert-border-left" role="alert">
                    <div class="onv-alert-content">
                        <span class="onv-alert-title">All Good</span><br>
                        Everything is working perfectly as expected.
                    </div>
                </div>

                <!-- Warning -->
                <div class="onv-alert onv-alert-warning onv-alert-border-left" role="alert">
                    <div class="onv-alert-content">
                        <span class="onv-alert-title">Be Warned</span><br>
                        Something not ideal might be happening.
                    </div>
                </div>

                <!-- Info -->
                <div class="onv-alert onv-alert-info onv-alert-border-left" role="alert">
                    <div class="onv-alert-content">
                        <span class="onv-alert-title">Information</span><br>
                        Here's some helpful information for you to know.
                    </div>
                </div>

                <!-- Danger -->
                <div class="onv-alert onv-alert-danger onv-alert-border-left" role="alert">
                    <div class="onv-alert-content">
                        <span class="onv-alert-title">Critical Error</span><br>
                        An important issue needs your immediate attention.
                    </div>
                </div>

                <!-- Dark -->
                <div class="onv-alert onv-alert-dark onv-alert-border-left" role="alert">
                    <div class="onv-alert-content">
                        <span class="onv-alert-title">Dark Alert</span><br>
                        This is a dark themed alert message.
                    </div>
                </div>

                <!-- Default -->
                <div class="onv-alert onv-alert-default onv-alert-border-left" role="alert">
                    <div class="onv-alert-content">
                        <span class="onv-alert-title">Default Alert</span><br>
                        This is the default styled alert message.
                    </div>
                </div>
            </div>
        </section>

        <!-- Usage Guidelines -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Usage Guidelines</h2>
            <p class="onv-section-description">Panduan penggunaan komponen alert untuk hasil terbaik.</p>

            <h3 class="onv-subsection-title">Kapan Menggunakan Alert</h3>
            <ul style="margin: 16px 0; padding-left: 24px; color: #4b5563; line-height: 1.6;">
                <li><strong>Success:</strong> Konfirmasi bahwa aksi berhasil dilakukan</li>
                <li><strong>Warning:</strong> Peringatan untuk tindakan yang berpotensi bermasalah</li>
                <li><strong>Info:</strong> Informasi umum yang perlu diketahui pengguna</li>
                <li><strong>Danger:</strong> Error atau masalah yang perlu segera ditangani</li>
                <li><strong>Primary:</strong> Informasi penting dengan prioritas tinggi</li>
                <li><strong>Secondary:</strong> Informasi tambahan dengan prioritas sedang</li>
            </ul>

            <h3 class="onv-subsection-title">Best Practices</h3>
            <ul style="margin: 16px 0; padding-left: 24px; color: #4b5563; line-height: 1.6;">
                <li>Gunakan icon yang sesuai dengan konteks pesan</li>
                <li>Tulis pesan yang jelas dan actionable</li>
                <li>Pertimbangkan menggunakan dismissible alert untuk pesan yang tidak kritis</li>
                <li>Jangan gunakan terlalu banyak alert dalam satu halaman</li>
                <li>Posisikan alert di tempat yang mudah terlihat</li>
            </ul>

            <h3 class="onv-subsection-title">Accessibility</h3>
            <ul style="margin: 16px 0; padding-left: 24px; color: #4b5563; line-height: 1.6;">
                <li>Selalu gunakan atribut <code>role="alert"</code></li>
                <li>Pastikan kontras warna memenuhi standar WCAG</li>
                <li>Gunakan screen reader friendly text</li>
                <li>Tombol close harus dapat diakses melalui keyboard</li>
            </ul>
        </section>
        <!-- CSS Classes Reference -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">CSS Classes Reference</h2>
            <p class="onv-section-description">Daftar lengkap class CSS yang tersedia untuk komponen alert.</p>
            <div style="overflow-x: auto; margin: 24px 0;">
                <table style="width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);">
                    <thead>
                        <tr style="background: #f8fafc;">
                            <th style="padding: 12px 16px; text-align: left; font-weight: 600; color: #374151; border-bottom: 1px solid #e5e7eb;">
                                Class</th>
                            <th style="padding: 12px 16px; text-align: left; font-weight: 600; color: #374151; border-bottom: 1px solid #e5e7eb;">
                                Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">
                                <code>.onv-alert</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Base alert class</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">
                                <code>.onv-alert-thema</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Thema color variant
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">
                                <code>.onv-alert-primary</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Primary color variant
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">
                                <code>.onv-alert-secondary</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Secondary color
                                variant</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">
                                <code>.onv-alert-success</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Success color variant
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">
                                <code>.onv-alert-warning</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Warning color variant
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">
                                <code>.onv-alert-info</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Info color variant
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">
                                <code>.onv-alert-danger</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Danger color variant
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">
                                <code>.onv-alert-dark</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Dark color variant
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">
                                <code>.onv-alert-default</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Default color variant
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">
                                <code>.onv-alert-sm</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Small size modifier
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">
                                <code>.onv-alert-lg</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Large size modifier
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">
                                <code>.onv-alert-dismissible</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Adds close button
                                functionality</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px;"><code>.onv-alert-border-left</code></td>
                            <td style="padding: 12px 16px;">Adds left border styling</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </div>
</template>