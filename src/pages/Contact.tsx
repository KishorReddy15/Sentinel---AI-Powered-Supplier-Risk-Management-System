
import React from 'react';
import PageTransition from '@/components/ui/PageTransition';
import GlassCard from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center mb-10">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <GlassCard className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-gray-700 mb-6">
              Have questions about Sentinel? Our team is here to help. Fill out the form and we'll get back to you as soon as possible.
            </p>
            
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your.email@company.com"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your company"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </GlassCard>
          
          <GlassCard className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            
            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-2">Headquarters</h3>
              <p className="text-gray-700">
                123 Supply Chain Avenue<br />
                Suite 400<br />
                San Francisco, CA 94103<br />
                United States
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-2">Contact Details</h3>
              <p className="text-gray-700 mb-2">
                <span className="font-medium">Email:</span> info@sentinelai.com
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-medium">Phone:</span> +1 (555) 123-4567
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Support:</span> support@sentinelai.com
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-2">Office Hours</h3>
              <p className="text-gray-700">
                Monday - Friday: 9:00 AM - 6:00 PM (PST)<br />
                Saturday - Sunday: Closed
              </p>
            </div>
          </GlassCard>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
