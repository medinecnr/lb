import React from 'react'

function dowloand() {
  return (
    <div className="resimm p-2">
    <div className="container mx-auto pt-20 ">
      <h2 className="text-white text-2xl font-bold mt-20">
        Sektörün Lider Pazar Yeri Platformu
      </h2>
      <h3 className="text-white   mt-2">
        Şimdi App Store ve Google Play Store'da!
      </h3>

      <div className="flex gap-4 pt-3 ">
        <a href="https://apps.apple.com/tr/app/lb-lastik-borsas%C4%B1-sigorta/id1566776050?ign-itscg=30200&ign-itsct=apps_box_badge">
          <img
            src="/images/tr-tr.svg"
            alt="App Store"
            className=" hover:scale-105 transition-transform "
          />
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.lastikborsasi.mobile&hl=tr&gl=US">
          <img
            src="/images/tr_badge_web_generic.png"
            alt="Google Play"
            className=" hover:scale-105 transition-transform "
          />
        </a>
        <a href="https://appgallery.huawei.com/app/C108110243">
          <img
            src="/images/huawei.jpg"
            alt="AppGallery"
            className=" hover:scale-105 transition-transform  "
          />
        </a>
      </div>
    </div>
  </div>
  )
}

export default dowloand