import NextLink from "next/link";

const generateListItems = (items) => {
  return items.map((item, index) => (
    <li key={index} className="cursor-pointer hover:text-[#FA8728]">
      <NextLink href={item.href}>{item.label}</NextLink>
    </li>
  ));
};

export const menuItems = [
    // 1. Kategori
  {
    id: "lastik-urunleri",
    label: "LASTİK",
    content: (
      <div className="flex justify-between items-start space-x-6">
        <div className="flex justify-between items-center space-x-10 ps-20">
          <div className="flex py-4 ">
            <ul className="space-y-1">
              {generateListItems([
                { label: "Otomobil Lastikleri", href: "#" },
                { label: "SUV 4x4 Lastikleri", href: "#" },
                { label: "Hafif Ticari Araç Lastikleri", href: "#" },
                { label: "Otobüs, Kamyon Lastikleri", href: "#" },
                { label: "Motosiklet Lastikleri", href: "#" },
                { label: "İş Makinası Lastikleri", href: "#" },
                { label: "Yaz Lastiği", href: "#" },
                { label: "Kış Lastiği", href: "#" },
                { label: "4 Mevsim Lastik", href: "#" },
                { label: "Diğer Lastikler", href: "#" }
              ])}
            </ul>
          </div>

          <div className="flex justify-between items-start gap-6">
            <div>
              <h6 className="font-semibold text-lg">Popüler Markalar</h6>
              <div className="border-t-1 rounded-lg border-[#FFB45F] mb-1"></div>
              <ul className="flex flex-col">
                {generateListItems([
                  { label: "Bridgestone", href: "#" },
                  { label: "Continental", href: "#" },
                  { label: "Michelin", href: "#" },
                  { label: "Pirelli", href: "#" },
                  { label: "Goodyear", href: "#" },
                  { label: "Yokohama", href: "#" },
                  { label: "Dunlop", href: "#" },
                  { label: "Nokian", href: "#" },
                ])}
              </ul>
            </div>

            <div>
              <h6 className="font-semibold text-lg">Popüler Ebatlar</h6>
              <div className="border-t-1 rounded-lg border-[#FFB45F] mb-1"></div>
              <ul className="flex flex-col">
                {generateListItems([
                  { label: "185 65 r15", href: "#" },
                  { label: "205 55 r16", href: "#" },
                  { label: "195 65 r15", href: "#" },
                  { label: "225 45 r17", href: "#" },
                  { label: "215 55 r16", href: "#" },
                  { label: "195 55 r16", href: "#" },
                  { label: "205 60 r16", href: "#" },
                  { label: "215 60 r17", href: "#" },
                  { label: "225 40 r18", href: "#" }
                ])}
              </ul>
            </div>
          </div>

        </div>

        <div className="flex-1 hidden lg:flex">
          <div className="w-full h-96 relative overflow-hidden">
            <img
              src="/images/marka-lastik.jpg"
              alt="Lastik"
              className="absolute top-0 left-0 w-full h-full object-inherit rounded-br-xl"
            />
          </div>
        </div>
      </div>
    ),
  },
//   2. Kategori
  {
    id: "jant-urunleri",
    label: "JANT",
    content: (
      <div className="flex justify-between items-start space-x-6">
        <div className="flex justify-between items-center space-x-10 ps-20">
          <div className="flex py-4">
            <ul className="space-y-1">
              {generateListItems([
                { label: "Otomobil Jantı", href: "#" },
                { label: "Ağır Vasıta Jantı", href: "#" },
                { label: "SUV 4x4 Jantı", href: "#" },
                { label: "Zirai Jantı", href: "#" },
                { label: "Motosiklet Jantı", href: "#" },
              ])}
            </ul>
          </div>

          <div className="flex justify-center items-start gap-6">
            <div>
              <h6 className="font-semibold text-lg">Popüler Markalar</h6>
              <div className="border-t-1 rounded-lg border-[#FFB45F] mb-1"></div>
              <ul className="flex flex-col">
                {generateListItems([
                  { label: "", href: "#" },
                  { label: "", href: "#" },
                ])}
              </ul>
            </div>

            <div>
              <h6 className="font-semibold text-lg">Popüler Ebatlar</h6>
              <div className="border-t-1 rounded-lg border-[#FFB45F] mb-1"></div>
              <ul className="flex flex-col">
                {generateListItems([
                  { label: "", href: "#" },
                  { label: "", href: "#" },
                  { label: "", href: "#" },
                  { label: "", href: "#" },
                  { label: "", href: "#" },
                ])}
              </ul>
            </div>
          </div>

        </div>

        <div className="flex-1 hidden lg:flex">
          <div className="w-full h-96 relative overflow-hidden">
            <img
              src="/images/marka-jant.jpg"
              alt="Lastik"
              className="absolute top-0 left-0 w-full h-full object-inherit rounded-br-xl"
            />
          </div>
        </div>
      </div>
    ),
  },
//   3. Kategori
  {
    id: "aku-urunleri",
    label: "AKÜ",
    content: (
        <div className="flex justify-between items-start space-x-6">
        <div className="flex justify-between items-center space-x-10 ps-20">
          <div className="flex py-4">
            <ul className="space-y-1">
              {generateListItems([
                { label: "Otomobil ve Hafif Ticari Aküleri", href: "#" },
                { label: "Ağır Hizmet Ticari Araç Aküleri", href: "#" },
                { label: "Marin Akü", href: "#" },
                { label: "Enerji ve Solar Akü", href: "#" },
              ])}
            </ul>
          </div>

          <div className="py-4">
            <div className="flex justify-between items-start gap-6">
              <div>
                <h6 className="font-semibold text-lg">Markalar</h6>
                <div className="border-t-1 rounded-lg border-[#FFB45F] mb-1"></div>

                <ul className="flex flex-col">
                  {generateListItems([
                    { label: "Mutlu", href: "#" },
                    { label: "Volt Akü", href: "#" },
                  ])}
                </ul>
              </div>

              <div>
                <h6 className="font-semibold text-lg">Özellik</h6>
                <div className="border-t-1 rounded-lg border-[#FFB45F] mb-1"></div>
                  <ul className="flex flex-col">
                    {generateListItems([
                      { label: "UTL", href: "#" },
                      { label: "Start-Stop", href: "#" },
                      { label: "AGM", href: "#" },
                    ])}
                  </ul>
              </div>
            </div>

            <div className="mt-4">
              <h6 className="font-semibold text-lg flex justify-center items-center">Kapasite</h6>
              <div className="border-t-1 rounded-lg border-[#FFB45F] mb-1"></div>

              <ul className="flex flex-wrap gap-6">
                {generateListItems([
                  { label: "110Ah", href: "#" },
                  { label: "100Ah", href: "#" },
                  { label: "90Ah", href: "#" },
                  { label: "80Ah", href: "#" },
                  { label: "74Ah", href: "#" },
                  { label: "70Ah", href: "#" },
                  { label: "65Ah", href: "#" },
                  { label: "62Ah", href: "#" },
                ])}
              </ul>
            </div>
          </div>

        </div>

        <div className="flex-1 hidden lg:flex">
          <div className="w-full h-96 relative overflow-hidden">
            <img
              src="/images/marka-aku.jpg"
              alt="Lastik"
              className="absolute top-0 left-0 w-full h-full object-inherit rounded-br-xl"
            />
          </div>
        </div>
      </div>
    ),
  },
//   4. Kategori
  {
    id: "yag-urunleri",
    label: "YAĞ",
    content: (
      <div className="flex justify-between items-start space-x-6">
      <div className="flex justify-between items-center space-x-10 ps-20">
        <div className="flex py-4">
          <ul className="space-y-1">
            {generateListItems([
              { label: "", href: "#" },
              { label: "", href: "#" },
              { label: "", href: "#" },
            ])}
          </ul>
        </div>

        <div className="flex-2 space-y-2 py-4">
          <div>
            <h6 className="font-semibold text-lg"></h6>
            <ul className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-x-2 gap-y-1 sm:gap-x-1 md:gap-x-2 lg:gap-x-4 sm:gap-y-1 md:gap-y-1 lg:gap-y-1">
              {generateListItems([
                { label: "", href: "#" },
                { label: "", href: "#" },
                { label: "", href: "#" },
                { label: "", href: "#" },
                { label: "", href: "#" },
                { label: "", href: "#" },
                { label: "", href: "#" },
                { label: "", href: "#" },
              ])}
            </ul>
          </div>

          <div>
            <h6 className="font-semibold text-lg"></h6>
            <ul className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-x-2 gap-y-1 sm:gap-x-1 md:gap-x-2 lg:gap-x-4 sm:gap-y-1 md:gap-y-1 lg:gap-y-1">
              {generateListItems([
                { label: "", href: "#" },
                { label: "", href: "#" },
                { label: "", href: "#" },
              ])}
            </ul>
          </div>

          <div>
            <h6 className="font-semibold text-lg"></h6>
            <ul className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-x-2 gap-y-1 sm:gap-x-1 md:gap-x-2 lg:gap-x-4 sm:gap-y-1 md:gap-y-1 lg:gap-y-1">
              {generateListItems([
                { label: "", href: "#" },
                { label: "", href: "#" },
                { label: "", href: "#" },
              ])}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex-1 hidden lg:flex">
        <div className="w-full h-96 relative overflow-hidden">
          <img
            src="/images/marka-yag.jpg"
            alt="Lastik"
            className="absolute top-0 left-0 w-full h-full object-inherit rounded-br-xl"
          />
        </div>
      </div>
    </div>
  ),
  },
//   5. Kategori
  {
    id: "inovasyon-urunleri",
    label: "İNOVASYON ÜRÜNLERİ",
    
  },
//   6. Kategori
  {
    id: "montaj-urunleri",
    label: "MONTAJ",
    content: (
      <div className="flex justify-between items-start space-x-6">
      <div className="flex justify-between items-center space-x-10 ps-20">
        <div className="flex py-4">
          <ul className="space-y-1">
            {generateListItems([
              { label: "", href: "#" },
              { label: "", href: "#" },
              { label: "", href: "#" },
            ])}
          </ul>
        </div>

        <div className="flex-2 space-y-2 py-4">
          <div>
            <h6 className="font-semibold text-lg"></h6>
            <ul className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-x-2 gap-y-1 sm:gap-x-1 md:gap-x-2 lg:gap-x-4 sm:gap-y-1 md:gap-y-1 lg:gap-y-1">
              {generateListItems([
                { label: "", href: "#" },
                { label: "", href: "#" },
                { label: "", href: "#" },
                { label: "", href: "#" },
                { label: "", href: "#" },
                { label: "", href: "#" },
                { label: "", href: "#" },
                { label: "", href: "#" },
              ])}
            </ul>
          </div>

          <div>
            <h6 className="font-semibold text-lg"></h6>
            <ul className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-x-2 gap-y-1 sm:gap-x-1 md:gap-x-2 lg:gap-x-4 sm:gap-y-1 md:gap-y-1 lg:gap-y-1">
              {generateListItems([
                { label: "", href: "#" },
                { label: "", href: "#" },
                { label: "", href: "#" },
              ])}
            </ul>
          </div>

          <div>
            <h6 className="font-semibold text-lg"></h6>
            <ul className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-x-2 gap-y-1 sm:gap-x-1 md:gap-x-2 lg:gap-x-4 sm:gap-y-1 md:gap-y-1 lg:gap-y-1">
              {generateListItems([
                { label: "", href: "#" },
                { label: "", href: "#" },
                { label: "", href: "#" },
              ])}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex-1 hidden lg:flex">
        <div className="w-full h-96 relative overflow-hidden">
          <img
            src="/images/marka-aku.jpg"
            alt="Lastik"
            className="absolute top-0 left-0 w-full h-full object-inherit rounded-br-xl"
          />
        </div>
      </div>
    </div>
  ),
  },
//   7. Kategori
  {
    id: "diger-urunler",
    label: "DİĞER ÜRÜNLER",
    content: (
      <div className="flex justify-between items-start space-x-6">
      <div className="flex justify-between items-center space-x-10 ps-20">
        <div className="flex py-4">
          <ul className="space-y-1">
            {generateListItems([
              { label: "", href: "#" },
              { label: "", href: "#" },
              { label: "", href: "#" },
            ])}
          </ul>
        </div>

        <div className="flex-2 space-y-2 py-4">
          <div>
            <h6 className="font-semibold text-lg"></h6>
            <ul className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-x-2 gap-y-1 sm:gap-x-1 md:gap-x-2 lg:gap-x-4 sm:gap-y-1 md:gap-y-1 lg:gap-y-1">
              {generateListItems([
                { label: "", href: "#" },
                { label: "", href: "#" },
                { label: "", href: "#" },
                { label: "", href: "#" },
                { label: "", href: "#" },
                { label: "", href: "#" },
                { label: "", href: "#" },
                { label: "", href: "#" },
              ])}
            </ul>
          </div>

          <div>
            <h6 className="font-semibold text-lg"></h6>
            <ul className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-x-2 gap-y-1 sm:gap-x-1 md:gap-x-2 lg:gap-x-4 sm:gap-y-1 md:gap-y-1 lg:gap-y-1">
              {generateListItems([
                { label: "", href: "#" },
                { label: "", href: "#" },
                { label: "", href: "#" },
              ])}
            </ul>
          </div>

          <div>
            <h6 className="font-semibold text-lg"></h6>
            <ul className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-x-2 gap-y-1 sm:gap-x-1 md:gap-x-2 lg:gap-x-4 sm:gap-y-1 md:gap-y-1 lg:gap-y-1">
              {generateListItems([
                { label: "", href: "#" },
                { label: "", href: "#" },
                { label: "", href: "#" },
              ])}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex-1 hidden lg:flex">
        <div className="w-full h-96 relative overflow-hidden">
          <img
            src="/images/marka-aku.jpg"
            alt="Lastik"
            className="absolute top-0 left-0 w-full h-full object-inherit rounded-br-xl"
          />
        </div>
      </div>
    </div>
  ),
  }
];
