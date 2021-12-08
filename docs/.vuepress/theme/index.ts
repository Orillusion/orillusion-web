import { path } from '@vuepress/utils'

module.exports = {
    name: 'theme-default-local',
    extends: '@vuepress/theme-default',
    layouts: {
        Layout: path.resolve(__dirname, 'layouts/Layout.vue'),
        404: path.resolve(__dirname, 'layouts/404.vue')
    },
}