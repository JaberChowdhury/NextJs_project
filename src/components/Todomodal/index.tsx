import useModal from "@/store/useModal";
import type { TODO } from "@/store/useTodo";
import useTodo from "@/store/useTodo";
import {
  Badge,
  Button,
  Card,
  CardSection,
  Divider,
  Group,
  List,
  Stack,
  Text,
  Title,
} from "@mantine/core";

const TodoModal = ({ todo }: { todo: TODO }) => {
  const { closeModal } = useModal();
  const { deleteTodo } = useTodo();
  const handleClick = (id: string) => {
    deleteTodo(id);
    closeModal();
  };
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Stack gap="md">
        <Title order={3}>{todo.title}</Title>
        <Text color="dimmed">{todo.description}</Text>

        <Group gap="xs">
          <Badge color="blue" variant="light">
            Status: {todo.status}
          </Badge>
          <Badge color="red" variant="light">
            Priority: {todo.priority}
          </Badge>
        </Group>

        <Divider my="sm" />

        <Text size="sm" className="font-[500]">
          Tags:
        </Text>
        <Group gap="xs">
          {todo.tags.map((tag, index) => (
            <Badge key={index} color="teal" variant="light">
              {tag}
            </Badge>
          ))}
        </Group>

        {todo.assignee && (
          <>
            <Divider my="sm" />
            <Text size="sm" className="font-[500]">
              Assignee:
            </Text>
            <Text size="sm">
              {todo.assignee.name} ({todo.assignee.email || "No email"})
            </Text>
          </>
        )}

        {todo.subtasks && todo.subtasks.length > 0 && (
          <>
            <Divider my="sm" />
            <Text size="sm" className="font-[500]">
              Subtasks:
            </Text>
            <List spacing="xs" size="sm" center>
              {todo.subtasks.map((subtask) => (
                <List.Item key={subtask.id}>{subtask.title}</List.Item>
              ))}
            </List>
          </>
        )}

        <Divider my="sm" />
        <Text size="xs" color="dimmed">
          Created At: {todo.createdAt || "N/A"}
        </Text>
        <Text size="xs" color="dimmed">
          Completed At: {todo.compleatedAt || "N/A"}
        </Text>
        <Text size="xs" color="dimmed">
          Deleted At: {todo.deletedAt || "N/A"}
        </Text>
      </Stack>
      <CardSection className="w-full flex justify-end items-end py-3">
        <Button
          onClick={() => handleClick(todo.id)}
          variant="outline"
          color="red"
        >
          Delete
        </Button>
      </CardSection>
    </Card>
  );
};

export default TodoModal;
