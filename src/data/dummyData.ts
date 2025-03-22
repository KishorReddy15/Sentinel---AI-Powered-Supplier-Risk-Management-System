
// Supply Chain Data
export const supplierData = [
  {
    id: 1,
    name: "Global Manufacturing Co.",
    location: "Shanghai, China",
    riskScore: 78,
    riskLevel: "High",
    riskFactors: ["Political instability", "port congestion"],
    trend: "up",
    lastUpdated: "2023-09-01T12:00:00Z"
  },
  {
    id: 2,
    name: "European Electronics Ltd.",
    location: "Berlin, Germany",
    riskScore: 45,
    riskLevel: "Medium",
    riskFactors: ["Labor shortages", "energy costs"],
    trend: "stable",
    lastUpdated: "2023-09-02T14:30:00Z"
  },
  {
    id: 3,
    name: "American Parts Inc.",
    location: "Detroit, USA",
    riskScore: 23,
    riskLevel: "Low",
    riskFactors: ["Transportation delays"],
    trend: "down",
    lastUpdated: "2023-09-03T09:15:00Z"
  },
  {
    id: 4,
    name: "Tech Components Asia",
    location: "Taipei, Taiwan",
    riskScore: 62,
    riskLevel: "Medium",
    riskFactors: ["Geopolitical tensions", "semiconductor shortages"],
    trend: "up",
    lastUpdated: "2023-09-01T18:45:00Z"
  },
  {
    id: 5,
    name: "South American Resources",
    location: "São Paulo, Brazil",
    riskScore: 51,
    riskLevel: "Medium",
    riskFactors: ["Currency volatility", "logistics infrastructure"],
    trend: "stable",
    lastUpdated: "2023-09-02T11:20:00Z"
  }
];

export const logisticsData = [
  {
    id: "SH-12345",
    origin: "Los Angeles, CA",
    destination: "Chicago, IL",
    status: "In Transit",
    eta: "2023-09-15T00:00:00Z",
    delayRisk: "Low",
    carrierName: "FastFreight Inc.",
    transportMode: "Road"
  },
  {
    id: "SH-12346",
    origin: "Shanghai, China",
    destination: "New York, NY",
    status: "Port Processing",
    eta: "2023-10-03T00:00:00Z",
    delayRisk: "High",
    carrierName: "Global Shipping Ltd.",
    transportMode: "Sea"
  },
  {
    id: "SH-12347",
    origin: "Berlin, Germany",
    destination: "Paris, France",
    status: "Customs Clearance",
    eta: "2023-09-12T00:00:00Z",
    delayRisk: "Medium",
    carrierName: "Euro Transport",
    transportMode: "Rail"
  },
  {
    id: "SH-12348",
    origin: "Tokyo, Japan",
    destination: "Sydney, Australia",
    status: "Departed Origin",
    eta: "2023-09-25T00:00:00Z",
    delayRisk: "Medium",
    carrierName: "Pacific Air Cargo",
    transportMode: "Air"
  },
  {
    id: "SH-12349",
    origin: "Mumbai, India",
    destination: "Dubai, UAE",
    status: "Arrived at Port",
    eta: "2023-09-10T00:00:00Z",
    delayRisk: "Low",
    carrierName: "Indian Ocean Shipping",
    transportMode: "Sea"
  }
];

export const scenarioData = [
  {
    id: 1,
    name: "Port Strike - West Coast",
    created: "2023-09-10T00:00:00Z",
    type: "Labor Disruption",
    impactLevel: "High",
    financialImpact: 2500000,
    duration: 30,
    probability: 65,
    affectedSuppliers: [1, 3, 4]
  },
  {
    id: 2,
    name: "Semiconductor Shortage",
    created: "2023-08-28T00:00:00Z",
    type: "Material Shortage",
    impactLevel: "High",
    financialImpact: 3800000,
    duration: 90,
    probability: 80,
    affectedSuppliers: [2, 4]
  },
  {
    id: 3,
    name: "European Energy Crisis",
    created: "2023-09-05T00:00:00Z",
    type: "Energy Disruption",
    impactLevel: "Medium",
    financialImpact: 1200000,
    duration: 60,
    probability: 70,
    affectedSuppliers: [2, 5]
  },
  {
    id: 4,
    name: "South American Political Instability",
    created: "2023-09-01T00:00:00Z",
    type: "Political Disruption",
    impactLevel: "Medium",
    financialImpact: 900000,
    duration: 45,
    probability: 60,
    affectedSuppliers: [5]
  },
  {
    id: 5,
    name: "Asian Manufacturing Capacity Reduction",
    created: "2023-08-15T00:00:00Z",
    type: "Production Disruption",
    impactLevel: "Low",
    financialImpact: 500000,
    duration: 30,
    probability: 50,
    affectedSuppliers: [1, 4]
  }
];

export const alertsData = [
  {
    id: 1,
    title: "Port congestion detected at Shanghai port",
    description: "Expected delays of 3-5 days for shipments SH-12346 and SH-12350",
    severity: "High",
    timestamp: "2023-09-05T10:30:00Z",
    isRead: false,
    category: "Logistics"
  },
  {
    id: 2,
    title: "Labor strike predicted at European Electronics Ltd.",
    description: "Potential strike within next 30 days (65% probability)",
    severity: "Medium",
    timestamp: "2023-09-04T15:45:00Z",
    isRead: false,
    category: "Supplier"
  },
  {
    id: 3,
    title: "New regulations affecting cross-border shipping",
    description: "New regulations between USA and Mexico coming into effect Oct 1, 2023",
    severity: "Information",
    timestamp: "2023-09-02T09:15:00Z",
    isRead: true,
    category: "Regulatory"
  },
  {
    id: 4,
    title: "Weather alert: Hurricane approaching Gulf Coast",
    description: "Potential impact on shipping routes and port operations starting Sep 15",
    severity: "High",
    timestamp: "2023-09-05T08:00:00Z",
    isRead: false,
    category: "Weather"
  },
  {
    id: 5,
    title: "Supplier Tech Components Asia financial instability",
    description: "Recent quarterly report shows 15% drop in revenue, potential financial distress",
    severity: "Medium",
    timestamp: "2023-09-03T14:20:00Z",
    isRead: true,
    category: "Supplier"
  }
];

// User Data
export const userData = {
  demo: {
    id: "demo-user",
    name: "Demo User",
    email: "demo@sentinelai.com",
    company: "Sentinel Demo Company",
    role: "Supply Chain Manager",
    lastLogin: "2023-09-05T08:30:00Z"
  }
};
