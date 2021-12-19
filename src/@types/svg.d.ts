declare module '*.svg' {
    import type { DefineComponent } from 'vue';
    const component: DefineComponent;
    export default component;
}
declare module '*.svg?inline' {
    import type { DefineComponent } from 'vue';
    const component: DefineComponent;
    export default component;
}