import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Play, MessageSquare, BookOpen } from "lucide-react";

interface HomePageProps {
  onEnterTemple: () => void;
  onViewMessages: () => void;
  onEnterDoctrines: () => void;
}

export function HomePage({
  onEnterTemple,
  onViewMessages,
  onEnterDoctrines,
}: HomePageProps) {
  const handleLivestreamClick = () => {
    // Open YouTube in a new tab - replace with actual livestream URL
    window.open(
      "https://youtube.com/watch?v=YOUR_LIVESTREAM_ID",
      "_blank",
    );
  };

  return (
    <div className="min-h-screen flex flex-col p-6 md:p-8 lg:p-12">
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <motion.div
          className="max-w-4xl mx-auto text-center space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider glow-text">
              White Temple
            </h1>
            <motion.div
              className="h-px bg-gradient-to-r from-transparent via-neon-blue to-transparent mt-6 mb-8"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 1.5 }}
            />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-misty-white-muted max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            A digital temple constructed between the internet
            and a physical site.
          </motion.p>

          {/* About Section with Livestream Button Inside */}
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
          >
            <div className="misty-glass rounded-2xl p-8 md:p-12 space-y-8">
              <h2 className="text-xl md:text-2xl font-medium text-neon-blue">
                About the Ceremony
              </h2>
              <p className="text-base md:text-lg leading-7 text-misty-white-muted">
                Join us on November 13 & 14 for a ritual of
                confession and purification.
                <br />
                Experience the space between data and divinity.
              </p>

              {/* Livestream Button - Inside the About Ceremony box */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.8 }}
              >
                <Button
                  onClick={handleLivestreamClick}
                  className="misty-glass glow-border text-base md:text-lg px-8 py-4 rounded-full text-misty-white hover:text-neon-blue hover:glow-text transition-all duration-300 group relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-neon-blue opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                    whileHover={{ scale: 1.05 }}
                  />
                  <span className="relative z-10 flex items-center gap-3">
                    <Play size={20} />
                    Watch Live Ceremony
                  </span>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Main Button Section - Consistent Frame Design */}
          <motion.div
            className="space-y-4 pt-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.2,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
            }}
          >
            {/* Enter Temple Button */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                onClick={onEnterDoctrines}
                className="misty-glass glow-border text-lg px-12 py-5 rounded-full text-neon-blue hover:text-black hover:bg-neon-blue transition-all duration-300 group relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-neon-blue opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  whileHover={{ scale: 1.05 }}
                />
                <span className="relative z-10 flex items-center gap-3">
                  <BookOpen size={20} />
                  Enter Temple
                </span>
              </Button>
            </motion.div>

            {/* Main Purification Button - Largest and Most Prominent */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                onClick={onEnterTemple}
                className="misty-glass glow-border text-2xl md:text-3xl lg:text-4xl px-20 py-10 rounded-full text-neon-blue hover:text-black hover:bg-neon-blue transition-all duration-300 group relative overflow-hidden font-bold"
              >
                <motion.div
                  className="absolute inset-0 bg-neon-blue opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                  whileHover={{ scale: 1.05 }}
                />
                <span className="relative z-10">
                  Purification
                </span>
              </Button>
            </motion.div>

            {/* View Confession Button */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                onClick={onViewMessages}
                className="misty-glass glow-border text-lg px-12 py-5 rounded-full text-neon-blue hover:text-black hover:bg-neon-blue transition-all duration-300 group relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-neon-blue opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  whileHover={{ scale: 1.05 }}
                />
                <span className="relative z-10 flex items-center gap-3">
                  <MessageSquare size={18} />
                  View the confession
                </span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Floating elements */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-1/4 left-1/4 w-2 h-2 bg-neon-blue rounded-full opacity-30"
              animate={{
                y: [-20, 20, -20],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute top-3/4 right-1/3 w-1 h-1 bg-misty-white rounded-full opacity-40"
              animate={{
                y: [20, -20, 20],
                opacity: [0.4, 0.9, 0.4],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
            <motion.div
              className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-neon-blue rounded-full opacity-20"
              animate={{
                y: [-15, 15, -15],
                x: [-10, 10, -10],
                opacity: [0.2, 0.7, 0.2],
              }}
              transition={{
                duration: 6,
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