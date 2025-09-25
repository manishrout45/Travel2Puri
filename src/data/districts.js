const districts = [
  {
    name: "Angul",
    map: "/images/districts/angul.png",
    destinations: [
      {
        id: "satkosia-gorge-angul",
        name: "Satkosia Gorge",
        image: "/images/destinations/satkosia.jpg",
        description: "Famous wildlife sanctuary on the Mahanadi River."
      },
      {
        id: "tikarpada",
        name: "Tikarpada",
        image: "/images/destinations/tikarpada.jpg",
        description: "Known for crocodile sanctuary and scenic beauty."
      },
      { 
        id:"derjang-reservoir",
        name: "Derjang Reservoir", 
        image: "https://www.orissapost.com/wp-content/uploads/2021/08/Derjang-dam-site-no-longer-a-safe-tourists-destination-1024x489.jpeg", 
        description: "Picturesque water reservoir popular for picnics." 
      },
      { 
        id:"budhi-thakurani-temple",
        name: "Budhi Thakurani Temple", 
        image: "", 
        description: "Ancient shrine dedicated to Goddess Budhi Thakurani." 
      },
    ]
  },
  {
    name: "Balangir",
    map: "/images/districts/balangir.png",
    destinations: [
      {
        id: "harishankar-temple",
        name: "Harishankar Temple",
        image: "/images/destinations/harishankar.jpg",
        description: "Pilgrimage site at the foot of Gandhamardan hills."
      },
      {
        id: "ranipur-jharial",
        name: "Ranipur Jharial",
        image: "/images/destinations/ranipur.jpg",
        description: "Archaeological site with temples and ruins."
      },
      { 
        id:"patnagarh-fort",
        name: "Patnagarh Fort", 
        image: "/images/destinations/ranipur.jpg", 
        description: "Historical fort town with remnants of old fortifications." 
      },
      { 
        id:"jogeswar-temple",
        name: "Jogeswar Temple", 
        image: "/images/destinations/ranipur.jpg", 
        description: "Temple dedicated to Lord Shiva in a serene setting." 
      },
    ]
  },
  {
    name: "Balasore",
    map: "/images/districts/balasore.png",
    destinations: [
      {
        id: "chandipur-beach",
        name: "Chandipur Beach",
        image: "/images/destinations/chandipur.jpg",
        description: "Unique beach where the sea recedes up to 5 km."
      },
      { 
        id:"panchalingeswar-temple",
        name: "Panchalingeswar Temple", 
        image: "/images/destinations/kuldiha.jpg", 
        description: "Temple on a hilltop surrounded by forest streams." 
      },
      { 
        id:"khirachora-gopinath-temple",
        name: "Khirachora Gopinath Temple, Remuna", 
        image: "/images/destinations/kuldiha.jpg", 
        description: "Famous Vaishnavite shrine associated with Lord Chaitanya." 
      },
      { 
        id:"dublagadi-beach",
        name: "Dublagadi Beach", 
        image: "/images/destinations/kuldiha.jpg", 
        description: "Quiet and less crowded beach with natural beauty." 
      },
    ]
  },
  {
    name: "Bargarh",
    map: "/images/districts/bargarh.png",
    destinations: [
      {
        id: "nrusinghanath-temple",
        name: "Nrusinghanath Temple",
        image: "/images/destinations/nrusinghanath.jpg",
        description: "Ancient temple near Gandhamardan hills."
      },
      {
        id: "debrigarh-sanctuary",
        name: "Debrigarh Wildlife Sanctuary",
        image: "/images/destinations/debrigarh.jpg",
        description: "Famous for Hirakud reservoir and wildlife."
      },
      { 
        id:"gandhamardan-hills",
        name: "Gandhamardan Hills", 
        image: "/images/destinations/debrigarh.jpg", 
        description: "Scenic hills with mythological and medicinal importance." 
      },
      { 
        id:"papanga-hill",
        name: "Papanga Hill", 
        image: "/images/destinations/debrigarh.jpg", 
        description: "Hill known for its trekking trails and panoramic views." 
      },
    ]
  },
  {
    name: "Bhadrak",
    map: "/images/districts/bhadrak.png",
    destinations: [
      {
        id: "maa-bhadrakali",
        name: "Maa Bhadrakali Temple",
        image: "/images/destinations/bhadrakali.jpg",
        description: "Famous Shakti shrine of Odisha."
      },
      {
        id: "aradi-akhandalamani",
        name: "Aradi (Akhandalamani Temple)",
        image: "/images/destinations/aradi.jpg",
        description: "Renowned Shaiva temple near Bhadrak."
      }
    ]
  },
  {
    name: "Boudh",
    map: "/images/districts/boudh.png",
    destinations: [
      {
        id: "boudh-buddha-monastery",
        name: "Boudh Buddha Monastery",
        image: "/images/destinations/boudh_buddha.jpg",
        description: "Ancient Buddhist monastery site."
      },
      {
        id: "boudh-jagannath-temple",
        name: "Jagannath Temple, Boudh",
        image: "/images/destinations/boudh_jagannath.jpg",
        description: "Important Jagannath temple in the district."
      }
    ]
  },
  {
    name: "Cuttack",
    map: "/images/districts/cuttack.png",
    destinations: [
      {
        id: "barabati-fort",
        name: "Barabati Fort",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/95/Entrance_of_Barabati_fort.jpg",
        description: "Barabati Fort is a 987 CE fort built by Marakata Keshari of Somavanshi dynasty in Cuttack, Odisha. The ruins of the fort remain with its moat, gate, and the earthen mound of the nine-storied palace."
      },
      {
        id: "dhabaleswar-temple",
        name: "Dhabaleswar Temple",
        image: "/images/destinations/dhabaleswar.jpg",
        description: "Temple on an island in Mahanadi river."
      }
    ]
  },
  {
    name: "Deogarh",
    map: "/images/districts/deogarh.png",
    destinations: [
      {
        id: "pradhanpat-waterfall",
        name: "Pradhanpat Waterfall",
        image: "/images/destinations/pradhanpat.jpg",
        description: "Scenic waterfall near Deogarh town."
      },
      {
        id: "kurudkut-waterfall",
        name: "Kurudkut Waterfall",
        image: "/images/destinations/kurudkut.jpg",
        description: "Picturesque waterfall in the district."
      }
    ]
  },
  {
    name: "Dhenkanal",
    map: "/images/districts/dhenkanal.png",
    destinations: [
      {
        id: "kapilash-temple",
        name: "Kapilash Temple",
        image: "/images/destinations/kapilash.jpg",
        description: "Famous Shiva temple on a hilltop."
      },
      {
        id: "satkosia-dhenkanal",
        name: "Satkosia Gorge",
        image: "/images/destinations/satkosia_dhenkanal.jpg",
        description: "Part of the Satkosia Tiger Reserve."
      }
    ]
  },
  {
    name: "Gajapati",
    map: "/images/districts/gajapati.png",
    destinations: [
      {
        id: "mahaendragiri-hills",
        name: "Mahaendragiri Hills",
        image: "/images/destinations/mahaendragiri.jpg",
        description: "Sacred hills with mythological significance."
      },
      {
        id: "gandahati-waterfall",
        name: "Gandahati Waterfall",
        image: "/images/destinations/gandahati.jpg",
        description: "Scenic waterfall surrounded by forests."
      }
    ]
  },
  {
    name: "Ganjam",
    map: "/images/districts/ganjam.png",
    destinations: [
      {
        id: "gopalpur-beach",
        name: "Gopalpur Beach",
        image: "/images/destinations/gopalpur.jpg",
        description: "Famous beach on the east coast."
      },
      {
        id: "tara-tarini-temple",
        name: "Tara Tarini Temple",
        image: "/images/destinations/taratarini.jpg",
        description: "Renowned Shakti Peetha on Kumari hills."
      }
    ]
  },
  // ... continue the same structure for all other districts you listed
];

export default districts;
