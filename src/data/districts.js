const districts = [
  {
    name: "Angul",
    map: "/images/districts/angul.png",
    destinations: [
      {
        id: "satkosia-gorge-angul",
        name: "Satkosia Gorge",
        image: "/images/destinations/satkosia-gorge-angul.jpg",
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
        image: "/images/destinations/derjang-reservoir.jpg", 
        description: "Picturesque water reservoir popular for picnics." 
      },
      { 
        id:"budhi-thakurani-temple",
        name: "Budhi Thakurani Temple", 
        image: "/images/destinations/budhi-thakurani-temple.webp", 
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
        image: "/images/destinations/harishankar-temple.jpg",
        description: "Pilgrimage site at the foot of Gandhamardan hills."
      },
      {
        id: "ranipur-jharial",
        name: "Ranipur Jharial",
        image: "/images/destinations/ranipur-jharial.jpg",
        description: "Archaeological site with temples and ruins."
      },
      { 
        id:"patnagarh-fort",
        name: "Patnagarh Fort", 
        image: "/images/destinations/patnagarh-fort.jpg", 
        description: "Historical fort town with remnants of old fortifications." 
      },
      { 
        id:"jogeswar-temple",
        name: "Jogeswar Temple", 
        image: "/images/destinations/jogeswar-temple.jpg", 
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
        image: "/images/destinations/chandipur-beach.jpg",
        description: "Unique beach where the sea recedes up to 5 km."
      },
      { 
        id:"panchalingeswar-temple",
        name: "Panchalingeswar Temple", 
        image: "/images/destinations/panchalingeswar-temple.jpg", 
        description: "Temple on a hilltop surrounded by forest streams." 
      },
      { 
        id:"khirachora-gopinath-temple",
        name: "Khirachora Gopinath Temple, Remuna", 
        image: "/images/destinations/khirachora-gopinath-temple.jpg", 
        description: "Famous Vaishnavite shrine associated with Lord Chaitanya." 
      },
      { 
        id:"dublagadi-beach",
        name: "Dublagadi Beach", 
        image: "/images/destinations/dublagadi-beach.jpg", 
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
        image: "/images/destinations/nrusinghanath-temple.jpg",
        description: "Ancient temple near Gandhamardan hills."
      },
      {
        id: "debrigarh-sanctuary",
        name: "Debrigarh Wildlife Sanctuary",
        image: "/images/destinations/debrigarh-sanctuary.jpg",
        description: "Famous for Hirakud reservoir and wildlife."
      },
      { 
        id:"gandhamardan-hills",
        name: "Gandhamardan Hills", 
        image: "/images/destinations/gandhamardan-hills.jpg", 
        description: "Scenic hills with mythological and medicinal importance." 
      },
      { 
        id:"papanga-hill",
        name: "Papanga Hill", 
        image: "/images/destinations/papanga-hill.jpg", 
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
        image: "/images/destinations/maa-bhadrakali.jpg",
        description: "Famous Shakti shrine of Odisha."
      },
      {
        id: "aradi-akhandalamani",
        name: "Aradi (Akhandalamani Temple)",
        image: "/images/destinations/aradi-akhandalamani.jpg",
        description: "Renowned Shaiva temple near Bhadrak."
      },
      { 
        id:"dhamra-port-&-temple",
        name: "Dhamra Port & Temple", 
        image: "/images/destinations/dhamra-port-&-temple.jpg", 
        description: "Historic port and ancient temple town." 
      },
      { 
        id:"chandbali",
        name: "Chandbali", 
        image: "/images/destinations/chandbali.jpg", 
        description: "Old river port area on the Baitarani." 
      },
    ]
  },
  {
    name: "Boudh",
    map: "/images/districts/boudh.png",
    destinations: [
      {
        id: "boudh-buddha-monastery",
        name: "Boudh Buddha Monastery",
        image: "/images/destinations/boudh-buddha-monastery.jpg",
        description: "Ancient Buddhist monastery site."
      },
      {
        id: "boudh-jagannath-temple",
        name: "Jagannath Temple, Boudh",
        image: "/images/destinations/boudh-jagannath-temple.jpg",
        description: "Important Jagannath temple in the district."
      },
      { 
        id:"rameswar-temple",
        name: "Rameswar Temple", 
        image: "/images/destinations/rameswar-temple.jpg", 
        description: "Historic temple dedicated to Lord Shiva." 
      },
      { 
        id:"satkosia-gorge",
        name: "Satkosia Gorge", 
        image: "/images/destinations/satkosia-gorge.jpg", 
        description: "Scenic gorge of Mahanadi with dense forests." 
      },
    ]
  },
  {
    name: "Cuttack",
    map: "/images/districts/cuttack.png",
    destinations: [
      {
        id: "barabati-fort",
        name: "Barabati Fort",
        image: "/images/destinations/barabati-fort.jpg",
        description: "Barabati Fort is a 987 CE fort built by Marakata Keshari of Somavanshi dynasty in Cuttack, Odisha. The ruins of the fort remain with its moat, gate, and the earthen mound of the nine-storied palace."
      },
      {
        id: "dhabaleswar-temple",
        name: "Dhabaleswar Temple",
        image: "/images/destinations/dhabaleswar-temple.jpg",
        description: "Temple on an island in Mahanadi river."
      },
      { 
        id:"chandi-temple",
        name: "Chandi Temple", 
        image: "/images/destinations/chandi-temple.jpg", 
        description: "Renowned temple dedicated to Goddess Chandi." 
      },
      { 
        id:"ansupa-lake",
        name: "Ansupa Lake", 
        image: "/images/destinations/ansupa-lake.jpg", 
        description: "Freshwater lake famous for migratory birds." 
      },
    ]
  },
  {
    name: "Deogarh",
    map: "/images/districts/deogarh.png",
    destinations: [
      {
        id: "pradhanpat-waterfall",
        name: "Pradhanpat Waterfall",
        image: "/images/destinations/pradhanpat-waterfall.jpg",
        description: "Scenic waterfall near Deogarh town."
      },
      {
        id: "kurudkut-waterfall",
        name: "Kurudkut Waterfall",
        image: "/images/destinations/kurudkut-waterfall.jpg",
        description: "Picturesque waterfall in the district."
      },
      { 
        id:"kailash-palace",
        name: "Kailash Palace", 
        image: "/images/destinations/kailash-palace.jpg", 
        description: "Royal palace of Deogarh rulers." 
      },
      { 
        id:"jagannath-temple",
        name: "Jagannath Temple, Deogarh", 
        image: "/images/destinations/jagannath-temple.jpg", 
        description: "Important Jagannath shrine in the town." 
      },
    ]
  },
  {
    name: "Dhenkanal",
    map: "/images/districts/dhenkanal.png",
    destinations: [
      {
        id: "kapilash-temple",
        name: "Kapilash Temple",
        image: "/images/destinations/kapilash-temple.jpg",
        description: "Famous Shiva temple on a hilltop."
      },
      { 
        id:"saptasajya-hills",
        name: "Saptasajya Hills", 
        image: "/images/destinations/saptasajya-hills.jpg", 
        description: "Picturesque hills with mythological links to Pandavas." 
      },
      { 
        id:"joranda-monastery",
        name: "Joranda Monastery (Mahima Dharma)", 
        image: "/images/destinations/joranda-monastery.jpg", 
        description: "Spiritual center of Mahima cult." 
      },
      { 
        id:"kualo-ancient-temple",
        name: "Kualo Ancient Temple Complex", 
        image: "/images/destinations/kualo-ancient-temple.jpg", 
        description: "Cluster of old temples with rich carvings." 
      },
    ]
  },
  {
    name: "Gajapati",
    map: "/images/districts/gajapati.png",
    destinations: [
      {
        id: "mahaendragiri-hills",
        name: "Mahaendragiri Hills",
        image: "/images/destinations/mahaendragiri-hills.jpg",
        description: "Sacred hills with mythological significance."
      },
      {
        id: "gandahati-waterfall",
        name: "Gandahati Waterfall",
        image: "/images/destinations/gandahati-waterfall.jpg",
        description: "Scenic waterfall surrounded by forests."
      },
      { 
        id:"paralakhemundi-palace",
        name: "Paralakhemundi Palace", 
        image: "/images/destinations/paralakhemundi-palace.jpg", 
        description: "Historic royal palace with Indo-European architecture." 
      },
      { 
        id:"harabhangi-dam",
        name: "Harabhangi Dam", 
        image: "/images/destinations/harabhangi-dam.jpg", 
        description: "Major irrigation project with natural surroundings." 
      },
    ]
  },
  {
    name: "Ganjam",
    map: "/images/districts/ganjam.png",
    destinations: [
      {
        id: "gopalpur-beach",
        name: "Gopalpur Beach",
        image: "/images/destinations/gopalpur-beach.jpg",
        description: "Famous beach on the east coast."
      },
      {
        id: "tara-tarini-temple",
        name: "Tara Tarini Temple",
        image: "/images/destinations/tara-tarini-temple.jpg",
        description: "Renowned Shakti Peetha on Kumari hills."
      },
      { 
        id:"chilika-lake",
        name: "Chilika Lake", 
        image: "/images/destinations/chilika-lake.jpg", 
        description: "Asia’s largest brackish water lagoon." 
      },
      { 
        id:"tampara-lake",
        name: "Tampara Lake", 
        image: "/images/destinations/tampara-lake.jpg", 
        description: "Freshwater lake ideal for boating." 
      },
    ]
  },
  {
    name: "Jagatsinghpur",
    map: "/images/districts/jagatsinghpur.png",
    destinations: [
      { 
        id:"paradeep-port",
        name: "Paradeep Port", 
        image: "/images/destinations/paradeep-port.jpg", 
        description: "Major sea port and beach area." 
      },
      { 
        id:"sarala-temple",
        name: "Sarala Temple", 
        image: "/images/destinations/sarala-temple.jpg", 
        description: "Famous Shakti shrine near Jagatsinghpur." 
      },
      { 
        id:"gorakhnath-temple",
        name: "Gorakhnath Temple", 
        image: "/images/destinations/gorakhnath-temple.jpg", 
        description: "Shiva temple with historical significance." 
      },
      { 
        id:"Sandhakuda",
        name: "Sandhakuda", 
        image: "/images/destinations/Sandhakuda.jpg", 
        description: "Picturesque beach and picnic spot." 
      },
    ]
  },
  
  {
    name: "Jajpur",
    map: "/images/districts/jajpur.png",
    destinations: [
      { 
        id:"biraja-temple",
        name: "Biraja Temple", 
        image: "/images/destinations/biraja-temple", 
        description: "Historic temple of Goddess Biraja."
      },
      { 
        id:"ratnagiri-monastery",
        name: "Ratnagiri Monastery", 
        image: "/images/destinations/ratnagiri-monastery.jpg", 
        description: "Ancient Buddhist site near Jajpur." 
      },
      { 
        id:"udayagiri-buddhist-monastery",
        name: "Udayagiri Buddhist Monastery", 
        image: "/images/destinations/udayagiri-buddhist-monastery.jpg", 
        description: "Ancient Buddhist site with stupas and caves." 
      },
      { 
        id:"lalitgiri-buddhist-complex",
        name: "Lalitgiri Buddhist Complex", 
        image: "/images/destinations/lalitgiri-buddhist-complex.jpg", 
        description: "Oldest Buddhist site with stupas and relics." 
      },
      
    ],
  },
  {
    name: "Jharsuguda",
    map: "/images/districts/jharsuguda.png",
    destinations: [
      { 
        id:"koilighughar-waterfall",
        name: "Koilighughar Waterfall", 
        image: "/images/destinations/koilighughar-waterfall.jpg", 
        description: "Beautiful waterfall with a submerged Shiva linga." 
      },
      { 
        id:"ramchandi-temple",
        name: "Ramchandi Temple", 
        image: "/images/destinations/ramchandi-temple.jpg", 
        description: "Popular local temple in Jharsuguda." 
      },
      { 
        id:"bikramkhol-cave",
        name: "Bikramkhol Cave", 
        image: "/images/destinations/bikramkhol-cave.jpg", 
        description: "Rock shelter with ancient inscriptions." 
      },
      { 
        id:"jhadeswar-temple",
        name: "Jhadeswar Temple", 
        image: "/images/destinations/jhadeswar-temple.jpg", 
        description: "Shiva temple with traditional architecture." 
      },
    ],
  },
  {
    name: "Kalahandi",
    map: "/images/districts/kalahandi.png",
    destinations: [
      { 
        id:"karlapat-sanctuary",
        name: "Karlapat Sanctuary", 
        image: "/images/destinations/karlapat-sanctuary.jpg", 
        description: "Wildlife sanctuary in Kalahandi." 
      },
      { 
        id:"phurlijharan-waterfall",
        name: "Phurlijharan Waterfall", 
        image: "/images/destinations/phurlijharan-waterfall.jpg", 
        description: "Scenic waterfall near Bhawanipatna." 
      },
      { 
        id:"rabandhara-waterfall",
        name: "Rabandhara Waterfall", 
        image: "/images/destinations/rabandhara-waterfall.jpg", 
        description: "Scenic falls surrounded by forest." 
      },
      { 
        id:"bhawanipatna-jagannath-temple",
        name: "Bhawanipatna Jagannath Temple", 
        image: "/images/destinations/bhawanipatna-jagannath-temple.jpg", 
        description: "Famous Jagannath shrine of the town." 
      },
    ],
  },
  {
    name: "Kandhamal",
    map: "/images/districts/kandhamal.png",
    destinations: [
      { 
        id:"daringbadi",
        name: "Daringbadi", 
        image: "/images/destinations/daringbadi.jpg", 
        description: "Known as Kashmir of Odisha." 
      },
      { 
        id:"belghar-sanctuary",
        name: "Belghar Sanctuary", 
        image: "/images/destinations/belghar-sanctuary.jpg", 
        description: "Tribal and wildlife tourism spot." 
      },
      { 
        id:"putudi-waterfall",
        name: "Putudi Waterfall", 
        image: "/images/destinations/putudi-waterfall.jpg", 
        description: "Picturesque natural waterfall near Phulbani." 
      },
      { 
        id:"balaskumpa-devi-temple",
        name: "Balaskumpa Devi Temple", 
        image: "/images/destinations/balaskumpa-devi-temple.jpg", 
        description: "Revered temple of Goddess Barala Devi." 
      },
    ],
  },
  {
    name: "Kendrapara",
    map: "/images/districts/kendrapara.png",
    destinations: [
      { 
        id:"bhitarkanika-national-park",
        name: "Bhitarkanika National Park", 
        image: "/images/destinations/bhitarkanika-national-park.jpg", 
        description: "Famous mangrove ecosystem with crocodiles." 
      },
      { 
        id:"baladevjew-temple",
        name: "Baladevjew Temple", 
        image: "/images/destinations/baladevjew-temple.jpg", 
        description: "Popular temple of Kendrapara." 
      },
      { 
        id:"hukitola-island",
        name: "Hukitola Island", 
        image: "/images/destinations/hukitola-island.jpg", 
        description: "Island with colonial-era structures." 
      },
      { 
        id:"aul-palace",
        name: "Aul Palace", 
        image: "/images/destinations/aul-palace.jpg", 
        description: "Historic palace of the Aul royal family." 
      },
    ],
  },
  {
    name: "Kendujhar (Keonjhar)",
    map: "/images/districts/keonjhar.png",
    destinations: [
      { 
        id:"khandadhar-waterfall",
        name: "Khandadhar Waterfall", 
        image: "/images/destinations/khandadhar-waterfall.jpg", 
        description: "One of the highest waterfalls in Odisha." 
      },
      { 
        id:"gonasika-temple",
        name: "Gonasika Temple", 
        image: "/images/destinations/gonasika-temple.jpg", 
        description: "Origin point of river Baitarani." 
      },
      { 
        id:"badaghagara-waterfall",
        name: "Badaghagara Waterfall", 
        image: "/images/destinations/badaghagara-waterfall.jpg", 
        description: "Picturesque perennial waterfall." 
      },
      { 
        id:"murga-mahadev-temple",
        name: "Murga Mahadev Temple", 
        image: "/images/destinations/murga-mahadev-temple.jpg", 
        description: "Shiva temple in a scenic forest setting." 
      },
    ],
  },
  {
    name: "Khordha",
    map: "/images/districts/khordha.png",
    destinations: [
      { 
        id:"lingaraj-temple",
        name: "Lingaraj Temple", 
        image: "/images/destinations/lingaraj-temple.jpg", 
        description: "Ancient temple in Bhubaneswar." 
      },
      { 
        id:"dhauli",
        name: "Dhauli", 
        image: "/images/destinations/dhauli.jpg", 
        description: "Peace Pagoda near Bhubaneswar." 
      },
      { 
        id:"nandankanan-zoological-park",
        name: "Nandankanan Zoological Park", 
        image: "/images/destinations/nandankanan-zoological-park.jpg", 
        description: "Famous zoo with white tigers." 
      },
      { 
        id:"khandagiri-&-udayagiri-caves",
        name: "Khandagiri & Udayagiri Caves", 
        image: "/images/destinations/khandagiri-&-udayagiri-caves.jpg", 
        description: "Ancient Jain rock-cut caves." 
      },
    ],
  },
  {
    name: "Koraput",
    map: "/images/districts/koraput.png",
    destinations: [
      { 
        id:"gupteswar-temple",
        name: "Gupteswar Temple", 
        image: "/images/destinations/gupteswar-temple.jpg", 
        description: "Cave shrine of Lord Shiva." 
      },
      { 
        id:"duduma-waterfall",
        name: "Duduma Waterfall", 
        image: "/images/destinations/duduma-waterfall.jpg", 
        description: "Majestic waterfall on Machkund river." 
      },
      { 
        id:"deomali-hills",
        name: "Deomali Hills", 
        image: "/images/destinations/deomali-hills.jpg", 
        description: "Odisha’s tallest peak with scenic views." 
      },
      { 
        id:"tribal-museum",
        name: "Tribal Museum, Koraput", 
        image: "/images/destinations/tribal-museum.jpg", 
        description: "Museum showcasing tribal heritage." 
      },
    ],
  },
  {
    name: "Malkangiri",
    map: "/images/districts/malkangiri.png",
    destinations: [
      { 
        id:"balimela-reservoir",
        name: "Balimela Reservoir", 
        image: "/images/destinations/balimela-reservoir.jpg", 
        description: "Scenic water reservoir." 
      },
      { 
        id:"ammakunda",
        name: "Ammakunda", 
        image: "/images/destinations/ammakunda.jpg", 
        description: "Sacred pond and waterfall." 
      },
      { 
        id:"satiguda-dam",
        name: "Satiguda Dam", 
        image: "/images/destinations/satiguda-dam.jpg", 
        description: "Small reservoir popular for picnics." 
      },
      { 
        id:"manyamkonda-temple",
        name: "Manyamkonda Temple", 
        image: "/images/destinations/manyamkonda-temple.jpg", 
        description: "Hilltop temple dedicated to Lord Hanuman." 
      },
    ],
  },
  {
    name: "Mayurbhanj",
    map: "/images/districts/mayurbhanj.png",
    destinations: [
      { 
        id:"simlipal-national-park",
        name: "Simlipal National Park", 
        image: "/images/destinations/simlipal-national-park.jpg", 
        description: "Tiger reserve and biosphere reserve." 
      },
      { 
        id:"barehipani-waterfall",
        name: "Barehipani Waterfall (2nd Highest in India)", 
        image: "/images/destinations/barehipani-waterfall.jpg", 
        description: "Majestic two-tiered waterfall." 
      },
      { 
        id:"joranda-&-devkund-waterfalls",
        name: "Joranda & Devkund Waterfalls", 
        image: "/images/destinations/joranda-&-devkund-waterfalls.jpg", 
        description: "Scenic waterfalls in Simlipal." 
      },
      { 
        id:"haripurgarh-palace",
        name: "Haripurgarh Palace", 
        image: "/images/destinations/haripurgarh-palace.jpg", 
        description: "Historic palace of Mayurbhanj rulers." 
      },
    ],
  },
  {
    name: "Nabarangpur",
    map: "/images/districts/nabarangpur.png",
    destinations: [
      { 
        id:"papadahandi-temples",
        name: "Papadahandi Temples", 
        image: "/images/destinations/papadahandi-temples.jpg", 
        description: "Group of ancient temples." 
      },
      { 
        id:"maa-pendrani-temple",
        name: "Maa Pendrani Temple", 
        image: "/images/destinations/maa-pendrani-temple.jpg", 
        description: "Local deity’s shrine with cultural importance." 
      },
      { 
        id:"sahid-minar",
        name: "Sahid Minar (Papadahandi)", 
        image: "/images/destinations/sahid-minar.jpg", 
        description: "Monument honoring local freedom fighters." 
      },
      { 
        id:"deer-park",
        name: "Deer Park", 
        image: "/images/destinations/deer-park.jpg", 
        description: "Mini zoo with spotted deer." 
      },
    ],
  },
  {
    name: "Nayagarh",
    map: "/images/districts/nayagarh.png",
    destinations: [
      { 
        id:"satkosia-gorge",
        name: "Satkosia Gorge", 
        image: "/images/destinations/satkosia-gorge.jpg", 
        description: "Part of Satkosia Tiger Reserve." 
      },
      { 
        id:"kuanria-dam",
        name: "Kuanria Dam", 
        image: "/images/destinations/kuanria-dam.jpg", 
        description: "Scenic water reservoir and birding site." 
      },
      { 
        id:"nilamadhav-temple",
        name: "Nilamadhav Temple, Kantilo", 
        image: "/images/destinations/nilamadhav-temple.jpg", 
        description: "Famous temple on Mahanadi bank." 
      },
      { 
        id:"ranapur-jagannath-temple",
        name: "Ranapur Jagannath Temple", 
        image: "/images/destinations/ranapur-jagannath-temple.jpg", 
        description: "Ancient Jagannath shrine." 
      },
    ],
  },
  {
    name: "Nuapada",
    map: "/images/districts/nuapada.png",
    destinations: [
      { 
        id:"patora-dam",
        name: "Patora Dam", 
        image: "/images/destinations/patora-dam.jpg", 
        description: "Popular picnic spot with reservoir views." 
      },
      { 
        id:"sunabeda-sanctuary",
        name: "Sunabeda Sanctuary", 
        image: "/images/destinations/sunabeda-sanctuary.jpg", 
        description: "Wildlife sanctuary and plateau." 
      },
      { 
        id:"yogeswar-temple",
        name: "Yogeswar Temple", 
        image: "/images/destinations/yogeswar-temple.jpg", 
        description: "Shiva temple with cultural significance." 
      },
      { 
        id:"budhikomna-temple",
        name: "Budhikomna Temple", 
        image: "/images/destinations/budhikomna-temple.jpg",
        description: "Wildlife sanctuary and plateau." 
      },
    ],
  },
  {
    name: "Puri",
    map: "/images/districts/puri.png",
    destinations: [
      { 
        id:"jagannath-temple",
        name: "Jagannath Temple", 
        image: "/images/destinations/jagannath-temple.jpg", 
        description: "Famous Hindu temple." 
      },
      { 
        id:"puri-beach",
        name: "Puri Beach", 
        image: "/images/destinations/puri-beach.jpg", 
        description: "Popular beach on Bay of Bengal." 
      },
      { 
        id:"konark-sun-temple",
        name: "Konark Sun Temple", 
        image: "/images/destinations/konark-sun-temple.jpg", 
        description: "UNESCO World Heritage temple." 
      },
      { 
        id:"chilika-lake",
        name: "Chilika Lake (Satapada)", 
        image: "/images/destinations/chilika-lake.jpg",
        description: "Lagoon with dolphins and migratory birds." 
      },
    ],
  },
  {
    name: "Rayagada",
    map: "/images/districts/rayagada.png",
    destinations: [
      { 
        id:"majhighariani-temple",
        name: "Majhighariani Temple", 
        image: "/images/destinations/majhighariani-temple.jpg", 
        description: "Famous temple of Goddess Majhighariani." 
      },
      { 
        id:"chatikona-waterfall",
        name: "Chatikona Waterfall", 
        image: "/images/destinations/chatikona-waterfall.jpg", 
        description: "Picturesque waterfall in Rayagada." 
      },
      { 
        id:"minajhola-temple",
        name: "Minajhola Temple (Confluence of 3 Rivers)", 
        image: "/images/destinations/minajhola-temple.jpg", 
        description: "Picturesque temple site." 
      },
      { 
        id:"hanging-bridge-at-chekaguda",
        name: "Hanging Bridge at Chekaguda", 
        image: "/images/destinations/hanging-bridge-at-chekaguda.jpg", 
        description: "Suspension bridge offering scenic views." 
      },
    ],
  },
  {
    name: "Sambalpur",
    map: "/images/districts/sambalpur.png",
    destinations: [
      { 
        id:"hirakud-dam",
        name: "Hirakud Dam", 
        image: "/images/destinations/hirakud-dam.jpg", 
        description: "Longest earthen dam in the world." 
      },
      { 
        id:"samaleswari-temple",
        name: "Samaleswari Temple", 
        image: "/images/destinations/samaleswari-temple.jpg", 
        description: "Famous Shakti shrine in Sambalpur." 
      },
      { 
        id:"debrigarh-sanctuary",
        name: "Debrigarh Sanctuary", 
        image: "/images/destinations/debrigarh-sanctuary.jpg", 
        description: "Wildlife sanctuary near Hirakud." 
      },
      { 
        id:"huma-leaning-temple",
        name: "Huma Leaning Temple", 
        image: "/images/destinations/huma-leaning-temple.jpg", 
        description: "Unique tilted temple of Lord Shiva." 
      },
    ],
  },
  {
    name: "Sonepur (Subarnapur)",
    map: "/images/districts/sonepur.png",
    destinations: [
      { 
        id:"sashisena-temple",
        name: "Sashisena Temple", 
        image: "/images/destinations/sashisena-temple.jpg", 
        description: "Temple linked with the Sashisena legend." 
      },
      { 
        id:"papakshya-ghat",
        name: "Papakshya Ghat", 
        image: "/images/destinations/papakshya-ghat.jpg", 
        description: "Sacred bathing site on Mahanadi." 
      },
      { 
        id:"patali-srikhetra",
        name: "Patali Srikhetra", 
        image: "/images/destinations/patali-srikhetra.jpg", 
        description: "Jagannath temple of Western Odisha." 
      },
      { 
        id:"kosaleswara-temple",
        name: "Kosaleswara Temple", 
        image: "/images/destinations/kosaleswara-temple.jpg", 
        description: "Ancient temple of Lord Shiva." 
      },
    ],
  },
  {
    name: "Sundargarh",
    map: "/images/districts/sundargarh.png",
    destinations: [
      { 
        id:"vedavyas",
        name: "Vedavyas", 
        image: "/images/destinations/vedavyas.jpg", 
        description: "Meeting point of rivers with mythological value." 
      },
      { 
        id:"khandadhar-waterfall",
        name: "Khandadhar Waterfall (Bonai)", 
        image: "/images/destinations/khandadhar-waterfall.jpg", 
        description: "Beautiful waterfall in Sundargarh." 
      },
      { 
        id:"darjeeng-picnic-spot",
        name: "Darjeeng Picnic Spot", 
        image: "/images/destinations/darjeeng-picnic-spot.jpg", 
        description: "Popular picnic site on Brahmani River." 
      },
      { 
        id:"ghogar-waterfall",
        name: "Ghogar Waterfall", 
        image: "/images/destinations/ghogar-waterfall.jpg", 
        description: "Lesser-known but beautiful natural falls." 
      },
    ],
  },
];

export default districts;
