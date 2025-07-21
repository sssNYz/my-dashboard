import React from 'react'
import { Calendar, User2, Home, Inbox, Search, Settings, ChevronUp } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import Link from 'next/link'
import Image from 'next/image'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

const AppSidebar = () => {
  return (
    <Sidebar collapsible='icon'>

      {/**Header */}
      <SidebarHeader className='py-3'>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/">
                <Image src="/logo.svg" alt="logo" width={30} height={30} />
                <span>SUNNY</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarSeparator />


      {/**Content */}
      <SidebarContent>
        {/**Content Group1*/}
        <SidebarGroup className=''>
        {/**Label */}
          <SidebarGroupLabel>
            Group1
          </SidebarGroupLabel>

            <SidebarGroupContent>
          <SidebarMenu >
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <Link href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>

          </SidebarGroupContent>
        </SidebarGroup>


        {/**Content Group2*/}
        <SidebarGroup>
          <SidebarGroupLabel>
            Group2
          </SidebarGroupLabel>
        </SidebarGroup>
      </SidebarContent>

      {/**Footer */}
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> Sunny <ChevronUp className='ml-auto' />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='end'>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Account</DropdownMenuItem>
                <DropdownMenuItem>Setting</DropdownMenuItem>
                <DropdownMenuItem>Sign out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar
