
import { supabase } from '../lib/supabase';
import { supplierData, logisticsData, scenarioData, alertsData, userData } from '../data/dummyData';

// Function to create tables in Supabase (you should run this once)
export const createTables = async () => {
  console.log('Creating tables in Supabase...');
  
  // These SQL statements should be executed in the Supabase SQL editor
  const tableCreationInstructions = `
-- Execute these statements in the Supabase SQL Editor

-- Suppliers table
CREATE TABLE IF NOT EXISTS suppliers (
  id BIGINT PRIMARY KEY,
  name TEXT NOT NULL,
  location TEXT NOT NULL,
  risk_score INTEGER NOT NULL,
  risk_level TEXT NOT NULL,
  risk_factors TEXT[] NOT NULL,
  trend TEXT NOT NULL,
  last_updated TIMESTAMP WITH TIME ZONE NOT NULL
);

-- Logistics table
CREATE TABLE IF NOT EXISTS logistics (
  id TEXT PRIMARY KEY,
  origin TEXT NOT NULL,
  destination TEXT NOT NULL,
  status TEXT NOT NULL,
  eta TIMESTAMP WITH TIME ZONE NOT NULL,
  delay_risk TEXT NOT NULL,
  carrier_name TEXT NOT NULL,
  transport_mode TEXT NOT NULL
);

-- Scenarios table
CREATE TABLE IF NOT EXISTS scenarios (
  id BIGINT PRIMARY KEY,
  name TEXT NOT NULL,
  created TIMESTAMP WITH TIME ZONE NOT NULL,
  type TEXT NOT NULL,
  impact_level TEXT NOT NULL,
  financial_impact DECIMAL NOT NULL,
  duration INTEGER NOT NULL,
  probability INTEGER NOT NULL,
  affected_suppliers INTEGER[] NOT NULL
);

-- Alerts table
CREATE TABLE IF NOT EXISTS alerts (
  id BIGINT PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  severity TEXT NOT NULL,
  timestamp TIMESTAMP WITH TIME ZONE NOT NULL,
  is_read BOOLEAN NOT NULL,
  category TEXT NOT NULL
);

-- Users table
CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT NOT NULL,
  role TEXT NOT NULL,
  last_login TIMESTAMP WITH TIME ZONE
);
  `;
  
  console.log('Please execute the following SQL in your Supabase SQL Editor:');
  console.log(tableCreationInstructions);
  
  return tableCreationInstructions;
};

// Function to migrate supplier data
export const migrateSuppliers = async () => {
  console.log('Migrating supplier data...');
  
  for (const supplier of supplierData) {
    const { error } = await supabase
      .from('suppliers')
      .upsert({
        id: supplier.id,
        name: supplier.name,
        location: supplier.location,
        risk_score: supplier.riskScore,
        risk_level: supplier.riskLevel,
        risk_factors: supplier.riskFactors,
        trend: supplier.trend,
        last_updated: supplier.lastUpdated
      });
    
    if (error) {
      console.error('Error migrating supplier:', supplier.name, error);
    }
  }
  
  console.log('Supplier migration complete');
};

// Function to migrate logistics data
export const migrateLogistics = async () => {
  console.log('Migrating logistics data...');
  
  for (const item of logisticsData) {
    const { error } = await supabase
      .from('logistics')
      .upsert({
        id: item.id,
        origin: item.origin,
        destination: item.destination,
        status: item.status,
        eta: item.eta,
        delay_risk: item.delayRisk,
        carrier_name: item.carrierName,
        transport_mode: item.transportMode
      });
    
    if (error) {
      console.error('Error migrating logistics item:', item.id, error);
    }
  }
  
  console.log('Logistics migration complete');
};

// Function to migrate scenario data
export const migrateScenarios = async () => {
  console.log('Migrating scenario data...');
  
  for (const scenario of scenarioData) {
    const { error } = await supabase
      .from('scenarios')
      .upsert({
        id: scenario.id,
        name: scenario.name,
        created: scenario.created,
        type: scenario.type,
        impact_level: scenario.impactLevel,
        financial_impact: scenario.financialImpact,
        duration: scenario.duration,
        probability: scenario.probability,
        affected_suppliers: scenario.affectedSuppliers
      });
    
    if (error) {
      console.error('Error migrating scenario:', scenario.name, error);
    }
  }
  
  console.log('Scenario migration complete');
};

// Function to migrate alerts data
export const migrateAlerts = async () => {
  console.log('Migrating alerts data...');
  
  for (const alert of alertsData) {
    const { error } = await supabase
      .from('alerts')
      .upsert({
        id: alert.id,
        title: alert.title,
        description: alert.description,
        severity: alert.severity,
        timestamp: alert.timestamp,
        is_read: alert.isRead,
        category: alert.category
      });
    
    if (error) {
      console.error('Error migrating alert:', alert.title, error);
    }
  }
  
  console.log('Alerts migration complete');
};

// Function to migrate user data
export const migrateUsers = async () => {
  console.log('Migrating user data...');
  
  const demoUser = userData.demo;
  const { error } = await supabase
    .from('users')
    .upsert({
      id: demoUser.id,
      name: demoUser.name,
      email: demoUser.email,
      company: demoUser.company,
      role: demoUser.role,
      last_login: demoUser.lastLogin
    });
  
  if (error) {
    console.error('Error migrating user:', demoUser.name, error);
  }
  
  console.log('User migration complete');
};

// Migrate all data
export const migrateAllData = async () => {
  console.log('Starting data migration to Supabase...');
  
  await migrateSuppliers();
  await migrateLogistics();
  await migrateScenarios();
  await migrateAlerts();
  await migrateUsers();
  
  console.log('Data migration complete!');
};
