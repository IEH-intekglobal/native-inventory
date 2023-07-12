import { app } from './config';
import { items, notifications } from './mock-data';
import type { Firestore, DocumentSnapshot, DocumentReference, FieldPath, QueryDocumentSnapshot, SnapshotOptions, SnapshotMetadata } from "firebase/firestore";

function mockQueryDocumentShapshot<T>(data: T): QueryDocumentSnapshot<T> {
    return {
        data(options?: SnapshotOptions) { return data; },
        exists() { return false },
        metadata: {
            hasPendingWrites: false,
            fromCache: true,
            isEqual(other: SnapshotMetadata) { return this === other },
        } as SnapshotMetadata,
        get(fieldPath: string | FieldPath, options?: SnapshotOptions): any {
            //TODO get document fields
        },
        get id() { return 'id' }, //TODO get unique ID
        get ref(): DocumentReference<T> {
            //TODO add missing properties
            return {} as DocumentReference<T>;
        }
    }
}


export const db: Firestore = {
    type: 'firestore-lite',
    app,
    toJSON() { return {} }
};

export async function getItems() {
    return items;
}

export async function getNextItems(lastVisible?: DocumentSnapshot<unknown>) {
    const foundItems: Item[] = [];
    const newFirstVisible: QueryDocumentSnapshot<Item> = mockQueryDocumentShapshot({} as Item);
    const newLastVisible: QueryDocumentSnapshot<Item> = mockQueryDocumentShapshot({} as Item);
    return {
        foundItems,
        newFirstVisible,
        newLastVisible
    };
}

export async function getPreviousItems(firstVisible: unknown) {
    const foundItems: Item[] = [];
    const newFirstVisible: QueryDocumentSnapshot<Item> = mockQueryDocumentShapshot({} as Item);
    const newLastVisible: QueryDocumentSnapshot<Item> = mockQueryDocumentShapshot({} as Item);
    return {
        foundItems,
        newFirstVisible,
        newLastVisible
    };
}

export async function getItemById(id: unknown) {
    return items.find(i=>i.id === id) as Item;
}

export async function getRecentItems() {
    return items;
}

export async function getNotifications() {
    return notifications;
}

export async function saveScanned(data: string) {

}