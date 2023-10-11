export type ProductType = {
  id: number;
  heading?: string;
  subHeading: string;
  para: string;
  row: string;
  pl: string;
  pr: string;
  url?: string | Record<string, string>;
  buttonText: string;
  width?: string;
  scroller?: boolean;
  productH2?: Record<number, string>;
  productH4?: Record<number, string>;
  height?: string;
  play?: boolean;
  loop?: boolean;
}

export const products: ProductType[] = [
  {
    id: 0,
    heading: "The Athenaeum",
    subHeading: "Ouranon: the sixth Othertopias fragrance",
    para: "Each of the six Othertopias fragrances is a doorway to another realm, real and imagined. Ouranon—a woody, spicy, resinous scent, distinguished by Frankincense, Hay and Myrrh—is the final chapter of that journey.",

    row: "flex-col md:flex-row",
    pl: "pl-20",
    pr: "pl-32",
    url: {
      url1: "https://www.aesop.com/u1nb1km7t5q7/u3xwLdwyHOhnFjFDnp9xh/78ae09241ad257722205bb61089ab46a/Aesop_Othertopias_2023_Web_Homepage_3_Primary_Full_Bleed_Desktop_2880x1044px.jpg",
      url2: "https://www.aesop.com/u1nb1km7t5q7/6gh1BfrwUWExsAYoI9MhxK/56b784ae98ed3421486a09e0c112bdea/Aesop_Bar_Soaps_2023_Web_Homepage_1_Primary_Full_Bleed_Desktop_2880x1044px.jpg",
      url3: "https://www.aesop.com/u1nb1km7t5q7/4SUhr7BGma03r1oHxGHgpY/736e8b4997372edbecf26d60044caabf/Aesop_PSAOIS_2023_Web_Homepage_Primary_50-50_Desktop_1440x1500px.jpg",
    },
    width: "w-full",
    buttonText: "Step inside Ouranon",
    play: true,
    loop: true
  },
  {
    id: 1,
    heading: "The Athenaeum",
    subHeading: "Ouranon: the sixth Othertopias fragrance",
    para: "Each of the six Othertopias fragrances is a doorway to another realm, real and imagined. Ouranon—a woody, spicy, resinous scent, distinguished by Frankincense, Hay and Myrrh—is the final chapter of that journey.",

    row: "flex-col md:flex-row",
    pl: "pl-20",
    pr: "pl-32",
    url: "",
    buttonText: "Step inside Ouranon",
  },
  {
    id: 2,
    heading: "Fragrance",
    subHeading: "Our personal scents",
    para: "Unorthodox, evocative, and refined, Aesop fragrances are sensory bridges to memory and connection points to those around us.",

    row: "flex-col md:flex-row",
    pl: "pl-20",
    pr: "pl-32",
    url: {
      url1: "https://www.aesop.com/u1nb1km7t5q7/6fS7KvwhtoYYrcc6zwJilY/4e2cb9b2e23b98648aae11ae7d0fa4e0/Aesop_Fragrance_Ouranon_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png",
      url2: "https://www.aesop.com/u1nb1km7t5q7/5JnjTiylieRSYutnMFeyVK/0c78718d9172cd5384064512e06f0b52/Aesop_Fragrance_Gloam_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png",
      url3: "https://www.aesop.com/u1nb1km7t5q7/6otLbkgZuAv2oDJ3UG3r53/752eb0a5fe1f836a105247851d0200b8/Aesop_Fragrance_Eidesis_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png",
      url4: "https://www.aesop.com/u1nb1km7t5q7/J4lTP53G5Qg3MtFjmhnRW/945d6746058105e97c0552e3b0fbf54b/Aesop_Fragrance_Eremia_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png",
      url5: "https://www.aesop.com/u1nb1km7t5q7/4xJBSrjM8KCIc1c98Y2V08/38105def050ed90c4f47b58a22c32f97/Aesop_Fragrance_Miraceti_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png",
      url6: "https://www.aesop.com/u1nb1km7t5q7/cc3b7QvhMcApvi0MCw9Xa/c2f5d7e204d7f2e9a5be48aaf66aff3d/Aesop_Fragrance_Karst_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png",
    },
    productH2: {
      0: "Ouranon Eau de Parfum",
      1: "Gloam Eau de Parfum",
      2: "Eidesis Eau de Parfum",
      3: "Erémia Eau de Parfum",
      4: "Miraceti Eau de Parfum",
      5: "Karst Eau de Parfum",
    },
    productH4: {
      0: "Woody, spicy, resinous",
      1: "Floral, spicy, green",
      2: "Woody, spicy, ambery",
      3: "A green, floral, citrus fragrance",
      4: "Resinous, woody, spicy fragrance",
      5: "Fresh, herbaceous, marine fragrance",
    },
    width: "w-full",
    scroller: true,
    buttonText: "See all Fragrance",
  },
  {
    id: 3,
    heading: "",
    subHeading: "Efficacious pairings",
    para: "Our consultants have long combined complementary formulations to effect additional benefits for the skin. Incorporate this time-honoured practice into your regimen with our recommended bundles.",

    row: "flex-col md:flex-row-reverse",
    pl: "pl-0 pr-20",
    pr: "pr-32",
    url: "https://www.aesop.com/u1nb1km7t5q7/2ck6SrjYyPRBPhURWsSMEn/b0e30e9520ff0afd24b9b78a1eeb858e/Aesop_Always_On_Homepage_Secondary_Skin_Care_Blending_Mid_Mobile_640x360px.jpg",
    buttonText: "Browse Skin Care Bundles",
  },
  {
    id: 4,
    heading: "Parsley Seed Skin Care",
    subHeading: "Fortification of the highest order",
    para: "Our Parsley Seed Skin Care range provides potent doses of anti-oxidant rich ingredients in formulations suited to all skin types. They are especially recommended for those in urban environments, to fortify the skin against the damaging effects of free radicals.",

    row: "flex-col md:flex-row",
    pl: "pl-20",
    pr: "pl-32",
    url: {
      url1: "https://www.aesop.com/u1nb1km7t5q7/5vuGB9OlPfCwhd0di4sqjF/8c66786e2c82846e7e86c2e234c7c0e5/Aesop_Kits_Parsley_Seed_Anti-Oxidant_Skin_Care_Kit_Web_Large_1584x962px.png",
      url2: "https://www.aesop.com/u1nb1km7t5q7/4fclKcB1FNLpV5wHmZkAQ6/c6c62862184703d834efbc07077b86cb/Aesop_Skin_Parsley_Seed_Anti-Oxidant_Eye_Cream_10mL_Web_Large_901x478px.png",
      url3: "https://www.aesop.com/u1nb1km7t5q7/5T3H9UXxNE9yT2Na2kjXvW/71d804effdc8b27b1aced97e1781f1ec/Aesop-Skin-Parsley-Seed-Facial-Cleansing-Oil-200mL-large.png",
      url4: "https://www.aesop.com/u1nb1km7t5q7/4dDnzrqcgMeqKPXni0V0iV/d32a161375b1e4f21f5fe79471ef4b3c/Aesop-SkinParsley-Seed-Facial-Cleanser-100mL-large.png",
      url5: "https://www.aesop.com/u1nb1km7t5q7/1pr54VIGFr7VyVW9UXGXm4/0eeedad1ea45c86f45ce8c724bfbc4cb/Aesop-Skin-Parsley-Seed-Anti-Oxidant-Facial-Hydrating-Cream-60mL-large.png",
      url6: "https://www.aesop.com/u1nb1km7t5q7/27ALSA2USE1gv4VGow4S10/4342f79cf74c9ea2f9474e3ea057bde2/Aesop-Skin-Parsley-Seed-Anti-Oxidant-Hydrator-60mL-large.png",
      url7: "https://www.aesop.com/u1nb1km7t5q7/11SkMKAwt3wKeDg1Rg63wn/0f9e8e78c8a21a7655a3d8f5c42fbdf4/Aesop_Skin_Parsley_Seed_Anti-Oxidant_Facial_Treatment_15mL_Web_Large_684x668px.png",
      url8: "https://www.aesop.com/u1nb1km7t5q7/59ChXwSO689JxBwcTsMia2/15d4701f3ccb169b2c1de46ef38f8748/Large-PNG-Aesop-Skin-Parsley-Seed-Anti-Oxidant-Facial-Toner-100mL-large.png",
    },
    productH2: {
      0: "Parsley Seed Anti-Oxidant Skin Care Kit",
      1: "Parsley Seed Anti-Oxidant Eye Cream",
      2: "Parsley Seed Facial Cleansing Oil",
      3: "Parsley Seed Facial Cleanser",
      4: "Parsley Seed Anti-Oxidant Facial Hydrating Cream",
      5: "Parsley Seed Facial Cleanser",
      6: "Parsley Seed Anti-Oxidant Facial Treatment",
      7: "Parsley Seed Anti-Oxidant Facial Toner",
    },
    productH4: {
      0: "A trio of Parsley Seed staples",
      1: "Nourishes delicate skin around eyes",
      2: "Gently liberates skin of grime and makeup",
      3: "For those in polluted urban environments",
      4: "A potent, nourishing cream",
      5: "For those in polluted urban environments",
      6: "Fortifies, revives and intensely hydrates",
      7: "For normal, dry, or sensitive skin",
    },
    width: "w-full",
    height: "h-[460px]",
    scroller: true,
    buttonText: "Explore the range",
  },
  {
    id: 5,
    heading: "",
    subHeading: "Store locator",
    para: "Our consultants are available to host you in-store and provide tailored guidance on gift purchases.",

    row: "flex-col md:flex-row",
    pl: "pl-20",
    pr: "pl-32",
    url: {
      url1: "https://www.aesop.com/u1nb1km7t5q7/5U8aDtbYkybIgilkq1tJ7w/41bdf1c8b1eb863fd9ac7cde0ee1c64a/Aesop_Fashion_Walk_II_Mid_Desktop_2560x1440px.jpg",
      url2: "https://www.aesop.com/u1nb1km7t5q7/4StXXhzwKgYMIFgTSIOgUk/8c3406be7d5c1194b0e267b773fa66e6/Aesop_MOKO_II_Mid_Desktop_2560x1440px.jpg",
      url3: "https://www.aesop.com/u1nb1km7t5q7/iC1baQuIzXXC6Ho3lZSFW/1226a07142e70fec26df3f0b72578cbd/Aesop_HK_Store_IFC_III_Hero_Bleed_Desktop_2880x1620px.jpg",
    },
    width: "object-cover",
    scroller: false,
    buttonText: "Find a nearby store",
    loop: true
  },
  {
    id: 6,
    heading: "Facial Appointments",
    subHeading: "Composure for the skin and senses",
    para: "For a well-rounded skin care regimen, Aesop Facial Appointments offer a series of treatments tailored to balance, stimulate and intensely nourish the skin.",

    row: "flex-col md:flex-row-reverse pb-14",
    pl: "pl-0 pr-20",
    pr: "pr-32",
    url: "https://www.aesop.com/u1nb1km7t5q7/6a0rFYweQvQusUfEHpowUJ/32611c5a1ea838756fd635261d88d2db/Aesop-Generic-Images-Facial-Appointments-1-Mid-Desktop-2560x1440px.jpg",
    buttonText: "Learn more",
  },
];