import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Tableview from "./Tableview";
import Listview from "./Listview";
import Gridview from "./Gridview";
import { TodoStatus, Priority } from "@/store/useTodo";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@radix-ui/react-select";
import { Plus } from "lucide-react";

export default function TabsDemo() {
  return (
    <div className="w-full min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Todo Management</h1>

      <div className="flex justify-between items-center mb-6 bg-orange-100">
        <div className="flex space-x-2">
          <Input placeholder="Search todos..." className="w-[300px]" />
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value={TodoStatus.PENDING}>Pending</SelectItem>
              <SelectItem value={TodoStatus.WORKING}>Working</SelectItem>
              <SelectItem value={TodoStatus.FINISHED}>Finished</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Priorities</SelectItem>
              <SelectItem value={Priority.LOW}>Low</SelectItem>
              <SelectItem value={Priority.MEDIUM}>Medium</SelectItem>
              <SelectItem value={Priority.HIGH}>High</SelectItem>
              <SelectItem value={Priority.URGENT}>Urgent</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Todo
        </Button>
      </div>

      <Tabs defaultValue="table" className="w-full">
        <div className="w-full flex justify-end items-end">
          <TabsList className="w-[400px] grid  grid-cols-3">
            <TabsTrigger value="table">Table</TabsTrigger>
            <TabsTrigger value="list">List</TabsTrigger>
            <TabsTrigger value="grid">Grid</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="table">
          <Tableview />
        </TabsContent>
        <TabsContent value="list">
          <Listview />
        </TabsContent>
        <TabsContent value="grid">
          <Gridview />
        </TabsContent>
      </Tabs>
    </div>
  );
}
