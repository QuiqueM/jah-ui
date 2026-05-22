export declare const Button: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('.').ButtonProps> & Readonly<{
        onClick?: ((event: MouseEvent) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        click: (event: MouseEvent) => any;
    }, import('vue').PublicProps, {
        size: "sm" | "md" | "lg";
        rounded: "none" | "sm" | "md" | "lg" | "xl" | "full";
        disabled: boolean;
        variant: "primary" | "secondary" | "ghost" | "danger";
        iconPosition: "left" | "right";
        loading: boolean;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('.').ButtonProps> & Readonly<{
        onClick?: ((event: MouseEvent) => any) | undefined;
    }>, {}, {}, {}, {}, {
        size: "sm" | "md" | "lg";
        rounded: "none" | "sm" | "md" | "lg" | "xl" | "full";
        disabled: boolean;
        variant: "primary" | "secondary" | "ghost" | "danger";
        iconPosition: "left" | "right";
        loading: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('.').ButtonProps> & Readonly<{
    onClick?: ((event: MouseEvent) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: (event: MouseEvent) => any;
}, string, {
    size: "sm" | "md" | "lg";
    rounded: "none" | "sm" | "md" | "lg" | "xl" | "full";
    disabled: boolean;
    variant: "primary" | "secondary" | "ghost" | "danger";
    iconPosition: "left" | "right";
    loading: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        icon?: () => unknown;
    };
});
export declare const Input: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('.').InputProps> & Readonly<{
        "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
        onBlur?: ((event: FocusEvent) => any) | undefined;
        onFocus?: ((event: FocusEvent) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "update:modelValue": (value: string | number) => any;
        blur: (event: FocusEvent) => any;
        focus: (event: FocusEvent) => any;
    }, import('vue').PublicProps, {
        size: "sm" | "md" | "lg";
        rounded: "none" | "sm" | "md" | "lg" | "xl" | "full";
        disabled: boolean;
        error: boolean;
        type: "text" | "number" | "password";
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('.').InputProps> & Readonly<{
        "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
        onBlur?: ((event: FocusEvent) => any) | undefined;
        onFocus?: ((event: FocusEvent) => any) | undefined;
    }>, {}, {}, {}, {}, {
        size: "sm" | "md" | "lg";
        rounded: "none" | "sm" | "md" | "lg" | "xl" | "full";
        disabled: boolean;
        error: boolean;
        type: "text" | "number" | "password";
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('.').InputProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
    onBlur?: ((event: FocusEvent) => any) | undefined;
    onFocus?: ((event: FocusEvent) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string | number) => any;
    blur: (event: FocusEvent) => any;
    focus: (event: FocusEvent) => any;
}, string, {
    size: "sm" | "md" | "lg";
    rounded: "none" | "sm" | "md" | "lg" | "xl" | "full";
    disabled: boolean;
    error: boolean;
    type: "text" | "number" | "password";
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        'icon-left'?: () => unknown;
        'icon-right'?: () => unknown;
    };
});
export declare const Select: import('vue').DefineComponent<import('.').SelectProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string | number | null) => any;
    change: (value: string | number | null) => any;
}, string, import('vue').PublicProps, Readonly<import('.').SelectProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | number | null) => any) | undefined;
    onChange?: ((value: string | number | null) => any) | undefined;
}>, {
    modelValue: string | number | null;
    placeholder: string;
    size: "sm" | "md" | "lg";
    rounded: "none" | "sm" | "md" | "lg" | "xl" | "full";
    disabled: boolean;
    error: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export declare const Checkbox: import('vue').DefineComponent<import('.').CheckboxProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: boolean | (string | number)[]) => any;
}, string, import('vue').PublicProps, Readonly<import('.').CheckboxProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: boolean | (string | number)[]) => any) | undefined;
}>, {
    size: "sm" | "md" | "lg";
    disabled: boolean;
    error: boolean;
    indeterminate: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export declare const Radio: import('vue').DefineComponent<import('.').RadioProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string | number) => any;
}, string, import('vue').PublicProps, Readonly<import('.').RadioProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
}>, {
    modelValue: string | number | null;
    size: "sm" | "md" | "lg";
    disabled: boolean;
    error: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export declare const Toggle: import('vue').DefineComponent<import('.').ToggleProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: boolean) => any;
    change: (value: boolean) => any;
}, string, import('vue').PublicProps, Readonly<import('.').ToggleProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    onChange?: ((value: boolean) => any) | undefined;
}>, {
    modelValue: boolean;
    size: "sm" | "md" | "lg";
    disabled: boolean;
    error: boolean;
    labelPosition: "left" | "right";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export declare const Card: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('.').CardProps> & Readonly<{
        onClick?: ((event: MouseEvent) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        click: (event: MouseEvent) => any;
    }, import('vue').PublicProps, {
        rounded: "none" | "sm" | "md" | "lg" | "xl";
        clickable: boolean;
        padding: "none" | "sm" | "md" | "lg";
        hoverable: boolean;
        coverPosition: "top" | "left" | "right";
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('.').CardProps> & Readonly<{
        onClick?: ((event: MouseEvent) => any) | undefined;
    }>, {}, {}, {}, {}, {
        rounded: "none" | "sm" | "md" | "lg" | "xl";
        clickable: boolean;
        padding: "none" | "sm" | "md" | "lg";
        hoverable: boolean;
        coverPosition: "top" | "left" | "right";
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('.').CardProps> & Readonly<{
    onClick?: ((event: MouseEvent) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: (event: MouseEvent) => any;
}, string, {
    rounded: "none" | "sm" | "md" | "lg" | "xl";
    clickable: boolean;
    padding: "none" | "sm" | "md" | "lg";
    hoverable: boolean;
    coverPosition: "top" | "left" | "right";
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?: () => unknown;
        cover?: () => unknown;
        header?: () => unknown;
        footer?: () => unknown;
    };
});
export declare const Progress: import('vue').DefineComponent<import('.').ProgressProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('.').ProgressProps> & Readonly<{}>, {
    size: "sm" | "md" | "lg";
    rounded: "none" | "sm" | "md" | "full";
    variant: "primary" | "success" | "warning" | "danger";
    value: number;
    indeterminate: boolean;
    max: number;
    showValue: boolean;
    animated: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export declare const Badge: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('.').BadgeProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
        size: "sm" | "md" | "lg";
        rounded: "none" | "sm" | "md" | "full";
        variant: "primary" | "secondary" | "success" | "warning" | "danger";
        dot: boolean;
        outline: boolean;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('.').BadgeProps> & Readonly<{}>, {}, {}, {}, {}, {
        size: "sm" | "md" | "lg";
        rounded: "none" | "sm" | "md" | "full";
        variant: "primary" | "secondary" | "success" | "warning" | "danger";
        dot: boolean;
        outline: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('.').BadgeProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
    size: "sm" | "md" | "lg";
    rounded: "none" | "sm" | "md" | "full";
    variant: "primary" | "secondary" | "success" | "warning" | "danger";
    dot: boolean;
    outline: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?: () => unknown;
    };
});
export declare const Avatar: import('vue').DefineComponent<import('.').AvatarProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('.').AvatarProps> & Readonly<{}>, {
    size: "xs" | "sm" | "md" | "lg" | "xl";
    rounded: "none" | "sm" | "md" | "lg" | "full";
    variant: "primary" | "secondary" | "success" | "warning" | "danger" | "auto";
    bordered: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export declare const AvatarGroup: import('vue').DefineComponent<import('.').AvatarGroupProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('.').AvatarGroupProps> & Readonly<{}>, {
    size: "xs" | "sm" | "md" | "lg" | "xl";
    overlap: "sm" | "md" | "lg";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export declare const Textarea: import('vue').DefineComponent<import('.').TextareaProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string) => any;
}, string, import('vue').PublicProps, Readonly<import('.').TextareaProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {
    modelValue: string;
    size: "sm" | "md" | "lg";
    rounded: "none" | "sm" | "md" | "lg" | "xl";
    disabled: boolean;
    resize: "none" | "vertical" | "horizontal" | "both";
    rows: number;
    readonly: boolean;
    showCount: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export declare const Datepicker: import('vue').DefineComponent<import('.').DatepickerProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string) => any;
}, string, import('vue').PublicProps, Readonly<import('.').DatepickerProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {
    size: "sm" | "md" | "lg";
    rounded: "none" | "sm" | "md" | "lg" | "xl";
    disabled: boolean;
    locale: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export declare const DropdownMenu: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('.').DropdownMenuProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
        disabled: boolean;
        placement: "bottom-start" | "bottom-end" | "top-start" | "top-end";
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('.').DropdownMenuProps> & Readonly<{}>, {}, {}, {}, {}, {
        disabled: boolean;
        placement: "bottom-start" | "bottom-end" | "top-start" | "top-end";
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('.').DropdownMenuProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
    disabled: boolean;
    placement: "bottom-start" | "bottom-end" | "top-start" | "top-end";
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        trigger?: () => unknown;
        default?: () => unknown;
    };
});
export declare const DropdownMenuItem: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('.').DropdownMenuItemProps> & Readonly<{
        onClick?: ((event: MouseEvent) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        click: (event: MouseEvent) => any;
    }, import('vue').PublicProps, {
        disabled: boolean;
        danger: boolean;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('.').DropdownMenuItemProps> & Readonly<{
        onClick?: ((event: MouseEvent) => any) | undefined;
    }>, {}, {}, {}, {}, {
        disabled: boolean;
        danger: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('.').DropdownMenuItemProps> & Readonly<{
    onClick?: ((event: MouseEvent) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: (event: MouseEvent) => any;
}, string, {
    disabled: boolean;
    danger: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        icon?: () => unknown;
        default?: () => unknown;
    };
});
export declare const DropdownDivider: import('vue').DefineComponent<{}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export declare const Pagination: import('vue').DefineComponent<import('.').PaginationProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (page: number) => any;
}, string, import('vue').PublicProps, Readonly<import('.').PaginationProps> & Readonly<{
    "onUpdate:modelValue"?: ((page: number) => any) | undefined;
}>, {
    size: "sm" | "md" | "lg";
    rounded: "none" | "sm" | "md" | "lg" | "full";
    disabled: boolean;
    siblings: number;
    showEdges: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export declare const Tooltip: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('.').TooltipProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
        disabled: boolean;
        placement: "top" | "bottom" | "left" | "right";
        delay: number;
        maxWidth: string;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('.').TooltipProps> & Readonly<{}>, {}, {}, {}, {}, {
        disabled: boolean;
        placement: "top" | "bottom" | "left" | "right";
        delay: number;
        maxWidth: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('.').TooltipProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
    disabled: boolean;
    placement: "top" | "bottom" | "left" | "right";
    delay: number;
    maxWidth: string;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default: () => unknown;
    };
});
export declare const Carousel: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('.').CarouselProps> & Readonly<{
        "onUpdate:modelValue"?: ((index: number) => any) | undefined;
        onChange?: ((index: number) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "update:modelValue": (index: number) => any;
        change: (index: number) => any;
    }, import('vue').PublicProps, {
        modelValue: number;
        transition: "slide" | "fade";
        autoplay: boolean;
        interval: number;
        loop: boolean;
        showArrows: boolean;
        showDots: boolean;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('.').CarouselProps> & Readonly<{
        "onUpdate:modelValue"?: ((index: number) => any) | undefined;
        onChange?: ((index: number) => any) | undefined;
    }>, {}, {}, {}, {}, {
        modelValue: number;
        transition: "slide" | "fade";
        autoplay: boolean;
        interval: number;
        loop: boolean;
        showArrows: boolean;
        showDots: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('.').CarouselProps> & Readonly<{
    "onUpdate:modelValue"?: ((index: number) => any) | undefined;
    onChange?: ((index: number) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (index: number) => any;
    change: (index: number) => any;
}, string, {
    modelValue: number;
    transition: "slide" | "fade";
    autoplay: boolean;
    interval: number;
    loop: boolean;
    showArrows: boolean;
    showDots: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?: () => unknown;
    };
});
export declare const CarouselSlide: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?: () => unknown;
    };
});
export declare const Accordion: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('.').AccordionProps> & Readonly<{
        "onUpdate:modelValue"?: ((value: string | string[]) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "update:modelValue": (value: string | string[]) => any;
    }, import('vue').PublicProps, {
        multiple: boolean;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('.').AccordionProps> & Readonly<{
        "onUpdate:modelValue"?: ((value: string | string[]) => any) | undefined;
    }>, {}, {}, {}, {}, {
        multiple: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('.').AccordionProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | string[]) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string | string[]) => any;
}, string, {
    multiple: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?: () => unknown;
    };
});
export declare const AccordionItem: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('.').AccordionItemProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
        disabled: boolean;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('.').AccordionItemProps> & Readonly<{}>, {}, {}, {}, {}, {
        disabled: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('.').AccordionItemProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
    disabled: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?: () => unknown;
        title?: () => unknown;
    };
});
export declare const Alert: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('.').AlertProps> & Readonly<{
        "onUpdate:modelValue"?: ((visible: boolean) => any) | undefined;
        onClose?: (() => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "update:modelValue": (visible: boolean) => any;
        close: () => any;
    }, import('vue').PublicProps, {
        modelValue: boolean;
        variant: "info" | "success" | "warning" | "danger";
        icon: boolean;
        dismissible: boolean;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('.').AlertProps> & Readonly<{
        "onUpdate:modelValue"?: ((visible: boolean) => any) | undefined;
        onClose?: (() => any) | undefined;
    }>, {}, {}, {}, {}, {
        modelValue: boolean;
        variant: "info" | "success" | "warning" | "danger";
        icon: boolean;
        dismissible: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('.').AlertProps> & Readonly<{
    "onUpdate:modelValue"?: ((visible: boolean) => any) | undefined;
    onClose?: (() => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (visible: boolean) => any;
    close: () => any;
}, string, {
    modelValue: boolean;
    variant: "info" | "success" | "warning" | "danger";
    icon: boolean;
    dismissible: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?: () => unknown;
        title?: () => unknown;
        icon?: () => unknown;
    };
});
export declare const Skeleton: import('vue').DefineComponent<import('.').SkeletonProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('.').SkeletonProps> & Readonly<{}>, {
    variant: "text" | "circle" | "rect" | "button";
    animated: boolean;
    lines: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export declare const Knob: import('vue').DefineComponent<import('.').KnobProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: number) => any;
}, string, import('vue').PublicProps, Readonly<import('.').KnobProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: number) => any) | undefined;
}>, {
    modelValue: number;
    size: "sm" | "md" | "lg";
    disabled: boolean;
    color: string;
    step: number;
    max: number;
    min: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export declare const Rating: import('vue').DefineComponent<import('.').RatingProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: number) => any;
}, string, import('vue').PublicProps, Readonly<import('.').RatingProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: number) => any) | undefined;
}>, {
    modelValue: number;
    size: "sm" | "md" | "lg";
    disabled: boolean;
    color: string;
    max: number;
    readonly: boolean;
    allowHalf: boolean;
    clearable: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export declare const Stepper: import('vue').DefineComponent<import('.').StepperProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (index: number) => any;
}, string, import('vue').PublicProps, Readonly<import('.').StepperProps> & Readonly<{
    "onUpdate:modelValue"?: ((index: number) => any) | undefined;
}>, {
    size: "sm" | "md" | "lg";
    orientation: "horizontal" | "vertical";
    clickable: boolean;
    color: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export declare const Upload: import('vue').DefineComponent<import('.').UploadProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (files: import('.').UploadFile[]) => any;
    reject: (reasons: {
        file: File;
        reason: string;
    }[]) => any;
}, string, import('vue').PublicProps, Readonly<import('.').UploadProps> & Readonly<{
    "onUpdate:modelValue"?: ((files: import('.').UploadFile[]) => any) | undefined;
    onReject?: ((reasons: {
        file: File;
        reason: string;
    }[]) => any) | undefined;
}>, {
    modelValue: import('.').UploadFile[];
    disabled: boolean;
    multiple: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export declare const Chart: import('vue').DefineComponent<import('.').ChartProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('.').ChartProps> & Readonly<{}>, {
    height: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export declare const Navbar: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('.').NavbarProps> & Readonly<{
        "onItem-click"?: ((item: import('.').NavItem) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "item-click": (item: import('.').NavItem) => any;
    }, import('vue').PublicProps, {
        items: import('.').NavItem[];
        sticky: boolean;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('.').NavbarProps> & Readonly<{
        "onItem-click"?: ((item: import('.').NavItem) => any) | undefined;
    }>, {}, {}, {}, {}, {
        items: import('.').NavItem[];
        sticky: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('.').NavbarProps> & Readonly<{
    "onItem-click"?: ((item: import('.').NavItem) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "item-click": (item: import('.').NavItem) => any;
}, string, {
    items: import('.').NavItem[];
    sticky: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        brand?(): unknown;
        actions?(): unknown;
    };
});
export type { SelectOption, SelectProps } from './components/Select/Select';
export type { StepperStep, StepperProps } from './components/Stepper/Stepper';
export type { NavItem, NavbarProps } from './components/Navbar/Navbar';
export type { ChartKind, ChartProps } from './components/Chart/Chart';
export type { UploadFile, UploadProps } from './components/Upload/Upload';
export type { ButtonProps } from './components/Button/Button';
export type { InputProps } from './components/Input/Input';
export type { CheckboxProps } from './components/Checkbox/Checkbox';
export type { RadioProps } from './components/Radio/Radio';
export type { ToggleProps } from './components/Toggle/Toggle';
export type { CardProps } from './components/Card/Card';
export type { ProgressProps } from './components/Progress/Progress';
export type { BadgeProps } from './components/Badge/Badge';
export type { AvatarProps } from './components/Avatar/Avatar';
export type { AvatarGroupProps } from './components/Avatar/AvatarGroup';
export type { TextareaProps } from './components/Textarea/Textarea';
export type { DatepickerProps } from './components/Datepicker/Datepicker';
export type { DropdownMenuProps } from './components/DropdownMenu/DropdownMenu';
export type { DropdownMenuItemProps } from './components/DropdownMenu/DropdownMenuItem';
export type { PaginationProps } from './components/Pagination/Pagination';
export type { TooltipProps } from './components/Tooltip/Tooltip';
export type { CarouselProps } from './components/Carousel/Carousel';
export type { AccordionProps } from './components/Accordion/Accordion';
export type { AccordionItemProps } from './components/Accordion/AccordionItem';
export type { AlertProps } from './components/Alert/Alert';
export type { SkeletonProps } from './components/Skeleton/Skeleton';
export type { KnobProps } from './components/Knob/Knob';
export type { RatingProps } from './components/Rating/Rating';
