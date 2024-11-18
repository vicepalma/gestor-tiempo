declare module "react-big-calendar" {
  import { ComponentType, ReactNode } from "react";

  export interface CalendarProps {
    localizer: any;
    events: any[];
    startAccessor: string | ((event: any) => Date);
    endAccessor: string | ((event: any) => Date);
    defaultView?: string;
    views?: string[] | { [view: string]: boolean | ComponentType<any> };
    step?: number;
    selectable?: boolean;
    onSelectSlot?: (slotInfo: { start: Date; end: Date }) => void;
    onSelectEvent?: (event: any) => void;
    style?: React.CSSProperties;
    culture?: string;
    components?: {
      day?: {
        header?: ComponentType<{ label: string }>;
      };
      week?: {
        header?: ComponentType<{ date: Date }>;
      };
      toolbar?: ComponentType<any>;
    };
  }

  export const Calendar: ComponentType<CalendarProps>;
  export const dateFnsLocalizer: (config: any) => any;
}
