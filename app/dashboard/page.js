
'use client'
import { collectorManager, pickupManager, residentManager } from '@/services/resourceManager';
import React from 'react'
import { useEffect } from 'react';




export default function Dashboard() {
    useEffect(() =>{
        async function fetchCollectorsData(){
            const collectorsData = await collectorManager.getAll();
            console.log(collectorsData);
        }
        async function fetchResidentsData(){
            const residentData = await residentManager.getAll();
            console.log(residentData);
        }
        async function fetchPickupsData(){
            const pickupData = await pickupManager.getAll();
            console.log(pickupData);
        }

        fetchCollectorsData();
        fetchPickupsData()
        fetchResidentsData()
    })

  return (
    
    <div>Dashboard {console.log("pass 1")}</div>

  )
}
