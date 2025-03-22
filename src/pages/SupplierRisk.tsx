
import React, { useState } from 'react';
import PageTransition from '@/components/ui/PageTransition';
import GlassCard from '@/components/ui/GlassCard';
import GlobalMap from '@/components/maps/GlobalMap';
import { supplierData } from '@/data/dummyData';
import { Plus, Map, AlertTriangle, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const SupplierRisk = () => {
  const [suppliers, setSuppliers] = useState(supplierData);
  const [newSupplier, setNewSupplier] = useState({
    name: '',
    location: '',
    riskFactors: '',
    coordinates: ['0', '0'] as [string, string],
  });
  const [openDialog, setOpenDialog] = useState(false);

  const handleAddSupplier = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create new supplier with default values for demo
    const supplier = {
      id: suppliers.length + 1,
      name: newSupplier.name,
      location: newSupplier.location,
      riskScore: Math.floor(Math.random() * 100),
      riskLevel: Math.random() > 0.6 ? "High" : Math.random() > 0.3 ? "Medium" : "Low",
      riskFactors: newSupplier.riskFactors.split(',').map(factor => factor.trim()),
      trend: Math.random() > 0.6 ? "up" : Math.random() > 0.3 ? "stable" : "down",
      lastUpdated: new Date().toISOString()
    };
    
    // Add to state
    setSuppliers([...suppliers, supplier]);
    setOpenDialog(false);
    
    // Reset form
    setNewSupplier({
      name: '',
      location: '',
      riskFactors: '',
      coordinates: ['0', '0'],
    });
    
    toast.success(`Added supplier: ${supplier.name}`);
  };

  // Map data
  const mapLocations = suppliers.map(supplier => {
    // Random coordinates near the actual regions for demo
    let coordinates: [number, number] = [0, 0];
    
    if (supplier.location.includes("China")) {
      coordinates = [116.4, 39.9]; // Beijing
    } else if (supplier.location.includes("Germany")) {
      coordinates = [13.4, 52.5]; // Berlin
    } else if (supplier.location.includes("USA")) {
      coordinates = [-83.0, 42.3]; // Detroit
    } else if (supplier.location.includes("Taiwan")) {
      coordinates = [121.5, 25.0]; // Taipei
    } else if (supplier.location.includes("Brazil")) {
      coordinates = [-46.6, -23.5]; // São Paulo
    } else {
      // Random coordinates
      coordinates = [
        -180 + Math.random() * 360,
        -90 + Math.random() * 180
      ];
    }
    
    return {
      id: supplier.id,
      name: supplier.name,
      location: supplier.location,
      coordinates: coordinates,
      type: 'supplier' as const,
      details: {
        riskScore: supplier.riskScore,
        riskLevel: supplier.riskLevel
      }
    };
  });

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-10">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold">Supplier Risk Management</h1>
          <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Add Supplier
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <form onSubmit={handleAddSupplier}>
                <DialogHeader>
                  <DialogTitle>Add New Supplier</DialogTitle>
                  <DialogDescription>
                    Enter the details of your new supplier. Click save when you're done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input
                      id="name"
                      value={newSupplier.name}
                      onChange={(e) => setNewSupplier({...newSupplier, name: e.target.value})}
                      className="col-span-3"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="location" className="text-right">
                      Location
                    </Label>
                    <Input
                      id="location"
                      value={newSupplier.location}
                      onChange={(e) => setNewSupplier({...newSupplier, location: e.target.value})}
                      className="col-span-3"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="riskFactors" className="text-right">
                      Risk Factors
                    </Label>
                    <Input
                      id="riskFactors"
                      value={newSupplier.riskFactors}
                      onChange={(e) => setNewSupplier({...newSupplier, riskFactors: e.target.value})}
                      className="col-span-3"
                      placeholder="Enter comma-separated risk factors"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="longitude" className="text-right">
                      Longitude
                    </Label>
                    <Input
                      id="longitude"
                      value={newSupplier.coordinates[0]}
                      onChange={(e) => setNewSupplier({...newSupplier, coordinates: [e.target.value, newSupplier.coordinates[1]]})}
                      className="col-span-3"
                      placeholder="Longitude (optional)"
                      type="number"
                      min="-180"
                      max="180"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="latitude" className="text-right">
                      Latitude
                    </Label>
                    <Input
                      id="latitude"
                      value={newSupplier.coordinates[1]}
                      onChange={(e) => setNewSupplier({...newSupplier, coordinates: [newSupplier.coordinates[0], e.target.value]})}
                      className="col-span-3"
                      placeholder="Latitude (optional)"
                      type="number"
                      min="-90"
                      max="90"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Save Supplier</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
        
        <div className="mb-10">
          <GlassCard className="p-6">
            <div className="flex items-center mb-4">
              <Map className="mr-2 text-primary" />
              <h2 className="text-2xl font-semibold">Supplier Risk Map</h2>
            </div>
            <p className="text-gray-700 mb-4">
              Our AI-powered risk scoring system provides real-time monitoring of your suppliers, with detailed analysis of potential risks around the globe.
            </p>
            <GlobalMap 
              locations={mapLocations} 
              height="500px"
              onLocationClick={(location) => {
                toast.info(`Viewing details for ${location.name}`);
              }}
            />
            <div className="flex justify-end mt-4">
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <span className="text-sm">High Risk</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <span className="text-sm">Medium Risk</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-sm">Low Risk</span>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
        
        <div className="mb-10">
          <GlassCard className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <AlertTriangle className="mr-2 text-yellow-500" />
                <h2 className="text-2xl font-semibold">Supplier Risk Table</h2>
              </div>
              <Button variant="outline" size="sm">
                <RefreshCw className="mr-2 h-4 w-4" /> Refresh Risk Data
              </Button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="px-4 py-2 border">Supplier</th>
                    <th className="px-4 py-2 border">Risk Score</th>
                    <th className="px-4 py-2 border">Location</th>
                    <th className="px-4 py-2 border">Risk Factors</th>
                    <th className="px-4 py-2 border">Trend</th>
                    <th className="px-4 py-2 border">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {suppliers.map((supplier) => (
                    <tr key={supplier.id}>
                      <td className="px-4 py-2 border">{supplier.name}</td>
                      <td className={`px-4 py-2 border ${
                        supplier.riskLevel === "High" ? "text-red-500" : 
                        supplier.riskLevel === "Medium" ? "text-yellow-500" : 
                        "text-green-500"
                      }`}>
                        {supplier.riskLevel} ({supplier.riskScore}/100)
                      </td>
                      <td className="px-4 py-2 border">{supplier.location}</td>
                      <td className="px-4 py-2 border">{supplier.riskFactors.join(', ')}</td>
                      <td className="px-4 py-2 border">
                        {supplier.trend === "up" ? "↑" : supplier.trend === "down" ? "↓" : "→"}
                      </td>
                      <td className="px-4 py-2 border">
                        <Button variant="link" size="sm" onClick={() => toast.info(`Viewing details for ${supplier.name}`)}>
                          View Details
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

export default SupplierRisk;
