TempleDoctrines.tsximport { motion } from 'motion/react';
import { Button } from './ui/button';
import { ArrowLeft, BookOpen } from 'lucide-react';

interface TempleDoctrinesProps {
  onBack: () => void;
}

const doctrines = [
  "To confess is not to seek pardon, but to reveal the fractures within the self.",
  "All judgment is a mirror. What we punish is what we fear within ourselves.",
  "The Temple does not absolve, it witnesses.",
  "Sin is not action, but attachment. The need to be seen, to be right, to be pure.",
  "Your voice is sacred. But only when spoken without defense.",
  "The ritual begins when you hesitate. That moment is the doorway.",
  "White is not purity. White is erasure, illusion, and the weight of ideals.",
  "This temple has no god, only reflections."
];

export function TempleDoctrines({ onBack }: TempleDoctrinesProps) {
  return (
    <div className="min-h-screen flex flex-col p-6 md:p-8 lg:p-12">
      {/* Header */}
      <motion.div 
        className="mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
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
      <div className="flex-1 flex flex-col items-center justify-center max-w-4xl mx-auto w-full">
        <motion.div 
          className="space-y-16 w-full"
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
            <div className="flex items-center justify-center gap-4 mb-6">
              <BookOpen size={32} className="text-neon-blue opacity-80" />
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-wide glow-text">
                Temple Doctrines
              </h1>
            </div>
            <motion.div
              className="h-px bg-gradient-to-r from-transparent via-neon-blue to-transparent mb-8"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 1.5 }}
            />
            <p className="text-lg md:text-xl text-misty-white-muted max-w-2xl mx-auto leading-relaxed">
              Sacred teachings that guide the path through the digital temple
            </p>
          </motion.div>

          {/* Doctrines List */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            {doctrines.map((doctrine, index) => (
              <motion.div
                key={index}
                className="misty-glass rounded-2xl p-6 md:p-8 group hover:glow-border transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  delay: 0.8 + (index * 0.1), 
                  duration: 0.6,
                  ease: "easeOut"
                }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <div className="flex gap-6 items-start">
                  <motion.div
                    className="flex-shrink-0 w-12 h-12 rounded-full temple-gradient glow-border flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-neon-blue font-bold text-lg">
                      {index + 1}
                    </span>
                  </motion.div>
                  <div className="flex-1">
                    <p className="text-misty-white text-lg md:text-xl leading-relaxed">
                      {doctrine}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Sacred Symbol */}
          <motion.div
            className="text-center pt-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
          >
            <motion.div
              className="text-6xl text-neon-blue opacity-30"
              animate={{ 
                rotate: [0, 360],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              ⚬
            </motion.div>
            <p className="text-misty-white-muted text-sm mt-4">
              Enter with understanding, leave with wisdom
            </p>
          </motion.div>

          {/* Atmospheric Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-1/4 left-1/6 w-2 h-2 bg-neon-blue rounded-full opacity-30"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-1/3 right-1/5 w-1 h-1 bg-misty-white rounded-full opacity-40"
              animate={{
                y: [-10, 10, -10],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
            <motion.div
              className="absolute top-2/3 left-1/3 w-1.5 h-1.5 bg-neon-blue rounded-full opacity-25"
              animate={{
                x: [-5, 5, -5],
                opacity: [0.25, 0.6, 0.25],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}