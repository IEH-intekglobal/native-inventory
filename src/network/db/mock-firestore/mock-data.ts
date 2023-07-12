import { createMockItem, createMockNotification } from "./util";

const BASE_URL = 'https://gitlab.com/IEH/itkglob-assets/-/raw/master/app-assets';

export const items: Item[] = [
    createMockItem(
        "Apple",
        30, 30,
        BASE_URL + "/apple-fruit.jpg",
        new Date(2023, 6, 12)),
    createMockItem(
        "Sandwich",
        30, 30,
        BASE_URL + "/sandwich.png",
        new Date(2023, 6, 12)),
];

export const notifications: Notification[] = [
    createMockNotification(
        "Get Semiconductors",
        BASE_URL + "/apple-fruit.jpg",
        "unread",
        new Date(2022, 1, 24)
    ),
    createMockNotification(
        "Check Inventory",
        BASE_URL + "/apple-fruit.jpg",
        "read",
        new Date(2022, 1, 24)
    ),
    
];

export const scanned: Scanned[] = [];