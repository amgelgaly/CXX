import { motion } from 'framer-motion';
import { User2, Star, Users, Eye, ListChecks, ChevronDown, Zap, Filter, Share2, MoreVertical } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-b from-primary/5 to-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Left Side */}
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <div className="flex items-center rtl:space-x-reverse">
            <span className="font-bold text-gray-900 text-lg rtl:mr-2">فرورور</span>
            <Star className="text-gray-500 h-5 w-5 rtl:mr-1" />
            <Users className="text-gray-500 h-5 w-5 rtl:mr-1" />
          </div>
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <Eye className="text-gray-500 h-4 w-4" />
            <span className="text-sm text-gray-700">Workspace visible</span>
          </div>
        </div>

        {/* Center Dropdown */}
        <div className="relative inline-block text-left">
          <div>
            <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="options-menu" aria-expanded="true" aria-haspopup="true">
              Board
              <ChevronDown className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <Zap className="text-gray-500 h-4 w-4" />
            <span className="text-sm text-gray-700">Power-Ups</span>
          </div>
          <span className="text-sm text-gray-700">Automation</span>
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <Filter className="text-gray-500 h-4 w-4" />
            <span className="text-sm text-gray-700">Filters</span>
          </div>
          <button className="relative rounded-full flex-shrink-0 h-8 w-8 bg-gray-500 items-center justify-center">
            <User2 className="h-5 w-5 text-white" />
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-blue-500 border-2 border-white"></span>
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <Share2 className="h-4 w-4 inline-block rtl:mr-1" />
            Share
          </button>
          <button className="text-gray-500 hover:text-gray-700">
            <MoreVertical className="h-5 w-5" />
          </button>
        </div>
      </div>
       {/* Title and Subtitle */}
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold text-gray-900 mb-2"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </motion.div>
  );
};

export default PageHeader;
