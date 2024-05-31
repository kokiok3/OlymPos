import type { RowData } from "./TableTypes";

export interface ResponseMenus {
    unique_product: number;
	unique_store_info: number;
	unique_product_group: number;
	product_name: string;
	price: number;
	image: string;
	description: string;
	amount: number;
	options: number[];
}