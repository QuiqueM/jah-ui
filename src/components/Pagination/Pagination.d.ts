export interface PaginationProps {
    modelValue: number;
    totalPages: number;
    siblings?: number;
    size?: 'sm' | 'md' | 'lg';
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
    showEdges?: boolean;
    disabled?: boolean;
}
declare const _default: import('vue').DefineComponent<PaginationProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (page: number) => any;
}, string, import('vue').PublicProps, Readonly<PaginationProps> & Readonly<{
    "onUpdate:modelValue"?: ((page: number) => any) | undefined;
}>, {
    size: "sm" | "md" | "lg";
    rounded: "none" | "sm" | "md" | "lg" | "full";
    disabled: boolean;
    siblings: number;
    showEdges: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
