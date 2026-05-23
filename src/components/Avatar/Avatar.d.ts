export interface AvatarProps {
    src?: string;
    alt?: string;
    name?: string;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
    variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'auto';
    status?: 'online' | 'offline' | 'busy' | 'away';
    bordered?: boolean;
}
declare const _default: import('vue').DefineComponent<AvatarProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<AvatarProps> & Readonly<{}>, {
    variant: "primary" | "secondary" | "success" | "warning" | "danger" | "auto";
    size: "xs" | "sm" | "md" | "lg" | "xl";
    rounded: "none" | "sm" | "md" | "lg" | "full";
    bordered: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
