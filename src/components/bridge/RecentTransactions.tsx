import { Input } from '@nextui-org/react'
import { SearchIcon } from 'lucide-react'
import React from 'react'
import TransactionsTable from './TransactionsTable'

function RecentTransactions() {
  return (
    <div className=' flex flex-col gap-2'>
        <Input size="sm" placeholder="Recent Transactions" isClearable startContent={<SearchIcon className=" text-primary"/>} radius="sm" variant="underlined" color="primary" classNames={{
            inputWrapper:'text-primary',
            helperWrapper:'text-primary',
            base:'text-primary',
            mainWrapper:'text-primary',
            description:'text-primary',
            input:'text-primary',
            innerWrapper:'text-primary',
            label:'text-primary',
        }}/>
        <TransactionsTable/>
    </div>
  )
}

export default RecentTransactions