import React from 'react';
import { ChevronLeft, Info, CheckCircle, ArrowRight } from 'lucide-react';
import { PageType, RiskLevel } from '../types';
import { cn } from '../lib/utils';

export default function Report({ navigate, riskLevel }: { navigate: (page: PageType) => void, riskLevel: RiskLevel }) {
  
  const getRiskDetails = () => {
    switch(riskLevel) {
      case 'high': return {
        level: '高风险',
        color: 'text-rose-500',
        bg: 'bg-rose-50',
        border: 'border-rose-200',
        score: 85,
        tips: '发现明显体态不对称，存在脊柱侧弯高风险。',
        intervention: '建议暂停高强度训练，以专业指导为准，居家温和辅助艾灸。',
        followup: '尽快线下就医并在医生指导下使用本工具。'
      };
      case 'medium': return {
        level: '中风险',
        color: 'text-amber-500',
        bg: 'bg-amber-50',
        border: 'border-amber-200',
        score: 45,
        tips: '存在轻微高低肩或骨盆倾斜，需引起重视。',
        intervention: '建议进行核心力量激活、背部对称性训练，配合大椎、命门艾灸。',
        followup: '建议每1个月复拍一次，持续观察。'
      };
      default: return {
        level: '低风险',
        color: 'text-emerald-500',
        bg: 'bg-emerald-50',
        border: 'border-emerald-200',
        score: 15,
        tips: '体态基本对称，未见明显异常。',
        intervention: '保持良好坐姿，可进行基础拉伸和日常姿态训练。',
        followup: '建议每3个月复拍一次，作为日常监测。'
      };
    }
  };

  const details = getRiskDetails();

  return (
    <div className="flex flex-col min-h-full bg-slate-50 pb-8">
      <div className="flex items-center justify-between px-4 py-4 border-b border-slate-100 bg-white sticky top-0 z-10">
        <button onClick={() => navigate('Home')} className="p-2 -ml-2 text-slate-500 hover:bg-slate-50 rounded-full">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-medium text-slate-800">评估报告</h1>
        <div className="w-10"></div>
      </div>

      <div className="px-5 py-6 flex flex-col gap-5">
        {/* Risk Score Card */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col items-center text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-teal-400 to-blue-500"></div>
          
          <h2 className="text-sm font-medium text-slate-500 mb-4">综合视觉风险指数</h2>
          
          <div className="relative w-32 h-32 flex items-center justify-center mb-4">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="#f1f5f9" strokeWidth="8" />
              <circle 
                cx="50" cy="50" r="45" fill="none" 
                stroke="currentColor" strokeWidth="8" 
                strokeDasharray={`${details.score * 2.82} 282`}
                className={details.color}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className={cn("text-3xl font-bold", details.color)}>{details.score}</span>
              <span className="text-[10px] text-slate-400">/100</span>
            </div>
          </div>
          
          <div className={cn("px-4 py-1.5 rounded-full text-sm font-bold mb-2", details.bg, details.color)}>
            {details.level}
          </div>
          <p className="text-sm text-slate-600">{details.tips}</p>
        </div>

        {/* Disclaimer */}
        <div className="bg-slate-100/80 rounded-2xl p-4 flex gap-3 items-start border border-slate-200/50">
          <Info className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
          <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
            <span className="text-slate-700 font-bold">免责声明：</span>
            本报告结果基于机器视觉初步比对生成，仅作为体态管理和运动康复参考，不能替代专业医疗机构的X光诊断与医生建议。
          </p>
        </div>

        {/* Summary */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 space-y-4">
          <h3 className="font-bold text-slate-800 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-teal-500" />
            干预与随访建议
          </h3>
          
          <div className="space-y-3">
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
              <div className="text-xs font-bold text-slate-700 mb-1">干预方向</div>
              <div className="text-xs text-slate-600 leading-relaxed">{details.intervention}</div>
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
              <div className="text-xs font-bold text-slate-700 mb-1">随访计划</div>
              <div className="text-xs text-slate-600 leading-relaxed">{details.followup}</div>
            </div>
          </div>
        </div>

        <button 
          onClick={() => navigate('Intervention')}
          className="mt-4 w-full bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold py-4 rounded-2xl shadow-md hover:shadow-lg active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        >
          查看定制干预方案
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
