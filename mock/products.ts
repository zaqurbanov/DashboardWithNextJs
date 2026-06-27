import { ProductsInterface } from "@/types/products/productsTypes";

const _initialProducts: ProductsInterface[] = [
  {
    id: "1",
    title: "Wireless Headphones",
    description: "Noise cancelling over-ear headphones",
    image: "https://picsum.photos/id/21/400/300",
    price: "$120",
    createdAt: "2023-01-10",
    stock: 25
  },
  {
    id: "2",
    title: "Smart Watch",
    description: "Fitness tracking smart watch",
    image: "https://picsum.photos/id/22/400/300",
    price: "$90",
    createdAt: "2023-02-11",
    stock: 18
  },
  {
    id: "3",
    title: "Bluetooth Speaker",
    description: "Portable waterproof speaker",
    image: "https://picsum.photos/id/23/400/300",
    price: "$75",
    createdAt: "2023-03-12",
    stock: 32
  },
  {
    id: "4",
    title: "Gaming Mouse",
    description: "RGB mechanical gaming mouse",
    image: "https://picsum.photos/id/24/400/300",
    price: "$45",
    createdAt: "2023-04-15",
    stock: 50
  },
  {
    id: "5",
    title: "Mechanical Keyboard",
    description: "Backlit mechanical keyboard",
    image: "https://picsum.photos/id/25/400/300",
    price: "$110",
    createdAt: "2023-05-01",
    stock: 12
  },
  {
    id: "6",
    title: "4K Monitor",
    description: "Ultra HD LED monitor",
    image: "https://picsum.photos/id/26/400/300",
    price: "$320",
    createdAt: "2023-06-20",
    stock: 7
  },
  {
    id: "7",
    title: "Laptop Stand",
    description: "Adjustable aluminum stand",
    image: "https://picsum.photos/id/27/400/300",
    price: "$35",
    createdAt: "2023-07-03",
    stock: 44
  },
  {
    id: "8",
    title: "External SSD",
    description: "1TB USB-C SSD",
    image: "https://picsum.photos/id/28/400/300",
    price: "$150",
    createdAt: "2023-08-14",
    stock: 20
  },
  {
    id: "9",
    title: "Webcam HD",
    description: "1080p streaming webcam",
    image: "https://picsum.photos/id/29/400/300",
    price: "$60",
    createdAt: "2023-09-12",
    stock: 29
  },
  {
    id: "10",
    title: "Desk Lamp",
    description: "LED adjustable desk lamp",
    image: "https://picsum.photos/id/30/400/300",
    price: "$25",
    createdAt: "2023-10-01",
    stock: 60
  },
  {
    id: "11",
    title: "Office Chair",
    description: "Ergonomic office chair",
    image: "https://picsum.photos/id/31/400/300",
    price: "$210",
    createdAt: "2023-10-15",
    stock: 9
  },
  {
    id: "12",
    title: "Tablet Pro",
    description: "10-inch Android tablet",
    image: "https://picsum.photos/id/32/400/300",
    price: "$180",
    createdAt: "2023-11-01",
    stock: 16
  },
  {
    id: "13",
    title: "Portable Charger",
    description: "10000mAh power bank",
    image: "https://picsum.photos/id/33/400/300",
    price: "$40",
    createdAt: "2023-11-05",
    stock: 80
  },
  {
    id: "14",
    title: "Drone Camera",
    description: "4K aerial drone",
    image: "https://picsum.photos/id/34/400/300",
    price: "$450",
    createdAt: "2023-11-12",
    stock: 5
  },
  {
    id: "15",
    title: "Smartphone X",
    description: "Latest flagship smartphone",
    image: "https://picsum.photos/id/35/400/300",
    price: "$799",
    createdAt: "2023-11-18",
    stock: 13
  },
  {
    id: "16",
    title: "VR Headset",
    description: "Immersive VR experience",
    image: "https://picsum.photos/id/36/400/300",
    price: "$299",
    createdAt: "2023-12-01",
    stock: 6
  },
  {
    id: "17",
    title: "Smart Home Hub",
    description: "Control all smart devices",
    image: "https://picsum.photos/id/37/400/300",
    price: "$130",
    createdAt: "2023-12-05",
    stock: 22
  },
  {
    id: "18",
    title: "Wireless Charger",
    description: "Fast charging pad",
    image: "https://picsum.photos/id/38/400/300",
    price: "$35",
    createdAt: "2023-12-10",
    stock: 70
  },
  {
    id: "19",
    title: "Action Camera",
    description: "Waterproof sports camera",
    image: "https://picsum.photos/id/39/400/300",
    price: "$199",
    createdAt: "2023-12-15",
    stock: 14
  },
  {
    id: "20",
    title: "Gaming Console",
    description: "Next-gen gaming console",
    image: "https://picsum.photos/id/40/400/300",
    price: "$499",
    createdAt: "2023-12-20",
    stock: 4
  },
  {
    id: "21",
    title: "Router AX",
    description: "High speed WiFi router",
    image: "https://picsum.photos/id/41/400/300",
    price: "$140",
    createdAt: "2024-01-01",
    stock: 19
  },
  {
    id: "22",
    title: "Noise Cancelling Earbuds",
    description: "True wireless earbuds",
    image: "https://picsum.photos/id/42/400/300",
    price: "$99",
    createdAt: "2024-01-05",
    stock: 38
  },
  {
    id: "23",
    title: "Portable Monitor",
    description: "15.6 inch USB monitor",
    image: "https://picsum.photos/id/43/400/300",
    price: "$220",
    createdAt: "2024-01-10",
    stock: 11
  },
  {
    id: "24",
    title: "Smart Door Lock",
    description: "Fingerprint security lock",
    image: "https://picsum.photos/id/44/400/300",
    price: "$160",
    createdAt: "2024-01-15",
    stock: 8
  },
  {
    id: "25",
    title: "Projector Mini",
    description: "Portable HD projector",
    image: "https://picsum.photos/id/45/400/300",
    price: "$280",
    createdAt: "2024-01-20",
    stock: 15
  },
  {
    id: "26",
    title: "Smart Thermostat",
    description: "Energy saving thermostat",
    image: "https://picsum.photos/id/46/400/300",
    price: "$170",
    createdAt: "2024-01-25",
    stock: 10
  },
  {
    id: "27",
    title: "Wireless Keyboard",
    description: "Slim Bluetooth keyboard",
    image: "https://picsum.photos/id/47/400/300",
    price: "$55",
    createdAt: "2024-02-01",
    stock: 33
  },
  {
    id: "28",
    title: "Graphic Tablet",
    description: "Digital drawing tablet",
    image: "https://picsum.photos/id/48/400/300",
    price: "$210",
    createdAt: "2024-02-05",
    stock: 17
  },
  {
    id: "29",
    title: "Security Camera",
    description: "Indoor smart camera",
    image: "https://picsum.photos/id/49/400/300",
    price: "$89",
    createdAt: "2024-02-10",
    stock: 26
  },
  {
    id: "30",
    title: "Smart Scale",
    description: "Bluetooth body scale",
    image: "https://picsum.photos/id/50/400/300",
    price: "$49",
    createdAt: "2024-02-15",
    stock: 41
  }
];

const _g = globalThis as typeof globalThis & { __productMock?: ProductsInterface[] };
if (!_g.__productMock) _g.__productMock = _initialProducts;
export const productMock = _g.__productMock;
