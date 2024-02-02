"use client"
import PromptPage from "@/components/Dashboard/PromptPage";
import PurchasePage from "@/components/Dashboard/PurchasePage";
import TabOptions from "@/components/Dashboard/TabOption";
import React,{useState, useEffect} from "react"; 
import ModuleList from "../module-list/page";
import Dashboard from "@/components/Dashboard/Dashboard";
 

const PageDashboard = () => {
  
   const [selectedItem, setSelectedItem] = useState('prompts'); 
   const item = ['dashboard','sales','prompts','purchases', 'Favorites','setting','contact']

    const renderPage = () => {
    switch (selectedItem) {
       case 'dashboard':
        return <Dashboard/>;
      case 'sales':
        return "no fo";
      case 'prompts':
        return <PromptPage />;
         
      case 'purchases':
        return <ModuleList />;
       
      default:
        return <Dashboard/>;
    }
  };
  return (
    <div >
      <div className="container mb-24 lg:mb-32">
        
       
        <TabOptions item={item} selectedItem={selectedItem} setSelectedItem={ setSelectedItem } />

        <h2 className="my-6 flex  text-2xl   capitalize  font-semibold text-neutral-900 dark:text-neutral-100 justify-start">
         {selectedItem}
        </h2>
        {renderPage()}
        
      </div>
    </div>
  );
};

export default PageDashboard;
