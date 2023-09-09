import ToggleButton from "./components/ToggleButton"
import LateralCard from './components/LateralCard'
import MiddleCard from './components/MiddleCard'
import React, { createContext } from "react"
import { useState } from "react"
let cardDetails = [
  {
    title: "Basic",
    anualPrice: "19.99$",
    monthlyPrice: "199.99$",
    storage: "500 GB Storage",
    users: "2 users allowed",
    send: "Send up to 3 GB",
  },
  {
    title: "Master",
    anualPrice: "24.99$",
    monthlyPrice: "244.99$",
    storage: "2 TB Storage",
    users: "10 users allowed",
    send: "Send up to 20 GB",
  },
  {
    title: "Professional",
    anualPrice: "39.99$",
    monthlyPrice: "399.99$",
    storage: "1 TB Storage",
    users: "5 users allowed",
    send: "Send up to 10 GB"
  }
]

import { ToggleContext } from "./contexts/ToggleContext"

function App() {

  const [toggle, settoggle] = useState(false);

  return (
    <main className="w-full h-full min-h-[100vh] personalBackground flex justify-center items-center">
        <div className="max-h-full max-w-full mx-48 my-16 flex flex-col items-center">
            <h1 className="text-4xl font-montserrat col-med">Our pricing</h1>
            <section className="flex mt-8 items-center">
              <p className="font-montserrat col-light text-md font-semibold">Anually</p>
              <ToggleContext.Provider value={{toggle, settoggle}}>
                <ToggleButton></ToggleButton>
              </ToggleContext.Provider>
              <p className="font-montserrat col-light text-md font-semibold">Monthly</p>
            </section>
            <section className="flex flex-col lg:flex-row mt-16 justify-center items-center max-w-full">
                {/* cards */}
                <LateralCard title={cardDetails[0].title} price={toggle ? cardDetails[0].anualPrice : cardDetails[0].monthlyPrice} storage={cardDetails[0].storage} users={cardDetails[0].users} send={cardDetails[0].send}></LateralCard>
                <MiddleCard title={cardDetails[2].title} price={toggle ? cardDetails[2].anualPrice : cardDetails[2].monthlyPrice} storage={cardDetails[2].storage} users={cardDetails[2].users} send={cardDetails[2].send}></MiddleCard>
                <LateralCard title={cardDetails[1].title} price={toggle ? cardDetails[1].anualPrice : cardDetails[1].monthlyPrice} storage={cardDetails[1].storage} users={cardDetails[1].users} send={cardDetails[1].send}></LateralCard>
            </section>
        </div>
        
    </main>
  )
}

export default App
