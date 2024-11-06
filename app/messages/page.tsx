import { Header } from '@/components/header';
import { Sidebar } from '@/components/sidebar';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const messages = [
  {
    id: 1,
    sender: 'Alice Johnson',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100',
    message: 'Hey, can we discuss the project timeline?',
    time: '10:30 AM',
  },
  {
    id: 2,
    sender: 'Bob Smith',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100',
    message: 'The new design looks great! Just a few tweaks needed.',
    time: '9:15 AM',
  },
  {
    id: 3,
    sender: 'Carol Williams',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100',
    message: 'Meeting scheduled for tomorrow at 2 PM.',
    time: 'Yesterday',
  },
];

export default function MessagesPage() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          <h1 className="text-2xl font-bold mb-4">Messages</h1>
          <div className="space-y-4">
            {messages.map((message) => (
              <Card key={message.id}>
                <CardContent className="flex items-center gap-4 p-4">
                  <Avatar>
                    <AvatarImage src={message.avatar} alt={message.sender} />
                    <AvatarFallback>{message.sender[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">{message.sender}</h3>
                      <span className="text-sm text-muted-foreground">
                        {message.time}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {message.message}
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