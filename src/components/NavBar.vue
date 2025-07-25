<template>
    <nav class="onv-sidebar">
        <div class="onv-nav-group">
            <router-link to="/" class="onv-nav-item" :class="{ 'onv-active': $route.path === '/' }">
                <i class="fas fa-home"></i> Home
            </router-link>
            <router-link to="/started" class="onv-nav-item" :class="{ 'onv-active': $route.path === '/started' }">
                <i class="fas fa-rocket"></i> Getting started
            </router-link>
        </div>

        <div class="onv-nav-group">
            <div class="onv-nav-group-title">UI Content</div>
            <router-link to="/docs/content/typography" class="onv-nav-item" :class="{ 'onv-active': $route.path === '/docs/content/typography' }">
                <i class="fas fa-font"></i> Typography
            </router-link>
            <router-link to="/docs/content/images" class="onv-nav-item" :class="{ 'onv-active': $route.path === '/docs/content/images' }">
                <i class="fas fa-image"></i> Image
            </router-link>
        </div>

        <div class="onv-nav-group">
            <div class="onv-nav-group-title">UI Components</div>
            <router-link to="/docs/components/alert" class="onv-nav-item" :class="{ 'onv-active': $route.path === '/docs/components/alert' }">
                <i class="fas fa-exclamation-triangle"></i> Alert
            </router-link>
            <router-link to="/docs/components/button" class="onv-nav-item" :class="{ 'onv-active': $route.path === '/docs/components/button' }">
                <i class="fas fa-mouse"></i> Button
            </router-link>
            <router-link to="/docs/components/badge" class="onv-nav-item" :class="{ 'onv-active': $route.path === '/docs/components/badge' }">
                <i class="fas fa-ribbon"></i> Badge
            </router-link>
        </div>

        <div class="onv-nav-group">
            <div class="onv-nav-group-title">UI Form</div>
            <router-link to="/docs/form" class="onv-nav-item" :class="{ 'onv-active': $route.path === '/docs/form' }">
                <i class="fas fa-font"></i> Form
            </router-link>
            <router-link to="/docs/table" class="onv-nav-item" :class="{ 'onv-active': $route.path === '/docs/table' }">
                <i class="fas fa-font"></i> Table
            </router-link>
        </div>

        <div class="onv-nav-group">
            <div class="onv-nav-group-title">UI Utilities</div>
            <router-link to="/docs/utilities/color" class="onv-nav-item" :class="{ 'onv-active': $route.path === '/docs/utilities/color' }">
                <i class="fas fa-align-left"></i> Color
            </router-link>
            <router-link to="/docs/utilities/background" class="onv-nav-item" :class="{ 'onv-active': $route.path === '/docs/utilities/background' }">
                <i class="fas fa-tint"></i> Background
            </router-link>
            <router-link to="/docs/utilities/spacing" class="onv-nav-item" :class="{ 'onv-active': $route.path === '/docs/utilities/spacing' }">
                <i class="fas fa-compress-arrows-alt"></i> Spacing
            </router-link>
            <router-link to="/docs/utilities/sizing" class="onv-nav-item" :class="{ 'onv-active': $route.path === '/docs/utilities/sizing' }">
                <i class="fas fa-text-height"></i> Sizing
            </router-link>
            <router-link to="/docs/utilities/flexbox" class="onv-nav-item" :class="{ 'onv-active': $route.path === '/docs/utilities/flexbox' }">
                <i class="fas fa-grip-horizontal"></i> Flexbox
            </router-link>
            <router-link to="/docs/utilities/display" class="onv-nav-item" :class="{ 'onv-active': $route.path === '/docs/utilities/display' }">
                <i class="fas fa-eye"></i> Display
            </router-link>
            <router-link to="/docs/utilities/border" class="onv-nav-item" :class="{ 'onv-active': $route.path === '/docs/utilities/border' }">
                <i class="fas fa-border-style"></i> Border
            </router-link>
            <router-link to="/docs/utilities/shadow" class="onv-nav-item" :class="{ 'onv-active': $route.path === '/docs/utilities/shadow' }">
                <i class="fas fa-square"></i> Shadow
            </router-link>
            <router-link to="/docs/utilities/position" class="onv-nav-item" :class="{ 'onv-active': $route.path === '/docs/utilities/position' }">
                <i class="fas fa-crosshairs"></i> Position
            </router-link>
        </div>

        <div class="onv-nav-group">
            <div class="onv-nav-group-title">UI Effects</div>
            <router-link to="/docs/effects/box-shadow" class="onv-nav-item" :class="{ 'onv-active': $route.path === '/docs/effects/box-shadow' }">
                <i class="fas fa-align-left"></i> Box Shadow
            </router-link>
            <router-link to="/docs/effects/text-shadow" class="onv-nav-item" :class="{ 'onv-active': $route.path === '/docs/effects/text-shadow' }">
                <i class="fas fa-tint"></i> Text Shadow
            </router-link>
            <router-link to="/docs/effects/opacity" class="onv-nav-item" :class="{ 'onv-active': $route.path === '/docs/effects/opacity' }">
                <i class="fas fa-compress-arrows-alt"></i> Opacity
            </router-link>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'NavBar'
    }
</script>