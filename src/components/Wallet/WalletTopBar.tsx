import { Button, Input } from '@nextui-org/react'
import { SearchIcon } from 'lucide-react'
import React from 'react'

function WalletTopBar() {
  return (
    <div className=" topBar flex flex-row justify-between">
            <h1 className=" text-content2 text-lg align-middle flex items-center">assets</h1>
            <div className=" flex flex-row justify-end gap-2 items-center align-middle">
                <Button size="sm" radius="sm" variant="flat" fullWidth color="primary">Manage token list</Button>
                <Input size="sm" placeholder="Search" isClearable startContent={<SearchIcon className=" text-primary"/>} radius="sm" variant="underlined" color="primary"/>
            </div>
        </div>
  )
}

export default WalletTopBar