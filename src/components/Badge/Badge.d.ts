export interface BadgeProps {
    variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    rounded?: 'none' | 'sm' | 'md' | 'full';
    dot?: boolean;
    outline?: boolean;
}
type __VLS_Slots = {
    default?: () => unknown;
};
declare const __VLS_component: import('vue').DefineComponent<BadgeProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<BadgeProps> & Readonly<{}>, {
    variant: "primary" | "secondary" | "success" | "warning" | "danger";
    size: "sm" | "md" | "lg";
    rounded: "none" | "sm" | "md" | "full";
    dot: boolean;
    outline: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
