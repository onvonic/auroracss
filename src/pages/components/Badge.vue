<template>
    <div>
        <h1 class="onv-page-title">Badge</h1>
        <p class="onv-page-subtitle">Komponen badge untuk menampilkan status, label, atau informasi singkat dengan berbagai varian dan gaya yang dapat disesuaikan.</p>
        <!-- Basic Badges -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Basic Badges</h2>
            <p class="onv-section-description">Badge dasar dengan berbagai varian warna untuk menampilkan status atau kategori yang berbeda.</p>

            <div class="onv-demo-grid" style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
                <span class="onv-badge onv-badge-primary">Primary</span>
                <span class="onv-badge onv-badge-secondary">Secondary</span>
                <span class="onv-badge onv-badge-success">Success</span>
                <span class="onv-badge onv-badge-danger">Danger</span>
                <span class="onv-badge onv-badge-warning">Warning</span>
                <span class="onv-badge onv-badge-info">Info</span>
                <span class="onv-badge onv-badge-dark">Dark</span>
                <span class="onv-badge onv-badge-default">Default</span>
            </div>
        </section>

        <!-- Soft Badges -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Soft Badges</h2>
            <p class="onv-section-description">Badge dengan background lembut dan warna teks yang kontras untuk tampilan yang subtle.</p>

            <div class="onv-demo-grid" style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
                <span class="onv-badge onv-badge-soft onv-badge-primary">Primary</span>
                <span class="onv-badge onv-badge-soft onv-badge-secondary">Secondary</span>
                <span class="onv-badge onv-badge-soft onv-badge-success">Success</span>
                <span class="onv-badge onv-badge-soft onv-badge-danger">Danger</span>
                <span class="onv-badge onv-badge-soft onv-badge-warning">Warning</span>
                <span class="onv-badge onv-badge-soft onv-badge-info">Info</span>
                <span class="onv-badge onv-badge-soft onv-badge-dark">Dark</span>
                <span class="onv-badge onv-badge-soft onv-badge-default">Default</span>
            </div>
        </section>

        <!-- Outline Badges -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Outline Badges</h2>
            <p class="onv-section-description">Badge dengan style outline untuk tampilan yang lebih minimalis dan modern.</p>

            <div class="onv-demo-grid" style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
                <span class="onv-badge onv-badge-outline onv-badge-primary">Primary</span>
                <span class="onv-badge onv-badge-outline onv-badge-secondary">Secondary</span>
                <span class="onv-badge onv-badge-outline onv-badge-success">Success</span>
                <span class="onv-badge onv-badge-outline onv-badge-danger">Danger</span>
                <span class="onv-badge onv-badge-outline onv-badge-warning">Warning</span>
                <span class="onv-badge onv-badge-outline onv-badge-info">Info</span>
                <span class="onv-badge onv-badge-outline onv-badge-dark">Dark</span>
                <span class="onv-badge onv-badge-outline onv-badge-default">Default</span>
            </div>
        </section>

        <!-- Badge with Dot -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Badge with Dot</h2>
            <p class="onv-section-description">Badge dengan dot indicator untuk menunjukkan status atau aktivitas.</p>

            <div class="onv-demo-grid" style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
                <span class="onv-badge onv-badge-dot onv-badge-primary">Online</span>
                <span class="onv-badge onv-badge-dot onv-badge-secondary">Pending</span>
                <span class="onv-badge onv-badge-dot onv-badge-success">Active</span>
                <span class="onv-badge onv-badge-dot onv-badge-danger">Offline</span>
                <span class="onv-badge onv-badge-dot onv-badge-warning">Warning</span>
                <span class="onv-badge onv-badge-dot onv-badge-info">Info</span>
                <span class="onv-badge onv-badge-dot onv-badge-dark">Disabled</span>
            </div>
        </section>

        <!-- Badge with Close Button -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Dismissible Badge</h2>
            <p class="onv-section-description">Badge dengan tombol close yang dapat dihapus oleh pengguna.</p>

            <div class="onv-demo-grid" style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
                <span class="onv-badge onv-badge-primary">
                    Primary Tag
                    <button class="onv-badge-close" onclick="this.parentElement.remove()">×</button>
                </span>
                <span class="onv-badge onv-badge-secondary">
                    Secondary Tag
                    <button class="onv-badge-close" onclick="this.parentElement.remove()">×</button>
                </span>
                <span class="onv-badge onv-badge-success">
                    Success Tag
                    <button class="onv-badge-close" onclick="this.parentElement.remove()">×</button>
                </span>
                <span class="onv-badge onv-badge-danger">
                    Danger Tag
                    <button class="onv-badge-close" onclick="this.parentElement.remove()">×</button>
                </span>
            </div>
        </section>

        <!-- Badge Sizes -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Badge Sizes</h2>
            <p class="onv-section-description">Badge dengan berbagai ukuran untuk keperluan yang berbeda-beda.</p>

            <div class="onv-demo-grid" style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
                <span class="onv-badge onv-badge-sm onv-badge-primary">Small</span>
                <span class="onv-badge onv-badge-primary">Normal</span>
                <span class="onv-badge onv-badge-lg onv-badge-primary">Large</span>
            </div>
        </section>

        <!-- Badge Pills -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Badge Pills</h2>
            <p class="onv-section-description">Badge dengan bentuk rounded (pill) untuk tampilan yang lebih soft dan modern.</p>

            <div class="onv-demo-grid" style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
                <span class="onv-badge onv-badge-pill onv-badge-primary">Primary</span>
                <span class="onv-badge onv-badge-pill onv-badge-secondary">Secondary</span>
                <span class="onv-badge onv-badge-pill onv-badge-success">Success</span>
                <span class="onv-badge onv-badge-pill onv-badge-danger">Danger</span>
                <span class="onv-badge onv-badge-pill onv-badge-warning">Warning</span>
                <span class="onv-badge onv-badge-pill onv-badge-info">Info</span>
                <span class="onv-badge onv-badge-pill onv-badge-dark">Dark</span>
                <span class="onv-badge onv-badge-pill onv-badge-default">Default</span>
            </div>
        </section>

        <!-- Badge Usage Examples -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Usage Examples</h2>
            <p class="onv-section-description">Contoh penggunaan badge dalam berbagai konteks aplikasi.</p>

            <div class="onv-demo-grid" style="display: grid; gap: 24px;">
                <!-- Example 1: User Status -->
                <div style="padding: 20px; background: white; border-radius: 8px; border: 1px solid #e5e7eb;">
                    <h4 style="margin-bottom: 12px; color: #374151;">User Status</h4>
                    <div style="display: flex; align-items: center; gap: 12px;">
                        <span style="font-weight: 500;">John Doe</span>
                        <span class="onv-badge onv-badge-dot onv-badge-success">Online</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 12px; margin-top: 8px;">
                        <span style="font-weight: 500;">Jane Smith</span>
                        <span class="onv-badge onv-badge-dot onv-badge-warning">Away</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 12px; margin-top: 8px;">
                        <span style="font-weight: 500;">Bob Johnson</span>
                        <span class="onv-badge onv-badge-dot onv-badge-danger">Offline</span>
                    </div>
                </div>

                <!-- Example 2: Notification Count -->
                <div style="padding: 20px; background: white; border-radius: 8px; border: 1px solid #e5e7eb;">
                    <h4 style="margin-bottom: 12px; color: #374151;">Notification Count</h4>
                    <div style="display: flex; align-items: center; gap: 12px;">
                        <span style="font-weight: 500;">Messages</span>
                        <span class="onv-badge onv-badge-pill onv-badge-primary">12</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 12px; margin-top: 8px;">
                        <span style="font-weight: 500;">Notifications</span>
                        <span class="onv-badge onv-badge-pill onv-badge-danger">3</span>
                    </div>
                </div>

                <!-- Example 3: Tags -->
                <div style="padding: 20px; background: white; border-radius: 8px; border: 1px solid #e5e7eb;">
                    <h4 style="margin-bottom: 12px; color: #374151;">Article Tags</h4>
                    <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                        <span class="onv-badge onv-badge-soft onv-badge-primary">JavaScript</span>
                        <span class="onv-badge onv-badge-soft onv-badge-secondary">React</span>
                        <span class="onv-badge onv-badge-soft onv-badge-success">Tutorial</span>
                        <span class="onv-badge onv-badge-soft onv-badge-info">Beginner</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Usage Guidelines -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Usage Guidelines</h2>
            <p class="onv-section-description">Panduan penggunaan komponen badge untuk hasil terbaik.</p>

            <h3 class="onv-subsection-title">Kapan Menggunakan Badge</h3>
            <ul style="margin: 16px 0; padding-left: 24px; color: #4b5563; line-height: 1.6;">
                <li><strong>Status Indicator:</strong> Menunjukkan status pengguna (online, offline, away)</li>
                <li><strong>Notification Count:</strong> Menampilkan jumlah pesan atau notifikasi</li>
                <li><strong>Category Label:</strong> Mengkategorikan konten atau item</li>
                <li><strong>Tags:</strong> Menandai artikel, produk, atau konten dengan label</li>
                <li><strong>Priority Level:</strong> Menunjukkan tingkat prioritas (high, medium, low)</li>
                <li><strong>Version Info:</strong> Menampilkan versi aplikasi atau fitur</li>
            </ul>

            <h3 class="onv-subsection-title">Best Practices</h3>
            <ul style="margin: 16px 0; padding-left: 24px; color: #4b5563; line-height: 1.6;">
                <li>Gunakan warna yang sesuai dengan konteks (success untuk positif, danger untuk negatif)</li>
                <li>Jaga konsistensi ukuran badge dalam satu halaman</li>
                <li>Gunakan teks yang singkat dan jelas</li>
                <li>Pilih variant yang sesuai dengan desain keseluruhan aplikasi</li>
                <li>Gunakan badge dot untuk status yang membutuhkan indikator visual</li>
            </ul>

            <h3 class="onv-subsection-title">Accessibility</h3>
            <ul style="margin: 16px 0; padding-left: 24px; color: #4b5563; line-height: 1.6;">
                <li>Pastikan kontras warna memenuhi standar WCAG</li>
                <li>Gunakan <code>aria-label</code> untuk badge yang hanya berisi angka</li>
                <li>Tambahkan <code>role="status"</code> untuk badge yang menunjukkan status</li>
                <li>Gunakan semantic HTML yang tepat</li>
            </ul>
        </section>

        <!-- CSS Classes Reference -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">CSS Classes Reference</h2>
            <p class="onv-section-description">Daftar lengkap class CSS yang tersedia untuk komponen badge.</p>

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
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-badge</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Base badge class</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-badge-primary</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Primary badge variant</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-badge-secondary</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Secondary badge variant</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-badge-success</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Success badge variant</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-badge-danger</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Danger badge variant</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-badge-warning</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Warning badge variant</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-badge-info</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Info badge variant</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-badge-dark</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Dark badge variant</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-badge-default</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Default badge variant</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-badge-soft</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Soft background variant</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-badge-outline</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Outline variant</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-badge-dot</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Badge with dot indicator</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-badge-close</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Close button for dismissible badge</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-badge-sm</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Small size variant</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-badge-lg</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Large size variant</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px;"><code>.onv-badge-pill</code></td>
                            <td style="padding: 12px 16px;">Rounded pill variant</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </div>
</template>