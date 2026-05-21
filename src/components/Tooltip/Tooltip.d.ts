export interface TooltipProps {
    content: string;
    placement?: 'top' | 'bottom' | 'left' | 'right';
    delay?: number;
    disabled?: boolean;
    maxWidth?: string;
}
type __VLS_Slots = {
    default: () => unknown;
};
declare const __VLS_component: import('vue').DefineComponent<TooltipProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<TooltipProps> & Readonly<{}>, {
    disabled: boolean;
    placement: "top" | "bottom" | "left" | "right";
    delay: number;
    maxWidth: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
