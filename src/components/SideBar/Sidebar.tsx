import { PixelifySans } from '@/app/layout';
import { AlignVerticalDistributeEnd, Dot, FlaskConical, SendToBack, Wallet, WalletCards } from 'lucide-react';
import { Pixelify_Sans } from 'next/font/google';
import React from 'react'
import SideBarStats from './SideBarStats';
import { Button,Link } from '@nextui-org/react';
import SideBarMenuBar from './SideBarMenuBar';
import SideBarLogo from './SideBarLogo';

function Sidebar() {
  return (
    <div className='flex flex-col justify-start items-start align-top gap-10 rounded-small min-h-full'>
        <SideBarLogo/>
       <SideBarStats/>
       <SideBarMenuBar/>
    </div>
  )
}

export default Sidebar