export interface AccordionProps {
    modelValue?: string | string[];
    multiple?: boolean;
    defaultOpen?: string | string[];
}
type __VLS_Slots = {
    default?: () => unknown;
};
declare const __VLS_component: import('vue').DefineComponent<AccordionProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string | string[]) => any;
}, string, import('vue').PublicProps, Readonly<AccordionProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | string[]) => any) | undefined;
}>, {
    multiple: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
