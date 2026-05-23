export interface CardProps {
    title?: string;
    subtitle?: string;
    padding?: 'none' | 'sm' | 'md' | 'lg';
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    hoverable?: boolean;
    clickable?: boolean;
    coverPosition?: 'top' | 'left' | 'right';
}
type __VLS_Slots = {
    default?: () => unknown;
    cover?: () => unknown;
    header?: () => unknown;
    footer?: () => unknown;
};
declare const __VLS_component: import('vue').DefineComponent<CardProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: (event: MouseEvent) => any;
}, string, import('vue').PublicProps, Readonly<CardProps> & Readonly<{
    onClick?: ((event: MouseEvent) => any) | undefined;
}>, {
    rounded: "none" | "sm" | "md" | "lg" | "xl";
    padding: "none" | "sm" | "md" | "lg";
    hoverable: boolean;
    clickable: boolean;
    coverPosition: "top" | "left" | "right";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
