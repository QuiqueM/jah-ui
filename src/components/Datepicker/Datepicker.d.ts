export interface DatepickerProps {
    modelValue?: string;
    label?: string;
    placeholder?: string;
    size?: 'sm' | 'md' | 'lg';
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    disabled?: boolean;
    error?: string;
    hint?: string;
    min?: string;
    max?: string;
    locale?: string;
}
declare const _default: import('vue').DefineComponent<DatepickerProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string) => any;
}, string, import('vue').PublicProps, Readonly<DatepickerProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {
    size: "sm" | "md" | "lg";
    rounded: "none" | "sm" | "md" | "lg" | "xl";
    disabled: boolean;
    locale: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
