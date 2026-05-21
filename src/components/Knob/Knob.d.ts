export interface KnobProps {
    modelValue?: number;
    min?: number;
    max?: number;
    step?: number;
    size?: 'sm' | 'md' | 'lg';
    label?: string;
    suffix?: string;
    color?: string;
    disabled?: boolean;
}
declare const _default: import('vue').DefineComponent<KnobProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: number) => any;
}, string, import('vue').PublicProps, Readonly<KnobProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: number) => any) | undefined;
}>, {
    modelValue: number;
    size: "sm" | "md" | "lg";
    disabled: boolean;
    color: string;
    step: number;
    max: number;
    min: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
