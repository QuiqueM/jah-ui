export interface StepperStep {
    label: string;
    description?: string;
    error?: boolean;
    disabled?: boolean;
}
export interface StepperProps {
    modelValue: number;
    steps: StepperStep[];
    orientation?: 'horizontal' | 'vertical';
    size?: 'sm' | 'md' | 'lg';
    clickable?: boolean;
    color?: string;
}
declare const _default: import('vue').DefineComponent<StepperProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (index: number) => any;
}, string, import('vue').PublicProps, Readonly<StepperProps> & Readonly<{
    "onUpdate:modelValue"?: ((index: number) => any) | undefined;
}>, {
    size: "sm" | "md" | "lg";
    color: string;
    clickable: boolean;
    orientation: "horizontal" | "vertical";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
