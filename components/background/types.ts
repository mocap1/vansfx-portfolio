export type ShapeType =
  | "doubleSquare"
  | "cornerSquare"
  | "motionFrame";

export type Size =
  | "sm"
  | "md"
  | "lg"
  | "xl";

export type Anchor =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "left"
  | "right"
  | "top"
  | "bottom"
  | "center";

export type MotionType =
  | "idle"
  | "orbitSlow"
  | "orbitMedium";

export interface SceneObject {
  id: string;

  shape: ShapeType;

  size: Size;

  anchor: Anchor;

  offsetX: number;

  offsetY: number;

  rotation: number;

  opacity: number;

  motion: MotionType;
}