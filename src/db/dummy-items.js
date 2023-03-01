export const items = [
  {
    id: "1",
    name: "DM500",
    quantity: 200,
    location: "Main Warehouse",
    price: 1000,
    image:
      "https://www.leica-microsystems.com/fileadmin/_migrated/Products/leica-dm500-education-micro.jpg",
  },
  {
    id: "2",
    name: "DM1000",
    quantity: 500,
    location: "Main Store",
    price: 2000,
    image:
      "https://www.leica-microsystems.com/fileadmin/global/products/Light/dm1000/Leica_DM1000_LED_ergonomic-system-microscope_list.jpg",
  },
  {
    id: "4",
    name: "DMi1",
    quantity: 100,
    location: "Secondary Warehouse",
    price: 3000,
    image:
      "https://www.leica-microsystems.com/fileadmin/landingpages/Leica_DMi1_16.jpg",
  },
  {
    id: "5",
    name: "Emspira 3",
    quantity: 1000,
    location: "Main Store",
    price: 7000,
    image:
      "https://www.leica-microsystems.com/fileadmin/_migrated/Products/Keyfeatures/emspira-digital-microscope-config1.jpg",
  },
  {
    id: "6",
    name: "DM750",
    quantity: 200,
    location: "Main Store",
    price: 1500,
    image:
      "https://www.leica-microsystems.com/fileadmin/_migrated/Products/leica-dm750.jpg",
  },
  {
    id: "3",
    name: "Thunder Imager Tissue",
    quantity: 500,
    location: "Main Warehouse",
    price: 35000,
    image:
      "https://www.leica-microsystems.com/fileadmin/_processed_/e/7/csm_THUNDER-Imager-Tissue_neurons_1800_b47d5d04c4.jpg",
  },
];

export const notifications = [
  {
    id: "n1",
    title: "Low Stock",
    date: new Date(2022, 11, 17, 15, 24),
    status: "unread",
    image:
      "https://www.leica-microsystems.com/fileadmin/global/products/Light/dm1000/Leica_DM1000_LED_ergonomic-system-microscope_list.jpg",
  },
  {
    id: "n2",
    title: "Purchase Received",
    date: new Date(2022, 11, 17, 16, 24),
    status: "read",
    image:
      "https://www.leica-microsystems.com/fileadmin/_migrated/Products/leica-dm500-education-micro.jpg",
  },
  {
    id: "n3",
    title: "Transportation Finished",
    date: new Date(2022, 11, 16, 11, 3),
    status: "read",
    image:
      "https://www.leica-microsystems.com/fileadmin/landingpages/Leica_DMi1_16.jpg",
  },
  {
    id: "n4",
    title: "Low Stock",
    date: new Date(2022, 11, 15, 17, 43),
    status: "read",
    image:
      "https://www.leica-microsystems.com/fileadmin/_migrated/Products/Keyfeatures/emspira-digital-microscope-config1.jpg",
  },
  {
    id: "n5",
    title: "Stock Delayed",
    date: new Date(2022, 11, 15, 12, 24),
    status: "read",
    image:
      "https://www.leica-microsystems.com/fileadmin/_migrated/Products/leica-dm750.jpg",
  },
];

export function getItemById(id) {
  const item = items.find((it) => it.id === id);
  return item;
}
