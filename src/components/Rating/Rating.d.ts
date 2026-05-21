export interface RatingProps {
    modelValue?: number;
    max?: number;
    size?: 'sm' | 'md' | 'lg';
    color?: string;
    allowHalf?: boolean;
    clearable?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    label?: string;
}
declare const _default: import('vue').DefineComponent<RatingProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: number) => any;
}, string, import('vue').PublicProps, Readonly<RatingProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: number) => any) | undefined;
}>, {
    modelValue: number;
    size: "sm" | "md" | "lg";
    disabled: boolean;
    color: string;
    max: number;
    readonly: boolean;
    allowHalf: boolean;
    clearable: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
