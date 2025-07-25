<template>
    <div>
        <div class="onv-breadcrumb">UI Utilities</div>
        <h1 class="onv-page-title">Position</h1>
        <p class="onv-page-subtitle">Utilitas position untuk mengontrol positioning, koordinat, z-index, dan inset dengan berbagai pilihan yang lengkap dan fleksibel.</p>

        <!-- Position Types -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Position Types</h2>
            <p class="onv-section-description">Mengatur tipe positioning untuk mengontrol bagaimana elemen diposisikan dalam layout.</p>

            <div class="onv-demo-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 16px;">
                <div style="padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb; background: #f8f9fa; text-align: center;">
                    <div style="width: 60px; height: 60px; background: #e7f3ff; border: 2px solid #007bff; margin: 0 auto 12px; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 12px; color: #007bff; font-weight: 600;">Static</div>
                    <p style="font-weight: 600; margin-bottom: 8px; font-size: 14px;">Static</p>
                    <p style="font-size: 12px; color: #6b7280; margin-bottom: 8px;">Default positioning</p>
                    <code style="background: rgba(0,0,0,0.1); padding: 4px 8px; border-radius: 4px; font-size: 11px;">.onv-static</code>
                </div>
                <div style="padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb; background: #f8f9fa; text-align: center;">
                    <div style="width: 60px; height: 60px; background: #fff7e6; border: 2px solid #ffc107; margin: 0 auto 12px; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 12px; color: #ffc107; font-weight: 600;">Relative</div>
                    <p style="font-weight: 600; margin-bottom: 8px; font-size: 14px;">Relative</p>
                    <p style="font-size: 12px; color: #6b7280; margin-bottom: 8px;">Relative to normal position</p>
                    <code style="background: rgba(0,0,0,0.1); padding: 4px 8px; border-radius: 4px; font-size: 11px;">.onv-relative</code>
                </div>
                <div style="padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb; background: #f8f9fa; text-align: center;">
                    <div style="width: 60px; height: 60px; background: #f0f9ff; border: 2px solid #17a2b8; margin: 0 auto 12px; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 12px; color: #17a2b8; font-weight: 600;">Absolute</div>
                    <p style="font-weight: 600; margin-bottom: 8px; font-size: 14px;">Absolute</p>
                    <p style="font-size: 12px; color: #6b7280; margin-bottom: 8px;">Relative to positioned parent</p>
                    <code style="background: rgba(0,0,0,0.1); padding: 4px 8px; border-radius: 4px; font-size: 11px;">.onv-absolute</code>
                </div>
                <div style="padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb; background: #f8f9fa; text-align: center;">
                    <div style="width: 60px; height: 60px; background: #f8f0ff; border: 2px solid #6366f1; margin: 0 auto 12px; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 12px; color: #6366f1; font-weight: 600;">Fixed</div>
                    <p style="font-weight: 600; margin-bottom: 8px; font-size: 14px;">Fixed</p>
                    <p style="font-size: 12px; color: #6b7280; margin-bottom: 8px;">Relative to viewport</p>
                    <code style="background: rgba(0,0,0,0.1); padding: 4px 8px; border-radius: 4px; font-size: 11px;">.onv-fixed</code>
                </div>
                <div style="padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb; background: #f8f9fa; text-align: center;">
                    <div style="width: 60px; height: 60px; background: #f0fdf4; border: 2px solid #28a745; margin: 0 auto 12px; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 12px; color: #28a745; font-weight: 600;">Sticky</div>
                    <p style="font-weight: 600; margin-bottom: 8px; font-size: 14px;">Sticky</p>
                    <p style="font-size: 12px; color: #6b7280; margin-bottom: 8px;">Sticky on scroll</p>
                    <code style="background: rgba(0,0,0,0.1); padding: 4px 8px; border-radius: 4px; font-size: 11px;">.onv-sticky</code>
                </div>
            </div>
        </section>

        <!-- Position Coordinates -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Position Coordinates</h2>
            <p class="onv-section-description">Mengatur koordinat positioning untuk top, right, bottom, dan left dengan berbagai unit dan nilai.</p>

            <div style="margin-bottom: 24px;">
                <h4 style="margin-bottom: 16px; color: #374151; font-weight: 600;">Common Values</h4>
                <div class="onv-demo-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 16px;">
                    <div style="padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb; background: #f8f9fa; text-align: center;">
                        <div style="width: 40px; height: 40px; background: white; border: 2px solid #007bff; margin: 0 auto 8px; border-radius: 4px; position: relative;">
                            <div style="position: absolute; top: 0; left: 50%; transform: translateX(-50%); width: 8px; height: 8px; background: #007bff; border-radius: 50%;"></div>
                        </div>
                        <p style="font-weight: 600; margin-bottom: 4px; font-size: 12px;">0</p>
                        <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px; font-size: 10px;">.onv-top-0</code>
                    </div>
                    <div style="padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb; background: #f8f9fa; text-align: center;">
                        <div style="width: 40px; height: 40px; background: white; border: 2px solid #007bff; margin: 0 auto 8px; border-radius: 4px; position: relative;">
                            <div style="position: absolute; top: 4px; left: 50%; transform: translateX(-50%); width: 8px; height: 8px; background: #007bff; border-radius: 50%;"></div>
                        </div>
                        <p style="font-weight: 600; margin-bottom: 4px; font-size: 12px;">4</p>
                        <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px; font-size: 10px;">.onv-top-4</code>
                    </div>
                    <div style="padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb; background: #f8f9fa; text-align: center;">
                        <div style="width: 40px; height: 40px; background: white; border: 2px solid #007bff; margin: 0 auto 8px; border-radius: 4px; position: relative;">
                            <div style="position: absolute; top: 8px; left: 50%; transform: translateX(-50%); width: 8px; height: 8px; background: #007bff; border-radius: 50%;"></div>
                        </div>
                        <p style="font-weight: 600; margin-bottom: 4px; font-size: 12px;">8</p>
                        <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px; font-size: 10px;">.onv-top-8</code>
                    </div>
                    <div style="padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb; background: #f8f9fa; text-align: center;">
                        <div style="width: 40px; height: 40px; background: white; border: 2px solid #007bff; margin: 0 auto 8px; border-radius: 4px; position: relative;">
                            <div style="position: absolute; top: 16px; left: 50%; transform: translateX(-50%); width: 8px; height: 8px; background: #007bff; border-radius: 50%;"></div>
                        </div>
                        <p style="font-weight: 600; margin-bottom: 4px; font-size: 12px;">16</p>
                        <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px; font-size: 10px;">.onv-top-16</code>
                    </div>
                    <div style="padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb; background: #f8f9fa; text-align: center;">
                        <div style="width: 40px; height: 40px; background: white; border: 2px solid #007bff; margin: 0 auto 8px; border-radius: 4px; position: relative;">
                            <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 8px; height: 8px; background: #007bff; border-radius: 50%;"></div>
                        </div>
                        <p style="font-weight: 600; margin-bottom: 4px; font-size: 12px;">50%</p>
                        <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px; font-size: 10px;">.onv-top-perc-50</code>
                    </div>
                </div>
            </div>

            <div style="margin-bottom: 24px;">
                <h4 style="margin-bottom: 16px; color: #374151; font-weight: 600;">Coordinate Directions</h4>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 16px;">
                    <div style="padding: 16px; background: white; border-radius: 6px; border: 1px solid #e5e7eb; text-align: center;">
                        <div style="width: 60px; height: 60px; background: #f8f9fa; border: 2px solid #007bff; margin: 0 auto 12px; border-radius: 4px; position: relative;">
                            <div style="position: absolute; top: 0; left: 50%; transform: translateX(-50%); width: 10px; height: 4px; background: #007bff;"></div>
                        </div>
                        <p style="font-weight: 600; margin-bottom: 6px; font-size: 14px;">Top</p>
                        <code style="background: rgba(0,0,0,0.1); padding: 4px 8px; border-radius: 4px; font-size: 12px;">.onv-top-{value}</code>
                    </div>
                    <div style="padding: 16px; background: white; border-radius: 6px; border: 1px solid #e5e7eb; text-align: center;">
                        <div style="width: 60px; height: 60px; background: #f8f9fa; border: 2px solid #007bff; margin: 0 auto 12px; border-radius: 4px; position: relative;">
                            <div style="position: absolute; right: 0; top: 50%; transform: translateY(-50%); width: 4px; height: 10px; background: #007bff;"></div>
                        </div>
                        <p style="font-weight: 600; margin-bottom: 6px; font-size: 14px;">Right</p>
                        <code style="background: rgba(0,0,0,0.1); padding: 4px 8px; border-radius: 4px; font-size: 12px;">.onv-right-{value}</code>
                    </div>
                    <div style="padding: 16px; background: white; border-radius: 6px; border: 1px solid #e5e7eb; text-align: center;">
                        <div style="width: 60px; height: 60px; background: #f8f9fa; border: 2px solid #007bff; margin: 0 auto 12px; border-radius: 4px; position: relative;">
                            <div style="position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); width: 10px; height: 4px; background: #007bff;"></div>
                        </div>
                        <p style="font-weight: 600; margin-bottom: 6px; font-size: 14px;">Bottom</p>
                        <code style="background: rgba(0,0,0,0.1); padding: 4px 8px; border-radius: 4px; font-size: 12px;">.onv-bottom-{value}</code>
                    </div>
                    <div style="padding: 16px; background: white; border-radius: 6px; border: 1px solid #e5e7eb; text-align: center;">
                        <div style="width: 60px; height: 60px; background: #f8f9fa; border: 2px solid #007bff; margin: 0 auto 12px; border-radius: 4px; position: relative;">
                            <div style="position: absolute; left: 0; top: 50%; transform: translateY(-50%); width: 4px; height: 10px; background: #007bff;"></div>
                        </div>
                        <p style="font-weight: 600; margin-bottom: 6px; font-size: 14px;">Left</p>
                        <code style="background: rgba(0,0,0,0.1); padding: 4px 8px; border-radius: 4px; font-size: 12px;">.onv-left-{value}</code>
                    </div>
                </div>
            </div>

            <div style="margin-bottom: 24px;">
                <h4 style="margin-bottom: 16px; color: #374151; font-weight: 600;">Value Types</h4>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
                    <div style="padding: 16px; background: white; border-radius: 6px; border: 1px solid #e5e7eb;">
                        <h5 style="font-weight: 600; margin-bottom: 12px; color: #374151; font-size: 14px;">Fixed Values (rem)</h5>
                        <p style="font-size: 12px; color: #6b7280; margin-bottom: 8px;">0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96, 100</p>
                    </div>
                    <div style="padding: 16px; background: white; border-radius: 6px; border: 1px solid #e5e7eb;">
                        <h5 style="font-weight: 600; margin-bottom: 12px; color: #374151; font-size: 14px;">Percentage Values</h5>
                        <p style="font-size: 12px; color: #6b7280; margin-bottom: 8px;">25%, 50%, 75%, 100%</p>
                        <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px; font-size: 11px;">.onv-top-perc-{value}</code>
                    </div>
                    <div style="padding: 16px; background: white; border-radius: 6px; border: 1px solid #e5e7eb;">
                        <h5 style="font-weight: 600; margin-bottom: 12px; color: #374151; font-size: 14px;">Negative Values</h5>
                        <p style="font-size: 12px; color: #6b7280; margin-bottom: 8px;">Semua nilai di atas dengan prefix negative</p>
                        <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px; font-size: 11px;">.onv-top-neg-{value}</code>
                    </div>
                    <div style="padding: 16px; background: white; border-radius: 6px; border: 1px solid #e5e7eb;">
                        <h5 style="font-weight: 600; margin-bottom: 12px; color: #374151; font-size: 14px;">Auto Value</h5>
                        <p style="font-size: 12px; color: #6b7280; margin-bottom: 8px;">Reset positioning ke auto</p>
                        <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px; font-size: 11px;">.onv-top-auto</code>
                    </div>
                </div>
            </div>
        </section>

        <!-- Inset Utilities -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Inset Utilities</h2>
            <p class="onv-section-description">Shorthand untuk mengatur multiple positioning properties sekaligus dengan sintaks yang efisien.</p>

            <div style="margin-bottom: 24px;">
                <h4 style="margin-bottom: 16px; color: #374151; font-weight: 600;">All Sides Inset</h4>
                <div class="onv-demo-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 16px;">
                    <div style="padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb; background: #f8f9fa; text-align: center;">
                        <div style="width: 50px; height: 50px; background: white; border: 2px solid #007bff; margin: 0 auto 8px; border-radius: 4px; position: relative;">
                            <div style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; background: rgba(0, 123, 255, 0.2); border-radius: 2px;"></div>
                        </div>
                        <p style="font-weight: 600; margin-bottom: 4px; font-size: 12px;">Inset 0</p>
                        <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px; font-size: 10px;">.onv-inset-0</code>
                    </div>
                    <div style="padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb; background: #f8f9fa; text-align: center;">
                        <div style="width: 50px; height: 50px; background: white; border: 2px solid #007bff; margin: 0 auto 8px; border-radius: 4px; position: relative;">
                            <div style="position: absolute; top: 4px; right: 4px; bottom: 4px; left: 4px; background: rgba(0, 123, 255, 0.2); border-radius: 2px;"></div>
                        </div>
                        <p style="font-weight: 600; margin-bottom: 4px; font-size: 12px;">Inset 4</p>
                        <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px; font-size: 10px;">.onv-inset-4</code>
                    </div>
                    <div style="padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb; background: #f8f9fa; text-align: center;">
                        <div style="width: 50px; height: 50px; background: white; border: 2px solid #007bff; margin: 0 auto 8px; border-radius: 4px; position: relative;">
                            <div style="position: absolute; top: 8px; right: 8px; bottom: 8px; left: 8px; background: rgba(0, 123, 255, 0.2); border-radius: 2px;"></div>
                        </div>
                        <p style="font-weight: 600; margin-bottom: 4px; font-size: 12px;">Inset 8</p>
                        <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px; font-size: 10px;">.onv-inset-8</code>
                    </div>
                    <div style="padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb; background: #f8f9fa; text-align: center;">
                        <div style="width: 50px; height: 50px; background: white; border: 2px solid #007bff; margin: 0 auto 8px; border-radius: 4px; position: relative;">
                            <div style="position: absolute; top: 25%; right: 25%; bottom: 25%; left: 25%; background: rgba(0, 123, 255, 0.2); border-radius: 2px;"></div>
                        </div>
                        <p style="font-weight: 600; margin-bottom: 4px; font-size: 12px;">Inset 25%</p>
                        <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px; font-size: 10px;">.onv-inset-perc-25</code>
                    </div>
                </div>
            </div>

            <div style="margin-bottom: 24px;">
                <h4 style="margin-bottom: 16px; color: #374151; font-weight: 600;">Axis-Specific Inset</h4>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 16px;">
                    <div style="padding: 16px; background: white; border-radius: 6px; border: 1px solid #e5e7eb; text-align: center;">
                        <div style="width: 60px; height: 60px; background: #f8f9fa; border: 2px solid #007bff; margin: 0 auto 12px; border-radius: 4px; position: relative;">
                            <div style="position: absolute; top: 0; bottom: 0; left: 8px; right: 8px; background: rgba(0, 123, 255, 0.2); border-radius: 2px;"></div>
                        </div>
                        <p style="font-weight: 600; margin-bottom: 6px; font-size: 14px;">X-Axis</p>
                        <p style="font-size: 12px; color: #6b7280; margin-bottom: 8px;">Left + Right</p>
                        <code style="background: rgba(0,0,0,0.1); padding: 4px 8px; border-radius: 4px; font-size: 12px;">.onv-inset-x-{value}</code>
                    </div>
                    <div style="padding: 16px; background: white; border-radius: 6px; border: 1px solid #e5e7eb; text-align: center;">
                        <div style="width: 60px; height: 60px; background: #f8f9fa; border: 2px solid #007bff; margin: 0 auto 12px; border-radius: 4px; position: relative;">
                            <div style="position: absolute; left: 0; right: 0; top: 8px; bottom: 8px; background: rgba(0, 123, 255, 0.2); border-radius: 2px;"></div>
                        </div>
                        <p style="font-weight: 600; margin-bottom: 6px; font-size: 14px;">Y-Axis</p>
                        <p style="font-size: 12px; color: #6b7280; margin-bottom: 8px;">Top + Bottom</p>
                        <code style="background: rgba(0,0,0,0.1); padding: 4px 8px; border-radius: 4px; font-size: 12px;">.onv-inset-y-{value}</code>
                    </div>
                </div>
            </div>
        </section>

        <!-- Z-Index -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Z-Index</h2>
            <p class="onv-section-description">Mengatur layer stacking order untuk mengontrol elemen mana yang muncul di atas elemen lain.</p>

            <div style="margin-bottom: 24px;">
                <h4 style="margin-bottom: 16px; color: #374151; font-weight: 600;">Z-Index Scale</h4>
                <div class="onv-demo-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 16px;">
                    <div style="padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb; background: #f8f9fa; text-align: center;">
                        <div style="width: 50px; height: 50px; margin: 0 auto 8px; position: relative;">
                            <div style="position: absolute; width: 40px; height: 40px; background: #e5e7eb; border-radius: 4px; top: 5px; left: 5px;"></div>
                            <div style="position: absolute; width: 40px; height: 40px; background: #007bff; border-radius: 4px; top: 0; left: 0; z-index: 0;"></div>
                        </div>
                        <p style="font-weight: 600; margin-bottom: 4px; font-size: 12px;">Auto</p>
                        <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px; font-size: 10px;">.onv-z-auto</code>
                    </div>
                    <div style="padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb; background: #f8f9fa; text-align: center;">
                        <div style="width: 50px; height: 50px; margin: 0 auto 8px; position: relative;">
                            <div style="position: absolute; width: 40px; height: 40px; background: #e5e7eb; border-radius: 4px; top: 5px; left: 5px; z-index: 10;"></div>
                            <div style="position: absolute; width: 40px; height: 40px; background: #007bff; border-radius: 4px; top: 0; left: 0; z-index: 0;"></div>
                        </div>
                        <p style="font-weight: 600; margin-bottom: 4px; font-size: 12px;">10</p>
                        <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px; font-size: 10px;">.onv-z-10</code>
                    </div>
                    <div style="padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb; background: #f8f9fa; text-align: center;">
                        <div style="width: 50px; height: 50px; margin: 0 auto 8px; position: relative;">
                            <div style="position: absolute; width: 40px; height: 40px; background: #e5e7eb; border-radius: 4px; top: 5px; left: 5px; z-index: 50;"></div>
                            <div style="position: absolute; width: 40px; height: 40px; background: #007bff; border-radius: 4px; top: 0; left: 0; z-index: 0;"></div>
                        </div>
                        <p style="font-weight: 600; margin-bottom: 4px; font-size: 12px;">50</p>
                        <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px; font-size: 10px;">.onv-z-50</code>
                    </div>
                    <div style="padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb; background: #f8f9fa; text-align: center;">
                        <div style="width: 50px; height: 50px; margin: 0 auto 8px; position: relative;">
                            <div style="position: absolute; width: 40px; height: 40px; background: #e5e7eb; border-radius: 4px; top: 5px; left: 5px; z-index: 999;"></div>
                            <div style="position: absolute; width: 40px; height: 40px; background: #007bff; border-radius: 4px; top: 0; left: 0; z-index: 0;"></div>
                        </div>
                        <p style="font-weight: 600; margin-bottom: 4px; font-size: 12px;">999</p>
                        <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px; font-size: 10px;">.onv-z-999</code>
                    </div>
                    <div style="padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb; background: #f8f9fa; text-align: center;">
                        <div style="width: 50px; height: 50px; margin: 0 auto 8px; position: relative;">
                            <div style="position: absolute; width: 40px; height: 40px; background: #007bff; border-radius: 4px; top: 5px; left: 5px; z-index: -10;"></div>
                            <div style="position: absolute; width: 40px; height: 40px; background: #e5e7eb; border-radius: 4px; top: 0; left: 0; z-index: 0;"></div>
                        </div>
                        <p style="font-weight: 600; margin-bottom: 4px; font-size: 12px;">-10</p>
                        <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px; font-size: 10px;">.onv-z-neg-10</code>
                    </div>
                </div>
            </div>

            <div style="margin-bottom: 24px;">
                <h4 style="margin-bottom: 16px; color: #374151; font-weight: 600;">Z-Index Values</h4>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
                    <div style="padding: 16px; background: white; border-radius: 6px; border: 1px solid #e5e7eb;">
                        <h5 style="font-weight: 600; margin-bottom: 12px; color: #374151; font-size: 14px;">Standard Scale</h5>
                        <p style="font-size: 12px; color: #6b7280; margin-bottom: 8px;">auto, 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100</p>
                    </div>
                    <div style="padding: 16px; background: white; border-radius: 6px; border: 1px solid #e5e7eb;">
                        <h5 style="font-weight: 600; margin-bottom: 12px; color: #374151; font-size: 14px;">High Priority</h5>
                        <p style="font-size: 12px; color: #6b7280; margin-bottom: 8px;">200, 300, 400, 500, 600, 700, 800, 900, 999, 9999</p>
                    </div>
                    <div style="padding: 16px; background: white; border-radius: 6px; border: 1px solid #e5e7eb;">
                        <h5 style="font-weight: 600; margin-bottom: 12px; color: #374151; font-size: 14px;">Negative Values</h5>
                        <p style="font-size: 12px; color: #6b7280; margin-bottom: 8px;">-10, -20, -30, -40, -50</p>
                        <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px; font-size: 11px;">.onv-z-neg-{value}</code>
                    </div>
                </div>
            </div>
        </section>

        <!-- Usage Examples -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Usage Examples</h2>
            <p class="onv-section-description">Contoh penggunaan position utilities dalam konteks aplikasi nyata dengan berbagai skenario layout.</p>

            <div style="display: grid; gap: 24px;">
                <!-- Example 1: Modal & Overlay -->
                <div style="background: #f8f9fa; border: 1px solid #e5e7eb; border-radius: 8px; padding: 24px;">
                    <h4 style="font-weight: 600; margin-bottom: 16px; color: #374151;">Modal & Overlay</h4>
                    <div style="position: relative; height: 200px; background: #fff; border: 2px dashed #d1d5db; border-radius: 8px; overflow: hidden;">
                        <!-- Background content -->
                        <div style="padding: 16px;">
                            <h5 style="color: #6b7280; margin-bottom: 8px;">Background Content</h5>
                            <p style="color: #9ca3af; font-size: 14px;">This content is behind the modal overlay.</p>
                        </div>

                        <!-- Overlay -->
                        <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0, 0, 0, 0.5); z-index: 100; display: flex; align-items: center; justify-content: center;">
                            <!-- Modal -->
                            <div style="position: relative; background: white; padding: 24px; border-radius: 8px; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2); max-width: 300px; z-index: 200;">
                                <h5 style="margin-bottom: 12px; color: #374151;">Modal Dialog</h5>
                                <p style="color: #6b7280; font-size: 14px; margin-bottom: 16px;">Fixed position modal with overlay backdrop.</p>
                                <button style="background: #007bff; color: white; border: none; padding: 8px 16px; border-radius: 4px; font-size: 12px;">Close</button>
                            </div>
                        </div>
                    </div>
                    <div style="margin-top: 12px;">
                        <code style="background: #1f2937; color: #f9fafb; padding: 8px 12px; border-radius: 4px; font-size: 12px; display: block;">
                            .onv-fixed .onv-inset-0 .onv-z-100 /* Overlay */<br />
                            .onv-relative .onv-z-200 /* Modal */
                        </code>
                    </div>
                </div>

                <!-- Example 2: Sticky Header -->
                <div style="background: #f8f9fa; border: 1px solid #e5e7eb; border-radius: 8px; padding: 24px;">
                    <h4 style="font-weight: 600; margin-bottom: 16px; color: #374151;">Sticky Navigation</h4>
                    <div style="position: relative; height: 200px; background: #fff; border: 2px dashed #d1d5db; border-radius: 8px; overflow: auto;">
                        <!-- Sticky Header -->
                        <div style="position: sticky; top: 0; background: #007bff; color: white; padding: 12px 16px; z-index: 50;">
                            <h5 style="margin: 0; font-size: 14px;">Sticky Navigation</h5>
                        </div>

                        <!-- Content -->
                        <div style="padding: 16px;">
                            <div style="margin-bottom: 16px;">
                                <h6 style="color: #374151; margin-bottom: 8px;">Section 1</h6>
                                <p style="color: #6b7280; font-size: 14px;">Content that scrolls under the sticky header.</p>
                            </div>
                            <div style="margin-bottom: 16px;">
                                <h6 style="color: #374151; margin-bottom: 8px;">Section 2</h6>
                                <p style="color: #6b7280; font-size: 14px;">More scrollable content here.</p>
                            </div>
                            <div style="margin-bottom: 16px;">
                                <h6 style="color: #374151; margin-bottom: 8px;">Section 3</h6>
                                <p style="color: #6b7280; font-size: 14px;">Even more content to demonstrate scrolling.</p>
                            </div>
                        </div>
                    </div>
                    <div style="margin-top: 12px;">
                        <code style="background: #1f2937; color: #f9fafb; padding: 8px 12px; border-radius: 4px; font-size: 12px;">
                            .onv-sticky .onv-top-0 .onv-z-50
                        </code>
                    </div>
                </div>

                <!-- Example 3: Notification Badge -->
                <div style="background: #f8f9fa; border: 1px solid #e5e7eb; border-radius: 8px; padding: 24px;">
                    <h4 style="font-weight: 600; margin-bottom: 16px; color: #374151;">Badge & Tooltips</h4>
                    <div style="display: flex; gap: 24px; align-items: center;">
                        <!-- Button with Badge -->
                        <div style="position: relative; display: inline-block;">
                            <button style="background: #6c757d; color: white; border: none; padding: 12px 16px; border-radius: 6px; font-size: 14px;">
                                Messages
                            </button>
                            <span style="position: absolute; top: -8px; right: -8px; background: #dc3545; color: white; border-radius: 50%; width: 20px; height: 20px; display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: 600; z-index: 10;">
                                3
                            </span>
                        </div>

                        <!-- Icon with Tooltip -->
                        <div style="position: relative; display: inline-block;">
                            <button style="background: #17a2b8; color: white; border: none; padding: 12px; border-radius: 6px; width: 44px; height: 44px; display: flex; align-items: center; justify-content: center;">
                                ?
                            </button>
                            <div style="position: absolute; bottom: 100%; left: 50%; transform: translateX(-50%); margin-bottom: 8px; background: #343a40; color: white; padding: 8px 12px; border-radius: 4px; font-size: 12px; white-space: nowrap; z-index: 20;">
                                Help tooltip
                                <div style="position: absolute; top: 100%; left: 50%; transform: translateX(-50%); border: 4px solid transparent; border-top-color: #343a40;"></div>
                            </div>
                        </div>
                    </div>
                    <div style="margin-top: 16px;">
                        <code style="background: #1f2937; color: #f9fafb; padding: 8px 12px; border-radius: 4px; font-size: 12px; display: block;">
                            .onv-absolute .onv-top-neg-8 .onv-right-neg-8 .onv-z-10 /* Badge */<br />
                            .onv-absolute .onv-bottom-perc-full .onv-left-perc-50 .onv-z-20 /* Tooltip */
                        </code>
                    </div>
                </div>

                <!-- Example 4: Floating Action Button -->
                <div style="background: #f8f9fa; border: 1px solid #e5e7eb; border-radius: 8px; padding: 24px;">
                    <h4 style="font-weight: 600; margin-bottom: 16px; color: #374151;">Floating Elements</h4>
                    <div style="position: relative; height: 200px; background: #fff; border: 2px dashed #d1d5db; border-radius: 8px;">
                        <!-- Main content -->
                        <div style="padding: 16px;">
                            <h5 style="color: #374151; margin-bottom: 12px;">Main Content Area</h5>
                            <p style="color: #6b7280; font-size: 14px;">This is the main content area with a floating action button.</p>
                        </div>

                        <!-- Floating Action Button -->
                        <button style="position: absolute; bottom: 16px; right: 16px; width: 56px; height: 56px; background: #28a745; color: white; border: none; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: bold; box-shadow: 0 4px 12px rgba(40, 167, 69, 0.4); z-index: 30;">
                            +
                        </button>

                        <!-- Back to top -->
                        <button style="position: absolute; top: 16px; right: 16px; width: 40px; height: 40px; background: #6c757d; color: white; border: none; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; z-index: 20;">
                            ↑
                        </button>
                    </div>
                    <div style="margin-top: 12px;">
                        <code style="background: #1f2937; color: #f9fafb; padding: 8px 12px; border-radius: 4px; font-size: 12px; display: block;">
                            .onv-absolute .onv-bottom-16 .onv-right-16 .onv-z-30 /* FAB */<br />
                            .onv-absolute .onv-top-16 .onv-right-16 .onv-z-20 /* Back to top */
                        </code>
                    </div>
                </div>
            </div>
        </section>

        <!-- CSS Classes Reference -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">CSS Classes Reference</h2>
            <p class="onv-section-description">Daftar lengkap class CSS yang tersedia untuk utilitas position dengan sintaks yang konsisten.</p>

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
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6; font-weight: 600;">Position Types</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-{type}</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">static, relative, absolute, fixed, sticky</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6; font-weight: 600;">Coordinates</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-{side}-{value}</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">top, right, bottom, left dengan nilai 0-100, auto</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-{side}-perc-{value}</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Percentage values: 25, 50, 75, full</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-{side}-neg-{value}</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Negative values untuk semua ukuran</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6; font-weight: 600;">Inset All</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-inset-{value}</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Set semua sisi sekaligus: auto, 0-24</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-inset-perc-{value}</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Percentage inset: 25, 50, 75, full</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6; font-weight: 600;">Inset Axis</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-inset-x-{value}</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Left + Right: auto, 0-24, percentage</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-inset-y-{value}</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Top + Bottom: auto, 0-24, percentage</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6; font-weight: 600;">Z-Index</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-z-{value}</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">auto, 0, 10-100, 200-900, 999, 9999</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px;"></td>
                            <td style="padding: 12px 16px;"><code>.onv-z-neg-{value}</code></td>
                            <td style="padding: 12px 16px;">Negative z-index: -10 hingga -50</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <!-- Usage Guidelines -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Usage Guidelines</h2>
            <p class="onv-section-description">Panduan penggunaan utilitas position untuk hasil terbaik dan performa optimal.</p>

            <h3 style="margin: 24px 0 16px 0; color: #374151; font-weight: 600; font-size: 18px;">Best Practices</h3>
            <ul style="margin: 16px 0; padding-left: 24px; color: #4b5563; line-height: 1.6;">
                <li><strong>Position Types:</strong> Gunakan relative untuk parent containers, absolute untuk precise positioning</li>
                <li><strong>Z-Index:</strong> Buat z-index hierarchy yang konsisten - UI elements (10-50), overlays (100-500), modals (900+)</li>
                <li><strong>Fixed Elements:</strong> Hati-hati dengan fixed positioning di mobile, dapat menutupi content</li>
                <li><strong>Sticky Elements:</strong> Pastikan parent container memiliki height yang cukup untuk sticky effect</li>
                <li><strong>Performance:</strong> Hindari terlalu banyak positioned elements untuk performa yang optimal</li>
            </ul>

            <h3 style="margin: 24px 0 16px 0; color: #374151; font-weight: 600; font-size: 18px;">Common Use Cases</h3>
            <ul style="margin: 16px 0; padding-left: 24px; color: #4b5563; line-height: 1.6;">
                <li><strong>Modals & Overlays:</strong> fixed + inset-0 + high z-index untuk fullscreen overlays</li>
                <li><strong>Tooltips:</strong> absolute positioning dengan percentage values untuk centering</li>
                <li><strong>Badges:</strong> absolute dengan negative values untuk positioning di luar parent</li>
                <li><strong>Sticky Headers:</strong> sticky + top-0 untuk navigation yang mengikuti scroll</li>
                <li><strong>FAB Buttons:</strong> fixed + bottom/right values untuk floating action buttons</li>
            </ul>

            <h3 style="margin: 24px 0 16px 0; color: #374151; font-weight: 600; font-size: 18px;">Responsive Considerations</h3>
            <ul style="margin: 16px 0; padding-left: 24px; color: #4b5563; line-height: 1.6;">
                <li>Test positioning di berbagai ukuran layar untuk memastikan tidak ada overlap</li>
                <li>Gunakan percentage values untuk responsive positioning</li>
                <li>Pertimbangkan safe areas di mobile devices untuk fixed elements</li>
                <li>Kombinasikan dengan responsive utilities untuk behavior yang berbeda per breakpoint</li>
            </ul>
        </section>

        <!-- Accessibility -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Accessibility & Performance</h2>
            <p class="onv-section-description">Pertimbangan accessibility dan performance saat menggunakan position utilities.</p>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin: 24px 0;">
                <div style="background: white; border: 1px solid #e5e7eb; border-radius: 8px; padding: 20px;">
                    <h4 style="color: #374151; margin-bottom: 12px; font-weight: 600;">Accessibility Tips</h4>
                    <ul style="color: #6b7280; line-height: 1.6; margin: 0; padding-left: 20px;">
                        <li>Pastikan fixed/sticky elements tidak menutupi content penting</li>
                        <li>Gunakan focus management untuk modals dan overlays</li>
                        <li>Test dengan screen readers untuk positioned elements</li>
                        <li>Berikan alternative navigation untuk sticky elements</li>
                    </ul>
                </div>
                <div style="background: white; border: 1px solid #e5e7eb; border-radius: 8px; padding: 20px;">
                    <h4 style="color: #374151; margin-bottom: 12px; font-weight: 600;">Performance Notes</h4>
                    <ul style="color: #6b7280; line-height: 1.6; margin: 0; padding-left: 20px;">
                        <li>Positioned elements dapat trigger repaints/reflows</li>
                        <li>Gunakan transform untuk animasi instead of changing position</li>
                        <li>Fixed elements tetap di memory meski di luar viewport</li>
                        <li>Batasi jumlah high z-index elements</li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
</template>