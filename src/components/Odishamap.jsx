// src/pages/OdishaMap.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const districts = [
  {
    name: "Angul",
    map: "/images/districts/angul.png",
    destinations: [
      { name: "Satkosia Gorge", image: "/images/destinations/satkosia.jpg", description: "Famous wildlife sanctuary on the Mahanadi River." },
      { name: "Tikarpada", image: "/images/destinations/tikarpada.jpg", description: "Known for crocodile sanctuary and scenic beauty." },
    ],
  },
  {
    name: "Balangir",
    map: "/images/districts/balangir.png",
    destinations: [
      { name: "Harishankar Temple", image: "/images/destinations/harishankar.jpg", description: "Pilgrimage site at the foot of Gandhamardan hills." },
      { name: "Ranipur Jharial", image: "/images/destinations/ranipur.jpg", description: "Archaeological site with temples and ruins." },
    ],
  },
  {
    name: "Balasore",
    map: "/images/districts/balasore.png",
    destinations: [
      { name: "Chandipur Beach", image: "/images/destinations/chandipur.jpg", description: "Unique beach where the sea recedes up to 5 km." },
      { name: "Kuldiha Sanctuary", image: "/images/destinations/kuldiha.jpg", description: "Wildlife sanctuary in the Nilgiri hills." },
    ],
  },
  {
    name: "Bargarh",
    map: "/images/districts/bargarh.png",
    destinations: [
      { name: "Nrusinghanath Temple", image: "/images/destinations/nrusinghanath.jpg", description: "Ancient temple near Gandhamardan hills." },
      { name: "Debrigarh Wildlife Sanctuary", image: "/images/destinations/debrigarh.jpg", description: "Famous for Hirakud reservoir and wildlife." },
    ],
  },
  {
    name: "Bhadrak",
    map: "/images/districts/bhadrak.png",
    destinations: [
      { name: "Maa Bhadrakali Temple", image: "/images/destinations/bhadrakali.jpg", description: "Famous Shakti shrine of Odisha." },
      { name: "Aradi (Akhandalamani Temple)", image: "/images/destinations/aradi.jpg", description: "Renowned Shaiva temple near Bhadrak." },
    ],
  },
  {
    name: "Boudh",
    map: "/images/districts/boudh.png",
    destinations: [
      { name: "Boudh Buddha Monastery", image: "/images/destinations/boudh_buddha.jpg", description: "Ancient Buddhist monastery site." },
      { name: "Jagannath Temple, Boudh", image: "/images/destinations/boudh_jagannath.jpg", description: "Important Jagannath temple in the district." },
    ],
  },
  {
    name: "Cuttack",
    map: "/images/districts/cuttack.png",
    destinations: [
      { id: "barabati-fort", name: "Barabati Fort", image: "https://upload.wikimedia.org/wikipedia/commons/9/95/Entrance_of_Barabati_fort.jpg", description: "Historical fort in Cuttack city." },
      { id: "dhabaleswar-temple", name: "Dhabaleswar Temple", image: "/images/destinations/dhabaleswar.jpg", description: "Temple on an island in Mahanadi river." },
    ],
  },
  {
    name: "Deogarh",
    map: "/images/districts/deogarh.png",
    destinations: [
      { name: "Pradhanpat Waterfall", image: "/images/destinations/pradhanpat.jpg", description: "Scenic waterfall near Deogarh town." },
      { name: "Kurudkut Waterfall", image: "/images/destinations/kurudkut.jpg", description: "Picturesque waterfall in the district." },
    ],
  },
  {
    name: "Dhenkanal",
    map: "/images/districts/dhenkanal.png",
    destinations: [
      { name: "Kapilash Temple", image: "/images/destinations/kapilash.jpg", description: "Famous Shiva temple on a hilltop." },
      { name: "Satkosia Gorge", image: "/images/destinations/satkosia_dhenkanal.jpg", description: "Part of the Satkosia Tiger Reserve." },
    ],
  },
  {
    name: "Gajapati",
    map: "/images/districts/gajapati.png",
    destinations: [
      { name: "Mahaendragiri Hills", image: "/images/destinations/mahaendragiri.jpg", description: "Sacred hills with mythological significance." },
      { name: "Gandahati Waterfall", image: "/images/destinations/gandahati.jpg", description: "Scenic waterfall surrounded by forests." },
    ],
  },
  {
    name: "Ganjam",
    map: "/images/districts/ganjam.png",
    destinations: [
      { name: "Gopalpur Beach", image: "/images/destinations/gopalpur.jpg", description: "Famous beach on the east coast." },
      { name: "Tara Tarini Temple", image: "/images/destinations/taratarini.jpg", description: "Renowned Shakti Peetha on Kumari hills." },
    ],
  },
  {
    name: "Jagatsinghpur",
    map: "/images/districts/jagatsinghpur.png",
    destinations: [
      { name: "Paradeep Port", image: "/images/destinations/paradeep.jpg", description: "Major sea port and beach area." },
      { name: "Sarala Temple", image: "/images/destinations/sarala.jpg", description: "Famous Shakti shrine near Jagatsinghpur." },
    ],
  },
  {
    name: "Jajpur",
    map: "/images/districts/jajpur.png",
    destinations: [
      { name: "Biraja Temple", image: "/images/destinations/biraja.jpg", description: "Historic temple of Goddess Biraja." },
      { name: "Ratnagiri Monastery", image: "/images/destinations/ratnagiri.jpg", description: "Ancient Buddhist site near Jajpur." },
    ],
  },
  {
    name: "Jharsuguda",
    map: "/images/districts/jharsuguda.png",
    destinations: [
      { name: "Koilighughar Waterfall", image: "/images/destinations/koilighughar.jpg", description: "Beautiful waterfall with a submerged Shiva linga." },
      { name: "Ramchandi Temple", image: "/images/destinations/ramchandi.jpg", description: "Popular local temple in Jharsuguda." },
    ],
  },
  {
    name: "Kalahandi",
    map: "/images/districts/kalahandi.png",
    destinations: [
      { name: "Karlapat Sanctuary", image: "/images/destinations/karlapat.jpg", description: "Wildlife sanctuary in Kalahandi." },
      { name: "Phurlijharan Waterfall", image: "/images/destinations/phurlijharan.jpg", description: "Scenic waterfall near Bhawanipatna." },
    ],
  },
  {
    name: "Kandhamal",
    map: "/images/districts/kandhamal.png",
    destinations: [
      { name: "Daringbadi", image: "/images/destinations/daringbadi.jpg", description: "Known as Kashmir of Odisha." },
      { name: "Belghar Sanctuary", image: "/images/destinations/belghar.jpg", description: "Tribal and wildlife tourism spot." },
    ],
  },
  {
    name: "Kendrapara",
    map: "/images/districts/kendrapara.png",
    destinations: [
      { name: "Bhitarkanika National Park", image: "/images/destinations/bhitarkanika.jpg", description: "Famous mangrove ecosystem with crocodiles." },
      { name: "Baladevjew Temple", image: "/images/destinations/baladevjew.jpg", description: "Popular temple of Kendrapara." },
    ],
  },
  {
    name: "Kendujhar (Keonjhar)",
    map: "/images/districts/keonjhar.png",
    destinations: [
      { name: "Khandadhar Waterfall", image: "/images/destinations/khandadhar.jpg", description: "One of the highest waterfalls in Odisha." },
      { name: "Gonasika Temple", image: "/images/destinations/gonasika.jpg", description: "Origin point of river Baitarani." },
    ],
  },
  {
    name: "Khordha",
    map: "/images/districts/khordha.png",
    destinations: [
      { name: "Lingaraj Temple", image: "/images/destinations/lingaraj.jpg", description: "Ancient temple in Bhubaneswar." },
      { name: "Dhauli", image: "/images/destinations/dhauli.jpg", description: "Peace Pagoda near Bhubaneswar." },
    ],
  },
  {
    name: "Koraput",
    map: "/images/districts/koraput.png",
    destinations: [
      { name: "Gupteswar Temple", image: "/images/destinations/gupteswar.jpg", description: "Cave shrine of Lord Shiva." },
      { name: "Duduma Waterfall", image: "/images/destinations/duduma.jpg", description: "Majestic waterfall on Machkund river." },
    ],
  },
  {
    name: "Malkangiri",
    map: "/images/districts/malkangiri.png",
    destinations: [
      { name: "Balimela Reservoir", image: "/images/destinations/balimela.jpg", description: "Scenic water reservoir." },
      { name: "Ammakunda", image: "/images/destinations/ammakunda.jpg", description: "Sacred pond and waterfall." },
    ],
  },
  {
    name: "Mayurbhanj",
    map: "/images/districts/mayurbhanj.png",
    destinations: [
      { name: "Simlipal National Park", image: "/images/destinations/simlipal.jpg", description: "Tiger reserve and biosphere reserve." },
      { name: "Baripada Jagannath Temple", image: "/images/destinations/baripada.jpg", description: "Jagannath temple with Rath Yatra." },
    ],
  },
  {
    name: "Nabarangpur",
    map: "/images/districts/nabarangpur.png",
    destinations: [
      { name: "Papadahandi Temples", image: "/images/destinations/papadahandi.jpg", description: "Group of ancient temples." },
      { name: "Chandan Dhara", image: "/images/destinations/chandan_dhara.jpg", description: "Scenic waterfall in Nabarangpur." },
    ],
  },
  {
    name: "Nayagarh",
    map: "/images/districts/nayagarh.png",
    destinations: [
      { name: "Satkosia Gorge (Nayagarh side)", image: "/images/destinations/satkosia_nayagarh.jpg", description: "Part of Satkosia Tiger Reserve." },
      { name: "Kuanria Dam", image: "/images/destinations/kuanria.jpg", description: "Scenic water reservoir and birding site." },
    ],
  },
  {
    name: "Nuapada",
    map: "/images/districts/nuapada.png",
    destinations: [
      { name: "Patalganga", image: "/images/destinations/patalganga.jpg", description: "Sacred spring in Nuapada." },
      { name: "Sunabeda Sanctuary", image: "/images/destinations/sunabeda.jpg", description: "Wildlife sanctuary and plateau." },
    ],
  },
  {
    name: "Puri",
    map: "/images/districts/puri.png",
    destinations: [
      { name: "Jagannath Temple", image: "/images/destinations/jagannath.jpg", description: "Famous Hindu temple." },
      { name: "Puri Beach", image: "/images/destinations/puribeach.jpg", description: "Popular beach on Bay of Bengal." },
    ],
  },
  {
    name: "Rayagada",
    map: "/images/districts/rayagada.png",
    destinations: [
      { name: "Majhighariani Temple", image: "/images/destinations/majhighariani.jpg", description: "Famous temple of Goddess Majhighariani." },
      { name: "Chatikona Waterfall", image: "/images/destinations/chatikona.jpg", description: "Picturesque waterfall in Rayagada." },
    ],
  },
  {
    name: "Sambalpur",
    map: "/images/districts/sambalpur.png",
    destinations: [
      { name: "Hirakud Dam", image: "/images/destinations/hirakud.jpg", description: "Longest earthen dam in the world." },
      { name: "Samaleswari Temple", image: "/images/destinations/samaleswari.jpg", description: "Famous Shakti shrine in Sambalpur." },
    ],
  },
  {
    name: "Sonepur (Subarnapur)",
    map: "/images/districts/sonepur.png",
    destinations: [
      { name: "Sonepur Temple Cluster", image: "/images/destinations/sonepur_temple.jpg", description: "Known as the Second Varanasi of India." },
      { name: "Papakshya Ghat", image: "/images/destinations/papakshya.jpg", description: "Sacred bathing site on Mahanadi." },
    ],
  },
  {
    name: "Sundargarh",
    map: "/images/districts/sundargarh.png",
    destinations: [
      { name: "Vedavyas", image: "/images/destinations/vedavyas.jpg", description: "Meeting point of rivers with mythological value." },
      { name: "Khandadhar Waterfall (Bonai)", image: "/images/destinations/khandadhar_bonai.jpg", description: "Beautiful waterfall in Sundargarh." },
    ],
  },
];


const OdishaMap = () => {
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const navigate = useNavigate();

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-12">
  {/* Heading */}
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-600 mb-8">
    Top Destinations in Odisha
  </h2>

  {/* Odisha Map */}
  <div className="flex justify-center mb-6">
    <img
      src="/images/Odisha_districts_map.svg"
      alt="Odisha Map"
      className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain"
    />
  </div>

  {/* District Names */}
  <div className="flex flex-wrap justify-center gap-3 mb-10">
    {districts.map((district, i) => (
      <button
        key={i}
        onClick={() => setSelectedDistrict(district)}
        className="px-3 sm:px-4 py-2 bg-blue-100 hover:bg-blue-500 hover:text-white rounded-lg text-xs sm:text-sm md:text-base font-medium transition"
      >
        {district.name}
      </button>
    ))}
  </div>

  {/* District Details */}
  {selectedDistrict && (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
    </div>
  )}
</section>

  );
};

export default OdishaMap;
