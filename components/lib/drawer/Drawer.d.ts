/**
 *
 * Drawer is a panel component displayed as an overlay at the edges of the screen.
 *
 * [Live Demo](https://primevue.org/drawer)
 *
 * @module drawer
 *
 */
import { TransitionProps, VNode } from 'vue';
import { ComponentHooks } from '../basecomponent';
import { ButtonPassThroughOptions } from '../button';
import { PassThroughOptions } from '../passthrough';
import { ClassComponent, DesignToken, GlobalComponentConstructor, PassThrough } from '../ts-helpers';

export declare type DrawerPassThroughOptionType = DrawerPassThroughAttributes | ((options: DrawerPassThroughMethodOptions) => DrawerPassThroughAttributes | string) | string | null | undefined;

export declare type DrawerPassThroughTransitionType = TransitionProps | ((options: DrawerPassThroughMethodOptions) => TransitionProps) | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface DrawerPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: DrawerProps;
    /**
     * Defines current inline state.
     */
    state: DrawerState;
    /**
     * Defines valid attributes.
     */
    attrs: any;
    /**
     * Defines parent options.
     */
    parent: any;
    /**
     * Defines passthrough(pt) options in global config.
     */
    global: object | undefined;
}

/**
 * Custom shared passthrough(pt) option method.
 */
export interface DrawerSharedPassThroughMethodOptions {
    /**
     * Defines valid properties.
     */
    props: DrawerProps;
    /**
     * Defines current inline state.
     */
    state: DrawerState;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link DrawerProps.pt}
 */
export interface DrawerPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DrawerPassThroughOptionType;
    /**
     * Used to pass attributes to the header's DOM element.
     */
    header?: DrawerPassThroughOptionType;
    /**
     * Used to pass attributes to the header content's DOM element.
     */
    title?: DrawerPassThroughOptionType;
    /**
     * Used to pass attributes to the close button's DOM element.
     * @see {@link ButtonPassThroughOptions}
     */
    pcCloseButton?: ButtonPassThroughOptions<DrawerSharedPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the content's DOM element.
     */
    content?: DrawerPassThroughOptionType;
    /**
     * Used to pass attributes to the mask's DOM element.
     */
    mask?: DrawerPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
    /**
     * Used to control Vue Transition API.
     */
    transition?: DrawerPassThroughTransitionType;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface DrawerPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in Drawer component.
 */
export interface DrawerState {
    /**
     * Current container visible state as a boolean.
     * @defaultValue false
     */
    containerVisible: boolean;
}

/**
 * Defines valid properties in Drawer component.
 */
export interface DrawerProps {
    /**
     * Specifies the visibility of the dialog.
     * @defaultValue false
     */
    visible?: boolean | undefined;
    /**
     * Specifies the position of the drawer.
     * @defaultValue left
     */
    position?: 'left' | 'right' | 'top' | 'bottom' | 'full' | undefined;
    /**
     * Title content of the dialog.
     */
    header?: string | undefined;
    /**
     * Base zIndex value to use in layering.
     * @defaultValue 0
     */
    baseZIndex?: number | undefined;
    /**
     * Whether to automatically manage layering.
     * @defaultValue true
     */
    autoZIndex?: boolean | undefined;
    /**
     * Whether clicking outside closes the panel.
     * @defaultValue true
     */
    dismissable?: boolean | undefined;
    /**
     * Whether to display a close icon inside the panel.
     * @defaultValue true
     */
    showCloseIcon?: boolean | undefined;
    /**
     * Used to pass the custom value to read for the button inside the component.
     * @defaultValue { severity: 'secondary', text: true, rounded: true }
     */
    closeButtonProps?: object | undefined;
    /**
     * Icon to display in the drawer close button.
     * @deprecated since v3.27.0. Use 'closeicon' slot.
     */
    closeIcon?: string | undefined;
    /**
     * Whether to a modal layer behind the drawer.
     * @defaultValue true
     */
    modal?: boolean | undefined;
    /**
     * Whether background scroll should be blocked when drawer is visible.
     * @defaultValue false
     */
    blockScroll?: boolean | undefined;
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {DrawerPassThroughOptions}
     */
    pt?: PassThrough<DrawerPassThroughOptions>;
    /**
     * Used to configure passthrough(pt) options of the component.
     * @type {PassThroughOptions}
     */
    ptOptions?: PassThroughOptions;
    /**
     * When enabled, it removes component related styles in the core.
     * @defaultValue false
     */
    unstyled?: boolean;
}

/**
 * Defines valid slots in Drawer component.
 */
export interface DrawerSlots {
    /**
     * Custom content template.
     */
    default(): VNode[];
    /**
     * Custom header template.
     *  @param {Object} scope - header slot's params.
     */
    header(scope: {
        /**
         * Style class of the header title
         */
        class: any;
    }): VNode[];
    /**
     * Custom close icon template.
     * @param {Object} scope - close icon slot's params.
     */
    closeicon(scope: {
        /**
         * Style class of the close icon
         */
        class: any;
    }): VNode[];
    /**
     * Custom container slot.
     * @param {Object} scope - container slot's params.
     */
    container(scope: {
        /**
         * Close drawer function.
         * @deprecated since v3.39.0. Use 'closeCallback' property instead.
         */
        onClose: () => void;
        /**
         * Close drawer function.
         */
        closeCallback: () => void;
    }): VNode[];
}

/**
 * Defines valid emits in Drawer component.
 */
export interface DrawerEmits {
    /**
     * Emitted when the value changes.
     * @param {boolean} value - New value.
     */
    'update:modelValue'(value: boolean): void;
    /**
     * Callback to invoke when drawer gets shown.
     */
    show(): void;
    /**
     * Callback to invoke when drawer gets hidden.
     */
    hide(): void;
}

/**
 * **PrimeVue - Drawer**
 *
 * _Drawer is a panel component displayed as an overlay._
 *
 * [Live Demo](https://www.primevue.org/drawer/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 */
declare class Drawer extends ClassComponent<DrawerProps, DrawerSlots, DrawerEmits> {}

declare module 'vue' {
    export interface GlobalComponents {
        Drawer: GlobalComponentConstructor<Drawer>;
    }
}

export default Drawer;
