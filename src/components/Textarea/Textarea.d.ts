export interface TextareaProps {
    modelValue?: string;
    label?: string;
    placeholder?: string;
    rows?: number;
    size?: 'sm' | 'md' | 'lg';
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    resize?: 'none' | 'vertical' | 'horizontal' | 'both';
    disabled?: boolean;
    readonly?: boolean;
    error?: string;
    hint?: string;
    maxlength?: number;
    showCount?: boolean;
}
declare const _default: import('vue').DefineComponent<TextareaProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string) => any;
}, string, import('vue').PublicProps, Readonly<TextareaProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {
    modelValue: string;
    size: "sm" | "md" | "lg";
    rounded: "none" | "sm" | "md" | "lg" | "xl";
    disabled: boolean;
    resize: "none" | "vertical" | "horizontal" | "both";
    rows: number;
    readonly: boolean;
    showCount: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
