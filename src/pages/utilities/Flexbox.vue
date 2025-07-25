<template>
    <div>
        <h1 class="onv-page-title">Flexbox & Grid</h1>
        <p class="onv-page-subtitle">Utilitas flexbox dan grid untuk membuat layout yang responsif dan fleksibel dengan sistem 12-kolom dan berbagai opsi alignment yang lengkap.</p>

        <!-- Responsive Grid System -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Responsive Grid System</h2>
            <p class="onv-section-description">Sistem grid 12-kolom yang responsif dengan breakpoint untuk desktop, tablet, dan mobile.</p>

            <div style="display: grid; gap: 24px;">
                <!-- Basic Grid -->
                <div>
                    <h4 style="margin-bottom: 12px; color: #374151; font-weight: 600;">Basic Grid Columns</h4>
                    <div class="onv-row" style="margin-bottom: 8px;">
                        <div class="onv-col-12" style="background: #dbeafe; padding: 12px; border-radius: 4px; border: 1px solid #3b82f6; color: #1e40af; text-align: center; font-size: 14px; font-weight: 600;">col-12</div>
                    </div>
                    <div class="onv-row" style="margin-bottom: 8px;">
                        <div class="onv-col-6" style="background: #dcfce7; padding: 12px; border-radius: 4px; border: 1px solid #10b981; color: #166534; text-align: center; font-size: 14px; font-weight: 600;">col-6</div>
                        <div class="onv-col-6" style="background: #dcfce7; padding: 12px; border-radius: 4px; border: 1px solid #10b981; color: #166534; text-align: center; font-size: 14px; font-weight: 600;">col-6</div>
                    </div>
                    <div class="onv-row" style="margin-bottom: 8px;">
                        <div class="onv-col-4" style="background: #fef3c7; padding: 12px; border-radius: 4px; border: 1px solid #f59e0b; color: #92400e; text-align: center; font-size: 14px; font-weight: 600;">col-4</div>
                        <div class="onv-col-4" style="background: #fef3c7; padding: 12px; border-radius: 4px; border: 1px solid #f59e0b; color: #92400e; text-align: center; font-size: 14px; font-weight: 600;">col-4</div>
                        <div class="onv-col-4" style="background: #fef3c7; padding: 12px; border-radius: 4px; border: 1px solid #f59e0b; color: #92400e; text-align: center; font-size: 14px; font-weight: 600;">col-4</div>
                    </div>
                    <div class="onv-row">
                        <div class="onv-col-3" style="background: #fecaca; padding: 12px; border-radius: 4px; border: 1px solid #ef4444; color: #991b1b; text-align: center; font-size: 14px; font-weight: 600;">col-3</div>
                        <div class="onv-col-3" style="background: #fecaca; padding: 12px; border-radius: 4px; border: 1px solid #ef4444; color: #991b1b; text-align: center; font-size: 14px; font-weight: 600;">col-3</div>
                        <div class="onv-col-3" style="background: #fecaca; padding: 12px; border-radius: 4px; border: 1px solid #ef4444; color: #991b1b; text-align: center; font-size: 14px; font-weight: 600;">col-3</div>
                        <div class="onv-col-3" style="background: #fecaca; padding: 12px; border-radius: 4px; border: 1px solid #ef4444; color: #991b1b; text-align: center; font-size: 14px; font-weight: 600;">col-3</div>
                    </div>
                    <p style="font-size: 13px; color: #6b7280; margin-top: 8px;">Class: <code>.onv-col-{1-12}</code></p>
                </div>

                <!-- Responsive Breakpoints -->
                <div>
                    <h4 style="margin-bottom: 12px; color: #374151; font-weight: 600;">Responsive Breakpoints</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
                        <div style="background: #f8fafc; padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb;">
                            <h5 style="font-weight: 600; color: #374151; margin-bottom: 8px; font-size: 14px;">Desktop (Default)</h5>
                            <p style="color: #6b7280; font-size: 13px; margin-bottom: 8px;">No breakpoint</p>
                            <code style="background: #dbeafe; color: #1e40af; padding: 4px 8px; border-radius: 4px; font-size: 12px;">.onv-col-{1-12}</code>
                        </div>
                        <div style="background: #f8fafc; padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb;">
                            <h5 style="font-weight: 600; color: #374151; margin-bottom: 8px; font-size: 14px;">Tablet</h5>
                            <p style="color: #6b7280; font-size: 13px; margin-bottom: 8px;">≤991px</p>
                            <code style="background: #dcfce7; color: #166534; padding: 4px 8px; border-radius: 4px; font-size: 12px;">.onv-col-md-{1-12}</code>
                        </div>
                        <div style="background: #f8fafc; padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb;">
                            <h5 style="font-weight: 600; color: #374151; margin-bottom: 8px; font-size: 14px;">Mobile</h5>
                            <p style="color: #6b7280; font-size: 13px; margin-bottom: 8px;">≤768px</p>
                            <code style="background: #fef3c7; color: #92400e; padding: 4px 8px; border-radius: 4px; font-size: 12px;">.onv-col-sm-{1-12}</code>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Flexbox Utilities -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Flexbox Utilities</h2>
            <p class="onv-section-description">Utilitas flexbox untuk mengatur layout, alignment, dan distribusi elemen secara fleksibel.</p>

            <div style="display: grid; gap: 24px;">
                <!-- Flex Display -->
                <div>
                    <h4 style="margin-bottom: 12px; color: #374151; font-weight: 600;">Flex Display</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px;">
                        <div class="onv-flex" style="background: #dbeafe; padding: 16px; border-radius: 6px; border: 2px solid #3b82f6; gap: 8px;">
                            <div style="background: #3b82f6; color: white; padding: 8px; border-radius: 4px; font-size: 12px; flex: 1; text-align: center;">Item 1</div>
                            <div style="background: #3b82f6; color: white; padding: 8px; border-radius: 4px; font-size: 12px; flex: 1; text-align: center;">Item 2</div>
                        </div>
                        <div style="text-align: center;">
                            <p style="font-weight: 600; color: #1e40af; margin-bottom: 4px; font-size: 14px;">flex</p>
                            <code style="font-size: 12px; color: #6b7280;">.onv-flex</code>
                        </div>
                    </div>
                </div>

                <!-- Flex Direction -->
                <div>
                    <h4 style="margin-bottom: 12px; color: #374151; font-weight: 600;">Flex Direction</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 12px;">
                        <div>
                            <div class="onv-flex onv-flex-row" style="background: #dcfce7; padding: 12px; border-radius: 6px; border: 2px solid #10b981; gap: 6px;">
                                <div style="background: #10b981; color: white; padding: 6px; border-radius: 3px; font-size: 11px; text-align: center;">1</div>
                                <div style="background: #10b981; color: white; padding: 6px; border-radius: 3px; font-size: 11px; text-align: center;">2</div>
                                <div style="background: #10b981; color: white; padding: 6px; border-radius: 3px; font-size: 11px; text-align: center;">3</div>
                            </div>
                            <p style="text-align: center; margin-top: 4px; font-size: 12px; color: #6b7280;"><code>.onv-flex-row</code></p>
                        </div>
                        <div>
                            <div class="onv-flex onv-flex-col" style="background: #fef3c7; padding: 12px; border-radius: 6px; border: 2px solid #f59e0b; gap: 6px;">
                                <div style="background: #f59e0b; color: white; padding: 6px; border-radius: 3px; font-size: 11px; text-align: center;">1</div>
                                <div style="background: #f59e0b; color: white; padding: 6px; border-radius: 3px; font-size: 11px; text-align: center;">2</div>
                                <div style="background: #f59e0b; color: white; padding: 6px; border-radius: 3px; font-size: 11px; text-align: center;">3</div>
                            </div>
                            <p style="text-align: center; margin-top: 4px; font-size: 12px; color: #6b7280;"><code>.onv-flex-col</code></p>
                        </div>
                    </div>
                </div>

                <!-- Justify Content -->
                <div>
                    <h4 style="margin-bottom: 12px; color: #374151; font-weight: 600;">Justify Content</h4>
                    <div style="display: grid; gap: 12px;">
                        <div>
                            <div class="onv-flex onv-justify-start" style="background: #ede9fe; padding: 12px; border-radius: 6px; border: 2px solid #8b5cf6; gap: 6px; height: 50px; align-items: center;">
                                <div style="background: #8b5cf6; color: white; padding: 8px; border-radius: 4px; font-size: 11px;">A</div>
                                <div style="background: #8b5cf6; color: white; padding: 8px; border-radius: 4px; font-size: 11px;">B</div>
                                <div style="background: #8b5cf6; color: white; padding: 8px; border-radius: 4px; font-size: 11px;">C</div>
                            </div>
                            <p style="margin-top: 4px; font-size: 12px; color: #6b7280;"><code>.onv-justify-start</code></p>
                        </div>
                        <div>
                            <div class="onv-flex onv-justify-center" style="background: #ede9fe; padding: 12px; border-radius: 6px; border: 2px solid #8b5cf6; gap: 6px; height: 50px; align-items: center;">
                                <div style="background: #8b5cf6; color: white; padding: 8px; border-radius: 4px; font-size: 11px;">A</div>
                                <div style="background: #8b5cf6; color: white; padding: 8px; border-radius: 4px; font-size: 11px;">B</div>
                                <div style="background: #8b5cf6; color: white; padding: 8px; border-radius: 4px; font-size: 11px;">C</div>
                            </div>
                            <p style="margin-top: 4px; font-size: 12px; color: #6b7280;"><code>.onv-justify-center</code></p>
                        </div>
                        <div>
                            <div class="onv-flex onv-justify-between" style="background: #ede9fe; padding: 12px; border-radius: 6px; border: 2px solid #8b5cf6; gap: 6px; height: 50px; align-items: center;">
                                <div style="background: #8b5cf6; color: white; padding: 8px; border-radius: 4px; font-size: 11px;">A</div>
                                <div style="background: #8b5cf6; color: white; padding: 8px; border-radius: 4px; font-size: 11px;">B</div>
                                <div style="background: #8b5cf6; color: white; padding: 8px; border-radius: 4px; font-size: 11px;">C</div>
                            </div>
                            <p style="margin-top: 4px; font-size: 12px; color: #6b7280;"><code>.onv-justify-between</code></p>
                        </div>
                    </div>
                </div>

                <!-- Align Items -->
                <div>
                    <h4 style="margin-bottom: 12px; color: #374151; font-weight: 600;">Align Items</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 12px;">
                        <div>
                            <div class="onv-flex onv-items-start" style="background: #fce7f3; padding: 12px; border-radius: 6px; border: 2px solid #ec4899; gap: 6px; height: 80px;">
                                <div style="background: #ec4899; color: white; padding: 8px; border-radius: 4px; font-size: 11px;">A</div>
                                <div style="background: #ec4899; color: white; padding: 12px; border-radius: 4px; font-size: 11px;">B</div>
                                <div style="background: #ec4899; color: white; padding: 6px; border-radius: 4px; font-size: 11px;">C</div>
                            </div>
                            <p style="text-align: center; margin-top: 4px; font-size: 12px; color: #6b7280;"><code>.onv-items-start</code></p>
                        </div>
                        <div>
                            <div class="onv-flex onv-items-center" style="background: #fce7f3; padding: 12px; border-radius: 6px; border: 2px solid #ec4899; gap: 6px; height: 80px;">
                                <div style="background: #ec4899; color: white; padding: 8px; border-radius: 4px; font-size: 11px;">A</div>
                                <div style="background: #ec4899; color: white; padding: 12px; border-radius: 4px; font-size: 11px;">B</div>
                                <div style="background: #ec4899; color: white; padding: 6px; border-radius: 4px; font-size: 11px;">C</div>
                            </div>
                            <p style="text-align: center; margin-top: 4px; font-size: 12px; color: #6b7280;"><code>.onv-items-center</code></p>
                        </div>
                        <div>
                            <div class="onv-flex onv-items-end" style="background: #fce7f3; padding: 12px; border-radius: 6px; border: 2px solid #ec4899; gap: 6px; height: 80px;">
                                <div style="background: #ec4899; color: white; padding: 8px; border-radius: 4px; font-size: 11px;">A</div>
                                <div style="background: #ec4899; color: white; padding: 12px; border-radius: 4px; font-size: 11px;">B</div>
                                <div style="background: #ec4899; color: white; padding: 6px; border-radius: 4px; font-size: 11px;">C</div>
                            </div>
                            <p style="text-align: center; margin-top: 4px; font-size: 12px; color: #6b7280;"><code>.onv-items-end</code></p>
                        </div>
                    </div>
                </div>

                <!-- Flex Properties -->
                <div>
                    <h4 style="margin-bottom: 12px; color: #374151; font-weight: 600;">Flex Properties</h4>
                    <div style="display: grid; gap: 12px;">
                        <div class="onv-flex" style="background: #cffafe; padding: 12px; border-radius: 6px; border: 2px solid #06b6d4; gap: 6px;">
                            <div class="onv-flex-1" style="background: #06b6d4; color: white; padding: 8px; border-radius: 4px; font-size: 12px; text-align: center;">flex-1</div>
                            <div style="background: #06b6d4; color: white; padding: 8px; border-radius: 4px; font-size: 12px; text-align: center;">normal</div>
                        </div>
                        <div class="onv-flex" style="background: #cffafe; padding: 12px; border-radius: 6px; border: 2px solid #06b6d4; gap: 6px;">
                            <div class="onv-flex-grow" style="background: #06b6d4; color: white; padding: 8px; border-radius: 4px; font-size: 12px; text-align: center;">flex-grow</div>
                            <div style="background: #06b6d4; color: white; padding: 8px; border-radius: 4px; font-size: 12px; text-align: center;">normal</div>
                        </div>
                        <div class="onv-flex" style="background: #cffafe; padding: 12px; border-radius: 6px; border: 2px solid #06b6d4; gap: 6px;">
                            <div class="onv-flex-none" style="background: #06b6d4; color: white; padding: 8px; border-radius: 4px; font-size: 12px; text-align: center;">flex-none</div>
                            <div style="background: #06b6d4; color: white; padding: 8px; border-radius: 4px; font-size: 12px; text-align: center;">normal</div>
                        </div>
                    </div>
                    <p style="font-size: 13px; color: #6b7280; margin-top: 8px;">Class: <code>.onv-flex-{1,auto,initial,none,grow,shrink}</code></p>
                </div>
            </div>
        </section>

        <!-- CSS Grid Utilities -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">CSS Grid Utilities</h2>
            <p class="onv-section-description">Utilitas CSS Grid untuk membuat layout grid yang kompleks dan responsif.</p>

            <div style="display: grid; gap: 24px;">
                <!-- Grid Template Columns -->
                <div>
                    <h4 style="margin-bottom: 12px; color: #374151; font-weight: 600;">Grid Template Columns</h4>
                    <div style="display: grid; gap: 12px;">
                        <div class="onv-grid onv-grid-cols-3" style="background: #f0f9ff; padding: 12px; border-radius: 6px; border: 2px solid #0284c7; gap: 6px;">
                            <div style="background: #0284c7; color: white; padding: 12px; border-radius: 4px; font-size: 12px; text-align: center;">1</div>
                            <div style="background: #0284c7; color: white; padding: 12px; border-radius: 4px; font-size: 12px; text-align: center;">2</div>
                            <div style="background: #0284c7; color: white; padding: 12px; border-radius: 4px; font-size: 12px; text-align: center;">3</div>
                        </div>
                        <p style="font-size: 12px; color: #6b7280;"><code>.onv-grid-cols-3</code></p>
                    </div>
                    <div style="display: grid; gap: 12px; margin-top: 16px;">
                        <div class="onv-grid onv-grid-cols-4" style="background: #f0f9ff; padding: 12px; border-radius: 6px; border: 2px solid #0284c7; gap: 6px;">
                            <div style="background: #0284c7; color: white; padding: 12px; border-radius: 4px; font-size: 12px; text-align: center;">1</div>
                            <div style="background: #0284c7; color: white; padding: 12px; border-radius: 4px; font-size: 12px; text-align: center;">2</div>
                            <div style="background: #0284c7; color: white; padding: 12px; border-radius: 4px; font-size: 12px; text-align: center;">3</div>
                            <div style="background: #0284c7; color: white; padding: 12px; border-radius: 4px; font-size: 12px; text-align: center;">4</div>
                        </div>
                        <p style="font-size: 12px; color: #6b7280;"><code>.onv-grid-cols-4</code></p>
                    </div>
                    <p style="font-size: 13px; color: #6b7280; margin-top: 8px;">Class: <code>.onv-grid-cols-{1-12,none}</code></p>
                </div>

                <!-- Grid Column Span -->
                <div>
                    <h4 style="margin-bottom: 12px; color: #374151; font-weight: 600;">Grid Column Span</h4>
                    <div class="onv-grid onv-grid-cols-6" style="background: #f7fee7; padding: 12px; border-radius: 6px; border: 2px solid #65a30d; gap: 6px;">
                        <div class="onv-col-span-2" style="background: #65a30d; color: white; padding: 12px; border-radius: 4px; font-size: 12px; text-align: center;">col-span-2</div>
                        <div class="onv-col-span-3" style="background: #65a30d; color: white; padding: 12px; border-radius: 4px; font-size: 12px; text-align: center;">col-span-3</div>
                        <div class="onv-col-span-1" style="background: #65a30d; color: white; padding: 12px; border-radius: 4px; font-size: 12px; text-align: center;">1</div>
                    </div>
                    <p style="font-size: 13px; color: #6b7280; margin-top: 8px;">Class: <code>.onv-col-span-{1-12,full}</code></p>
                </div>

                <!-- Grid Auto Flow -->
                <div>
                    <h4 style="margin-bottom: 12px; color: #374151; font-weight: 600;">Grid Auto Flow</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
                        <div>
                            <div class="onv-grid onv-grid-cols-3 onv-grid-flow-row" style="background: #fdf4ff; padding: 12px; border-radius: 6px; border: 2px solid #a855f7; gap: 6px; height: 100px;">
                                <div style="background: #a855f7; color: white; padding: 8px; border-radius: 4px; font-size: 11px; text-align: center;">1</div>
                                <div style="background: #a855f7; color: white; padding: 8px; border-radius: 4px; font-size: 11px; text-align: center;">2</div>
                                <div style="background: #a855f7; color: white; padding: 8px; border-radius: 4px; font-size: 11px; text-align: center;">3</div>
                                <div style="background: #a855f7; color: white; padding: 8px; border-radius: 4px; font-size: 11px; text-align: center;">4</div>
                            </div>
                            <p style="text-align: center; margin-top: 4px; font-size: 12px; color: #6b7280;"><code>.onv-grid-flow-row</code></p>
                        </div>
                        <div>
                            <div class="onv-grid onv-grid-cols-3 onv-grid-flow-col" style="background: #fdf4ff; padding: 12px; border-radius: 6px; border: 2px solid #a855f7; gap: 6px; height: 100px;">
                                <div style="background: #a855f7; color: white; padding: 8px; border-radius: 4px; font-size: 11px; text-align: center;">1</div>
                                <div style="background: #a855f7; color: white; padding: 8px; border-radius: 4px; font-size: 11px; text-align: center;">2</div>
                                <div style="background: #a855f7; color: white; padding: 8px; border-radius: 4px; font-size: 11px; text-align: center;">3</div>
                                <div style="background: #a855f7; color: white; padding: 8px; border-radius: 4px; font-size: 11px; text-align: center;">4</div>
                            </div>
                            <p style="text-align: center; margin-top: 4px; font-size: 12px; color: #6b7280;"><code>.onv-grid-flow-col</code></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Usage Examples -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Usage Examples</h2>
            <p class="onv-section-description">Contoh penggunaan flexbox dan grid dalam berbagai layout aplikasi.</p>

            <div style="display: grid; gap: 24px;">
                <!-- Example 1: Navigation Layout -->
                <div>
                    <h4 style="margin-bottom: 12px; color: #374151; font-weight: 600;">Navigation Layout</h4>
                    <div class="onv-flex onv-items-center onv-justify-between" style="background: #374151; padding: 16px; border-radius: 8px; color: white;">
                        <div class="onv-flex onv-items-center" style="gap: 12px;">
                            <div style="background: #3b82f6; width: 32px; height: 32px; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-weight: 600;">L</div>
                            <h3 style="font-weight: 600; margin: 0;">Brand</h3>
                        </div>
                        <div class="onv-flex" style="gap: 24px;">
                            <a href="#" style="color: #d1d5db; text-decoration: none;">Home</a>
                            <a href="#" style="color: #d1d5db; text-decoration: none;">About</a>
                            <a href="#" style="color: #d1d5db; text-decoration: none;">Contact</a>
                        </div>
                        <button style="background: #3b82f6; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;">Sign In</button>
                    </div>
                    <p style="font-size: 13px; color: #6b7280; margin-top: 8px;">Classes used: <code>.onv-flex</code>, <code>.onv-items-center</code>, <code>.onv-justify-between</code></p>
                </div>

                <!-- Example 2: Card Grid Layout -->
                <div>
                    <h4 style="margin-bottom: 12px; color: #374151; font-weight: 600;">Card Grid Layout</h4>
                    <div class="onv-grid onv-grid-cols-3" style="gap: 16px;">
                        <div style="background: white; border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);">
                            <div style="width: 100%; height: 120px; background: #3b82f6; border-radius: 6px; margin-bottom: 12px;"></div>
                            <h5 style="font-weight: 600; color: #374151; margin-bottom: 8px;">Card Title 1</h5>
                            <p style="color: #6b7280; font-size: 14px; margin: 0;">Card description goes here.</p>
                        </div>
                        <div style="background: white; border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);">
                            <div style="width: 100%; height: 120px; background: #10b981; border-radius: 6px; margin-bottom: 12px;"></div>
                            <h5 style="font-weight: 600; color: #374151; margin-bottom: 8px;">Card Title 2</h5>
                            <p style="color: #6b7280; font-size: 14px; margin: 0;">Card description goes here.</p>
                        </div>
                        <div style="background: white; border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);">
                            <div style="width: 100%; height: 120px; background: #f59e0b; border-radius: 6px; margin-bottom: 12px;"></div>
                            <h5 style="font-weight: 600; color: #374151; margin-bottom: 8px;">Card Title 3</h5>
                            <p style="color: #6b7280; font-size: 14px; margin: 0;">Card description goes here.</p>
                        </div>
                    </div>
                    <p style="font-size: 13px; color: #6b7280; margin-top: 8px;">Classes used: <code>.onv-grid</code>, <code>.onv-grid-cols-3</code></p>
                </div>

                <!-- Example 3: Responsive Grid -->
                <div>
                    <h4 style="margin-bottom: 12px; color: #374151; font-weight: 600;">Responsive Grid System</h4>
                    <div class="onv-row">
                        <div class="onv-col-md-6 onv-col-sm-12" style="margin-bottom: 16px;">
                            <div style="background: #dbeafe; border: 2px solid #3b82f6; padding: 16px; border-radius: 8px; color: #1e40af; text-align: center;">
                                <h5 style="font-weight: 600; margin-bottom: 8px;">Main Content</h5>
                                <p style="margin: 0; font-size: 14px;">Desktop: 50% | Tablet: 50% | Mobile: 100%</p>
                                <code style="background: rgba(255,255,255,0.2); padding: 4px 8px; border-radius: 4px; font-size: 12px; display: inline-block; margin-top: 8px;">.onv-col-md-6 .onv-col-sm-12</code>
                            </div>
                        </div>
                        <div class="onv-col-md-6 onv-col-sm-12" style="margin-bottom: 16px;">
                            <div style="background: #dcfce7; border: 2px solid #10b981; padding: 16px; border-radius: 8px; color: #166534; text-align: center;">
                                <h5 style="font-weight: 600; margin-bottom: 8px;">Sidebar</h5>
                                <p style="margin: 0; font-size: 14px;">Desktop: 50% | Tablet: 50% | Mobile: 100%</p>
                                <code style="background: rgba(255,255,255,0.2); padding: 4px 8px; border-radius: 4px; font-size: 12px; display: inline-block; margin-top: 8px;">.onv-col-md-6 .onv-col-sm-12</code>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Example 4: Complex Grid Layout -->
                <div>
                    <h4 style="margin-bottom: 12px; color: #374151; font-weight: 600;">Complex Grid Layout</h4>
                    <div class="onv-grid onv-grid-cols-4" style="gap: 12px; height: 200px;">
                        <div class="onv-col-span-2" style="background: #8b5cf6; color: white; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: 600;">Header (col-span-2)</div>
                        <div class="onv-col-span-2" style="background: #ec4899; color: white; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: 600;">Navigation (col-span-2)</div>
                        <div class="onv-col-span-3" style="background: #06b6d4; color: white; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: 600;">Main Content (col-span-3)</div>
                        <div class="onv-col-span-1" style="background: #f59e0b; color: white; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: 600;">Sidebar</div>
                    </div>
                    <p style="font-size: 13px; color: #6b7280; margin-top: 8px;">Classes used: <code>.onv-grid</code>, <code>.onv-grid-cols-4</code>, <code>.onv-col-span-{1,2,3}</code></p>
                </div>

                <!-- Example 5: Centering Content -->
                <div>
                    <h4 style="margin-bottom: 12px; color: #374151; font-weight: 600;">Centering Content</h4>
                    <div class="onv-flex onv-items-center onv-justify-center" style="background: #f8fafc; border: 2px dashed #6b7280; height: 120px; border-radius: 8px;">
                        <div style="background: #374151; color: white; padding: 20px; border-radius: 8px; text-align: center;">
                            <h5 style="font-weight: 600; margin-bottom: 8px;">Perfectly Centered</h5>
                            <p style="margin: 0; font-size: 14px;">Using flexbox alignment</p>
                        </div>
                    </div>
                    <p style="font-size: 13px; color: #6b7280; margin-top: 8px;">Classes used: <code>.onv-flex</code>, <code>.onv-items-center</code>, <code>.onv-justify-center</code></p>
                </div>
            </div>
        </section>

        <!-- Usage Guidelines -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Usage Guidelines</h2>
            <p class="onv-section-description">Panduan penggunaan flexbox dan grid untuk hasil terbaik.</p>

            <h3 class="onv-subsection-title">Kapan Menggunakan Flexbox vs Grid</h3>
            <ul style="margin: 16px 0; padding-left: 24px; color: #4b5563; line-height: 1.6;">
                <li><strong>Flexbox:</strong> Untuk layout 1-dimensi (row atau column), navigation bars, centering content</li>
                <li><strong>CSS Grid:</strong> Untuk layout 2-dimensi yang kompleks, card grids, dashboard layouts</li>
                <li><strong>Grid System:</strong> Untuk responsive layouts dengan breakpoints yang konsisten</li>
            </ul>

            <h3 class="onv-subsection-title">Best Practices</h3>
            <ul style="margin: 16px 0; padding-left: 24px; color: #4b5563; line-height: 1.6;">
                <li>Gunakan grid system untuk responsive design yang konsisten</li>
                <li>Kombinasikan flexbox dan grid untuk layout yang optimal</li>
                <li>Gunakan gap utilities untuk spacing yang konsisten</li>
                <li>Test responsive behavior pada berbagai ukuran layar</li>
                <li>Gunakan semantic HTML dengan layout utilities</li>
            </ul>

            <h3 class="onv-subsection-title">Responsive Design Tips</h3>
            <ul style="margin: 16px 0; padding-left: 24px; color: #4b5563; line-height: 1.6;">
                <li>Mulai dengan mobile-first approach menggunakan .onv-col-sm-*</li>
                <li>Gunakan .onv-col-md-* untuk tablet dan .onv-col-* untuk desktop</li>
                <li>Kombinasikan different column sizes untuk layouts yang fleksibel</li>
                <li>Gunakan CSS Grid untuk layouts yang tidak bisa dicapai dengan grid system</li>
            </ul>
        </section>

        <!-- CSS Classes Reference -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">CSS Classes Reference</h2>
            <p class="onv-section-description">Daftar lengkap class CSS yang tersedia untuk flexbox dan grid utilities.</p>

            <div style="overflow-x: auto; margin: 24px 0;">
                <table style="width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);">
                    <thead>
                        <tr style="background: #f8fafc;">
                            <th style="padding: 12px 16px; text-align: left; font-weight: 600; color: #374151; border-bottom: 1px solid #e5e7eb;">Category</th>
                            <th style="padding: 12px 16px; text-align: left; font-weight: 600; color: #374151; border-bottom: 1px solid #e5e7eb;">Class Pattern</th>
                            <th style="padding: 12px 16px; text-align: left; font-weight: 600; color: #374151; border-bottom: 1px solid #e5e7eb;">Values</th>
                            <th style="padding: 12px 16px; text-align: left; font-weight: 600; color: #374151; border-bottom: 1px solid #e5e7eb;">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Grid System</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-col-{size}</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">1-12, md-1 to md-12, sm-1 to sm-12</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Responsive grid columns</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Flexbox Display</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-flex</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">flex, inline-flex</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Set display flex</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Flex Direction</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-flex-{direction}</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">row, row-reverse, col, col-reverse</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Flex direction</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Flex Wrap</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-flex-{wrap}</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">wrap, wrap-reverse, nowrap</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Flex wrap behavior</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Flex Properties</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-flex-{property}</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">1, auto, initial, none, grow, shrink</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Flex item properties</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Justify Content</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-justify-{value}</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">start, end, center, between, around, evenly</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Horizontal alignment</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Align Items</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-items-{value}</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">start, end, center, baseline, stretch</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Vertical alignment</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Grid Display</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-grid</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">grid, inline-grid</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Set display grid</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Grid Columns</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-grid-cols-{number}</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">1-12, none</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Grid template columns</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Grid Rows</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-grid-rows-{number}</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">1-6, none</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Grid template rows</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Column Span</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-col-span-{number}</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">1-12, full, auto</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Grid column span</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Row Span</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-row-span-{number}</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">1-6, full, auto</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Grid row span</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px;">Grid Flow</td>
                            <td style="padding: 12px 16px;"><code>.onv-grid-flow-{direction}</code></td>
                            <td style="padding: 12px 16px;">row, col, dense, row-dense, col-dense</td>
                            <td style="padding: 12px 16px;">Grid auto flow direction</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </div>
</template>