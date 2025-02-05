declare module '@hello-pangea/dnd' {
  import * as React from 'react';

  export type DraggableId = string;
  export type DroppableId = string;
  export type DragStart = any;
  export type DropResult = any;
  export type DragUpdate = any;
  export type DraggableLocation = {
    droppableId: DroppableId;
    index: number;
  };

  export interface DraggableProps {
    draggableId: DraggableId;
    index: number;
    children(provided: DraggableProvided, snapshot: DraggableStateSnapshot): React.ReactElement;
  }

  export interface DroppableProps {
    droppableId: DroppableId;
    type?: string;
    children(provided: DroppableProvided, snapshot: DroppableStateSnapshot): React.ReactElement;
  }

  export interface DraggableProvided {
    innerRef: (element: HTMLElement | null) => void;
    draggableProps: any;
    dragHandleProps: any | null;
  }

  export interface DroppableProvided {
    innerRef: (element: HTMLElement | null) => void;
    droppableProps: any;
    placeholder?: React.ReactElement | null;
  }

  export interface DraggableStateSnapshot {
    isDragging: boolean;
    draggingOver: DroppableId | null;
  }

  export interface DroppableStateSnapshot {
    isDraggingOver: boolean;
    draggingOverWith: DraggableId | null;
  }

  export interface DragDropContextProps {
    onDragEnd: (result: DropResult) => void;
    onDragStart?: (initial: DragStart) => void;
    onDragUpdate?: (initial: DragUpdate) => void;
    children: React.ReactNode;
  }

  export class Draggable extends React.Component<DraggableProps> {}
  export class Droppable extends React.Component<DroppableProps> {}
  export class DragDropContext extends React.Component<DragDropContextProps> {}
}
