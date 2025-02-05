import React, { useState } from 'react';
import {
  DndContext,
  DragOverlay,
  closestCorners,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragStartEvent,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  horizontalListSortingStrategy,
} from '@dnd-kit/sortable';
import TaskCard, { Task } from './TaskCard';
import { Button } from "@/components/ui/button";
import { Plus } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion, AnimatePresence } from 'framer-motion';

const defaultColumns = {
  'قيد الانتظار': {
    id: 'pending',
    title: 'قيد الانتظار',
    taskIds: [],
  },
  'جاري التنفيذ': {
    id: 'in-progress',
    title: 'جاري التنفيذ',
    taskIds: [],
  },
  'مكتمل': {
    id: 'completed',
    title: 'مكتمل',
    taskIds: [],
  },
};

interface Column {
  id: string;
  title: string;
  taskIds: number[];
}

interface EnhancedKanbanBoardProps {
  initialTasks?: Task[];
}

const EnhancedKanbanBoard: React.FC<EnhancedKanbanBoardProps> = ({ initialTasks = [] }) => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [columns, setColumns] = useState<Record<string, Column>>(defaultColumns);
  const [activeId, setActiveId] = useState<number | null>(null);
  const [isNewTaskDialogOpen, setIsNewTaskDialogOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    setActiveId(active.id as number);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const activeTask = tasks.find(t => t.id === active.id);
      if (activeTask) {
        const updatedTasks = tasks.map(task =>
          task.id === active.id
            ? { ...task, status: over.id as string }
            : task
        );
        setTasks(updatedTasks);
      }
    }

    setActiveId(null);
  };

  const handleAddTask = (newTask: Partial<Task>) => {
    const task: Task = {
      id: Date.now(),
      title: newTask.title || '',
      description: newTask.description || '',
      status: 'قيد الانتظار',
      priority: newTask.priority || 'medium',
      dueDate: newTask.dueDate,
      assignee: newTask.assignee,
      labels: newTask.labels || [],
    };
    setTasks([...tasks, task]);
    setIsNewTaskDialogOpen(false);
  };

  const handleEditTask = (task: Task) => {
    setEditingTask(task);
    setIsNewTaskDialogOpen(true);
  };

  const handleUpdateTask = (updatedTask: Partial<Task>) => {
    if (editingTask) {
      const updated = tasks.map(task =>
        task.id === editingTask.id
          ? { ...task, ...updatedTask }
          : task
      );
      setTasks(updated);
      setEditingTask(null);
      setIsNewTaskDialogOpen(false);
    }
  };

  const handleDeleteTask = (taskId: number) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const TaskForm = ({ onSubmit, initialValues }: { onSubmit: (task: Partial<Task>) => void, initialValues?: Task }) => {
    const [formData, setFormData] = useState({
      title: initialValues?.title || '',
      description: initialValues?.description || '',
      priority: initialValues?.priority || 'medium',
      dueDate: initialValues?.dueDate || '',
      assignee: initialValues?.assignee || '',
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit(formData);
    };

    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="title">العنوان</Label>
          <Input
            id="title"
            value={formData.title}
            onChange={e => setFormData({ ...formData, title: e.target.value })}
            required
          />
        </div>
        <div>
          <Label htmlFor="description">الوصف</Label>
          <Textarea
            id="description"
            value={formData.description}
            onChange={e => setFormData({ ...formData, description: e.target.value })}
          />
        </div>
        <div>
          <Label htmlFor="priority">الأولوية</Label>
          <Select
            value={formData.priority}
            onValueChange={value => setFormData({ ...formData, priority: value as 'low' | 'medium' | 'high' })}
          >
            <SelectTrigger>
              <SelectValue placeholder="اختر الأولوية" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">منخفضة</SelectItem>
              <SelectItem value="medium">متوسطة</SelectItem>
              <SelectItem value="high">عالية</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="dueDate">تاريخ الاستحقاق</Label>
          <Input
            id="dueDate"
            type="date"
            value={formData.dueDate}
            onChange={e => setFormData({ ...formData, dueDate: e.target.value })}
          />
        </div>
        <div>
          <Label htmlFor="assignee">المسؤول</Label>
          <Input
            id="assignee"
            value={formData.assignee}
            onChange={e => setFormData({ ...formData, assignee: e.target.value })}
          />
        </div>
        <Button type="submit" className="w-full">
          {initialValues ? 'تحديث المهمة' : 'إضافة مهمة'}
        </Button>
      </form>
    );
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-end">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Dialog open={isNewTaskDialogOpen} onOpenChange={setIsNewTaskDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                إضافة مهمة جديدة
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{editingTask ? 'تعديل المهمة' : 'مهمة جديدة'}</DialogTitle>
              </DialogHeader>
              <TaskForm
                onSubmit={editingTask ? handleUpdateTask : handleAddTask}
                initialValues={editingTask || undefined}
              />
            </DialogContent>
          </Dialog>
        </motion.div>
      </div>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.entries(columns).map(([status, column]) => (
            <motion.div
              key={column.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="p-4 rounded-lg"
            >
              <h3 className="text-lg font-semibold mb-4 text-center">{column.title}</h3>
              <SortableContext
                items={tasks.filter(task => task.status === status).map(task => task.id)}
                strategy={horizontalListSortingStrategy}
              >
                <motion.div
                  layout
                  className="space-y-2"
                >
                  <AnimatePresence>
                    {tasks
                      .filter(task => task.status === status)
                      .map(task => (
                        <TaskCard
                          key={task.id}
                          task={task}
                          onEdit={handleEditTask}
                          onDelete={handleDeleteTask}
                        />
                      ))}
                  </AnimatePresence>
                </motion.div>
              </SortableContext>
            </motion.div>
          ))}
        </div>

        <DragOverlay>
          {activeId ? (
            <TaskCard
              task={tasks.find(t => t.id === activeId)!}
              onEdit={handleEditTask}
              onDelete={handleDeleteTask}
            />
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
};

export default EnhancedKanbanBoard;
