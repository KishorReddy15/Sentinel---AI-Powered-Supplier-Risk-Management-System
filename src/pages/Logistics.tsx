
import React, { useState } from 'react';
import PageTransition from '@/components/ui/PageTransition';
import GlassCard from '@/components/ui/GlassCard';
import GlobalMap from '@/components/maps/GlobalMap';
import { logisticsData } from '@/data/dummyData';
import { Plus, Truck, BarChart3, AlertTriangle, Warehouse } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const warehouses = [
  { id: 1, name: 'Central Distribution Hub', location: 'Chicago, USA', coordinates: [-87.6298, 41.8781], type: 'warehouse' as const, capacity: '120,000 sq ft', utilizationPercent: 75 },
  { id: 2, name: 'European Fulfillment Center', location: 'Frankfurt, Germany', coordinates: [8.6821, 50.1109], type: 'warehouse' as const, capacity: '85,000 sq ft', utilizationPercent: 82 },
  { id: 3, name: 'Asia Pacific Hub', location: 'Singapore', coordinates: [103.8198, 1.3521], type: 'warehouse' as const, capacity: '95,000 sq ft', utilizationPercent: 68 },
  { id: 4, name: 'West Coast Distribution', location: 'Los Angeles, USA', coordinates: [-118.2437, 34.0522], type: 'warehouse' as const, capacity: '105,000 sq ft', utilizationPercent: 92 },
  { id: 5, name: 'East Asia Manufacturing', location: 'Shenzhen, China', coordinates: [114.0579, 22.5431], type: 'warehouse' as const, capacity: '150,000 sq ft', utilizationPercent: 79 },
];

const ports = [
  { id: 1, name: 'Port of Los Angeles', location: 'Los Angeles, USA', coordinates: [-118.2727, 33.7360], type: 'port' as const, congestionLevel: 'Medium' },
  { id: 2, name: 'Port of Rotterdam', location: 'Rotterdam, Netherlands', coordinates: [4.4059, 51.9244], type: 'port' as const, congestionLevel: 'Low' },
  { id: 3, name: 'Port of Shanghai', location: 'Shanghai, China', coordinates: [121.4853, 31.2268], type: 'port' as const, congestionLevel: 'High' },
  { id: 4, name: 'Port of Singapore', location: 'Singapore', coordinates: [103.8198, 1.2938], type: 'port' as const, congestionLevel: 'Low' },
];

const Logistics = () => {
  const [shipments, setShipments] = useState(logisticsData);
  const [locations] = useState([...warehouses, ...ports]);
  const [newPartner, setNewPartner] = useState({
    name: '',
    type: 'carrier',
    location: '',
    coordinates: ['0', '0'] as [string, string],
    services: '',
  });
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<any>(null);

  const handleAddPartner = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Just show a success message since this is a demo
    toast.success(`Added logistics partner: ${newPartner.name}`);
    setOpenDialog(false);
    
    // Reset form
    setNewPartner({
      name: '',
      type: 'carrier',
      location: '',
      coordinates: ['0', '0'],
      services: '',
    });
  };

  const handleLocationClick = (location: any) => {
    setSelectedLocation(location);
  };

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-10">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold">Logistics Management</h1>
          <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Add Logistics Partner
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <form onSubmit={handleAddPartner}>
                <DialogHeader>
                  <DialogTitle>Add New Logistics Partner</DialogTitle>
                  <DialogDescription>
                    Enter the details of your new logistics partner. Click save when you're done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input
                      id="name"
                      value={newPartner.name}
                      onChange={(e) => setNewPartner({...newPartner, name: e.target.value})}
                      className="col-span-3"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="type" className="text-right">
                      Type
                    </Label>
                    <select
                      id="type"
                      value={newPartner.type}
                      onChange={(e) => setNewPartner({...newPartner, type: e.target.value})}
                      className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      required
                    >
                      <option value="carrier">Carrier</option>
                      <option value="warehouse">Warehouse Provider</option>
                      <option value="freight-forwarder">Freight Forwarder</option>
                      <option value="customs-broker">Customs Broker</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="location" className="text-right">
                      Location
                    </Label>
                    <Input
                      id="location"
                      value={newPartner.location}
                      onChange={(e) => setNewPartner({...newPartner, location: e.target.value})}
                      className="col-span-3"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="services" className="text-right">
                      Services
                    </Label>
                    <Input
                      id="services"
                      value={newPartner.services}
                      onChange={(e) => setNewPartner({...newPartner, services: e.target.value})}
                      className="col-span-3"
                      placeholder="Enter comma-separated services"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Save Partner</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
        
        <div className="mb-10">
          <GlassCard className="p-6">
            <div className="flex items-center mb-4">
              <Warehouse className="mr-2 text-primary" />
              <h2 className="text-2xl font-semibold">Global Logistics Network</h2>
            </div>
            <p className="text-gray-700 mb-4">
              Interactive map of our global warehouses, ports, and major logistics hubs. Click on any location for more details.
            </p>
            <GlobalMap 
              locations={locations}
              height="500px"
              onLocationClick={handleLocationClick}
            />
            <div className="flex justify-between mt-4">
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-[#2a9d8f] mr-2"></div>
                  <span className="text-sm">Warehouses</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-[#457b9d] mr-2"></div>
                  <span className="text-sm">Ports</span>
                </div>
              </div>
              <Button variant="outline" size="sm" onClick={() => setSelectedLocation(null)}>
                Reset Selection
              </Button>
            </div>
          </GlassCard>
        </div>
        
        {selectedLocation && (
          <div className="mb-10">
            <GlassCard className="p-6">
              <h2 className="text-xl font-semibold mb-4">{selectedLocation.name} Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">Location Information</h3>
                  <p><strong>Type:</strong> {selectedLocation.type.charAt(0).toUpperCase() + selectedLocation.type.slice(1)}</p>
                  <p><strong>Address:</strong> {selectedLocation.location}</p>
                  <p><strong>Coordinates:</strong> {selectedLocation.coordinates[1]}, {selectedLocation.coordinates[0]}</p>
                </div>
                
                {selectedLocation.type === 'warehouse' && (
                  <div>
                    <h3 className="text-lg font-medium mb-2">Capacity Information</h3>
                    <p><strong>Total Capacity:</strong> {selectedLocation.capacity}</p>
                    <p><strong>Current Utilization:</strong> {selectedLocation.utilizationPercent}%</p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                      <div 
                        className={`h-2.5 rounded-full ${
                          selectedLocation.utilizationPercent > 90 ? 'bg-red-500' : 
                          selectedLocation.utilizationPercent > 75 ? 'bg-yellow-500' : 
                          'bg-green-500'
                        }`} 
                        style={{ width: `${selectedLocation.utilizationPercent}%` }}
                      ></div>
                    </div>
                  </div>
                )}
                
                {selectedLocation.type === 'port' && (
                  <div>
                    <h3 className="text-lg font-medium mb-2">Port Status</h3>
                    <p><strong>Congestion Level:</strong> 
                      <span className={
                        selectedLocation.congestionLevel === 'High' ? 'text-red-500 ml-2' : 
                        selectedLocation.congestionLevel === 'Medium' ? 'text-yellow-500 ml-2' : 
                        'text-green-500 ml-2'
                      }>
                        {selectedLocation.congestionLevel}
                      </span>
                    </p>
                    <p><strong>Status:</strong> Active</p>
                    <p><strong>Connected Shipments:</strong> {Math.floor(Math.random() * 20) + 5}</p>
                  </div>
                )}
              </div>
            </GlassCard>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <GlassCard className="p-6">
            <div className="flex items-center mb-4">
              <BarChart3 className="mr-2 text-primary" />
              <h2 className="text-2xl font-semibold">Delivery Performance</h2>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">On-Time Delivery Rate</p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '87%' }}></div>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-xs">0%</span>
                    <span className="text-xs font-medium">87%</span>
                    <span className="text-xs">100%</span>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 mb-1">Average Transit Time</p>
                  <p className="text-2xl font-bold">5.3 days</p>
                  <p className="text-xs text-green-500">▼ 0.4 days below target</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 mb-1">Damage Rate</p>
                  <p className="text-2xl font-bold">0.8%</p>
                  <p className="text-xs text-green-500">▼ 0.2% below industry average</p>
                </div>
              </div>
            </div>
          </GlassCard>
          
          <GlassCard className="p-6">
            <div className="flex items-center mb-4">
              <AlertTriangle className="mr-2 text-yellow-500" />
              <h2 className="text-2xl font-semibold">Delay Predictions</h2>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <div className="space-y-4">
                <Card className="border-yellow-200 bg-yellow-50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-medium text-yellow-700">Port Congestion Alert</CardTitle>
                    <CardDescription className="text-yellow-600">Shanghai Port - Expected 3-5 day delay</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-yellow-700">3 active shipments affected</p>
                    <div className="flex justify-end mt-2">
                      <Button variant="outline" size="sm" className="text-xs">View Mitigation Options</Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-red-200 bg-red-50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-medium text-red-700">Weather Disruption</CardTitle>
                    <CardDescription className="text-red-600">Typhoon approaching Taiwan - Expected 7+ day delay</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-red-700">2 active shipments affected</p>
                    <div className="flex justify-end mt-2">
                      <Button variant="outline" size="sm" className="text-xs">View Mitigation Options</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassCard>
        </div>
        
        <div className="mb-10">
          <GlassCard className="p-6">
            <div className="flex items-center mb-4">
              <Truck className="mr-2 text-primary" />
              <h2 className="text-2xl font-semibold">Active Shipments</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="px-4 py-2 border">Shipment ID</th>
                    <th className="px-4 py-2 border">Origin</th>
                    <th className="px-4 py-2 border">Destination</th>
                    <th className="px-4 py-2 border">Status</th>
                    <th className="px-4 py-2 border">ETA</th>
                    <th className="px-4 py-2 border">Delay Risk</th>
                    <th className="px-4 py-2 border">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {shipments.map((shipment) => (
                    <tr key={shipment.id}>
                      <td className="px-4 py-2 border">{shipment.id}</td>
                      <td className="px-4 py-2 border">{shipment.origin}</td>
                      <td className="px-4 py-2 border">{shipment.destination}</td>
                      <td className="px-4 py-2 border">{shipment.status}</td>
                      <td className="px-4 py-2 border">{new Date(shipment.eta).toLocaleDateString()}</td>
                      <td className={`px-4 py-2 border ${
                        shipment.delayRisk === "High" ? "text-red-500" : 
                        shipment.delayRisk === "Medium" ? "text-yellow-500" : 
                        "text-green-500"
                      }`}>
                        {shipment.delayRisk}
                      </td>
                      <td className="px-4 py-2 border">
                        <Button variant="link" size="sm" onClick={() => toast.info(`Tracking shipment ${shipment.id}`)}>
                          Track
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlassCard>
        </div>
      </div>
    </PageTransition>
  );
};

export default Logistics;
