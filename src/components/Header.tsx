'use client'
import {
    Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Select,
  SelectItem,
} from "@nextui-org/react";
import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";

function Header() {
  const chains = [
    {
      key: "eth",
      label: "Ethereum",
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
  return (






    <div className=" w-full flex flex-row  gap-10">
       
        <div className=" navbar w-full flex flex-row rounded-small justify-between bg-content1 py-2 px-5">
              <div className="balance">
              <Button color="primary" radius="sm" size="sm">
                125.5 PYR
              </Button>
              </div>
              <div className="chainAndWallet flex flex-row gap-5">
                  <div className="chain">
                  <Select
                  size="sm"
                  variant="underlined"
                classNames={{
                    listbox:'rounded-small',
                    selectorIcon:'rounded-small',
                    listboxWrapper:'rounded-small',
                    innerWrapper:'rounded-small',
                    popoverContent:'rounded-small',
                }}
                color="primary"
              radius="sm"
              defaultSelectedKeys={["eth"]}
              className="w-32 text-sm"
            >
              {chains.map((chain) => (
                <SelectItem  color="primary"  key={chain.key}>{chain.label}</SelectItem>
              ))}
            </Select>
                  </div>
                  
                  <div className="wallet">
                      <Button size="sm" color="primary" radius="sm" className=" text-sm">
                          Connect Wallet
                      </Button>
                      
                  </div>
                  <ThemeSwitcher/>
              </div>
        </div>

    </div>

  );
}

export default Header;
