<template>
    <div>
        <h1 class="onv-page-title">Form</h1>
        <p class="onv-page-subtitle">Komponen form yang lengkap dan accessible untuk input data pengguna dengan berbagai jenis field dan layout.</p>

        <!-- Basic Form Elements -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Basic Form Elements</h2>
            <p class="onv-section-description">Elemen dasar form dengan styling yang konsisten dan modern.</p>
            <div class="onv-demo-grid">
                <!-- Text Input -->
                <div class="onv-form-group">
                    <label class="onv-form-label" for="text-input">Text Input</label>
                    <input type="text" id="text-input" class="onv-form-input" placeholder="Enter your text">
                </div>

                <!-- Email Input -->
                <div class="onv-form-group">
                    <label class="onv-form-label" for="email-input">Email Input</label>
                    <input type="email" id="email-input" class="onv-form-input" placeholder="your.email@example.com">
                </div>

                <!-- Password Input -->
                <div class="onv-form-group">
                    <label class="onv-form-label" for="password-input">Password Input</label>
                    <input type="password" id="password-input" class="onv-form-input" placeholder="Enter your password">
                </div>

                <!-- Number Input -->
                <div class="onv-form-group">
                    <label class="onv-form-label" for="number-input">Number Input</label>
                    <input type="number" id="number-input" class="onv-form-input" placeholder="123" min="0" max="100">
                </div>

                <!-- Date Input -->
                <div class="onv-form-group">
                    <label class="onv-form-label" for="date-input">Date Input</label>
                    <input type="date" id="date-input" class="onv-form-input">
                </div>

                <!-- Textarea -->
                <div class="onv-form-group">
                    <label class="onv-form-label" for="textarea">Textarea</label>
                    <textarea id="textarea" class="onv-form-textarea" rows="4" placeholder="Enter your message here..."></textarea>
                </div>

                <!-- Select -->
                <div class="onv-form-group">
                    <label class="onv-form-label" for="select">Select Dropdown</label>
                    <select id="select" class="onv-form-select">
                        <option value="">Choose an option</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                </div>

                <!-- File Input -->
                <div class="onv-form-group">
                    <label class="onv-form-label" for="file-input">File Upload</label>
                    <input type="file" id="file-input" class="onv-form-file">
                </div>

                <!-- Range Slider -->
                <div class="onv-form-group">
                    <label class="onv-form-label" for="range-input">Range Slider</label>
                    <input type="range" id="range-input" class="onv-form-range" min="0" max="100" value="50">
                </div>
            </div>
        </section>

        <!-- Checkboxes and Radios -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Checkboxes & Radio Buttons</h2>
            <p class="onv-section-description">Komponen untuk pilihan tunggal dan multiple dengan styling custom.</p>
            <div class="onv-demo-grid">
                <!-- Checkboxes -->
                <div class="onv-form-group">
                    <label class="onv-form-label">Checkboxes</label>
                    <div class="onv-form-checkbox-wrapper">
                        <input type="checkbox" id="checkbox1" class="onv-form-checkbox" checked>
                        <label class="onv-form-checkbox-label" for="checkbox1">Option 1 (Checked)</label>
                    </div>
                    <div class="onv-form-checkbox-wrapper">
                        <input type="checkbox" id="checkbox2" class="onv-form-checkbox">
                        <label class="onv-form-checkbox-label" for="checkbox2">Option 2</label>
                    </div>
                    <div class="onv-form-checkbox-wrapper">
                        <input type="checkbox" id="checkbox3" class="onv-form-checkbox" disabled>
                        <label class="onv-form-checkbox-label" for="checkbox3">Option 3 (Disabled)</label>
                    </div>
                </div>

                <!-- Radio Buttons -->
                <div class="onv-form-group">
                    <label class="onv-form-label">Radio Buttons</label>
                    <div class="onv-form-radio-group">
                        <div class="onv-form-radio-wrapper">
                            <input type="radio" id="radio1" name="radio-group" class="onv-form-radio" value="option1" checked>
                            <label class="onv-form-radio-label" for="radio1">Option 1 (Selected)</label>
                        </div>
                        <div class="onv-form-radio-wrapper">
                            <input type="radio" id="radio2" name="radio-group" class="onv-form-radio" value="option2">
                            <label class="onv-form-radio-label" for="radio2">Option 2</label>
                        </div>
                        <div class="onv-form-radio-wrapper">
                            <input type="radio" id="radio3" name="radio-group" class="onv-form-radio" value="option3" disabled>
                            <label class="onv-form-radio-label" for="radio3">Option 3 (Disabled)</label>
                        </div>
                    </div>
                </div>

                <!-- Switches -->
                <div class="onv-form-group">
                    <label class="onv-form-label">Switch Toggles</label>
                    <div class="onv-form-switch-wrapper">
                        <input type="checkbox" id="switch1" class="onv-form-switch" checked>
                        <label class="onv-form-switch-label" for="switch1">Enable notifications</label>
                    </div>
                    <div class="onv-form-switch-wrapper">
                        <input type="checkbox" id="switch2" class="onv-form-switch">
                        <label class="onv-form-switch-label" for="switch2">Auto-save</label>
                    </div>
                    <div class="onv-form-switch-wrapper">
                        <input type="checkbox" id="switch3" class="onv-form-switch" disabled>
                        <label class="onv-form-switch-label" for="switch3">Dark mode (Disabled)</label>
                    </div>
                </div>
            </div>
        </section>

        <!-- Form Sizes -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Form Sizes</h2>
            <p class="onv-section-description">Berbagai ukuran form elements untuk kebutuhan yang berbeda.</p>
            <div class="onv-demo-grid">
                <!-- Small -->
                <div class="onv-form-group">
                    <label class="onv-form-label" for="input-sm">Small Input</label>
                    <input type="text" id="input-sm" class="onv-form-input onv-form-input-sm" placeholder="Small input">
                </div>

                <!-- Default -->
                <div class="onv-form-group">
                    <label class="onv-form-label" for="input-default">Default Input</label>
                    <input type="text" id="input-default" class="onv-form-input" placeholder="Default input">
                </div>

                <!-- Large -->
                <div class="onv-form-group">
                    <label class="onv-form-label" for="input-lg">Large Input</label>
                    <input type="text" id="input-lg" class="onv-form-input onv-form-input-lg" placeholder="Large input">
                </div>

                <!-- Textarea Sizes -->
                <div class="onv-form-group">
                    <label class="onv-form-label" for="textarea-sm">Small Textarea</label>
                    <textarea id="textarea-sm" class="onv-form-textarea onv-form-textarea-sm" placeholder="Small textarea"></textarea>
                </div>

                <!-- Select Sizes -->
                <div class="onv-form-group">
                    <label class="onv-form-label" for="select-lg">Large Select</label>
                    <select id="select-lg" class="onv-form-select onv-form-select-lg">
                        <option value="">Choose large option</option>
                        <option value="option1">Large Option 1</option>
                        <option value="option2">Large Option 2</option>
                    </select>
                </div>
            </div>
        </section>

        <!-- Form States -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Form States</h2>
            <p class="onv-section-description">Berbagai state untuk validasi dan feedback kepada pengguna.</p>
            <div class="onv-demo-grid">
                <!-- Success State -->
                <div class="onv-form-group">
                    <label class="onv-form-label" for="input-success">Success State</label>
                    <input type="text" id="input-success" class="onv-form-input onv-form-input-success" value="Valid input" placeholder="Success input">
                    <div class="onv-form-help onv-form-help-success">Great! This field is valid.</div>
                </div>

                <!-- Error State -->
                <div class="onv-form-group">
                    <label class="onv-form-label onv-form-label-required" for="input-error">Error State</label>
                    <input type="text" id="input-error" class="onv-form-input onv-form-input-error" value="Invalid input" placeholder="Error input">
                    <div class="onv-form-help onv-form-help-error">This field is required and must be valid.</div>
                </div>

                <!-- Warning State -->
                <div class="onv-form-group">
                    <label class="onv-form-label" for="input-warning">Warning State</label>
                    <input type="text" id="input-warning" class="onv-form-input onv-form-input-warning" value="Potentially problematic" placeholder="Warning input">
                    <div class="onv-form-help onv-form-help-warning">Please check this field carefully.</div>
                </div>

                <!-- Disabled State -->
                <div class="onv-form-group">
                    <label class="onv-form-label" for="input-disabled">Disabled State</label>
                    <input type="text" id="input-disabled" class="onv-form-input" value="Disabled input" placeholder="Disabled input" disabled>
                    <div class="onv-form-help">This field is currently disabled.</div>
                </div>

                <!-- Readonly State -->
                <div class="onv-form-group">
                    <label class="onv-form-label" for="input-readonly">Readonly State</label>
                    <input type="text" id="input-readonly" class="onv-form-input" value="Readonly input" placeholder="Readonly input" readonly>
                    <div class="onv-form-help">This field is readonly and cannot be edited.</div>
                </div>
            </div>
        </section>

        <!-- Input Groups -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Input Groups</h2>
            <p class="onv-section-description">Input dengan addon di awal atau akhir untuk konteks tambahan.</p>
            <div class="onv-demo-grid">
                <!-- Prepend -->
                <div class="onv-form-group">
                    <label class="onv-form-label" for="input-prepend">With Prepend</label>
                    <div class="onv-input-group">
                        <div class="onv-input-group-prepend">
                            <span class="onv-input-group-text">@</span>
                        </div>
                        <input type="text" id="input-prepend" class="onv-form-input" placeholder="username">
                    </div>
                </div>

                <!-- Append -->
                <div class="onv-form-group">
                    <label class="onv-form-label" for="input-append">With Append</label>
                    <div class="onv-input-group">
                        <input type="text" id="input-append" class="onv-form-input" placeholder="100">
                        <div class="onv-input-group-append">
                            <span class="onv-input-group-text">%</span>
                        </div>
                    </div>
                </div>

                <!-- Both -->
                <div class="onv-form-group">
                    <label class="onv-form-label" for="input-both">With Both</label>
                    <div class="onv-input-group">
                        <div class="onv-input-group-prepend">
                            <span class="onv-input-group-text">$</span>
                        </div>
                        <input type="text" id="input-both" class="onv-form-input" placeholder="0.00">
                        <div class="onv-input-group-append">
                            <span class="onv-input-group-text">.00</span>
                        </div>
                    </div>
                </div>

                <!-- Icon Addon -->
                <div class="onv-form-group">
                    <label class="onv-form-label" for="input-icon">With Icon</label>
                    <div class="onv-input-group">
                        <div class="onv-input-group-prepend">
                            <span class="onv-input-group-text">
                                <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                                </svg>
                            </span>
                        </div>
                        <input type="text" id="input-icon" class="onv-form-input" placeholder="Enter username">
                    </div>
                </div>
            </div>
        </section>

        <!-- Floating Labels -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Floating Labels</h2>
            <p class="onv-section-description">Modern floating label interface yang menghemat ruang dan meningkatkan UX.</p>
            <div class="onv-demo-grid">
                <!-- Text Input -->
                <div class="onv-form-floating">
                    <input type="text" class="onv-form-input" id="floatingInput" placeholder="name@example.com">
                    <label for="floatingInput">Email address</label>
                </div>

                <!-- Password -->
                <div class="onv-form-floating">
                    <input type="password" class="onv-form-input" id="floatingPassword" placeholder="Password">
                    <label for="floatingPassword">Password</label>
                </div>

                <!-- Textarea -->
                <div class="onv-form-floating">
                    <textarea class="onv-form-textarea" placeholder="Leave a comment here" id="floatingTextarea" style="height: 100px"></textarea>
                    <label for="floatingTextarea">Comments</label>
                </div>

                <!-- Select -->
                <div class="onv-form-floating">
                    <select class="onv-form-select" id="floatingSelect">
                        <option value="">Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <label for="floatingSelect">Works with selects</label>
                </div>
            </div>
        </section>

        <!-- Form Layouts -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Form Layouts</h2>
            <p class="onv-section-description">Berbagai layout form untuk kebutuhan yang berbeda.</p>
            
            <!-- Inline Form -->
            <h3 class="onv-subsection-title">Inline Form</h3>
            <div class="onv-demo-grid">
                <div class="onv-form onv-form-inline">
                    <div class="onv-form-group">
                        <label class="onv-form-label" for="inline-email">Email</label>
                        <input type="email" id="inline-email" class="onv-form-input" placeholder="Email">
                    </div>
                    <div class="onv-form-group">
                        <label class="onv-form-label" for="inline-password">Password</label>
                        <input type="password" id="inline-password" class="onv-form-input" placeholder="Password">
                    </div>
                    <div class="onv-form-group">
                        <div class="onv-form-checkbox-wrapper">
                            <input type="checkbox" id="inline-remember" class="onv-form-checkbox">
                            <label class="onv-form-checkbox-label" for="inline-remember">Remember me</label>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Horizontal Form -->
            <h3 class="onv-subsection-title">Horizontal Form</h3>
            <div class="onv-demo-grid">
                <div class="onv-form onv-form-horizontal">
                    <div class="onv-form-group">
                        <label class="onv-form-label" for="horizontal-name">Full Name</label>
                        <input type="text" id="horizontal-name" class="onv-form-input" placeholder="John Doe">
                    </div>
                    <div class="onv-form-group">
                        <label class="onv-form-label" for="horizontal-email">Email</label>
                        <input type="email" id="horizontal-email" class="onv-form-input" placeholder="john@example.com">
                    </div>
                    <div class="onv-form-group">
                        <label class="onv-form-label" for="horizontal-message">Message</label>
                        <textarea id="horizontal-message" class="onv-form-textarea" rows="3" placeholder="Your message"></textarea>
                    </div>
                </div>
            </div>

            <!-- Grid Form -->
            <h3 class="onv-subsection-title">Grid Form</h3>
            <div class="onv-demo-grid">
                <div class="onv-form">
                    <div class="onv-form-row">
                        <div class="onv-form-col-6">
                            <div class="onv-form-group">
                                <label class="onv-form-label" for="grid-first-name">First Name</label>
                                <input type="text" id="grid-first-name" class="onv-form-input" placeholder="First name">
                            </div>
                        </div>
                        <div class="onv-form-col-6">
                            <div class="onv-form-group">
                                <label class="onv-form-label" for="grid-last-name">Last Name</label>
                                <input type="text" id="grid-last-name" class="onv-form-input" placeholder="Last name">
                            </div>
                        </div>
                    </div>
                    <div class="onv-form-row">
                        <div class="onv-form-col-4">
                            <div class="onv-form-group">
                                <label class="onv-form-label" for="grid-city">City</label>
                                <input type="text" id="grid-city" class="onv-form-input" placeholder="City">
                            </div>
                        </div>
                        <div class="onv-form-col-4">
                            <div class="onv-form-group">
                                <label class="onv-form-label" for="grid-state">State</label>
                                <select id="grid-state" class="onv-form-select">
                                    <option value="">Choose...</option>
                                    <option value="1">State 1</option>
                                    <option value="2">State 2</option>
                                </select>
                            </div>
                        </div>
                        <div class="onv-form-col-4">
                            <div class="onv-form-group">
                                <label class="onv-form-label" for="grid-zip">Zip Code</label>
                                <input type="text" id="grid-zip" class="onv-form-input" placeholder="12345">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Complete Form Example -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Complete Form Example</h2>
            <p class="onv-section-description">Contoh form lengkap dengan berbagai elemen dan validasi.</p>
            <div class="onv-demo-grid">
                <div class="onv-form">
                    <div class="onv-form-row">
                        <div class="onv-form-col-6">
                            <div class="onv-form-group">
                                <label class="onv-form-label onv-form-label-required" for="complete-name">Full Name</label>
                                <input type="text" id="complete-name" class="onv-form-input" placeholder="Enter your full name" required>
                            </div>
                        </div>
                        <div class="onv-form-col-6">
                            <div class="onv-form-group">
                                <label class="onv-form-label onv-form-label-required" for="complete-email">Email Address</label>
                                <input type="email" id="complete-email" class="onv-form-input" placeholder="your.email@example.com" required>
                            </div>
                        </div>
                    </div>
                    
                    <div class="onv-form-row">
                        <div class="onv-form-col-6">
                            <div class="onv-form-group">
                                <label class="onv-form-label" for="complete-phone">Phone Number</label>
                                <div class="onv-input-group">
                                    <div class="onv-input-group-prepend">
                                        <span class="onv-input-group-text">+62</span>
                                    </div>
                                    <input type="tel" id="complete-phone" class="onv-form-input" placeholder="812-3456-7890">
                                </div>
                            </div>
                        </div>
                        <div class="onv-form-col-6">
                            <div class="onv-form-group">
                                <label class="onv-form-label" for="complete-birth">Date of Birth</label>
                                <input type="date" id="complete-birth" class="onv-form-input">
                            </div>
                        </div>
                    </div>

                    <div class="onv-form-group">
                        <label class="onv-form-label" for="complete-address">Address</label>
                        <textarea id="complete-address" class="onv-form-textarea" rows="3" placeholder="Enter your complete address"></textarea>
                    </div>

                    <div class="onv-form-row">
                        <div class="onv-form-col-4">
                            <div class="onv-form-group">
                                <label class="onv-form-label" for="complete-country">Country</label>
                                <select id="complete-country" class="onv-form-select">
                                    <option value="">Select Country</option>
                                    <option value="id">Indonesia</option>
                                    <option value="my">Malaysia</option>
                                    <option value="sg">Singapore</option>
                                </select>
                            </div>
                        </div>
                        <div class="onv-form-col-4">
                            <div class="onv-form-group">
                                <label class="onv-form-label" for="complete-experience">Experience Level</label>
                                <div class="onv-form-radio-group">
                                    <div class="onv-form-radio-wrapper">
                                        <input type="radio" id="exp-beginner" name="experience" class="onv-form-radio" value="beginner">
                                        <label class="onv-form-radio-label" for="exp-beginner">Beginner</label>
                                    </div>
                                    <div class="onv-form-radio-wrapper">
                                        <input type="radio" id="exp-intermediate" name="experience" class="onv-form-radio" value="intermediate">
                                        <label class="onv-form-radio-label" for="exp-intermediate">Intermediate</label>
                                    </div>
                                    <div class="onv-form-radio-wrapper">
                                        <input type="radio" id="exp-expert" name="experience" class="onv-form-radio" value="expert">
                                        <label class="onv-form-radio-label" for="exp-expert">Expert</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="onv-form-col-4">
                            <div class="onv-form-group">
                                <label class="onv-form-label">Preferences</label>
                                <div class="onv-form-checkbox-wrapper">
                                    <input type="checkbox" id="pref-newsletter" class="onv-form-checkbox">
                                    <label class="onv-form-checkbox-label" for="pref-newsletter">Subscribe to newsletter</label>
                                </div>
                                <div class="onv-form-switch-wrapper">
                                    <input type="checkbox" id="pref-notifications" class="onv-form-switch">
                                    <label class="onv-form-switch-label" for="pref-notifications">Enable notifications</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="onv-form-group">
                        <label class="onv-form-label" for="complete-resume">Upload Resume</label>
                        <input type="file" id="complete-resume" class="onv-form-file" accept=".pdf,.doc,.docx">
                        <div class="onv-form-help">Accepted formats: PDF, DOC, DOCX (Max 5MB)</div>
                    </div>

                    <div class="onv-form-group">
                        <label class="onv-form-label" for="complete-skills">Skill Level</label>
                        <input type="range" id="complete-skills" class="onv-form-range" min="0" max="100" value="75">
                        <div class="onv-form-help">Rate your overall skill level (0-100)</div>
                    </div>

                    <div class="onv-form-group">
                        <div class="onv-form-checkbox-wrapper">
                            <input type="checkbox" id="complete-terms" class="onv-form-checkbox" required>
                            <label class="onv-form-checkbox-label" for="complete-terms">I agree to the <a href="#" class="onv-link">Terms and Conditions</a></label>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Usage Guidelines -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Usage Guidelines</h2>
            <p class="onv-section-description">Panduan penggunaan komponen form untuk hasil terbaik.</p>

            <h3 class="onv-subsection-title">Form Structure</h3>
            <ul style="margin: 16px 0; padding-left: 24px; color: #4b5563; line-height: 1.6;">
                <li><strong>Form Group:</strong> Selalu wrap label dan input dalam <code>.onv-form-group</code></li>
                <li><strong>Labels:</strong> Gunakan <code>.onv-form-label</code> dan associate dengan input via <code>for</code> attribute</li>
                <li><strong>Required Fields:</strong> Tambahkan <code>.onv-form-label-required</code> untuk menampilkan asterisk</li>
                <li><strong>Help Text:</strong> Gunakan <code>.onv-form-help</code> untuk keterangan tambahan</li>
            </ul>

            <h3 class="onv-subsection-title">Form Validation</h3>
            <ul style="margin: 16px 0; padding-left: 24px; color: #4b5563; line-height: 1.6;">
                <li><strong>Success:</strong> <code>.onv-form-input-success</code> untuk input yang valid</li>
                <li><strong>Error:</strong> <code>.onv-form-input-error</code> untuk input yang tidak valid</li>
                <li><strong>Warning:</strong> <code>.onv-form-input-warning</code> untuk peringatan</li>
                <li>Kombinasikan dengan <code>.onv-form-help-*</code> untuk pesan yang sesuai</li>
            </ul>

            <h3 class="onv-subsection-title">Best Practices</h3>
            <ul style="margin: 16px 0; padding-left: 24px; color: #4b5563; line-height: 1.6;">
                <li>Gunakan placeholder text yang deskriptif dan helpful</li>
                <li>Group related fields menggunakan fieldset atau visual grouping</li>
                <li>Berikan feedback real-time untuk validasi</li>
                <li>Pertahankan konsistensi ukuran field dalam satu form</li>
                <li>Gunakan appropriate input types (email, tel, date, etc.)</li>
                <li>Implementasikan progressive disclosure untuk form yang panjang</li>
            </ul>

            <h3 class="onv-subsection-title">Layout Recommendations</h3>
            <ul style="margin: 16px 0; padding-left: 24px; color: #4b5563; line-height: 1.6;">
                <li><strong>Vertical:</strong> Default, cocok untuk sebagian besar form</li>
                <li><strong>Horizontal:</strong> Cocok untuk form pendek dengan label yang konsisten</li>
                <li><strong>Inline:</strong> Untuk form sederhana seperti login atau search</li>
                <li><strong>Grid:</strong> Untuk form kompleks dengan banyak field</li>
            </ul>

            <h3 class="onv-subsection-title">Accessibility</h3>
            <ul style="margin: 16px 0; padding-left: 24px; color: #4b5563; line-height: 1.6;">
                <li>Selalu gunakan <code>label</code> elements yang proper</li>
                <li>Gunakan <code>aria-describedby</code> untuk help text</li>
                <li>Implementasikan keyboard navigation yang logis</li>
                <li>Berikan focus indicators yang jelas</li>
                <li>Gunakan <code>required</code> attribute untuk validasi HTML5</li>
                <li>Pastikan color contrast memenuhi standar WCAG</li>
            </ul>
        </section>

        <!-- CSS Classes Reference -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">CSS Classes Reference</h2>
            <p class="onv-section-description">Daftar lengkap class CSS yang tersedia untuk komponen form.</p>
            <div style="overflow-x: auto; margin: 24px 0;">
                <table style="width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);">
                    <thead>
                        <tr style="background: #f8fafc;">
                            <th style="padding: 12px 16px; text-align: left; font-weight: 600; color: #374151; border-bottom: 1px solid #e5e7eb;">Class</th>
                            <th style="padding: 12px 16px; text-align: left; font-weight: 600; color: #374151; border-bottom: 1px solid #e5e7eb;">Description</th>
                            <th style="padding: 12px 16px; text-align: left; font-weight: 600; color: #374151; border-bottom: 1px solid #e5e7eb;">Usage</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-form</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Base form container</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Wrap entire form</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-form-group</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Form field wrapper</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Wrap label + input</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-form-label</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Form field label</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">For all form labels</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-form-input</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Text input styling</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Text, email, password inputs</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-form-textarea</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Textarea styling</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Multi-line text input</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-form-select</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Select dropdown styling</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Dropdown selections</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-form-checkbox</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Custom checkbox</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Multiple choices</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-form-radio</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Custom radio button</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Single choice</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-form-switch</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Toggle switch</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">On/off toggles</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-form-file</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">File upload input</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">File uploads</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-form-range</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Range slider</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Numeric range selection</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-input-group</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Input with addons</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Prepend/append elements</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-form-floating</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Floating label container</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Modern floating labels</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-form-input-sm</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Small input size</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Size modifier</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-form-input-lg</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Large input size</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Size modifier</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-form-input-success</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Success state</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Valid input styling</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-form-input-error</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Error state</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Invalid input styling</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-form-input-warning</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Warning state</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Warning input styling</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-form-inline</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Inline form layout</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Horizontal form fields</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-form-horizontal</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Horizontal form layout</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Label beside input</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-form-row</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Form grid row</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Grid layout container</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-form-col-*</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Form grid columns</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Grid column sizing</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px;"><code>.onv-form-help</code></td>
                            <td style="padding: 12px 16px;">Help text styling</td>
                            <td style="padding: 12px 16px;">Additional field information</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <!-- JavaScript Examples -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">JavaScript Integration</h2>
            <p class="onv-section-description">Contoh integrasi JavaScript untuk validasi dan interaksi form.</p>
            
            <h3 class="onv-subsection-title">Form Validation Example</h3>
            <div style="background: #f8fafc; border-radius: 8px; padding: 16px; margin: 16px 0;">
                <pre style="margin: 0; font-size: 14px; line-height: 1.5; color: #374151;"><code>// Example form validation
function validateForm(formElement) {
    const inputs = formElement.querySelectorAll('.onv-form-input[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        const formGroup = input.closest('.onv-form-group');
        const helpText = formGroup.querySelector('.onv-form-help');
        
        if (!input.value.trim()) {
            input.classList.add('onv-form-input-error');
            input.classList.remove('onv-form-input-success');
            if (helpText) {
                helpText.textContent = 'This field is required';
                helpText.classList.add('onv-form-help-error');
            }
            isValid = false;
        } else {
            input.classList.add('onv-form-input-success');
            input.classList.remove('onv-form-input-error');
            if (helpText) {
                helpText.textContent = '';
                helpText.classList.remove('onv-form-help-error');
            }
        }
    });
    
    return isValid;
}</code></pre>
            </div>

            <h3 class="onv-subsection-title">Real-time Validation</h3>
            <div style="background: #f8fafc; border-radius: 8px; padding: 16px; margin: 16px 0;">
                <pre style="margin: 0; font-size: 14px; line-height: 1.5; color: #374151;"><code>// Real-time validation on input
document.querySelectorAll('.onv-form-input').forEach(input => {
    input.addEventListener('blur', function() {
        validateField(this);
    });
    
    input.addEventListener('input', function() {
        if (this.classList.contains('onv-form-input-error')) {
            validateField(this);
        }
    });
    
    function validateField(field) {
        const value = field.value.trim();
        const type = field.type;
        let isValid = true;
        let message = '';
        
        if (field.hasAttribute('required') && !value) {
            isValid = false;
            message = 'This field is required';
        } else if (type === 'email' && value && !isValidEmail(value)) {
            isValid = false;
            message = 'Please enter a valid email address';
        }
        
        updateFieldState(field, isValid, message);
    }
});</code></pre>
            </div>
        </section>
    </div>
</template>