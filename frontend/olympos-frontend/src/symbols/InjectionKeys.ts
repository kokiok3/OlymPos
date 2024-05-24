import { type InjectionKey } from "vue";

type DateFormat = (date: string) => string;
interface MomentPlugin {
    format: DateFormat;
}
export const momentPlunginKey: InjectionKey<MomentPlugin> = Symbol("momentPlungin");