import React, { useState } from 'react';
import { PageType } from '../types';
import { Calendar, CheckCircle2, Circle, Trophy, Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';

export default function CheckIn({ navigate }: { navigate: (page: PageType) => void }) {
  const [moxaDone, setMoxaDone] = useState(false);
  const [exerciseDone, setExerciseDone] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);

  const handleCheck = (type: 'moxa' | 'exercise') => {
    if (type === 'moxa') setMoxaDone(true);
    if (type === 'exercise') setExerciseDone(true);
    
    // If both done just now
    if ((type === 'moxa' && exerciseDone) || (type === 'exercise' && moxaDone)) {
      setShowCelebration(true);
      setTimeout(() => setShowCelebration(false), 3000);
    }
  };

  const progress = (moxaDone ? 50 : 0) + (exerciseDone ? 50 : 0);

  return (
    <div className="flex flex-col min-h-full bg-slate-50 relative">
      {/* Header */}
      <div className="bg-teal-500 pt-12 pb-16 px-6 rounded-b-[2rem] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <h1 className="text-2xl font-bold mb-2">今日训练打卡</h1>
        <p className="text-teal-100 text-sm">坚持每一天，遇见更挺拔的自己</p>
      </div>

      <div className="px-5 -mt-10 relative z-10 flex-1 flex flex-col gap-5 pb-8">
        
        {/* Progress Card */}
        <div className="bg-white rounded-2xl p-5 shadow-md border border-slate-100 flex items-center gap-4">
          <div className="relative w-16 h-16 flex items-center justify-center shrink-0">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="#f1f5f9" strokeWidth="8" />
              <circle 
                cx="50" cy="50" r="45" fill="none" 
                stroke="#14b8a6" strokeWidth="8" 
                strokeDasharray={`${progress * 2.82} 282`}
                className="transition-all duration-1000 ease-out"
                strokeLinecap="round"
              />
            </svg>
            <span className="absolute text-sm font-bold text-slate-700">{progress}%</span>
          </div>
          <div>
            <h2 className="font-bold text-slate-800 mb-1">今日完成度</h2>
            <p className="text-xs text-slate-500">已连续打卡 <span className="text-teal-500 font-bold">3</span> 天</p>
          </div>
          <Trophy className="w-8 h-8 text-amber-400 ml-auto opacity-50" />
        </div>

        {/* Tasks */}
        <div className="space-y-3 mt-2">
          <h3 className="font-bold text-slate-800 px-1">今日任务</h3>
          
          <TaskCard 
            title="中医艾灸调理" 
            desc="大椎、命门 / 15分钟" 
            done={moxaDone} 
            onClick={() => handleCheck('moxa')} 
            color="orange"
          />
          
          <TaskCard 
            title="核心力量激活" 
            desc="背部对称性训练 / 20分钟" 
            done={exerciseDone} 
            onClick={() => handleCheck('exercise')} 
            color="blue"
          />
        </div>

      </div>

      {/* Celebration Overlay */}
      {showCelebration && (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-50">
          <div className="bg-white/90 backdrop-blur-sm px-8 py-6 rounded-3xl shadow-2xl flex flex-col items-center animate-bounce">
            <Sparkles className="w-12 h-12 text-amber-400 mb-3" />
            <h3 className="text-xl font-bold text-teal-600">太棒了！</h3>
            <p className="text-sm text-slate-600 mt-1">今日任务全部完成</p>
          </div>
        </div>
      )}
    </div>
  );
}

function TaskCard({ title, desc, done, onClick, color }: { title: string, desc: string, done: boolean, onClick: () => void, color: 'orange' | 'blue' }) {
  const colorMap = {
    orange: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-100' },
    blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-100' }
  };
  const c = colorMap[color];

  return (
    <div 
      onClick={!done ? onClick : undefined}
      className={cn(
        "rounded-2xl p-4 border flex items-center gap-4 transition-all",
        done ? "bg-slate-50 border-slate-200 opacity-70" : "bg-white border-slate-100 shadow-sm cursor-pointer hover:border-teal-300"
      )}
    >
      <div className={cn("w-10 h-10 rounded-full flex items-center justify-center shrink-0", done ? "bg-slate-200 text-slate-400" : c.bg + " " + c.text)}>
        {done ? <CheckCircle2 className="w-6 h-6" /> : <Calendar className="w-5 h-5" />}
      </div>
      <div className="flex-1">
        <h4 className={cn("font-bold text-sm", done ? "text-slate-500 line-through" : "text-slate-800")}>{title}</h4>
        <p className="text-xs text-slate-400 mt-0.5">{desc}</p>
      </div>
      <div>
        {done ? (
          <span className="text-xs font-medium text-slate-400">已完成</span>
        ) : (
          <button className="w-8 h-8 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-300 hover:border-teal-500 hover:text-teal-500 transition-colors">
            <Circle className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}
