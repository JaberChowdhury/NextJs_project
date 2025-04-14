import React from "react";
import { Grid, Card, Text, Badge, Group, Button } from "@mantine/core";
import useTodo, { TODO, TodoStatus, Priority } from "@/store/useTodo";
import useModal from "@/store/useModal";
import TodoModal from "../Todomodal";

const GridView = () => {
  const { todos } = useTodo();
  const getStatusColor = (status: TodoStatus) => {
    switch (status) {
      case TodoStatus.FINISHED:
        return "green";
      case TodoStatus.WORKING:
        return "blue";
      case TodoStatus.PENDING:
        return "orange";
      default:
        return "gray";
    }
  };

  const getPriorityColor = (priority: Priority) => {
    switch (priority) {
      case Priority.LOW:
        return "gray";
      case Priority.MEDIUM:
        return "blue";
      case Priority.HIGH:
        return "red";
      case Priority.URGENT:
        return "pink";
      default:
        return "gray";
    }
  };

  const { openModal, setComponent } = useModal();
  const handleClick = (id: string) => {
    openModal();
    setComponent(
      <TodoModal todo={todos.filter((item) => item.id === id)[0]} />,
    );
  };
  return (
    <Grid>
      {todos.map((todo) => (
        <Grid.Col key={todo.id} span={4} onClick={() => handleClick(todo.id)}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Group mb="xs">
              <Text className="font-[500]">{todo.title}</Text>
              <Badge color={getStatusColor(todo.status)}>{todo.status}</Badge>
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
              <Badge color={getPriorityColor(todo.priority)}>
                {todo.priority}
              </Badge>
            </Group>
          </Card>
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default GridView;
