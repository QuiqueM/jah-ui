export interface AlertProps {
    variant?: 'info' | 'success' | 'warning' | 'danger';
    title?: string;
    icon?: boolean;
    dismissible?: boolean;
    modelValue?: boolean;
}
type __VLS_Slots = {
    default?: () => unknown;
    title?: () => unknown;
    icon?: () => unknown;
};
declare const __VLS_component: import('vue').DefineComponent<AlertProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (visible: boolean) => any;
    close: () => any;
}, string, import('vue').PublicProps, Readonly<AlertProps> & Readonly<{
    "onUpdate:modelValue"?: ((visible: boolean) => any) | undefined;
    onClose?: (() => any) | undefined;
}>, {
    modelValue: boolean;
    variant: "info" | "success" | "warning" | "danger";
    icon: boolean;
    dismissible: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
