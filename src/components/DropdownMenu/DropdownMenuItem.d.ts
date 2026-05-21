export interface DropdownMenuItemProps {
    label?: string;
    shortcut?: string;
    disabled?: boolean;
    danger?: boolean;
}
type __VLS_Slots = {
    icon?: () => unknown;
    default?: () => unknown;
};
declare const __VLS_component: import('vue').DefineComponent<DropdownMenuItemProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: (event: MouseEvent) => any;
}, string, import('vue').PublicProps, Readonly<DropdownMenuItemProps> & Readonly<{
    onClick?: ((event: MouseEvent) => any) | undefined;
}>, {
    disabled: boolean;
    danger: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
