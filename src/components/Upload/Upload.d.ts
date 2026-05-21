export interface UploadFile {
    id: string;
    file: File;
    error?: string;
}
export interface UploadProps {
    modelValue?: UploadFile[];
    accept?: string;
    multiple?: boolean;
    maxSize?: number;
    maxFiles?: number;
    disabled?: boolean;
    label?: string;
    hint?: string;
    error?: string;
}
declare const _default: import('vue').DefineComponent<UploadProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (files: UploadFile[]) => any;
    reject: (reasons: {
        file: File;
        reason: string;
    }[]) => any;
}, string, import('vue').PublicProps, Readonly<UploadProps> & Readonly<{
    "onUpdate:modelValue"?: ((files: UploadFile[]) => any) | undefined;
    onReject?: ((reasons: {
        file: File;
        reason: string;
    }[]) => any) | undefined;
}>, {
    modelValue: UploadFile[];
    disabled: boolean;
    multiple: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
