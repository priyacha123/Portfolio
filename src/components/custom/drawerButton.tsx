"use client"

import * as React from "react"
import { Book, Contact, Home, Menu, PersonStandingIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { ModeToggle } from "../ui/mode-toggle"

const data = [
  {
    goal: 400,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 239,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 349,
  },
]

export function DrawerButton() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <div className="flex gap-4 items-center justify-center">
        <Button variant="outline" >
          <Menu />
        </Button>
          <ModeToggle />
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Discover</DrawerTitle>
            {/* <DrawerDescription>Set your daily activity goal.</DrawerDescription> */}
          </DrawerHeader>
          <div className="flex flex-col gap-4 p-4 pb-4">
            <Button variant="secondary"> 
              <Home />
              Home 
            </Button>
            <Button variant="secondary"> 
              <PersonStandingIcon />
              About 
              </Button>
            <Button variant="secondary"> 
              <Book />
              Projects 
            </Button>
            <Button variant="secondary"> 
              <Contact />
              Contact 
            </Button>
          </div>
          <DrawerFooter>
            {/* <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose> */}
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
 