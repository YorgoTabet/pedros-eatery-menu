export interface Item {
    name: string;
    description?: string;
    price: string;
}

export type SubSections = Record<string, Record<string, Item>>