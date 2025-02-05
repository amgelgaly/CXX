import React from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Star, GitFork, Eye } from "lucide-react";

interface RepositoryStats {
  stars: number;
  forks: number;
  watchers: number;
}

interface RepositoryHeaderProps {
  name?: string;
  description?: string;
  stats?: RepositoryStats;
}

const defaultStats: RepositoryStats = {
  stars: 128,
  forks: 45,
  watchers: 32,
};

const RepositoryHeader = ({
  name = "amgelgaly/v1",
  description = "A clean and modern React application to fetch and display repository details from GitHub.",
  stats = defaultStats,
}: RepositoryHeaderProps) => {
  return (
    <Card className="w-full p-6 bg-white border-b">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col space-y-4 md:space-y-2">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              {name}
            </h1>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <div className="flex items-center space-x-2">
                <Badge
                  variant="secondary"
                  className="flex items-center space-x-1"
                >
                  <Star className="h-4 w-4" />
                  <span>{stats.stars}</span>
                </Badge>
              </div>
              <div className="flex items-center space-x-2">
                <Badge
                  variant="secondary"
                  className="flex items-center space-x-1"
                >
                  <GitFork className="h-4 w-4" />
                  <span>{stats.forks}</span>
                </Badge>
              </div>
              <div className="flex items-center space-x-2">
                <Badge
                  variant="secondary"
                  className="flex items-center space-x-1"
                >
                  <Eye className="h-4 w-4" />
                  <span>{stats.watchers}</span>
                </Badge>
              </div>
            </div>
          </div>
          <p className="text-gray-600 text-sm md:text-base max-w-3xl">
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default RepositoryHeader;
