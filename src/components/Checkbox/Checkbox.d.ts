export interface CheckboxProps {
    modelValue?: boolean | (string | number)[];
    value?: string | number;
    label?: string;
    hint?: string;
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    indeterminate?: boolean;
    error?: boolean;
}
declare const _default: import('vue').DefineComponent<CheckboxProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: boolean | (string | number)[]) => any;
}, string, import('vue').PublicProps, Readonly<CheckboxProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: boolean | (string | number)[]) => any) | undefined;
}>, {
    size: "sm" | "md" | "lg";
    disabled: boolean;
    error: boolean;
    indeterminate: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
