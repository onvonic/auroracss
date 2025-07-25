<template>
    <div class="onv-page-content">
        <div class="onv-content-header">
            <h1>Getting Started</h1>
            <p>Learn how to get started with OnvStyle CSS framework</p>
        </div>

        <div class="onv-section">
            <h2>Installation</h2>
            <p>You can include OnvStyle in your project using several methods:</p>

            <h3>CDN Link</h3>
            <div class="onv-code-block">
                <code>
                    &lt;link rel="stylesheet" href="https://cdn.onvstyle.com/css/onvstyle.min.css"&gt;
                </code>
            </div>

            <h3>NPM Package</h3>
            <div class="onv-code-block">
                <code>npm install onvstyle</code>
            </div>

            <h3>Download</h3>
            <p>Download the compiled CSS files and include them in your project.</p>
        </div>

        <div class="onv-section">
            <h2>Basic Usage</h2>
            <p>Once you've included OnvStyle, you can start using the utility classes:</p>

            <div class="onv-code-block">
                <code>
                    &lt;div class="onv-container onv-mx-auto onv-px-4"&gt;<br>
                    &nbsp;&nbsp;&lt;h1 class="onv-text-3xl onv-font-bold onv-text-blue-600"&gt;Hello World&lt;/h1&gt;<br>
                    &nbsp;&nbsp;&lt;p class="onv-text-gray-600 onv-mt-4"&gt;Your content here&lt;/p&gt;<br>
                    &lt;/div&gt;
                </code>
            </div>
        </div>

        <div class="onv-section">
            <h2>What's Next?</h2>
            <div class="onv-next-steps">
                <router-link to="/docs/components/alert" class="onv-step-card">
                    <i class="fas fa-exclamation-triangle"></i>
                    <h3>Components</h3>
                    <p>Explore pre-built components like alerts, buttons, and more.</p>
                </router-link>

                <router-link to="/docs/utilities/color" class="onv-step-card">
                    <i class="fas fa-palette"></i>
                    <h3>Utilities</h3>
                    <p>Learn about utility classes for colors, spacing, and layout.</p>
                </router-link>

                <div class="onv-step-card">
                    <i class="fas fa-paint-brush"></i>
                    <h3>Customization</h3>
                    <p>Customize OnvStyle to match your brand and design needs.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PagesStarted'
    }
</script>

<style scoped>
    .onv-page-content {
        padding: 0;
        max-width: 1200px;
        margin: 0 auto;
    }

    .onv-content-header {
        margin-bottom: 3rem;
    }

    .onv-content-header h1 {
        font-size: 2.5rem;
        font-weight: 700;
        color: #1f2937;
        margin-bottom: 1rem;
    }

    .onv-content-header p {
        font-size: 1.125rem;
        color: #6b7280;
    }

    .onv-section {
        margin-bottom: 3rem;
    }

    .onv-section h2 {
        font-size: 1.875rem;
        font-weight: 600;
        color: #1f2937;
        margin-bottom: 1rem;
    }

    .onv-section h3 {
        font-size: 1.25rem;
        font-weight: 600;
        color: #1f2937;
        margin: 1.5rem 0 0.5rem 0;
    }

    .onv-section p {
        color: #4b5563;
        line-height: 1.6;
        margin-bottom: 1rem;
    }

    .onv-code-block {
        background: #f8fafc;
        border: 1px solid #e2e8f0;
        border-radius: 0.5rem;
        padding: 1rem;
        margin: 1rem 0;
        overflow-x: auto;
    }

    .onv-code-block code {
        font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
        font-size: 0.875rem;
        color: #1f2937;
        line-height: 1.5;
    }

    .onv-next-steps {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 1.5rem;
        margin-top: 2rem;
    }

    .onv-step-card {
        display: block;
        padding: 1.5rem;
        border-radius: 0.75rem;
        background: white;
        border: 1px solid #e5e7eb;
        text-decoration: none;
        transition: all 0.2s;
    }

    .onv-step-card:hover {
        border-color: #3b82f6;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    }

    .onv-step-card i {
        font-size: 2rem;
        color: #3b82f6;
        margin-bottom: 1rem;
    }

    .onv-step-card h3 {
        font-size: 1.125rem;
        font-weight: 600;
        color: #1f2937;
        margin: 0 0 0.5rem 0;
    }

    .onv-step-card p {
        color: #6b7280;
        margin: 0;
        font-size: 0.875rem;
    }

    /* Dark mode support */
    .onv-dark-mode .onv-content-header h1,
    .onv-dark-mode .onv-section h2,
    .onv-dark-mode .onv-section h3,
    .onv-dark-mode .onv-step-card h3 {
        color: #f9fafb;
    }

    .onv-dark-mode .onv-content-header p,
    .onv-dark-mode .onv-section p,
    .onv-dark-mode .onv-step-card p {
        color: #d1d5db;
    }

    .onv-dark-mode .onv-code-block {
        background: #374151;
        border-color: #4b5563;
    }

    .onv-dark-mode .onv-code-block code {
        color: #f9fafb;
    }

    .onv-dark-mode .onv-step-card {
        background: #374151;
        border-color: #4b5563;
    }

    .onv-dark-mode .onv-step-card:hover {
        border-color: #3b82f6;
    }
</style>