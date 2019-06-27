import PromiseGridComponent from './src/promise-grid.component.vue';

const components = {
    'waf-promise-grid': PromiseGridComponent
};

const install = function (Vue) {
    // 注册全局组件
    Object.keys(components).forEach(key => {
        Vue.component(key, components[key]);
    });
};

export default install;
