
import React, { useState } from 'react';
import PageTransition from '@/components/ui/PageTransition';
import GlassCard from '@/components/ui/GlassCard';
import { scenarioData } from '@/data/dummyData';
import { Plus, BarChart2, Briefcase, AlertTriangle, TrendingDown, Workflow } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

// Simple chart component to demonstrate financial impact
const FinancialImpactChart = ({ scenarioId }: { scenarioId: number }) => {
  // Find the scenario
  const scenario = scenarioData.find(s => s.id === scenarioId);
  if (!scenario) return null;
  
  // Determine impact metrics based on the scenario
  const impact = scenario.financialImpact;
  const weeks = scenario.duration / 7;
  const data = [];
  
  // Generate weekly impact data
  for (let i = 0; i <= weeks; i++) {
    // Start with 0 and gradually increase to full impact, then slowly decrease
    let weeklyImpact = 0;
    if (i < weeks / 3) {
      // Ramp up phase
      weeklyImpact = (impact / weeks) * (i * 3);
    } else if (i < 2 * weeks / 3) {
      // Peak impact
      weeklyImpact = impact / (weeks / 3);
    } else {
      // Recovery phase
      weeklyImpact = impact / (weeks / 3) * (weeks - i);
    }
    
    data.push({
      week: i,
      impact: Math.max(0, weeklyImpact)
    });
  }
  
  const maxImpact = Math.max(...data.map(d => d.impact));
  
  return (
    <div className="h-64 w-full">
      <div className="flex justify-between items-center mb-2">
        <div className="text-xs text-gray-500">Financial Impact Over Time</div>
        <div className="text-xs font-medium">Total Impact: ${impact.toLocaleString()}</div>
      </div>
      <div className="relative h-52">
        {/* Y-axis */}
        <div className="absolute left-0 top-0 bottom-0 w-10 flex flex-col justify-between">
          <div className="text-xs text-gray-500">${maxImpact.toLocaleString()}</div>
          <div className="text-xs text-gray-500">${(maxImpact/2).toLocaleString()}</div>
          <div className="text-xs text-gray-500">$0</div>
        </div>
        
        {/* Chart area */}
        <div className="absolute left-12 right-0 top-0 bottom-0 bg-gray-50 border rounded-md">
          {/* X-axis labels */}
          <div className="absolute left-0 right-0 bottom-0 h-5 flex justify-between">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="text-xs text-gray-500 px-2">
                Week {Math.floor(i * weeks / 4)}
              </div>
            ))}
          </div>
          
          {/* Bars */}
          <div className="absolute left-0 right-0 top-0 bottom-5 flex items-end">
            {data.map((d, i) => (
              <div 
                key={i} 
                className="flex-1 mx-px"
                style={{ height: `${(d.impact / maxImpact) * 100}%` }}
              >
                <div 
                  className={`w-full h-full ${
                    d.impact > impact / 2 ? 'bg-red-400' : 
                    d.impact > impact / 4 ? 'bg-yellow-400' : 
                    'bg-blue-400'
                  }`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Risk mitigation options component
const RiskMitigationOptions = ({ scenarioType }: { scenarioType: string }) => {
  // Different mitigation strategies based on scenario type
  const mitigations: Record<string, { title: string, description: string, cost: string, timeframe: string, effectiveness: number }[]> = {
    'Labor Disruption': [
      { 
        title: 'Temporary Labor Force', 
        description: 'Engage temporary workers or outsource operations to maintain productivity', 
        cost: '$$$', 
        timeframe: 'Immediate', 
        effectiveness: 75 
      },
      { 
        title: 'Geographic Diversification', 
        description: 'Establish production capabilities across multiple regions',
        cost: '$$$$', 
        timeframe: 'Long-term', 
        effectiveness: 95 
      },
      { 
        title: 'Automation Investment', 
        description: 'Reduce dependency on manual labor through automated systems',
        cost: '$$$$', 
        timeframe: 'Medium-term', 
        effectiveness: 85 
      }
    ],
    'Material Shortage': [
      { 
        title: 'Alternative Materials', 
        description: 'Identify and qualify substitute materials that meet specifications', 
        cost: '$$', 
        timeframe: 'Short-term', 
        effectiveness: 70 
      },
      { 
        title: 'Strategic Stockpiling', 
        description: 'Maintain larger inventory of critical materials',
        cost: '$$$', 
        timeframe: 'Immediate', 
        effectiveness: 90 
      },
      { 
        title: 'Supplier Diversification', 
        description: 'Develop relationships with multiple suppliers across regions',
        cost: '$$$', 
        timeframe: 'Medium-term', 
        effectiveness: 85 
      }
    ],
    'Energy Disruption': [
      { 
        title: 'On-site Power Generation', 
        description: 'Install backup generators or renewable energy systems', 
        cost: '$$$', 
        timeframe: 'Medium-term', 
        effectiveness: 80 
      },
      { 
        title: 'Energy Efficiency Measures', 
        description: 'Reduce overall energy consumption to minimize impact',
        cost: '$$', 
        timeframe: 'Short-term', 
        effectiveness: 60 
      },
      { 
        title: 'Production Scheduling', 
        description: 'Adjust production to periods of lower energy costs/higher availability',
        cost: '$', 
        timeframe: 'Immediate', 
        effectiveness: 50 
      }
    ],
    'Political Disruption': [
      { 
        title: 'Political Risk Insurance', 
        description: 'Secure insurance against political events affecting operations', 
        cost: '$$', 
        timeframe: 'Immediate', 
        effectiveness: 65 
      },
      { 
        title: 'Geographic Diversification', 
        description: 'Distribute production and supply chain across multiple countries',
        cost: '$$$$', 
        timeframe: 'Long-term', 
        effectiveness: 90 
      },
      { 
        title: 'Inventory Buffers', 
        description: 'Maintain higher safety stock levels in stable regions',
        cost: '$$$', 
        timeframe: 'Short-term', 
        effectiveness: 75 
      }
    ],
    'Production Disruption': [
      { 
        title: 'Backup Production Lines', 
        description: 'Maintain redundant production capabilities', 
        cost: '$$$$', 
        timeframe: 'Medium-term', 
        effectiveness: 85 
      },
      { 
        title: 'Cross-training Workforce', 
        description: 'Ensure workforce can operate multiple production areas',
        cost: '$$', 
        timeframe: 'Short-term', 
        effectiveness: 70 
      },
      { 
        title: 'Contract Manufacturing', 
        description: 'Establish relationships with contract manufacturers',
        cost: '$$$', 
        timeframe: 'Medium-term', 
        effectiveness: 80 
      }
    ]
  };
  
  // Default to a generic set if the scenario type isn't matched
  const options = mitigations[scenarioType] || mitigations['Production Disruption'];
  
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Recommended Mitigation Strategies</h3>
      
      {options.map((option, index) => (
        <div key={index} className="border rounded-md p-3 bg-white">
          <div className="flex justify-between items-start">
            <h4 className="font-medium">{option.title}</h4>
            <div className="flex items-center">
              <span className="text-xs mr-2">Effectiveness:</span>
              <div className="w-24 bg-gray-200 rounded-full h-2.5">
                <div 
                  className={`h-2.5 rounded-full ${
                    option.effectiveness >= 80 ? 'bg-green-500' : 
                    option.effectiveness >= 60 ? 'bg-yellow-500' : 
                    'bg-red-500'
                  }`} 
                  style={{ width: `${option.effectiveness}%` }}
                ></div>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-700 mt-1">{option.description}</p>
          <div className="flex justify-between mt-2 text-xs text-gray-500">
            <span>Cost: {option.cost}</span>
            <span>Timeframe: {option.timeframe}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

const ScenarioPlanning = () => {
  const [scenarios, setScenarios] = useState(scenarioData);
  const [selectedScenario, setSelectedScenario] = useState<any>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [newScenario, setNewScenario] = useState({
    name: '',
    type: 'Labor Disruption',
    impactLevel: 'Medium',
    financialImpact: '',
    duration: '',
    probability: '',
  });

  const handleAddScenario = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create new scenario with default values for demo
    const scenario = {
      id: scenarios.length + 1,
      name: newScenario.name,
      created: new Date().toISOString(),
      type: newScenario.type,
      impactLevel: newScenario.impactLevel,
      financialImpact: parseInt(newScenario.financialImpact) || 1000000,
      duration: parseInt(newScenario.duration) || 30,
      probability: parseInt(newScenario.probability) || 65,
      affectedSuppliers: [1, 2], // Demo data
    };
    
    // Add to state
    setScenarios([...scenarios, scenario]);
    setOpenDialog(false);
    
    // Reset form
    setNewScenario({
      name: '',
      type: 'Labor Disruption',
      impactLevel: 'Medium',
      financialImpact: '',
      duration: '',
      probability: '',
    });
    
    toast.success(`Added scenario: ${scenario.name}`);
  };

  const handleViewScenario = (scenario: any) => {
    setSelectedScenario(scenario);
  };

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-10">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold">Scenario Planning</h1>
          <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Add Scenario
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <form onSubmit={handleAddScenario}>
                <DialogHeader>
                  <DialogTitle>Create New Scenario</DialogTitle>
                  <DialogDescription>
                    Define a new risk scenario to simulate and plan for potential supply chain disruptions.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Scenario Name
                    </Label>
                    <Input
                      id="name"
                      value={newScenario.name}
                      onChange={(e) => setNewScenario({...newScenario, name: e.target.value})}
                      className="col-span-3"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="type" className="text-right">
                      Disruption Type
                    </Label>
                    <select
                      id="type"
                      value={newScenario.type}
                      onChange={(e) => setNewScenario({...newScenario, type: e.target.value})}
                      className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      required
                    >
                      <option value="Labor Disruption">Labor Disruption</option>
                      <option value="Material Shortage">Material Shortage</option>
                      <option value="Energy Disruption">Energy Disruption</option>
                      <option value="Political Disruption">Political Disruption</option>
                      <option value="Production Disruption">Production Disruption</option>
                      <option value="Weather Disruption">Weather Disruption</option>
                      <option value="Logistics Disruption">Logistics Disruption</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="impactLevel" className="text-right">
                      Impact Level
                    </Label>
                    <select
                      id="impactLevel"
                      value={newScenario.impactLevel}
                      onChange={(e) => setNewScenario({...newScenario, impactLevel: e.target.value})}
                      className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      required
                    >
                      <option value="Low">Low</option>
                      <option value="Medium">Medium</option>
                      <option value="High">High</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="financialImpact" className="text-right">
                      Financial Impact ($)
                    </Label>
                    <Input
                      id="financialImpact"
                      type="number"
                      min="0"
                      value={newScenario.financialImpact}
                      onChange={(e) => setNewScenario({...newScenario, financialImpact: e.target.value})}
                      className="col-span-3"
                      placeholder="e.g. 1000000"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="duration" className="text-right">
                      Duration (days)
                    </Label>
                    <Input
                      id="duration"
                      type="number"
                      min="1"
                      max="365"
                      value={newScenario.duration}
                      onChange={(e) => setNewScenario({...newScenario, duration: e.target.value})}
                      className="col-span-3"
                      placeholder="e.g. 30"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="probability" className="text-right">
                      Probability (%)
                    </Label>
                    <Input
                      id="probability"
                      type="number"
                      min="1"
                      max="100"
                      value={newScenario.probability}
                      onChange={(e) => setNewScenario({...newScenario, probability: e.target.value})}
                      className="col-span-3"
                      placeholder="e.g. 65"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Create Scenario</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
        
        <div className="mb-10">
          <GlassCard className="p-6">
            <div className="flex items-center mb-4">
              <Workflow className="mr-2 text-primary" />
              <h2 className="text-2xl font-semibold">Scenario Simulation</h2>
            </div>
            <p className="text-gray-700 mb-4">
              Our AI-powered scenario planning tool allows you to model potential disruptions and their impacts on your supply chain. Select a scenario below to analyze its potential effects or create a new scenario.
            </p>
            
            {selectedScenario ? (
              <div className="bg-white p-4 rounded-md border">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{selectedScenario.name}</h3>
                    <p className="text-sm text-gray-500">Created on {new Date(selectedScenario.created).toLocaleDateString()}</p>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => setSelectedScenario(null)}>
                    Back to All Scenarios
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                  <div>
                    <div className="mb-6">
                      <h3 className="text-lg font-medium mb-3">Scenario Details</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-3 rounded-md">
                          <p className="text-sm text-gray-500">Disruption Type</p>
                          <p className="font-medium">{selectedScenario.type}</p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-md">
                          <p className="text-sm text-gray-500">Impact Level</p>
                          <p className={`font-medium ${
                            selectedScenario.impactLevel === 'High' ? 'text-red-600' :
                            selectedScenario.impactLevel === 'Medium' ? 'text-yellow-600' :
                            'text-green-600'
                          }`}>
                            {selectedScenario.impactLevel}
                          </p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-md">
                          <p className="text-sm text-gray-500">Duration</p>
                          <p className="font-medium">{selectedScenario.duration} days</p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-md">
                          <p className="text-sm text-gray-500">Probability</p>
                          <p className="font-medium">{selectedScenario.probability}%</p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-md">
                          <p className="text-sm text-gray-500">Financial Impact</p>
                          <p className="font-medium">${selectedScenario.financialImpact.toLocaleString()}</p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-md">
                          <p className="text-sm text-gray-500">Annual Risk Exposure</p>
                          <p className="font-medium">
                            ${Math.round(selectedScenario.financialImpact * (selectedScenario.probability / 100)).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-3">Financial Impact Analysis</h3>
                      <FinancialImpactChart scenarioId={selectedScenario.id} />
                    </div>
                  </div>
                  
                  <div>
                    <RiskMitigationOptions scenarioType={selectedScenario.type} />
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-gray-100 p-4 rounded-md text-center mb-4">
                <p className="text-gray-500 mb-2">Select a scenario from the table below to view detailed simulations</p>
                <Button variant="outline" onClick={() => setOpenDialog(true)}>
                  <Plus className="mr-2 h-4 w-4" /> Create New Scenario
                </Button>
              </div>
            )}
          </GlassCard>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <GlassCard className="p-6">
            <div className="flex items-center mb-4">
              <BarChart2 className="mr-2 text-primary" />
              <h2 className="text-2xl font-semibold">Financial Impact Analysis</h2>
            </div>
            <div className="bg-white p-4 rounded-md border">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium">Top Financial Risks</h3>
                  <div className="mt-3 space-y-2">
                    {scenarios
                      .sort((a, b) => b.financialImpact - a.financialImpact)
                      .slice(0, 3)
                      .map((scenario) => (
                        <div key={scenario.id} className="flex justify-between items-center p-2 border-b">
                          <div>
                            <p className="font-medium">{scenario.name}</p>
                            <p className="text-sm text-gray-500">{scenario.type}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">${scenario.financialImpact.toLocaleString()}</p>
                            <p className={`text-sm ${
                              scenario.impactLevel === 'High' ? 'text-red-500' :
                              scenario.impactLevel === 'Medium' ? 'text-yellow-500' :
                              'text-green-500'
                            }`}>
                              {scenario.impactLevel} Impact
                            </p>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                </div>
                
                <div className="pt-4">
                  <h3 className="text-lg font-medium mb-2">Aggregate Financial Risk</h3>
                  <div className="flex items-end space-x-1 h-40 mt-4 border-b border-l">
                    {scenarios.slice(0, 4).map((scenario, index) => {
                      const height = (scenario.financialImpact / 4000000) * 100;
                      return (
                        <div 
                          key={scenario.id}
                          className="relative flex-1 group cursor-pointer"
                          onClick={() => handleViewScenario(scenario)}
                        >
                          <div 
                            className={`w-full absolute bottom-0 ${
                              scenario.impactLevel === 'High' ? 'bg-red-400' :
                              scenario.impactLevel === 'Medium' ? 'bg-yellow-400' :
                              'bg-green-400'
                            }`}
                            style={{ height: `${Math.min(100, Math.max(10, height))}%` }}
                          ></div>
                          <div className="opacity-0 group-hover:opacity-100 absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 pointer-events-none transition-opacity">
                            ${scenario.financialImpact.toLocaleString()}
                          </div>
                          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs">
                            {scenario.name.split(' ')[0]}...
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
          
          <GlassCard className="p-6">
            <div className="flex items-center mb-4">
              <AlertTriangle className="mr-2 text-yellow-500" />
              <h2 className="text-2xl font-semibold">Risk Mitigation Options</h2>
            </div>
            <div className="bg-white p-4 rounded-md border">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Strategic Mitigation Approaches</h3>
                
                <div className="border-l-4 border-blue-500 pl-3 py-1">
                  <h4 className="font-medium flex items-center">
                    <Briefcase className="h-4 w-4 mr-2" />
                    Diversification Strategy
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Distribute risk by diversifying suppliers, production facilities, and transportation routes across multiple regions.
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    <span className="font-medium">Effectiveness:</span> High | <span className="font-medium">Implementation Time:</span> 6-18 months
                  </p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-3 py-1">
                  <h4 className="font-medium flex items-center">
                    <TrendingDown className="h-4 w-4 mr-2" />
                    Vertical Integration
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Acquire control over key suppliers or distributors to secure critical components and stabilize supply chain.
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    <span className="font-medium">Effectiveness:</span> High | <span className="font-medium">Implementation Time:</span> 12-24 months
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-3 py-1">
                  <h4 className="font-medium flex items-center">
                    <Workflow className="h-4 w-4 mr-2" />
                    Platform & Process Standardization
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Create flexible systems that can adapt to changing circumstances through standardized processes and platforms.
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    <span className="font-medium">Effectiveness:</span> Medium | <span className="font-medium">Implementation Time:</span> 3-12 months
                  </p>
                </div>
                
                <Button variant="outline" size="sm" onClick={() => toast.info('Generating comprehensive mitigation strategy...')}>
                  Generate Custom Mitigation Strategy
                </Button>
              </div>
            </div>
          </GlassCard>
        </div>
        
        <div className="mb-10">
          <GlassCard className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold">Saved Scenarios</h2>
              <Button variant="outline" size="sm" onClick={() => setOpenDialog(true)}>
                <Plus className="mr-2 h-4 w-4" /> Add Scenario
              </Button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="px-4 py-2 border">Scenario Name</th>
                    <th className="px-4 py-2 border">Created</th>
                    <th className="px-4 py-2 border">Type</th>
                    <th className="px-4 py-2 border">Impact Level</th>
                    <th className="px-4 py-2 border">Financial Impact</th>
                    <th className="px-4 py-2 border">Probability</th>
                    <th className="px-4 py-2 border">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {scenarios.map((scenario) => (
                    <tr key={scenario.id}>
                      <td className="px-4 py-2 border">{scenario.name}</td>
                      <td className="px-4 py-2 border">{new Date(scenario.created).toLocaleDateString()}</td>
                      <td className="px-4 py-2 border">{scenario.type}</td>
                      <td className={`px-4 py-2 border ${
                        scenario.impactLevel === "High" ? "text-red-500" : 
                        scenario.impactLevel === "Medium" ? "text-yellow-500" : 
                        "text-green-500"
                      }`}>
                        {scenario.impactLevel}
                      </td>
                      <td className="px-4 py-2 border">${scenario.financialImpact.toLocaleString()}</td>
                      <td className="px-4 py-2 border">{scenario.probability}%</td>
                      <td className="px-4 py-2 border">
                        <Button variant="link" size="sm" onClick={() => handleViewScenario(scenario)}>
                          View
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

export default ScenarioPlanning;
