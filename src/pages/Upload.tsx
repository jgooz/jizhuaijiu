import React, { useState } from 'react';
import { ChevronLeft, Camera, AlertCircle, CheckCircle2 } from 'lucide-react';
import { PageType } from '../types';

export default function Upload({ navigate }: { navigate: (page: PageType) => void }) {
  const [uploads, setUploads] = useState({
    front: false,
    back: false,
    bend: false
  });

  const handleUpload = (type: keyof typeof uploads) => {
    // Mock upload delay
    setTimeout(() => {
      setUploads(prev => ({ ...prev, [type]: true }));
    }, 500);
  };

  const allUploaded = uploads.front && uploads.back && uploads.bend;

  return (
    <div className="flex flex-col min-h-full bg-slate-50">
      <div className="flex items-center justify-between px-4 py-4 border-b border-slate-100 bg-white sticky top-0 z-10">
        <button onClick={() => navigate('Profile')} className="p-2 -ml-2 text-slate-500 hover:bg-slate-50 rounded-full">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-medium text-slate-800">影像采集</h1>
        <div className="w-10"></div>
      </div>

      <div className="px-5 py-5 flex-1 flex flex-col">
        <div className="mb-4">
          <h2 className="font-bold text-slate-800 mb-1">拍摄要求</h2>
          <p className="text-xs text-slate-500">请穿紧身衣物，露出颈部及背部轮廓，并在关键骨骼点贴上标记贴。</p>
        </div>

        <div className="space-y-4 flex-1">
          <UploadBox 
            title="正面站立位" 
            desc="双脚并拢，自然站立，平视前方"
            isUploaded={uploads.front}
            onClick={() => handleUpload('front')}
            mockVisual={
              <svg className="w-10 h-10 text-teal-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="4" r="2.5" />
                <path d="M12 6.5v8" />
                <path d="M7 12l5-5.5 5 5.5" />
                <path d="M12 14.5l-3.5 7.5" />
                <path d="M12 14.5l3.5 7.5" />
              </svg>
            }
          />
          <UploadBox 
            title="背面站立位" 
            desc="背对镜头，双臂自然下垂"
            isUploaded={uploads.back}
            onClick={() => handleUpload('back')}
            mockVisual={
              <svg className="w-10 h-10 text-teal-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="4" r="2.5" fill="currentColor" opacity="0.2" />
                <path d="M12 6.5v8" />
                <path d="M7 12l5-5.5 5 5.5" />
                <path d="M12 14.5l-3.5 7.5" />
                <path d="M12 14.5l3.5 7.5" />
                <circle cx="12" cy="7.5" r="0.75" fill="currentColor" stroke="none" />
                <circle cx="12" cy="10" r="0.75" fill="currentColor" stroke="none" />
                <circle cx="12" cy="12.5" r="0.75" fill="currentColor" stroke="none" />
              </svg>
            }
          />
          <UploadBox 
            title="前屈位 (Adams测试)" 
            desc="双膝伸直，双手合十自然下垂，躯干前屈"
            isUploaded={uploads.bend}
            onClick={() => handleUpload('bend')}
            mockVisual={
              <svg className="w-10 h-10 text-teal-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 22V11" />
                <path d="M16 11C16 5 10 4 6 6" />
                <circle cx="4" cy="8" r="2.5" />
                <path d="M9 5.5V16" />
                <circle cx="14.5" cy="8.5" r="0.75" fill="currentColor" stroke="none" />
                <circle cx="12" cy="5.5" r="0.75" fill="currentColor" stroke="none" />
                <circle cx="8.5" cy="4.5" r="0.75" fill="currentColor" stroke="none" />
              </svg>
            }
          />
        </div>

        <div className="mt-8 pb-6 space-y-4">
          <button 
            onClick={() => navigate('AIProcessing')}
            disabled={!allUploaded}
            className="w-full bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold py-3.5 rounded-2xl shadow-md hover:shadow-lg disabled:opacity-50 disabled:from-slate-300 disabled:to-slate-300 disabled:shadow-none active:scale-[0.98] transition-all"
          >
            开始智能评估
          </button>
          
          <div className="bg-amber-50 border border-amber-100 rounded-xl p-3 flex items-start gap-2">
            <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <div className="text-xs text-amber-700 leading-relaxed">
              <span className="font-bold">本地演示说明：</span>
              点击上方区域直接加载预设示意图，不调用真实相机，数据不上传云端。
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function UploadBox({ title, desc, isUploaded, onClick, mockVisual }: { title: string, desc: string, isUploaded: boolean, onClick: () => void, mockVisual: React.ReactNode }) {
  return (
    <div 
      onClick={!isUploaded ? onClick : undefined}
      className={`relative overflow-hidden rounded-2xl border-2 border-dashed transition-all ${
        isUploaded ? 'border-teal-500 bg-teal-50/30' : 'border-slate-200 bg-white hover:border-teal-300 hover:bg-teal-50/10 cursor-pointer'
      }`}
    >
      <div className="p-4 flex items-center gap-4">
        <div className={`w-16 h-16 rounded-xl flex items-center justify-center shrink-0 overflow-hidden relative ${isUploaded ? 'bg-teal-100/50' : 'bg-slate-100'}`}>
          {isUploaded ? (
            <>
              {mockVisual}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-teal-400 shadow-[0_0_8px_rgba(45,212,191,1)] animate-[scan_2s_ease-in-out_infinite]"></div>
            </>
          ) : (
            <Camera className="w-6 h-6 text-slate-400" />
          )}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-medium text-slate-800 text-sm">{title}</h3>
            {isUploaded && <CheckCircle2 className="w-4 h-4 text-teal-500" />}
          </div>
          <p className="text-[11px] text-slate-500 leading-tight">{desc}</p>
        </div>
      </div>
      
      {isUploaded && (
        <div className="absolute inset-0 bg-teal-500/10 pointer-events-none"></div>
      )}
    </div>
  );
}
