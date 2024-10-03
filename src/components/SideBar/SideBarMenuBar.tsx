import { Button } from '@nextui-org/react'
import { Wallet, AlignVerticalDistributeEnd, SendToBack, FlaskConical, WalletCards } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function SideBarMenuBar() {
  return (
<div className='menu flex flex-col gap-10 px-10 py-5 bg-content1 h-full grow justify-between rounded-small'>
      <div className=' space-y-8'>
      <h1 className='text-primary text-2xl'>menu</h1>
    <div className=' navbar flex flex-col gap-5 px-5'>
      <Link  href='/' className=' flex flex-row gap-2 hover:text-primary-400 text-content2'   ><Wallet/> Wallet</Link>
      <Link  href='/bridge' className=' flex flex-row gap-2 hover:text-primary-400 text-content2'   ><AlignVerticalDistributeEnd/> Bridge</Link>
      <Link  href='#' className=' flex flex-row gap-2 hover:text-primary-400 text-content2'   ><SendToBack/> Transactions</Link>
      <Link  href='#' className=' flex flex-row gap-2 hover:text-primary-400 text-content2'   ><FlaskConical/> Testnet</Link>
    </div>
      </div>
    <div className='addNetwork'>
        <Button startContent={<WalletCards size={20}/>} fullWidth radius='sm' size='sm' className='text-primary text-sm'>Add network to wallet</Button>
    </div>
  </div>
    
  )
}

export default SideBarMenuBar