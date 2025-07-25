<template>
    <div class="onv-app">
        <Header @theme-changed="handleThemeChange" @search="handleSearch" />
        <div class="onv-layout-container">
            <NavBar />
            <main class="onv-main-content">
                <div class="onv-breadcrumb">{{ breadcrumb }}</div>
                <router-view />
            </main>
        </div>
    </div>
</template>

<script>
    import Header from '../components/Header.vue'
    import NavBar from '../components/NavBar.vue'

    export default {
        name: 'DefaultLayout',
        components: {
            Header,
            NavBar
        },
        computed: {
            breadcrumb() {
                const routeMap = {
                    '/': 'Home',
                    '/started': 'Getting Started',
                    // UI Content
                    '/docs/content/typography': 'UI Content | Typography',
                    '/docs/content/images': 'UI Content | Images',

                    // UI Components
                    '/docs/components/alert': 'UI Components | Alert',
                    '/docs/components/button': 'UI Components | Button',
                    '/docs/components/badge': 'UI Components | Badge',

                    // UI Form
                    '/docs/form': 'UI Form | Overview',
                    '/docs/table': 'UI Table | Overview',

                    // UI Utilities
                    '/docs/utilities/color': 'UI Utilities | Color',
                    '/docs/utilities/background': 'UI Utilities | Background',
                    '/docs/utilities/spacing': 'UI Utilities | Spacing',
                    '/docs/utilities/sizing': 'UI Utilities | Sizing',
                    '/docs/utilities/flexbox': 'UI Utilities | Flexbox',
                    '/docs/utilities/display': 'UI Utilities | Display',
                    '/docs/utilities/border': 'UI Utilities | Border',
                    '/docs/utilities/shadow': 'UI Utilities | Shadow',
                    '/docs/utilities/position': 'UI Utilities | Position',

                    // UI Effects
                    '/docs/effects/box-shadow': 'UI Effects | Box Shadow',
                    '/docs/effects/text-shadow': 'UI Effects | Text Shadow',
                    '/docs/effects/opacity': 'UI Effects | Opacity',

                }
                return routeMap[this.$route.path] || 'Documentation'
            }
        },
        methods: {
            handleThemeChange(isDarkMode) {
                console.log('Theme changed:', isDarkMode)
            },
            handleSearch(query) {
                console.log('Search:', query)
            }
        }
    }
</script>