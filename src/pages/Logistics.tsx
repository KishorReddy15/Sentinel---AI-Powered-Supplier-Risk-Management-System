import React from 'react';
import PageTransition from '@/components/ui/PageTransition';
import GlassCard from '@/components/ui/GlassCard';
import { Globe } from 'lucide-react';
import GlobalMap from '@/components/maps/GlobalMap';

interface MapLocation {
  id: string | number;
  name: string;
  location: string;
  coordinates: [number, number]; // [longitude, latitude]
  type: 'supplier' | 'warehouse' | 'port' | 'factory';
  details?: Record<string, any>;
}

const Logistics = () => {
  const locationsData: MapLocation[] = [
    {
      id: 1,
      name: "Central Distribution Hub",
      location: "Chicago, IL, USA",
      coordinates: [41.8781, -87.6298] as [number, number],
      type: "warehouse",
      details: {
        capacity: "120,000 sq ft",
        utilizationPercent: 78
      }
    },
    {
      id: 2,
      name: "East Coast Fulfillment Center",
      location: "Edison, NJ, USA",
      coordinates: [40.5187, -74.4121] as [number, number],
      type: "warehouse",
      details: {
        capacity: "85,000 sq ft",
        utilizationPercent: 92
      }
    },
    {
      id: 3,
      name: "West Coast Distribution",
      location: "Stockton, CA, USA",
      coordinates: [37.9577, -121.2908] as [number, number],
      type: "warehouse",
      details: {
        capacity: "150,000 sq ft",
        utilizationPercent: 65
      }
    },
    {
      id: 4,
      name: "Southern Regional Warehouse",
      location: "Dallas, TX, USA",
      coordinates: [32.7767, -96.7970] as [number, number],
      type: "warehouse",
      details: {
        capacity: "95,000 sq ft",
        utilizationPercent: 73
      }
    },
    {
      id: 5,
      name: "Port of Los Angeles",
      location: "Los Angeles, CA, USA",
      coordinates: [33.7395, -118.2593] as [number, number],
      type: "port",
      details: {
        congestionLevel: "Moderate"
      }
    },
    {
      id: 6,
      name: "Port of New York/New Jersey",
      location: "Newark, NJ, USA",
      coordinates: [40.7357, -74.1724] as [number, number],
      type: "port",
      details: {
        congestionLevel: "High"
      }
    },
    {
      id: 7,
      name: "European Distribution Center",
      location: "Rotterdam, Netherlands",
      coordinates: [51.9244, 4.4777] as [number, number],
      type: "warehouse",
      details: {
        capacity: "110,000 sq ft",
        utilizationPercent: 81
      }
    },
    {
      id: 8,
      name: "Asian Distribution Hub",
      location: "Singapore",
      coordinates: [1.3521, 103.8198] as [number, number],
      type: "warehouse",
      details: {
        capacity: "130,000 sq ft",
        utilizationPercent: 88
      }
    }
  ];

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-10">
        <GlassCard className="p-6">
          <div className="flex items-center mb-4">
            <Globe className="mr-2 text-primary" />
            <h2 className="text-2xl font-semibold">Global Logistics Overview</h2>
          </div>
          <p className="text-gray-700 mb-4">
            Visualize your supply chain network across the globe. Monitor key distribution centers, ports, and transportation routes in real-time.
          </p>
          <GlobalMap locations={locationsData} showFlightPaths={true} />
        </GlassCard>
      </div>
    </PageTransition>
  );
};

export default Logistics;
