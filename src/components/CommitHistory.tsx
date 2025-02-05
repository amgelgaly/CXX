import React from "react";
import { Card } from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";
import { Avatar } from "./ui/avatar";
import { Separator } from "./ui/separator";
import { formatDistanceToNow } from "date-fns";

interface Commit {
  hash: string;
  message: string;
  author: {
    name: string;
    avatar: string;
  };
  date: Date;
}

interface CommitHistoryProps {
  commits?: Commit[];
  isLoading?: boolean;
  error?: string;
}

const defaultCommits: Commit[] = [
  {
    hash: "abc123",
    message: "Initial commit",
    author: {
      name: "John Doe",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
    },
    date: new Date("2024-01-01"),
  },
  {
    hash: "def456",
    message: "Update README.md",
    author: {
      name: "Jane Smith",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=jane",
    },
    date: new Date("2024-01-02"),
  },
  {
    hash: "ghi789",
    message: "Fix styling issues",
    author: {
      name: "Bob Wilson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=bob",
    },
    date: new Date("2024-01-03"),
  },
];

const CommitHistory = ({
  commits = defaultCommits,
  isLoading = false,
  error = "",
}: CommitHistoryProps) => {
  if (error) {
    return (
      <Card className="p-4 bg-white h-full">
        <div className="text-red-500">Error loading commits: {error}</div>
      </Card>
    );
  }

  if (isLoading) {
    return (
      <Card className="p-4 bg-white h-full">
        <div className="animate-pulse space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center space-x-4">
              <div className="h-10 w-10 bg-gray-200 rounded-full" />
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gray-200 rounded w-3/4" />
                <div className="h-4 bg-gray-200 rounded w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-4 bg-white h-full">
      <h2 className="text-xl font-semibold mb-4">Commit History</h2>
      <ScrollArea className="h-[600px] pr-4">
        <div className="space-y-4">
          {commits.map((commit, index) => (
            <React.Fragment key={commit.hash}>
              <div className="flex items-start space-x-4">
                <Avatar className="h-10 w-10">
                  <img
                    src={commit.author.avatar}
                    alt={commit.author.name}
                    className="h-full w-full object-cover"
                  />
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{commit.author.name}</span>
                    <span className="text-sm text-gray-500">
                      {formatDistanceToNow(commit.date, { addSuffix: true })}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 mt-1">{commit.message}</p>
                  <p className="text-xs text-gray-500 mt-1">#{commit.hash}</p>
                </div>
              </div>
              {index < commits.length - 1 && <Separator className="my-4" />}
            </React.Fragment>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
};

export default CommitHistory;
