export interface InputProps {
    modelValue?: string | number;
    type?: 'text' | 'number' | 'password';
    placeholder?: string;
    prefix?: string;
    suffix?: string;
    size?: 'sm' | 'md' | 'lg';
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
    disabled?: boolean;
    error?: boolean;
    label?: string;
    hint?: string;
}
type __VLS_Slots = {
    'icon-left'?: () => unknown;
    'icon-right'?: () => unknown;
};
declare const __VLS_component: import('vue').DefineComponent<InputProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string | number) => any;
    focus: (event: FocusEvent) => any;
    blur: (event: FocusEvent) => any;
}, string, import('vue').PublicProps, Readonly<InputProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
    onFocus?: ((event: FocusEvent) => any) | undefined;
    onBlur?: ((event: FocusEvent) => any) | undefined;
}>, {
    size: "sm" | "md" | "lg";
    rounded: "none" | "sm" | "md" | "lg" | "xl" | "full";
    disabled: boolean;
    type: "text" | "number" | "password";
    error: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
