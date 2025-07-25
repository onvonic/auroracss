<template>
    <div>
        <h1 class="onv-page-title">Spacing</h1>
        <p class="onv-page-subtitle">Utilitas spacing untuk mengontrol margin, padding, dan gap pada elemen dengan sistem yang konsisten berdasarkan variabel --set-distance.</p>

        <!-- Margin -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Margin</h2>
            <p class="onv-section-description">Kontrol jarak luar elemen dengan utilitas margin yang fleksibel.</p>

            <div style="display: grid; gap: 24px;">
                <!-- Margin All -->
                <div>
                    <h4 style="margin-bottom: 12px; color: #374151; font-weight: 600;">Margin All Sides</h4>
                    <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
                        <div style="background: #f8fafc; border: 2px dashed #e5e7eb; padding: 0px; border-radius: 6px;">
                            <div class="onv-m-0" style="background: #3b82f6; color: white; padding: 8px; border-radius: 4px; font-size: 12px;">m-0</div>
                        </div>
                        <div style="background: #f8fafc; border: 2px dashed #e5e7eb; padding: 0px; border-radius: 6px;">
                            <div class="onv-m-1" style="background: #3b82f6; color: white; padding: 8px; border-radius: 4px; font-size: 12px;">m-1</div>
                        </div>
                        <div style="background: #f8fafc; border: 2px dashed #e5e7eb; padding: 0px; border-radius: 6px;">
                            <div class="onv-m-2" style="background: #3b82f6; color: white; padding: 8px; border-radius: 4px; font-size: 12px;">m-2</div>
                        </div>
                        <div style="background: #f8fafc; border: 2px dashed #e5e7eb; padding: 0px; border-radius: 6px;">
                            <div class="onv-m-3" style="background: #3b82f6; color: white; padding: 8px; border-radius: 4px; font-size: 12px;">m-3</div>
                        </div>
                        <div style="background: #f8fafc; border: 2px dashed #e5e7eb; padding: 0px; border-radius: 6px;">
                            <div class="onv-m-4" style="background: #3b82f6; color: white; padding: 8px; border-radius: 4px; font-size: 12px;">m-4</div>
                        </div>
                        <div style="background: #f8fafc; border: 2px dashed #e5e7eb; padding: 0px; border-radius: 6px;">
                            <div class="onv-m-5" style="background: #3b82f6; color: white; padding: 8px; border-radius: 4px; font-size: 12px;">m-5</div>
                        </div>
                    </div>
                    <p style="font-size: 13px; color: #6b7280; margin-top: 8px;">Class: <code>.onv-m-{0-10}</code>, <code>.onv-m-auto</code></p>
                </div>

                <!-- Margin Directional -->
                <div>
                    <h4 style="margin-bottom: 12px; color: #374151; font-weight: 600;">Directional Margin</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
                        <div style="text-align: center;">
                            <p style="font-weight: 600; margin-bottom: 8px; font-size: 14px;">Margin Top</p>
                            <div style="background: #f8fafc; border: 2px dashed #e5e7eb; padding: 16px; border-radius: 6px;">
                                <div class="onv-mt-4" style="background: #10b981; color: white; padding: 12px; border-radius: 4px; font-size: 12px;">.onv-mt-4</div>
                            </div>
                        </div>
                        <div style="text-align: center;">
                            <p style="font-weight: 600; margin-bottom: 8px; font-size: 14px;">Margin Bottom</p>
                            <div style="background: #f8fafc; border: 2px dashed #e5e7eb; padding: 16px; border-radius: 6px;">
                                <div class="onv-mb-4" style="background: #f59e0b; color: white; padding: 12px; border-radius: 4px; font-size: 12px;">.onv-mb-4</div>
                            </div>
                        </div>
                        <div style="text-align: center;">
                            <p style="font-weight: 600; margin-bottom: 8px; font-size: 14px;">Margin Left</p>
                            <div style="background: #f8fafc; border: 2px dashed #e5e7eb; padding: 16px; border-radius: 6px;">
                                <div class="onv-ml-4" style="background: #8b5cf6; color: white; padding: 12px; border-radius: 4px; font-size: 12px;">.onv-ml-4</div>
                            </div>
                        </div>
                        <div style="text-align: center;">
                            <p style="font-weight: 600; margin-bottom: 8px; font-size: 14px;">Margin Right</p>
                            <div style="background: #f8fafc; border: 2px dashed #e5e7eb; padding: 16px; border-radius: 6px;">
                                <div class="onv-mr-4" style="background: #ef4444; color: white; padding: 12px; border-radius: 4px; font-size: 12px;">.onv-mr-4</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Margin X & Y -->
                <div>
                    <h4 style="margin-bottom: 12px; color: #374151; font-weight: 600;">Margin X & Y Axis</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
                        <div style="text-align: center;">
                            <p style="font-weight: 600; margin-bottom: 8px; font-size: 14px;">Margin X (Left & Right)</p>
                            <div style="background: #f8fafc; border: 2px dashed #e5e7eb; padding: 16px; border-radius: 6px;">
                                <div class="onv-mx-4" style="background: #06b6d4; color: white; padding: 12px; border-radius: 4px; font-size: 12px;">.onv-mx-4</div>
                            </div>
                        </div>
                        <div style="text-align: center;">
                            <p style="font-weight: 600; margin-bottom: 8px; font-size: 14px;">Margin Y (Top & Bottom)</p>
                            <div style="background: #f8fafc; border: 2px dashed #e5e7eb; padding: 16px; border-radius: 6px;">
                                <div class="onv-my-4" style="background: #ec4899; color: white; padding: 12px; border-radius: 4px; font-size: 12px;">.onv-my-4</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Padding -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Padding</h2>
            <p class="onv-section-description">Kontrol jarak dalam elemen dengan utilitas padding yang konsisten.</p>

            <div style="display: grid; gap: 24px;">
                <!-- Padding All -->
                <div>
                    <h4 style="margin-bottom: 12px; color: #374151; font-weight: 600;">Padding All Sides</h4>
                    <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: flex-start;">
                        <div class="onv-p-0" style="background: #dbeafe; border: 2px solid #3b82f6; border-radius: 6px; font-size: 12px; color: #1e40af;">
                            <div style="background: #3b82f6; color: white; padding: 4px 8px; border-radius: 2px;">p-0</div>
                        </div>
                        <div class="onv-p-1" style="background: #dbeafe; border: 2px solid #3b82f6; border-radius: 6px; font-size: 12px; color: #1e40af;">
                            <div style="background: #3b82f6; color: white; padding: 4px 8px; border-radius: 2px;">p-1</div>
                        </div>
                        <div class="onv-p-2" style="background: #dbeafe; border: 2px solid #3b82f6; border-radius: 6px; font-size: 12px; color: #1e40af;">
                            <div style="background: #3b82f6; color: white; padding: 4px 8px; border-radius: 2px;">p-2</div>
                        </div>
                        <div class="onv-p-3" style="background: #dbeafe; border: 2px solid #3b82f6; border-radius: 6px; font-size: 12px; color: #1e40af;">
                            <div style="background: #3b82f6; color: white; padding: 4px 8px; border-radius: 2px;">p-3</div>
                        </div>
                        <div class="onv-p-4" style="background: #dbeafe; border: 2px solid #3b82f6; border-radius: 6px; font-size: 12px; color: #1e40af;">
                            <div style="background: #3b82f6; color: white; padding: 4px 8px; border-radius: 2px;">p-4</div>
                        </div>
                        <div class="onv-p-5" style="background: #dbeafe; border: 2px solid #3b82f6; border-radius: 6px; font-size: 12px; color: #1e40af;">
                            <div style="background: #3b82f6; color: white; padding: 4px 8px; border-radius: 2px;">p-5</div>
                        </div>
                    </div>
                    <p style="font-size: 13px; color: #6b7280; margin-top: 8px;">Class: <code>.onv-p-{0-10}</code></p>
                </div>

                <!-- Padding Directional -->
                <div>
                    <h4 style="margin-bottom: 12px; color: #374151; font-weight: 600;">Directional Padding</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 16px;">
                        <div style="text-align: center;">
                            <p style="font-weight: 600; margin-bottom: 8px; font-size: 14px;">Padding Top</p>
                            <div class="onv-pt-4" style="background: #dcfce7; border: 2px solid #10b981; border-radius: 6px;">
                                <div style="background: #10b981; color: white; padding: 8px; border-radius: 2px; font-size: 12px;">.onv-pt-4</div>
                            </div>
                        </div>
                        <div style="text-align: center;">
                            <p style="font-weight: 600; margin-bottom: 8px; font-size: 14px;">Padding Bottom</p>
                            <div class="onv-pb-4" style="background: #fef3c7; border: 2px solid #f59e0b; border-radius: 6px;">
                                <div style="background: #f59e0b; color: white; padding: 8px; border-radius: 2px; font-size: 12px;">.onv-pb-4</div>
                            </div>
                        </div>
                        <div style="text-align: center;">
                            <p style="font-weight: 600; margin-bottom: 8px; font-size: 14px;">Padding Left</p>
                            <div class="onv-pl-4" style="background: #ede9fe; border: 2px solid #8b5cf6; border-radius: 6px;">
                                <div style="background: #8b5cf6; color: white; padding: 8px; border-radius: 2px; font-size: 12px;">.onv-pl-4</div>
                            </div>
                        </div>
                        <div style="text-align: center;">
                            <p style="font-weight: 600; margin-bottom: 8px; font-size: 14px;">Padding Right</p>
                            <div class="onv-pr-4" style="background: #fecaca; border: 2px solid #ef4444; border-radius: 6px;">
                                <div style="background: #ef4444; color: white; padding: 8px; border-radius: 2px; font-size: 12px;">.onv-pr-4</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Padding X & Y -->
                <div>
                    <h4 style="margin-bottom: 12px; color: #374151; font-weight: 600;">Padding X & Y Axis</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
                        <div style="text-align: center;">
                            <p style="font-weight: 600; margin-bottom: 8px; font-size: 14px;">Padding X (Left & Right)</p>
                            <div class="onv-px-4" style="background: #cffafe; border: 2px solid #06b6d4; border-radius: 6px;">
                                <div style="background: #06b6d4; color: white; padding: 12px; border-radius: 2px; font-size: 12px;">.onv-px-4</div>
                            </div>
                        </div>
                        <div style="text-align: center;">
                            <p style="font-weight: 600; margin-bottom: 8px; font-size: 14px;">Padding Y (Top & Bottom)</p>
                            <div class="onv-py-4" style="background: #fce7f3; border: 2px solid #ec4899; border-radius: 6px;">
                                <div style="background: #ec4899; color: white; padding: 12px; border-radius: 2px; font-size: 12px;">.onv-py-4</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Gap -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Gap</h2>
            <p class="onv-section-description">Kontrol jarak antar elemen dalam flexbox dan grid layout.</p>

            <div style="display: grid; gap: 24px;">
                <!-- Gap All -->
                <div>
                    <h4 style="margin-bottom: 12px; color: #374151; font-weight: 600;">Gap All</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
                        <div>
                            <p style="font-weight: 600; margin-bottom: 8px; font-size: 14px;">Gap 1</p>
                            <div class="onv-gap-1" style="display: flex; background: #f8fafc; padding: 12px; border-radius: 6px; border: 2px dashed #e5e7eb;">
                                <div style="background: #3b82f6; color: white; padding: 8px; border-radius: 4px; font-size: 12px;">Item 1</div>
                                <div style="background: #10b981; color: white; padding: 8px; border-radius: 4px; font-size: 12px;">Item 2</div>
                                <div style="background: #f59e0b; color: white; padding: 8px; border-radius: 4px; font-size: 12px;">Item 3</div>
                            </div>
                            <code style="font-size: 12px; color: #6b7280;">.onv-gap-1</code>
                        </div>
                        <div>
                            <p style="font-weight: 600; margin-bottom: 8px; font-size: 14px;">Gap 2</p>
                            <div class="onv-gap-2" style="display: flex; background: #f8fafc; padding: 12px; border-radius: 6px; border: 2px dashed #e5e7eb;">
                                <div style="background: #3b82f6; color: white; padding: 8px; border-radius: 4px; font-size: 12px;">Item 1</div>
                                <div style="background: #10b981; color: white; padding: 8px; border-radius: 4px; font-size: 12px;">Item 2</div>
                                <div style="background: #f59e0b; color: white; padding: 8px; border-radius: 4px; font-size: 12px;">Item 3</div>
                            </div>
                            <code style="font-size: 12px; color: #6b7280;">.onv-gap-2</code>
                        </div>
                        <div>
                            <p style="font-weight: 600; margin-bottom: 8px; font-size: 14px;">Gap 4</p>
                            <div class="onv-gap-4" style="display: flex; background: #f8fafc; padding: 12px; border-radius: 6px; border: 2px dashed #e5e7eb;">
                                <div style="background: #3b82f6; color: white; padding: 8px; border-radius: 4px; font-size: 12px;">Item 1</div>
                                <div style="background: #10b981; color: white; padding: 8px; border-radius: 4px; font-size: 12px;">Item 2</div>
                                <div style="background: #f59e0b; color: white; padding: 8px; border-radius: 4px; font-size: 12px;">Item 3</div>
                            </div>
                            <code style="font-size: 12px; color: #6b7280;">.onv-gap-4</code>
                        </div>
                    </div>
                </div>

                <!-- Gap X & Y -->
                <div>
                    <h4 style="margin-bottom: 12px; color: #374151; font-weight: 600;">Gap X & Y Axis</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
                        <div>
                            <p style="font-weight: 600; margin-bottom: 8px; font-size: 14px;">Gap X (Column Gap)</p>
                            <div class="onv-gap-x-4" style="display: grid; grid-template-columns: repeat(2, 1fr); background: #f8fafc; padding: 12px; border-radius: 6px; border: 2px dashed #e5e7eb;">
                                <div style="background: #06b6d4; color: white; padding: 8px; border-radius: 4px; font-size: 12px;">Item 1</div>
                                <div style="background: #ec4899; color: white; padding: 8px; border-radius: 4px; font-size: 12px;">Item 2</div>
                                <div style="background: #8b5cf6; color: white; padding: 8px; border-radius: 4px; font-size: 12px;">Item 3</div>
                                <div style="background: #ef4444; color: white; padding: 8px; border-radius: 4px; font-size: 12px;">Item 4</div>
                            </div>
                            <code style="font-size: 12px; color: #6b7280;">.onv-gap-x-4</code>
                        </div>
                        <div>
                            <p style="font-weight: 600; margin-bottom: 8px; font-size: 14px;">Gap Y (Row Gap)</p>
                            <div class="onv-gap-y-4" style="display: grid; grid-template-columns: repeat(2, 1fr); background: #f8fafc; padding: 12px; border-radius: 6px; border: 2px dashed #e5e7eb;">
                                <div style="background: #06b6d4; color: white; padding: 8px; border-radius: 4px; font-size: 12px;">Item 1</div>
                                <div style="background: #ec4899; color: white; padding: 8px; border-radius: 4px; font-size: 12px;">Item 2</div>
                                <div style="background: #8b5cf6; color: white; padding: 8px; border-radius: 4px; font-size: 12px;">Item 3</div>
                                <div style="background: #ef4444; color: white; padding: 8px; border-radius: 4px; font-size: 12px;">Item 4</div>
                            </div>
                            <code style="font-size: 12px; color: #6b7280;">.onv-gap-y-4</code>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Spacing Scale -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Spacing Scale</h2>
            <p class="onv-section-description">Sistem skala spacing berdasarkan variabel --set-distance dengan multiplier yang konsisten.</p>

            <div style="overflow-x: auto; margin: 24px 0;">
                <table style="width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);">
                    <thead>
                        <tr style="background: #f8fafc;">
                            <th style="padding: 12px 16px; text-align: left; font-weight: 600; color: #374151; border-bottom: 1px solid #e5e7eb;">Scale</th>
                            <th style="padding: 12px 16px; text-align: left; font-weight: 600; color: #374151; border-bottom: 1px solid #e5e7eb;">Multiplier</th>
                            <th style="padding: 12px 16px; text-align: left; font-weight: 600; color: #374151; border-bottom: 1px solid #e5e7eb;">CSS Value</th>
                            <th style="padding: 12px 16px; text-align: left; font-weight: 600; color: #374151; border-bottom: 1px solid #e5e7eb;">Visual</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>0</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">0</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>0</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">
                                <div style="width: 0; height: 16px; background: #3b82f6;"></div>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>1</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">0.25</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>calc(var(--set-distance) * 0.25)</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">
                                <div style="width: 4px; height: 16px; background: #3b82f6;"></div>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>2</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">0.5</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>calc(var(--set-distance) * 0.5)</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">
                                <div style="width: 8px; height: 16px; background: #3b82f6;"></div>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>3</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">1</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>var(--set-distance)</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">
                                <div style="width: 16px; height: 16px; background: #3b82f6;"></div>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>4</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">1.5</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>calc(var(--set-distance) * 1.5)</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">
                                <div style="width: 24px; height: 16px; background: #3b82f6;"></div>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>5</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">3</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>calc(var(--set-distance) * 3)</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">
                                <div style="width: 48px; height: 16px; background: #3b82f6;"></div>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>6</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">4</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>calc(var(--set-distance) * 4)</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">
                                <div style="width: 64px; height: 16px; background: #3b82f6;"></div>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>10</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">8</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>calc(var(--set-distance) * 8)</code></td>
                            <td style="padding: 12px 16px;">
                                <div style="width: 128px; height: 16px; background: #3b82f6;"></div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <!-- Usage Examples -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Usage Examples</h2>
            <p class="onv-section-description">Contoh penggunaan spacing dalam berbagai konteks layout dan komponen.</p>

            <div style="display: grid; gap: 24px;">
                <!-- Example 1: Card Layout -->
                <div>
                    <h4 style="margin-bottom: 12px; color: #374151; font-weight: 600;">Card Layout dengan Spacing</h4>
                    <div class="onv-p-6 onv-m-4" style="background: white; border-radius: 8px; border: 1px solid #e5e7eb; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);">
                        <h3 class="onv-mb-3" style="font-size: 18px; font-weight: 600; color: #374151;">Card Title</h3>
                        <p class="onv-mb-4" style="color: #6b7280; line-height: 1.6;">This card uses .onv-p-6 for inner padding, .onv-m-4 for outer margin, .onv-mb-3 for title margin, and .onv-mb-4 for paragraph margin.</p>
                        <div class="onv-gap-2" style="display: flex;">
                            <button class="onv-px-4 onv-py-2" style="background: #3b82f6; color: white; border: none; border-radius: 4px; font-size: 14px; cursor: pointer;">Primary</button>
                            <button class="onv-px-4 onv-py-2" style="background: #6b7280; color: white; border: none; border-radius: 4px; font-size: 14px; cursor: pointer;">Secondary</button>
                        </div>
                    </div>
                    <p style="font-size: 13px; color: #6b7280; margin-top: 8px;">Classes used: <code>.onv-p-6</code>, <code>.onv-m-4</code>, <code>.onv-mb-3</code>, <code>.onv-mb-4</code>, <code>.onv-gap-2</code>, <code>.onv-px-4</code>, <code>.onv-py-2</code></p>
                </div>

                <!-- Example 2: Grid Layout -->
                <div>
                    <h4 style="margin-bottom: 12px; color: #374151; font-weight: 600;">Grid Layout dengan Gap</h4>
                    <div class="onv-gap-4" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));">
                        <div class="onv-p-4" style="background: #dbeafe; border-radius: 6px; text-align: center;">
                            <div style="color: #1e40af; font-weight: 600;">Grid Item 1</div>
                        </div>
                        <div class="onv-p-4" style="background: #dcfce7; border-radius: 6px; text-align: center;">
                            <div style="color: #166534; font-weight: 600;">Grid Item 2</div>
                        </div>
                        <div class="onv-p-4" style="background: #fef3c7; border-radius: 6px; text-align: center;">
                            <div style="color: #92400e; font-weight: 600;">Grid Item 3</div>
                        </div>
                        <div class="onv-p-4" style="background: #fecaca; border-radius: 6px; text-align: center;">
                            <div style="color: #991b1b; font-weight: 600;">Grid Item 4</div>
                        </div>
                    </div>
                    <p style="font-size: 13px; color: #6b7280; margin-top: 8px;">Classes used: <code>.onv-gap-4</code>, <code>.onv-p-4</code></p>
                </div>

                <!-- Example 3: Navigation -->
                <div>
                    <h4 style="margin-bottom: 12px; color: #374151; font-weight: 600;">Navigation dengan Spacing</h4>
                    <nav class="onv-px-6 onv-py-3" style="background: #374151; border-radius: 8px;">
                        <div class="onv-gap-6" style="display: flex; align-items: center;">
                            <div style="color: white; font-weight: 600;">Logo</div>
                            <div class="onv-gap-4 onv-ml-auto" style="display: flex;">
                                <a class="onv-px-3 onv-py-1" style="color: #d1d5db; text-decoration: none; border-radius: 4px; transition: all 0.2s;" href="#">Home</a>
                                <a class="onv-px-3 onv-py-1" style="color: #d1d5db; text-decoration: none; border-radius: 4px; transition: all 0.2s;" href="#">About</a>
                                <a class="onv-px-3 onv-py-1" style="color: #d1d5db; text-decoration: none; border-radius: 4px; transition: all 0.2s;" href="#">Contact</a>
                            </div>
                        </div>
                    </nav>
                    <p style="font-size: 13px; color: #6b7280; margin-top: 8px;">Classes used: <code>.onv-px-6</code>, <code>.onv-py-3</code>, <code>.onv-gap-6</code>, <code>.onv-gap-4</code>, <code>.onv-ml-auto</code>, <code>.onv-px-3</code>, <code>.onv-py-1</code></p>
                </div>
            </div>
        </section>

        <!-- Usage Guidelines -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Usage Guidelines</h2>
            <p class="onv-section-description">Panduan penggunaan utilitas spacing untuk hasil terbaik.</p>

            <h3 class="onv-subsection-title">Kapan Menggunakan Spacing Tertentu</h3>
            <ul style="margin: 16px 0; padding-left: 24px; color: #4b5563; line-height: 1.6;">
                <li><strong>Margin:</strong> Untuk jarak antar komponen atau elemen yang terpisah</li>
                <li><strong>Padding:</strong> Untuk ruang dalam suatu kontainer atau komponen</li>
                <li><strong>Gap:</strong> Untuk jarak antar item dalam flexbox atau grid layout</li>
                <li><strong>Auto Margin:</strong> Untuk centering atau pushing elemen ke sisi tertentu</li>
                <li><strong>X/Y Axis:</strong> Untuk mengatur spacing hanya pada sumbu horizontal atau vertikal</li>
            </ul>

            <h3 class="onv-subsection-title">Best Practices</h3>
            <ul style="margin: 16px 0; padding-left: 24px; color: #4b5563; line-height: 1.6;">
                <li>Gunakan skala spacing yang konsisten untuk harmoni visual</li>
                <li>Mulai dengan spacing kecil (1-3) dan tingkatkan sesuai kebutuhan</li>
                <li>Gunakan gap untuk flexbox/grid daripada margin pada child elements</li>
                <li>Kombinasikan margin auto dengan width untuk centering horizontal</li>
                <li>Pertimbangkan responsive design saat menggunakan spacing besar</li>
            </ul>

            <h3 class="onv-subsection-title">Spacing Scale Guidelines</h3>
            <ul style="margin: 16px 0; padding-left: 24px; color: #4b5563; line-height: 1.6;">
                <li><strong>0-2:</strong> Untuk spacing kecil seperti antara text dan icon</li>
                <li><strong>3-4:</strong> Untuk spacing standar dalam komponen</li>
                <li><strong>5-6:</strong> Untuk spacing antar section atau komponen besar</li>
                <li><strong>7-10:</strong> Untuk spacing layout utama atau hero section</li>
                <li><strong>Auto:</strong> Untuk alignment dan distribution dalam layout</li>
            </ul>
        </section>

        <!-- CSS Classes Reference -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">CSS Classes Reference</h2>
            <p class="onv-section-description">Daftar lengkap class CSS yang tersedia untuk utilitas spacing.</p>

            <div style="overflow-x: auto; margin: 24px 0;">
                <table style="width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);">
                    <thead>
                        <tr style="background: #f8fafc;">
                            <th style="padding: 12px 16px; text-align: left; font-weight: 600; color: #374151; border-bottom: 1px solid #e5e7eb;">Property</th>
                            <th style="padding: 12px 16px; text-align: left; font-weight: 600; color: #374151; border-bottom: 1px solid #e5e7eb;">Class Pattern</th>
                            <th style="padding: 12px 16px; text-align: left; font-weight: 600; color: #374151; border-bottom: 1px solid #e5e7eb;">Values</th>
                            <th style="padding: 12px 16px; text-align: left; font-weight: 600; color: #374151; border-bottom: 1px solid #e5e7eb;">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Margin All</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-m-{size}</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">0-10, auto</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Margin pada semua sisi</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Margin Directional</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-m{t|b|l|r}-{size}</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">0-10, auto</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Margin per sisi (top, bottom, left, right)</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Margin Axis</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-m{x|y}-{size}</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">0-10, auto</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Margin horizontal (x) atau vertical (y)</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Padding All</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-p-{size}</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">0-10</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Padding pada semua sisi</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Padding Directional</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-p{t|b|l|r}-{size}</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">0-10</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Padding per sisi (top, bottom, left, right)</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Padding Axis</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-p{x|y}-{size}</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">0-10</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Padding horizontal (x) atau vertical (y)</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Gap All</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-gap-{size}</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">0-10</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Gap untuk flexbox dan grid</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px;">Gap Axis</td>
                            <td style="padding: 12px 16px;"><code>.onv-gap-{x|y}-{size}</code></td>
                            <td style="padding: 12px 16px;">0-10</td>
                            <td style="padding: 12px 16px;">Column gap (x) atau row gap (y)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </div>
</template>