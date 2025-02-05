import React from "react";
import CommitHistory from "./CommitHistory";
import BranchList from "./BranchList";

interface RepositoryContentProps {
  isLoading?: boolean;
  error?: string;
}

const RepositoryContent = ({
  isLoading = false,
  error = "",
}: RepositoryContentProps) => {
  return (
    <div className="w-full h-full bg-gray-50 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
        <div className="h-full">
          <CommitHistory isLoading={isLoading} error={error} />
        </div>
        <div className="h-full">
          <BranchList isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
};

export default RepositoryContent;
