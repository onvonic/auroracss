<template>
    <div class="onv-page-content">
        <div class="onv-content-header">
            <h1>AURORA CSS | Documentation</h1>
            <p>Selamat datang di dokumentasi Aurora Css.<br>
                AuroraCSS adalah framework CSS ringan untuk membangun UI modern dan responsif dengan mudah.</p>
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