import React from 'react';

function Download() {
  return (
    <div className="resimm p-2">
      <div className="container mx-auto pt-20">
        <h3 className="text-white text-xl font-bold mt-10">
          Sektörün Lider Pazar Yeri Platformundan Bir Yenilik ! 
        </h3>
        <h3 className="text-white mt-2 font-bold">
          Şimdi App Store, Google Play Store ve AppGallery'de
        </h3>

        <div className="flex gap-3 justify-start items-center pt-3">
          {/* App Store */}
          <a
            href="https://apps.apple.com/tr/app/lb-lastik-borsas%C4%B1-sigorta/id1566776050?ign-itscg=30200&ign-itsct=apps_box_badge"
            className="overflow-hidden hover:scale-105 transition-transform"
          >
            <img
              src="/images/appstore.png"
              alt="App Store"
              className="w-48 object-contain"
            />
          </a>

          {/* Google Play */}
          <a
            href="https://play.google.com/store/apps/details?id=com.lastikborsasi.mobile&hl=tr&gl=US"
            className="overflow-hidden hover:scale-105 transition-transform"
          >
            <img
              src="/images/googleplay.png"
              alt="Google Play"
              className="w-44 object-contain"
            />
          </a>

          {/* AppGallery */}
          <a
            href="https://appgallery.huawei.com/app/C108110243"
            className="overflow-hidden hover:scale-105 transition-transform"
          >
            <img
              src="/images/huawei.png"
              alt="AppGallery"
              className="w-44 object-contain"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Download;