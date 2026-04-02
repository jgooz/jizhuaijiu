import React, { useEffect, useState } from 'react';
import { Activity, User } from 'lucide-react';
import { PageType, UserProfile, RiskLevel } from '../types';

interface AIProcessingProps {
  navigate: (page: PageType) => void;
  profile: UserProfile;
  setRiskLevel: React.Dispatch<React.SetStateAction<RiskLevel>>;
}

export default function AIProcessing({ navigate, profile, setRiskLevel }: AIProcessingProps) {
  const [step, setStep] = useState(0);
  const steps = [
    "正在识别体表标志点...",
    "正在分析肩部水平度...",
    "正在测算骨盆倾斜角...",
    "正在生成视觉风险报告..."
  ];

  useEffect(() => {
    // Risk Assessment Logic
    let risk: RiskLevel = 'low';
    const ageNum = parseInt(profile.age) || 0;
    
    if (profile.hasHistory) {
      risk = 'high';
    } else if (!profile.hasHistory && ageNum >= 13) {
      risk = 'medium';
    } else {
      risk = 'low';
    }
    
    setRiskLevel(risk);

    // Animation sequence
    const interval = setInterval(() => {
      setStep(s => {
        if (s >= steps.length - 1) {
          clearInterval(interval);
          setTimeout(() => navigate('Report'), 800);
          return s;
        }
        return s + 1;
      });
    }, 800);

    return () => clearInterval(interval);
  }, [navigate, profile, setRiskLevel, steps.length]);

  return (
    <div className="flex flex-col min-h-full bg-slate-900 text-white items-center justify-center p-6 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      
      {/* Scanning visual */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative w-48 h-64 border border-teal-500/30 rounded-2xl overflow-hidden mb-8 bg-slate-800/50 backdrop-blur-sm shadow-[0_0_40px_rgba(20,184,166,0.2)] flex items-center justify-center">
          <svg className="w-32 h-32 text-teal-500/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="4" r="2.5" fill="currentColor" opacity="0.2" />
            <path d="M12 6.5v8" />
            <path d="M7 12l5-5.5 5 5.5" />
            <path d="M12 14.5l-3.5 7.5" />
            <path d="M12 14.5l3.5 7.5" />
            <circle cx="12" cy="7.5" r="0.75" fill="currentColor" stroke="none" />
            <circle cx="12" cy="10" r="0.75" fill="currentColor" stroke="none" />
            <circle cx="12" cy="12.5" r="0.75" fill="currentColor" stroke="none" />
          </svg>
          
          {/* Scanner line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-teal-400 shadow-[0_0_15px_rgba(45,212,191,1)] animate-[scan_2s_ease-in-out_infinite]"></div>
          
          {/* Grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#14b8a633_1px,transparent_1px),linear-gradient(to_bottom,#14b8a633_1px,transparent_1px)] bg-[size:20px_20px]"></div>
          
          {/* Mock keypoints */}
          <div className="absolute top-[20%] left-[30%] w-2 h-2 bg-teal-400 rounded-full animate-ping"></div>
          <div className="absolute top-[22%] right-[30%] w-2 h-2 bg-teal-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-[50%] left-[40%] w-2 h-2 bg-teal-400 rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
          <div className="absolute top-[50%] right-[40%] w-2 h-2 bg-teal-400 rounded-full animate-ping" style={{ animationDelay: '0.7s' }}></div>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <Activity className="w-6 h-6 text-teal-400 animate-pulse" />
          <h2 className="text-xl font-bold tracking-wider text-teal-50">AI 视觉分析中</h2>
        </div>
        
        <div className="h-6 overflow-hidden relative w-full text-center">
          <p className="text-sm text-teal-200/80 transition-all duration-300" key={step}>
            {steps[step]}
          </p>
        </div>
      </div>
    </div>
  );
}
