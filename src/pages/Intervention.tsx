import React from 'react';
import { ChevronLeft, Flame, ActivitySquare, CalendarCheck } from 'lucide-react';
import { PageType, RiskLevel } from '../types';

export default function Intervention({ navigate, riskLevel }: { navigate: (page: PageType) => void, riskLevel: RiskLevel }) {
  
  const getPlan = () => {
    switch(riskLevel) {
      case 'high': return {
        moxa: {
          points: '大椎、身柱 (温和辅助)',
          freq: '每周1-2次，每次10分钟',
          notes: '以温通经络为主，不可过量。如有不适立即停止。'
        },
        exercise: {
          actions: '基础呼吸训练、极轻度拉伸',
          freq: '每日1次，每次5分钟',
          purpose: '维持关节活动度，缓解肌肉紧张。',
          warning: '暂停所有高强度体育训练！必须在专业医生指导下进行康复。'
        }
      };
      case 'medium': return {
        moxa: {
          points: '大椎、命门、肾俞',
          freq: '每周3次，每次15分钟',
          notes: '注意温度控制，避免烫伤。配合揉按效果更佳。'
        },
        exercise: {
          actions: '核心力量激活、背部对称性训练、小燕飞',
          freq: '每周4-5次，每次20分钟',
          purpose: '强化核心肌群，改善背部两侧肌肉力量不平衡。',
          warning: ''
        }
      };
      default: return {
        moxa: {
          points: '足三里、关元 (日常保健)',
          freq: '每周1次，每次15分钟',
          notes: '作为日常体质调理，选做。'
        },
        exercise: {
          actions: '基础拉伸、广播操、靠墙站立',
          freq: '每日1次，每次10分钟',
          purpose: '培养良好体态习惯，预防脊柱侧弯。',
          warning: ''
        }
      };
    }
  };

  const plan = getPlan();

  return (
    <div className="flex flex-col min-h-full bg-slate-50 pb-8">
      <div className="flex items-center justify-between px-4 py-4 border-b border-slate-100 bg-white sticky top-0 z-10">
        <button onClick={() => navigate('Report')} className="p-2 -ml-2 text-slate-500 hover:bg-slate-50 rounded-full">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-medium text-slate-800">定制干预方案</h1>
        <div className="w-10"></div>
      </div>

      <div className="px-5 py-6 flex flex-col gap-5">
        
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
          <h2 className="font-bold text-slate-800 mb-1">第一阶段目标</h2>
          <p className="text-xs text-slate-500">培养康复习惯，缓解肌肉不平衡状态。</p>
        </div>

        {/* Moxa Module */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100">
          <div className="bg-orange-50 px-4 py-3 flex items-center gap-2 border-b border-orange-100">
            <Flame className="w-5 h-5 text-orange-500" />
            <h3 className="font-bold text-orange-800">中医艾灸建议</h3>
          </div>
          <div className="p-4 space-y-3">
            <InfoRow label="建议穴位" value={plan.moxa.points} />
            <InfoRow label="建议频率" value={plan.moxa.freq} />
            <div className="pt-2 border-t border-slate-50">
              <span className="text-[11px] text-slate-400 block mb-1">注意事项</span>
              <p className="text-xs text-slate-600">{plan.moxa.notes}</p>
            </div>
          </div>
        </div>

        {/* Exercise Module */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100">
          <div className="bg-blue-50 px-4 py-3 flex items-center gap-2 border-b border-blue-100">
            <ActivitySquare className="w-5 h-5 text-blue-500" />
            <h3 className="font-bold text-blue-800">运动康复建议</h3>
          </div>
          <div className="p-4 space-y-3">
            <InfoRow label="建议动作" value={plan.exercise.actions} />
            <InfoRow label="训练频率" value={plan.exercise.freq} />
            <InfoRow label="训练目的" value={plan.exercise.purpose} />
            {plan.exercise.warning && (
              <div className="pt-2 border-t border-slate-50">
                <span className="text-[11px] text-rose-400 block mb-1 font-bold">⚠️ 医疗警告</span>
                <p className="text-xs text-rose-600 font-medium">{plan.exercise.warning}</p>
              </div>
            )}
          </div>
        </div>

        <button 
          onClick={() => navigate('CheckIn')}
          className="mt-4 w-full bg-teal-500 text-white font-semibold py-4 rounded-2xl shadow-md hover:bg-teal-600 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        >
          <CalendarCheck className="w-5 h-5" />
          开启今日打卡
        </button>
      </div>
    </div>
  );
}

function InfoRow({ label, value }: { label: string, value: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-[11px] text-slate-400">{label}</span>
      <span className="text-sm text-slate-700 font-medium">{value}</span>
    </div>
  );
}
