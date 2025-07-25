import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    // Main Pages
    {
        path: '/',
        name: 'Home',
        component: () => import('./pages/PagesIndex.vue')
    },
    {
        path: '/started',
        name: 'Started',
        component: () => import('./pages/PagesStarted.vue')
    },

    // UI Content Routes
    {
        path: '/docs/content/typography',
        name: 'ContentTypography',
        component: () => import('./pages/content/Typography.vue')
    },
    {
        path: '/docs/content/images',
        name: 'ContentImages',
        component: () => import('./pages/content/Images.vue')
    },

    // UI Components Routes
    {
        path: '/docs/components/alert',
        name: 'Alert',
        component: () => import('./pages/components/Alert.vue')
    },
    {
        path: '/docs/components/badge',
        name: 'Badge',
        component: () => import('./pages/components/Badge.vue')
    },
    {
        path: '/docs/components/button',
        name: 'Button',
        component: () => import('./pages/components/Button.vue')
    },

    // UI Form Routes
    {
        path: '/docs/form',
        name: 'Form',
        component: () => import('./pages/form/Form.vue')
    },
    {
        path: '/docs/table',
        name: 'table',
        component: () => import('./pages/table/Table.vue')
    },
    // UI Utilities Routes
    {
        path: '/docs/utilities/color',
        name: 'Color',
        component: () => import('./pages/utilities/Color.vue')
    },
    {
        path: '/docs/utilities/background',
        name: 'Background',
        component: () => import('./pages/utilities/Background.vue')
    },
    {
        path: '/docs/utilities/spacing',
        name: 'Spacing',
        component: () => import('./pages/utilities/Spacing.vue')
    },
    {
        path: '/docs/utilities/sizing',
        name: 'Sizing',
        component: () => import('./pages/utilities/Sizing.vue')
    },
    {
        path: '/docs/utilities/flexbox',
        name: 'Flexbox',
        component: () => import('./pages/utilities/Flexbox.vue')
    },
    {
        path: '/docs/utilities/display',
        name: 'Display',
        component: () => import('./pages/utilities/Display.vue')
    },
    {
        path: '/docs/utilities/border',
        name: 'Border',
        component: () => import('./pages/utilities/Border.vue')
    },
    {
        path: '/docs/utilities/shadow',
        name: 'Shadow',
        component: () => import('./pages/utilities/Shadow.vue')
    },
    {
        path: '/docs/utilities/position',
        name: 'Position',
        component: () => import('./pages/utilities/Position.vue')
    },

    // UI Effects Routes
    {
        path: '/docs/effects/box-shadow',
        name: 'BoxShadow',
        component: () => import('./pages/effects/BoxShadow.vue')
    },
    {
        path: '/docs/effects/text-shadow',
        name: 'TextShadow',
        component: () => import('./pages/effects/TextShadow.vue')
    },
    {
        path: '/docs/effects/opacity',
        name: 'Opacity',
        component: () => import('./pages/effects/Opacity.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router