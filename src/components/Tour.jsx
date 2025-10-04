import React, { useState } from "react";

const Tour = () => {
  const tours = {
    puri: {
      title: "Puri Tour",
      subtitle: "Where Spirituality Meets the Sea",
      desc: "Embark on a memorable journey to Puri, one of the most sacred and scenic destinations in Odisha. Known for its vibrant culture, ancient temples, golden beaches, and divine atmosphere.",
      highlight: "A perfect blend of spirituality, culture, and coastal beauty",
      images: [
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=300&q=80",
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=300&q=80",
      ],
      places: [
         {
    title: "Sand Art Museum",
    
    img: "https://content3.jdmagicbox.com/comp/puri/u7/9999p6752.6752.180628121850.l9u7/catalogue/sudam-sand-art-museum-baliguali-puri-art-galleries-0ki5wruyy1.jpg",
  },
  {
    title: "Panchamukhi Hanuman",
    
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjk7ov9IifMGacsqZiNaMH8RI6uX9ZVEc5ugOS1JUa_W_Zg8ApRhnVVXPcUesuRve3N4OW4_W1mDyY-DtJUfJ15qXmt4SiB-gWuigZTYw_cB7Pwh8YhvdzBbIG4l5_2Bp3kIDIP3qRl1no/w1200-h630-p-k-no-nu/2017-07-18.jpg",
  },
  {
    title: "Ramchandi Sangam",
    
    img: "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Chandrabhaga",
    
    img: "https://us.images.westend61.de/0001996431pw/aerial-view-of-sandy-chandrabhaga-beach-along-bay-of-bengal-konark-odisha-india-AAEF33203.jpg",
  },
  {
    title: "Sun Temple Konark",
    
    img: "https://upload.wikimedia.org/wikipedia/commons/4/47/Konarka_Temple.jpg",
  },
  {
    title: "Nabagrah Temple",
    
    img: "https://www.shreekhetra.com/image3/konark/navagraha.jpg",
  },
      ],
    },
    bhubaneswar: {
      title: "Bhubaneswar Tour",
      subtitle: "The Temple City of India",
      desc: "Discover Bhubaneswar, the capital of Odisha, renowned for its architectural marvels, temples, and urban charm.",
      highlight: "A vibrant mix of history and modernity",
      images: [
        "https://images.unsplash.com/photo-1596803244280-03e645fa90d8?auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=300&q=80",
        "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=300&q=80",
      ],
      places: [
        {
    title: "Raghurajpur Heritage Village",
    
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Edfw72tOXyIoLm9lNpqQ5-boWGfKQ8da5g&s",
  },
  {
    title: "Sakhigopal Temple",
    
    img: "https://bhubaneswartourism.in/images/places-to-visit/headers/sakshi-gopal-temple-puri-tourism-entry-fee-timings-holidays-reviews-header.jpg",
  },
  {
    title: "Pipili Handloom Market",
    
    img: "https://twocircles.net/wp-content/uploads/2022/04/The-colourful-designed-handicrafts-of-Pipili.jpg",
  },
  {
    title: "Dhauli",
    
    img: "https://www.dhauli.net/images/shanti-stupa-dhauli.jpg",
  },
  {
    title: "Lingaraj Temple",
    
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Lingaraj_temple_Bhubaneswar.jpg/760px-Mapcarta.jpg",
  },
  {
    title: "Mukteswar Temple",
    
    img: "https://kevinstandagephotography.wordpress.com/wp-content/uploads/2020/03/ksp_9784.jpg?w=1024",
  },
  {
    title: "Sidheswar Temple",
    
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Sidheswar_Temple%2C_Bhubaneswar.jpg/640px-Sidheswar_Temple%2C_Bhubaneswar.jpg",
  },
  {
    title: "Rajarani Temple",
    
    img: "https://media1.thrillophilia.com/filestore/yiv7jim2ocipr092gkkmazqlznwo_1587447431_Rajarani_Temple.jpg",
  },
  {
    title: "Khandagiri Hills",
    
    img: "https://www.trawell.in/admin/images/upload/120956501Bhubaneswar_Udayagiri_Kandagiri_Caves_Main.jpg",
  },
  {
    title: "Udayagiri Caves",
    
    img: "https://s7ap1.scene7.com/is/image/incredibleindia/1-khandagiri-udaigiri-caves-attr-hero?qlt=82&ts=1742172787783",
  },
  {
    title: "Nandankanan Zoo",
    
    img: "https://bhubaneswartourism.in/images/places-to-visit/headers/nandankanan-zoological-park-bhubaneswar-tourism-entry-fee-timings-holidays-reviews-header.jpg",
  },
      ],
    },
    chilika: {
      title: "Chilika Tour",
      subtitle: "Asia's Largest Brackish Water Lagoon",
      desc: "Explore the breathtaking beauty of Chilika, famous for birdwatching, dolphins, and serene boat rides.",
      highlight: "A paradise for nature lovers and birdwatchers",
      images: [
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=300&q=80",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&q=80",
      ],
      places: [
         {
    title: "Alarnatha Temple",
    
    img: "https://temple.yatradham.org/public/Product/temple/temple_t19kAtVj_202408221431300.jpg",
  },
  {
    title: "Chilika Lake",
    
    img: "https://travelandtrekking.com/wp-content/uploads/2020/02/kalijai-temple-and-chilika-lake.jpeg",
  },
  {
    title: "Dolphin Project",
    
    img: "https://curlytales.com/wp-content/uploads/2022/04/Untitled-design-14-3-640x480.jpg",
  },
  {
    title: "Sea Mound",
    
    img: "https://indiano.travel/wp-content/uploads/2024/08/Chilika-Sea-Mouth-Beach.jpg",
  },
  {
    title: "Ice Land",
    
    img: "https://tourtoreview.com/wp-content/uploads/2024/04/Chilika-lake-tourism.webp",
  },
  {
    title: "Moti",
    
    img: "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Red Crab",
    
    img: "https://thumbs.dreamstime.com/b/red-crab-chilika-lake-india-red-crab-chilika-lake-308812391.jpg",
  },
      ],
    },
    puriSide: {
      title: "Puri Side Scene",
      subtitle: "Hidden Gems Around Puri",
      desc: "Beyond temples and beaches, explore lesser-known yet mesmerizing locations around Puri.",
      highlight: "Unwind in unexplored beauty",
      images: [
        "https://i.pinimg.com/1200x/9d/6f/06/9d6f06c35a6056b3bf4df4e58e55a864.jpg",
        "https://i.pinimg.com/736x/4b/bf/08/4bbf08a7d170287bb0f4dd717668e018.jpg",
        "https://i.pinimg.com/1200x/5d/2c/9c/5d2c9c36cc2fb54e38f5d9a321d4d4e5.jpg",
      ],
      places: [
         {
    title: "Jagannath Temple",
    
    img: "https://d1msew97rp2nin.cloudfront.net/prod/phool/blogimages/172017492135594.webp",
  },
  {
    title: "Gundicha Temple",
    
    img: "https://www.mypuritour.com/wp-content/uploads/2025/06/Gundicha-Temple.webp",
  },
  {
    title: "Mausi Maa Temple",
    
    img: "https://temple.yatradham.org/public/Product/temple/temple_nABLQZpd_202309061610150.jpg",
  },
  {
    title: "Lokanatha Temple",
    
    img: "https://bhubaneswartourism.in/images/places-to-visit/headers/loknath-temple-puri-tourism-entry-fee-timings-holidays-reviews-header.jpg",
  },
  {
    title: "Mata Matha",
    
    img: "https://www.mypuritour.com/wp-content/uploads/2023/02/mata-matha-puri.png",
  },
  {
    title: "Bedi Hanuman Temple",
    
    img: "https://media.webdunia.com/_media/hi/img/article/2021-05/31/full/1622473614-2139.jpg",
  },
  {
    title: "Golden Beach",
    
    img: "https://www.shutterstock.com/image-photo/puri-india-september-04-2024-600nw-2529540197.jpg",
  },
      ],
    },
  };

  const [activeTour, setActiveTour] = useState("puri");
  const tour = tours[activeTour];

  return (
    <div className="bg-gray-50">
      {/* SECTION 1 - TOUR DETAILS */}
      <section className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        {/* Left Content */}
        <div>
            <h1 className="text-5xl font-bold mb-6 -mt-4">Plan your Tour</h1>
          <div className="flex flex-wrap gap-2 mb-4">
            {Object.keys(tours).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTour(key)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition ${
                  activeTour === key
                    ? "bg-blue-600 text-white"
                    : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                }`}
              >
                {tours[key].title}
              </button>
            ))}
          </div>
          <h2 className="text-2xl font-bold mb-3">{tour.title}</h2>
          <h3 className="text-2xl font-medium mb-2">{tour.subtitle}</h3>
          <p className="text-sm leading-relaxed mb-4">{tour.desc}</p>
          <p className="text-sm leading-relaxed mb-4">{tour.highlight}</p>
          <div className="flex items-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md transition">
              <a href ="/booking">Book Your Trip</a>
            </button>
            <a
              href="#section2"
              className="text-blue-600 font-medium hover:underline flex items-center"
            >
              See another location →
            </a>
          </div>
        </div>

        {/* Right Images */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src={tour.images[0]}
            alt="Main"
            className="col-span-2 rounded-lg object-cover h-64 w-full"
          />
          <img
            src={tour.images[1]}
            alt=""
            className="rounded-lg object-cover h-32 w-full"
          />
          <img
            src={tour.images[2]}
            alt=""
            className="rounded-lg object-cover h-32 w-full"
          />
        </div>
      </section>

      {/* Divider */}
      <div className="border-t my-2"></div>

      {/* SECTION 2 - PLACES */}
      <section id="section2" className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {tour.title} Attractions
            </h2>
            <p className="text-sm text-gray-600 max-w-xl">
              Explore the highlights and must-visit places of {tour.title}.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="flex gap-6 overflow-x-auto pb-4">
          {tour.places.map((place, index) => (
            <div
              key={index}
              className="min-w-[250px] bg-white rounded-lg shadow hover:shadow-lg transition flex-shrink-0"
            >
              <img
                src={place.img}
                alt={place.title}
                className="rounded-t-lg h-40 w-full object-cover"
              />
              <div className="p-4">
                <p className="text-xs text-gray-500 mb-1">{place.date}</p>
                <h3 className="font-semibold text-sm">{place.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Tour;
