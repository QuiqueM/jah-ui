import { ChartData, ChartOptions } from 'chart.js';
export type ChartKind = 'line' | 'bar' | 'pie' | 'doughnut' | 'radar' | 'polarArea' | 'bubble' | 'scatter';
export interface ChartProps {
    type: ChartKind;
    data: ChartData<any>;
    options?: ChartOptions<any>;
    title?: string;
    height?: string;
}
declare const _default: import('vue').DefineComponent<ChartProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<ChartProps> & Readonly<{}>, {
    height: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
