import { Chatbot } from '@/components/Chatbot';

const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Welcome to Your Portfolio
        </h1>
        <p className="text-xl text-muted-foreground">Chat with my AI assistant to learn more!</p>
      </div>
      <Chatbot />
    </div>
  );
};

export default Index;
