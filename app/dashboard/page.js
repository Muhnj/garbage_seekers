'use client'
import { useState, useEffect } from 'react';
import { collectorManager, pickupManager, residentManager } from '@/services/resourceManager';
import Sidebar from '@/components/dashboard/Sidebar';
import Topbar from '@/components/dashboard/Topbar';
import Footer from '@/components/dashboard/Footer';
import StatsCard from '@/components/dashboard/StatsCard';
import Charts from '@/components/dashboard/Charts';
import RecentTable from '@/components/dashboard/RecentTable';

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [residents, setResidents] = useState([]);
  const [collectors, setCollectors] = useState([]);
  const [pickups, setPickups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [residentsData, collectorsData, pickupsData] = await Promise.all([
          residentManager.getAll(),
          collectorManager.getAll(),
          pickupManager.getAll()
        ]);
        
        setResidents(residentsData);
        setCollectors(collectorsData);
        setPickups(pickupsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  // Calculate stats
  const totalResidents = residents.length;
  const totalCollectors = collectors.length;
  const totalPickups = pickups.length;
  
  const pendingCollectors = collectors.filter(c => c.status === 'pending_approval').length;
  const completedPickups = pickups.filter(p => p.status === 'completed').length;
  const completed_pickups = pickups.filter(p => p.status === 'completed');
  
  const revenue = completed_pickups.reduce((sum, pickup) => sum + (pickup.totalPrice || 0), 0);
  const avgPickupRevenue = totalPickups ? (revenue / totalPickups).toFixed(2) : 0;

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-2xl">Loading dashboard data...</div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar isOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <Topbar setSidebarOpen={setSidebarOpen} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <StatsCard 
              title="Total Residents" 
              value={totalResidents} 
              icon="users"
              color="bg-blue-500"
            />
            <StatsCard 
              title="Total Collectors" 
              value={totalCollectors} 
              icon="truck"
              color="bg-green-500"
            />
            <StatsCard 
              title="Pending Approvals" 
              value={pendingCollectors} 
              icon="clock"
              color="bg-yellow-500"
            />
            <StatsCard 
              title="Total Revenue" 
              value={`UGX ${revenue.toLocaleString()}`} 
              icon="dollar-sign"
              color="bg-purple-500"
            />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <Charts 
              residents={residents} 
              collectors={collectors} 
              pickups={pickups} 
            />
          </div>
          
          <div className="flex flex-col gap-6">
            <RecentTable 
              title="Recent Residents" 
              data={residents.slice(0, 5)} 
              columns={[
                { header: 'Name', accessor: item => `${item.firstName} ${item.lastName}` },
                { header: 'Email', accessor: 'email' },
                { header: 'Role', accessor: 'role' }
              ]}
            />
            <RecentTable 
              title="Recent Collectors" 
              data={collectors.slice(0, 5)} 
              columns={[
                { header: 'Name', accessor:item => `${item.firstName} ${item.lastName}` },
                { header: 'Status', accessor: 'status' },
                { header: 'Equipment', accessor: 'equipmentType' }
              ]}
            />
           
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
}