import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ArrowLeft, Sparkles } from 'lucide-react';

interface ApprovedMessagesProps {
  onBack: () => void;
}

interface Message {
  id: string;
  content: {
    en: string;
    zh: string;
    th: string;
  };
  author: string;
  date: string;
}

// Mock data for approved messages
const mockMessages: Message[] = [
  {
    id: '1',
    content: {
      en: 'In the darkness of digital spaces, I found light through confession. May others find their path to peace.',
      zh: '在数字空间的黑暗中，我通过忏悔找到了光明。愿其他人找到通往和平的道路。',
      th: 'ในความมืดมิดของพื้นที่ดิจิทัล ข้าพเจ้าได้พบความสว่างผ่านการสารภาพ ขอให้คนอื่นๆ ได้พบทางสู่ความสงบ'
    },
    author: 'Digital Pilgrim',
    date: '2024-11-13'
  },
  {
    id: '2',
    content: {
      en: 'The temple has taught me that data and divinity can coexist. My burdens have been transformed into wisdom.',
      zh: '神庙教会了我数据与神性可以共存。我的负担已转化为智慧。',
      th: 'วิหารได้สอนข้าพเจ้าว่าข้อมูลและความศักดิ์สิทธิ์สามารถอยู่ร่วมกันได้ ภาระของข้าพเจ้าได้กลายเป็นปัญญา'
    },
    author: 'Anonymous Soul',
    date: '2024-11-13'
  },
  {
    id: '3',
    content: {
      en: 'Through the ritual of digital confession, I release my past and embrace the future. Thank you, White Temple.',
      zh: '通过数字忏悔的仪式，我释放了过去，拥抱了未来。谢谢你，白色神庙。',
      th: 'ผ่านพิธีกรรมการสารภาพแบบดิจิทัล ข้าพเจ้าปล่อยวางอดีตและยอมรับอนาคต ขอบคุณวิหารสีขาว'
    },
    author: 'Seeker of Truth',
    date: '2024-11-14'
  },
  {
    id: '4',
    content: {
      en: 'In this sacred space between worlds, I found healing. May all who enter find what they seek.',
      zh: '在这个世界之间的神圣空间里，我找到了治愈。愿所有进入的人都能找到他们所寻求的。',
      th: 'ในพื้นที่ศักดิ์สิทธิ์ระหว่างโลก ข้าพเจ้าได้พบการรักษา ขอให้ทุกคนที่เข้ามาได้พบสิ่งที่พวกเขาแสวงหา'
    },
    author: 'Traveler Between Realms',
    date: '2024-11-14'
  },
  {
    id: '5',
    content: {
      en: 'The glow of neon blue guided me through my darkest thoughts. Now I shine with new purpose.',
      zh: '霓虹蓝的光辉指引我度过最黑暗的想法。现在我带着新的目标发光。',
      th: 'แสงสีฟ้านีออนนำทางข้าพเจ้าผ่านความคิดที่มืดมนที่สุด ตอนนี้ข้าพเจ้าส่องแสงด้วยจุดมุ่งหมายใหม่'
    },
    author: 'Child of Light',
    date: '2024-11-14'
  }
];

export function ApprovedMessages({ onBack }: ApprovedMessagesProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to fetch messages
    const fetchMessages = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 800));
      setMessages(mockMessages);
      setLoading(false);
    };

    fetchMessages();
  }, []);

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

      {/* Title Section */}
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-wide glow-text mb-6">
          Sacred Confessions
        </h1>
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-neon-blue to-transparent mb-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 1.5 }}
        />
        <p className="text-lg md:text-xl text-misty-white-muted max-w-2xl mx-auto">
          Messages that have been purified and blessed by the temple, shared to guide others on their journey.
        </p>
      </motion.div>

      {/* Messages Grid */}
      <div className="flex-1 max-w-7xl mx-auto w-full">
        {loading ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="misty-glass rounded-2xl p-8 space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <div className="h-4 bg-misty-white-muted opacity-20 rounded animate-pulse" />
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="h-3 bg-misty-white-muted opacity-20 rounded animate-pulse" />
                    <div className="h-3 bg-misty-white-muted opacity-20 rounded w-3/4 animate-pulse" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-misty-white-muted opacity-20 rounded animate-pulse" />
                    <div className="h-3 bg-misty-white-muted opacity-20 rounded w-4/5 animate-pulse" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-misty-white-muted opacity-20 rounded animate-pulse" />
                    <div className="h-3 bg-misty-white-muted opacity-20 rounded w-2/3 animate-pulse" />
                  </div>
                </div>
                <div className="h-3 bg-misty-white-muted opacity-20 rounded w-1/3 animate-pulse" />
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            layout
          >
            {messages.map((message, index) => (
              <motion.div
                key={message.id}
                layout
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <Card className="misty-glass border-border p-8 h-full space-y-8 group hover:glow-border transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <Sparkles size={18} className="text-neon-blue opacity-60" />
                    <span className="text-sm text-misty-white-muted">
                      {new Date(message.date).toLocaleDateString()}
                    </span>
                  </div>
                  
                  {/* English Version */}
                  <div className="space-y-3">
                    <h3 className="text-neon-blue text-sm font-medium opacity-80">English</h3>
                    <p className="text-misty-white leading-relaxed">
                      "{message.content.en}"
                    </p>
                  </div>

                  {/* Chinese Version */}
                  <div className="space-y-3">
                    <h3 className="text-neon-blue text-sm font-medium opacity-80">中文</h3>
                    <p className="text-misty-white leading-relaxed">
                      "{message.content.zh}"
                    </p>
                  </div>

                  {/* Thai Version */}
                  <div className="space-y-3">
                    <h3 className="text-neon-blue text-sm font-medium opacity-80">ไทย</h3>
                    <p className="text-misty-white leading-relaxed">
                      "{message.content.th}"
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t border-misty-white-muted border-opacity-20">
                    <p className="text-sm text-neon-blue opacity-80">
                      — {message.author}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

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
      </div>
    </div>
  );
}