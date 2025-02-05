import React from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
}

interface KanbanBoardProps {
  tasks: Task[];
}

const KanbanBoard: React.FC<KanbanBoardProps> = ({ tasks }) => {
  const [items, setItems] = React.useState(tasks);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  const statuses = ['جاري', 'قيد الانتظار', 'مكتمل'];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {statuses.map((status) => (
        <div
          key={status}
          className="bg-white p-4 rounded-lg shadow"
        >
          <h3 className="text-lg font-semibold mb-4 text-right">{status}</h3>
          <div className="space-y-3">
            {items
              .filter((task) => task.status === status)
              .map((task) => (
                <div
                  key={task.id}
                  className="bg-gray-50 p-3 rounded-md shadow-sm"
                >
                  <h4 className="font-medium text-right">{task.title}</h4>
                  <p className="text-sm text-gray-600 text-right">{task.description}</p>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
