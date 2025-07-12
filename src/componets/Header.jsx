import React from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button
} from "@heroui/react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <section className="border-b-1 border-gray/20">
      <Navbar onMenuOpenChange={setIsMenuOpen} className="justify-between max-w-[1200px] mx-auto bg-foreground py-6 ">
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden"
          />
          <NavbarBrand>
            <img src="./Logo.png" alt="Logo" />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden md:flex gap-4" justify="center">
          <NavbarItem >
            <Link color="" href="#" className='text-sm text-gray'>
              About Us
            </Link>
          </NavbarItem>
          <NavbarItem >
            <Link href="#" className='text-sm text-gray'>
              Pricing
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#" className='text-sm text-gray'>
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#" className='text-sm text-gray'>
              Solutions
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem className="lg:flex">
            <Button className='text-sm text-foreground bg-cyan rounded-full' as={Link} color="primary" href="#" variant="flat">
              Book a Demo
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button className='text-sm text-white  rounded-full border-2 border-white' as={Link} color="primary" href="#" variant="flat">
              Contact Us
            </Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                color={
                  index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                }
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </section>






    // <section className="border-b-1 border-gray/20">
    //   <Navbar shouldHideOnScroll className="justify-between max-w-[1200px] mx-auto bg-foreground py-6 ">
    //   <NavbarBrand>
    //     <img src="./Logo.png" alt="Logo" />
    //   </NavbarBrand>
    //   <NavbarContent className="sm:flex gap-4 " justify="center">
    //     <NavbarItem >
    //       <Link color="" href="#" className='text-sm text-gray'>
    //         About Us
    //       </Link>
    //     </NavbarItem>
    //     <NavbarItem >
    //       <Link href="#" className='text-sm text-gray'>
    //         Pricing
    //       </Link>
    //     </NavbarItem>
    //     <NavbarItem>
    //       <Link color="foreground" href="#" className='text-sm text-gray'>
    //         Customers
    //       </Link>
    //     </NavbarItem>
    //     <NavbarItem>
    //       <Link color="foreground" href="#" className='text-sm text-gray'>
    //         Solutions
    //       </Link>
    //     </NavbarItem>
    //   </NavbarContent>
    //   <NavbarContent justify="end">
    //     <NavbarItem className="lg:flex">
    //     <Button className='text-sm text-foreground bg-cyan rounded-full' as={Link} color="primary" href="#" variant="flat">
    //       Book a Demo
    //       </Button>
    //     </NavbarItem>
    //     <NavbarItem>
    //       <Button className='text-sm text-white  rounded-full border-2 border-white' as={Link} color="primary" href="#" variant="flat">
    //       Contact Us
    //       </Button>
    //     </NavbarItem>
    //   </NavbarContent>
    // </Navbar>
    // </section>
  );
};

export default Header;
