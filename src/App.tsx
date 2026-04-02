/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageType, UserProfile, RiskLevel } from './types';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Upload from './pages/Upload';
import AIProcessing from './pages/AIProcessing';
import Report from './pages/Report';
import Intervention from './pages/Intervention';
import CheckIn from './pages/CheckIn';
import FollowUp from './pages/FollowUp';
import Mine from './pages/Mine';
import { Home as HomeIcon, CheckSquare, User } from 'lucide-react';
import { cn } from './lib/utils';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('Home');
  const [profile, setProfile] = useState<UserProfile>({
    name: '',
    age: '',
    gender: '男',
    phone: '',
    isFirstTime: true,
    hasHistory: false,
  });
  const [riskLevel, setRiskLevel] = useState<RiskLevel>(null);

  // Simple local storage persistence for demo
  useEffect(() => {
    const savedProfile = localStorage.getItem('aiji_profile');
    const savedRisk = localStorage.getItem('aiji_risk');
    if (savedProfile) setProfile(JSON.parse(savedProfile));
    if (savedRisk) setRiskLevel(savedRisk as RiskLevel);
  }, []);

  useEffect(() => {
    localStorage.setItem('aiji_profile', JSON.stringify(profile));
    if (riskLevel) localStorage.setItem('aiji_risk', riskLevel);
  }, [profile, riskLevel]);

  const navigate = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'Home': return <Home navigate={navigate} />;
      case 'Profile': return <Profile navigate={navigate} profile={profile} setProfile={setProfile} />;
      case 'Upload': return <Upload navigate={navigate} />;
      case 'AIProcessing': return <AIProcessing navigate={navigate} profile={profile} setRiskLevel={setRiskLevel} />;
      case 'Report': return <Report navigate={navigate} riskLevel={riskLevel} />;
      case 'Intervention': return <Intervention navigate={navigate} riskLevel={riskLevel} />;
      case 'CheckIn': return <CheckIn navigate={navigate} />;
      case 'FollowUp': return <FollowUp navigate={navigate} />;
      case 'Mine': return <Mine navigate={navigate} profile={profile} />;
      default: return <Home navigate={navigate} />;
    }
  };

  const showBottomNav = ['Home', 'CheckIn', 'Mine'].includes(currentPage);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex justify-center">
      <div className="w-full max-w-md bg-white min-h-screen shadow-xl relative flex flex-col overflow-hidden">
        <main className={cn("flex-1 overflow-y-auto", showBottomNav ? "pb-20" : "")}>
          {renderPage()}
        </main>
        
        {showBottomNav && (
          <nav className="absolute bottom-0 w-full bg-white border-t border-slate-100 flex justify-around items-center h-16 px-4 pb-safe z-50">
            <NavItem icon={<HomeIcon />} label="首页" active={currentPage === 'Home'} onClick={() => navigate('Home')} />
            <NavItem icon={<CheckSquare />} label="打卡" active={currentPage === 'CheckIn'} onClick={() => navigate('CheckIn')} />
            <NavItem icon={<User />} label="我的" active={currentPage === 'Mine'} onClick={() => navigate('Mine')} />
          </nav>
        )}
      </div>
    </div>
  );
}

function NavItem({ icon, label, active, onClick }: { icon: React.ReactNode, label: string, active: boolean, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "flex flex-col items-center justify-center w-16 h-full transition-colors",
        active ? "text-teal-600" : "text-slate-400 hover:text-teal-500"
      )}
    >
      <div className={cn("mb-1", active ? "scale-110 transition-transform" : "")}>
        {React.cloneElement(icon as React.ReactElement, { size: 22, strokeWidth: active ? 2.5 : 2 })}
      </div>
      <span className="text-[10px] font-medium">{label}</span>
    </button>
  );
}
