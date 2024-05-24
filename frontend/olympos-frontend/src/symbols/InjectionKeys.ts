import { type InjectionKey } from "vue";

type DateFormat = (date: string) => string;
interface MomentLib {
    format: DateFormat;
}
export const momentLibKey: InjectionKey<MomentLib> = Symbol("momentLib");