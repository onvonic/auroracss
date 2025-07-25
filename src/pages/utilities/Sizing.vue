<template>
    <div>
        <h1 class="onv-page-title">Sizing</h1>
        <p class="onv-page-subtitle">Utilitas sizing untuk mengontrol width, height, min/max width/height pada elemen dengan sistem yang konsisten berdasarkan variabel --set-distance.</p>

        <!-- Width -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Width</h2>
            <p class="onv-section-description">Kontrol lebar elemen dengan berbagai unit dan nilai yang fleksibel.</p>

            <div style="display: grid; gap: 24px;">
                <!-- Width Numeric -->
                <div>
                    <h4 style="margin-bottom: 12px; color: #374151; font-weight: 600;">Width Numeric (rem based)</h4>
                    <div style="display: flex; gap: 8px; flex-wrap: wrap; align-items: flex-end;">
                        <div class="onv-w-4" style="background: #3b82f6; height: 32px; border-radius: 4px; display: flex; align-items: center; justify-content: center; color: white; font-size: 11px;">w-4</div>
                        <div class="onv-w-8" style="background: #3b82f6; height: 32px; border-radius: 4px; display: flex; align-items: center; justify-content: center; color: white; font-size: 11px;">w-8</div>
                        <div class="onv-w-12" style="background: #3b82f6; height: 32px; border-radius: 4px; display: flex; align-items: center; justify-content: center; color: white; font-size: 11px;">w-12</div>
                        <div class="onv-w-16" style="background: #3b82f6; height: 32px; border-radius: 4px; display: flex; align-items: center; justify-content: center; color: white; font-size: 11px;">w-16</div>
                        <div class="onv-w-20" style="background: #3b82f6; height: 32px; border-radius: 4px; display: flex; align-items: center; justify-content: center; color: white; font-size: 11px;">w-20</div>
                    </div>
                    <p style="font-size: 13px; color: #6b7280; margin-top: 8px;">Class: <code>.onv-w-{0-96}</code></p>
                </div>

                <!-- Width Percentage -->
                <div>
                    <h4 style="margin-bottom: 12px; color: #374151; font-weight: 600;">Width Percentage</h4>
                    <div style="background: #f8fafc; padding: 16px; border-radius: 8px; border: 2px dashed #e5e7eb;">
                        <div class="onv-w-25" style="background: #3b82f6; height: 24px; border-radius: 4px; margin-bottom: 8px; display: flex; align-items: center; justify-content: center; color: white; font-size: 12px;">w-25 (25%)</div>
                        <div class="onv-w-50" style="background: #3b82f6; height: 24px; border-radius: 4px; margin-bottom: 8px; display: flex; align-items: center; justify-content: center; color: white; font-size: 12px;">w-50 (50%)</div>
                        <div class="onv-w-75" style="background: #3b82f6; height: 24px; border-radius: 4px; margin-bottom: 8px; display: flex; align-items: center; justify-content: center; color: white; font-size: 12px;">w-75 (75%)</div>
                        <div class="onv-w-100" style="background: #3b82f6; height: 24px; border-radius: 4px; display: flex; align-items: center; justify-content: center; color: white; font-size: 12px;">w-100 (100%)</div>
                    </div>
                    <p style="font-size: 13px; color: #6b7280; margin-top: 8px;">Class: <code>.onv-w-{10,20,25,30,33,40,50,60,66,70,75,80,83,90,91,100}</code></p>
                </div>

                <!-- Width Special -->
                <div>
                    <h4 style="margin-bottom: 12px; color: #374151; font-weight: 600;">Width Special Values</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 12px;">
                        <div style="text-align: center;">
                            <div class="onv-w-auto" style="background: #dbeafe; border: 2px solid #3b82f6; padding: 12px; border-radius: 6px; color: #1e40af; font-size: 12px; font-weight: 600;">w-auto</div>
                            <p style="font-size: 11px; color: #6b7280; margin-top: 4px;">Auto width</p>
                        </div>
                        <div style="text-align: center;">
                            <div class="onv-w-full" style="background: #dbeafe; border: 2px solid #3b82f6; padding: 12px; border-radius: 6px; color: #1e40af; font-size: 12px; font-weight: 600;">w-full</div>
                            <p style="font-size: 11px; color: #6b7280; margin-top: 4px;">100% width</p>
                        </div>
                        <div style="text-align: center;">
                            <div class="onv-w-screen" style="background: #dbeafe; border: 2px solid #3b82f6; padding: 12px; border-radius: 6px; color: #1e40af; font-size: 12px; font-weight: 600;">w-screen</div>
                            <p style="font-size: 11px; color: #6b7280; margin-top: 4px;">100vw width</p>
                        </div>
                        <div style="text-align: center;">
                            <div class="onv-w-fit" style="background: #dbeafe; border: 2px solid #3b82f6; padding: 12px; border-radius: 6px; color: #1e40af; font-size: 12px; font-weight: 600;">w-fit</div>
                            <p style="font-size: 11px; color: #6b7280; margin-top: 4px;">Fit content</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Height -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Height</h2>
            <p class="onv-section-description">Kontrol tinggi elemen dengan berbagai unit dan nilai yang fleksibel.</p>

            <div style="display: grid; gap: 24px;">
                <!-- Height Numeric -->
                <div>
                    <h4 style="margin-bottom: 12px; color: #374151; font-weight: 600;">Height Numeric (rem based)</h4>
                    <div style="display: flex; gap: 8px; align-items: flex-end;">
                        <div class="onv-h-4" style="background: #10b981; width: 48px; border-radius: 4px; display: flex; align-items: end; justify-content: center; color: white; font-size: 10px; padding: 4px;">h-4</div>
                        <div class="onv-h-8" style="background: #10b981; width: 48px; border-radius: 4px; display: flex; align-items: end; justify-content: center; color: white; font-size: 10px; padding: 4px;">h-8</div>
                        <div class="onv-h-12" style="background: #10b981; width: 48px; border-radius: 4px; display: flex; align-items: end; justify-content: center; color: white; font-size: 10px; padding: 4px;">h-12</div>
                        <div class="onv-h-16" style="background: #10b981; width: 48px; border-radius: 4px; display: flex; align-items: end; justify-content: center; color: white; font-size: 10px; padding: 4px;">h-16</div>
                        <div class="onv-h-20" style="background: #10b981; width: 48px; border-radius: 4px; display: flex; align-items: end; justify-content: center; color: white; font-size: 10px; padding: 4px;">h-20</div>
                    </div>
                    <p style="font-size: 13px; color: #6b7280; margin-top: 8px;">Class: <code>.onv-h-{0-96}</code></p>
                </div>

                <!-- Height Percentage -->
                <div>
                    <h4 style="margin-bottom: 12px; color: #374151; font-weight: 600;">Height Percentage</h4>
                    <div style="background: #f8fafc; padding: 16px; border-radius: 8px; border: 2px dashed #e5e7eb; height: 120px; display: flex; gap: 12px; align-items: flex-end;">
                        <div class="onv-h-25" style="background: #10b981; width: 40px; border-radius: 4px; display: flex; align-items: end; justify-content: center; color: white; font-size: 10px; writing-mode: vertical-rl; text-orientation: mixed; padding: 4px;">h-25</div>
                        <div class="onv-h-50" style="background: #10b981; width: 40px; border-radius: 4px; display: flex; align-items: end; justify-content: center; color: white; font-size: 10px; writing-mode: vertical-rl; text-orientation: mixed; padding: 4px;">h-50</div>
                        <div class="onv-h-75" style="background: #10b981; width: 40px; border-radius: 4px; display: flex; align-items: end; justify-content: center; color: white; font-size: 10px; writing-mode: vertical-rl; text-orientation: mixed; padding: 4px;">h-75</div>
                        <div class="onv-h-100" style="background: #10b981; width: 40px; border-radius: 4px; display: flex; align-items: end; justify-content: center; color: white; font-size: 10px; writing-mode: vertical-rl; text-orientation: mixed; padding: 4px;">h-100</div>
                    </div>
                    <p style="font-size: 13px; color: #6b7280; margin-top: 8px;">Class: <code>.onv-h-{10,20,25,30,33,40,50,60,66,70,75,80,83,90,100}</code></p>
                </div>

                <!-- Height Special -->
                <div>
                    <h4 style="margin-bottom: 12px; color: #374151; font-weight: 600;">Height Special Values</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 12px;">
                        <div style="text-align: center;">
                            <div class="onv-h-auto" style="background: #dcfce7; border: 2px solid #10b981; padding: 16px; border-radius: 6px; color: #166534; font-size: 12px; font-weight: 600;">h-auto</div>
                            <p style="font-size: 11px; color: #6b7280; margin-top: 4px;">Auto height</p>
                        </div>
                        <div style="text-align: center;">
                            <div class="onv-h-full" style="background: #dcfce7; border: 2px solid #10b981; padding: 16px; border-radius: 6px; color: #166534; font-size: 12px; font-weight: 600;">h-full</div>
                            <p style="font-size: 11px; color: #6b7280; margin-top: 4px;">100% height</p>
                        </div>
                        <div style="text-align: center;">
                            <div class="onv-h-screen" style="background: #dcfce7; border: 2px solid #10b981; padding: 16px; border-radius: 6px; color: #166534; font-size: 12px; font-weight: 600;">h-screen</div>
                            <p style="font-size: 11px; color: #6b7280; margin-top: 4px;">100vh height</p>
                        </div>
                        <div style="text-align: center;">
                            <div class="onv-h-fit" style="background: #dcfce7; border: 2px solid #10b981; padding: 16px; border-radius: 6px; color: #166534; font-size: 12px; font-weight: 600;">h-fit</div>
                            <p style="font-size: 11px; color: #6b7280; margin-top: 4px;">Fit content</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Min/Max Width -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Min & Max Width</h2>
            <p class="onv-section-description">Kontrol batas minimum dan maksimum lebar elemen.</p>

            <div style="display: grid; gap: 24px;">
                <!-- Min Width -->
                <div>
                    <h4 style="margin-bottom: 12px; color: #374151; font-weight: 600;">Min Width</h4>
                    <div style="background: #f8fafc; padding: 16px; border-radius: 8px; border: 2px dashed #e5e7eb;">
                        <div class="onv-min-w-32" style="background: #3b82f6; height: 32px; border-radius: 4px; display: flex; align-items: center; justify-content: center; color: white; font-size: 12px; margin-bottom: 8px;">min-w-32</div>
                        <div class="onv-min-w-48" style="background: #10b981; height: 32px; border-radius: 4px; display: flex; align-items: center; justify-content: center; color: white; font-size: 12px;">min-w-48</div>
                    </div>
                    <p style="font-size: 13px; color: #6b7280; margin-top: 8px;">Class: <code>.onv-min-w-{0-96}</code>, <code>.onv-min-w-{full,min,max,fit}</code></p>
                </div>

                <!-- Max Width -->
                <div>
                    <h4 style="margin-bottom: 12px; color: #374151; font-weight: 600;">Max Width</h4>
                    <div style="background: #f8fafc; padding: 16px; border-radius: 8px; border: 2px dashed #e5e7eb;">
                        <div class="onv-max-w-xs" style="background: #8b5cf6; height: 32px; border-radius: 4px; display: flex; align-items: center; justify-content: center; color: white; font-size: 12px; margin-bottom: 8px;">max-w-xs (20rem)</div>
                        <div class="onv-max-w-md" style="background: #ec4899; height: 32px; border-radius: 4px; display: flex; align-items: center; justify-content: center; color: white; font-size: 12px; margin-bottom: 8px;">max-w-md (28rem)</div>
                        <div class="onv-max-w-lg" style="background: #f59e0b; height: 32px; border-radius: 4px; display: flex; align-items: center; justify-content: center; color: white; font-size: 12px;">max-w-lg (32rem)</div>
                    </div>
                    <p style="font-size: 13px; color: #6b7280; margin-top: 8px;">Class: <code>.onv-max-w-{xs,sm,md,lg,xl,2xl,3xl,4xl,5xl,6xl,7xl}</code></p>
                </div>

                <!-- Max Width Prose -->
                <div>
                    <h4 style="margin-bottom: 12px; color: #374151; font-weight: 600;">Max Width Prose</h4>
                    <div class="onv-max-w-prose" style="background: #f0f9ff; border: 2px solid #0284c7; padding: 16px; border-radius: 8px; color: #0c4a6e;">
                        <p style="margin: 0; line-height: 1.6; font-size: 14px;">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Class menggunakan <code style="background: rgba(0,0,0,0.1); padding: 2px 4px; border-radius: 2px;">.onv-max-w-prose</code> untuk optimal reading width (65ch).
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Min/Max Height -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Min & Max Height</h2>
            <p class="onv-section-description">Kontrol batas minimum dan maksimum tinggi elemen.</p>

            <div style="display: grid; gap: 24px;">
                <!-- Min Height -->
                <div>
                    <h4 style="margin-bottom: 12px; color: #374151; font-weight: 600;">Min Height</h4>
                    <div style="background: #f8fafc; padding: 16px; border-radius: 8px; border: 2px dashed #e5e7eb; display: flex; gap: 12px; align-items: flex-end;">
                        <div class="onv-min-h-16" style="background: #3b82f6; width: 60px; border-radius: 4px; display: flex; align-items: end; justify-content: center; color: white; font-size: 10px; padding: 4px;">min-h-16</div>
                        <div class="onv-min-h-24" style="background: #10b981; width: 60px; border-radius: 4px; display: flex; align-items: end; justify-content: center; color: white; font-size: 10px; padding: 4px;">min-h-24</div>
                        <div class="onv-min-h-32" style="background: #f59e0b; width: 60px; border-radius: 4px; display: flex; align-items: end; justify-content: center; color: white; font-size: 10px; padding: 4px;">min-h-32</div>
                    </div>
                    <p style="font-size: 13px; color: #6b7280; margin-top: 8px;">Class: <code>.onv-min-h-{0-96}</code>, <code>.onv-min-h-{full,screen,min,max,fit}</code></p>
                </div>

                <!-- Max Height -->
                <div>
                    <h4 style="margin-bottom: 12px; color: #374151; font-weight: 600;">Max Height</h4>
                    <div style="background: #f8fafc; padding: 16px; border-radius: 8px; border: 2px dashed #e5e7eb; height: 120px; overflow: hidden; display: flex; gap: 12px; align-items: flex-start;">
                        <div class="onv-max-h-16" style="background: #8b5cf6; width: 60px; border-radius: 4px; color: white; font-size: 10px; padding: 8px; overflow: hidden;">
                            <div>max-h-16</div>
                            <div style="margin-top: 4px; font-size: 8px; opacity: 0.8;">Content limited to max height</div>
                        </div>
                        <div class="onv-max-h-24" style="background: #ec4899; width: 60px; border-radius: 4px; color: white; font-size: 10px; padding: 8px; overflow: hidden;">
                            <div>max-h-24</div>
                            <div style="margin-top: 4px; font-size: 8px; opacity: 0.8;">Content limited</div>
                        </div>
                    </div>
                    <p style="font-size: 13px; color: #6b7280; margin-top: 8px;">Class: <code>.onv-max-h-{0-96}</code>, <code>.onv-max-h-{none,full,screen,min,max,fit}</code></p>
                </div>
            </div>
        </section>

        <!-- Width & Height Combined -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Width & Height Combined (WH)</h2>
            <p class="onv-section-description">Utilitas untuk mengatur width dan height dengan nilai yang sama sekaligus, ideal untuk elemen persegi.</p>

            <div style="display: grid; gap: 24px;">
                <!-- WH Numeric -->
                <div>
                    <h4 style="margin-bottom: 12px; color: #374151; font-weight: 600;">WH Numeric (Square Elements)</h4>
                    <div style="display: flex; gap: 8px; align-items: flex-end; flex-wrap: wrap;">
                        <div class="onv-wh-4" style="background: #3b82f6; border-radius: 4px; display: flex; align-items: center; justify-content: center; color: white; font-size: 10px;">4</div>
                        <div class="onv-wh-6" style="background: #10b981; border-radius: 4px; display: flex; align-items: center; justify-content: center; color: white; font-size: 10px;">6</div>
                        <div class="onv-wh-8" style="background: #f59e0b; border-radius: 4px; display: flex; align-items: center; justify-content: center; color: white; font-size: 10px;">8</div>
                        <div class="onv-wh-10" style="background: #ef4444; border-radius: 4px; display: flex; align-items: center; justify-content: center; color: white; font-size: 10px;">10</div>
                        <div class="onv-wh-12" style="background: #8b5cf6; border-radius: 4px; display: flex; align-items: center; justify-content: center; color: white; font-size: 10px;">12</div>
                        <div class="onv-wh-16" style="background: #ec4899; border-radius: 4px; display: flex; align-items: center; justify-content: center; color: white; font-size: 10px;">16</div>
                        <div class="onv-wh-20" style="background: #06b6d4; border-radius: 4px; display: flex; align-items: center; justify-content: center; color: white; font-size: 10px;">20</div>
                    </div>
                    <p style="font-size: 13px; color: #6b7280; margin-top: 8px;">Class: <code>.onv-wh-{0-96}</code> - mengatur width dan height bersamaan</p>
                </div>

                <!-- WH Special -->
                <div>
                    <h4 style="margin-bottom: 12px; color: #374151; font-weight: 600;">WH Special Values</h4>
                    <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
                        <div class="onv-wh-auto" style="background: #dbeafe; border: 2px solid #3b82f6; padding: 16px; border-radius: 6px; color: #1e40af; font-size: 12px; font-weight: 600;">wh-auto</div>
                        <div class="onv-wh-fit" style="background: #dcfce7; border: 2px solid #10b981; padding: 16px; border-radius: 6px; color: #166534; font-size: 12px; font-weight: 600;">wh-fit</div>
                        <div class="onv-wh-min" style="background: #fef3c7; border: 2px solid #f59e0b; padding: 16px; border-radius: 6px; color: #92400e; font-size: 12px; font-weight: 600;">wh-min</div>
                        <div class="onv-wh-max" style="background: #fecaca; border: 2px solid #ef4444; padding: 16px; border-radius: 6px; color: #991b1b; font-size: 12px; font-weight: 600;">wh-max</div>
                    </div>
                    <p style="font-size: 13px; color: #6b7280; margin-top: 8px;">Class: <code>.onv-wh-{auto,full,min,max,fit}</code></p>
                </div>
            </div>
        </section>

        <!-- Usage Examples -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Usage Examples</h2>
            <p class="onv-section-description">Contoh penggunaan sizing dalam berbagai konteks layout dan komponen.</p>

            <div style="display: grid; gap: 24px;">
                <!-- Example 1: Card Layouts -->
                <div>
                    <h4 style="margin-bottom: 12px; color: #374151; font-weight: 600;">Card Layouts</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
                        <div class="onv-w-full onv-max-w-sm onv-h-48" style="background: white; border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);">
                            <div class="onv-wh-12" style="background: #3b82f6; border-radius: 50%; margin-bottom: 12px;"></div>
                            <h5 style="font-weight: 600; color: #374151; margin-bottom: 8px;">Fixed Size Card</h5>
                            <p style="color: #6b7280; font-size: 14px;">Uses .onv-max-w-sm and .onv-h-48</p>
                        </div>
                        <div class="onv-w-full onv-h-auto" style="background: white; border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);">
                            <div class="onv-wh-12" style="background: #10b981; border-radius: 50%; margin-bottom: 12px;"></div>
                            <h5 style="font-weight: 600; color: #374151; margin-bottom: 8px;">Auto Height Card</h5>
                            <p style="color: #6b7280; font-size: 14px;">Uses .onv-w-full and .onv-h-auto for flexible height</p>
                        </div>
                    </div>
                    <p style="font-size: 13px; color: #6b7280; margin-top: 8px;">Classes used: <code>.onv-w-full</code>, <code>.onv-max-w-sm</code>, <code>.onv-h-48</code>, <code>.onv-h-auto</code>, <code>.onv-wh-12</code></p>
                </div>

                <!-- Example 2: Responsive Images -->
                <div>
                    <h4 style="margin-bottom: 12px; color: #374151; font-weight: 600;">Responsive Images</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 16px;">
                        <div>
                            <div class="onv-w-full onv-h-32" style="background: linear-gradient(45deg, #3b82f6, #1d4ed8); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-weight: 600;">w-full h-32</div>
                            <p style="font-size: 12px; color: #6b7280; margin-top: 4px; text-align: center;">Full width, fixed height</p>
                        </div>
                        <div>
                            <div class="onv-wh-32" style="background: linear-gradient(45deg, #10b981, #059669); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-weight: 600; margin: 0 auto;">wh-32</div>
                            <p style="font-size: 12px; color: #6b7280; margin-top: 4px; text-align: center;">Square aspect ratio</p>
                        </div>
                        <div>
                            <div class="onv-w-full onv-h-auto onv-min-h-20" style="background: linear-gradient(45deg, #f59e0b, #d97706); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-weight: 600; padding: 16px;">w-full h-auto min-h-20</div>
                            <p style="font-size: 12px; color: #6b7280; margin-top: 4px; text-align: center;">Auto height with minimum</p>
                        </div>
                    </div>
                    <p style="font-size: 13px; color: #6b7280; margin-top: 8px;">Classes used: <code>.onv-w-full</code>, <code>.onv-h-32</code>, <code>.onv-wh-32</code>, <code>.onv-h-auto</code>, <code>.onv-min-h-20</code></p>
                </div>

                <!-- Example 3: Modal/Dialog -->
                <div>
                    <h4 style="margin-bottom: 12px; color: #374151; font-weight: 600;">Modal/Dialog Sizing</h4>
                    <div style="background: rgba(0,0,0,0.1); padding: 24px; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                        <div class="onv-w-full onv-max-w-md onv-h-auto onv-max-h-80" style="background: white; border-radius: 8px; padding: 24px; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);">
                            <h5 style="font-weight: 600; color: #374151; margin-bottom: 16px;">Modal Dialog</h5>
                            <p style="color: #6b7280; font-size: 14px; margin-bottom: 16px; line-height: 1.6;">
                                This modal uses .onv-w-full .onv-max-w-md for responsive width and .onv-h-auto .onv-max-h-80 for flexible height with maximum limit.
                            </p>
                            <div style="display: flex; gap: 8px; justify-content: flex-end;">
                                <button style="padding: 8px 16px; background: #6b7280; color: white; border: none; border-radius: 4px; font-size: 14px; cursor: pointer;">Cancel</button>
                                <button style="padding: 8px 16px; background: #3b82f6; color: white; border: none; border-radius: 4px; font-size: 14px; cursor: pointer;">Confirm</button>
                            </div>
                        </div>
                    </div>
                    <p style="font-size: 13px; color: #6b7280; margin-top: 8px;">Classes used: <code>.onv-w-full</code>, <code>.onv-max-w-md</code>, <code>.onv-h-auto</code>, <code>.onv-max-h-80</code></p>
                </div>

                <!-- Example 4: Icon Sizes -->
                <div>
                    <h4 style="margin-bottom: 12px; color: #374151; font-weight: 600;">Icon Sizes</h4>
                    <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
                        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
                            <div class="onv-wh-4" style="background: #3b82f6; border-radius: 4px; display: flex; align-items: center; justify-content: center; color: white; font-size: 10px;">♦</div>
                            <span style="font-size: 12px; color: #6b7280;">wh-4</span>
                        </div>
                        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
                            <div class="onv-wh-6" style="background: #10b981; border-radius: 4px; display: flex; align-items: center; justify-content: center; color: white; font-size: 12px;">♦</div>
                            <span style="font-size: 12px; color: #6b7280;">wh-6</span>
                        </div>
                        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
                            <div class="onv-wh-8" style="background: #f59e0b; border-radius: 4px; display: flex; align-items: center; justify-content: center; color: white; font-size: 14px;">♦</div>
                            <span style="font-size: 12px; color: #6b7280;">wh-8</span>
                        </div>
                        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
                            <div class="onv-wh-10" style="background: #ef4444; border-radius: 4px; display: flex; align-items: center; justify-content: center; color: white; font-size: 16px;">♦</div>
                            <span style="font-size: 12px; color: #6b7280;">wh-10</span>
                        </div>
                        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
                            <div class="onv-wh-12" style="background: #8b5cf6; border-radius: 4px; display: flex; align-items: center; justify-content: center; color: white; font-size: 18px;">♦</div>
                            <span style="font-size: 12px; color: #6b7280;">wh-12</span>
                        </div>
                    </div>
                    <p style="font-size: 13px; color: #6b7280; margin-top: 8px;">Classes used: <code>.onv-wh-{4,6,8,10,12}</code></p>
                </div>
            </div>
        </section>

        <!-- Sizing Scale Reference -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Sizing Scale Reference</h2>
            <p class="onv-section-description">Referensi lengkap sistem skala sizing berdasarkan variabel --set-distance.</p>

            <div style="overflow-x: auto; margin: 24px 0;">
                <table style="width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);">
                    <thead>
                        <tr style="background: #f8fafc;">
                            <th style="padding: 12px 16px; text-align: left; font-weight: 600; color: #374151; border-bottom: 1px solid #e5e7eb;">Scale</th>
                            <th style="padding: 12px 16px; text-align: left; font-weight: 600; color: #374151; border-bottom: 1px solid #e5e7eb;">Multiplier</th>
                            <th style="padding: 12px 16px; text-align: left; font-weight: 600; color: #374151; border-bottom: 1px solid #e5e7eb;">CSS Value</th>
                            <th style="padding: 12px 16px; text-align: left; font-weight: 600; color: #374151; border-bottom: 1px solid #e5e7eb;">Pixels (16px base)</th>
                            <th style="padding: 12px 16px; text-align: left; font-weight: 600; color: #374151; border-bottom: 1px solid #e5e7eb;">Visual</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>0</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">0</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>0</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">0px</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">
                                <div style="width: 0; height: 16px; background: #3b82f6;"></div>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>1</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">0.25</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>calc(var(--set-distance) * 0.25)</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">4px</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">
                                <div style="width: 4px; height: 16px; background: #3b82f6;"></div>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>2</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">0.5</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>calc(var(--set-distance) * 0.5)</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">8px</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">
                                <div style="width: 8px; height: 16px; background: #3b82f6;"></div>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>3</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">1</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>var(--set-distance)</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">16px</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">
                                <div style="width: 16px; height: 16px; background: #3b82f6;"></div>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>4</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">1.5</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>calc(var(--set-distance) * 1.5)</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">24px</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">
                                <div style="width: 24px; height: 16px; background: #3b82f6;"></div>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>8</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">4</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>calc(var(--set-distance) * 4)</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">64px</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">
                                <div style="width: 64px; height: 16px; background: #3b82f6;"></div>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>16</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">12</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>calc(var(--set-distance) * 12)</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">192px</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">
                                <div style="width: 128px; height: 16px; background: #3b82f6;"></div>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px;"><code>96</code></td>
                            <td style="padding: 12px 16px;">64</td>
                            <td style="padding: 12px 16px;"><code>calc(var(--set-distance) * 64)</code></td>
                            <td style="padding: 12px 16px;">1024px</td>
                            <td style="padding: 12px 16px;">
                                <div style="width: 200px; height: 16px; background: #3b82f6;"></div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <!-- Usage Guidelines -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Usage Guidelines</h2>
            <p class="onv-section-description">Panduan penggunaan utilitas sizing untuk hasil terbaik.</p>

            <h3 class="onv-subsection-title">Kapan Menggunakan Sizing Tertentu</h3>
            <ul style="margin: 16px 0; padding-left: 24px; color: #4b5563; line-height: 1.6;">
                <li><strong>Fixed Sizes (w-4, h-8):</strong> Untuk elemen dengan ukuran yang tidak berubah seperti icon, avatar kecil</li>
                <li><strong>Percentage (w-50, h-75):</strong> Untuk layout responsif yang mengikuti parent container</li>
                <li><strong>Special Values (w-full, h-screen):</strong> Untuk full width/height atau viewport sizing</li>
                <li><strong>Min/Max Width:</strong> Untuk mengontrol batas sizing pada layout responsif</li>
                <li><strong>WH Combined:</strong> Untuk elemen persegi seperti avatar, icon button, thumbnail</li>
            </ul>

            <h3 class="onv-subsection-title">Best Practices</h3>
            <ul style="margin: 16px 0; padding-left: 24px; color: #4b5563; line-height: 1.6;">
                <li>Gunakan skala sizing yang konsisten untuk harmoni visual</li>
                <li>Kombinasikan dengan min/max untuk layout yang fleksibel tapi terkontrol</li>
                <li>Gunakan percentage untuk responsive design dan fixed sizes untuk elemen UI</li>
                <li>Pertimbangkan content yang akan ditampilkan saat menentukan ukuran</li>
                <li>Gunakan max-width untuk mencegah layout yang terlalu lebar pada layar besar</li>
            </ul>

            <h3 class="onv-subsection-title">Responsive Considerations</h3>
            <ul style="margin: 16px 0; padding-left: 24px; color: #4b5563; line-height: 1.6;">
                <li>Kombinasikan w-full dengan max-w-* untuk responsive content width</li>
                <li>Gunakan h-screen dengan hati-hati pada mobile (viewport height issues)</li>
                <li>Pertimbangkan min-height untuk memastikan elemen tidak terlalu kecil</li>
                <li>Test pada berbagai ukuran layar untuk memastikan layout tetap optimal</li>
            </ul>
        </section>

        <!-- CSS Classes Reference -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">CSS Classes Reference</h2>
            <p class="onv-section-description">Daftar lengkap class CSS yang tersedia untuk utilitas sizing.</p>

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
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Width</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-w-{size}</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">0-96, 10-100%, auto, full, screen, min, max, fit</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Kontrol lebar elemen</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Height</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-h-{size}</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">0-96, 10-100%, auto, full, screen, min, max, fit</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Kontrol tinggi elemen</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Min Width</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-min-w-{size}</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">0-96, full, min, max, fit</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Lebar minimum elemen</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Max Width</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-max-w-{size}</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">0-96, xs-7xl, prose, none, full, screen, min, max, fit</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Lebar maksimum elemen</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Min Height</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-min-h-{size}</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">0-96, full, screen, min, max, fit</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Tinggi minimum elemen</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Max Height</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-max-h-{size}</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">0-96, none, full, screen, min, max, fit</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Tinggi maksimum elemen</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px;">Width & Height</td>
                            <td style="padding: 12px 16px;"><code>.onv-wh-{size}</code></td>
                            <td style="padding: 12px 16px;">0-96, auto, full, min, max, fit</td>
                            <td style="padding: 12px 16px;">Lebar dan tinggi dengan nilai sama</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </div>
</template>