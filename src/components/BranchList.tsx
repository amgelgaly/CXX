import React from "react";
import { Card } from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";
import { Badge } from "./ui/badge";
import { GitBranch, GitCommit, Clock } from "lucide-react";

interface Branch {
  name: string;
  lastCommit: {
    hash: string;
    message: string;
    date: string;
  };
  isDefault?: boolean;
}

interface BranchListProps {
  branches?: Branch[];
  isLoading?: boolean;
}

const defaultBranches: Branch[] = [
  {
    name: "main",
    lastCommit: {
      hash: "a1b2c3d",
      message: "Initial commit",
      date: "2024-03-20T10:00:00Z",
    },
    isDefault: true,
  },
  {
    name: "develop",
    lastCommit: {
      hash: "e4f5g6h",
      message: "Add new feature",
      date: "2024-03-19T15:30:00Z",
    },
  },
  {
    name: "feature/user-auth",
    lastCommit: {
      hash: "i7j8k9l",
      message: "Implement user authentication",
      date: "2024-03-18T09:45:00Z",
    },
  },
];

const BranchList = ({
  branches = defaultBranches,
  isLoading = false,
}: BranchListProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  if (isLoading) {
    return (
      <Card className="p-4 w-full h-full bg-background">
        <div className="animate-pulse space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-20 bg-muted rounded-lg" />
          ))}
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-4 w-full h-full bg-background">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Branches</h2>
        <Badge variant="secondary">{branches.length} branches</Badge>
      </div>

      <ScrollArea className="h-[600px] pr-4">
        <div className="space-y-4">
          {branches.map((branch) => (
            <Card
              key={branch.name}
              className="p-4 hover:bg-accent/50 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <GitBranch className="h-4 w-4" />
                    <span className="font-medium">{branch.name}</span>
                    {branch.isDefault && (
                      <Badge variant="secondary" className="text-xs">
                        default
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <GitCommit className="h-4 w-4" />
                    <span className="font-mono">{branch.lastCommit.hash}</span>
                    <span className="truncate max-w-[300px]">
                      {branch.lastCommit.message}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>
                      Last updated {formatDate(branch.lastCommit.date)}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
};

export default BranchList;
