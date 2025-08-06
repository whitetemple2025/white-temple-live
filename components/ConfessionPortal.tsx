import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { ArrowLeft, Send } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface ConfessionPortalProps {
  onBack: () => void;
}

export function ConfessionPortal({ onBack }: ConfessionPortalProps) {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim()) {
      toast.error('Please enter a message for purification');
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Show success message
    toast.success('Your message has been received for purification', {
      description: 'The temple acknowledges your confession.'
    });

    // Reset form
    setName('');
    setMessage('');
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen flex flex-col p-6 md:p-8 lg:p-12">
      {/* Back Button */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Button
          onClick={onBack}
          variant="ghost"
          className="text-misty-white-muted hover:text-neon-blue transition-colors duration-300 gap-2"
        >
          <ArrowLeft size={18} />
          Return to Temple
        </Button>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center max-w-3xl mx-auto w-full">
        <motion.div 
          className="space-y-12 w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Title */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-wide glow-text mb-6">
              Your sin shall be purified
            </h1>
            <motion.div
              className="h-px bg-gradient-to-r from-transparent via-neon-blue to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 1.5 }}
            />
          </motion.div>

          {/* Confession Form */}
          <motion.form 
            onSubmit={handleSubmit}
            className="space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            {/* Optional Name Input */}
            <div className="space-y-3">
              <label className="block text-sm text-misty-white-muted">
                Optional name
              </label>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Anonymous"
                className="misty-glass h-14 text-lg bg-input-background border-border text-misty-white placeholder-misty-white-muted focus:border-neon-blue focus:glow-border transition-all duration-300"
              />
            </div>

            {/* Message Input */}
            <div className="space-y-3">
              <label className="block text-sm text-misty-white-muted">
                Your message to be purified
              </label>
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter your confession, thoughts, or burdens here. Let the digital temple receive and transform them..."
                className="misty-glass min-h-[200px] md:min-h-[250px] text-lg bg-input-background border-border text-misty-white placeholder-misty-white-muted focus:border-neon-blue focus:glow-border transition-all duration-300 resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <motion.div 
              className="flex justify-center pt-6"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                type="submit"
                disabled={isSubmitting}
                className="temple-gradient glow-border text-lg px-12 py-6 rounded-full text-neon-blue hover:text-black hover:bg-neon-blue transition-all duration-300 group relative overflow-hidden disabled:opacity-50"
              >
                <motion.div
                  className="absolute inset-0 bg-neon-blue opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  whileHover={{ scale: 1.05 }}
                />
                <span className="relative z-10 flex items-center gap-3">
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="w-5 h-5 border-2 border-neon-blue border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      Purifying...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send to purification
                    </>
                  )}
                </span>
              </Button>
            </motion.div>
          </motion.form>

          {/* Atmospheric Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-1/3 left-1/5 w-3 h-3 bg-neon-blue rounded-full opacity-20"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-misty-white rounded-full opacity-30"
              animate={{
                y: [-10, 10, -10],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              }}
            />
            <motion.div
              className="absolute top-1/4 right-1/3 w-1 h-1 bg-neon-blue rounded-full opacity-40"
              animate={{
                scale: [1, 2, 1],
                opacity: [0.4, 0.9, 0.4],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}