export interface NavItem {
    label: string;
    href?: string;
    active?: boolean;
    disabled?: boolean;
}
export interface NavbarProps {
    items?: NavItem[];
    sticky?: boolean;
}
type __VLS_Slots = {
    brand?(): unknown;
    actions?(): unknown;
};
declare const __VLS_component: import('vue').DefineComponent<NavbarProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "item-click": (item: NavItem) => any;
}, string, import('vue').PublicProps, Readonly<NavbarProps> & Readonly<{
    "onItem-click"?: ((item: NavItem) => any) | undefined;
}>, {
    items: NavItem[];
    sticky: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
