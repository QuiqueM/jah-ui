export interface AccordionItemProps {
    value: string;
    title?: string;
    disabled?: boolean;
}
type __VLS_Slots = {
    default?: () => unknown;
    title?: () => unknown;
};
declare const __VLS_component: import('vue').DefineComponent<AccordionItemProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<AccordionItemProps> & Readonly<{}>, {
    disabled: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
