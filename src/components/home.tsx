import React from "react";
import RepositoryHeader from "./RepositoryHeader";
import RepositoryContent from "./RepositoryContent";

interface HomeProps {
  isLoading?: boolean;
  error?: string;
}

const Home = ({ isLoading = false, error = "" }: HomeProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <RepositoryHeader />
        <RepositoryContent isLoading={isLoading} error={error} />
      </div>
    </div>
  );
};

export default Home;
