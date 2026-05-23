export interface ButtonProps {
    label: string;
    variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
    iconPosition?: 'left' | 'right';
    disabled?: boolean;
    loading?: boolean;
}
type __VLS_Slots = {
    icon?: () => unknown;
};
declare const __VLS_component: import('vue').DefineComponent<ButtonProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: (event: MouseEvent) => any;
}, string, import('vue').PublicProps, Readonly<ButtonProps> & Readonly<{
    onClick?: ((event: MouseEvent) => any) | undefined;
}>, {
    variant: "primary" | "secondary" | "ghost" | "danger";
    size: "sm" | "md" | "lg";
    rounded: "none" | "sm" | "md" | "lg" | "xl" | "full";
    iconPosition: "left" | "right";
    disabled: boolean;
    loading: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
