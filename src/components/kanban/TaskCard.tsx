import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Pencil, Trash2 } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
  priority?: 'low' | 'medium' | 'high';
  dueDate?: string;
  assignee?: string;
  labels?: string[];
}

interface TaskCardProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (taskId: number) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onEdit, onDelete }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 1 : 0,
  };

  const priorityColors = {
    low: 'bg-blue-100 text-blue-800',
    medium: 'bg-yellow-100 text-yellow-800',
    high: 'bg-red-100 text-red-800',
  };

  return (
    <motion.div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{ scale: isDragging ? 1 : 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Card className={`mb-3 cursor-move transition-all ${isDragging ? 'shadow-lg' : 'hover:shadow-md'}`}>
        <CardHeader className="p-3">
          <motion.div 
            className="flex items-center justify-between"
            layout
          >
            <CardTitle className="text-base font-medium">{task.title}</CardTitle>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => onEdit(task)}>
                  <Pencil className="mr-2 h-4 w-4" />
                  تعديل
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => onDelete(task.id)}
                  className="text-red-600"
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  حذف
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </motion.div>
        </CardHeader>
        <CardContent className="p-3 pt-0">
          <motion.p 
            className="text-sm text-gray-600 mb-2"
            layout
          >
            {task.description}
          </motion.p>
          <motion.div 
            className="flex flex-wrap gap-2"
            layout
          >
            {task.priority && (
              <span className={`text-xs px-2 py-1 rounded-full ${priorityColors[task.priority]}`}>
                {task.priority === 'low' ? 'منخفضة' : task.priority === 'medium' ? 'متوسطة' : 'عالية'}
              </span>
            )}
            {task.labels?.map((label, index) => (
              <span 
                key={index}
                className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full"
              >
                {label}
              </span>
            ))}
          </motion.div>
          {task.dueDate && (
            <div className="mt-2 text-xs text-gray-500">
              تاريخ الاستحقاق: {new Date(task.dueDate).toLocaleDateString('ar-EG')}
            </div>
          )}
          {task.assignee && (
            <div className="mt-1 text-xs text-gray-500">
              المسؤول: {task.assignee}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TaskCard;
