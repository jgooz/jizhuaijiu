import React from 'react';
import { ChevronLeft, UserCircle2 } from 'lucide-react';
import { PageType, UserProfile } from '../types';

interface ProfileProps {
  navigate: (page: PageType) => void;
  profile: UserProfile;
  setProfile: React.Dispatch<React.SetStateAction<UserProfile>>;
}

export default function Profile({ navigate, profile, setProfile }: ProfileProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setProfile(prev => ({ ...prev, [name]: val }));
  };

  const fillDemoData = () => {
    setProfile({
      name: '李小明',
      age: '12',
      gender: '男',
      phone: '13800138000',
      isFirstTime: true,
      hasHistory: false,
    });
  };

  return (
    <div className="flex flex-col min-h-full bg-white">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-slate-100 sticky top-0 bg-white z-10">
        <button onClick={() => navigate('Home')} className="p-2 -ml-2 text-slate-500 hover:bg-slate-50 rounded-full">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-medium text-slate-800">用户建档</h1>
        <div className="w-10"></div>
      </div>

      <div className="px-6 py-6 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center text-teal-500">
              <UserCircle2 className="w-7 h-7" />
            </div>
            <div>
              <h2 className="font-bold text-slate-800">基本信息</h2>
              <p className="text-xs text-slate-400">请完善评估对象信息</p>
            </div>
          </div>
          <button 
            onClick={fillDemoData}
            className="text-xs text-teal-600 bg-teal-50 px-3 py-1.5 rounded-full font-medium active:bg-teal-100"
          >
            填充演示数据
          </button>
        </div>

        <div className="space-y-4 flex-1">
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-slate-700 px-1">姓名</label>
            <input 
              type="text" name="name" value={profile.name} onChange={handleChange}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
              placeholder="请输入姓名"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-700 px-1">年龄</label>
              <input 
                type="number" name="age" value={profile.age} onChange={handleChange}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
                placeholder="例如: 12"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-700 px-1">性别</label>
              <select 
                name="gender" value={profile.gender} onChange={handleChange}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all appearance-none"
              >
                <option value="男">男</option>
                <option value="女">女</option>
              </select>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-slate-700 px-1">联系电话</label>
            <input 
              type="tel" name="phone" value={profile.phone} onChange={handleChange}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
              placeholder="请输入联系电话"
            />
          </div>

          <div className="pt-2 space-y-3">
            <label className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
              <span className="text-sm text-slate-700 font-medium">首次进行评估</span>
              <input 
                type="checkbox" name="isFirstTime" checked={profile.isFirstTime} onChange={handleChange}
                className="w-5 h-5 text-teal-500 rounded focus:ring-teal-500"
              />
            </label>
            <label className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
              <span className="text-sm text-slate-700 font-medium">是否有体态异常史</span>
              <input 
                type="checkbox" name="hasHistory" checked={profile.hasHistory} onChange={handleChange}
                className="w-5 h-5 text-teal-500 rounded focus:ring-teal-500"
              />
            </label>
          </div>
        </div>

        <div className="mt-8 pb-6">
          <button 
            onClick={() => navigate('Upload')}
            disabled={!profile.name || !profile.age}
            className="w-full bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold py-3.5 rounded-2xl shadow-md hover:shadow-lg disabled:opacity-50 disabled:shadow-none active:scale-[0.98] transition-all"
          >
            下一步：拍照上传
          </button>
        </div>
      </div>
    </div>
  );
}
