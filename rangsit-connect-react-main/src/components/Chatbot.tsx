import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hello! I'm RSU Assistant. How can I help you today?",
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const newMessages = [
      ...messages,
      { type: "user", text: inputValue },
    ];

    // Simulate bot response
    setTimeout(() => {
      setMessages([
        ...newMessages,
        {
          type: "bot",
          text: "Thank you for your message! Our support team will assist you shortly. For immediate assistance, please call +66 2 997 2222.",
        },
      ]);
    }, 1000);

    setMessages(newMessages);
    setInputValue("");
  };

  return (
    <>
      {/* Chatbot Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-primary rounded-full shadow-elegant hover:shadow-glow flex items-center justify-center transition-all duration-300 hover:scale-110"
      >
        {isOpen ? (
          <X className="w-7 h-7 text-primary-foreground" />
        ) : (
          <MessageCircle className="w-7 h-7 text-primary-foreground" />
        )}
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 z-50 w-96 h-[500px] shadow-elegant border-2 border-border flex flex-col">
          {/* Header */}
          <div className="bg-gradient-primary p-4 rounded-t-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-primary-foreground">
                  RSU Assistant
                </h3>
                <p className="text-xs text-primary-foreground/80">
                  Online • Typically replies instantly
                </p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-muted/20">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[75%] p-3 rounded-lg ${
                    message.type === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-card text-foreground border border-border"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border bg-background">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button
                onClick={handleSend}
                size="icon"
                className="shadow-card hover:shadow-elegant"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

export default Chatbot;
