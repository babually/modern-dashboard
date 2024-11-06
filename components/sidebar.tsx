'use client';

import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  Users,
  Settings,
  BarChart3,
  FolderKanban,
  MessagesSquare,
  Bell,
  ChevronRight,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';
import { useState } from 'react';

const sidebarItems = [
  {
    title: 'Dashboard',
    icon: LayoutDashboard,
    href: '/',
  },
  {
    title: 'Analytics',
    icon: BarChart3,
    href: '/analytics',
  },
  {
    title: 'Customers',
    icon: Users,
    href: '/customers',
  },
  {
    title: 'Projects',
    icon: FolderKanban,
    href: '/projects',
  },
  {
    title: 'Messages',
    icon: MessagesSquare,
    href: '/messages',
  },
  {
    title: 'Notifications',
    icon: Bell,
    href: '/notifications',
  },
  {
    title: 'Settings',
    icon: Settings,
    href: '/settings',
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={cn(
        'relative flex flex-col h-screen border-r pt-2 bg-background',
        isCollapsed ? 'w-16' : 'w-64',
      )}
    >
      <Button
        variant="ghost"
        size="icon"
        className="absolute -right-4 top-6 z-10 rounded-full border bg-background"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <ChevronRight
          className={cn('h-4 w-4 transition-transform', {
            'rotate-180': isCollapsed,
          })}
        />
      </Button>
      <div
        className={cn(
          'flex items-center justify-between px-4 pb-4',
          isCollapsed && 'justify-center',
        )}
      >
        <div className="flex items-center gap-2">
          <LayoutDashboard className="h-6 w-6" />
          {!isCollapsed && (
            <span className="font-bold text-lg">Dashboard</span>
          )}
        </div>
      </div>
      <ScrollArea className="flex-1 pt-4">
        <div className="space-y-2 px-2">
          {sidebarItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:bg-muted hover:text-primary',
                pathname === item.href &&
                  'bg-muted text-primary font-medium',
              )}
            >
              <item.icon className="h-5 w-5" />
              {!isCollapsed && <span>{item.title}</span>}
            </Link>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}