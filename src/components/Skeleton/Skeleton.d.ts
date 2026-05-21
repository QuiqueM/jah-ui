export interface SkeletonProps {
    variant?: 'text' | 'circle' | 'rect' | 'button';
    lines?: number;
    width?: string;
    height?: string;
    rounded?: string;
    animated?: boolean;
}
declare const _default: import('vue').DefineComponent<SkeletonProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<SkeletonProps> & Readonly<{}>, {
    variant: "text" | "circle" | "rect" | "button";
    animated: boolean;
    lines: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
