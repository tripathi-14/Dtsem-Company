/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import ReactDOM from 'react-dom/client';

const companyDetails = {
  name: "Devesh Tiwari Enterprises & Solar Flour Mill (DTESM)",
  slogan: `“ईंट हमारी, सड़क तुम्हारी,
आटा हमारा, रोटी तुम्हारी,
DTESM है गाँव का यार,
गाँव की तरक्की हमारा विचार।”`,
  introduction: {
    title: "कंपनी परिचय",
    content: "Devesh Tiwari Enterprises & Solar Flour Mill (DTESM) गाँव और कस्बों की ज़रूरतों को समझते हुए, लोगों तक ऐसी सेवाएँ और सामान पहुँचाता है जिससे रोज़मर्रा की ज़िंदगी आसान बने और गाँव का विकास भी हो। हमारी कंपनी दो बड़े कामों में लगी है –",
    services: [
      {
        name: "कंक्रीट सीमेंट ईंटें",
        description: "हमारी कंपनी बड़े पैमाने पर कंक्रीट सीमेंट की ईंटें तैयार करती है। ये ईंटें मज़बूत, टिकाऊ और हर मौसम में चलने लायक होती हैं। इनका इस्तेमाल खासकर गाँव की गलियों, फुटपाथ, खड़ंजे और पक्की सड़कों के लिए किया जाता है। ग्राम पंचायत, ब्लॉक स्तर के काम और छोटे-छोटे लोकल प्रोजेक्ट्स में हमारी ईंटें भरोसे से इस्तेमाल होती हैं।"
      },
      {
        name: "सोलर फ्लोर मिल और खाद्य पदार्थ",
        description: "हमारे पास एक आधुनिक सोलर फ्लोर मिल है, जिसमें हम लोगों को उनके रोज़मर्रा के खाने-पीने से जुड़ी चीज़ें उपलब्ध कराते हैं। यहाँ पर ताज़ा पिसा हुआ आटा, खाने का शुद्ध तेल, और अलग-अलग अनाज की पिसाई की सुविधा उपलब्ध है। सोलर टेक्नोलॉजी के इस्तेमाल से बिजली की बचत होती है और मशीनें तेज़ी व सफाई से काम करती हैं।",
        highlight: "सोलर फ्लोर मिल"
      }
    ]
  },
  openingHours: {
    title: "खुलने का समय",
    days: [
      { day: "सोमवार", hours: "सुबह 7:00 - शाम 7:00" },
      { day: "मंगलवार", hours: "सुबह 7:00 - शाम 7:00" },
      { day: "बुधवार", hours: "सुबह 7:00 - शाम 7:00" },
      { day: "गुरुवार", hours: "सुबह 7:00 - शाम 7:00" },
      { day: "शुक्रवार", hours: "सुबह 7:00 - शाम 7:00" },
      { day: "शनिवार", hours: "सुबह 7:00 - शाम 7:00" },
      { day: "रविवार", hours: "सुबह 7:00 - शाम 7:00" }
    ]
  },
  timeline: {
    title: "हमारी विकास यात्रा",
    events: [
      { year: "15 अक्टूबर 2021", marketCap: "8 Lakh", description: "DTESM की स्थापना हुई; शुरुआत केवल कंक्रीट सीमेंट ईंटों के निर्माण से।", icon: "Flag" },
      { year: "2022", marketCap: "15 Lakh", description: null, icon: "Growth" },
      { year: "2023", marketCap: "30 Lakh", description: null, icon: "Growth" },
      { year: "2024", marketCap: "43 Lakh", description: "अप्रैल 2024 – व्यवसाय का विस्तार; सोलर फ्लोर मिल की शुरुआत, जिसमें ताज़ा आटा, शुद्ध तेल और अनाज पिसाई सेवाएँ जोड़ी गईं।", icon: "SolarMill" },
      { year: "2025", marketCap: "55 Lakh", description: null, icon: "Growth" },
      { year: "2026 (estimated)", marketCap: "65-70 Lakh", description: null, icon: "Growth" }
    ]
  },
  vision: {
    title: "कंपनी विज़न",
    content: [
      "DTESM का उद्देश्य सिर्फ़ व्यवसाय चलाना नहीं, बल्कि गाँवों और छोटे कस्बों में जीवन को बेहतर बनाना है। हमारा मानना है कि जब ग्रामीण और छोटे शहरों में सुविधाएँ, गुणवत्ता और भरोसेमंद उत्पाद उपलब्ध होंगे, तभी पूरे समाज का विकास संभव है।",
      "हमारी कोशिश रहती है कि हमारे दो प्रमुख व्यवसाय – कंक्रीट ईंटें और निर्माण सामग्री – जो गाँव की गलियों, फुटपाथ और स्थानीय सड़कों को मज़बूत बनाएँ। सोलर फ्लोर मिल से ताज़ा आटा, शुद्ध तेल और अनाज की पिसाई – जो हर घर की ज़रूरत को पूरा करे।",
      "ये दोनों ही सेवाएँ और उत्पाद स्थानीय समुदाय के विकास और रोज़मर्रा की ज़िंदगी में सुधार लाने के लिए डिज़ाइन किए गए हैं।"
    ]
  },
  future: {
    title: "भविष्य की दिशा और संभावनाएँ",
    content: [
      { icon: 'Employment', text: "हम चाहते हैं कि DTESM गाँवों में रोजगार के अवसर बढ़ाने वाला प्लेटफॉर्म बने।" },
      { icon: 'Sustainability', text: "आने वाले समय में हम सोलर और ग्रीन टेक्नोलॉजी के माध्यम से उत्पादन को और अधिक सतत (sustainable) और ऊर्जा-कुशल बनाएँ।" },
      { icon: 'Community', text: "हमारा लक्ष्य है कि गाँवों में शिक्षा, स्वास्थ्य और रोज़मर्रा की सुविधाओं के साथ विकास की लहर फैलाएँ, ताकि हर छोटा कस्बा और गाँव आर्थिक और सामाजिक रूप से सशक्त बने।" },
      { icon: 'Collaboration', text: "हम चाहते हैं कि हमारी कंक्रीट ईंटें और फ्लोर मिल सेवाएँ स्थानीय विकास और सरकारी प्रोजेक्ट्स के साथ तालमेल बैठा कर पूरे क्षेत्र में असर डालें।" },
      { icon: 'Nation', text: "हमारा मानना है कि जब गाँव तरक्की करेंगे, तब ही देश मजबूत होगा। इसी सोच और जुनून के साथ हम हर दिन काम कर रहे हैं, ताकि गाँव के हर कोने तक गुणवत्ता, भरोसा और नवाचार पहुँचे।" }
    ]
  },
  founders: {
    title: "संस्थापक",
    members: [
      {
        name: "Brijendra Nath Tiwari",
        title: "Visionary Leader",
        description: [
          "हमारे मार्गदर्शक Brijendra Nath Tiwari कंपनी के दीर्घकालिक विज़न और रणनीति के प्रेरक स्तंभ हैं। उनके पास गहरी सोच, नए विचारों को पहचानने और उन्हें लागू करने की क्षमता है।",
          "Brijendra Nath जी हमेशा भविष्य को देखते हुए नए अवसरों और ग्रामीण विकास के तरीकों पर ध्यान देते हैं। उनके नेतृत्व और विचारशीलता के कारण, DTESM अपने दो मुख्य व्यवसाय – निर्माण सामग्री और सोलर फ्लोर मिल – में लगातार स्थिरता, गुणवत्ता और सामाजिक प्रभाव सुनिश्चित कर रहा है।"
        ],
        imageUrl: "https://www.dropbox.com/scl/fi/69k7hv0pww6bv2ocktwdz/BN.jpg?rlkey=5hy9tlqh7j1c86x69unse7mqc&st=s74xc4ry&raw=1"
      },
      {
        name: "Devesh Tiwari",
        title: "Founder & Team Leader",
        description: [
            "Devesh Tiwari, DTESM के संस्थापक, अपनी कड़ी मेहनत, रचनात्मक सोच और इनोवेशन के लिए जाने जाते हैं। उनका दृष्टिकोण हमेशा ग्रामीण और स्थानीय समुदाय की ज़रूरतों को ध्यान में रखते हुए व्यवसाय को विकसित करने पर केंद्रित होता है।",
            "वे टीम के साथ मिलकर हर प्रोजेक्ट को सफल बनाते हैं और सुनिश्चित करते हैं कि सप्लाई, क्वालिटी और समय पर सेवा हमेशा बनाए रखी जाए। Devesh जी का नेतृत्व और टीम ओरिएंटेड अप्रोच DTESM को स्थानीय समुदायों में भरोसा और विश्वसनीयता दिलाने में मदद करता है।"
        ],
        imageUrl: "https://www.dropbox.com/scl/fi/0u7p0ukf8a49jylmbb2ea/De.jpg?rlkey=fdg9h3rlq5ebzf8ze50hj8syh&st=9yjvgym3&raw=1",
        phone: "9935111883"
      },
      {
        name: "Dheeraj Tiwari",
        title: "Co-Founder, Networking Expert & News Reporter(Dainik Jagran)",
        description: [
            "Dheeraj Tiwari कंपनी के को-फाउंडर हैं, जो राजनीति और स्थानीय नेटवर्किंग में प्रवीण हैं। उनकी ताकत स्थानीय समुदायों, पंचायतों और ब्लॉक स्तर के संपर्कों में गहरी पकड़ में है।",
            "इसके अलावा, एक अनुभवी न्यूज़ रिपोर्टर (Dainik Jagran) होने के नाते, उन्हें लोकल मुद्दों और लोगों की जरूरतों का बेहतरीन ज्ञान है। Dheeraj जी की यह विशेषज्ञता DTESM को गाँवों में प्रभावी पहुँच और विश्वास बनाने में मदद करती है, जिससे कंपनी की सेवाएँ और उत्पाद स्थानीय विकास और सामाजिक भलाई में योगदान दे सकें।"
        ],
        imageUrl: "https://www.dropbox.com/scl/fi/8c90jsqmwzbea6pmcvy7c/Dh.jpg?rlkey=wwwl7jps9dz620tr4y1fpxv5b&st=ybnk1sm1&raw=1",
        phone: "9559323349"
      }
    ]
  },
  gallery: {
    title: "DTESM की तस्वीरें",
    images: [
      "https://www.dropbox.com/scl/fi/953nckhm5qet59n730mln/WhatsApp-Image-2025-08-24-at-02.33.12_b222fcb0.jpg?rlkey=nzhlsmisnoq8d9xn7f0nxfbq2&st=p4tla4og&raw=1",
      "https://www.dropbox.com/scl/fi/mweb7b8c3jgpw05uars9z/WhatsApp-Image-2025-08-24-at-02.31.21_95c42a27.jpg?rlkey=yigujl5fuvhz6a6wgqhuam8ox&st=vch6fmt1&raw=1",
      "https://www.dropbox.com/scl/fi/1zs9ade8uqkztwyjbqzh1/WhatsApp-Image-2025-08-24-at-02.31.21_05cb4d76.jpg?rlkey=02oanohtue1rgrlqelhdvj808&st=q6s1uodb&raw=1"
    ]
  },
  contact: {
    title: "हमसे संपर्क करें",
    address: "भभूति पूर्वा मोड़, पलिया रोड, हरपालपुर, हरदोई, उत्तर प्रदेश – 241402",
    locationUrl: "https://maps.app.goo.gl/qFJC8jBerj7h2Ckx5?g_st=aw",
    whatsapp: "9559323349",
    phone: "9935111883"
  }
};

const navLinks = [
  { name: "परिचय", href: "#introduction" },
  { name: "समय", href: "#opening-hours" },
  { name: "समयरेखा", href: "#timeline" },
  { name: "विज़न", href: "#vision" },
  { name: "भविष्य", href: "#future" },
  { name: "संस्थापक", href: "#founders" },
  { name: "गैलरी", href: "#gallery" },
  { name: "संपर्क", href: "#contact" },
];

const BrickIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
    <path d="M0 32C0 14.3 14.3 0 32 0H480c17.7 0 32 14.3 32 32V96H0V32zM0 128H224V256H0V128zM256 256V128H512V256H256zM0 288H512v128H0V288zM224 448H0v32c0 17.7 14.3 32 32 32H224V448zM512 448H256v64H480c17.7 0 32-14.3 32-32V448z"/>
  </svg>
);

const SolarMillIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21.92,11.13a1,1,0,0,0-1-1.73l-6.13-1.41A20.21,20.21,0,0,0,12.06,2,1,1,0,0,0,11,3.42a18.25,18.25,0,0,1-1.87,6.3L3.42,11a1,1,0,0,0-1,1.73L9.5,15.54a1,1,0,0,0,1.18.15l1.6-1.16A1,1,0,0,1,13.5,15v4.59a1,1,0,1,0,2,0V15a1,1,0,0,1,1.22-.95l1.6,1.16a1,1,0,0,0,1.18-.15Z" />
    </svg>
);

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
  </svg>
);

const QuoteIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
    <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V216z"/>
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
    <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
  </svg>
);

const CopyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
    <path d="M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z"/>
  </svg>
);

const FlagIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
        <path d="M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32V64 368 480c0 17.7 14.3 32 32 32s32-14.3 32-32V352l64.3-16.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-29.4V160c0-12.8-8.3-24.7-20.8-29.4l-34.7-13c-46.2-17.4-97.5-14.7-141.7 7.4c-37.9 19-81.4 23.7-122.5 13.4L64 160V32z"/>
    </svg>
);

const GrowthIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
        <path d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1.4 16.2 19.5c2.1 2.5 3.7 5.2 4.3 8.2l34.2 159.6L172.3 345.8l-9.5-3.6c-4.2-1.6-8.7-2.8-13.3-3.9L70.1 285.7z"/>
    </svg>
);

const LocationPinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor">
        <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
    </svg>
);

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.8 0-67.6-9.5-97.8-26.7l-7-4.1-72.5 19.1 19.4-70.5-4.5-7.3c-18.4-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
    </svg>
);

const LinkIcon = () => (
    <svg className="link-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
        <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 117.3V200c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-35.3-28.7-64-64-64H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v112c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16h112c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/>
    </svg>
);

const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
        <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/>
    </svg>
);

const FutureIcons = {
  Employment: () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor"><path d="M309.6 158.5L332.3 252.1l99.1 11.2c13.4 1.5 23.3 14 19.1 26.8s-18.6 21.6-32.6 17.4l-112.5-33.6-43.1 107.2c-5.7 14.1-22.3 19.3-36.4 13.6s-19.3-22.3-13.6-36.4l43.1-107.2-112.5 33.6c-14 4.2-28.4-5.6-32.6-17.4s5.7-25.3 19.1-26.8l99.1-11.2L266.4 158.5c5.7-14.1 22.3-19.3 36.4-13.6s19.3 22.3 13.6 36.4zM576 128c0-35.3-28.7-64-64-64H64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128zM48 128c0-8.8 7.2-16 16-16H512c8.8 0 16 7.2 16 16V384c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V128z"/></svg>,
  Sustainability: () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S500.9 480 488 480H24c-12.9 0-24.6-7.8-29.5-19.8s-7-27.7 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>,
  Community: () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor"><path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM320 256c-44.2 0-80-35.8-80-80s35.8-80 80-80s80 35.8 80 80s-35.8 80-80 80zM256 416c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H288c-17.7 0-32 14.3-32 32z"/></svg>,
  Collaboration: () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-15.7 20-28.2 20h-86.9c-3.5 8.8-7.9 17.1-12.9 24.9l41.3 42.6c5.8 6 7.8 15.3 5.3 23.6c-3.4 11.6-14.4 19.6-26.6 19.6H336c-8.3 0-16.2-1.8-23.2-5.2c-17.6-8.5-30.3-25.2-34.9-44.3l-10.3-42.9c-8.2 1.4-16.7 2.1-25.4 2.1s-17.2-.7-25.4-2.1L206.3 435c-4.6 19.1-17.3 35.8-34.9 44.3c-7 3.4-14.8 5.2-23.2 5.2H80c-12.2 0-23.2-7.9-26.6-19.6c-2.5-8.3-.4-17.6 5.3-23.6l41.3-42.6c-5-7.8-9.4-16.1-12.9-24.9H0c-12.5 0-23.8-8.1-28.2-20c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C20.6 273.1 20 264.6 20 256s.6-17.1 1.7-25.4L1.7 191.2c-6.9-6.2-9.6-15.9-6.4-24.6C-2.2 154.7 9 146.6 21.5 146.6h86.9c3.5-8.8 7.9-17.1 12.9-24.9L80 79.1c-5.8-6-7.8-15.3-5.3-23.6C78.2 43.9 89.2 36 101.4 36H168c8.3 0 16.2 1.8 23.2 5.2C208.8 49.7 221.5 66.4 226.1 85.5l10.3 42.9c8.2-1.4 16.7-2.1 25.4-2.1s17.2 .7 25.4 2.1l10.3-42.9c4.6-19.1 17.3-35.8 34.9-44.3c7-3.4 14.8-5.2 23.2-5.2H432c12.2 0 23.2 7.9 26.6 19.6c2.5 8.3 .4 17.6-5.3 23.6l-41.3 42.6c5 7.8 9.4 16.1 12.9 24.9h86.9c12.5 0 23.8 8.1 28.2 20zM336 256c0-44.2-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80s80-35.8 80-80z"/></svg>,
  Nation: () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM256 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm0 96a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm0 96a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>,
};

const TimelineIcons = {
    Flag: FlagIcon,
    Growth: GrowthIcon,
    SolarMill: SolarMillIcon,
};

const HighlightedText = ({ text, highlight }) => {
  if (!highlight) {
    return <>{text}</>;
  }
  const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
  return (
    <>
      {parts.map((part, i) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <span key={i} className="text-highlight">{part}</span>
        ) : (
          part
        )
      )}
    </>
  );
};

const Slogan = () => {
  const lines = companyDetails.slogan.split('\n');
  return (
    <div className="hero-slogan">
      {lines.map((line, index) => (
          <span
            key={index}
            className="slogan-line"
            style={{ animationDelay: `${0.5 + index * 0.2}s` } as React.CSSProperties}
          >
            {line}
          </span>
        ))}
    </div>
  );
};

const ScrollDownIndicator = () => (
    <a href="#introduction" className="scroll-down-indicator" aria-label="Scroll down">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
        <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
      </svg>
    </a>
);

const FounderCard = ({ founder }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    if (!founder.phone) return;
    navigator.clipboard.writeText(founder.phone).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div className="founder-card">
      <div className="founder-image">
        {founder.imageUrl ? (
          <img src={founder.imageUrl} alt={founder.name} />
        ) : (
          <UserIcon />
        )}
      </div>
      <h3 className="founder-name">{founder.name}</h3>
      <p className="founder-title">{founder.title}</p>
      <div className="founder-description">
        {founder.description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      {founder.phone && (
        <div className="founder-contact">
          <a href={`tel:${founder.phone}`} className="founder-phone">
            <PhoneIcon />
            <span>{founder.phone}</span>
          </a>
          <button onClick={handleCopy} className={`copy-btn ${copied ? 'copied' : ''}`} aria-label="Copy phone number">
            {copied ? 'Copied!' : <CopyIcon />}
          </button>
        </div>
      )}
    </div>
  );
};


function App() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('');

  const handleNavClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href).scrollIntoView({
      behavior: 'smooth'
    });
  };
  
  React.useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('.content-section');
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 150) {
          current = section.getAttribute('id');
        }
      });
      setActiveSection(current);
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // For timeline, observe individual items
          if (entry.target.id === 'timeline') {
              entry.target.querySelectorAll('.timeline-item').forEach((item, index) => {
                (item as HTMLElement).style.transitionDelay = `${index * 0.2}s`;
                item.classList.add('visible');
              });
          }
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.content-section').forEach(section => {
      observer.observe(section);
    });

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.querySelectorAll('.content-section').forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="app-container">
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
          <div className="header-content">
            <h1 className="header-title">
               DTESM
            </h1>
            <nav className="header-nav">
                {navLinks.map(link => (
                    <a 
                        key={link.name} 
                        href={link.href} 
                        className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                        onClick={(e) => handleNavClick(e, link.href)}
                    >
                        {link.name}
                    </a>
                ))}
            </nav>
          </div>
      </header>
      
      <main>
        <section id="hero" className="hero content-section">
          <h1 className="hero-title">
            <HighlightedText text={companyDetails.name} highlight="Solar Flour Mill" />
          </h1>
          <Slogan />
          <ScrollDownIndicator />
        </section>

        <section id="introduction" className="content-section" aria-labelledby="intro-title">
          <h2 id="intro-title" className="section-title">{companyDetails.introduction.title}</h2>
          <div className="section-content">
            <p>{companyDetails.introduction.content}</p>
            <div className="services-grid">
              {companyDetails.introduction.services.map((service, index) => (
                <div key={index} className="service-card">
                  <div className="service-icon">
                    {index === 0 ? <BrickIcon /> : <SolarMillIcon />}
                  </div>
                  <h3 className="service-title">
                    <HighlightedText text={service.name} highlight={service.highlight} />
                  </h3>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="opening-hours" className="content-section" aria-labelledby="hours-title">
            <h2 id="hours-title" className="section-title">{companyDetails.openingHours.title}</h2>
            <div className="opening-hours-container">
                <ul className="opening-hours-list">
                    {companyDetails.openingHours.days.map((item, index) => (
                        <li key={index} className="opening-hours-item">
                            <span className="day">{item.day}</span>
                            <span className="hours">{item.hours}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>

        <section id="timeline" className="content-section" aria-labelledby="timeline-title">
          <h2 id="timeline-title" className="section-title">{companyDetails.timeline.title}</h2>
          <div className="timeline-container">
            {companyDetails.timeline.events.map((event, index) => {
              const IconComponent = TimelineIcons[event.icon];
              return (
                <div className="timeline-item" key={index}>
                  <div className="timeline-content-wrapper">
                    <div className="timeline-icon-container">
                       {IconComponent && <IconComponent />}
                    </div>
                    <div className="timeline-details">
                      <h3 className="timeline-year">{event.year}</h3>
                      <p className="timeline-market-cap">Market Cap: {event.marketCap}</p>
                      {event.description && <p className="timeline-description">{event.description}</p>}
                    </div>
                  </div>
                   <div className="timeline-marker"></div>
                </div>
              );
            })}
          </div>
        </section>

        <section id="vision" className="content-section" aria-labelledby="vision-title">
          <h2 id="vision-title" className="section-title">{companyDetails.vision.title}</h2>
          <div className="vision-grid">
            {companyDetails.vision.content.map((paragraph, index) => (
              <div key={index} className="vision-card">
                  <div className="vision-icon"><QuoteIcon /></div>
                  <p>{paragraph}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="future" className="content-section" aria-labelledby="future-title">
          <h2 id="future-title" className="section-title">{companyDetails.future.title}</h2>
          <div className="section-content">
             <ul>
              {companyDetails.future.content.map((item, index) => {
                const IconComponent = FutureIcons[item.icon];
                return (
                  <li key={index} className="future-list-item">
                    <div className="icon"><IconComponent /></div>
                    <span>{item.text}</span>
                  </li>
                );
              })}
             </ul>
          </div>
        </section>

        <section id="founders" className="content-section" aria-labelledby="founders-title">
          <h2 id="founders-title" className="section-title">{companyDetails.founders.title}</h2>
          <div className="founders-grid">
            {companyDetails.founders.members.map((founder, index) => (
              <FounderCard key={index} founder={founder} />
            ))}
          </div>
        </section>
        
        <section id="gallery" className="content-section" aria-labelledby="gallery-title">
            <h2 id="gallery-title" className="section-title">{companyDetails.gallery.title}</h2>
            <div className="gallery-scroll-container">
              {companyDetails.gallery.images.map((src, index) => (
                <div key={index} className="gallery-item">
                  <img src={src} alt={`Company image ${index + 1}`} loading="lazy" />
                </div>
              ))}
            </div>
        </section>

        <section id="contact" className="content-section" aria-labelledby="contact-title">
            <h2 id="contact-title" className="section-title">{companyDetails.contact.title}</h2>
            <div className="contact-grid">
                <div className="contact-item">
                    <div className="contact-icon"><LocationPinIcon /></div>
                    <h3 className="contact-label">पता</h3>
                    <a href={companyDetails.contact.locationUrl} target="_blank" rel="noopener noreferrer" className="contact-info">
                        <span>{companyDetails.contact.address}</span>
                        <LinkIcon />
                    </a>
                </div>
                <div className="contact-item">
                    <div className="contact-icon"><WhatsAppIcon /></div>
                    <h3 className="contact-label">व्हाट्सएप</h3>
                    <a href={`https://wa.me/91${companyDetails.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="contact-info">
                        {companyDetails.contact.whatsapp}
                    </a>
                </div>
                <div className="contact-item">
                    <div className="contact-icon"><PhoneIcon /></div>
                    <h3 className="contact-label">संपर्क नंबर</h3>
                    <a href={`tel:${companyDetails.contact.phone}`} className="contact-info">
                        {companyDetails.contact.phone}
                    </a>
                </div>
            </div>
        </section>

      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} {companyDetails.name}. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);