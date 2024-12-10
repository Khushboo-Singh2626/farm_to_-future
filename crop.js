const cropData = {
    "crops": [
      {
        "name": "Rice",
        "description": "Rice is a kharif crop which needs ample sunshine and water. Rice is a staple food for over half the world's population. It is a cereal grain and is primarily grown in tropical and subtropical regions. In India, rice is an integral part of the culture and diet, with states like West Bengal, Uttar Pradesh, and Punjab leading in production.",
        "climatic_conditions": "It needs warm and humid climate, and can grow on varied altitudes under suitable temperature. Since it needs plenty of water, monsoon lands are most suitable. Rice requires a warm and humid climate with a temperature range of 20°C to 40°C. It grows best in regions with an annual rainfall of 100-200 cm. During the growing season, consistent water supply through monsoon rains or irrigation is critical. The level of humidity should be high, and rainfall above 100cm is required for good crop.",
        "organic_fertilizer": "Compost, vermicompost, and green manure such as Sesbania and cow dung manure are effective organic fertilizers for rice. Azolla, a nitrogen-fixing aquatic fern, can also be used to enhance nitrogen levels in paddy fields. Rice farming required a very fertile land with a good water supply where seeds were sown to reap seedlings that once uprooted were planted in the fields to yield paddy.",
        "soil_type": "Clayey loam or alluvial soils with good water retention capacity are ideal for rice cultivation. The soil should be well-drained during the planting phase and waterlogged during the growth phase for optimal yield. Since it needs plenty of water, monsoon lands are most suitable. Fertile clayey or loamy soil are the best for rice cultivation. Deltas, flood plains, estuaries, river valleys and coastal plains are most suitable for rice cultivation.",
        "related_video": "https://www.youtube.com/watch?v=FVtmRf_awBU"
      },
      {
        "name": "Wheat",
        "description": "Wheat is a green to brown grass that produces spikes, or ears, on its hollow stems. The spikes can grow up to 15 cm long and are made up of spikelets, which are complex arrangements of small flowers. Modern wheat cultivars are usually shorter than 1 meter, but older varieties can grow up to 1.5 meters. Wheat is the second-most produced cereal crop globally and a vital food grain in India. It is a winter crop, contributing significantly to India's food security, especially in states like Punjab, Haryana, and Uttar Pradesh.",
        "climatic_conditions": "Wheat thrives in a cool and dry climate. It requires a temperature of 10°C-15°C during sowing and 21°C-26°C during grain formation. Rainfall of 50-75 cm annually, with clear weather during harvesting, is ideal. Wheat grows best in medium humidity levels of 50–60%. However, humidity levels of 100% during the critical period of grain development can increase the risk of fusarium. This period occurs when the heads begin to emerge from the flag leaf and during pollination through to the dough stage. High humidity conditions can also increase the incidence of insect pests and diseases. Fungal spores can germinate easily on plant leaves in high humidity.",
        "organic_fertilizer": "Organic fertilizers like farmyard manure, vermicompost, and bone meal are suitable for wheat. Biofertilizers such as Azotobacter and phosphorus-solubilizing bacteria can improve soil health and wheat yield. Chicken manure: A popular choice for organic small grains farmers, chicken manure is high in phosphorus and potassium, which wheat needs more of than some other crops. Pelleted chicken manure is easy to handle and store. Farm yard manure (FYM): Can be used in combination with other organic materials like dried tree leaves. Compost: Most small grains respond well to compost.",
        "soil_type": "Well-drained loamy or clayey loam soils rich in organic matter are best for wheat cultivation. The soil should have a pH range of 6.0 to 7.5 for optimal growth.",
        "related_video": "https://www.youtube.com/watch?v=N9pe7lsFT7Q"
      },
      {
        "name": "Sugarcane",
        "description": "Sugarcane is a key commercial crop in India, widely used for sugar production and other by-products like ethanol and jaggery. Maharashtra, Uttar Pradesh, and Karnataka are leading producers.",
        "climatic_conditions": "Sugarcane grows well in tropical and subtropical regions with a temperature range of 20°C-40°C. It requires 75-150 cm of annual rainfall, supplemented by irrigation in dry regions.",
        "organic_fertilizer": "Compost, farmyard manure, and green manure (like sunn hemp) are beneficial for sugarcane. Biofertilizers such as Azospirillum and phosphate-solubilizing bacteria can enhance growth and yield.",
        "soil_type": "Fertile, well-drained loamy soils with a neutral pH of 6.5-7.5 are ideal for sugarcane. Deep, rich soils with good water-holding capacity also support healthy growth.",
        "related_video": "how to do sugarcane organic farming"
      },
      {
        "name": "Cotton",
        "description": "Cotton is a fiber crop that forms the backbone of India's textile industry. Major cotton-growing states include Gujarat, Maharashtra, and Telangana. India is one of the largest producers of cotton globally.",
        "climatic_conditions": "Cotton requires a warm climate with temperatures between 25°C-35°C. It grows best with 50-100 cm of rainfall annually and plenty of sunshine during the growing season.",
        "organic_fertilizer": "Farmyard manure, compost, and vermicompost are suitable for cotton. Neem cake and phosphate-rich organic manure can also enhance soil fertility and crop yield.",
        "soil_type": "Black cotton soil, also known as regur soil, is ideal due to its moisture-retentive properties. Loamy soils with good drainage also support cotton cultivation.",
        "related_video": "https://www.youtube.com/watch?v=6Va9ckGklUA"
      },
      {
        "name": "Tea",
        "description": "Tea is a popular beverage crop in India, primarily grown in Assam, West Bengal, and Tamil Nadu. Indian tea is globally recognized for its quality and variety.",
        "climatic_conditions": "Tea requires a humid and tropical climate with temperatures between 20°C-30°C. It thrives in areas with an annual rainfall of 150-300 cm, well-distributed throughout the year.",
        "organic_fertilizer": "Compost, vermicompost, and organic nitrogen sources like neem cake are ideal. Organic mulching helps maintain soil moisture and nutrient levels.",
        "soil_type": "Acidic, well-drained soils rich in organic matter are best for tea. Red loamy soils with a pH range of 4.5-5.5 are particularly suitable.",
        "related_video": "https://www.youtube.com/watch?v=example5"
      }
    ]
  };
// Function to display crop information dynamically based on search query
function displayCropInfo(cropName) {
    const crop = cropData.crops.find(crop => crop.name.toLowerCase() === cropName.toLowerCase());

    if (crop) {
        const cropDetailsDiv = document.getElementById("crop-details");
        cropDetailsDiv.innerHTML = `
            <h2>${crop.name}</h2>
            <p><strong>Description:</strong> ${crop.description}</p>
            <p><strong>Climatic Conditions:</strong> ${crop.climatic_conditions}</p>
            <p><strong>Organic Fertilizers:</strong> ${crop.organic_fertilizer}</p>
            <p><strong>Soil Type:</strong> ${crop.soil_type}</p>
            <p><strong>Related Video:</strong> <a href="${crop.related_video}" target="_blank">Watch Video</a></p>
        `;
    } else {
        const cropDetailsDiv = document.getElementById("crop-details");
        cropDetailsDiv.innerHTML = `<p>Crop not found. Please check the spelling or search for another crop.</p>`;
    }
}

// Get the search query from the URL and display corresponding crop info
window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('search'); // Get the search query from the URL
    if (searchQuery) {
        displayCropInfo(searchQuery);
    }
};
  