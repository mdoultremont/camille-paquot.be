import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "../components/Pages";
export const Route = createFileRoute("/")({ component: HomePage });
