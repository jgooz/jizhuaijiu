import React from 'react';
import { PageType, UserProfile } from '../types';
import { UserCircle2, Settings, HelpCircle, HeartHandshake, ChevronRight, FileText } from 'lucide-react';

export default function Mine({ navigate, profile }: { navigate: (page: PageType) => void, profile: UserProfile }) {
  return (
    <div className="flex flex-col min-h-full bg-slate-50">
      {/* Header Profile */}
      <div className="bg-white pt-12 pb-6 px-6 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center text-teal-500 shrink-0">
            <UserCircle2 className="w-10 h-10" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-800">{profile.name || '未命名用户'}</h1>
            <p className="text-sm text-slate-500 mt-1">{profile.age ? `${profile.age}岁` : '请完善资料'} · {profile.gender}</p>
          </div>
          <button onClick={() => navigate('Profile')} className="ml-auto text-xs text-teal-600 bg-teal-50 px-3 py-1.5 rounded-full font-medium">
            编辑资料
          </button>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="bg-slate-50 rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-slate-800">3</div>
            <div className="text-xs text-slate-500 mt-1">累计报告</div>
          </div>
          <div className="bg-slate-50 rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-slate-800">12</div>
            <div className="text-xs text-slate-500 mt-1">打卡天数</div>
          </div>
        </div>
      </div>

      <div className="px-4 py-6 space-y-4">
        {/* Menu Group 1 */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100">
          <MenuItem icon={<FileText className="w-5 h-5 text-blue-500" />} title="我的报告" onClick={() => navigate('FollowUp')} />
          <div className="h-px bg-slate-50 ml-12"></div>
          <MenuItem icon={<HeartHandshake className="w-5 h-5 text-rose-500" />} title="公益说明" onClick={() => {}} />
        </div>

        {/* Menu Group 2 */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100">
          <MenuItem icon={<HelpCircle className="w-5 h-5 text-amber-500" />} title="使用帮助" onClick={() => {}} />
          <div className="h-px bg-slate-50 ml-12"></div>
          <MenuItem icon={<Settings className="w-5 h-5 text-slate-500" />} title="系统设置" onClick={() => {}} />
        </div>
        
        <div className="text-center pt-6 pb-4">
          <p className="text-[10px] text-slate-400">艾脊同行 v1.0.0 Demo版</p>
          <p className="text-[10px] text-slate-400 mt-1">仅供演示使用，不作为医疗诊断依据</p>
        </div>
      </div>
    </div>
  );
}

function MenuItem({ icon, title, onClick }: { icon: React.ReactNode, title: string, onClick: () => void }) {
  return (
    <div 
      onClick={onClick}
      className="flex items-center justify-between p-4 bg-white hover:bg-slate-50 active:bg-slate-100 transition-colors cursor-pointer"
    >
      <div className="flex items-center gap-3">
        {icon}
        <span className="text-sm font-medium text-slate-700">{title}</span>
      </div>
      <ChevronRight className="w-4 h-4 text-slate-300" />
    </div>
  );
}
