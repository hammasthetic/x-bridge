import { Button } from '@nextui-org/react'
import { QrCode, Send } from 'lucide-react'
import React from 'react'

function PoweredBy() {
  return (
    <div className="opts grid grid-cols-2 rounded-small overflow-hidden">
    <div className=" flex flex-col bg-primary justify-start gap-5 px-10 py-7">
      <h1>OPTS</h1>
      <h1>
        $655
      </h1>
      <div className=" flex flex-row justify-start gap-5">
        <Button startContent={<QrCode size={20}/>} className=" bg-content1 text-primary" radius="sm" size="sm">Deposit</Button>
        <Button startContent={<Send size={20}/>} className=" bg-content1 text-primary" radius="sm" size="sm">Send</Button>
      </div>
    </div>
    <div className="flex flex-col gap-1 bg-content1 w-full justify-center items-center align-middle">
        <p className=" text-sm text-primary">Powered By</p>
        <h1 className=" text-4xl">Elysium Chain</h1>
    </div>
</div>
  )
}

export default PoweredBy