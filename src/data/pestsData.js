const pestsData = [
    {
      id: 1,
      name: 'Aphids',
      image: 'pest/Aphids.jpg',
      description: 'Small, soft-bodied insects that suck plant sap.',
      cropsAffected: ['Wheat', 'Rice', 'Maize'],
      pesticides: ['Imidacloprid', 'Acetamiprid']
    },
    {
      id: 2,
      name: 'Caterpillar',
      image: 'pest/caterpillar.jpeg',
      description: 'Larval stage of butterflies and moths, known to chew leaves.',
      cropsAffected: ['Cotton', 'Tomato', 'Soybean'],
      pesticides: ['Bacillus thuringiensis', 'Spinosad']
    },
    {
      id: 3,
      name: 'Whiteflies',
      image: 'pest/Whiteflies.jpg',
      description: 'Tiny, sap-sucking insects that weaken plants.',
      cropsAffected: ['Tomato', 'Cabbage', 'Beans'],
      pesticides: ['Buprofezin', 'Thiamethoxam']
    },
    {
      id: 4,
      name: 'Cutworms',
      image: 'pest/cutworms.jpg',
      description: 'Caterpillars that cut down young plants at soil level.',
      cropsAffected: ['Corn', 'Lettuce', 'Potato'],
      pesticides: ['Carbaryl', 'Chlorpyrifos']
    },
    {
      id: 5,
      name: 'Thrips',
      image: 'pest/thrips.jpg',
      description: 'Tiny insects that puncture and feed on plant tissue.',
      cropsAffected: ['Onion', 'Tomato', 'Chilli'],
      pesticides: ['Spinosad', 'Abamectin']
    },
    {
      id: 6,
      name: 'Spider Mites',
      image: 'pest/spider_mites.jpg',
      description: 'Small arachnids that cause stippling and yellowing of leaves.',
      cropsAffected: ['Soybean', 'Apple', 'Cucumber'],
      pesticides: ['Bifenazate', 'Hexythiazox']
    },
    {
      id: 7,
      name: 'Leafhoppers',
      image: 'pest/leafhoppers.jpg',
      description: 'Sap-feeding pests that cause hopper burn on leaves.',
      cropsAffected: ['Sugarcane', 'Rice', 'Peach'],
      pesticides: ['Dimethoate', 'Malathion']
    },
    {
      id: 8,
      name: 'Grasshoppers',
      image: 'pest/grasshoppers.jpg',
      description: 'Large, jumping insects that chew on leaves and stems.',
      cropsAffected: ['Wheat', 'Corn', 'Alfalfa'],
      pesticides: ['Carbaryl', 'Malathion']
    },
    {
      id: 9,
      name: 'Armyworms',
      image: 'pest/armyworms.jpg',
      description: 'Caterpillars that feed on grass and cereals in large numbers.',
      cropsAffected: ['Wheat', 'Corn', 'Rice'],
      pesticides: ['Lambda-cyhalothrin', 'Chlorantraniliprole']
    },
    {
      id: 10,
      name: 'Mealybugs',
      image: 'pest/mealybugs.jpg',
      description: 'Soft-bodied pests that suck sap from plant tissues.',
      cropsAffected: ['Citrus', 'Grapes', 'Mango'],
      pesticides: ['Imidacloprid', 'Dimethoate']
    },
    {
      id: 11,
      name: 'Stem Borers',
      image: 'pest/stem_borers.jpg',
      description: 'Larvae that tunnel into stems and weaken plants.',
      cropsAffected: ['Rice', 'Sugarcane', 'Corn'],
      pesticides: ['Fipronil', 'Chlorantraniliprole']
    },
    {
      id: 12,
      name: 'Root-knot Nematodes',
      image: 'pest/root_knot_nematodes.jpg',
      description: 'Microscopic worms that cause root galls.',
      cropsAffected: ['Tomato', 'Carrot', 'Soybean'],
      pesticides: ['Oxamyl', 'Abamectin']
    },
    {
      id: 13,
      name: 'Fruit Flies',
      image: 'pest/fruit_flies.jpg',
      description: 'Small flies that lay eggs inside fruit, causing rot.',
      cropsAffected: ['Mango', 'Guava', 'Papaya'],
      pesticides: ['Spinosad', 'Malathion']
    },
    {
      id: 14,
      name: 'Jassids',
      image: 'pest/jassids.jpg',
      description: 'Sap-sucking insects that cause yellowing and curling of leaves.',
      cropsAffected: ['Cotton', 'Okra', 'Brinjal'],
      pesticides: ['Imidacloprid', 'Dimethoate']
    },
    {
      id: 15,
      name: 'Stem Weevils',
      image: 'pest/stem_weevils.jpg',
      description: 'Beetles that feed on and damage plant stems.',
      cropsAffected: ['Wheat', 'Rice', 'Maize'],
      pesticides: ['Chlorpyrifos', 'Lambda-cyhalothrin']
    },
    {
      id: 16,
      name: 'Scales',
      image: 'pest/scales.jpg',
      description: 'Insects that feed on plant sap and secrete a protective waxy coating.',
      cropsAffected: ['Citrus', 'Olive', 'Grapes'],
      pesticides: ['Malathion', 'Imidacloprid']
    },
    {
      id: 17,
      name: 'Flea Beetles',
      image: 'pest/flea_beetles.jpg',
      description: 'Small beetles that chew small holes in leaves.',
      cropsAffected: ['Potato', 'Eggplant', 'Corn'],
      pesticides: ['Spinosad', 'Carbaryl']
    },
    {
      id: 18,
      name: 'Corn Earworms',
      image: 'pest/corn_earworms.jpg',
      description: 'Caterpillars that feed on corn kernels.',
      cropsAffected: ['Corn', 'Tomato', 'Cotton'],
      pesticides: ['Spinosad', 'Carbaryl']
    },
    {
      id: 19,
      name: 'Cabbage Loopers',
      image: 'pest/cabbage_loopers.jpg',
      description: 'Caterpillars that feed on cruciferous vegetables.',
      cropsAffected: ['Cabbage', 'Broccoli', 'Cauliflower'],
      pesticides: ['Bacillus thuringiensis', 'Spinosad']
    },
    {
      id: 20,
      name: 'Tobacco Hornworms',
      image: 'pest/tobacco_hornworms.jpg',
      description: 'Large, green caterpillars that feed on leaves of solanaceous crops.',
      cropsAffected: ['Tomato', 'Pepper', 'Eggplant'],
      pesticides: ['Bacillus thuringiensis', 'Spinosad']
    }
  ];
  
  export default pestsData;
  