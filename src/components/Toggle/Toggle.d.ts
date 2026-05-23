export interface ToggleProps {
    modelValue?: boolean;
    label?: string;
    hint?: string;
    labelPosition?: 'left' | 'right';
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    error?: boolean;
}
declare const _default: import('vue').DefineComponent<ToggleProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: boolean) => any;
    change: (value: boolean) => any;
}, string, import('vue').PublicProps, Readonly<ToggleProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    onChange?: ((value: boolean) => any) | undefined;
}>, {
    size: "sm" | "md" | "lg";
    disabled: boolean;
    modelValue: boolean;
    error: boolean;
    labelPosition: "left" | "right";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
