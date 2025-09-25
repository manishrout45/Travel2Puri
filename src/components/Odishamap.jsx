// src/pages/OdishaMap.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const districts = [
  {
    name: "Angul",
    map: "/images/Anugul.png",
    destinations: [
      { name: "Satkosia Tiger Reserve", image: "https://www.odishatourism.co/wp-content/uploads/2020/02/satkosia-tiger-reserve-in-odisha.jpg", description: "Famous wildlife sanctuary on the Mahanadi River." },
      { name: "Tikarpada Wildlife Sanctuary", image: "https://www.indiantempletour.com/wp-content/uploads/2023/04/Tikarpada.jpg", description: "Known for crocodile sanctuary and scenic beauty." },
      { name: "Derjang Reservoir", image: "https://www.orissapost.com/wp-content/uploads/2021/08/Derjang-dam-site-no-longer-a-safe-tourists-destination-1024x489.jpeg", description: "Picturesque water reservoir popular for picnics." },
      {name: "Budhi Thakurani Temple", image: "", description: "Ancient shrine dedicated to Goddess Budhi Thakurani." },
    ],
  },
  {
    name: "Balangir",
    map: "/images/districts/balangir.png",
    destinations: [
      { name: "Harishankar Temple", image: "/images/destinations/harishankar.jpg", description: "Pilgrimage site at the foot of Gandhamardan hills." },
      { name: "Ranipur Jharial", image: "/images/destinations/ranipur.jpg", description: "Archaeological site with temples and ruins." },
      { name: "Patnagarh Fort", image: "/images/destinations/ranipur.jpg", description: "Historical fort town with remnants of old fortifications." },
      { name: "Jogeswar Temple", image: "/images/destinations/ranipur.jpg", description: "Temple dedicated to Lord Shiva in a serene setting." },
    ],
  },
  {
    name: "Balasore",
    map: "/images/districts/balasore.png",
    destinations: [
      { name: "Chandipur Beach", image: "/images/destinations/chandipur.jpg", description: "Unique beach where the sea recedes up to 5 km." },
      { name: "Panchalingeswar Temple", image: "/images/destinations/kuldiha.jpg", description: "Temple on a hilltop surrounded by forest streams." },
      { name: "Khirachora Gopinath Temple, Remuna", image: "/images/destinations/kuldiha.jpg", description: "Famous Vaishnavite shrine associated with Lord Chaitanya." },
      { name: "Dublagadi Beach", image: "/images/destinations/kuldiha.jpg", description: "Quiet and less crowded beach with natural beauty." },
    ],
  },
  {
    name: "Bargarh",
    map: "/images/districts/bargarh.png",
    destinations: [
      { name: "Nrusinghanath Temple", image: "/images/destinations/nrusinghanath.jpg", description: "Ancient temple near Gandhamardan hills." },
      { name: "Debrigarh Wildlife Sanctuary", image: "/images/destinations/debrigarh.jpg", description: "Famous for Hirakud reservoir and wildlife." },
      { name: "Gandhamardan Hills", image: "/images/destinations/debrigarh.jpg", description: "Scenic hills with mythological and medicinal importance." },
      { name: "Papanga Hill", image: "/images/destinations/debrigarh.jpg", description: "Hill known for its trekking trails and panoramic views." },
    ],
  },
  {
    name: "Bhadrak",
    map: "/images/districts/bhadrak.png",
    destinations: [
      { name: "Maa Bhadrakali Temple", image: "/images/destinations/bhadrakali.jpg", description: "Famous Shakti shrine of Odisha." },
      { name: "Aradi (Akhandalamani Temple)", image: "/images/destinations/aradi.jpg", description: "Renowned Shaiva temple near Bhadrak." },
      { name: "Dhamra Port & Temple", image: "/images/destinations/aradi.jpg", description: "Historic port and ancient temple town." },
      { name: "Chandbali", image: "/images/destinations/aradi.jpg", description: "Old river port area on the Baitarani." },
    ],
  },
  {
    name: "Boudh",
    map: "/images/districts/boudh.png",
    destinations: [
      { name: "Boudh Buddha Monastery", image: "/images/destinations/boudh_buddha.jpg", description: "Ancient Buddhist monastery site." },
      { name: "Jagannath Temple, Boudh", image: "/images/destinations/boudh_jagannath.jpg", description: "Important Jagannath temple in the district." },
      { name: "Rameswar Temple", image: "/images/destinations/boudh_jagannath.jpg", description: "Historic temple dedicated to Lord Shiva." },
      { name: "Satkosia Gorge", image: "/images/destinations/boudh_jagannath.jpg", description: "Scenic gorge of Mahanadi with dense forests." },
    ],
  },
  {
    name: "Cuttack",
    map: "/images/districts/cuttack.png",
    destinations: [
      { id: "barabati-fort", name: "Barabati Fort", image: "https://upload.wikimedia.org/wikipedia/commons/9/95/Entrance_of_Barabati_fort.jpg", description: "Historical fort in Cuttack city." },
      { name: "Dhabaleswar Temple", image: "/images/destinations/dhabaleswar.jpg", description: "Temple on an island in Mahanadi river." },
      { name: "Chandi Temple", image: "/images/destinations/dhabaleswar.jpg", description: "Renowned temple dedicated to Goddess Chandi." },
      { name: "Ansupa Lake", image: "/images/destinations/dhabaleswar.jpg", description: "Freshwater lake famous for migratory birds." },
    ],
  },
  {
    name: "Deogarh",
    map: "/images/districts/deogarh.png",
    destinations: [
      { name: "Pradhanpat Waterfall", image: "/images/destinations/pradhanpat.jpg", description: "Scenic waterfall near Deogarh town." },
      { name: "Kurudkut Waterfall", image: "/images/destinations/kurudkut.jpg", description: "Picturesque waterfall in the district." },
      { name: "Kailash Palace", image: "/images/destinations/kurudkut.jpg", description: "Royal palace of Deogarh rulers." },
      { name: "Jagannath Temple, Deogarh", image: "/images/destinations/kurudkut.jpg", description: "Important Jagannath shrine in the town." },
    ],
  },
  {
    name: "Dhenkanal",
    map: "/images/districts/dhenkanal.png",
    destinations: [
      { name: "Kapilash Temple", image: "/images/destinations/kapilash.jpg", description: "Famous Shiva temple on a hilltop." },
      { name: "Saptasajya Hills", image: "/images/destinations/satkosia_dhenkanal.jpg", description: "Picturesque hills with mythological links to Pandavas." },
      { name: "Joranda Monastery (Mahima Dharma)", image: "/images/destinations/satkosia_dhenkanal.jpg", description: "Spiritual center of Mahima cult." },
      { name: "Kualo Ancient Temple Complex", image: "/images/destinations/satkosia_dhenkanal.jpg", description: "Cluster of old temples with rich carvings." },
    ],
  },
  {
    name: "Gajapati",
    map: "/images/districts/gajapati.png",
    destinations: [
      { name: "Mahaendragiri Hills", image: "/images/destinations/mahaendragiri.jpg", description: "Sacred hills with mythological significance." },
      { name: "Gandahati Waterfall", image: "/images/destinations/gandahati.jpg", description: "Scenic waterfall surrounded by forests." },
      { name: "Paralakhemundi Palace", image: "/images/destinations/gandahati.jpg", description: "Historic royal palace with Indo-European architecture." },
      { name: "Harabhangi Dam", image: "/images/destinations/gandahati.jpg", description: "Major irrigation project with natural surroundings." },
    ],
  },
  {
    name: "Ganjam",
    map: "/images/districts/ganjam.png",
    destinations: [
      { name: "Gopalpur Beach", image: "/images/destinations/gopalpur.jpg", description: "Famous beach on the east coast." },
      { name: "Tara Tarini Temple", image: "/images/destinations/taratarini.jpg", description: "Renowned Shakti Peetha on Kumari hills." },
      { name: "Chilika Lake", image: "/images/destinations/taratarini.jpg", description: "Asia’s largest brackish water lagoon." },
      { name: "Tampara Lake", image: "/images/destinations/taratarini.jpg", description: "Freshwater lake ideal for boating." },
    ],
  },
  {
    name: "Jagatsinghpur",
    map: "/images/districts/jagatsinghpur.png",
    destinations: [
      { name: "Paradeep Port", image: "/images/destinations/paradeep.jpg", description: "Major sea port and beach area." },
      { name: "Sarala Temple", image: "/images/destinations/sarala.jpg", description: "Famous Shakti shrine near Jagatsinghpur." },
      { name: "Gorakhnath Temple", image: "/images/destinations/sarala.jpg", description: "Shiva temple with historical significance." },
      { name: "Sandhakuda", image: "/images/destinations/sarala.jpg", description: "Picturesque beach and picnic spot." },
    ],
  },
  {
    name: "Jajpur",
    map: "/images/districts/jajpur.png",
    destinations: [
      { name: "Biraja Temple", image: "/images/destinations/biraja.jpg", description: "Historic temple of Goddess Biraja." },
      { name: "Ratnagiri Monastery", image: "/images/destinations/ratnagiri.jpg", description: "Ancient Buddhist site near Jajpur." },
      { name: "Udayagiri Buddhist Monastery", image: "/images/destinations/ratnagiri.jpg", description: "Ancient Buddhist site with stupas and caves." },
      { name: "Lalitgiri Buddhist Complex", image: "/images/destinations/ratnagiri.jpg", description: "Oldest Buddhist site with stupas and relics." },
      
    ],
  },
  {
    name: "Jharsuguda",
    map: "/images/districts/jharsuguda.png",
    destinations: [
      { name: "Koilighughar Waterfall", image: "/images/destinations/koilighughar.jpg", description: "Beautiful waterfall with a submerged Shiva linga." },
      { name: "Ramchandi Temple", image: "/images/destinations/ramchandi.jpg", description: "Popular local temple in Jharsuguda." },
      { name: "Bikramkhol Cave", image: "/images/destinations/ramchandi.jpg", description: "Rock shelter with ancient inscriptions." },
      { name: "Jhadeswar Temple", image: "/images/destinations/ramchandi.jpg", description: "Shiva temple with traditional architecture." },
    ],
  },
  {
    name: "Kalahandi",
    map: "/images/districts/kalahandi.png",
    destinations: [
      { name: "Karlapat Sanctuary", image: "/images/destinations/karlapat.jpg", description: "Wildlife sanctuary in Kalahandi." },
      { name: "Phurlijharan Waterfall", image: "/images/destinations/phurlijharan.jpg", description: "Scenic waterfall near Bhawanipatna." },
      { name: "Rabandhara Waterfall", image: "/images/destinations/phurlijharan.jpg", description: "Scenic falls surrounded by forest." },
      { name: "Bhawanipatna Jagannath Temple", image: "/images/destinations/phurlijharan.jpg", description: "Famous Jagannath shrine of the town." },
    ],
  },
  {
    name: "Kandhamal",
    map: "/images/districts/kandhamal.png",
    destinations: [
      { name: "Daringbadi", image: "/images/destinations/daringbadi.jpg", description: "Known as Kashmir of Odisha." },
      { name: "Belghar Sanctuary", image: "/images/destinations/belghar.jpg", description: "Tribal and wildlife tourism spot." },
      { name: "Putudi Waterfall", image: "/images/destinations/belghar.jpg", description: "Picturesque natural waterfall near Phulbani." },
      { name: "Balaskumpa Devi Temple", image: "/images/destinations/belghar.jpg", description: "Revered temple of Goddess Barala Devi." },
    ],
  },
  {
    name: "Kendrapara",
    map: "/images/districts/kendrapara.png",
    destinations: [
      { name: "Bhitarkanika National Park", image: "/images/destinations/bhitarkanika.jpg", description: "Famous mangrove ecosystem with crocodiles." },
      { name: "Baladevjew Temple", image: "/images/destinations/baladevjew.jpg", description: "Popular temple of Kendrapara." },
      { name: "Hukitola Island", image: "/images/destinations/baladevjew.jpg", description: "Island with colonial-era structures." },
      { name: "Aul Palace", image: "/images/destinations/baladevjew.jpg", description: "Historic palace of the Aul royal family." },
    ],
  },
  {
    name: "Kendujhar (Keonjhar)",
    map: "/images/districts/keonjhar.png",
    destinations: [
      { name: "Khandadhar Waterfall", image: "/images/destinations/khandadhar.jpg", description: "One of the highest waterfalls in Odisha." },
      { name: "Gonasika Temple", image: "/images/destinations/gonasika.jpg", description: "Origin point of river Baitarani." },
      { name: "Badaghagara Waterfall", image: "/images/destinations/gonasika.jpg", description: "Picturesque perennial waterfall." },
      { name: "Murga Mahadev Temple", image: "/images/destinations/gonasika.jpg", description: "Shiva temple in a scenic forest setting." },
    ],
  },
  {
    name: "Khordha",
    map: "/images/districts/khordha.png",
    destinations: [
      { name: "Lingaraj Temple", image: "/images/destinations/lingaraj.jpg", description: "Ancient temple in Bhubaneswar." },
      { name: "Dhauli", image: "/images/destinations/dhauli.jpg", description: "Peace Pagoda near Bhubaneswar." },
      { name: "Nandankanan Zoological Park", image: "/images/destinations/dhauli.jpg", description: "Famous zoo with white tigers." },
      { name: "Khandagiri & Udayagiri Caves", image: "/images/destinations/dhauli.jpg", description: "Ancient Jain rock-cut caves." },
    ],
  },
  {
    name: "Koraput",
    map: "/images/districts/koraput.png",
    destinations: [
      { name: "Gupteswar Temple", image: "/images/destinations/gupteswar.jpg", description: "Cave shrine of Lord Shiva." },
      { name: "Duduma Waterfall", image: "/images/destinations/duduma.jpg", description: "Majestic waterfall on Machkund river." },
      { name: "Deomali Hills", image: "/images/destinations/duduma.jpg", description: "Odisha’s tallest peak with scenic views." },
      { name: "Tribal Museum, Koraput", image: "/images/destinations/duduma.jpg", description: "Museum showcasing tribal heritage." },
    ],
  },
  {
    name: "Malkangiri",
    map: "/images/districts/malkangiri.png",
    destinations: [
      { name: "Balimela Reservoir", image: "/images/destinations/balimela.jpg", description: "Scenic water reservoir." },
      { name: "Ammakunda", image: "/images/destinations/ammakunda.jpg", description: "Sacred pond and waterfall." },
      { name: "Satiguda Dam", image: "/images/destinations/ammakunda.jpg", description: "Small reservoir popular for picnics." },
      { name: "Manyamkonda Temple", image: "/images/destinations/ammakunda.jpg", description: "Hilltop temple dedicated to Lord Hanuman." },
    ],
  },
  {
    name: "Mayurbhanj",
    map: "/images/districts/mayurbhanj.png",
    destinations: [
      { name: "Simlipal National Park", image: "/images/destinations/simlipal.jpg", description: "Tiger reserve and biosphere reserve." },
      { name: "Barehipani Waterfall (2nd Highest in India)", image: "/images/destinations/baripada.jpg", description: "Majestic two-tiered waterfall." },
      { name: "Joranda & Devkund Waterfalls", image: "/images/destinations/baripada.jpg", description: "Scenic waterfalls in Simlipal." },
      { name: "Haripurgarh Palace", image: "/images/destinations/baripada.jpg", description: "Historic palace of Mayurbhanj rulers." },
    ],
  },
  {
    name: "Nabarangpur",
    map: "/images/districts/nabarangpur.png",
    destinations: [
      { name: "Papadahandi Temples", image: "/images/destinations/papadahandi.jpg", description: "Group of ancient temples." },
      { name: "Maa Pendrani Temple", image: "/images/destinations/chandan_dhara.jpg", description: "Local deity’s shrine with cultural importance." },
      { name: "Sahid Minar (Papadahandi)", image: "/images/destinations/chandan_dhara.jpg", description: "Monument honoring local freedom fighters." },
      { name: "Deer Park", image: "/images/destinations/chandan_dhara.jpg", description: "Mini zoo with spotted deer." },
    ],
  },
  {
    name: "Nayagarh",
    map: "/images/districts/nayagarh.png",
    destinations: [
      { name: "Satkosia Gorge (Nayagarh side)", image: "/images/destinations/satkosia_nayagarh.jpg", description: "Part of Satkosia Tiger Reserve." },
      { name: "Kuanria Dam", image: "/images/destinations/kuanria.jpg", description: "Scenic water reservoir and birding site." },
      { name: "Nilamadhav Temple, Kantilo", image: "/images/destinations/kuanria.jpg", description: "Famous temple on Mahanadi bank." },
      { name: "Ranapur Jagannath Temple", image: "/images/destinations/kuanria.jpg", description: "Ancient Jagannath shrine." },
    ],
  },
  {
    name: "Nuapada",
    map: "/images/districts/nuapada.png",
    destinations: [
      { name: "Patora Dam", image: "/images/destinations/patalganga.jpg", description: "Popular picnic spot with reservoir views." },
      { name: "Sunabeda Sanctuary", image: "/images/destinations/sunabeda.jpg", description: "Wildlife sanctuary and plateau." },
      { name: "Yogeswar Temple", image: "/images/destinations/sunabeda.jpg", description: "Shiva temple with cultural significance." },
      { name: "Budhikomna Temple", image: "/images/destinations/sunabeda.jpg", description: "Wildlife sanctuary and plateau." },
    ],
  },
  {
    name: "Puri",
    map: "/images/districts/puri.png",
    destinations: [
      { name: "Jagannath Temple", image: "/images/destinations/jagannath.jpg", description: "Famous Hindu temple." },
      { name: "Puri Beach", image: "/images/destinations/puribeach.jpg", description: "Popular beach on Bay of Bengal." },
      { name: "Konark Sun Temple", image: "/images/destinations/puribeach.jpg", description: "UNESCO World Heritage temple." },
      { name: "Chilika Lake (Satapada)", image: "/images/destinations/puribeach.jpg", description: "Lagoon with dolphins and migratory birds." },
    ],
  },
  {
    name: "Rayagada",
    map: "/images/districts/rayagada.png",
    destinations: [
      { name: "Majhighariani Temple", image: "/images/destinations/majhighariani.jpg", description: "Famous temple of Goddess Majhighariani." },
      { name: "Chatikona Waterfall", image: "/images/destinations/chatikona.jpg", description: "Picturesque waterfall in Rayagada." },
      { name: "Minajhola Temple (Confluence of 3 Rivers)", image: "/images/destinations/chatikona.jpg", description: "Picturesque temple site." },
      { name: "Hanging Bridge at Chekaguda", image: "/images/destinations/chatikona.jpg", description: "Suspension bridge offering scenic views." },
    ],
  },
  {
    name: "Sambalpur",
    map: "/images/districts/sambalpur.png",
    destinations: [
      { name: "Hirakud Dam", image: "/images/destinations/hirakud.jpg", description: "Longest earthen dam in the world." },
      { name: "Samaleswari Temple", image: "/images/destinations/samaleswari.jpg", description: "Famous Shakti shrine in Sambalpur." },
      { name: "Debrigarh Sanctuary", image: "/images/destinations/samaleswari.jpg", description: "Wildlife sanctuary near Hirakud." },
      { name: "Huma Leaning Temple", image: "/images/destinations/samaleswari.jpg", description: "Unique tilted temple of Lord Shiva." },
    ],
  },
  {
    name: "Sonepur (Subarnapur)",
    map: "/images/districts/sonepur.png",
    destinations: [
      { name: "Sashisena Temple", image: "/images/destinations/sonepur_temple.jpg", description: "Temple linked with the Sashisena legend." },
      { name: "Papakshya Ghat", image: "/images/destinations/papakshya.jpg", description: "Sacred bathing site on Mahanadi." },
      { name: "Patali Srikhetra", image: "/images/destinations/papakshya.jpg", description: "Jagannath temple of Western Odisha." },
      { name: "Kosaleswara Temple", image: "/images/destinations/papakshya.jpg", description: "Ancient temple of Lord Shiva." },
    ],
  },
  {
    name: "Sundargarh",
    map: "/images/districts/sundargarh.png",
    destinations: [
      { name: "Vedavyas", image: "/images/destinations/vedavyas.jpg", description: "Meeting point of rivers with mythological value." },
      { name: "Khandadhar Waterfall (Bonai)", image: "/images/destinations/khandadhar_bonai.jpg", description: "Beautiful waterfall in Sundargarh." },
      { name: "Darjeeng Picnic Spot", image: "/images/destinations/khandadhar_bonai.jpg", description: "Popular picnic site on Brahmani River." },
      { name: "Ghogar Waterfall", image: "/images/destinations/khandadhar_bonai.jpg", description: "Lesser-known but beautiful natural falls." },
    ],
  },
];


const OdishaMap = () => {
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const navigate = useNavigate();

  return (
    <section className="w-full  py-12 bg-[#F3E6E6]">
      <div className="max-w-7xl mx-auto px-4">
  {/* Heading */}
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#761421] lg:mb-16">
    Top Destinations in Odisha
  </h2>

  {/* Why Visit Odisha Section */}
<section className="w-full max-w-7xl mx-auto px-4 pt-12 pb-12 relative overflow-visible">
  <div className="relative flex flex-col md:flex-row md:items-center">
    {/* Left content box */}
    <div className="bg-[#761421] text-white p-6 md:pr-20 sm:p-8 lg:ml-10 rounded-xl shadow-2xl relative z-10
                    w-full md:w-[72%] lg:w-[68%] ">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">
        Why Visit Odisha?
      </h2>
      <p className="text-base sm:text-lg  md:text-md leading-relaxed max-w-2xl">
        A trip to Odisha is a journey into timeless traditions, sacred
        spirituality, serene landscapes, and warm hospitality. Whether you
        seek pilgrimage, adventure, art, or peace by the sea, Odisha
        welcomes you with open arms.
      </p>
    </div>

    {/* Map */}
    {/* Desktop/Tablet → right side (absolute) */}
    <div className="hidden md:block absolute top-1/2 right-6 md:-right-14 lg:right-10 transform -translate-y-1/2 z-20 pointer-events-none">
      <img
        src="/images/Odisha Map Chart.png"
        alt="Odisha Map"
        className="w-[280px] md:w-[400px] lg:w-[420px] xl:w-[500px] max-w-none drop-shadow-2xl"
      />
    </div>

    {/* Mobile → below box */}
    <div className="-mt-10 flex justify-center md:hidden z-10">
      <img
        src="/images/Odisha Map Chart.png"
        alt="Odisha Map"
        className="w-[300px] sm:w-[280px] drop-shadow-2xl"
      />
    </div>
  </div>
</section>


  {/* District Names */}
<div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10 -mt-6 sm:-mt-8 lg:mt-20 md:mt-8 px-2">
  {districts.map((district, i) => (
    <button
      key={i}
      onClick={() =>
        setSelectedDistrict(
          selectedDistrict?.name === district.name ? null : district
        )
      }
      className={`px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg 
        text-xs sm:text-sm md:text-base lg:text-lg font-medium transition
        ${
          selectedDistrict?.name === district.name
            ? "bg-[#761421] text-white  shadow-md"
            : "bg-[#761421] hover:bg-[#1b1713] text-white hover:text-[#761421]"
        }`}
    >
      {district.name}
    </button>
  ))}
</div>


  {/* District Details with animation */}
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
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-md"
          />
        </div>

        {/* Right: Destinations */}
        <div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-6 text-center md:text-left">
            Top Destinations in {selectedDistrict.name}
          </h3>

          {/* Grid of oval images */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {selectedDistrict.destinations.map((place, i) => (
              <div
                key={i}
                onClick={() => navigate(`/destination/${place.id}`)}
                className="flex flex-col items-center cursor-pointer group"
              >
                {/* Oval Image */}
                <div className="w-24 h-36 sm:w-28 sm:h-44 md:w-32 md:h-48 lg:w-36 lg:h-56 overflow-hidden rounded-full shadow-md group-hover:scale-105 transform transition duration-300">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                {/* Name */}
                <p className="mt-2 sm:mt-3 text-gray-700 font-medium text-sm sm:text-base text-center">
                  {place.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </>
    )}
  </div></div>
</section>

  );
};

export default OdishaMap;
