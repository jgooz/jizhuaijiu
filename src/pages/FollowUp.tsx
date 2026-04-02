import React from 'react';
import { ChevronLeft, CalendarClock, TrendingDown } from 'lucide-react';
import { PageType } from '../types';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { cn } from '../lib/utils';

const data = [
  { name: '1月', score: 65 },
  { name: '2月', score: 58 },
  { name: '3月', score: 45 },
];

export default function FollowUp({ navigate }: { navigate: (page: PageType) => void }) {
  return (
    <div className="flex flex-col min-h-full bg-slate-50 pb-8">
      <div className="flex items-center justify-between px-4 py-4 border-b border-slate-100 bg-white sticky top-0 z-10">
        <button onClick={() => navigate('Home')} className="p-2 -ml-2 text-slate-500 hover:bg-slate-50 rounded-full">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-medium text-slate-800">随访记录</h1>
        <div className="w-10"></div>
      </div>

      <div className="px-5 py-6 flex flex-col gap-5">
        
        {/* Next Follow-up Alert */}
        <div className="bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl p-5 text-white shadow-md flex items-center gap-4">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0">
            <CalendarClock className="w-6 h-6" />
          </div>
          <div>
            <p className="text-teal-50 text-xs mb-1">距离下次建议复拍还有</p>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold">14</span>
              <span className="text-sm">天</span>
            </div>
          </div>
        </div>

        {/* Trend Chart */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="font-bold text-slate-800">风险指数趋势</h2>
              <p className="text-xs text-slate-400 mt-0.5">指数越低越好</p>
            </div>
            <div className="bg-emerald-50 text-emerald-600 px-2 py-1 rounded text-[10px] font-bold flex items-center gap-1">
              <TrendingDown className="w-3 h-3" />
              情况好转
            </div>
          </div>
          
          <div className="h-48 w-full -ml-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} domain={[0, 100]} />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  labelStyle={{ color: '#64748b', fontSize: '12px', marginBottom: '4px' }}
                />
                <Line type="monotone" dataKey="score" stroke="#14b8a6" strokeWidth={3} dot={{ r: 4, fill: '#14b8a6', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* History List */}
        <div>
          <h3 className="font-bold text-slate-800 mb-3 px-1">历史评估记录</h3>
          <div className="space-y-3">
            <HistoryCard date="2026-03-15" score={45} level="中风险" color="text-amber-500" bg="bg-amber-50" />
            <HistoryCard date="2026-02-10" score={58} level="中风险" color="text-amber-500" bg="bg-amber-50" />
            <HistoryCard date="2026-01-05" score={65} level="中高风险" color="text-orange-500" bg="bg-orange-50" />
          </div>
        </div>

      </div>
    </div>
  );
}

function HistoryCard({ date, score, level, color, bg }: { date: string, score: number, level: string, color: string, bg: string }) {
  return (
    <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center justify-between">
      <div>
        <div className="text-sm font-bold text-slate-800 mb-1">{date}</div>
        <div className="text-xs text-slate-500">风险指数: {score}</div>
      </div>
      <div className={cn("px-3 py-1 rounded-full text-xs font-bold", bg, color)}>
        {level}
      </div>
    </div>
  );
}
