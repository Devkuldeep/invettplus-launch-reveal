
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { ArrowRight } from 'lucide-react';

const SubscribeForm: React.FC = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive"
      });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "Thank you for subscribing. We'll notify you when we launch.",
      });
      setEmail('');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-2 animate-fade-in" style={{ animationDelay: '0.6s' }}>
      <div className="flex w-full items-center space-x-2">
        <Input
          type="email"
          placeholder="Enter your email"
          className="h-12 focus:ring-invett-primary"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
        <Button 
          type="submit" 
          className="h-12 px-6 bg-invett-primary hover:bg-invett-primary/90 moving-gradient"
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending
            </span>
          ) : (
            <span className="flex items-center">
              Notify Me <ArrowRight className="ml-2 h-4 w-4" />
            </span>
          )}
        </Button>
      </div>
      <p className="text-xs text-center text-gray-500">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </form>
  );
};

export default SubscribeForm;
