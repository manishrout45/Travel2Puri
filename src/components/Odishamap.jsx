import { section } from "framer-motion/client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const districts = [
  {
    name: "Angul",
    map: "/images/Anugul.png",
    destinations: [
      { id:"satkosia-gorge-angul", name: "Satkosia Tiger Reserve", image: "/images/destinations/Angul/satkosia-gorge-angul.jpg", description: "Famous wildlife sanctuary on the Mahanadi River." },
      { id:"tikarpada", name: "Tikarpada Wildlife Sanctuary", image: "/images/destinations/Angul/tikarpada.jpg", description: "Known for crocodile sanctuary and scenic beauty." },
      { id:"derjang-reservoir", name: "Derjang Reservoir", image: "/images/destinations/Angul/derjang-reservoir.jpeg", description: "Picturesque water reservoir popular for picnics." },
      { id:"budhi-thakurani-temple", name: "Budhi Thakurani Temple", image: "/images/destinations/Angul/budhi-thakurani-temple.jpg", description: "Ancient shrine dedicated to Goddess Budhi Thakurani." },
    ],
  },
  {
    name: "Balangir",
    map: "/images/districts/balangir.png",
    destinations: [
      { id: "harishankar-temple", name: "Harishankar Temple", image: "/images/destinations/Balangir/harishankar-temple.jpeg", description: "Pilgrimage site at the foot of Gandhamardan hills." },
      { id: "ranipur-jharial", name: "Ranipur Jharial", image: "/images/destinations/Balangir/ranipur-jharial.jpeg", description: "Archaeological site with temples and ruins." },
      { id:"patnagarh-fort", name: "Patnagarh Fort", image: "/images/destinations/Balangir/patnagarh-fort.jpg", description: "Historical fort town with remnants of old fortifications." },
      { id:"jogeswar-temple", name: "Jogeswar Temple", image: "/images/destinations/Balangir/jogeswar-temple.webp", description: "Temple dedicated to Lord Shiva in a serene setting." },
    ],
  },
  {
    name: "Balasore",
    map: "/images/districts/balasore.png",
    destinations: [
      { id:"chandipur-beach", name: "Chandipur Beach", image: "/images/destinations/Balasore/chandipur-beach.jpg", description: "Unique beach where the sea recedes up to 5 km." },
      { id:"panchalingeswar-temple", name: "Panchalingeswar Temple", image: "/images/destinations/Balasore/panchalingeswar-temple.jpg", description: "Temple on a hilltop surrounded by forest streams." },
      { id:"khirachora-gopinath-temple", name: "Khirachora Gopinath Temple, Remuna", image: "/images/destinations/Balasore/khirachora-gopinath-temple.png", description: "Famous Vaishnavite shrine associated with Lord Chaitanya." },
      { id:"dublagadi-beach", name: "Dublagadi Beach", image: "/images/destinations/Balasore/dublagadi-beach.jpg", description: "Quiet and less crowded beach with natural beauty." },
    ],
  },
  {
    name: "Bargarh",
    map: "/images/districts/bargarh.png",
    destinations: [
      { id:"nrusinghanath-temple", name: "Nrusinghanath Temple", image: "/images/destinations/Bargarh/nrusinghanath-temple.jpg", description: "Ancient temple near Gandhamardan hills." },
      { id:"debrigarh-sanctuary", name: "Debrigarh Wildlife Sanctuary", image: "/images/destinations/Bargarh/debrigarh-sanctuary.jpg", description: "Famous for Hirakud reservoir and wildlife." },
      { id:"gandhamardan-hills", name: "Gandhamardan Hills", image: "/images/destinations/Bargarh/gandhamardan-hills.jpg", description: "Scenic hills with mythological and medicinal importance." },
      { id:"papanga-hill", name: "Papanga Hill", image: "/images/destinations/Bargarh/papanga-hill.jpeg", description: "Hill known for its trekking trails and panoramic views." },
    ],
  },
  {
    name: "Bhadrak",
    map: "/images/districts/bhadrak.png",
    destinations: [
      { id:"maa-bhadrakali", name: "Maa Bhadrakali Temple", image: "/images/destinations/Bhadrak/maa-bhadrakali.jpg", description: "Famous Shakti shrine of Odisha." },
      { id:"aradi-akhandalamani", name: "Aradi (Akhandalamani Temple)", image: "/images/destinations/Bhadrak/aradi-akhandalamani.jpg", description: "Renowned Shaiva temple near Bhadrak." },
      { id:"dhamra-port-&-temple", name: "Dhamra Port & Temple", image: "/images/destinations/Bhadrak/dhamra-port-&-temple.jpg", description: "Historic port and ancient temple town." },
      { id:"chandbali", name: "Chandbali", image: "/images/destinations/Bhadrak/chandbali.jpg", description: "Old river port area on the Baitarani." },
    ],
  },
  {
    name: "Boudh",
    map: "/images/districts/boudh.png",
    destinations: [
      { id:"boudh-buddha-monastery", name: "Boudh Buddha Monastery", image: "/images/destinations/Boudh/boudh-buddha-monastery.jpg", description: "Ancient Buddhist monastery site." },
      { id:"boudh-jagannath-temple", name: "Jagannath Temple, Boudh", image: "/images/destinations/Boudh/boudh-jagannath-temple.jpg", description: "Important Jagannath temple in the district." },
      { id:"rameswar-temple", name: "Rameswar Temple", image: "/images/destinations/Boudh/rameswar-temple.jpg", description: "Historic temple dedicated to Lord Shiva." },
      { id:"satkosia-gorge", name: "Satkosia Gorge", image: "/images/destinations/Boudh/satkosia-gorge.jpeg", description: "Scenic gorge of Mahanadi with dense forests." },
    ],
  },
  {
    name: "Cuttack",
    map: "/images/districts/cuttack.png",
    destinations: [
      { id:"barabati-fort", name: "Barabati Fort", image: "/images/destinations/Cuttack/barabati-fort.jpeg", description: "Historical fort in Cuttack city." },
      { id:"dhabaleswar-temple", name: "Dhabaleswar Temple", image: "/images/destinations/Cuttack/dhabaleswar-temple.jpeg", description: "Temple on an island in Mahanadi river." },
      { id:"chandi-temple", name: "Chandi Temple", image: "/images/destinations/Cuttack/chandi-temple.jpg", description: "Renowned temple dedicated to Goddess Chandi." },
      { id:"ansupa-lake", name: "Ansupa Lake", image: "/images/destinations/Cuttack/ansupa-lake.jpeg", description: "Freshwater lake famous for migratory birds." },
    ],
  },
  {
    name: "Deogarh",
    map: "/images/districts/deogarh.png",
    destinations: [
      { id:"pradhanpat-waterfall", name: "Pradhanpat Waterfall", image: "/images/destinations/Deogarh/pradhanpat-waterfall.jpeg", description: "Scenic waterfall near Deogarh town." },
      { id:"kurudkut-waterfall", name: "Kurudkut Waterfall", image: "/images/destinations/Deogarh/kurudkut-waterfall.jpeg", description: "Picturesque waterfall in the district." },
      { id:"kailash-palace", name: "Kailash Palace", image: "/images/destinations/Deogarh/kailash-palace.jpeg", description: "Royal palace of Deogarh rulers." },
      { id:"jagannath-temple", name: "Jagannath Temple, Deogarh", image: "/images/destinations/Deogarh/jagannath-temple.jpg", description: "Important Jagannath shrine in the town." },
    ],
  },
  {
    name: "Dhenkanal",
    map: "/images/districts/dhenkanal.png",
    destinations: [
      { id:"kapilash-temple", name: "Kapilash Temple", image: "/images/destinations/Dhenkanal/kapilash-temple.jpeg", description: "Famous Shiva temple on a hilltop." },
      { id:"saptasajya-hills", name: "Saptasajya Hills", image: "/images/destinations/Dhenkanal/saptasajya-hills.jpeg", description: "Picturesque hills with mythological links to Pandavas." },
      { id:"joranda-monastery", name: "Joranda Monastery (Mahima Dharma)", image: "/images/destinations/Dhenkanal/joranda-monastery.jpeg", description: "Spiritual center of Mahima cult." },
      { id:"kualo-ancient-temple", name: "Kualo Ancient Temple Complex", image: "/images/destinations/Dhenkanal/kualo-ancient-temple.jpeg", description: "Cluster of old temples with rich carvings." },
    ],
  },
  {
    name: "Gajapati",
    map: "/images/districts/gajapati.png",
    destinations: [
      { id:"mahaendragiri-hills", name: "Mahaendragiri Hills", image: "/images/destinations/Gajapati/mahaendragiri-hills.jpg", description: "Sacred hills with mythological significance." },
      { id:"gandahati-waterfall", name: "Gandahati Waterfall", image: "/images/destinations/Gajapati/gandahati-waterfall.jpg", description: "Scenic waterfall surrounded by forests." },
      { id:"paralakhemundi-palace", name: "Paralakhemundi Palace", image: "/images/destinations/Gajapati/paralakhemundi-palace.jpeg", description: "Historic royal palace with Indo-European architecture." },
      { id:"harabhangi-dam", name: "Harabhangi Dam", image: "/images/destinations/Gajapati/harabhangi-dam.jpg", description: "Major irrigation project with natural surroundings." },
    ],
  },
  {
    name: "Ganjam",
    map: "/images/districts/ganjam.png",
    destinations: [
      { id:"gopalpur-beach", name: "Gopalpur Beach", image: "/images/destinations/Ganjam/gopalpur-beach.jpg", description: "Famous beach on the east coast." },
      { id:"tara-tarini-temple", name: "Tara Tarini Temple", image: "/images/destinations/Ganjam/tara-tarini-temple.webp", description: "Renowned Shakti Peetha on Kumari hills." },
      { id:"chilika-lake", name: "Chilika Lake", image: "/images/destinations/Ganjam/chilika-lake.png", description: "Asia’s largest brackish water lagoon." },
      { id:"tampara-lake", name: "Tampara Lake", image: "/images/destinations/Ganjam/tampara-lake.jpg", description: "Freshwater lake ideal for boating." },
    ],
  },
  {
    name: "Jagatsinghpur",
    map: "/images/districts/jagatsinghpur.png",
    destinations: [
      { id:"paradeep-port",name: "Paradeep Port", image: "/images/destinations/Jagatsinghpur/paradeep-port.webp", description: "Major sea port and beach area." },
      { id:"sarala-temple", name: "Sarala Temple", image: "/images/destinations/Jagatsinghpur/sarala-temple.webp", description: "Famous Shakti shrine near Jagatsinghpur." },
      { id:"gorakhnath-temple", name: "Gorakhnath Temple", image: "/images/destinations/Jagatsinghpur/gorakhnath-temple.jpg", description: "Shiva temple with historical significance." },
      { id:"Sandhakuda", name: "Sandhakuda", image: "/images/destinations/Jagatsinghpur/Sandhakuda.webp", description: "Picturesque beach and picnic spot." },
    ],
  },
  {
    name: "Jajpur",
    map: "/images/districts/jajpur.png",
    destinations: [
      { id:"biraja-temple", name: "Biraja Temple", image: "/images/destinations/Jajpur/biraja-temple.jpg", description: "Historic temple of Goddess Biraja." },
      { id:"ratnagiri-monastery", name: "Ratnagiri Monastery", image: "/images/destinations/Jajpur/ratnagiri-monastery.jpeg", description: "Ancient Buddhist site near Jajpur." },
      { id:"udayagiri-buddhist-monastery", name: "Udayagiri Buddhist Monastery", image: "/images/destinations/Jajpur/udayagiri-buddhist-monastery.jpeg", description: "Ancient Buddhist site with stupas and caves." },
      { id:"lalitgiri-buddhist-complex", name: "Lalitgiri Buddhist Complex", image: "/images/destinations/Jajpur/lalitgiri-buddhist-complex.jpeg", description: "Oldest Buddhist site with stupas and relics." },
      
    ],
  },
  {
    name: "Jharsuguda",
    map: "/images/districts/jharsuguda.png",
    destinations: [
      { id:"koilighughar-waterfall", name: "Koilighughar Waterfall", image: "/images/destinations/Jharsuguda/koilighughar-waterfall.webp", description: "Beautiful waterfall with a submerged Shiva linga." },
      { id:"ramchandi-temple", name: "Ramchandi Temple", image: "/images/destinations/Jharsuguda/ramchandi-temple.webp", description: "Popular local temple in Jharsuguda." },
      { id:"bikramkhol-cave", name: "Bikramkhol Cave", image: "/images/destinations/Jharsuguda/bikramkhol-cave.webp", description: "Rock shelter with ancient inscriptions." },
      { id:"jhadeswar-temple", name: "Jhadeswar Temple", image: "/images/destinations/Jharsuguda/jhadeswar-temple.webp", description: "Shiva temple with traditional architecture." },
    ],
  },
  {
    name: "Kalahandi",
    map: "/images/districts/kalahandi.png",
    destinations: [
      { id:"karlapat-sanctuary", name: "Karlapat Sanctuary", image: "/images/destinations/Kalahandi/karlapat-sanctuary.jpeg", description: "Wildlife sanctuary in Kalahandi." },
      { id:"phurlijharan-waterfall", name: "Phurlijharan Waterfall", image: "/images/destinations/Kalahandi/phurlijharan-waterfall.jpeg", description: "Scenic waterfall near Bhawanipatna." },
      { id:"rabandhara-waterfall", name: "Rabandhara Waterfall", image: "/images/destinations/Kalahandi/rabandhara-waterfall.jpeg", description: "Scenic falls surrounded by forest." },
      { id:"bhawanipatna-jagannath-temple", name: "Bhawanipatna Jagannath Temple", image: "/images/destinations/Kalahandi/bhawanipatna-jagannath-temple.jpeg", description: "Famous Jagannath shrine of the town." },
    ],
  },
  {
    name: "Kandhamal",
    map: "/images/districts/kandhamal.png",
    destinations: [
      { id:"daringbadi", name: "Daringbadi", image: "/images/destinations/Kandhamal/daringbadi.webp", description: "Known as Kashmir of Odisha." },
      { id:"belghar-sanctuary", name: "Belghar Sanctuary", image: "/images/destinations/Kandhamal/belghar-sanctuary.jpg", description: "Tribal and wildlife tourism spot." },
      { id:"putudi-waterfall", name: "Putudi Waterfall", image: "/images/destinations/Kandhamal/putudi-waterfall.webp", description: "Picturesque natural waterfall near Phulbani." },
      { id:"balaskumpa-devi-temple", name: "Balaskumpa Devi Temple", image: "/images/destinations/Kandhamal/balaskumpa-devi-temple.webp", description: "Revered temple of Goddess Barala Devi." },
    ],
  },
  {
    name: "Kendrapara",
    map: "/images/districts/kendrapara.png",
    destinations: [
      { id:"bhitarkanika-national-park", name: "Bhitarkanika National Park", image: "/images/destinations/Kendrapara/bhitarkanika-national-park.webp", description: "Famous mangrove ecosystem with crocodiles." },
      { id:"baladevjew-temple", name: "Baladevjew Temple", image: "/images/destinations/Kendrapara/baladevjew-temple.webp", description: "Popular temple of Kendrapara." },
      { id:"hukitola-island", name: "Hukitola Island", image: "/images/destinations/Kendrapara/hukitola-island.webp", description: "Island with colonial-era structures." },
      { id:"aul-palace", name: "Aul Palace", image: "/images/destinations/Kendrapara/aul-palace.webp", description: "Historic palace of the Aul royal family." },
    ],
  },
  {
    name: "Kendujhar (Keonjhar)",
    map: "/images/districts/keonjhar.png",
    destinations: [
      { id:"khandadhar-waterfall", name: "Khandadhar Waterfall", image: "/images/destinations/Kendujhar (Keonjhar)/khandadhar-waterfall.webp", description: "One of the highest waterfalls in Odisha." },
      { id:"gonasika-temple",name: "Gonasika Temple", image: "/images/destinations/Kendujhar (Keonjhar)/gonasika-temple.jpg", description: "Origin point of river Baitarani." },
      { id:"badaghagara-waterfall", name: "Badaghagara Waterfall", image: "/images/destinations/Kendujhar (Keonjhar)/badaghagara-waterfall.webp", description: "Picturesque perennial waterfall." },
      { id:"murga-mahadev-temple", name: "Murga Mahadev Temple", image: "/images/destinations/Kendujhar (Keonjhar)/murga-mahadev-temple.jpg", description: "Shiva temple in a scenic forest setting." },
    ],
  },
  {
    name: "Khordha",
    map: "/images/districts/khordha.png",
    destinations: [
      { id:"lingaraj-temple", name: "Lingaraj Temple", image: "/images/destinations/Khordha/lingaraj-temple.webp", description: "Ancient temple in Bhubaneswar." },
      { id:"dhauli", name: "Dhauli", image: "/images/destinations/Khordha/dhauli.webp", description: "Peace Pagoda near Bhubaneswar." },
      { id:"nandankanan-zoological-park", name: "Nandankanan Zoological Park", image: "/images/destinations/Khordha/nandankanan-zoological-park.webp", description: "Famous zoo with white tigers." },
      { id:"khandagiri-&-udayagiri-caves", name: "Khandagiri & Udayagiri Caves", image: "/images/destinations/Khordha/khandagiri-&-udayagiri-caves.webp", description: "Ancient Jain rock-cut caves." },
    ],
  },
  {
    name: "Koraput",
    map: "/images/districts/koraput.png",
    destinations: [
      { id:"gupteswar-temple", name: "Gupteswar Temple", image: "/images/destinations/Koraput/gupteswar-temple.jpeg", description: "Cave shrine of Lord Shiva." },
      { id:"duduma-waterfall", name: "Duduma Waterfall", image: "/images/destinations/Koraput/duduma-waterfall.webp", description: "Majestic waterfall on Machkund river." },
      { id:"deomali-hills", name: "Deomali Hills", image: "/images/destinations/Koraput/deomali-hills.webp", description: "Odisha’s tallest peak with scenic views." },
      { id:"tribal-museum", name: "Tribal Museum, Koraput", image: "/images/destinations/Koraput/tribal-museum.webp", description: "Museum showcasing tribal heritage." },
    ],
  },
  {
    name: "Malkangiri",
    map: "/images/districts/malkangiri.png",
    destinations: [
      { id:"balimela-reservoir", name: "Balimela Reservoir", image: "/images/destinations/Malkangiri/balimela-reservoir.jpeg", description: "Scenic water reservoir." },
      { id:"ammakunda", name: "Ammakunda", image: "/images/destinations/Malkangiri/ammakunda.webp", description: "Sacred pond and waterfall." },
      { id:"satiguda-dam", name: "Satiguda Dam", image: "/images/destinations/Malkangiri/satiguda-dam.jpeg", description: "Small reservoir popular for picnics." },
      { id:"manyamkonda-temple", name: "Manyamkonda Temple", image: "/images/destinations/Malkangiri/manyamkonda-temple.jpeg", description: "Hilltop temple dedicated to Lord Hanuman." },
    ],
  },
  {
    name: "Mayurbhanj",
    map: "/images/districts/mayurbhanj.png",
    destinations: [
      { id:"simlipal-national-park", name: "Simlipal National Park", image: "/images/destinations/Mayurbhanj/simlipal-national-park.jpeg", description: "Tiger reserve and biosphere reserve." },
      { id:"barehipani-waterfall",name: "Barehipani Waterfall (2nd Highest in India)", image: "/images/destinations/Mayurbhanj/barehipani-waterfall.jpeg", description: "Majestic two-tiered waterfall." },
      { id:"joranda-&-devkund-waterfalls", name: "Joranda & Devkund Waterfalls", image: "/images/destinations/Mayurbhanj/joranda-&-devkund-waterfalls.jpeg", description: "Scenic waterfalls in Simlipal." },
      { id:"haripurgarh-palace", name: "Haripurgarh Palace", image: "/images/destinations/Mayurbhanj/haripurgarh-palace.jpeg", description: "Historic palace of Mayurbhanj rulers." },
    ],
  },
  {
    name: "Nabarangpur",
    map: "/images/districts/nabarangpur.png",
    destinations: [
      { id:"papadahandi-temples", name: "Papadahandi Temples", image: "/images/destinations/Nabarangpur/papadahandi-temples.jpeg", description: "Group of ancient temples." },
      { id:"maa-pendrani-temple", name: "Maa Pendrani Temple", image: "/images/destinations/Nabarangpur/maa-pendrani-temple.jpeg", description: "Local deity’s shrine with cultural importance." },
      { id:"sahid-minar", name: "Sahid Minar (Papadahandi)", image: "/images/destinations/Nabarangpur/sahid-minar.jpeg", description: "Monument honoring local freedom fighters." },
      { id:"deer-park", name: "Deer Park", image: "/images/destinations/Nabarangpur/deer-park.jpeg", description: "Mini zoo with spotted deer." },
    ],
  },
  {
    name: "Nayagarh",
    map: "/images/districts/nayagarh.png",
    destinations: [
      { id:"satkosia-gorge", name: "Satkosia Gorge (Nayagarh side)", image: "/images/destinations/Nayagarh/satkosia-gorge.jpeg", description: "Part of Satkosia Tiger Reserve." },
      { id:"kuanria-dam", name: "Kuanria Dam", image: "/images/destinations/Nayagarh/kuanria-dam.jpeg", description: "Scenic water reservoir and birding site." },
      { id:"nilamadhav-temple", name: "Nilamadhav Temple, Kantilo", image: "/images/destinations/Nayagarh/nilamadhav-temple.jpeg", description: "Famous temple on Mahanadi bank." },
      { id:"ranapur-jagannath-temple", name: "Ranapur Jagannath Temple", image: "/images/destinations/Nayagarh/ranapur-jagannath-temple.jpeg", description: "Ancient Jagannath shrine." },
    ],
  },
  {
    name: "Nuapada",
    map: "/images/districts/nuapada.png",
    destinations: [
      { id:"patora-dam",name: "Patora Dam", image: "/images/destinations/Nuapada/patora-dam.jpeg", description: "Popular picnic spot with reservoir views." },
      { id:"sunabeda-sanctuary", name: "Sunabeda Sanctuary", image: "/images/destinations/Nuapada/sunabeda-sanctuary.jpeg", description: "Wildlife sanctuary and plateau." },
      { id:"yogeswar-temple", name: "Yogeswar Temple", image: "/images/destinations/Nuapada/yogeswar-temple.jpeg", description: "Shiva temple with cultural significance." },
      { id:"budhikomna-temple", name: "Budhikomna Temple", image: "/images/destinations/Nuapada/budhikomna-temple.jpeg", description: "Wildlife sanctuary and plateau." },
    ],
  },
  {
    name: "Puri",
    map: "/images/districts/puri.png",
    destinations: [
      { id:"jagannath-temple-puri", name: "Jagannath Temple, Puri", image: "/images/destinations/Puri/jagannath-temple-puri.jpeg", description: "Famous Hindu temple." },
      { id:"puri-beach", name: "Puri Beach", image: "/images/destinations/Puri/puri-beach.jpeg", description: "Popular beach on Bay of Bengal." },
      { id:"konark-sun-temple", name: "Konark Sun Temple", image: "/images/destinations/Puri/konark-sun-temple.jpeg", description: "UNESCO World Heritage temple." },
      { id:"chilika-lake", name: "Chilika Lake (Satapada)", image: "/images/destinations/Puri/chilika-lake.jpeg", description: "Lagoon with dolphins and migratory birds." },
    ],
  },
  {
    name: "Rayagada",
    map: "/images/districts/rayagada.png",
    destinations: [
      { id:"majhighariani-temple", name: "Majhighariani Temple", image: "/images/destinations/Rayagada/majhighariani-temple.webp", description: "Famous temple of Goddess Majhighariani." },
      { id:"chatikona-waterfall", name: "Chatikona Waterfall", image: "/images/destinations/Rayagada/chatikona-waterfall.web", description: "Picturesque waterfall in Rayagada." },
      { id:"minajhola-temple", name: "Minajhola Temple (Confluence of 3 Rivers)", image: "/images/destinations/Rayagada/minajhola-temple.webp", description: "Picturesque temple site." },
      { id:"hanging-bridge-at-chekaguda", name: "Hanging Bridge at Chekaguda", image: "/images/destinations/Rayagada/hanging-bridge-at-chekaguda.jpeg", description: "Suspension bridge offering scenic views." },
    ],
  },
  {
    name: "Sambalpur",
    map: "/images/districts/sambalpur.png",
    destinations: [
      { id:"hirakud-dam", name: "Hirakud Dam", image: "/images/destinations/Sambalpur/hirakud-dam.jpeg", description: "Longest earthen dam in the world." },
      { id:"samaleswari-temple",name: "Samaleswari Temple", image: "/images/destinations/Sambalpur/samaleswari-temple.webp", description: "Famous Shakti shrine in Sambalpur." },
      { id:"debrigarh-sanctuary", name: "Debrigarh Sanctuary", image: "/images/destinations/Sambalpur/debrigarh-sanctuary.jpg", description: "Wildlife sanctuary near Hirakud." },
      { id:"huma-leaning-temple", name: "Huma Leaning Temple", image: "/images/destinations/Sambalpur/huma-leaning-temple.avif", description: "Unique tilted temple of Lord Shiva." },
    ],
  },
  {
    name: "Sonepur (Subarnapur)",
    map: "/images/districts/sonepur.png",
    destinations: [
      { id:"sashisena-temple",name: "Sashisena Temple", image: "/images/destinations/Sonepur (Subarnapur)/sashisena-temple.jpg", description: "Temple linked with the Sashisena legend." },
      { id:"papakshya-ghat", name: "Papakshya Ghat", image: "/images/destinations/Sonepur (Subarnapur)/papakshya-ghat.webp", description: "Sacred bathing site on Mahanadi." },
      { id:"patali-srikhetra", name: "Patali Srikhetra", image: "/images/destinations/Sonepur (Subarnapur)/patali-srikhetra.webp", description: "Jagannath temple of Western Odisha." },
      { id:"kosaleswara-temple", name: "Kosaleswara Temple", image: "/images/destinations/Sonepur (Subarnapur)/kosaleswara-temple.jpg", description: "Ancient temple of Lord Shiva." },
    ],
  },
  {
    name: "Sundargarh",
    map: "/images/districts/sundargarh.png",
    destinations: [
      { id:"vedavyas", name: "Vedavyas", image: "/images/destinations/Sundargarh/vedavyas.jpeg", description: "Meeting point of rivers with mythological value." },
      { id:"khandadhar-waterfall", name: "Khandadhar Waterfall (Bonai)", image: "/images/destinations/Sundargarh/khandadhar-waterfall.jpg", description: "Beautiful waterfall in Sundargarh." },
      { id:"darjeeng-picnic-spot", name: "Darjeeng Picnic Spot", image: "/images/destinations/Sundargarh/darjeeng-picnic-spot.webp", description: "Popular picnic site on Brahmani River." },
      { id:"ghogar-waterfall", name: "Ghogar Waterfall", image: "/images/destinations/Sundargarh/ghogar-waterfall.jpeg", description: "Lesser-known but beautiful natural falls." },
    ],
  },
];


const OdishaMap = () => {
  // ✅ Set Puri open by default
  const [selectedDistrict, setSelectedDistrict] = useState(
    districts.find((d) => d.name === "Puri") || null
  );
  const navigate = useNavigate();

  return (
    <>
      {/* ================= Why Visit Odisha Section ================= */}
      <section className="w-full py-12 bg-[#F3E6E6]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#761421] lg:mb-16">
            Top Destinations in Odisha
          </h2>

          <section className="w-full max-w-7xl mx-auto px-4 pt-12 pb-12 relative overflow-visible">
            <div className="relative flex flex-col md:flex-row md:items-center">
              <div
                className="bg-[#761421] text-white p-6 md:pr-20 sm:p-8 lg:ml-10 rounded-xl shadow-2xl relative z-10
                    w-full md:w-[72%] lg:w-[68%]"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">
                  Why Visit Odisha?
                </h2>
                <p className="text-base sm:text-lg md:text-md leading-relaxed max-w-2xl">
                  A trip to Odisha is a journey into timeless traditions, sacred
                  spirituality, serene landscapes, and warm hospitality. Whether
                  you seek pilgrimage, adventure, art, or peace by the sea, Odisha
                  welcomes you with open arms.
                </p>
              </div>

              {/* Map */}
              <div className="hidden md:block absolute top-1/2 right-6 md:-right-14 lg:right-10 transform -translate-y-1/2 z-20 pointer-events-none">
                <img
                  src="/images/Odisha Map Chart.png"
                  alt="Odisha Map"
                  className="w-[280px] md:w-[400px] lg:w-[420px] xl:w-[500px] max-w-none drop-shadow-2xl"
                />
              </div>

              <div className="-mt-10 flex justify-center md:hidden z-10">
                <img
                  src="/images/Odisha Map Chart.png"
                  alt="Odisha Map"
                  className="w-[300px] sm:w-[280px] drop-shadow-2xl"
                />
              </div>
            </div>
          </section>
        </div>
      </section>

     {/* ================= Districts Section ================= */}
<section className="w-full py-12 bg-white">
  <div className="max-w-7xl mx-auto px-4">
    {/* District Names */}
<div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 md:gap-3 mb-6 sm:mb-8 px-2">
  {districts.map((district, i) => {
    const isActive = selectedDistrict?.name === district.name;
    return (
      <button
        key={i}
        onClick={() =>
          setSelectedDistrict(isActive ? null : district)
        }
        className={`px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors duration-300
          ${isActive
            ? "bg-yellow-400 text-[#761421] shadow-md" // Active button style
            : "bg-[#761421] text-[#F3E6E6] hover:bg-[#F3E6E6] hover:text-[#761421]" // Normal button
          }`}
      >
        {district.name}
      </button>
    );
  })}
</div>


    {/* District Details */}
    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-6 overflow-hidden transition-all duration-500 ease-in-out ${
        selectedDistrict
          ? "max-h-[2000px] opacity-100 mt-6"
          : "max-h-0 opacity-0 mt-0"
      }`}
    >
      {selectedDistrict && (
        <>
          {/* Left: District Map */}
          <div className="flex justify-center mb-6 md:mb-0">
            <img
              src={selectedDistrict.map}
              alt={`${selectedDistrict.name} Map`}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg"
            />
          </div>

          {/* Right: Destinations */}
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-6 text-center md:text-left">
              Top Destinations in {selectedDistrict.name}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {selectedDistrict.destinations.map((place, i) => (
                <div
                  key={i}
                  onClick={() => navigate(`/destination/${place.id}`)}
                  className="flex flex-col items-center cursor-pointer group"
                >
                  <div className="w-20 h-28 sm:w-24 sm:h-36 md:w-28 md:h-40 lg:w-32 lg:h-44 overflow-hidden rounded-full shadow-md group-hover:scale-105 transform transition duration-300">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>


                  <p className="mt-2 sm:mt-3 text-gray-700 font-medium text-sm sm:text-base text-center">
                    {place.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  </div>
</section>

    </>
  );
};

export default OdishaMap;
