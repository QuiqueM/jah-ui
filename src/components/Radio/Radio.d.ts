export interface RadioProps {
    modelValue?: string | number | null;
    value: string | number;
    label?: string;
    hint?: string;
    name?: string;
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    error?: boolean;
}
declare const _default: import('vue').DefineComponent<RadioProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string | number) => any;
}, string, import('vue').PublicProps, Readonly<RadioProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
}>, {
    size: "sm" | "md" | "lg";
    disabled: boolean;
    modelValue: string | number | null;
    error: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
