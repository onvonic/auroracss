<template>
    <div>
        <h1 class="onv-page-title">Typography</h1>
        <p class="onv-page-subtitle">Komponen typography untuk mengatur hierarki teks dan meningkatkan keterbacaan dengan berbagai varian dan gaya.</p>

        <!-- Headings -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Headings</h2>
            <p class="onv-section-description">Heading dengan hierarki yang jelas dari H1 hingga H6 untuk struktur konten yang baik.</p>
            <div class="onv-demo-grid">
                <h1 class="onv-h1">Heading 1 - Main Title</h1>
                <h2 class="onv-h2">Heading 2 - Section Title</h2>
                <h3 class="onv-h3">Heading 3 - Subsection</h3>
                <h4 class="onv-h4">Heading 4 - Minor Heading</h4>
                <h5 class="onv-h5">Heading 5 - Small Heading</h5>
                <h6 class="onv-h6">Heading 6 - Smallest Heading</h6>
            </div>
        </section>

        <!-- Display Typography -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Display Typography</h2>
            <p class="onv-section-description">Typography dengan ukuran besar untuk hero sections dan landing pages.</p>
            <div class="onv-demo-grid">
                <h1 class="onv-display-1">Display 1</h1>
                <h2 class="onv-display-2">Display 2</h2>
                <h3 class="onv-display-3">Display 3</h3>
                <h4 class="onv-display-4">Display 4</h4>
            </div>
        </section>

        <!-- Paragraphs -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Paragraphs</h2>
            <p class="onv-section-description">Berbagai ukuran paragraf untuk berbagai kebutuhan konten.</p>
            <div class="onv-demo-grid">
                <p class="onv-lead">Lead paragraph - Ini adalah lead paragraph yang digunakan untuk intro atau summary yang penting.</p>
                <p class="onv-p-large">Large paragraph - Paragraf berukuran lebih besar untuk konten yang perlu penekanan khusus.</p>
                <p class="onv-p">Default paragraph - Ini adalah paragraf standar yang digunakan untuk konten utama dalam artikel atau halaman web.</p>
                <p class="onv-p-small">Small paragraph - Paragraf kecil untuk keterangan tambahan atau footnote.</p>
            </div>
        </section>

        <!-- Body Text -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Body Text</h2>
            <p class="onv-section-description">Variasi text body dan subtitle untuk struktur konten yang fleksibel.</p>
            <div class="onv-demo-grid">
                <div class="onv-subtitle1">Subtitle 1 - Primary subtitle</div>
                <div class="onv-subtitle2">Subtitle 2 - Secondary subtitle</div>
                <div class="onv-body1">Body 1 - Primary body text untuk konten utama</div>
                <div class="onv-body2">Body 2 - Secondary body text untuk konten pendukung</div>
                <div class="onv-caption">Caption - Text kecil untuk keterangan gambar atau metadata</div>
                <div class="onv-overline">Overline - Text uppercase untuk label</div>
            </div>
        </section>

        <!-- Links -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Links</h2>
            <p class="onv-section-description">Berbagai style link untuk navigasi dan aksi dalam konten.</p>
            <div class="onv-demo-grid">
                <p>Ini adalah paragraf dengan <a href="#" class="onv-link">primary link</a> di dalamnya.</p>
                <p>Ini adalah paragraf dengan <a href="#" class="onv-link-secondary">secondary link</a> di dalamnya.</p>
                <p>Ini adalah paragraf dengan <a href="#" class="onv-link-plain">plain link</a> yang subtle.</p>
            </div>
        </section>

        <!-- Quotes -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Quotes</h2>
            <p class="onv-section-description">Komponen untuk menampilkan kutipan dan blockquote.</p>
            <div class="onv-demo-grid">
                <blockquote class="onv-blockquote">
                    Ini adalah blockquote yang digunakan untuk menampilkan kutipan panjang atau testimonial dari seseorang.
                </blockquote>
                <div class="onv-quote">
                    Ini adalah quote dengan style yang lebih dekoratif untuk kutipan inspiratif.
                </div>
            </div>
        </section>

        <!-- Code Elements -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Code Elements</h2>
            <p class="onv-section-description">Elemen untuk menampilkan kode dan keyboard input.</p>
            <div class="onv-demo-grid">
                <p>Gunakan <code class="onv-code">console.log()</code> untuk debug JavaScript.</p>
                <p>Tekan <kbd class="onv-kbd">Ctrl</kbd> + <kbd class="onv-kbd">C</kbd> untuk copy.</p>
                <pre class="onv-pre">function helloWorld() {
    console.log("Hello, World!");
    return true;
}</pre>
            </div>
        </section>

        <!-- Lists -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Lists</h2>
            <p class="onv-section-description">Berbagai jenis list untuk mengorganisir informasi.</p>
            <div class="onv-demo-grid">
                <div>
                    <h4>Unordered List</h4>
                    <ul class="onv-ul">
                        <li>Item pertama dalam list</li>
                        <li>Item kedua dengan penjelasan lebih panjang</li>
                        <li>Item ketiga</li>
                        <li>Item keempat</li>
                    </ul>
                </div>
                
                <div>
                    <h4>Ordered List</h4>
                    <ol class="onv-ol">
                        <li>Langkah pertama</li>
                        <li>Langkah kedua</li>
                        <li>Langkah ketiga</li>
                        <li>Langkah keempat</li>
                    </ol>
                </div>

                <div>
                    <h4>Definition List</h4>
                    <dl class="onv-dl">
                        <dt class="onv-dt">HTML</dt>
                        <dd class="onv-dd">HyperText Markup Language</dd>
                        <dt class="onv-dt">CSS</dt>
                        <dd class="onv-dd">Cascading Style Sheets</dd>
                        <dt class="onv-dt">JavaScript</dt>
                        <dd class="onv-dd">Programming language untuk web development</dd>
                    </dl>
                </div>
            </div>
        </section>

        <!-- Table -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Table</h2>
            <p class="onv-section-description">Style untuk tabel dengan hover effect dan struktur yang jelas.</p>
            <div class="onv-demo-grid">
                <table class="onv-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Email</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>John Doe</td>
                            <td>Frontend Developer</td>
                            <td>john@example.com</td>
                            <td>Active</td>
                        </tr>
                        <tr>
                            <td>Jane Smith</td>
                            <td>UI/UX Designer</td>
                            <td>jane@example.com</td>
                            <td>Active</td>
                        </tr>
                        <tr>
                            <td>Mike Johnson</td>
                            <td>Backend Developer</td>
                            <td>mike@example.com</td>
                            <td>Inactive</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <!-- Text Utilities -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Text Utilities</h2>
            <p class="onv-section-description">Utility classes untuk styling khusus pada text.</p>
            <div class="onv-demo-grid">
                <p class="onv-text-muted">Text dengan style muted untuk informasi sekunder</p>
                <p class="onv-text-emphasis">Text dengan emphasis untuk penekanan penting</p>
                <p>Text dengan <span class="onv-text-highlight">highlight background</span> untuk marking</p>
                <p class="onv-text-brand">Text dengan brand color untuk branding</p>
            </div>
        </section>

        <!-- Usage Guidelines -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Usage Guidelines</h2>
            <p class="onv-section-description">Panduan penggunaan komponen typography untuk hasil terbaik.</p>

            <h3 class="onv-subsection-title">Hierarki Typography</h3>
            <ul style="margin: 16px 0; padding-left: 24px; color: #4b5563; line-height: 1.6;">
                <li><strong>Display:</strong> Untuk hero sections dan landing pages</li>
                <li><strong>H1-H6:</strong> Untuk struktur heading yang hierarkis</li>
                <li><strong>Lead:</strong> Untuk intro paragraph yang penting</li>
                <li><strong>Body:</strong> Untuk konten utama</li>
                <li><strong>Caption:</strong> Untuk metadata dan keterangan</li>
            </ul>

            <h3 class="onv-subsection-title">Best Practices</h3>
            <ul style="margin: 16px 0; padding-left: 24px; color: #4b5563; line-height: 1.6;">
                <li>Gunakan maximum 3 font sizes dalam satu halaman</li>
                <li>Pertahankan line-height yang konsisten untuk keterbacaan</li>
                <li>Gunakan hierarchy yang logis (H1 > H2 > H3)</li>
                <li>Berikan spacing yang cukup antar elemen</li>
                <li>Pastikan kontras warna memadai</li>
            </ul>

            <h3 class="onv-subsection-title">Accessibility</h3>
            <ul style="margin: 16px 0; padding-left: 24px; color: #4b5563; line-height: 1.6;">
                <li>Gunakan semantic HTML tags (h1, h2, p, etc.)</li>
                <li>Pastikan kontras warna minimal 4.5:1</li>
                <li>Hindari italic text untuk teks panjang</li>
                <li>Gunakan font size minimal 16px untuk body text</li>
            </ul>
        </section>

        <!-- CSS Classes Reference -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">CSS Classes Reference</h2>
            <p class="onv-section-description">Daftar lengkap class CSS yang tersedia untuk komponen typography.</p>
            <div style="overflow-x: auto; margin: 24px 0;">
                <table style="width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);">
                    <thead>
                        <tr style="background: #f8fafc;">
                            <th style="padding: 12px 16px; text-align: left; font-weight: 600; color: #374151; border-bottom: 1px solid #e5e7eb;">Class</th>
                            <th style="padding: 12px 16px; text-align: left; font-weight: 600; color: #374151; border-bottom: 1px solid #e5e7eb;">Description</th>
                            <th style="padding: 12px 16px; text-align: left; font-weight: 600; color: #374151; border-bottom: 1px solid #e5e7eb;">Font Size</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-display-1</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Largest display text</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">6rem (96px)</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-display-2</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Second largest display</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">4.5rem (72px)</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-h1</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Main heading</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">3rem (48px)</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-h2</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Section heading</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">2.25rem (36px)</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-lead</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Lead paragraph</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">1.25rem (20px)</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-p</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Default paragraph</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">1rem (16px)</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-body1</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Primary body text</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">1rem (16px)</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-body2</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Secondary body text</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">0.875rem (14px)</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-caption</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Caption text</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">0.75rem (12px)</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-link</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Primary link style</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">inherit</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px;"><code>.onv-text-muted</code></td>
                            <td style="padding: 12px 16px;">Muted text utility</td>
                            <td style="padding: 12px 16px;">inherit</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </div>
</template>