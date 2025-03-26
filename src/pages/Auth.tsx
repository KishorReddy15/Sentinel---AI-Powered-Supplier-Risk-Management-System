
import React, { useState } from 'react';
import PageTransition from '@/components/ui/PageTransition';
import GlassCard from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Upload, FileIcon, CheckCircle, AlertCircle } from 'lucide-react';
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const signupSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  company: z.string().min(2, "Company name is required"),
  industry: z.string().min(2, "Industry is required"),
  businessSize: z.string().min(2, "Business size is required"),
  businessNeeds: z.string().optional(),
  acceptTerms: z.boolean().refine(val => val === true, {
    message: "You must accept the terms and conditions",
  }),
});

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const navigate = useNavigate();
  const { login, signup, demoLogin } = useAuth();
  
  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      company: "",
      industry: "",
      businessSize: "",
      businessNeeds: "",
      acceptTerms: false,
    },
  });
  
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
    navigate('/dashboard');
  };
  
  const onSignupSubmit = async (values: z.infer<typeof signupSchema>) => {
    try {
      // Split name into firstName and lastName for the signup function
      const nameParts = values.name.split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || '';
      
      // Process file upload if exists
      if (uploadedFile) {
        // In a real application, you would send the file to your server/storage
        // Here we'll simulate processing the file
        setIsUploading(true);
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate upload delay
        setUploadSuccess(true);
        setIsUploading(false);
        toast.success("Business data uploaded successfully!");
      }
      
      await signup(
        values.email, 
        values.password, 
        firstName, 
        lastName, 
        values.company
      );
      
      toast.success("Account created! Welcome to SentinelAI.");
      navigate('/dashboard');
    } catch (error) {
      console.error("Signup error:", error);
      toast.error("There was a problem creating your account.");
    }
  };

  const handleDemoLogin = () => {
    demoLogin();
    navigate('/dashboard');
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
      setUploadSuccess(false);
    }
  };

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-10 max-w-2xl">
        <GlassCard className="p-6">
          <Tabs defaultValue="login">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login">
              <h1 className="text-2xl font-bold mb-6">Welcome Back</h1>
              
              <form onSubmit={handleLogin}>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your.email@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <div className="flex justify-end mt-1">
                    <a href="#" className="text-sm text-blue-600 hover:underline">
                      Forgot Password?
                    </a>
                  </div>
                </div>
                
                <Button type="submit" className="w-full mb-4">
                  Log In
                </Button>
                
                <Button type="button" variant="outline" className="w-full" onClick={handleDemoLogin}>
                  Try Demo Account
                </Button>
              </form>
            </TabsContent>
            
            <TabsContent value="signup">
              <h1 className="text-2xl font-bold mb-6">Create Account</h1>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSignupSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="your.email@company.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Company" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input type="password" placeholder="••••••••" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="industry"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Industry</FormLabel>
                          <FormControl>
                            <select
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              {...field}
                            >
                              <option value="">Select industry</option>
                              <option value="manufacturing">Manufacturing</option>
                              <option value="retail">Retail</option>
                              <option value="electronics">Electronics</option>
                              <option value="automotive">Automotive</option>
                              <option value="pharmaceutical">Pharmaceutical</option>
                              <option value="food">Food & Beverage</option>
                              <option value="fashion">Fashion & Apparel</option>
                              <option value="construction">Construction</option>
                              <option value="energy">Energy</option>
                              <option value="other">Other</option>
                            </select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="businessSize"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Business Size</FormLabel>
                          <FormControl>
                            <select
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              {...field}
                            >
                              <option value="">Select business size</option>
                              <option value="small">Small (1-50 employees)</option>
                              <option value="medium">Medium (51-500 employees)</option>
                              <option value="large">Large (501-5,000 employees)</option>
                              <option value="enterprise">Enterprise (5,000+ employees)</option>
                            </select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="businessNeeds"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Business Needs & Challenges</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Describe your key supply chain challenges and what you hope to accomplish with our platform..."
                            className="min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          This helps us tailor our solutions to your specific needs.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="space-y-2">
                    <Label htmlFor="file-upload" className="block text-sm font-medium">
                      Upload Business Data (Optional)
                    </Label>
                    <div className="border border-dashed border-gray-300 rounded-md p-4">
                      <div className="flex flex-col items-center justify-center space-y-2">
                        <Upload className="h-8 w-8 text-gray-400" />
                        <div className="text-sm text-center text-gray-500">
                          <p>Upload your previous supply chain data</p>
                          <p className="text-xs">(CSV, Excel, or JSON files preferred)</p>
                        </div>
                        <input
                          id="file-upload"
                          type="file"
                          className="hidden"
                          onChange={handleFileChange}
                          accept=".csv,.xlsx,.xls,.json"
                        />
                        <Button 
                          type="button" 
                          variant="outline"
                          size="sm"
                          onClick={() => document.getElementById('file-upload')?.click()}
                          className="mt-2"
                        >
                          Select File
                        </Button>
                      </div>
                    </div>
                    
                    {uploadedFile && (
                      <div className="flex items-center space-x-2 text-sm">
                        <FileIcon className="h-4 w-4 text-blue-500" />
                        <span className="text-gray-700">{uploadedFile.name}</span>
                        {isUploading && <span className="text-amber-500">Uploading...</span>}
                        {uploadSuccess && <CheckCircle className="h-4 w-4 text-green-500" />}
                      </div>
                    )}
                    
                    <p className="text-xs text-gray-500 mt-1">
                      We'll use your data to provide more accurate insights and recommendations.
                      Your data is secure and will only be used to improve your experience.
                    </p>
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="acceptTerms"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                        <FormControl>
                          <input
                            type="checkbox"
                            checked={field.value}
                            onChange={field.onChange}
                            className="h-4 w-4 mt-1"
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            I accept the <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="w-full">
                    Create Account
                  </Button>
                  
                  <div className="flex items-center justify-center">
                    <span className="text-sm text-gray-500">or</span>
                  </div>
                  
                  <Button type="button" variant="outline" className="w-full" onClick={handleDemoLogin}>
                    Try Demo Account
                  </Button>
                </form>
              </Form>
            </TabsContent>
          </Tabs>
        </GlassCard>
      </div>
    </PageTransition>
  );
};

export default Auth;
