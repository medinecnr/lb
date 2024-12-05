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
    id: "lastik",
    label: "LASTİK",
    content: (
      <div className="flex justify-between items-start space-x-6">
        <div className="flex justify-between items-center space-x-10 ps-20">
          <div className="flex py-4">
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

          <div className="flex-2 space-y-2 py-4">
            <div>
              <h6 className="font-semibold text-lg">Popüler Markalar </h6>
              <div className="border-t-1 rounded-lg border-[#FFB45F] mb-1"></div>
              <ul className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-x-2 gap-y-1 sm:gap-x-1 md:gap-x-2 lg:gap-x-4 sm:gap-y-1 md:gap-y-1 lg:gap-y-1">
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
              <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-2 gap-y-1 sm:gap-x-1 md:gap-x-2 lg:gap-x-4 sm:gap-y-1 md:gap-y-1 lg:gap-y-1">
                {generateListItems([
                  { label: "185 65 r15 4 Mevsim Lastik", href: "#" },
                  { label: "205 55 r16 Yaz Lastik", href: "#" },
                  { label: "195 65 r15 Kış Lastik", href: "#" },
                  { label: "225 45 r17 Yaz Lastik", href: "#" },
                  { label: "215 55 r16 4 Mevsim Lastik", href: "#" },
                  { label: "195 55 r16 Kış Lastik", href: "#" },
                  { label: "205 60 r16 Yaz Lastik", href: "#" },
                  { label: "215 60 r17 4 Mevsim Lastik", href: "#" },
                  { label: "225 40 r18 Yaz Lastik", href: "#" }
                ])}
              </ul>
            </div>

            <div>
              <h6 className="font-semibold text-lg">En Çok Satanlar</h6>
              <div className="border-t-1 rounded-lg border-[#FFB45F] mb-1"></div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-2 gap-y-1 sm:gap-x-1 md:gap-x-2 lg:gap-x-4 sm:gap-y-1 md:gap-y-1 lg:gap-y-1">
                {generateListItems([
                  { label: "185 65 r15 4 Mevsim Lastik", href: "#" },
                  { label: "205 55 r16 Yaz Lastik", href: "#" },
                  { label: "195 65 r15 Kış Lastik", href: "#" },
                  { label: "225 45 r17 Yaz Lastik", href: "#" },
                  { label: "215 55 r16 4 Mevsim Lastik", href: "#" },
                  { label: "195 55 r16 Kış Lastik", href: "#" },
                  { label: "205 60 r16 Yaz Lastik", href: "#" },
                  { label: "215 60 r17 4 Mevsim Lastik", href: "#" },
                  { label: "225 40 r18 Yaz Lastik", href: "#" }
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
    id: "jant",
    label: "JANT",
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
    id: "aku",
    label: "AKÜ",
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
//   4. Kategori
  {
    id: "yag",
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
    id: "inovasyon",
    label: "İNOVASYON ÜRÜNLERİ",
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
              src="/images/marka-jant.jpg"
              alt="Lastik"
              className="absolute top-0 left-0 w-full h-full object-inherit rounded-br-xl"
            />
          </div>
        </div>
      </div>
    ),
  },
//   6. Kategori
  {
    id: "montaj",
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
              src="/images/marka-jant.jpg"
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
    id: "digerurunler",
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
              src="/images/marka-jant.jpg"
              alt="Lastik"
              className="absolute top-0 left-0 w-full h-full object-inherit rounded-br-xl"
            />
          </div>
        </div>
      </div>
    ),   
  }
];
