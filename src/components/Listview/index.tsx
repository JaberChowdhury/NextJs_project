import React from "react";
import { Card, Text, Badge, Group, Stack } from "@mantine/core";
import useTodo from "@/store/useTodo";
import useModal from "@/store/useModal";
import TodoModal from "../Todomodal";

const Listview = () => {
  const { todos } = useTodo();
  const { openModal, setComponent } = useModal();
  const handleClick = (id: string) => {
    openModal();
    setComponent(
      <TodoModal todo={todos.filter((item) => item.id === id)[0]} />,
    );
  };
  return (
    <Stack gap="md">
      {todos.map((todo) => (
        <Card
          onClick={() => handleClick(todo.id)}
          key={todo.id}
          shadow="sm"
          padding="lg"
          radius="md"
          withBorder
        >
          <Group mb="xs">
            <Text className="font-[500]">{todo.title}</Text>
            <Badge color="blue">{todo.status}</Badge>
          </Group>

          <Text size="sm" color="dimmed" mb="md">
            {todo.description}
          </Text>

          <Group gap="xs" mb="md">
            {todo.tags.map((tag, index) => (
              <Badge key={index} color="gray" variant="light">
                {tag}
              </Badge>
            ))}
          </Group>

          <Group>
            <Badge color="red">{todo.priority}</Badge>
            <Text size="xs" color="dimmed">
              Created:{" "}
              {todo.createdAt
                ? new Date(todo.createdAt).toLocaleDateString()
                : "N/A"}
            </Text>
          </Group>
        </Card>
      ))}
    </Stack>
  );
};

export default Listview;
