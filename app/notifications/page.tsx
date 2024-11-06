import { Header } from '@/components/header';
import { Sidebar } from '@/components/sidebar';
import { Card, CardContent } from '@/components/ui/card';
import { Bell, MessageSquare, UserPlus, FileText } from 'lucide-react';

const notifications = [
  {
    id: 1,
    title: 'New Message',
    description: 'You have a new message from Sarah',
    time: '5 minutes ago',
    icon: MessageSquare,
    color: 'text-blue-500',
  },
  {
    id: 2,
    title: 'Team Invite',
    description: 'John invited you to join Project X',
    time: '1 hour ago',
    icon: UserPlus,
    color: 'text-green-500',
  },
  {
    id: 3,
    title: 'Document Update',
    description: 'The project proposal has been updated',
    time: '2 hours ago',
    icon: FileText,
    color: 'text-orange-500',
  },
];

export default function NotificationsPage() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          <h1 className="text-2xl font-bold mb-4">Notifications</h1>
          <div className="space-y-4">
            {notifications.map((notification) => (
              <Card key={notification.id}>
                <CardContent className="flex items-center gap-4 p-4">
                  <div className={`${notification.color} p-2 rounded-full bg-muted`}>
                    <notification.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">{notification.title}</h3>
                      <span className="text-sm text-muted-foreground">
                        {notification.time}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {notification.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}