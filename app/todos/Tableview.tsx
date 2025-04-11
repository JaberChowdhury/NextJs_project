"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import { format } from "date-fns";
import {
  MoreHorizontal,
  Plus,
  Archive,
  Trash2,
  CheckCircle,
  Clock,
  Circle,
} from "lucide-react";
import useTodo, { TODO, TodoStatus, Priority } from "@/store/useTodo";

export default function Tableview() {
  // Sample data - replace with your actual data
  const { todos } = useTodo();

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Status</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Priority</TableHead>
          <TableHead>Tags</TableHead>
          <TableHead>Assignee</TableHead>
          <TableHead>Created</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="max-h-screen overflow-scroll">
        {todos
          // .filter(
          //   (t) => !t.isArchived && t.status !== TodoStatus.FINISHED
          // )
          .map((todo) => (
            <TableRow key={todo.id}>
              <TableCell>
                <StatusBadge status={todo.status} />
              </TableCell>
              <TableCell className="font-medium">
                <div className="flex items-center space-x-2">
                  <Checkbox />
                  <span>{todo.title.slice(20)}.........</span>
                </div>
                {todo.description && (
                  <p className="text-sm text-muted-foreground mt-1 text-wrap">
                    {todo.description.slice(10)}..........
                  </p>
                )}
              </TableCell>
              <TableCell>
                <PriorityBadge priority={todo.priority} />
              </TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  {todo.tags.map((tag) => (
                    <Badge
                      variant="secondary"
                      className="border border-slate-200"
                      key={tag}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </TableCell>
              <TableCell>
                {todo.assignee && (
                  <div className="flex items-center">
                    <Avatar className="h-8 w-8 mr-2">
                      <AvatarImage src="" />
                      <AvatarFallback>
                        {todo.assignee.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <span>{todo.assignee.name}</span>
                  </div>
                )}
              </TableCell>
              <TableCell>
                {todo.createdAt &&
                  format(new Date(todo.createdAt), "MMM dd, yyyy")}
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Mark Complete
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Archive className="mr-2 h-4 w-4" />
                      Archive
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}

function StatusBadge({ status }: { status: TodoStatus }) {
  const statusMap = {
    [TodoStatus.FINISHED]: {
      label: "Finished",
      icon: CheckCircle,
      color: "bg-green-100 text-green-800",
    },
    [TodoStatus.WORKING]: {
      label: "Working",
      icon: Circle,
      color: "bg-blue-100 text-blue-800",
    },
    [TodoStatus.PENDING]: {
      label: "Pending",
      icon: Clock,
      color: "bg-yellow-100 text-yellow-800",
    },
  };

  const statusInfo = statusMap[status];

  return (
    <Badge className={statusInfo.color}>
      <statusInfo.icon className="mr-1 h-3 w-3" />
      {statusInfo.label}
    </Badge>
  );
}

function PriorityBadge({ priority }: { priority: Priority }) {
  const priorityMap = {
    [Priority.LOW]: {
      label: "Low",
      color: "bg-gray-100 text-gray-800",
    },
    [Priority.MEDIUM]: {
      label: "Medium",
      color: "bg-blue-100 text-blue-800",
    },
    [Priority.HIGH]: {
      label: "High",
      color: "bg-orange-100 text-orange-800",
    },
    [Priority.URGENT]: {
      label: "Urgent",
      color: "bg-red-100 text-red-800",
    },
  };

  const priorityInfo = priorityMap[priority];

  return <Badge className={priorityInfo.color}>{priorityInfo.label}</Badge>;
}
