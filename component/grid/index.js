import WafGridComponent from './src/grid.component.vue';
import WafGridColumnComponent from './src/grid-column.component.vue';
import WafGridCheckboxColumnComponent from './src/grid-checkbox-column.component.vue';
import WafGridDetailColumnComponent from './src/grid-detail-column.component.vue';
import WafGridIndexColumnComponent from './src/grid-index-column.component.vue';

const components = {
    'waf-grid': WafGridComponent,
    'waf-grid-column': WafGridColumnComponent,
    'waf-grid-checkbox-column': WafGridCheckboxColumnComponent,
    'waf-grid-detail-column': WafGridDetailColumnComponent,
    'waf-grid-index-column': WafGridIndexColumnComponent
};

const install = function (Vue) {
    // 注册全局组件
    Object.keys(components).forEach(key => {
        Vue.component(key, components[key]);
    });
};

export default install;
