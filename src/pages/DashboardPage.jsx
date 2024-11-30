import React from 'react'
import MainWrapper from '../components/MainWrapper'
import MyOrder from '../components/MyOrderComponents'
import RecentOrder from '../components/RecentOrder'
import Services from '../components/ServicesComponents'
import CalendarCard from '../components/CalendarCardComponents'

const DashboardPage = () => {
  return (
    <div>
        <MainWrapper>
        <div className="flex flex-col lg:flex-row gap-6 p-6">
      {/* Left Column */}
        <div className="flex flex-col space-y-6 w-full lg:w-1/2">
        <MyOrder />
        <RecentOrder />
      </div>

      {/* Right Column */}
      <div className="flex flex-col space-y-6 w-full lg:w-1/2">
        <div className="w-full">
          <Services />
        </div>
        <div className="w-full">
          <CalendarCard />
        </div>
      </div>
    </div>
        </MainWrapper>
    </div>
  )
}

export default DashboardPage