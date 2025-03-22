
// Supplier data
export interface Supplier {
  id: string;
  name: string;
  location: {
    city: string;
    country: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  riskScore: number;
  riskLevel: 'Low' | 'Medium' | 'High' | 'Critical';
  riskFactors: {
    type: string;
    score: number;
    description: string;
  }[];
  products: string[];
  leadTime: number;
  reliabilityScore: number;
  lastDelivery: string;
  onTimeDeliveryRate: number;
  contactInfo: {
    name: string;
    email: string;
    phone: string;
  };
  financialHealth: 'Excellent' | 'Good' | 'Fair' | 'Poor';
  geopoliticalRisk: number;
  weatherRisk: number;
  transportationRisk: number;
}

export const suppliers: Supplier[] = [
  {
    id: 's001',
    name: 'Shanghai Electronics Manufacturing',
    location: {
      city: 'Shanghai',
      country: 'China',
      coordinates: {
        lat: 31.2304,
        lng: 121.4737,
      },
    },
    riskScore: 72,
    riskLevel: 'High',
    riskFactors: [
      {
        type: 'Geopolitical',
        score: 85,
        description: 'Trade tensions affecting export regulations',
      },
      {
        type: 'Transportation',
        score: 60,
        description: 'Port congestion causing delays',
      },
      {
        type: 'Financial',
        score: 45,
        description: 'Moderate debt levels',
      },
    ],
    products: ['Circuit Boards', 'Processors', 'Memory Modules'],
    leadTime: 45,
    reliabilityScore: 78,
    lastDelivery: '2023-11-15',
    onTimeDeliveryRate: 82,
    contactInfo: {
      name: 'Wei Zhang',
      email: 'wei.zhang@shanghaielectronics.com',
      phone: '+86 21 1234 5678',
    },
    financialHealth: 'Good',
    geopoliticalRisk: 85,
    weatherRisk: 35,
    transportationRisk: 60,
  },
  {
    id: 's002',
    name: 'German Precision Parts',
    location: {
      city: 'Munich',
      country: 'Germany',
      coordinates: {
        lat: 48.1351,
        lng: 11.5820,
      },
    },
    riskScore: 28,
    riskLevel: 'Low',
    riskFactors: [
      {
        type: 'Financial',
        score: 25,
        description: 'Strong financial position',
      },
      {
        type: 'Weather',
        score: 30,
        description: 'Minimal weather-related disruptions',
      },
      {
        type: 'Transportation',
        score: 30,
        description: 'Efficient logistics network',
      },
    ],
    products: ['Precision Gears', 'Metallic Components', 'Industrial Fasteners'],
    leadTime: 21,
    reliabilityScore: 95,
    lastDelivery: '2023-12-05',
    onTimeDeliveryRate: 97,
    contactInfo: {
      name: 'Klaus Mueller',
      email: 'k.mueller@germanprecision.de',
      phone: '+49 89 9876 5432',
    },
    financialHealth: 'Excellent',
    geopoliticalRisk: 15,
    weatherRisk: 30,
    transportationRisk: 20,
  },
  {
    id: 's003',
    name: 'Brazilian Textiles Inc.',
    location: {
      city: 'São Paulo',
      country: 'Brazil',
      coordinates: {
        lat: -23.5505,
        lng: -46.6333,
      },
    },
    riskScore: 63,
    riskLevel: 'Medium',
    riskFactors: [
      {
        type: 'Weather',
        score: 70,
        description: 'Seasonal flooding affecting production',
      },
      {
        type: 'Transportation',
        score: 65,
        description: 'Infrastructure challenges during rainy season',
      },
      {
        type: 'Financial',
        score: 55,
        description: 'Currency volatility impact',
      },
    ],
    products: ['Cotton Fabrics', 'Synthetic Materials', 'Garment Components'],
    leadTime: 32,
    reliabilityScore: 81,
    lastDelivery: '2023-11-28',
    onTimeDeliveryRate: 85,
    contactInfo: {
      name: 'Ana Oliveira',
      email: 'ana.oliveira@braziltextiles.com',
      phone: '+55 11 9876 5432',
    },
    financialHealth: 'Good',
    geopoliticalRisk: 40,
    weatherRisk: 70,
    transportationRisk: 65,
  },
  {
    id: 's004',
    name: 'Indian Software Solutions',
    location: {
      city: 'Bangalore',
      country: 'India',
      coordinates: {
        lat: 12.9716,
        lng: 77.5946,
      },
    },
    riskScore: 45,
    riskLevel: 'Medium',
    riskFactors: [
      {
        type: 'Infrastructure',
        score: 60,
        description: 'Power outages affecting operations',
      },
      {
        type: 'Political',
        score: 35,
        description: 'Stable political environment',
      },
      {
        type: 'Cybersecurity',
        score: 50,
        description: 'Moderate cybersecurity vulnerabilities',
      },
    ],
    products: ['Software Development', 'IT Support', 'Data Analysis'],
    leadTime: 14,
    reliabilityScore: 87,
    lastDelivery: '2023-12-10',
    onTimeDeliveryRate: 90,
    contactInfo: {
      name: 'Rajiv Patel',
      email: 'r.patel@indiansoftware.com',
      phone: '+91 80 1234 5678',
    },
    financialHealth: 'Good',
    geopoliticalRisk: 35,
    weatherRisk: 45,
    transportationRisk: 30,
  },
  {
    id: 's005',
    name: 'Mexican Automotive Components',
    location: {
      city: 'Monterrey',
      country: 'Mexico',
      coordinates: {
        lat: 25.6866,
        lng: -100.3161,
      },
    },
    riskScore: 52,
    riskLevel: 'Medium',
    riskFactors: [
      {
        type: 'Security',
        score: 65,
        description: 'Regional security concerns',
      },
      {
        type: 'Transportation',
        score: 45,
        description: 'Border crossing delays',
      },
      {
        type: 'Financial',
        score: 40,
        description: 'Stable financial outlook',
      },
    ],
    products: ['Car Parts', 'Engine Components', 'Electrical Systems'],
    leadTime: 18,
    reliabilityScore: 84,
    lastDelivery: '2023-12-02',
    onTimeDeliveryRate: 88,
    contactInfo: {
      name: 'Carlos Rodriguez',
      email: 'c.rodriguez@mexauto.mx',
      phone: '+52 81 9876 5432',
    },
    financialHealth: 'Good',
    geopoliticalRisk: 50,
    weatherRisk: 30,
    transportationRisk: 45,
  },
  {
    id: 's006',
    name: 'Silicon Valley Tech',
    location: {
      city: 'San Jose',
      country: 'United States',
      coordinates: {
        lat: 37.3382,
        lng: -121.8863,
      },
    },
    riskScore: 32,
    riskLevel: 'Low',
    riskFactors: [
      {
        type: 'Financial',
        score: 25,
        description: 'Strong financial stability',
      },
      {
        type: 'Labor',
        score: 45,
        description: 'Competitive talent market',
      },
      {
        type: 'Cybersecurity',
        score: 30,
        description: 'Robust security protocols',
      },
    ],
    products: ['Microchips', 'Sensors', 'Advanced Computing Modules'],
    leadTime: 35,
    reliabilityScore: 92,
    lastDelivery: '2023-12-08',
    onTimeDeliveryRate: 94,
    contactInfo: {
      name: 'Emily Chen',
      email: 'e.chen@svtech.com',
      phone: '+1 408 555 1234',
    },
    financialHealth: 'Excellent',
    geopoliticalRisk: 20,
    weatherRisk: 25,
    transportationRisk: 15,
  },
  {
    id: 's007',
    name: 'Japanese Robotics Corp',
    location: {
      city: 'Osaka',
      country: 'Japan',
      coordinates: {
        lat: 34.6937,
        lng: 135.5023,
      },
    },
    riskScore: 38,
    riskLevel: 'Low',
    riskFactors: [
      {
        type: 'Natural Disaster',
        score: 70,
        description: 'Earthquake zone location',
      },
      {
        type: 'Financial',
        score: 20,
        description: 'Excellent financial position',
      },
      {
        type: 'Transportation',
        score: 25,
        description: 'Efficient logistics systems',
      },
    ],
    products: ['Industrial Robots', 'Automation Systems', 'Robotic Components'],
    leadTime: 40,
    reliabilityScore: 91,
    lastDelivery: '2023-11-30',
    onTimeDeliveryRate: 93,
    contactInfo: {
      name: 'Takashi Yamamoto',
      email: 't.yamamoto@japanrobotics.jp',
      phone: '+81 6 1234 5678',
    },
    financialHealth: 'Excellent',
    geopoliticalRisk: 25,
    weatherRisk: 70,
    transportationRisk: 25,
  },
  {
    id: 's008',
    name: 'Australian Mining Supplies',
    location: {
      city: 'Perth',
      country: 'Australia',
      coordinates: {
        lat: -31.9505,
        lng: 115.8605,
      },
    },
    riskScore: 48,
    riskLevel: 'Medium',
    riskFactors: [
      {
        type: 'Weather',
        score: 60,
        description: 'Extreme heat affecting operations',
      },
      {
        type: 'Transportation',
        score: 45,
        description: 'Long distance shipping delays',
      },
      {
        type: 'Labor',
        score: 40,
        description: 'Occasional labor disputes',
      },
    ],
    products: ['Mining Equipment', 'Safety Gear', 'Industrial Tools'],
    leadTime: 50,
    reliabilityScore: 85,
    lastDelivery: '2023-11-20',
    onTimeDeliveryRate: 86,
    contactInfo: {
      name: 'Sarah Johnson',
      email: 's.johnson@ausminining.com.au',
      phone: '+61 8 9876 5432',
    },
    financialHealth: 'Good',
    geopoliticalRisk: 20,
    weatherRisk: 60,
    transportationRisk: 45,
  },
  {
    id: 's009',
    name: 'Canadian Lumber Industries',
    location: {
      city: 'Vancouver',
      country: 'Canada',
      coordinates: {
        lat: 49.2827,
        lng: -123.1207,
      },
    },
    riskScore: 35,
    riskLevel: 'Low',
    riskFactors: [
      {
        type: 'Weather',
        score: 45,
        description: 'Seasonal snowstorms',
      },
      {
        type: 'Environmental',
        score: 30,
        description: 'Strong sustainability practices',
      },
      {
        type: 'Transportation',
        score: 35,
        description: 'Well-developed logistics network',
      },
    ],
    products: ['Timber', 'Wood Panels', 'Construction Materials'],
    leadTime: 25,
    reliabilityScore: 90,
    lastDelivery: '2023-12-07',
    onTimeDeliveryRate: 92,
    contactInfo: {
      name: 'Michael Thompson',
      email: 'm.thompson@canadianlumber.ca',
      phone: '+1 604 555 7890',
    },
    financialHealth: 'Excellent',
    geopoliticalRisk: 15,
    weatherRisk: 45,
    transportationRisk: 35,
  },
  {
    id: 's010',
    name: 'South African Materials Corp',
    location: {
      city: 'Johannesburg',
      country: 'South Africa',
      coordinates: {
        lat: -26.2041,
        lng: 28.0473,
      },
    },
    riskScore: 85,
    riskLevel: 'Critical',
    riskFactors: [
      {
        type: 'Political',
        score: 75,
        description: 'Political instability concerns',
      },
      {
        type: 'Infrastructure',
        score: 85,
        description: 'Power grid reliability issues',
      },
      {
        type: 'Security',
        score: 80,
        description: 'Regional security concerns',
      },
    ],
    products: ['Raw Materials', 'Metal Components', 'Industrial Supplies'],
    leadTime: 38,
    reliabilityScore: 65,
    lastDelivery: '2023-11-10',
    onTimeDeliveryRate: 72,
    contactInfo: {
      name: 'Nelson Mbeki',
      email: 'n.mbeki@samaterials.co.za',
      phone: '+27 11 987 6543',
    },
    financialHealth: 'Fair',
    geopoliticalRisk: 75,
    weatherRisk: 40,
    transportationRisk: 70,
  }
];

// Logistics data
export interface LogisticsRoute {
  id: string;
  name: string;
  origin: {
    name: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  destination: {
    name: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  distance: number;
  transportMode: 'Air' | 'Sea' | 'Road' | 'Rail' | 'Multimodal';
  estimatedTime: number; // in days
  currentDelay: number; // in days
  delayReason?: string;
  riskScore: number;
  riskLevel: 'Low' | 'Medium' | 'High' | 'Critical';
  transitPoints: {
    name: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    delayProbability: number;
  }[];
  weatherImpact: number;
  politicalRisk: number;
  costPerUnit: number;
  carbonEmissions: number;
  trackingAvailable: boolean;
}

export const logisticsRoutes: LogisticsRoute[] = [
  {
    id: 'r001',
    name: 'Shanghai to Los Angeles',
    origin: {
      name: 'Shanghai, China',
      coordinates: {
        lat: 31.2304,
        lng: 121.4737,
      },
    },
    destination: {
      name: 'Los Angeles, USA',
      coordinates: {
        lat: 34.0522,
        lng: -118.2437,
      },
    },
    distance: 10913,
    transportMode: 'Sea',
    estimatedTime: 18,
    currentDelay: 3.5,
    delayReason: 'Port congestion at Los Angeles',
    riskScore: 72,
    riskLevel: 'High',
    transitPoints: [
      {
        name: 'Taiwan Strait',
        coordinates: {
          lat: 24.2582,
          lng: 119.7732,
        },
        delayProbability: 0.25,
      },
      {
        name: 'South China Sea',
        coordinates: {
          lat: 13.9833,
          lng: 115.5833,
        },
        delayProbability: 0.15,
      },
      {
        name: 'Pacific Ocean Crossing',
        coordinates: {
          lat: 25.0000,
          lng: -145.0000,
        },
        delayProbability: 0.10,
      },
    ],
    weatherImpact: 65,
    politicalRisk: 70,
    costPerUnit: 2.35,
    carbonEmissions: 72.5,
    trackingAvailable: true,
  },
  {
    id: 'r002',
    name: 'Rotterdam to New York',
    origin: {
      name: 'Rotterdam, Netherlands',
      coordinates: {
        lat: 51.9244,
        lng: 4.4777,
      },
    },
    destination: {
      name: 'New York, USA',
      coordinates: {
        lat: 40.7128,
        lng: -74.0060,
      },
    },
    distance: 6229,
    transportMode: 'Sea',
    estimatedTime: 11,
    currentDelay: 0.5,
    riskScore: 28,
    riskLevel: 'Low',
    transitPoints: [
      {
        name: 'English Channel',
        coordinates: {
          lat: 50.5000,
          lng: -1.0000,
        },
        delayProbability: 0.05,
      },
      {
        name: 'North Atlantic Crossing',
        coordinates: {
          lat: 45.0000,
          lng: -30.0000,
        },
        delayProbability: 0.20,
      },
    ],
    weatherImpact: 45,
    politicalRisk: 10,
    costPerUnit: 1.95,
    carbonEmissions: 58.2,
    trackingAvailable: true,
  },
  {
    id: 'r003',
    name: 'Dubai to Mumbai',
    origin: {
      name: 'Dubai, UAE',
      coordinates: {
        lat: 25.2048,
        lng: 55.2708,
      },
    },
    destination: {
      name: 'Mumbai, India',
      coordinates: {
        lat: 19.0760,
        lng: 72.8777,
      },
    },
    distance: 1935,
    transportMode: 'Sea',
    estimatedTime: 5,
    currentDelay: 2,
    delayReason: 'Customs clearance issues',
    riskScore: 45,
    riskLevel: 'Medium',
    transitPoints: [
      {
        name: 'Arabian Sea',
        coordinates: {
          lat: 22.0000,
          lng: 64.0000,
        },
        delayProbability: 0.12,
      },
    ],
    weatherImpact: 35,
    politicalRisk: 40,
    costPerUnit: 1.45,
    carbonEmissions: 32.6,
    trackingAvailable: true,
  },
  {
    id: 'r004',
    name: 'Frankfurt to Paris',
    origin: {
      name: 'Frankfurt, Germany',
      coordinates: {
        lat: 50.1109,
        lng: 8.6821,
      },
    },
    destination: {
      name: 'Paris, France',
      coordinates: {
        lat: 48.8566,
        lng: 2.3522,
      },
    },
    distance: 479,
    transportMode: 'Road',
    estimatedTime: 1,
    currentDelay: 0,
    riskScore: 15,
    riskLevel: 'Low',
    transitPoints: [
      {
        name: 'Saarbrücken Border',
        coordinates: {
          lat: 49.2354,
          lng: 6.9968,
        },
        delayProbability: 0.08,
      },
    ],
    weatherImpact: 20,
    politicalRisk: 5,
    costPerUnit: 0.85,
    carbonEmissions: 18.4,
    trackingAvailable: true,
  },
  {
    id: 'r005',
    name: 'Singapore to Jakarta',
    origin: {
      name: 'Singapore',
      coordinates: {
        lat: 1.3521,
        lng: 103.8198,
      },
    },
    destination: {
      name: 'Jakarta, Indonesia',
      coordinates: {
        lat: -6.2088,
        lng: 106.8456,
      },
    },
    distance: 878,
    transportMode: 'Sea',
    estimatedTime: 3,
    currentDelay: 1,
    delayReason: 'Port congestion at Jakarta',
    riskScore: 38,
    riskLevel: 'Medium',
    transitPoints: [
      {
        name: 'Strait of Malacca',
        coordinates: {
          lat: 2.7500,
          lng: 101.7000,
        },
        delayProbability: 0.15,
      },
    ],
    weatherImpact: 55,
    politicalRisk: 25,
    costPerUnit: 0.95,
    carbonEmissions: 22.8,
    trackingAvailable: true,
  },
  {
    id: 'r006',
    name: 'Mexico City to Chicago',
    origin: {
      name: 'Mexico City, Mexico',
      coordinates: {
        lat: 19.4326,
        lng: -99.1332,
      },
    },
    destination: {
      name: 'Chicago, USA',
      coordinates: {
        lat: 41.8781,
        lng: -87.6298,
      },
    },
    distance: 3057,
    transportMode: 'Multimodal',
    estimatedTime: 7,
    currentDelay: 1.5,
    delayReason: 'Border processing delays',
    riskScore: 52,
    riskLevel: 'Medium',
    transitPoints: [
      {
        name: 'Laredo Border',
        coordinates: {
          lat: 27.5036,
          lng: -99.5072,
        },
        delayProbability: 0.35,
      },
      {
        name: 'Dallas Distribution Center',
        coordinates: {
          lat: 32.7767,
          lng: -96.7970,
        },
        delayProbability: 0.10,
      },
    ],
    weatherImpact: 30,
    politicalRisk: 35,
    costPerUnit: 1.65,
    carbonEmissions: 45.2,
    trackingAvailable: true,
  },
  {
    id: 'r007',
    name: 'Tokyo to Seoul',
    origin: {
      name: 'Tokyo, Japan',
      coordinates: {
        lat: 35.6762,
        lng: 139.6503,
      },
    },
    destination: {
      name: 'Seoul, South Korea',
      coordinates: {
        lat: 37.5665,
        lng: 126.9780,
      },
    },
    distance: 1160,
    transportMode: 'Air',
    estimatedTime: 0.5,
    currentDelay: 0,
    riskScore: 18,
    riskLevel: 'Low',
    transitPoints: [],
    weatherImpact: 25,
    politicalRisk: 15,
    costPerUnit: 3.25,
    carbonEmissions: 65.3,
    trackingAvailable: true,
  },
  {
    id: 'r008',
    name: 'São Paulo to Buenos Aires',
    origin: {
      name: 'São Paulo, Brazil',
      coordinates: {
        lat: -23.5505,
        lng: -46.6333,
      },
    },
    destination: {
      name: 'Buenos Aires, Argentina',
      coordinates: {
        lat: -34.6037,
        lng: -58.3816,
      },
    },
    distance: 1698,
    transportMode: 'Road',
    estimatedTime: 4,
    currentDelay: 0.5,
    riskScore: 42,
    riskLevel: 'Medium',
    transitPoints: [
      {
        name: 'Uruguay Border',
        coordinates: {
          lat: -30.2059,
          lng: -57.6173,
        },
        delayProbability: 0.20,
      },
    ],
    weatherImpact: 40,
    politicalRisk: 30,
    costPerUnit: 1.35,
    carbonEmissions: 38.7,
    trackingAvailable: false,
  },
  {
    id: 'r009',
    name: 'Sydney to Auckland',
    origin: {
      name: 'Sydney, Australia',
      coordinates: {
        lat: -33.8688,
        lng: 151.2093,
      },
    },
    destination: {
      name: 'Auckland, New Zealand',
      coordinates: {
        lat: -36.8509,
        lng: 174.7645,
      },
    },
    distance: 2155,
    transportMode: 'Sea',
    estimatedTime: 5,
    currentDelay: 0,
    riskScore: 22,
    riskLevel: 'Low',
    transitPoints: [
      {
        name: 'Tasman Sea',
        coordinates: {
          lat: -35.0000,
          lng: 162.0000,
        },
        delayProbability: 0.18,
      },
    ],
    weatherImpact: 35,
    politicalRisk: 5,
    costPerUnit: 1.25,
    carbonEmissions: 28.5,
    trackingAvailable: true,
  },
  {
    id: 'r010',
    name: 'Johannesburg to Cape Town',
    origin: {
      name: 'Johannesburg, South Africa',
      coordinates: {
        lat: -26.2041,
        lng: 28.0473,
      },
    },
    destination: {
      name: 'Cape Town, South Africa',
      coordinates: {
        lat: -33.9249,
        lng: 18.4241,
      },
    },
    distance: 1398,
    transportMode: 'Rail',
    estimatedTime: 2,
    currentDelay: 0.8,
    delayReason: 'Infrastructure maintenance',
    riskScore: 35,
    riskLevel: 'Medium',
    transitPoints: [
      {
        name: 'Bloemfontein Junction',
        coordinates: {
          lat: -29.0852,
          lng: 26.1596,
        },
        delayProbability: 0.15,
      },
    ],
    weatherImpact: 20,
    politicalRisk: 30,
    costPerUnit: 0.95,
    carbonEmissions: 22.3,
    trackingAvailable: false,
  }
];

// Risk alerts
export interface Alert {
  id: string;
  title: string;
  description: string;
  type: 'Supplier' | 'Logistics' | 'Financial' | 'Weather' | 'Political' | 'Security';
  severity: 'Low' | 'Medium' | 'High' | 'Critical';
  date: string;
  impact: {
    financial: number; // Estimated financial impact in thousands
    timeDelay: number; // Estimated delay in days
    affectedItems: string[]; // Products or routes affected
  };
  status: 'New' | 'Monitoring' | 'Resolved';
  resolution?: string;
  relatedSuppliers?: string[];
  relatedRoutes?: string[];
  recommendedActions: string[];
  aiAnalysis: string;
  creator: 'AI' | 'System' | 'User';
}

export const alerts: Alert[] = [
  {
    id: 'a001',
    title: 'Critical port congestion at Los Angeles',
    description: 'Severe congestion at Los Angeles port affecting all incoming shipments. Current wait times exceeding 7 days.',
    type: 'Logistics',
    severity: 'High',
    date: '2023-12-05',
    impact: {
      financial: 125,
      timeDelay: 7,
      affectedItems: ['Electronics', 'Consumer Goods', 'Industrial Equipment'],
    },
    status: 'Monitoring',
    relatedRoutes: ['r001'],
    recommendedActions: [
      'Reroute critical shipments to alternative ports',
      'Prioritize high-value goods',
      'Update customers about potential delays',
    ],
    aiAnalysis: 'Historical patterns indicate this congestion may last 2-3 weeks. Consider air freight for time-sensitive items to minimize production impacts.',
    creator: 'AI',
  },
  {
    id: 'a002',
    title: 'Financial instability detected with supplier',
    description: 'Financial analysis indicates South African Materials Corp shows signs of liquidity problems that may affect operations.',
    type: 'Financial',
    severity: 'Critical',
    date: '2023-12-08',
    impact: {
      financial: 280,
      timeDelay: 14,
      affectedItems: ['Raw Materials', 'Metal Components'],
    },
    status: 'New',
    relatedSuppliers: ['s010'],
    recommendedActions: [
      'Secure alternative suppliers immediately',
      'Increase safety stock for affected materials',
      'Request financial assurances or prepayment terms',
    ],
    aiAnalysis: 'Company financials show 40% probability of major disruption within 30 days. Recommend immediate action to mitigate supply risks.',
    creator: 'AI',
  },
  {
    id: 'a003',
    title: 'Severe weather alert affecting shipping routes',
    description: 'Typhoon approaching South China Sea with winds exceeding 100 mph, expected to disrupt shipping for 3-5 days.',
    type: 'Weather',
    severity: 'High',
    date: '2023-12-09',
    impact: {
      financial: 95,
      timeDelay: 5,
      affectedItems: ['All Asian shipping routes', 'Electronics'],
    },
    status: 'Monitoring',
    relatedRoutes: ['r001', 'r005'],
    relatedSuppliers: ['s001'],
    recommendedActions: [
      'Halt shipments until storm passes',
      'Notify stakeholders of potential delays',
      'Calculate inventory impact and adjust production schedules',
    ],
    aiAnalysis: 'Weather models predict storm will peak on Dec 11-12. Historical data suggests full resumption of shipping 48 hours after storm passes.',
    creator: 'AI',
  },
  {
    id: 'a004',
    title: 'New trade restrictions announced',
    description: 'Government has announced new export controls on semiconductor technology affecting Chinese suppliers.',
    type: 'Political',
    severity: 'Medium',
    date: '2023-12-04',
    impact: {
      financial: 150,
      timeDelay: 21,
      affectedItems: ['Circuit Boards', 'Processors'],
    },
    status: 'New',
    relatedSuppliers: ['s001'],
    recommendedActions: [
      'Consult legal team on compliance requirements',
      'Identify alternative sourcing options',
      'Accelerate orders before restrictions take effect',
    ],
    aiAnalysis: 'Political tensions expected to continue. Historical precedent suggests 60% chance of further restrictions within 90 days.',
    creator: 'AI',
  },
  {
    id: 'a005',
    title: 'Production line shutdown at supplier',
    description: 'Shanghai Electronics Manufacturing has reported an unexpected equipment failure affecting 30% of production capacity.',
    type: 'Supplier',
    severity: 'Medium',
    date: '2023-12-07',
    impact: {
      financial: 75,
      timeDelay: 10,
      affectedItems: ['Circuit Boards', 'Memory Modules'],
    },
    status: 'Monitoring',
    relatedSuppliers: ['s001'],
    recommendedActions: [
      'Request daily updates on repair progress',
      'Shift orders to alternative suppliers if available',
      'Prioritize inventory allocation to critical products',
    ],
    aiAnalysis: 'Based on repair timelines provided, full production capacity expected to resume by Dec 18. Recommend securing 15% additional inventory to buffer impact.',
    creator: 'System',
  },
  {
    id: 'a006',
    title: 'Labor strike at transportation hub',
    description: 'Workers at Laredo border crossing have announced a 48-hour strike affecting all cross-border shipments.',
    type: 'Logistics',
    severity: 'Medium',
    date: '2023-12-10',
    impact: {
      financial: 60,
      timeDelay: 3,
      affectedItems: ['Mexico-US routes'],
    },
    status: 'New',
    relatedRoutes: ['r006'],
    recommendedActions: [
      'Reroute urgent shipments to alternative crossings',
      'Delay non-critical shipments until strike ends',
      'Monitor for potential strike extension',
    ],
    aiAnalysis: 'Similar past strikes have typically been resolved within the announced timeframe. However, continue monitoring labor negotiations for potential extensions.',
    creator: 'AI',
  },
  {
    id: 'a007',
    title: 'Security incident near distribution center',
    description: 'Civil unrest reported near Johannesburg distribution hub, causing security concerns for shipments.',
    type: 'Security',
    severity: 'High',
    date: '2023-12-06',
    impact: {
      financial: 45,
      timeDelay: 4,
      affectedItems: ['Raw Materials', 'Metal Components'],
    },
    status: 'Monitoring',
    relatedSuppliers: ['s010'],
    relatedRoutes: ['r010'],
    recommendedActions: [
      'Temporarily halt shipments to affected area',
      'Increase security measures for in-transit goods',
      'Prepare for possible relocation of inventory to secure facilities',
    ],
    aiAnalysis: 'Local security reports indicate situation may stabilize within 72 hours. Recommend maintaining higher security protocols for at least 10 days after resolution.',
    creator: 'System',
  },
  {
    id: 'a008',
    title: 'Quality control issue detected',
    description: 'Batch testing has revealed quality inconsistencies from Brazilian Textiles affecting 15% of recent shipments.',
    type: 'Supplier',
    severity: 'Medium',
    date: '2023-12-03',
    impact: {
      financial: 35,
      timeDelay: 7,
      affectedItems: ['Cotton Fabrics', 'Synthetic Materials'],
    },
    status: 'Resolved',
    resolution: 'Supplier implemented corrective actions and replaced defective materials',
    relatedSuppliers: ['s003'],
    recommendedActions: [
      'Implement additional quality checks for next 3 shipments',
      'Review supplier quality assurance processes',
      'Document issue for future contract negotiations',
    ],
    aiAnalysis: 'Root cause identified as temporary issue with new equipment. Historical data suggests low probability of recurrence based on supplier's rapid response.',
    creator: 'System',
  }
];

// Scenario planning data
export interface ScenarioModel {
  id: string;
  name: string;
  description: string;
  variables: {
    name: string;
    currentValue: number;
    possibleRange: [number, number];
    unit: string;
    impact: 'Low' | 'Medium' | 'High';
  }[];
  outcomes: {
    name: string;
    description: string;
    probability: number;
    financialImpact: number;
    timeImpact: number;
    riskLevel: 'Low' | 'Medium' | 'High' | 'Critical';
    mitigationStrategies: string[];
  }[];
  suppliers: string[];
  products: string[];
  createdAt: string;
  lastRun: string;
  createdBy: string;
}

export const scenarioModels: ScenarioModel[] = [
  {
    id: 'sc001',
    name: 'Chinese Supplier Disruption',
    description: 'Analysis of potential impacts from disruptions to Chinese electronics suppliers due to geopolitical or natural factors.',
    variables: [
      {
        name: 'Shipping Delay',
        currentValue: 5,
        possibleRange: [0, 30],
        unit: 'days',
        impact: 'High',
      },
      {
        name: 'Price Increase',
        currentValue: 10,
        possibleRange: [0, 50],
        unit: 'percent',
        impact: 'Medium',
      },
      {
        name: 'Supply Reduction',
        currentValue: 25,
        possibleRange: [0, 100],
        unit: 'percent',
        impact: 'High',
      },
      {
        name: 'Quality Degradation',
        currentValue: 5,
        possibleRange: [0, 30],
        unit: 'percent',
        impact: 'Medium',
      },
    ],
    outcomes: [
      {
        name: 'Minor Disruption',
        description: 'Short-term delays and small price increases manageable within current buffers',
        probability: 0.35,
        financialImpact: 125000,
        timeImpact: 7,
        riskLevel: 'Low',
        mitigationStrategies: [
          'Use safety stock to cover shortfalls',
          'Accept slight delays in production schedule',
          'Temporarily absorb increased costs',
        ],
      },
      {
        name: 'Moderate Disruption',
        description: 'Significant delays and price increases requiring operational adjustments',
        probability: 0.45,
        financialImpact: 450000,
        timeImpact: 21,
        riskLevel: 'Medium',
        mitigationStrategies: [
          'Activate secondary suppliers for critical components',
          'Adjust production schedules to prioritize high-margin products',
          'Negotiate expedited shipping for crucial items',
          'Pass some cost increases to customers',
        ],
      },
      {
        name: 'Severe Disruption',
        description: 'Major supply chain breakdown requiring significant intervention',
        probability: 0.20,
        financialImpact: 1250000,
        timeImpact: 45,
        riskLevel: 'Critical',
        mitigationStrategies: [
          'Activate all alternative suppliers regardless of cost',
          'Redesign products to use available components',
          'Implement customer allocation system for limited supply',
          'Consider temporary production shutdown of less profitable lines',
        ],
      },
    ],
    suppliers: ['s001'],
    products: ['Circuit Boards', 'Processors', 'Memory Modules'],
    createdAt: '2023-11-15',
    lastRun: '2023-12-08',
    createdBy: 'AI Risk Engine',
  },
  {
    id: 'sc002',
    name: 'Supply Chain Logistics Disruption',
    description: 'Impact analysis of global shipping disruptions on product delivery and costs.',
    variables: [
      {
        name: 'Container Cost Increase',
        currentValue: 35,
        possibleRange: [0, 300],
        unit: 'percent',
        impact: 'High',
      },
      {
        name: 'Port Delay',
        currentValue: 7,
        possibleRange: [0, 45],
        unit: 'days',
        impact: 'High',
      },
      {
        name: 'Shipping Capacity Reduction',
        currentValue: 15,
        possibleRange: [0, 75],
        unit: 'percent',
        impact: 'Medium',
      },
      {
        name: 'Alternative Route Cost',
        currentValue: 65,
        possibleRange: [0, 200],
        unit: 'percent',
        impact: 'Medium',
      },
    ],
    outcomes: [
      {
        name: 'Brief Logistics Disruption',
        description: 'Temporary delays and cost increases manageable with minimal intervention',
        probability: 0.25,
        financialImpact: 180000,
        timeImpact: 10,
        riskLevel: 'Low',
        mitigationStrategies: [
          'Accept slightly longer lead times',
          'Use expedited shipping selectively for critical items',
          'Temporarily absorb increased costs',
        ],
      },
      {
        name: 'Extended Logistics Disruption',
        description: 'Sustained logistics challenges requiring strategic changes',
        probability: 0.55,
        financialImpact: 750000,
        timeImpact: 30,
        riskLevel: 'High',
        mitigationStrategies: [
          'Renegotiate delivery terms with customers',
          'Shift to alternative ports/routes',
          'Consider air freight for high-value items',
          'Implement temporary surcharges',
        ],
      },
      {
        name: 'Complete Route Shutdown',
        description: 'Total loss of primary logistics routes requiring major changes',
        probability: 0.20,
        financialImpact: 2100000,
        timeImpact: 60,
        riskLevel: 'Critical',
        mitigationStrategies: [
          'Activate emergency logistics network',
          'Shift production to local facilities where possible',
          'Implement allocation system for limited transportation capacity',
          'Renegotiate all supplier and customer contracts',
        ],
      },
    ],
    suppliers: ['s001', 's002', 's003'],
    products: ['All Products'],
    createdAt: '2023-11-20',
    lastRun: '2023-12-09',
    createdBy: 'AI Risk Engine',
  },
  {
    id: 'sc003',
    name: 'Geopolitical Risk Assessment',
    description: 'Analysis of potential impacts from international trade tensions and policy changes.',
    variables: [
      {
        name: 'Tariff Increase',
        currentValue: 15,
        possibleRange: [0, 100],
        unit: 'percent',
        impact: 'High',
      },
      {
        name: 'Export Restrictions',
        currentValue: 20,
        possibleRange: [0, 100],
        unit: 'percent',
        impact: 'High',
      },
      {
        name: 'Currency Fluctuation',
        currentValue: 8,
        possibleRange: [-30, 30],
        unit: 'percent',
        impact: 'Medium',
      },
      {
        name: 'Documentation Delay',
        currentValue: 5,
        possibleRange: [0, 30],
        unit: 'days',
        impact: 'Low',
      },
    ],
    outcomes: [
      {
        name: 'Policy Adjustment',
        description: 'Minor policy changes requiring procedural updates',
        probability: 0.40,
        financialImpact: 95000,
        timeImpact: 14,
        riskLevel: 'Low',
        mitigationStrategies: [
          'Update compliance procedures',
          'Absorb minor cost increases',
          'Maintain current supplier relationships',
        ],
      },
      {
        name: 'Trade Restrictions',
        description: 'Significant trade barriers requiring supply chain adjustments',
        probability: 0.35,
        financialImpact: 850000,
        timeImpact: 90,
        riskLevel: 'High',
        mitigationStrategies: [
          'Diversify supplier base to new regions',
          'Stockpile affected materials',
          'Develop local alternatives',
          'Revise pricing strategy',
        ],
      },
      {
        name: 'Complete Market Closure',
        description: 'Total loss of market access requiring major restructuring',
        probability: 0.25,
        financialImpact: 3500000,
        timeImpact: 180,
        riskLevel: 'Critical',
        mitigationStrategies: [
          'Exit affected markets',
          'Relocate production facilities',
          'Complete supply chain redesign',
          'Develop new market strategy',
        ],
      },
    ],
    suppliers: ['s001', 's010'],
    products: ['Electronics', 'Raw Materials'],
    createdAt: '2023-11-25',
    lastRun: '2023-12-07',
    createdBy: 'AI Risk Engine',
  },
  {
    id: 'sc004',
    name: 'Natural Disaster Impact',
    description: 'Assessment of supply chain resilience to major natural disasters in key regions.',
    variables: [
      {
        name: 'Facility Damage',
        currentValue: 40,
        possibleRange: [0, 100],
        unit: 'percent',
        impact: 'High',
      },
      {
        name: 'Recovery Time',
        currentValue: 30,
        possibleRange: [0, 180],
        unit: 'days',
        impact: 'High',
      },
      {
        name: 'Infrastructure Impact',
        currentValue: 25,
        possibleRange: [0, 100],
        unit: 'percent',
        impact: 'Medium',
      },
      {
        name: 'Raw Material Availability',
        currentValue: 35,
        possibleRange: [0, 100],
        unit: 'percent',
        impact: 'High',
      },
    ],
    outcomes: [
      {
        name: 'Limited Regional Impact',
        description: 'Isolated disruption with minimal supply chain impact',
        probability: 0.45,
        financialImpact: 275000,
        timeImpact: 15,
        riskLevel: 'Low',
        mitigationStrategies: [
          'Utilize regional backup facilities',
          'Implement emergency response protocols',
          'Use safety stock to maintain operations',
        ],
      },
      {
        name: 'Major Regional Disruption',
        description: 'Significant regional impact requiring supply chain adjustments',
        probability: 0.35,
        financialImpact: 1250000,
        timeImpact: 45,
        riskLevel: 'High',
        mitigationStrategies: [
          'Activate disaster recovery plan',
          'Shift production to unaffected regions',
          'Implement emergency sourcing protocols',
          'Adjust customer delivery expectations',
        ],
      },
      {
        name: 'Catastrophic Event',
        description: 'Complete regional shutdown requiring major intervention',
        probability: 0.20,
        financialImpact: 4500000,
        timeImpact: 120,
        riskLevel: 'Critical',
        mitigationStrategies: [
          'Evacuate and secure facilities',
          'Activate global contingency network',
          'Implement force majeure protocols',
          'Begin long-term recovery planning',
        ],
      },
    ],
    suppliers: ['s001', 's003', 's007'],
    products: ['All Products'],
    createdAt: '2023-11-30',
    lastRun: '2023-12-06',
    createdBy: 'AI Risk Engine',
  },
];

// Financial impact data
export interface FinancialImpact {
  id: string;
  date: string;
  type: 'Cost Increase' | 'Revenue Loss' | 'Mitigation Cost' | 'Risk Premium';
  amount: number;
  currency: string;
  description: string;
  category: 'Supplier' | 'Logistics' | 'Production' | 'Customer';
  supplier?: string;
  route?: string;
  mitigation?: string;
  status: 'Projected' | 'Actual' | 'Mitigated';
}

export const financialImpacts: FinancialImpact[] = [
  {
    id: 'f001',
    date: '2023-12-05',
    type: 'Cost Increase',
    amount: 125000,
    currency: 'USD',
    description: 'Additional shipping costs due to LA port congestion',
    category: 'Logistics',
    route: 'r001',
    status: 'Actual',
  },
  {
    id: 'f002',
    date: '2023-12-08',
    type: 'Risk Premium',
    amount: 75000,
    currency: 'USD',
    description: 'Insurance premium increase for high-risk supplier',
    category: 'Supplier',
    supplier: 's010',
    status: 'Actual',
  },
  {
    id: 'f003',
    date: '2023-12-09',
    type: 'Revenue Loss',
    amount: 95000,
    currency: 'USD',
    description: 'Lost sales due to weather-related shipping delays',
    category: 'Customer',
    route: 'r001',
    status: 'Projected',
  },
  {
    id: 'f004',
    date: '2023-12-10',
    type: 'Mitigation Cost',
    amount: 45000,
    currency: 'USD',
    description: 'Cost of expedited shipping to avoid production stoppage',
    category: 'Logistics',
    mitigation: 'Express air freight',
    status: 'Actual',
  },
  {
    id: 'f005',
    date: '2023-12-11',
    type: 'Cost Increase',
    amount: 85000,
    currency: 'USD',
    description: 'Price increase from alternative supplier',
    category: 'Supplier',
    supplier: 's002',
    status: 'Projected',
  },
  {
    id: 'f006',
    date: '2023-12-12',
    type: 'Revenue Loss',
    amount: 155000,
    currency: 'USD',
    description: 'Contract penalties for delayed deliveries',
    category: 'Customer',
    status: 'Actual',
  },
  {
    id: 'f007',
    date: '2023-12-13',
    type: 'Mitigation Cost',
    amount: 65000,
    currency: 'USD',
    description: 'Implementation of enhanced supplier monitoring system',
    category: 'Supplier',
    mitigation: 'Risk monitoring system',
    status: 'Actual',
  },
  {
    id: 'f008',
    date: '2023-12-14',
    type: 'Risk Premium',
    amount: 35000,
    currency: 'USD',
    description: 'Additional insurance for high-risk routes',
    category: 'Logistics',
    route: 'r010',
    status: 'Projected',
  },
];

// Risk forecasts
export interface RiskForecast {
  id: string;
  type: 'Supplier' | 'Logistics' | 'Market' | 'Environmental';
  date: string;
  timeframe: 'Short' | 'Medium' | 'Long';
  riskLevel: 'Low' | 'Medium' | 'High' | 'Critical';
  probability: number;
  impact: number;
  description: string;
  factors: {
    name: string;
    weight: number;
    trend: 'Improving' | 'Stable' | 'Worsening';
  }[];
  affectedAreas: string[];
  recommendations: string[];
  confidence: number;
}

export const riskForecasts: RiskForecast[] = [
  {
    id: 'rf001',
    type: 'Supplier',
    date: '2023-12-15',
    timeframe: 'Short',
    riskLevel: 'High',
    probability: 0.75,
    impact: 0.8,
    description: 'High probability of supplier disruption due to financial instability',
    factors: [
      {
        name: 'Financial Health',
        weight: 0.4,
        trend: 'Worsening',
      },
      {
        name: 'Production Capacity',
        weight: 0.3,
        trend: 'Stable',
      },
      {
        name: 'Political Stability',
        weight: 0.3,
        trend: 'Worsening',
      },
    ],
    affectedAreas: ['Electronics', 'Raw Materials'],
    recommendations: [
      'Initiate supplier diversification',
      'Increase safety stock',
      'Monitor supplier financial indicators',
    ],
    confidence: 0.85,
  },
  {
    id: 'rf002',
    type: 'Logistics',
    date: '2023-12-20',
    timeframe: 'Medium',
    riskLevel: 'Medium',
    probability: 0.6,
    impact: 0.5,
    description: 'Potential shipping delays due to port congestion',
    factors: [
      {
        name: 'Port Capacity',
        weight: 0.5,
        trend: 'Worsening',
      },
      {
        name: 'Labor Relations',
        weight: 0.3,
        trend: 'Stable',
      },
      {
        name: 'Weather Conditions',
        weight: 0.2,
        trend: 'Improving',
      },
    ],
    affectedAreas: ['Global Shipping', 'Delivery Times'],
    recommendations: [
      'Plan for longer lead times',
      'Consider alternative ports',
      'Book container space in advance',
    ],
    confidence: 0.7,
  },
  {
    id: 'rf003',
    type: 'Market',
    date: '2024-01-15',
    timeframe: 'Long',
    riskLevel: 'Critical',
    probability: 0.4,
    impact: 0.9,
    description: 'Potential market disruption due to trade policy changes',
    factors: [
      {
        name: 'Political Relations',
        weight: 0.4,
        trend: 'Worsening',
      },
      {
        name: 'Trade Regulations',
        weight: 0.4,
        trend: 'Worsening',
      },
      {
        name: 'Economic Indicators',
        weight: 0.2,
        trend: 'Stable',
      },
    ],
    affectedAreas: ['International Trade', 'Supply Costs', 'Market Access'],
    recommendations: [
      'Develop regional supply alternatives',
      'Review trade compliance procedures',
      'Build strategic inventory reserves',
    ],
    confidence: 0.65,
  },
  {
    id: 'rf004',
    type: 'Environmental',
    date: '2024-02-01',
    timeframe: 'Long',
    riskLevel: 'Medium',
    probability: 0.55,
    impact: 0.6,
    description: 'Increased frequency of weather-related disruptions',
    factors: [
      {
        name: 'Weather Patterns',
        weight: 0.5,
        trend: 'Worsening',
      },
      {
        name: 'Infrastructure Resilience',
        weight: 0.3,
        trend: 'Improving',
      },
      {
        name: 'Geographic Risk',
        weight: 0.2,
        trend: 'Stable',
      },
    ],
    affectedAreas: ['Transportation', 'Production Facilities', 'Raw Materials'],
    recommendations: [
      'Strengthen disaster recovery plans',
      'Invest in resilient infrastructure',
      'Diversify geographic sourcing',
    ],
    confidence: 0.75,
  },
];
