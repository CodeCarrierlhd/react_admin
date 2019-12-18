const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
    //针对antd实现css组件样式按需打包 (通过修改package.json中的start命令读取config-overrides.js配置实现根据组件名称读取相关样式文件{.css文件})
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    //配置自定义主题
    // @primary-color: #1890ff; // 全局主色
    // @link-color: #1890ff; // 链接色
    // @success-color: #52c41a; // 成功色
    // @warning-color: #faad14; // 警告色
    // @error-color: #f5222d; // 错误色
    // @font-size-base: 14px; // 主字号
    // @heading-color: rgba(0, 0, 0, 0.85); // 标题色
    // @text-color: rgba(0, 0, 0, 0.65); // 主文本色
    // @text-color-secondary : rgba(0, 0, 0, .45); // 次文本色
    // @disabled-color : rgba(0, 0, 0, .25); // 失效色
    // @border-radius-base: 4px; // 组件/浮层圆角
    // @border-color-base: #d9d9d9; // 边框色
    // @box-shadow-base: 0 2px 8px rgba(0, 0, 0, 0.15); // 浮层阴影
    //使用less-loader对源码中的less变量进行覆盖
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#1DA57A' },
    }),
);