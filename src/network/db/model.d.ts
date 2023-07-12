interface Entity {
    date: {
        seconds: number;
        toString(): string;
        toLocaleString(): string;
    }
}

/*
    Firebase DB entities
*/

interface Item extends Entity{
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

type NotificationStatus = "unread" | "read";

interface Notification extends Entity{
    id: string;
    title: string;
    image: string;
    status: NotificationStatus
}

interface Scanned extends Entity {

}