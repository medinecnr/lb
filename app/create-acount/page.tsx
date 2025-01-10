'use client';
import React, { useState, useEffect } from 'react';
import { Checkbox } from "@nextui-org/react";
import { Input } from '@nextui-org/react';
import { metaData } from "@/config/metaConfig";
import Head from 'next/head';


function CreateAcountPage() {
  const [activeButton, setActiveButton] = useState<'bireysel' | 'bayi' | 'filo'>('bireysel');
  
  const [newsletterChecked, setNewsletterChecked] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);
  const [privacyChecked, setPrivacyChecked] = useState(false);

  const getButtonClass = (button: 'bireysel' | 'bayi' | 'filo') => {
    return activeButton === button
      ? 'border-[#FA8728]'
      : 'border-gray-200 text-black'; 
  };

  const handleButtonClick = (button: 'bireysel' | 'bayi' | 'filo') => {
    setActiveButton(button);
  };

  const handleNewsletterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewsletterChecked(event.target.checked);
  };
  
  const handleTermsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTermsChecked(event.target.checked);
  };

  const handlePrivacyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrivacyChecked(event.target.checked);
  };

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const inputClass = "border border-gray-200 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-[#FA8728]";

  const meta = metaData.createAccount;

    useEffect(() => {
      const baseTitle = `${meta.metaTitle}`;
      const space = " ".repeat(1);
      const fullTitle = baseTitle ; 
      let offset = 0;
  
      const animateTitle = () => {
        const titleText = fullTitle;  
        let newOffset = offset;
        
        newOffset = offset;
        document.title = titleText.substring(newOffset, newOffset + baseTitle.length); 
  
        offset = (offset + 1) % baseTitle.length;  
      };
  
      const intervalId = setInterval(animateTitle, 250); 
      return () => clearInterval(intervalId);
    }, [meta.metaTitle]);

  return (
    <>
     <Head>
        <title>{meta.metaTitle}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:title" content={meta.ogTitle} />
        <meta property="og:description" content={meta.ogDescription} />
        <meta property="og:url" content={meta.ogUrl} />
        <meta property="og:image" content={meta.ogImage} />
        <meta name="twitter:title" content={meta.twitterTitle} />
        <meta name="twitter:description" content={meta.twitterDescription} />
        <meta name="twitter:image" content={meta.twitterImage} />
      </Head>
      <div className="container flex-grow">
        <div className="flex flex-col justify-center items-center py-4">
          <h1 className="font-bold text-center relative group text-black">
            Hesap Oluştur
            <div className="border-t-3 rounded-lg border-[#FA8728] absolute bottom-[-18px] left-1/2 transform -translate-x-1/2 transition-all group-hover:scale-x-100 group-hover:w-full w-20 origin-center"></div>
          </h1>
        </div>

        <div>
          <div className="gap-4 flex justify-between items-center mt-8 mx-2">
            <button
              className={`border rounded-3xl p-2 hover:border-[#FA8728] w-36 sm:w-auto min-w-[90px] flex justify-center items-center ${getButtonClass('bireysel')}`}
              onClick={() => handleButtonClick('bireysel')}
            >
              <i className="fa-regular fa-user"></i> 
              <span className="ml-2">Bireysel</span>
            </button>
            <button
              className={`border rounded-3xl p-2 hover:border-[#FA8728] w-36 sm:w-auto min-w-[90px] flex justify-center items-center ${getButtonClass('bayi')}`}
              onClick={() => handleButtonClick('bayi')}
            >
              <i className="fa-solid fa-city"></i>             
              <span className="ml-2">Bayi/B2B</span>
            </button>
            <button
              className={`border rounded-3xl p-2 hover:border-[#FA8728] w-36 sm:w-auto min-w-[90px] flex justify-center items-center ${getButtonClass('filo')}`}
              onClick={() => handleButtonClick('filo')}
            >
              <i className="fa-solid fa-car-side"></i>             
              <span className="ml-2">Filo</span>
            </button>
          </div>

          <div className="flex flex-col justify-center bg-white p-8 gap-6 rounded-2xl border-small border-gray-100 mt-3 mx-2">
            {activeButton === 'bireysel' && (
              <div>
                <div className="mb-4">
                  <Input type="text" className={inputClass} placeholder="Ad Soyad" required onClear={() => console.log("input cleared")}/>
                </div>
                <div className="mb-4">
                  <Input type="email" className={inputClass} placeholder="E-Posta Adresi" required onClear={() => console.log("input cleared")}/>
                </div>
                <div className="mb-4">
                  <Input type="tel" className={inputClass} placeholder="Telefon Numarası" required onClear={() => console.log("input cleared")}/>
                </div>
                <div className="mb-4 relative">
                  <Input
                    type={passwordVisible ? 'text' : 'password'}
                    className={inputClass}
                    placeholder="Şifre"
                    aria-label="Şifre"
                    required
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    aria-label={passwordVisible ? "Şifreyi gizle" : "Şifreyi göster"}
                  >
                    <i className={`fa-regular ${passwordVisible ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                  </button>
                </div>
              </div>
            )}

            {activeButton === 'bayi' && (
              <div>
                <div className="mb-4">
                  <Input type="text" className={inputClass} placeholder="Ad Soyad" required onClear={() => console.log("input cleared")}/>
                </div>
                <div className="mb-4">
                  <Input type="email" className={inputClass} placeholder="E-Posta Adresi" required onClear={() => console.log("input cleared")}/>
                </div>
                <div className="mb-4">
                  <Input type="tel" className={inputClass} placeholder="Telefon Numarası" required onClear={() => console.log("input cleared")}/>
                </div>
                <div className="mb-4">
                  <Input type="text" className={inputClass} placeholder="Unvan" required onClear={() => console.log("input cleared")}/>
                </div>
                <div className="flex gap-2 mb-4">
                  <Input type="text" className={inputClass} placeholder="İl" required onClear={() => console.log("input cleared")}/>
                  <Input type="text" className={inputClass} placeholder="İlçe" required onClear={() => console.log("input cleared")}/>
                </div>
                <div className="mb-4">
                  <Input type="text" className={inputClass} placeholder="Adres" required onClear={() => console.log("input cleared")}/>
                </div>
                <div className="flex gap-2 mb-4">
                  <Input type="text" className={inputClass} placeholder="Vergi Dairesi" required onClear={() => console.log("input cleared")}/>
                  <Input type="text" className={inputClass} placeholder="Vergi Numarası" required onClear={() => console.log("input cleared")}/>
                </div>
                <div className="mb-4 relative">
                  <Input
                    type={passwordVisible ? 'text' : 'password'}
                    className={inputClass}
                    placeholder="Şifre"
                    aria-label="Şifre"
                    required
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    aria-label={passwordVisible ? "Şifreyi gizle" : "Şifreyi göster"}
                  >
                    <i className={`fa-regular ${passwordVisible ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                  </button>
                </div>
                <div className="mb-4">
                  <Input type="text" className={inputClass} placeholder="Referans (Opsiyonel)" />
                </div>
              </div>
            )}

            {activeButton === 'filo' && (
              <div>
                <div className="mb-4">
                  <span className="text-sm text-gray-500">
                    <i className="fa-solid fa-circle-info text-[#FA8728] me-2"></i> Filonuzdaki araç adedi minimum 10 olmalıdır.
                  </span>
                </div>
                <div className="mb-4">
                  <Input type="text" className={inputClass} placeholder="Ad Soyad" required onClear={() => console.log("input cleared")}/>
                </div>
                <div className="mb-4">
                  <Input type="email" className={inputClass} placeholder="E-Posta Adresi" required onClear={() => console.log("input cleared")}/>
                </div>
                <div className="mb-4">
                  <Input type="tel" className={inputClass} placeholder="Telefon Numarası" required onClear={() => console.log("input cleared")}/>
                </div>
                <div className="mb-4">
                  <Input type="text" className={inputClass} placeholder="Firma Unvanı" required onClear={() => console.log("input cleared")}/>
                </div>
                <div className="flex gap-2 mb-4">
                  <Input type="text" className={inputClass} placeholder="İl" required onClear={() => console.log("input cleared")}/>
                  <Input type="text" className={inputClass} placeholder="İlçe" required onClear={() => console.log("input cleared")}/>
                </div>
                <div className="mb-4">
                  <Input type="text" className={inputClass} placeholder="Adres" required onClear={() => console.log("input cleared")}/>
                </div>
                <div className="flex gap-2 mb-4">
                  <Input type="text" className={inputClass} placeholder="Vergi Dairesi" required onClear={() => console.log("input cleared")}/>
                  <Input type="text" className={inputClass} placeholder="Vergi Numarası" required onClear={() => console.log("input cleared")}/>
                </div>
                <div className="mb-4 relative">
                  <Input
                    type={passwordVisible ? 'text' : 'password'}
                    className={inputClass}
                    placeholder="Şifre"
                    aria-label="Şifre"
                    required
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    aria-label={passwordVisible ? "Şifreyi gizle" : "Şifreyi göster"}
                  >
                    <i className={`fa-regular ${passwordVisible ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                  </button>
                </div>
                <div className="mb-4">
                  <Input type="text" className={inputClass} placeholder="Referans (Opsiyonel)" onClear={() => console.log("input cleared")}/>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-4 mt-6 p-4">
            <div className="flex items-center justify-between">
              <Checkbox checked={newsletterChecked} onChange={handleNewsletterChange} color="warning" />
              <span>
                Lastik Borsası'nın özel kampanya ve avantajlarıyla ilgili e-posta ve sms yoluyla bilgilendirilmek istiyorum.
              </span>
            </div>

            <div className="flex items-center">
              <Checkbox checked={termsChecked} onChange={handleTermsChange} color="warning" />
              <span>
                <a href="#" className="text-[#FA8728]">Üyelik Sözleşmesi</a> 'ni okudum, onaylıyorum.
              </span>
            </div>

            <div className="flex items-center">
              <Checkbox checked={privacyChecked} onChange={handlePrivacyChange} color="warning" />
              <span>
                <a href="#" className="text-[#FA8728]">Tedarikçi Satış ve Gizlilik Sözleşmesi</a> 'ni okudum ve onaylıyorum.
              </span>
            </div>

            <div className="w-full">
              <button className="w-full p-3 bg-[#FA8728] text-white rounded-lg hover:bg-[#FA8728] disabled:bg-warning" disabled={!termsChecked || !privacyChecked}>
                Hesap Oluştur
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateAcountPage;
