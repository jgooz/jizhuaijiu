import React from 'react';
import { Activity, FileText, ShieldCheck, Leaf, ChevronRight, User } from 'lucide-react';
import { PageType } from '../types';

export default function Home({ navigate }: { navigate: (page: PageType) => void }) {
  return (
    <div className="flex flex-col min-h-full bg-slate-50">
      {/* Banner */}
      <div className="bg-gradient-to-br from-teal-500 to-blue-500 pt-12 pb-8 px-6 rounded-b-[2.5rem] shadow-lg text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-teal-300/20 rounded-full blur-2xl -ml-10 -mb-10"></div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <Leaf className="w-6 h-6 text-teal-100" />
            <h1 className="text-2xl font-bold tracking-wider">艾脊同行</h1>
          </div>
          <p className="text-teal-50 text-sm mb-6 opacity-90">智能化赋能的青少年脊柱健康中医康复公益服务平台</p>
          
          <button 
            onClick={() => navigate('Profile')}
            className="w-full bg-white text-teal-600 font-semibold py-3.5 rounded-2xl shadow-md hover:shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <Activity className="w-5 h-5" />
            开始智能筛查体验
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="px-5 py-6 flex-1 flex flex-col gap-5">
        {/* Quick Access */}
        <div 
          onClick={() => navigate('Report')}
          className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex items-center justify-between active:bg-slate-50 transition-colors cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-medium text-slate-800">查看最新报告</h3>
              <p className="text-xs text-slate-400 mt-0.5">了解您的脊柱健康状况</p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-slate-300" />
        </div>

        {/* Features */}
        <div>
          <h2 className="text-sm font-bold text-slate-800 mb-3 px-1">项目特色</h2>
          <div className="grid grid-cols-2 gap-3">
            <FeatureCard icon={<ShieldCheck className="w-5 h-5" />} title="智能筛查" desc="AI视觉辅助评估" color="bg-indigo-50 text-indigo-600" />
            <FeatureCard icon={<Leaf className="w-5 h-5" />} title="中医康复" desc="艾灸与运动结合" color="bg-emerald-50 text-emerald-600" />
            <FeatureCard icon={<Activity className="w-5 h-5" />} title="随访管理" desc="长期趋势跟踪" color="bg-orange-50 text-orange-600" />
            <FeatureCard icon={<User className="w-5 h-5" />} title="公益服务" desc="青少年健康守护" color="bg-blue-50 text-blue-600" />
          </div>
        </div>
        
        {/* Banner ad mock */}
        <div className="mt-auto bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-5 text-white shadow-md relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="font-bold mb-1">守护挺拔身姿</h3>
            <p className="text-xs text-slate-300 mb-3">早筛查、早干预、早康复</p>
            <button onClick={() => navigate('FollowUp')} className="text-xs bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-full backdrop-blur-sm transition-colors">
              查看随访记录
            </button>
          </div>
          <Leaf className="absolute -right-4 -bottom-4 w-24 h-24 text-white/10" />
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, desc, color }: { icon: React.ReactNode, title: string, desc: string, color: string }) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-50 flex flex-col gap-2">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${color}`}>
        {icon}
      </div>
      <div>
        <h4 className="font-medium text-sm text-slate-800">{title}</h4>
        <p className="text-[10px] text-slate-400 mt-0.5">{desc}</p>
      </div>
    </div>
  );
}
