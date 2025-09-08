"use client";

import DonationForm from "@/components/DonationForm"
import { donationFormFields } from "@/util/constants"

export default function Home() {
  return (
    <main className="h-auto flex items-center justify-center flex-col bg-gray text-black">
      <div className="flex flex-col items-center gap-12 py-12 justify-center">
        <DonationForm fields={donationFormFields}/>
      </div>
    </main>
  )
}
