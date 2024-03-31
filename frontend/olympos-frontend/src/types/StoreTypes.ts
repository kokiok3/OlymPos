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

export interface StoreInfo {
    store_uid: number;
}