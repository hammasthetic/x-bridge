"use client";
import React from "react";
import {
  Tabs,
  Tab,
  Input,
  Link,
  Button,
  Card,
  CardBody,
  CardHeader,
  Select,
  SelectItem,
} from "@nextui-org/react";
import {
  ArrowBigDownDash,
  ArrowDown,
  ArrowDownIcon,
  ArrowUpDown,
  Bitcoin,
  BitcoinIcon,
  BoxSelectIcon,
  DollarSign,
  GrapeIcon,
  InfoIcon,
} from "lucide-react";
import RecentTransactions from "./RecentTransactions";

export default function BirdgingTabs() {
  const [selected, setSelected] = React.useState<any>("transfer");
  const [value,setValue]=React.useState(0)
  const chains = [
    {
      key: "ely",
      label: "Elysium",
    },
    {
      key: "bsc",
      label: "BSC",
    },
    {
      key: "matic",
      label: "Polygon",
    },
  ];
  const coins = [
    {
      key: "pyr",
      label: "PYR",
    },
    {
      key: "usdc",
      label: "USDC",
    },
    {
      key: "usdt",
      label: "USDT",
    },
  ];
  return (
    <div className="grid grid-cols-2 w-full p-5 gap-2">
      <Card className="max-w-full p-0" shadow="none">
        <CardBody className="p-0">
            
          <Tabs
            fullWidth
            size="md"
            aria-label="Tabs form"
            selectedKey={selected}
            onSelectionChange={setSelected}
          >
            <Tab key="transfer" title="Transfer">
              <div className=" flex flex-col gap-7">
                <div className=" grid grid-cols-3 justify-between">
                  <div className=" flex justify-start items-center col-span-2 text-sm">
                    <Select
                      startContent={<BitcoinIcon />}
                      size="sm"
                      fullWidth={false}
                      label="From"
                      placeholder="Elysium Chain"
                      labelPlacement="outside-left"
                      defaultSelectedKeys={["ely"]}
                      className=" text-sm"
                      classNames={{
                        label: "text-content2",
                      }}
                      selectorIcon={<ArrowDownIcon />}
                    >
                      {chains.map((chain) => (
                        <SelectItem
                          startContent={<Bitcoin size={15} />}
                          key={chain.key}
                          value={chain.key}
                        >
                          {chain.label}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>
                  <div className=" flex justify-end items-center col-span-1">
                    <GrapeIcon size={20} className=" text-primary" />
                  </div>
                </div>
                <div className="">
                  <div className="grid grid-cols-2 text-sm gap-2 text-content2 p-6 border-1 border-content2 rounded-md">
                    <div className="flex justify-start">
                      <h1 className="">send</h1>
                    </div>
                    <div className="flex justify-end">
                      <h1>max 5</h1>
                    </div>
                    <div className=" flex justify-start">
                      <Input
                        placeholder="0"
                        size="lg"
                        radius="sm"
                        variant="underlined"
                        color="primary"
                        onChange={(e)=>setValue(Number(e.target.value))}
                        type="number"
                        startContent={<DollarSign />}
                        className=" text-primary"
                      />
                    </div>
                    <div className=" flex justify-end">
                      <Select
                        size="lg"
                        fullWidth={false}
                        defaultSelectedKeys={["pyr"]}
                        variant="underlined"
                        className=" max-w-28 bg-none"
                        color="primary"
                        
                        classNames={{
                          base: " justify-end  bg-transparent",
                          mainWrapper: " justify-end  bg-transparent",
                          value: " text-primary bg-transparent",
                          listboxWrapper: " rounded-small ",
                          popoverContent: " rounded-small ",
                          innerWrapper: "bg-transparent",
                        }}
                      >
                        {coins.map((coin) => (
                          <SelectItem key={coin.key}>{coin.label}</SelectItem>
                        ))}
                      </Select>
                    </div>
                  </div>
                  <div className="relative w-full flex justify-center mb-5">
                    <div className=" max-w-fit p-2 rounded-md absolute mx-auto -top-4  bg-primary">
                      <ArrowUpDown size={20} className="" />
                    </div>
                  </div>
                  <div className=" flex flex-col gap-7">
                    <div className=" grid grid-cols-3">
                      <div className=" col-span-2">
                        <Select
                          startContent={<BitcoinIcon />}
                          size="sm"
                          fullWidth={false}
                          label="To"
                          placeholder="Elysium Chain"
                          labelPlacement="outside-left"
                          defaultSelectedKeys={["ely"]}
                          className=" text-sm"
                          classNames={{
                            label: "text-content2",
                          }}
                          selectorIcon={<ArrowDownIcon />}
                        >
                          {chains.map((chain) => (
                            <SelectItem
                              startContent={<Bitcoin size={15} />}
                              key={chain.key}
                              value={chain.key}
                            >
                              {chain.label}
                            </SelectItem>
                          ))}
                        </Select>
                      </div>
                    </div>
                    <div className="To grid grid-cols-2 gap-2 text-content2 p-6 border-1 border-content2 rounded-md">
                      <div className="flex justify-start  w-full">
                        <h1 className=" flex justify-start items-center gap-1">
                          <InfoIcon className=" text-content2" size={10} />
                          received
                        </h1>
                      </div>
                      <div></div>
                      <div>
                        <h1 className=" flex gap-2 text-foreground"><DollarSign className=" text-content2"/> {value}</h1>
                      </div>
                      <div className=" flex justify-end">
                        <Bitcoin/>
                      </div>
                    </div>
                    <Button radius="sm" color="primary" variant="ghost">
                        Start Bridging
                    </Button>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab key="liquidity" title="Liquidity"></Tab>
            <Tab key={"nft"} title={"NFT"}></Tab>
          </Tabs>
        </CardBody>
      </Card>
      <div className=" recentTransactions ">
        <RecentTransactions/>         
      </div>
    </div>
  );
}
