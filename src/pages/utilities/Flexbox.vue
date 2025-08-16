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
                            <h5 style="font-weight: 600; color: #374151; margin-bottom: 8px; font-size: 14px;">Desktop (≥992px)</h5>
                            <p style="color: #6b7280; font-size: 13px; margin-bottom: 8px;">Default breakpoint</p>
                            <code style="background: #dbeafe; color: #1e40af; padding: 4px 8px; border-radius: 4px; font-size: 12px;">.onv-col-{1-12}</code>
                        </div>
                        <div style="background: #f8fafc; padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb;">
                            <h5 style="font-weight: 600; color: #374151; margin-bottom: 8px; font-size: 14px;">Tablet (768px-991px)</h5>
                            <p style="color: #6b7280; font-size: 13px; margin-bottom: 8px;">Medium devices</p>
                            <code style="background: #dcfce7; color: #166534; padding: 4px 8px; border-radius: 4px; font-size: 12px;">.onv-col-md-{1-12}</code>
                        </div>
                        <div style="background: #f8fafc; padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb;">
                            <h5 style="font-weight: 600; color: #374151; margin-bottom: 8px; font-size: 14px;">Mobile (≤767px)</h5>
                            <p style="color: #6b7280; font-size: 13px; margin-bottom: 8px;">Small devices</p>
                            <code style="background: #fef3c7; color: #92400e; padding: 4px 8px; border-radius: 4px; font-size: 12px;">.onv-col-sm-{1-12}</code>
                        </div>
                    </div>
                </div>

                <!-- Responsive Example -->
                <div>
                    <h4 style="margin-bottom: 12px; color: #374151; font-weight: 600;">Responsive Grid Example</h4>
                    <div class="onv-row">
                        <div class="onv-col-2 onv-col-md-4 onv-col-sm-6" style="background: #e0e7ff; padding: 12px; border-radius: 4px; border: 1px solid #6366f1; color: #3730a3; text-align: center; font-size: 14px; font-weight: 600; margin-bottom: 8px;">Desktop: 6 cols<br>Tablet: 3 cols<br>Mobile: 2 cols</div>
                        <div class="onv-col-2 onv-col-md-4 onv-col-sm-6" style="background: #e0e7ff; padding: 12px; border-radius: 4px; border: 1px solid #6366f1; color: #3730a3; text-align: center; font-size: 14px; font-weight: 600; margin-bottom: 8px;">Desktop: 6 cols<br>Tablet: 3 cols<br>Mobile: 2 cols</div>
                        <div class="onv-col-2 onv-col-md-4 onv-col-sm-6" style="background: #e0e7ff; padding: 12px; border-radius: 4px; border: 1px solid #6366f1; color: #3730a3; text-align: center; font-size: 14px; font-weight: 600; margin-bottom: 8px;">Desktop: 6 cols<br>Tablet: 3 cols<br>Mobile: 2 cols</div>
                        <div class="onv-col-2 onv-col-md-4 onv-col-sm-6" style="background: #e0e7ff; padding: 12px; border-radius: 4px; border: 1px solid #6366f1; color: #3730a3; text-align: center; font-size: 14px; font-weight: 600; margin-bottom: 8px;">Desktop: 6 cols<br>Tablet: 3 cols<br>Mobile: 2 cols</div>
                        <div class="onv-col-2 onv-col-md-4 onv-col-sm-6" style="background: #e0e7ff; padding: 12px; border-radius: 4px; border: 1px solid #6366f1; color: #3730a3; text-align: center; font-size: 14px; font-weight: 600; margin-bottom: 8px;">Desktop: 6 cols<br>Tablet: 3 cols<br>Mobile: 2 cols</div>
                        <div class="onv-col-2 onv-col-md-4 onv-col-sm-6" style="background: #e0e7ff; padding: 12px; border-radius: 4px; border: 1px solid #6366f1; color: #3730a3; text-align: center; font-size: 14px; font-weight: 600; margin-bottom: 8px;">Desktop: 6 cols<br>Tablet: 3 cols<br>Mobile: 2 cols</div>
                    </div>
                    <p style="font-size: 13px; color: #6b7280; margin-top: 8px;">Classes: <code>.onv-col-2 .onv-col-md-4 .onv-col-sm-6</code></p>
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
                    <h4 style="margin-bottom: 12px; color: #374151; font-weight: 600;">Justify Content (Horizontal Alignment)</h4>
                    <div style="display: grid; gap: 12px;">
                        <div>
                            <div class="onv-flex onv-justify-start" style="background: #ede9fe; padding: 12px; border-radius: 6px; border: 2px solid #8b5cf6; gap: 6px; height: 50px; align-items: center;">
                                <div style="background: #8b5cf6; color: white; padding: 8px; border-radius: 4px; font-size: 11px;">A</div>
                                <div style="background: #8b5cf6; color: white; padding: 8px; border-radius: 4px; font-size: 11px;">B</div>
                                <div style="background: #8b5cf6; color: white; padding: 8px; border-radius: 4px; font-size: 11px;">C</div>
                            </div>
                            <p style="margin-top: 4px; font-size: 12px; color: #6b7280;"><code>.onv-justify-start</code> - align left</p>
                        </div>
                        <div>
                            <div class="onv-flex onv-justify-center" style="background: #ede9fe; padding: 12px; border-radius: 6px; border: 2px solid #8b5cf6; gap: 6px; height: 50px; align-items: center;">
                                <div style="background: #8b5cf6; color: white; padding: 8px; border-radius: 4px; font-size: 11px;">A</div>
                                <div style="background: #8b5cf6; color: white; padding: 8px; border-radius: 4px; font-size: 11px;">B</div>
                                <div style="background: #8b5cf6; color: white; padding: 8px; border-radius: 4px; font-size: 11px;">C</div>
                            </div>
                            <p style="margin-top: 4px; font-size: 12px; color: #6b7280;"><code>.onv-justify-center</code> - align center</p>
                        </div>
                        <div>
                            <div class="onv-flex onv-justify-between" style="background: #ede9fe; padding: 12px; border-radius: 6px; border: 2px solid #8b5cf6; gap: 6px; height: 50px; align-items: center;">
                                <div style="background: #8b5cf6; color: white; padding: 8px; border-radius: 4px; font-size: 11px;">A</div>
                                <div style="background: #8b5cf6; color: white; padding: 8px; border-radius: 4px; font-size: 11px;">B</div>
                                <div style="background: #8b5cf6; color: white; padding: 8px; border-radius: 4px; font-size: 11px;">C</div>
                            </div>
                            <p style="margin-top: 4px; font-size: 12px; color: #6b7280;"><code>.onv-justify-between</code> - space between</p>
                        </div>
                    </div>
                </div>

                <!-- Align Items -->
                <div>
                    <h4 style="margin-bottom: 12px; color: #374151; font-weight: 600;">Align Items (Vertical Alignment)</h4>
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
                    <h4 style="margin-bottom: 12px; color: #374151; font-weight: 600;">Flex Properties (Proportional Sizing)</h4>
                    <div style="display: grid; gap: 12px;">
                        <div class="onv-flex" style="background: #cffafe; padding: 12px; border-radius: 6px; border: 2px solid #06b6d4; gap: 6px;">
                            <div class="onv-flex-1" style="background: #06b6d4; color: white; padding: 8px; border-radius: 4px; font-size: 12px; text-align: center;">flex-1 (takes remaining space)</div>
                            <div style="background: #06b6d4; color: white; padding: 8px; border-radius: 4px; font-size: 12px; text-align: center;">normal</div>
                        </div>
                        <div class="onv-flex" style="background: #cffafe; padding: 12px; border-radius: 6px; border: 2px solid #06b6d4; gap: 6px;">
                            <div class="onv-flex-2" style="background: #06b6d4; color: white; padding: 8px; border-radius: 4px; font-size: 12px; text-align: center;">flex-2 (2 parts)</div>
                            <div class="onv-flex-1" style="background: #0891b2; color: white; padding: 8px; border-radius: 4px; font-size: 12px; text-align: center;">flex-1 (1 part)</div>
                        </div>
                        <div class="onv-flex" style="background: #cffafe; padding: 12px; border-radius: 6px; border: 2px solid #06b6d4; gap: 6px;">
                            <div class="onv-flex-3" style="background: #06b6d4; color: white; padding: 8px; border-radius: 4px; font-size: 12px; text-align: center;">flex-3 (75%)</div>
                            <div class="onv-flex-1" style="background: #0891b2; color: white; padding: 8px; border-radius: 4px; font-size: 12px; text-align: center;">flex-1 (25%)</div>
                        </div>
                    </div>
                    <p style="font-size: 13px; color: #6b7280; margin-top: 8px;">Available: <code>.onv-flex-{1-12}</code>, <code>.onv-flex-auto</code>, <code>.onv-flex-none</code></p>
                </div>

                <!-- Responsive Flexbox -->
                <div>
                    <h4 style="margin-bottom: 12px; color: #374151; font-weight: 600;">Responsive Flexbox</h4>
                    <div class="onv-flex onv-flex-row onv-flex-col-sm onv-justify-between onv-justify-center-sm" style="background: #f3f4f6; padding: 16px; border-radius: 6px; border: 2px solid #6b7280; gap: 12px;">
                        <div style="background: #6b7280; color: white; padding: 12px; border-radius: 4px; font-size: 12px; text-align: center;">Item 1</div>
                        <div style="background: #6b7280; color: white; padding: 12px; border-radius: 4px; font-size: 12px; text-align: center;">Item 2</div>
                        <div style="background: #6b7280; color: white; padding: 12px; border-radius: 4px; font-size: 12px; text-align: center;">Item 3</div>
                    </div>
                    <p style="font-size: 13px; color: #6b7280; margin-top: 8px;">
                        Desktop: <code>.onv-flex-row .onv-justify-between</code><br>
                        Mobile: <code>.onv-flex-col-sm .onv-justify-center-sm</code>
                    </p>
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
                        <div class="onv-flex onv-items-center onv-gap-3" style="gap: 12px;">
                            <div style="background: #3b82f6; width: 32px; height: 32px; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-weight: 600;">L</div>
                            <h3 style="font-weight: 600; margin: 0;">Brand</h3>
                        </div>
                        <div class="onv-flex onv-gap-6" style="gap: 24px;">
                            <a href="#" style="color: #d1d5db; text-decoration: none;">Home</a>
                            <a href="#" style="color: #d1d5db; text-decoration: none;">About</a>
                            <a href="#" style="color: #d1d5db; text-decoration: none;">Contact</a>
                        </div>
                        <button style="background: #3b82f6; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;">Sign In</button>
                    </div>
                    <p style="font-size: 13px; color: #6b7280; margin-top: 8px;">Classes used: <code>.onv-flex</code>, <code>.onv-items-center</code>, <code>.onv-justify-between</code></p>
                </div>

                <!-- Example 2: Card Layout with Flexbox -->
                <div>
                    <h4 style="margin-bottom: 12px; color: #374151; font-weight: 600;">Card Layout with Flexbox</h4>
                    <div class="onv-flex onv-flex-col onv-justify-between" style="background: white; border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); height: 250px;">
                        <div>
                            <div style="width: 100%; height: 120px; background: #3b82f6; border-radius: 6px; margin-bottom: 12px;"></div>
                            <h5 style="font-weight: 600; color: #374151; margin-bottom: 8px;">Card Title</h5>
                            <p style="color: #6b7280; font-size: 14px; margin: 0;">Card description that can be of variable length...</p>
                        </div>
                        <button style="background: #3b82f6; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; width: 100%;">Action Button</button>
                    </div>
                    <p style="font-size: 13px; color: #6b7280; margin-top: 8px;">Classes used: <code>.onv-flex</code>, <code>.onv-flex-col</code>, <code>.onv-justify-between</code></p>
                </div>

                <!-- Example 3: Responsive Grid -->
                <div>
                    <h4 style="margin-bottom: 12px; color: #374151; font-weight: 600;">Responsive Layout Example</h4>
                    <div class="onv-row">
                        <div class="onv-col-8 onv-col-md-12 onv-col-sm-12" style="margin-bottom: 16px;">
                            <div style="background: #dbeafe; border: 2px solid #3b82f6; padding: 16px; border-radius: 8px; color: #1e40af; text-align: center;">
                                <h5 style="font-weight: 600; margin-bottom: 8px;">Main Content</h5>
                                <p style="margin: 0; font-size: 14px;">Desktop: 66.67% | Tablet: 100% | Mobile: 100%</p>
                            </div>
                        </div>
                        <div class="onv-col-4 onv-col-md-12 onv-col-sm-12" style="margin-bottom: 16px;">
                            <div style="background: #dcfce7; border: 2px solid #10b981; padding: 16px; border-radius: 8px; color: #166534; text-align: center;">
                                <h5 style="font-weight: 600; margin-bottom: 8px;">Sidebar</h5>
                                <p style="margin: 0; font-size: 14px;">Desktop: 33.33% | Tablet: 100% | Mobile: 100%</p>
                            </div>
                        </div>
                    </div>
                    <p style="font-size: 13px; color: #6b7280; margin-top: 8px;">Classes used: <code>.onv-col-8 .onv-col-md-12 .onv-col-sm-12</code> and <code>.onv-col-4 .onv-col-md-12 .onv-col-sm-12</code></p>
                </div>

                <!-- Example 4: Flexbox Navigation with Order -->
                <div>
                    <h4 style="margin-bottom: 12px; color: #374151; font-weight: 600;">Responsive Navigation with Order</h4>
                    <div class="onv-flex onv-flex-row onv-flex-col-sm onv-items-center onv-justify-between" style="background: #f8fafc; border: 2px solid #e5e7eb; padding: 16px; border-radius: 8px; gap: 12px;">
                        <div class="onv-order-1 onv-order-2-sm" style="background: #3b82f6; color: white; padding: 8px 16px; border-radius: 6px; font-weight: 600;">Logo</div>
                        <div class="onv-flex onv-flex-row onv-flex-col-sm onv-order-2 onv-order-1-sm onv-gap-4" style="gap: 16px;">
                            <a href="#" style="color: #374151; text-decoration: none; padding: 8px;">Home</a>
                            <a href="#" style="color: #374151; text-decoration: none; padding: 8px;">About</a>
                            <a href="#" style="color: #374151; text-decoration: none; padding: 8px;">Contact</a>
                        </div>
                        <div class="onv-order-3" style="background: #10b981; color: white; padding: 8px 16px; border-radius: 6px;">Menu</div>
                    </div>
                    <p style="font-size: 13px; color: #6b7280; margin-top: 8px;">
                        Desktop: Logo → Menu → Button<br>
                        Mobile: Menu → Logo → Button (reordered with <code>.onv-order-*-sm</code>)
                    </p>
                </div>

                <!-- Example 5: Complex Flexbox Layout -->
                <div>
                    <h4 style="margin-bottom: 12px; color: #374151; font-weight: 600;">Complex Flexbox Proportions</h4>
                    <div class="onv-flex onv-flex-col-sm onv-gap-3" style="background: #f8fafc; padding: 16px; border-radius: 8px; border: 2px solid #e5e7eb; gap: 12px;">
                        <div class="onv-flex-1 onv-flex-1-sm" style="background: #8b5cf6; color: white; padding: 16px; border-radius: 6px; text-align: center; font-weight: 600;">
                            Sidebar (1 part)<br>
                            <small>Desktop: 25% width</small>
                        </div>
                        <div class="onv-flex-2 onv-flex-1-sm" style="background: #06b6d4; color: white; padding: 16px; border-radius: 6px; text-align: center; font-weight: 600;">
                            Main Content (2 parts)<br>
                            <small>Desktop: 50% width</small>
                        </div>
                        <div class="onv-flex-1 onv-flex-1-sm" style="background: #f59e0b; color: white; padding: 16px; border-radius: 6px; text-align: center; font-weight: 600;">
                            Ads (1 part)<br>
                            <small>Desktop: 25% width</small>
                        </div>
                    </div>
                    <p style="font-size: 13px; color: #6b7280; margin-top: 8px;">
                        Desktop: 1:2:1 ratio with <code>.onv-flex-1 .onv-flex-2 .onv-flex-1</code><br>
                        Mobile: Equal columns with <code>.onv-flex-1-sm</code>
                    </p>
                </div>

                <!-- Example 6: Centering Content -->
                <div>
                    <h4 style="margin-bottom: 12px; color: #374151; font-weight: 600;">Perfect Centering</h4>
                    <div class="onv-flex onv-items-center onv-justify-center" style="background: #f8fafc; border: 2px dashed #6b7280; height: 120px; border-radius: 8px;">
                        <div style="background: #374151; color: white; padding: 20px; border-radius: 8px; text-align: center;">
                            <h5 style="font-weight: 600; margin-bottom: 8px;">Perfectly Centered</h5>
                            <p style="margin: 0; font-size: 14px;">Both horizontally and vertically</p>
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

            <div style="display: grid; gap: 20px;">
                <div>
                    <h4 style="margin-bottom: 12px; color: #374151; font-weight: 600;">Grid System vs Flexbox - Kapan Menggunakan?</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 16px;">
                        <div style="background: #dbeafe; padding: 16px; border-radius: 8px; border: 1px solid #3b82f6;">
                            <h5 style="font-weight: 600; color: #1e40af; margin-bottom: 8px;">Grid System (.onv-row/.onv-col-*)</h5>
                            <ul style="margin: 0; padding-left: 20px; color: #1e40af; line-height: 1.6;">
                                <li>Layout halaman utama</li>
                                <li>Responsive design dengan breakpoint</li>
                                <li>Grid produk/kartu yang konsisten</li>
                                <li>Layout 12-kolom tradisional</li>
                            </ul>
                        </div>
                        <div style="background: #dcfce7; padding: 16px; border-radius: 8px; border: 1px solid #10b981;">
                            <h5 style="font-weight: 600; color: #166534; margin-bottom: 8px;">Flexbox Utilities (.onv-flex)</h5>
                            <ul style="margin: 0; padding-left: 20px; color: #166534; line-height: 1.6;">
                                <li>Navigation bars</li>
                                <li>Centering content</li>
                                <li>Button groups</li>
                                <li>Layout dalam 1 dimensi</li>
                                <li>Distribusi ruang dinamis</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div>
                    <h4 style="margin-bottom: 12px; color: #374151; font-weight: 600;">Best Practices</h4>
                    <ul style="margin: 0; padding-left: 24px; color: #4b5563; line-height: 1.8;">
                        <li><strong>Mobile-first:</strong> Mulai dengan <code>.onv-col-sm-*</code>, lalu scale up ke tablet dan desktop</li>
                        <li><strong>Kombinasi:</strong> Gunakan grid system untuk layout utama, flexbox untuk komponen kecil</li>
                        <li><strong>Gap spacing:</strong> Gunakan <code>.onv-gap-*</code> untuk spacing yang konsisten dalam flexbox</li>
                        <li><strong>Responsive testing:</strong> Selalu test di berbagai ukuran layar</li>
                        <li><strong>Semantic HTML:</strong> Tetap gunakan elemen HTML yang semantik dengan utility classes</li>
                    </ul>
                </div>

                <div>
                    <h4 style="margin-bottom: 12px; color: #374151; font-weight: 600;">Common Patterns</h4>
                    <div style="background: #f8fafc; padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb;">
                        <div style="display: grid; gap: 12px;">
                            <div>
                                <strong>Navigation:</strong> <code>.onv-flex .onv-items-center .onv-justify-between</code>
                            </div>
                            <div>
                                <strong>Center content:</strong> <code>.onv-flex .onv-items-center .onv-justify-center</code>
                            </div>
                            <div>
                                <strong>Responsive grid:</strong> <code>.onv-col-4 .onv-col-md-6 .onv-col-sm-12</code>
                            </div>
                            <div>
                                <strong>Card footer:</strong> <code>.onv-flex .onv-flex-col .onv-justify-between</code>
                            </div>
                            <div>
                                <strong>Proportional layout:</strong> <code>.onv-flex-2 .onv-flex-1</code> (2:1 ratio)
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Quick Reference -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Quick Reference</h2>
            <p class="onv-section-description">Referensi cepat untuk class-class yang paling sering digunakan.</p>

            <div style="overflow-x: auto; margin: 24px 0;">
                <table style="width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);">
                    <thead>
                        <tr style="background: #f8fafc;">
                            <th style="padding: 12px 16px; text-align: left; font-weight: 600; color: #374151; border-bottom: 1px solid #e5e7eb;">Category</th>
                            <th style="padding: 12px 16px; text-align: left; font-weight: 600; color: #374151; border-bottom: 1px solid #e5e7eb;">Classes</th>
                            <th style="padding: 12px 16px; text-align: left; font-weight: 600; color: #374151; border-bottom: 1px solid #e5e7eb;">Usage</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6; font-weight: 600;">Grid System</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-col-{1-12}</code><br><code>.onv-col-md-{1-12}</code><br><code>.onv-col-sm-{1-12}</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Responsive grid columns with breakpoints</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6; font-weight: 600;">Flexbox Display</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-flex</code><br><code>.onv-flex-col</code><br><code>.onv-flex-row</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Create flex containers and set direction</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6; font-weight: 600;">Alignment</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-justify-center</code><br><code>.onv-items-center</code><br><code>.onv-justify-between</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Center and distribute content</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6; font-weight: 600;">Flex Sizing</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-flex-1</code><br><code>.onv-flex-2</code><br><code>.onv-flex-none</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Control flex item proportions</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6; font-weight: 600;">Responsive</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-flex-col-sm</code><br><code>.onv-justify-center-md</code><br><code>.onv-order-1-lg</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Responsive variants with breakpoint suffixes</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; font-weight: 600;">Spacing</td>
                            <td style="padding: 12px 16px;"><code>.onv-gap-1</code><br><code>.onv-gap-4</code><br><code>.onv-gap-6</code></td>
                            <td style="padding: 12px 16px;">Add consistent spacing between flex items</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </div>
</template>