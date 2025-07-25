<template>
    <header class="onv-header">
        <div class="onv-logo">
            <img src="/src/assets/img/logo.png" alt="OnvStyle Logo">
            OnvStyle
            <span style="margin-left: 8px; color: #6b7280;">Docs</span>
        </div>
        <div class="onv-search-container">
            <div class="onv-search-icon">
                <i class="fas fa-search"></i>
            </div>
            <input type="text" class="onv-search-input" placeholder="Search documentation" v-model="searchQuery"
                @keydown.enter="handleSearch">
            <div class="onv-search-shortcut">⌘K</div>
        </div>
        <div class="onv-header-right">
            <button class="onv-theme-toggle" @click="toggleTheme">
                <i :class="themeIcon"></i>
            </button>
            <button class="onv-sign-in-btn">
                Sign in <i class="fas fa-chevron-down"></i>
            </button>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'Header',
        data() {
            return {
                searchQuery: '',
                isDarkMode: false
            }
        },
        computed: {
            themeIcon() {
                return this.isDarkMode ? 'fas fa-sun' : 'fas fa-moon'
            }
        },
        methods: {
            toggleTheme() {
                this.isDarkMode = !this.isDarkMode
                document.body.classList.toggle('onv-dark-mode', this.isDarkMode)
                this.$emit('theme-changed', this.isDarkMode)
            },
            handleSearch() {
                console.log('Search for:', this.searchQuery)
                this.$emit('search', this.searchQuery)
            }
        },
        mounted() {
            // Keyboard shortcut for search
            document.addEventListener('keydown', (e) => {
                if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                    e.preventDefault()
                    document.querySelector('.onv-search-input').focus()
                }
            })
        }
    }
</script>