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

}

interface Scanned extends Entity {

}