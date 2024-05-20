export interface FormStoreBody {
    store_uid?: number;
    name: string;
    owner: string;
    address: string;
    tel_num: string;
    count: number;
}

export interface FormStore {
    storeName: string | undefined;
    storePhoneNumber: string | undefined;
    storeAddress: string | undefined;
    storeOwner: string | undefined;
    storeTableCnt: number | undefined;
}

export interface StoreId {
    store_uid: number;
}

export interface StoreInfo {
    storeId: number;
    storeName: String;
}

export interface ResponseStores {
    disable_date: null | string,
    last_modify_date: string,
    store_address: string,
    store_name: string,
    store_owner: string,
    store_tel_number: string,
    table_count: number,
    unique_admin: number,
    unique_store_info: number
}