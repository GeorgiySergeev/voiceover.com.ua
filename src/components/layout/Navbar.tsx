import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Menu, User } from "lucide-react";

interface NavbarProps {
  logo?: string;
  isLoggedIn?: boolean;
  onLogin?: () => void;
  onRegister?: () => void;
  onLogout?: () => void;
  userName?: string;
}

const Navbar = ({
  logo = "VoiceArtistry",
  isLoggedIn = false,
  onLogin = () => {},
  onRegister = () => {},
  onLogout = () => {},
  userName = "Guest",
}: NavbarProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-primary">{logo}</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/portfolio"
                    className={navigationMenuTriggerStyle()}
                  >
                    Portfolio
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <div className="p-4 hover:bg-accent rounded-md">
                      <Link to="/services/commercial">
                        <div className="font-medium mb-1">Commercial</div>
                        <p className="text-sm text-muted-foreground">
                          Professional voiceovers for advertisements and
                          promotions
                        </p>
                      </Link>
                    </div>
                    <div className="p-4 hover:bg-accent rounded-md">
                      <Link to="/services/narration">
                        <div className="font-medium mb-1">Narration</div>
                        <p className="text-sm text-muted-foreground">
                          Engaging storytelling for audiobooks and documentaries
                        </p>
                      </Link>
                    </div>
                    <div className="p-4 hover:bg-accent rounded-md">
                      <Link to="/services/animation">
                        <div className="font-medium mb-1">Animation</div>
                        <p className="text-sm text-muted-foreground">
                          Character voices for animation and video games
                        </p>
                      </Link>
                    </div>
                    <div className="p-4 hover:bg-accent rounded-md">
                      <Link to="/services/corporate">
                        <div className="font-medium mb-1">Corporate</div>
                        <p className="text-sm text-muted-foreground">
                          Professional voiceovers for corporate videos and
                          presentations
                        </p>
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/order" className={navigationMenuTriggerStyle()}>
                    Order
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/clients" className={navigationMenuTriggerStyle()}>
                    Clients
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/blog" className={navigationMenuTriggerStyle()}>
                    Blog
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/contact" className={navigationMenuTriggerStyle()}>
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{userName}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link to="/dashboard">Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={onLogout}>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button variant="ghost" onClick={onLogin}>
                Login
              </Button>
              <Button onClick={onRegister}>Register</Button>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
              <DropdownMenuItem asChild>
                <Link to="/portfolio">Portfolio</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/services">Services</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/order">Order</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/clients">Clients</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/blog">Blog</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/contact">Contact</Link>
              </DropdownMenuItem>
              {isLoggedIn ? (
                <>
                  <DropdownMenuItem asChild>
                    <Link to="/dashboard">Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/profile">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={onLogout}>Logout</DropdownMenuItem>
                </>
              ) : (
                <>
                  <DropdownMenuItem onClick={onLogin}>Login</DropdownMenuItem>
                  <DropdownMenuItem onClick={onRegister}>
                    Register
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
