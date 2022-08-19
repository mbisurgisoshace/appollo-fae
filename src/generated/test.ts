import React from "react"
import "./styles.css"
type LayoutDirection = "row" | "column"
interface SectionProps {
  style?: any;
  children: React.ReactNode;
  layoutDirection?: LayoutDirection;
}
export default function Section({
  style,
  children,
  layoutDirection = "column",
}: SectionProps) {
  return null
}
