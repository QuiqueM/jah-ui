export interface ProgressProps {
    value?: number;
    max?: number;
    variant?: 'primary' | 'success' | 'warning' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    rounded?: 'none' | 'sm' | 'md' | 'full';
    label?: string;
    showValue?: boolean;
    indeterminate?: boolean;
    animated?: boolean;
}
declare const _default: import('vue').DefineComponent<ProgressProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<ProgressProps> & Readonly<{}>, {
    variant: "primary" | "success" | "warning" | "danger";
    size: "sm" | "md" | "lg";
    rounded: "none" | "sm" | "md" | "full";
    value: number;
    indeterminate: boolean;
    max: number;
    showValue: boolean;
    animated: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
