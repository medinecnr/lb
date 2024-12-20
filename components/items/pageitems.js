export const carouselItems = [
    {
      title: 'Siparişin 120 Dakikada Kapında!',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem dolor placeat, officia ex tempore sunt odio repellat praesentium officiis hic!',
      buttonText: 'Alışverişe Başla',
      image: 'https://via.placeholder.com/600x400',
    },
    {
      title: 'Lorem ipsum dolor sit amet, .',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem dolor placeat, officia ex tempore sunt odio repellat praesentium officiis hic!',
      buttonText: 'Alışverişe Başla',
      image: 'https://via.placeholder.com/600x400',
    },
    {
      title: 'Siparişin 120 Dakikada Kapında!',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem dolor placeat, officia ex tempore sunt odio repellat praesentium officiis hic!',
      buttonText: 'Alışverişe Başla',
      image: 'https://via.placeholder.com/600x400',
    },
  ];

export const selectOptions = {
  carBrand: [
    { value: "1", label: "Audi" },
    { value: "2", label: "BMW" },
    { value: "3", label: "Mercedes" },
    { value: "4", label: "Volkswagen" },
    { value: "5", label: "Renault" },
    { value: "6", label: "Fiat" },
    { value: "7", label: "Ford" },
    { value: "8", label: "Toyota" },
  ],
  carModel: [
    { value: "1", label: "A3" },
    { value: "2", label: "3 Serisi" },
    { value: "3", label: "C Serisi" },
    { value: "4", label: "Passat" },
  ],
  carYear: [
    { value: "2022", label: "2022" },
    { value: "2021", label: "2021" },
    { value: "2020", label: "2020" },
    { value: "2019", label: "2019" },
  ],
  carSubModel: [
    { value: "1", label: "Sport" },
    { value: "2", label: "Sedan" },
    { value: "3", label: "Hatchback" },
    { value: "4", label: "Coupe" },
  ],
  tireSize: [
    { value: "1", label: "205/55 R16" },
    { value: "2", label: "225/45 R17" },
    { value: "3", label: "195/65 R15" },
    { value: "4", label: "215/55 R18" },
  ],
  rimSize: [
    { value: "1", label: "16 inch" },
    { value: "2", label: "17 inch" },
    { value: "3", label: "18 inch" },
    { value: "4", label: "19 inch" },
  ],
};

export const renderOptions = (options) => {
  return options.map((option) => (
    <option key={option.value} value={option.value}>
      {option.label}
    </option>
  ));
};

export const cardData = [
  {
    id: 1,
    imageSrc: '/images/fiyat.jpg',
    title: 'Uygun Fiyat Garantisi',
    description: 'Yapacağınız alışverişler için en uygun fiyat garantisi vermekteyiz.'
  },
  {
    id: 2,
    imageSrc: '/images/kargo.jpg',
    title: 'Ücretsiz Kargo',
    description: 'Tüm alışverişlerde ücretsiz kargo avantajından yararlanabilirsiniz.'
  },
  {
    id: 3,
    imageSrc: '/images/odeme.jpg',
    title: 'Kolay Ödeme Seçenekleri',
    description: 'Farklı ödeme seçenekleri ile alışverişi daha kolay hale getirin.'
  },
  {
    id: 4,
    imageSrc: '/images/destek.jpg',
    title: '7/24 Müşteri Destek',
    description: '7/24 aktif destek hizmetimizle her zaman yanınızdayız.'
  }
];
  
export const tireProducts = [
    {
      id: 1,
      title: "Lassa",
      description: "205/55R16 91V Goodyear Eagle Sport 2 583930",
      price: "1.796,00",
      imageUrl: "/images/lastik.jpg"
    },
    {
      id: 2,
      title: "Michelin",
      description: "225/50R17 98V Michelin Pilot Sport 4",
      price: "2.299,00",
      imageUrl: "/images/lastik.jpg"
    },
    {
      id: 3,
      title: "Bridgestone",
      description: "195/65R15 91H Bridgestone Turanza T005",
      price: "1.499,00",
      imageUrl: "/images/lastik.jpg"
    },
    {
      id: 4,
      title: "Bridgestone",
      description: "195/65R15 91H Bridgestone Turanza T005",
      price: "1.499,00",
      imageUrl: "/images/lastik.jpg"
    },
    {
      id: 5,
      title: "Bridgestone",
      description: "195/65R15 91H Bridgestone Turanza T005",
      price: "1.499,00",
      imageUrl: "/images/lastik.jpg"
    },
    {
      id: 6,
      title: "Bridgestone",
      description: "195/65R15 91H Bridgestone Turanza T005",
      price: "1.499,00",
      imageUrl: "/images/lastik.jpg"
    },
  ];
  
export const tireSizes = [
  {
    id: "1",
    size: "205/55 R16",
    image: "./images/4ac0de6eCROSSCLIMATE.jpg",
    detailUrl: "#", 
  },
  {
    id: "2",
    size: "225/45 R17",
    image: "./images/4ac0de6eCROSSCLIMATE.jpg",
    detailUrl: "#", 
  },
  {
    id: "3",
    size: "215/60 R16",
    image: "./images/4ac0de6eCROSSCLIMATE.jpg",
    detailUrl: "#", 
  },
  {
    id: "4",
    size: "205/50 R17",
    image: "./images/4ac0de6eCROSSCLIMATE.jpg",
    detailUrl: "#", 
  },
  {
    id: "5",
    size: "225/55 R18",
    image: "./images/4ac0de6eCROSSCLIMATE.jpg",
    detailUrl: "#", 
  },
  {
    id: "6",
    size: "235/60 R17",
    image: "./images/4ac0de6eCROSSCLIMATE.jpg",
    detailUrl: "#", 
  },
  {
    id: "7",
    size: "245/45 R18",
    image: "./images/4ac0de6eCROSSCLIMATE.jpg",
    detailUrl: "#", 
  },
  {
    id: "8",
    size: "255/50 R19",
    image: "./images/4ac0de6eCROSSCLIMATE.jpg",
    detailUrl: "#", 
  },
  {
    id: "9",
    size: "265/65 R17",
    image: "./images/4ac0de6eCROSSCLIMATE.jpg",
    detailUrl: "#", 
  },
  {
    id: "10",
    size: "275/70 R16",
    image: "./images/4ac0de6eCROSSCLIMATE.jpg",
    detailUrl: "#", 
  },
  {
    id: "11",
    size: "285/75 R17",
    image: "./images/4ac0de6eCROSSCLIMATE.jpg",
    detailUrl: "#", 
  },
  {
    id: "12",
    size: "295/80 R18",
    image: "./images/4ac0de6eCROSSCLIMATE.jpg",
    detailUrl: "#", 
  },
  {
    id: "13",
    size: "305/85 R19",
    image: "./images/4ac0de6eCROSSCLIMATE.jpg",
    detailUrl: "#", 
  },
  {
    id: "14",
    size: "315/90 R20",
    image: "./images/4ac0de6eCROSSCLIMATE.jpg",
    detailUrl: "#", 
  },
  {
    id: "15",
    size: "325/95 R21",
    image: "./images/4ac0de6eCROSSCLIMATE.jpg",
    detailUrl: "#", 
  },
];

export const brandLogos = [
  { id: 1, name: 'Continental', imageUrl: './images/continental.png', url: '#' },
  { id: 2, name: 'Petlas', imageUrl: './images/petlas.png', url: '#' },
  { id: 3, name: 'Nokian', imageUrl: './images/nokian.png', url: '#' },
  { id: 4, name: 'Pirelli', imageUrl: './images/pirelli.png', url: '#' },
  { id: 5, name: 'Hankook', imageUrl: './images/hankook.png', url: '#' },
  { id: 6, name: 'Michelin', imageUrl: './images/michelin.png', url: '#' },
  { id: 7, name: 'Sava', imageUrl: './images/sava.png', url: '#' },
  { id: 8, name: 'Goodyear', imageUrl: './images/goodyear.png', url: '#' },
  { id: 9, name: 'Dunlop', imageUrl: './images/dunlop.png', url: '#' },
  { id: 10, name: 'BFGoodrich', imageUrl: './images/bfgoodrich.png', url: '#' },
  { id: 11, name: 'Bridgestone', imageUrl: './images/bridgestone.png', url: '#' },
  { id: 12, name: 'Lassa', imageUrl: './images/lassa.png', url: '#' },
];

export const tireCategories = [
  { id: "yazLastigi", name: "Yaz Lastikleri", icon: "fa-solid fa-sun" },
  { id: "kisLastigi", name: "Kış Lastikleri", icon: "fa-solid fa-snowflake" },
  { id: "jantlar", name: "Jantlar", icon: "fa-solid fa-circle" },
  { id: "aku2", name: "Aküler", icon: "fa-solid fa-battery-half" },
  { id: "yag2", name: "Yağlar", icon: "fa-solid fa-oil-can" },
  { id: "inevasyon", name: "İnovasyon Ürünleri", icon: "fa-solid fa-lightbulb" }
];

export const productData = {
  yazLastikleri: [
    { id: 1, title: "Lassa", description: "205/55R16 91V Goodyear Eagle Sport 2 583930", price: "1.796,00 ₺", imageUrl: "./images/4ac0de6eCROSSCLIMATE.jpg" },
    { id: 2, title: "Lassa", description: "205/55R16 91V Goodyear Eagle Sport 2 583930", price: "1.796,00 ₺", imageUrl: "./images/4ac0de6eCROSSCLIMATE.jpg" },
    { id: 3, title: "Lassa", description: "205/55R16 91V Goodyear Eagle Sport 2 583930", price: "1.796,00 ₺", imageUrl: "./images/4ac0de6eCROSSCLIMATE.jpg" },
    { id: 4, title: "Lassa", description: "205/55R16 91V Goodyear Eagle Sport 2 583930", price: "1.796,00 ₺", imageUrl: "./images/4ac0de6eCROSSCLIMATE.jpg" },
    { id: 5, title: "Lassa", description: "205/55R16 91V Goodyear Eagle Sport 2 583930", price: "1.796,00 ₺", imageUrl: "./images/4ac0de6eCROSSCLIMATE.jpg" },
    { id: 6, title: "Lassa", description: "205/55R16 91V Goodyear Eagle Sport 2 583930", price: "1.796,00 ₺", imageUrl: "./images/4ac0de6eCROSSCLIMATE.jpg" },
  ],
  kisLastikleri: [
    { id: 1, title: "Bridgestone", description: "205/55R16 91V Goodyear Eagle Sport 2 583930", price: "550₺", imageUrl: "./images/4ac0de6eCROSSCLIMATE.jpg" },
    { id: 2, title: "Bridgestone", description: "205/55R16 91V Goodyear Eagle Sport 2 583930", price: "650₺", imageUrl: "./images/4ac0de6eCROSSCLIMATE.jpg" },
  ],
  jantlar: [ /* Jant ürünleri */ ],
  aku2: [ /* Akü ürünleri */ ],
  yag2: [ /* Yağlar ürünleri */ ]
};