export interface CarouselProps {
    modelValue?: number;
    transition?: 'slide' | 'fade';
    autoplay?: boolean;
    interval?: number;
    loop?: boolean;
    showArrows?: boolean;
    showDots?: boolean;
    height?: string;
}
type __VLS_Slots = {
    default?: () => unknown;
};
declare const __VLS_component: import('vue').DefineComponent<CarouselProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (index: number) => any;
    change: (index: number) => any;
}, string, import('vue').PublicProps, Readonly<CarouselProps> & Readonly<{
    "onUpdate:modelValue"?: ((index: number) => any) | undefined;
    onChange?: ((index: number) => any) | undefined;
}>, {
    modelValue: number;
    transition: "slide" | "fade";
    autoplay: boolean;
    interval: number;
    loop: boolean;
    showArrows: boolean;
    showDots: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
