interface MetaData {
  metaTitle: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  ogUrl: string;
  twitterTitle: string;
  twitterDescription: string;
  ogImage: string;  
  twitterImage: string;  
}

const siteTitle = " | Lastik Borsası";

export const metaData = {
  home: {
    metaTitle: `Ana Sayfa${siteTitle}`,
    description: "Lastik Borsası'na hoş geldiniz! En kaliteli lastikleri keşfedin ve aracınıza en uygun lastiği kolayca satın alın.",
    ogTitle: `Ana Sayfa${siteTitle}`,
    ogDescription: "Lastik Borsası'na hoş geldiniz! En kaliteli lastikleri keşfedin ve aracınıza en uygun lastiği kolayca satın alın.",
    ogUrl: "https://www.lastikborsasi.com",  
    twitterTitle: `Ana Sayfa${siteTitle}`,
    twitterDescription: "Lastik Borsası'na hoş geldiniz! En kaliteli lastikleri keşfedin ve aracınıza en uygun lastiği kolayca satın alın.",
    ogImage: "https://www.lastikborsasi.com/Assets/images/og-image.jpg",  
    twitterImage: "https://www.lastikborsasi.com/Assets/images/og-image.jpg"  
  },
  suv: {
    metaTitle: `SUV Araçlar${siteTitle}`,
    description: "SUV araçlar için en kaliteli ve uygun fiyatlı lastikler burada! Araç tipinize özel lastik seçeneklerini inceleyin.",
    ogTitle: `SUV Araçlar${siteTitle}`,
    ogDescription: "SUV araçlar için en kaliteli ve uygun fiyatlı lastikler burada! Araç tipinize özel lastik seçeneklerini inceleyin.",
    ogUrl: "https://www.lastikborsasi.com/",  
    twitterTitle: `SUV Araçlar${siteTitle}`,
    twitterDescription: "SUV araçlar için en kaliteli ve uygun fiyatlı lastikler burada! Araç tipinize özel lastik seçeneklerini inceleyin.",
    ogImage: "", 
    twitterImage: ""  
  },
  createAccount: {
    metaTitle: `Hesap Oluştur${siteTitle}`,
    description: "Yeni hesap oluşturarak Lastik Borsası'nda alışveriş yapmaya başlayın. Üye olun, hızlı alışverişin tadını çıkarın.",
    ogTitle: `Hesap Oluştur${siteTitle}`,
    ogDescription: "Yeni hesap oluşturarak Lastik Borsası'nda alışveriş yapmaya başlayın. Üye olun, hızlı alışverişin tadını çıkarın.",
    ogUrl: "",
    twitterTitle: `Hesap Oluştur${siteTitle}`,
    twitterDescription: "Yeni hesap oluşturarak Lastik Borsası'nda alışveriş yapmaya başlayın. Üye olun, hızlı alışverişin tadını çıkarın.",
    ogImage: "",  
    twitterImage: ""  
  },
  login: {
    metaTitle: `Giriş Yap${siteTitle}`,
    description: "Hesabınıza giriş yaparak siparişlerinizi takip edin, alışverişi kolaylaştırın ve daha fazla fırsattan yararlanın.",
    ogTitle: `Giriş Yap${siteTitle}`,
    ogDescription: "Hesabınıza giriş yaparak siparişlerinizi takip edin, alışverişi kolaylaştırın ve daha fazla fırsattan yararlanın.",
    ogUrl: "",
    twitterTitle: `Giriş Yap${siteTitle}`,
    twitterDescription: "Hesabınıza giriş yaparak siparişlerinizi takip edin, alışverişi kolaylaştırın ve daha fazla fırsattan yararlanın.",
    ogImage: "",  
    twitterImage: ""  
  },
  urunDetay: {
    metaTitle: `Ürün Detayı${siteTitle}`,
    description: "Ürünle ilgili tüm detaylara ulaşın! Lastiğin teknik özellikleri, fiyatı ve kullanıcı yorumlarıyla bilgi sahibi olun.",
    ogTitle: `Ürün Detayı${siteTitle}`,
    ogDescription: "Ürünle ilgili tüm detaylara ulaşın! Lastiğin teknik özellikleri, fiyatı ve kullanıcı yorumlarıyla bilgi sahibi olun.",
    ogUrl: "",
    twitterTitle: `Ürün Detayı${siteTitle}`,
    twitterDescription: "Ürünle ilgili tüm detaylara ulaşın! Lastiğin teknik özellikleri, fiyatı ve kullanıcı yorumlarıyla bilgi sahibi olun.",
    ogImage: "",  
    twitterImage: ""  
  },
  category: {
    metaTitle: `Kategoriler${siteTitle}`,
    description: "Sitemizde yer alan tüm kategorileri burada bulabilirsiniz. Lastik, Jant, Akü ve daha fazlası!",
    ogTitle: `Kategoriler${siteTitle}`,
    ogDescription: "Sitemizde yer alan tüm kategorileri burada bulabilirsiniz. Lastik, Jant, Akü ve daha fazlası!",
    ogUrl: "",
    twitterTitle: `Kategoriler${siteTitle}`,
    twitterDescription: "Sitemizde yer alan tüm kategorileri burada bulabilirsiniz. Lastik, Jant, Akü ve daha fazlası!",
    ogImage: "",  
    twitterImage: ""  
  },
  search: {
    metaTitle: `Arama Sonuçları${siteTitle}`,
    description: "Aranan kelimeye uygun sonuçları görüntüleyin. En uygun lastik ve jant seçeneklerini keşfedin.",
    ogTitle: `Arama Sonuçları${siteTitle}`,
    ogDescription: "Aranan kelimeye uygun sonuçları görüntüleyin. En uygun lastik ve jant seçeneklerini keşfedin.",
    ogUrl: "",
    twitterTitle: `Arama Sonuçları${siteTitle}`,
    twitterDescription: "Aranan kelimeye uygun sonuçları görüntüleyin. En uygun lastik ve jant seçeneklerini keşfedin.",
    ogImage: "",  
    twitterImage: ""  
  },
  lastik: {
    metaTitle: `Lastik${siteTitle}`,
    description: "En kaliteli lastik markaları ve modelleri burada! Yaz, kış, 4 mevsim ve daha fazlası için tıklayın.",
    ogTitle: `Lastik${siteTitle}`,
    ogDescription: "En kaliteli lastik markaları ve modelleri burada! Yaz, kış, 4 mevsim ve daha fazlası için tıklayın.",
    ogUrl: "",
    twitterTitle: `Lastik${siteTitle}`,
    twitterDescription: "En kaliteli lastik markaları ve modelleri burada! Yaz, kış, 4 mevsim ve daha fazlası için tıklayın.",
    ogImage: "",  
    twitterImage: ""  
  },
  otomobilLastikleri: {
    metaTitle: `Otomobil Lastikleri${siteTitle}`,
    description: "Otomobil lastikleri kategorisinde en kaliteli markaları ve modelleri keşfedin. En uygun fiyatlarla satın alın.",
    ogTitle: `Otomobil Lastikleri${siteTitle}`,
    ogDescription: "Otomobil lastikleri kategorisinde en kaliteli markaları ve modelleri keşfedin. En uygun fiyatlarla satın alın.",
    ogUrl: "",
    twitterTitle: `Otomobil Lastikleri${siteTitle}`,
    twitterDescription: "Otomobil lastikleri kategorisinde en kaliteli markaları ve modelleri keşfedin. En uygun fiyatlarla satın alın.",
    ogImage: "",  
    twitterImage: ""  
  },
  user: {
    metaTitle: `Hesap${siteTitle}`,
    description: "Hesabınızı yönetmek için giriş yapın. Siparişlerinizi takip edin, adres bilgilerinizi güncelleyin ve daha fazlası.",
    ogTitle: `Hesap${siteTitle}`,
    ogDescription: "Hesabınızı yönetmek için giriş yapın. Siparişlerinizi takip edin, adres bilgilerinizi güncelleyin ve daha fazlası.",
    ogUrl: "",
    twitterTitle: `Hesap${siteTitle}`,
    twitterDescription: "Hesabınızı yönetmek için giriş yapın. Siparişlerinizi takip edin, adres bilgilerinizi güncelleyin ve daha fazlası.",
    ogImage: "",  
    twitterImage: ""  
  }
};