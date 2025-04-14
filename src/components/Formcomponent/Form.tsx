import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  TextInput,
  Textarea,
  MultiSelect,
  Select,
  Group,
  Button,
  Stack,
} from "@mantine/core";
import useTodo, { type TODO, TodoStatus, Priority } from "@/store/useTodo";
import useModal from "@/store/useModal";

const todoSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  tags: z.array(z.string()).nonempty("At least one tag is required"),
  status: z.nativeEnum(TodoStatus, { required_error: "Status is required" }),
  priority: z.nativeEnum(Priority, { required_error: "Priority is required" }),
  assignee: z
    .object({
      name: z.string().min(1, "Assignee name is required"),
      email: z.string().email("Invalid email").optional(),
    })
    .optional(),
});

export type TodoFormValues = z.infer<typeof todoSchema>;

const Formcomponent = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TodoFormValues>({
    resolver: zodResolver(todoSchema),
    defaultValues: {
      title: "",
      description: "",
      tags: [],
      status: TodoStatus.PENDING,
      priority: Priority.LOW,
      assignee: { name: "", email: "" },
    },
  });

  const { addTodo } = useTodo();
  const { closeModal } = useModal();

  const onSubmit = (data: TodoFormValues) => {
    //@ts-ignore
    const newTodo: TODO = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      compleatedAt: null,
      deletedAt: null,
      isArchived: false,
      subtasks: [],
      ...data,
    };

    console.log("New TODO:", newTodo);
    addTodo(newTodo);
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack gap="md">
        <TextInput
          label="Title"
          placeholder="Enter title"
          error={errors.title?.message}
          {...control.register("title")}
        />

        <Textarea
          label="Description"
          placeholder="Enter description"
          error={errors.description?.message}
          {...control.register("description")}
        />

        <Controller
          name="tags"
          control={control}
          render={({ field }) => (
            <MultiSelect
              label="Tags"
              placeholder="Add tags"
              data={["Work", "Personal", "Urgent", "Low Priority"]}
              error={errors.tags?.message}
              {...field}
            />
          )}
        />

        <Controller
          name="status"
          control={control}
          render={({ field }) => (
            <Select
              label="Status"
              placeholder="Select status"
              data={[
                { value: TodoStatus.PENDING, label: "Pending" },
                { value: TodoStatus.WORKING, label: "Working" },
                { value: TodoStatus.FINISHED, label: "Finished" },
              ]}
              error={errors.status?.message}
              {...field}
            />
          )}
        />

        <Controller
          name="priority"
          control={control}
          render={({ field }) => (
            <Select
              label="Priority"
              placeholder="Select priority"
              data={[
                { value: Priority.LOW, label: "Low" },
                { value: Priority.MEDIUM, label: "Medium" },
                { value: Priority.HIGH, label: "High" },
                { value: Priority.URGENT, label: "Urgent" },
              ]}
              error={errors.priority?.message}
              {...field}
            />
          )}
        />

        <Group grow>
          <TextInput
            label="Assignee Name"
            placeholder="Enter assignee name"
            error={errors.assignee?.name?.message}
            {...control.register("assignee.name")}
          />
          <TextInput
            label="Assignee Email"
            placeholder="Enter assignee email"
            error={errors.assignee?.email?.message}
            {...control.register("assignee.email")}
          />
        </Group>

        <Group>
          <Button type="submit" color="blue">
            Submit
          </Button>
        </Group>
      </Stack>
    </form>
  );
};

export default Formcomponent;
