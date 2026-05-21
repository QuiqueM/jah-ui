import { defineAsyncComponent } from 'vue'
import './styles/main.css'

export const Button = defineAsyncComponent(() => import('./components/Button/Button.vue'))
export const Input = defineAsyncComponent(() => import('./components/Input/Input.vue'))
export const Select = defineAsyncComponent(() => import('./components/Select/Select.vue'))
export const Checkbox = defineAsyncComponent(() => import('./components/Checkbox/Checkbox.vue'))
export const Radio = defineAsyncComponent(() => import('./components/Radio/Radio.vue'))
export const Toggle = defineAsyncComponent(() => import('./components/Toggle/Toggle.vue'))
export const Card = defineAsyncComponent(() => import('./components/Card/Card.vue'))
export const Progress = defineAsyncComponent(() => import('./components/Progress/Progress.vue'))
export const Badge = defineAsyncComponent(() => import('./components/Badge/Badge.vue'))
export const Avatar = defineAsyncComponent(() => import('./components/Avatar/Avatar.vue'))
export const AvatarGroup = defineAsyncComponent(() => import('./components/Avatar/AvatarGroup.vue'))
export const Textarea = defineAsyncComponent(() => import('./components/Textarea/Textarea.vue'))
export const Datepicker = defineAsyncComponent(() => import('./components/Datepicker/Datepicker.vue'))
export const DropdownMenu = defineAsyncComponent(() => import('./components/DropdownMenu/DropdownMenu.vue'))
export const DropdownMenuItem = defineAsyncComponent(() => import('./components/DropdownMenu/DropdownMenuItem.vue'))
export const DropdownDivider = defineAsyncComponent(() => import('./components/DropdownMenu/DropdownDivider.vue'))
export const Pagination = defineAsyncComponent(() => import('./components/Pagination/Pagination.vue'))
export const Tooltip = defineAsyncComponent(() => import('./components/Tooltip/Tooltip.vue'))
export const Carousel = defineAsyncComponent(() => import('./components/Carousel/Carousel.vue'))
export const CarouselSlide = defineAsyncComponent(() => import('./components/Carousel/CarouselSlide.vue'))
export const Accordion = defineAsyncComponent(() => import('./components/Accordion/Accordion.vue'))
export const AccordionItem = defineAsyncComponent(() => import('./components/Accordion/AccordionItem.vue'))
export const Alert = defineAsyncComponent(() => import('./components/Alert/Alert.vue'))
export const Skeleton = defineAsyncComponent(() => import('./components/Skeleton/Skeleton.vue'))
export const Knob = defineAsyncComponent(() => import('./components/Knob/Knob.vue'))
export const Rating = defineAsyncComponent(() => import('./components/Rating/Rating.vue'))
export const Stepper = defineAsyncComponent(() => import('./components/Stepper/Stepper.vue'))
export const Upload = defineAsyncComponent(() => import('./components/Upload/Upload.vue'))
export const Chart  = defineAsyncComponent(() => import('./components/Chart/Chart.vue'))
export const Navbar = defineAsyncComponent(() => import('./components/Navbar/Navbar.vue'))
export type { SelectOption, SelectProps } from './components/Select/Select.vue'
export type { StepperStep, StepperProps } from './components/Stepper/Stepper.vue'
export type { NavItem, NavbarProps } from './components/Navbar/Navbar.vue'
export type { ChartKind, ChartProps } from './components/Chart/Chart.vue'
export type { UploadFile, UploadProps } from './components/Upload/Upload.vue'
export type { ButtonProps } from './components/Button/Button.vue'
export type { InputProps } from './components/Input/Input.vue'
export type { CheckboxProps } from './components/Checkbox/Checkbox.vue'
export type { RadioProps } from './components/Radio/Radio.vue'
export type { ToggleProps } from './components/Toggle/Toggle.vue'
export type { CardProps } from './components/Card/Card.vue'
export type { ProgressProps } from './components/Progress/Progress.vue'
export type { BadgeProps } from './components/Badge/Badge.vue'
export type { AvatarProps } from './components/Avatar/Avatar.vue'
export type { AvatarGroupProps } from './components/Avatar/AvatarGroup.vue'
export type { TextareaProps } from './components/Textarea/Textarea.vue'
export type { DatepickerProps } from './components/Datepicker/Datepicker.vue'
export type { DropdownMenuProps } from './components/DropdownMenu/DropdownMenu.vue'
export type { DropdownMenuItemProps } from './components/DropdownMenu/DropdownMenuItem.vue'
export type { PaginationProps } from './components/Pagination/Pagination.vue'
export type { TooltipProps } from './components/Tooltip/Tooltip.vue'
export type { CarouselProps } from './components/Carousel/Carousel.vue'
export type { AccordionProps } from './components/Accordion/Accordion.vue'
export type { AccordionItemProps } from './components/Accordion/AccordionItem.vue'
export type { AlertProps } from './components/Alert/Alert.vue'
export type { SkeletonProps } from './components/Skeleton/Skeleton.vue'
export type { KnobProps } from './components/Knob/Knob.vue'
export type { RatingProps } from './components/Rating/Rating.vue'
