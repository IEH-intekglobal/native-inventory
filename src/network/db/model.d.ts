interface Entity {
    date: {
        seconds: number;
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

interface Notification extends Entity{
    id: string;
    title: string;
    image: string;
    status: "unread" | "read"

}

interface Scanned extends Entity {

}