export interface SelectOption {
    label: string;
    value: string | number;
    disabled?: boolean;
}
export interface SelectProps {
    modelValue?: string | number | null;
    options: SelectOption[];
    placeholder?: string;
    label?: string;
    hint?: string;
    size?: 'sm' | 'md' | 'lg';
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
    disabled?: boolean;
    error?: boolean;
}
declare const _default: import('vue').DefineComponent<SelectProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string | number | null) => any;
    change: (value: string | number | null) => any;
}, string, import('vue').PublicProps, Readonly<SelectProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | number | null) => any) | undefined;
    onChange?: ((value: string | number | null) => any) | undefined;
}>, {
    modelValue: string | number | null;
    placeholder: string;
    size: "sm" | "md" | "lg";
    rounded: "none" | "sm" | "md" | "lg" | "xl" | "full";
    disabled: boolean;
    error: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
