
import React, { useState } from 'react';
import PageTransition from '@/components/ui/PageTransition';
import GlassCard from '@/components/ui/GlassCard';
import { alertsData } from '@/data/dummyData';
import { Bell, AlertTriangle, Info, Shield, CheckCircle, Settings, BarChart2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';

// Alert action recommendations based on alert type and severity
const getRecommendedActions = (alert: any) => {
  const actions: Record<string, Record<string, { steps: string[], benefits: string, urgency: string }>> = {
    'Logistics': {
      'High': {
        steps: [
          'Identify all affected shipments and prioritize by delivery date',
          'Contact logistics partners to assess alternative routing options',
          'Update customers and internal stakeholders on potential delays',
          'Prepare overtime workforce for receiving and distribution when shipments arrive'
        ],
        benefits: 'Proactive action can reduce delay impact by up to 60% and maintain customer satisfaction',
        urgency: 'Immediate action required (next 24 hours)'
      },
      'Medium': {
        steps: [
          'Evaluate shipments at risk and identify critical deliveries',
          'Begin investigation of alternative routing or transportation methods',
          'Prepare internal communication plan for stakeholders'
        ],
        benefits: 'Early planning can mitigate most impacts with minimal disruption to customers',
        urgency: 'Action required within 72 hours'
      },
      'Information': {
        steps: [
          'Document new requirements or changes in logistics conditions',
          'Share with relevant team members',
          'Update logistics planning guidelines if necessary'
        ],
        benefits: 'Ensures compliance and prevents future disruptions',
        urgency: 'Action recommended within 1 week'
      }
    },
    'Supplier': {
      'High': {
        steps: [
          'Activate alternative supplier contingency plans',
          'Contact affected supplier to confirm situation details',
          'Assess inventory levels of affected materials/components',
          'Begin emergency procurement procedures if necessary'
        ],
        benefits: 'Quick supplier diversification can prevent production shutdown',
        urgency: 'Immediate action required (next 24 hours)'
      },
      'Medium': {
        steps: [
          'Evaluate current inventory against projected needs',
          'Initiate discussions with backup suppliers',
          'Monitor situation developments closely'
        ],
        benefits: 'Preparedness ensures continuity while situation develops',
        urgency: 'Action required within 72 hours'
      },
      'Information': {
        steps: [
          'Update supplier risk profile',
          'Schedule routine follow-up assessment',
          'Consider long-term supply strategy adjustments'
        ],
        benefits: 'Improves future risk assessment accuracy',
        urgency: 'Action recommended within 2 weeks'
      }
    },
    'Weather': {
      'High': {
        steps: [
          'Identify all assets and shipments in affected area',
          'Implement emergency weather protocol',
          'Secure facilities and inventory where possible',
          'Establish communication channels with local teams'
        ],
        benefits: 'Reduces potential damage and ensures personnel safety',
        urgency: 'Immediate action required (next 12 hours)'
      },
      'Medium': {
        steps: [
          'Monitor weather developments through official channels',
          'Prepare contingency plans for different severity scenarios',
          'Alert local teams to be on standby'
        ],
        benefits: 'Enables rapid response as situation evolves',
        urgency: 'Action required within 48 hours'
      },
      'Information': {
        steps: [
          'Document predicted weather patterns',
          'Assess potential seasonal impacts on operations',
          'Update weather risk models'
        ],
        benefits: 'Improves long-term planning during weather seasons',
        urgency: 'Action recommended within 1 week'
      }
    },
    'Regulatory': {
      'High': {
        steps: [
          'Consult legal team regarding compliance requirements',
          'Identify all affected business processes',
          'Develop compliance implementation plan',
          'Begin training relevant personnel on new requirements'
        ],
        benefits: 'Ensures regulatory compliance and prevents penalties',
        urgency: 'Action required before regulation effective date'
      },
      'Medium': {
        steps: [
          'Review regulatory changes and scope of impact',
          'Assess current compliance status',
          'Draft preliminary adjustment plan'
        ],
        benefits: 'Provides adequate preparation time for compliance',
        urgency: 'Action required within 2 weeks'
      },
      'Information': {
        steps: [
          'Document regulatory changes',
          'Share with compliance and legal teams',
          'Schedule follow-up review if necessary'
        ],
        benefits: 'Keeps organization informed of regulatory landscape',
        urgency: 'Action recommended within 1 month'
      }
    }
  };
  
  // Return default if category or severity not found
  const defaultActions = {
    steps: [
      'Assess potential impact on operations',
      'Identify responsible team members',
      'Develop appropriate response plan'
    ],
    benefits: 'Structured response minimizes business disruption',
    urgency: 'Action recommended based on alert details'
  };
  
  return actions[alert.category]?.[alert.severity] || defaultActions;
};

const Alerts = () => {
  const [alerts, setAlerts] = useState(alertsData);
  const [showActionDialog, setShowActionDialog] = useState(false);
  const [selectedAlert, setSelectedAlert] = useState<any>(null);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [alertSettings, setAlertSettings] = useState({
    emailNotifications: true,
    smsHighRisk: true,
    dailyDigest: false,
    minimumSeverity: 'all'
  });

  const handleViewDetails = (alert: any) => {
    setSelectedAlert(alert);
    setShowActionDialog(true);
  };

  const handleDismissAlert = (alertId: number) => {
    const updatedAlerts = alerts.map(alert =>
      alert.id === alertId ? { ...alert, isRead: true } : alert
    );
    setAlerts(updatedAlerts);
    toast.success('Alert dismissed');
  };

  const handleSaveSettings = () => {
    setSettingsOpen(false);
    toast.success('Alert settings updated');
  };

  // Group alerts by severity for better organization
  const highAlerts = alerts.filter(alert => alert.severity === 'High' && !alert.isRead);
  const mediumAlerts = alerts.filter(alert => alert.severity === 'Medium' && !alert.isRead);
  const infoAlerts = alerts.filter(alert => alert.severity === 'Information' && !alert.isRead);
  
  // Dismissed/read alerts
  const dismissedAlerts = alerts.filter(alert => alert.isRead);

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-10">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold">Intelligent Alerts</h1>
          <Button variant="outline" onClick={() => setSettingsOpen(true)}>
            <Settings className="mr-2 h-4 w-4" /> Alert Settings
          </Button>
        </div>
        
        <div className="mb-10">
          <GlassCard className="p-6">
            <div className="flex items-center mb-4">
              <Bell className="mr-2 text-primary" />
              <h2 className="text-2xl font-semibold">Alert Dashboard</h2>
            </div>
            <p className="text-gray-700 mb-6">
              Our AI-powered alert system continuously monitors your supply chain and external factors that could impact your operations. Alerts are prioritized by severity, with recommended actions to help you quickly respond to potential disruptions before they impact your business.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <AlertTriangle className="h-5 w-5 mr-2 text-red-500" />
                    High Priority
                  </CardTitle>
                  <CardDescription>Urgent attention required</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-red-500">{highAlerts.length}</p>
                  <p className="text-sm text-gray-500">Active high priority alerts</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <AlertTriangle className="h-5 w-5 mr-2 text-yellow-500" />
                    Medium Priority
                  </CardTitle>
                  <CardDescription>Action recommended</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-yellow-500">{mediumAlerts.length}</p>
                  <p className="text-sm text-gray-500">Active medium priority alerts</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <Info className="h-5 w-5 mr-2 text-blue-500" />
                    Information
                  </CardTitle>
                  <CardDescription>For your awareness</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-blue-500">{infoAlerts.length}</p>
                  <p className="text-sm text-gray-500">Active informational alerts</p>
                </CardContent>
              </Card>
            </div>
          </GlassCard>
        </div>
        
        <div className="mb-10">
          <GlassCard className="p-6">
            <h2 className="text-2xl font-semibold mb-6">Active Alerts</h2>
            <div className="space-y-4">
              {highAlerts.length === 0 && mediumAlerts.length === 0 && infoAlerts.length === 0 && (
                <div className="p-4 bg-gray-50 border border-gray-200 rounded-md text-center">
                  <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <p className="text-gray-700">No active alerts at this time. Your supply chain appears to be operating normally.</p>
                </div>
              )}
              
              {highAlerts.map(alert => (
                <div key={alert.id} className="p-4 bg-red-50 border border-red-200 rounded-md">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                      <h3 className="font-medium text-red-700">High Risk - {alert.category}</h3>
                    </div>
                    <span className="text-sm text-gray-500">{new Date(alert.timestamp).toLocaleString()}</span>
                  </div>
                  <p className="mt-2 text-red-900 font-medium">{alert.title}</p>
                  <p className="mt-1 text-red-800">{alert.description}</p>
                  <div className="mt-3 flex justify-end">
                    <Button size="sm" variant="outline" className="mr-2 text-red-700 border-red-300 hover:bg-red-100" onClick={() => handleViewDetails(alert)}>
                      <Shield className="h-4 w-4 mr-1" /> View Actions
                    </Button>
                    <Button size="sm" variant="ghost" className="text-gray-500" onClick={() => handleDismissAlert(alert.id)}>
                      Dismiss
                    </Button>
                  </div>
                </div>
              ))}
              
              {mediumAlerts.map(alert => (
                <div key={alert.id} className="p-4 bg-yellow-50 border border-yellow-200 rounded-md">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                      <h3 className="font-medium text-yellow-700">Medium Risk - {alert.category}</h3>
                    </div>
                    <span className="text-sm text-gray-500">{new Date(alert.timestamp).toLocaleString()}</span>
                  </div>
                  <p className="mt-2 text-yellow-900 font-medium">{alert.title}</p>
                  <p className="mt-1 text-yellow-800">{alert.description}</p>
                  <div className="mt-3 flex justify-end">
                    <Button size="sm" variant="outline" className="mr-2 text-yellow-700 border-yellow-300 hover:bg-yellow-100" onClick={() => handleViewDetails(alert)}>
                      <Shield className="h-4 w-4 mr-1" /> View Actions
                    </Button>
                    <Button size="sm" variant="ghost" className="text-gray-500" onClick={() => handleDismissAlert(alert.id)}>
                      Dismiss
                    </Button>
                  </div>
                </div>
              ))}
              
              {infoAlerts.map(alert => (
                <div key={alert.id} className="p-4 bg-blue-50 border border-blue-200 rounded-md">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                      <h3 className="font-medium text-blue-700">Information - {alert.category}</h3>
                    </div>
                    <span className="text-sm text-gray-500">{new Date(alert.timestamp).toLocaleString()}</span>
                  </div>
                  <p className="mt-2 text-blue-900 font-medium">{alert.title}</p>
                  <p className="mt-1 text-blue-800">{alert.description}</p>
                  <div className="mt-3 flex justify-end">
                    <Button size="sm" variant="outline" className="mr-2 text-blue-700 border-blue-300 hover:bg-blue-100" onClick={() => handleViewDetails(alert)}>
                      <Info className="h-4 w-4 mr-1" /> Learn More
                    </Button>
                    <Button size="sm" variant="ghost" className="text-gray-500" onClick={() => handleDismissAlert(alert.id)}>
                      Dismiss
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <GlassCard className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Settings className="mr-2 text-primary" />
                <h2 className="text-2xl font-semibold">Alert Settings</h2>
              </div>
              <Button variant="outline" size="sm" onClick={() => setSettingsOpen(true)}>
                Edit Settings
              </Button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                <div>
                  <p className="font-medium">Email notifications</p>
                  <p className="text-sm text-gray-500">Receive alerts via email</p>
                </div>
                <div className={`w-10 h-5 ${alertSettings.emailNotifications ? 'bg-green-500' : 'bg-gray-300'} rounded-full flex items-center p-1`}>
                  <div className={`w-3 h-3 bg-white rounded-full ${alertSettings.emailNotifications ? 'ml-auto' : ''}`}></div>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                <div>
                  <p className="font-medium">SMS alerts for high risk events</p>
                  <p className="text-sm text-gray-500">Receive SMS for critical alerts</p>
                </div>
                <div className={`w-10 h-5 ${alertSettings.smsHighRisk ? 'bg-green-500' : 'bg-gray-300'} rounded-full flex items-center p-1`}>
                  <div className={`w-3 h-3 bg-white rounded-full ${alertSettings.smsHighRisk ? 'ml-auto' : ''}`}></div>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                <div>
                  <p className="font-medium">Daily digest</p>
                  <p className="text-sm text-gray-500">Receive a summary of alerts daily</p>
                </div>
                <div className={`w-10 h-5 ${alertSettings.dailyDigest ? 'bg-green-500' : 'bg-gray-300'} rounded-full flex items-center p-1`}>
                  <div className={`w-3 h-3 bg-white rounded-full ${alertSettings.dailyDigest ? 'ml-auto' : ''}`}></div>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                <div>
                  <p className="font-medium">Minimum alert severity</p>
                  <p className="text-sm text-gray-500">Filter alerts by minimum severity</p>
                </div>
                <select 
                  value={alertSettings.minimumSeverity}
                  className="text-sm border rounded-md p-1"
                  disabled
                >
                  <option value="all">All alerts</option>
                  <option value="medium">Medium and high</option>
                  <option value="high">High only</option>
                </select>
              </div>
            </div>
          </GlassCard>
          
          <GlassCard className="p-6">
            <div className="flex items-center mb-4">
              <BarChart2 className="mr-2 text-primary" />
              <h2 className="text-2xl font-semibold">Alert History</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <div className="flex justify-between mb-4">
                  <h3 className="font-medium">Recent Alert Activity</h3>
                  <span className="text-sm text-primary">Last 30 days</span>
                </div>
                
                <div className="relative h-40 border-b border-l">
                  {/* Basic bar chart for alert history */}
                  <div className="absolute inset-0 flex items-end">
                    <div className="flex-1 mx-1">
                      <div className="bg-red-400 w-full" style={{ height: '40%' }}></div>
                      <div className="text-xs mt-1 text-center">High</div>
                    </div>
                    <div className="flex-1 mx-1">
                      <div className="bg-yellow-400 w-full" style={{ height: '25%' }}></div>
                      <div className="text-xs mt-1 text-center">Medium</div>
                    </div>
                    <div className="flex-1 mx-1">
                      <div className="bg-blue-400 w-full" style={{ height: '60%' }}></div>
                      <div className="text-xs mt-1 text-center">Info</div>
                    </div>
                    <div className="flex-1 mx-1">
                      <div className="bg-green-400 w-full" style={{ height: '75%' }}></div>
                      <div className="text-xs mt-1 text-center">Resolved</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="font-medium mb-2">Dismissed Alerts</h3>
                  {dismissedAlerts.length > 0 ? (
                    <div className="space-y-2 max-h-24 overflow-y-auto">
                      {dismissedAlerts.map(alert => (
                        <div key={alert.id} className="flex justify-between text-sm p-1 border-b">
                          <span className="truncate">{alert.title}</span>
                          <span className="text-gray-500 text-xs">{new Date(alert.timestamp).toLocaleDateString()}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-gray-500">No dismissed alerts</p>
                  )}
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
        
        {/* Alert Action Dialog */}
        <Dialog open={showActionDialog} onOpenChange={setShowActionDialog}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>
                {selectedAlert && (
                  <div className="flex items-center">
                    {selectedAlert.severity === 'High' && <AlertTriangle className="h-5 w-5 mr-2 text-red-500" />}
                    {selectedAlert.severity === 'Medium' && <AlertTriangle className="h-5 w-5 mr-2 text-yellow-500" />}
                    {selectedAlert.severity === 'Information' && <Info className="h-5 w-5 mr-2 text-blue-500" />}
                    {selectedAlert?.title}
                  </div>
                )}
              </DialogTitle>
              <DialogDescription>
                {selectedAlert?.description}
              </DialogDescription>
            </DialogHeader>
            
            {selectedAlert && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-medium mb-3">Alert Details</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between p-2 bg-gray-50 rounded-md">
                        <span className="text-gray-600">Category:</span>
                        <span className="font-medium">{selectedAlert.category}</span>
                      </div>
                      <div className="flex justify-between p-2 bg-gray-50 rounded-md">
                        <span className="text-gray-600">Severity:</span>
                        <span className={`font-medium ${
                          selectedAlert.severity === 'High' ? 'text-red-600' :
                          selectedAlert.severity === 'Medium' ? 'text-yellow-600' :
                          'text-blue-600'
                        }`}>{selectedAlert.severity}</span>
                      </div>
                      <div className="flex justify-between p-2 bg-gray-50 rounded-md">
                        <span className="text-gray-600">Detected:</span>
                        <span className="font-medium">{new Date(selectedAlert.timestamp).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between p-2 bg-gray-50 rounded-md">
                        <span className="text-gray-600">Status:</span>
                        <span className="font-medium text-orange-500">Active</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-3">Impact Assessment</h3>
                    <div className="p-3 border rounded-md">
                      <div className="mb-3">
                        <h4 className="font-medium text-gray-700">Affected Areas:</h4>
                        <div className="flex flex-wrap gap-2 mt-1">
                          <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">Supply Chain</span>
                          <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">Operations</span>
                          <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">Customer Delivery</span>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-700">Potential Business Impact:</h4>
                        <div className="flex items-center mt-1">
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div 
                              className={`h-2.5 rounded-full ${
                                selectedAlert.severity === 'High' ? 'bg-red-500' : 
                                selectedAlert.severity === 'Medium' ? 'bg-yellow-500' : 
                                'bg-blue-500'
                              }`} 
                              style={{ width: selectedAlert.severity === 'High' ? '80%' : selectedAlert.severity === 'Medium' ? '50%' : '20%' }}
                            ></div>
                          </div>
                          <span className="ml-2 text-sm">
                            {selectedAlert.severity === 'High' ? 'Significant' : 
                             selectedAlert.severity === 'Medium' ? 'Moderate' : 
                             'Minor'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-3 flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-primary" />
                    Recommended Actions
                  </h3>
                  
                  <div className="border rounded-md overflow-hidden">
                    <div className="p-4 bg-primary/10">
                      <h4 className="font-medium">Action Plan</h4>
                      <p className="text-sm text-gray-600 mt-1">Follow these steps to address this alert:</p>
                    </div>
                    
                    <div className="p-4 space-y-4">
                      <div>
                        <h5 className="text-sm font-medium text-gray-700">Steps to Take:</h5>
                        <ol className="mt-2 space-y-2 pl-5 list-decimal">
                          {getRecommendedActions(selectedAlert).steps.map((step, index) => (
                            <li key={index} className="text-sm">{step}</li>
                          ))}
                        </ol>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-3 bg-green-50 rounded-md">
                          <h5 className="text-sm font-medium text-green-800">Expected Benefits:</h5>
                          <p className="text-xs mt-1 text-green-700">{getRecommendedActions(selectedAlert).benefits}</p>
                        </div>
                        
                        <div className="p-3 bg-yellow-50 rounded-md">
                          <h5 className="text-sm font-medium text-yellow-800">Urgency Level:</h5>
                          <p className="text-xs mt-1 text-yellow-700">{getRecommendedActions(selectedAlert).urgency}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <DialogFooter className="flex justify-between">
              <Button variant="outline" onClick={() => handleDismissAlert(selectedAlert?.id)}>
                Dismiss Alert
              </Button>
              <Button onClick={() => { 
                toast.success('Action plan implemented');
                setShowActionDialog(false);
              }}>
                Implement Action Plan
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        
        {/* Settings Dialog */}
        <Dialog open={settingsOpen} onOpenChange={setSettingsOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Alert Settings</DialogTitle>
              <DialogDescription>
                Configure how you receive and manage alerts.
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Email notifications</h3>
                  <p className="text-sm text-gray-500">Receive alerts via email</p>
                </div>
                <div 
                  className={`w-10 h-5 ${alertSettings.emailNotifications ? 'bg-green-500' : 'bg-gray-300'} rounded-full flex items-center p-1 cursor-pointer`}
                  onClick={() => setAlertSettings({...alertSettings, emailNotifications: !alertSettings.emailNotifications})}
                >
                  <div className={`w-3 h-3 bg-white rounded-full ${alertSettings.emailNotifications ? 'ml-auto' : ''}`}></div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">SMS alerts for high risk events</h3>
                  <p className="text-sm text-gray-500">Receive SMS for critical alerts</p>
                </div>
                <div 
                  className={`w-10 h-5 ${alertSettings.smsHighRisk ? 'bg-green-500' : 'bg-gray-300'} rounded-full flex items-center p-1 cursor-pointer`}
                  onClick={() => setAlertSettings({...alertSettings, smsHighRisk: !alertSettings.smsHighRisk})}
                >
                  <div className={`w-3 h-3 bg-white rounded-full ${alertSettings.smsHighRisk ? 'ml-auto' : ''}`}></div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Daily digest</h3>
                  <p className="text-sm text-gray-500">Receive a summary of alerts daily</p>
                </div>
                <div 
                  className={`w-10 h-5 ${alertSettings.dailyDigest ? 'bg-green-500' : 'bg-gray-300'} rounded-full flex items-center p-1 cursor-pointer`}
                  onClick={() => setAlertSettings({...alertSettings, dailyDigest: !alertSettings.dailyDigest})}
                >
                  <div className={`w-3 h-3 bg-white rounded-full ${alertSettings.dailyDigest ? 'ml-auto' : ''}`}></div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Minimum alert severity</h3>
                  <p className="text-sm text-gray-500">Filter alerts by minimum severity</p>
                </div>
                <select 
                  value={alertSettings.minimumSeverity}
                  onChange={(e) => setAlertSettings({...alertSettings, minimumSeverity: e.target.value})}
                  className="text-sm border rounded-md p-1"
                >
                  <option value="all">All alerts</option>
                  <option value="medium">Medium and high</option>
                  <option value="high">High only</option>
                </select>
              </div>
            </div>
            
            <DialogFooter>
              <Button variant="outline" onClick={() => setSettingsOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleSaveSettings}>
                Save Settings
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </PageTransition>
  );
};

export default Alerts;
